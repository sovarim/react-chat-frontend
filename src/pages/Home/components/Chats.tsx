import { FC, useState, useMemo } from 'react';
import { TextField, Icon, ChatList, ChatListItem } from 'components';
import styled from 'styled-components';
import { useGetChatsQuery } from 'api/chatApi';
import { useAuth } from 'hooks';

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
  const { data: chats } = useGetChatsQuery();
  const [active, setActive] = useState<string>('');
  const { me } = useAuth();

  const transformedChats = useMemo(
    () =>
      chats?.map((chat) => ({
        _id: chat._id,
        lastMessage: chat.lastMessage,
        partner: chat.users.find((user) => user._id !== me?._id),
      })),
    [chats, me],
  );

  // const [search, setSearch] = useState()
  const { data: users } = useGetUsersQuery({ search: 's' }, { skip: true });

  console.log(users);

  return (
    <>
      <SearchBoxContainer>
        <TextField fullWidth placeholder="Поиск" startIcon={<Icon icon={faSearch} size="xs" />} />
      </SearchBoxContainer>
      <ChatListContainer>
        <ChatList>
          {transformedChats?.map((chat) => (
            <ChatListItem
              key={chat._id}
              as="button"
              isActive={active === chat._id}
              onClick={() => setActive(chat._id)}
              chatName={chat.partner?.username}
              lastMessage={chat.lastMessage.text}
            />
          ))}
        </ChatList>
      </ChatListContainer>
    </>
  );
};

export default Chats;
