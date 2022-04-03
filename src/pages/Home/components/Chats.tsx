import { FC, useState } from 'react';
import { TextField, Icon, ChatList, ChatListItem } from 'components';
import styled from 'styled-components';
import { useGetChatsQuery } from 'api/chatApi';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

const chats = [
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eWPbBDJbTaJq0sVa2_gd-QHaHa%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Ivarim',
    lastMessage:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore tempora minus repudiandae optio sunt. Cum dolorem repellendus commodi voluptatum, minima recusandae quidem quod dignissimos esse. Soluta quasi blanditiis rem.',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdrasler.ru%2Fwp-content%2Fuploads%2F2018%2F10%2F334528876.jpg&f=1&nofb=1`,
  },
  {
    chatName: 'Петр Петрович',
    lastMessage: 'Как ты?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftipik.ru%2Fwp-content%2Fuploads%2F2019%2F06%2F%25D0%2590%25D0%25B2%25D0%25B0-%25D0%25B4%25D0%25BB%25D1%258F-%25D0%25BF%25D0%25B0%25D1%2586%25D0%25B0%25D0%25BD%25D0%25BE%25D0%25B2-%25D0%25B2-%25D1%2581%25D1%2582%25D0%25B8%25D0%25BC-%25D0%25BF%25D0%25BE%25D0%25B4%25D0%25B1%25D0%25BE%25D1%2580%25D0%25BA%25D0%25B0004.jpg&f=1&nofb=1`,
  },
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.zn45hY0zS5YhJ0Cz3Vj1dAHaHa%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.naAZE2Vx6EidFLMoWMbYtQAAAA%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Ivarim',
    lastMessage:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore tempora minus repudiandae optio sunt. Cum dolorem repellendus commodi voluptatum, minima recusandae quidem quod dignissimos esse. Soluta quasi blanditiis rem.',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5HdpJnrpoB2_gJOG6iP0ogHaKq%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Петр Петрович',
    lastMessage: 'Как ты?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z82dkVbdRQZRoNIIAHyjGQHaHa%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Петр Петрович',
    lastMessage: 'Как ты?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftipik.ru%2Fwp-content%2Fuploads%2F2019%2F06%2F%25D0%2590%25D0%25B2%25D0%25B0-%25D0%25B4%25D0%25BB%25D1%258F-%25D0%25BF%25D0%25B0%25D1%2586%25D0%25B0%25D0%25BD%25D0%25BE%25D0%25B2-%25D0%25B2-%25D1%2581%25D1%2582%25D0%25B8%25D0%25BC-%25D0%25BF%25D0%25BE%25D0%25B4%25D0%25B1%25D0%25BE%25D1%2580%25D0%25BA%25D0%25B0004.jpg&f=1&nofb=1`,
  },
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.zn45hY0zS5YhJ0Cz3Vj1dAHaHa%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.naAZE2Vx6EidFLMoWMbYtQAAAA%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Ivarim',
    lastMessage:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore tempora minus repudiandae optio sunt. Cum dolorem repellendus commodi voluptatum, minima recusandae quidem quod dignissimos esse. Soluta quasi blanditiis rem.',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5HdpJnrpoB2_gJOG6iP0ogHaKq%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Петр Петрович',
    lastMessage: 'Как ты?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z82dkVbdRQZRoNIIAHyjGQHaHa%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Петр Петрович',
    lastMessage: 'Как ты?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftipik.ru%2Fwp-content%2Fuploads%2F2019%2F06%2F%25D0%2590%25D0%25B2%25D0%25B0-%25D0%25B4%25D0%25BB%25D1%258F-%25D0%25BF%25D0%25B0%25D1%2586%25D0%25B0%25D0%25BD%25D0%25BE%25D0%25B2-%25D0%25B2-%25D1%2581%25D1%2582%25D0%25B8%25D0%25BC-%25D0%25BF%25D0%25BE%25D0%25B4%25D0%25B1%25D0%25BE%25D1%2580%25D0%25BA%25D0%25B0004.jpg&f=1&nofb=1`,
  },
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.zn45hY0zS5YhJ0Cz3Vj1dAHaHa%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.naAZE2Vx6EidFLMoWMbYtQAAAA%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Ivarim',
    lastMessage:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore tempora minus repudiandae optio sunt. Cum dolorem repellendus commodi voluptatum, minima recusandae quidem quod dignissimos esse. Soluta quasi blanditiis rem.',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5HdpJnrpoB2_gJOG6iP0ogHaKq%26pid%3DApi&f=1`,
  },
  {
    chatName: 'Петр Петрович',
    lastMessage: 'Как ты?',
    avatarSrc: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z82dkVbdRQZRoNIIAHyjGQHaHa%26pid%3DApi&f=1`,
  },
];

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
  const [active, setActive] = useState<string>('');
  const { data: chats } = useGetChatsQuery();

  return (
    <>
      <SearchBoxContainer>
        <TextField fullWidth placeholder="Поиск" startIcon={<Icon icon={faSearch} size="xs" />} />
      </SearchBoxContainer>
      <ChatListContainer>
        <ChatList>
          {chats?.map((chat) => (
            <ChatListItem
              key={chat._id}
              as="button"
              isActive={active === chat._id}
              onClick={() => setActive(chat._id)}
              chatName={chat.users[1].username}
              lastMessage={chat.lastMessage.text}
            />
          ))}
        </ChatList>
      </ChatListContainer>
    </>
  );
};

export default Chats;
