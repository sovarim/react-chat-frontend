import { FC, useState, useMemo, ChangeEvent, useRef } from 'react';
import { TextField, Icon, ChatList, ChatListItem, Popper, Text } from 'components';
import styled, { css } from 'styled-components/macro';
import { useGetChatsQuery } from 'api/chatApi';
import { useAuth } from 'hooks';
import { useDebounce, useBoolean, useFocusWithin } from 'ahooks';
import { useAppSelector, useAppDispatch } from 'store';
import { selectCurrentChat, setCurrent } from 'store/features/chatSlice';

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

  const dispatch = useAppDispatch();
  const { data: chats } = useGetChatsQuery();
  const currentChat = useAppSelector(selectCurrentChat);

  const transformedChats = useMemo(
    () =>
      chats?.map((chat) => ({
        _id: chat._id,
        lastMessage: chat.lastMessage,
        partner: chat.users.find((user) => user._id !== me?._id),
      })),
    [chats, me],
  );
  const handleClickChat = (chatId: string) => {
    dispatch(setCurrent(chatId));
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
                    console.log('click');
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
              isActive={currentChat === chat._id}
              chatName={chat.partner?.username}
              lastMessage={chat.lastMessage.text}
              onClick={() => handleClickChat(chat._id)}
              avatarSrc={chat.partner?.avatar}
            />
          ))}
        </ChatList>
      </ChatListContainer>
    </>
  );
};

export default Chats;
