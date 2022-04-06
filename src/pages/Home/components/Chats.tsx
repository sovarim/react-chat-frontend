import { FC, useState, useMemo, ChangeEvent, useRef } from 'react';
import { TextField, Icon, ChatList, ChatListItem, Popper, Text } from 'components';
import styled, { css } from 'styled-components/macro';
import { useAuth } from 'hooks';
import { useDebounce, useBoolean, useFocusWithin } from 'ahooks';
import { useAppSelector, useAppDispatch } from 'store';
import {
  selectCurrentChat,
  setCurrentChat,
  Chat,
  useGetChatsQuery,
  useCreateChatMutation,
  selectAllChats,
} from 'store/features/chatSlice';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useGetUsersQuery } from 'api/baseApi';

const SearchBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 1rem;
  height: 45px;
  display: flex;
  align-items: center;
`;

const ChatListContainer = styled.div`
  height: calc(100% - 45px);
`;

const Chats: FC = () => {
  const { me } = useAuth();
  useGetChatsQuery();

  const dispatch = useAppDispatch();
  const chats = useAppSelector(selectAllChats);
  const currentChat = useAppSelector(selectCurrentChat);

  const transformedChats = useMemo(
    () =>
      (chats?.map((chat) => ({
        _id: chat._id,
        lastMessage: chat.lastMessage,
        partner: chat.users.find((user) => user._id !== me?._id),
      })) || []) as Chat[],
    [chats, me],
  );
  const updateCurrentChat = (chat: Chat) => {
    dispatch(setCurrentChat(chat));
  };

  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, { wait: 200 });
  const { data: users } = useGetUsersQuery({ search: debouncedSearch }, { skip: !debouncedSearch });

  const handleSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  const searchRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [searchOpen, searchOpenActions] = useBoolean(false);
  useFocusWithin(searchBoxRef, {
    onFocus: searchOpenActions.setTrue,
    onBlur: searchOpenActions.setFalse,
  });

  const [createChat] = useCreateChatMutation();

  const handleCreateChat = async (userId: string) => {
    try {
      await createChat({ userId }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SearchBoxContainer ref={searchBoxRef}>
        <TextField
          fullWidth
          ref={searchRef}
          placeholder="Поиск"
          startIcon={<Icon icon={faSearch} size="xs" />}
          onChange={handleSearch}
        />
        <Popper open={searchOpen} anchorEl={searchRef}>
          <ChatList>
            {!!debouncedSearch && users?.length ? (
              users?.map((user) => (
                <ChatListItem
                  small
                  key={user._id}
                  as="button"
                  chatName={user.username}
                  avatarSrc={user.avatar}
                  onClick={() => {
                    handleCreateChat(user._id);
                    searchOpenActions.setFalse();
                  }}
                />
              ))
            ) : (
              <Text
                light
                variant="caption"
                css={css`
                  margin-left: 1rem;
                `}
              >
                Пусто...
              </Text>
            )}
          </ChatList>
        </Popper>
      </SearchBoxContainer>

      <ChatListContainer>
        <ChatList>
          {transformedChats?.map((chat) => (
            <ChatListItem
              key={chat._id}
              as="button"
              isActive={currentChat?._id === chat._id}
              chatName={chat.partner?.username}
              lastMessage={chat.lastMessage?.text}
              onClick={() => updateCurrentChat(chat)}
              avatarSrc={chat.partner?.avatar}
            />
          ))}
        </ChatList>
      </ChatListContainer>
    </>
  );
};

export default Chats;
