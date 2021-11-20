import styled, { css } from 'styled-components/macro';
import {
  TextField,
  Icon,
  ChatList,
  ChatListItem,
  Message,
  Container,
  IconButton,
  Avatar,
  Text,
} from 'components';
import { faSearch, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

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

const ChatListSection = styled.section`
  flex: 1 1 28%;
  max-width: 28%;
  min-width: 320px;
  box-shadow: 1px 0px 3px 0px rgba(34, 60, 80, 0.2);
  position: relative;
  z-index: 10;
`;

const SearchBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 1rem;
`;

const ChatListContainer = styled.div`
  height: calc(100% - 45px);
`;

const MessagesSection = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  background-color: #e5ddd5ba;
  display: flex;
  flex-direction: column;
`;

const MessagesHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 45px;
  align-items: center;
  padding: 0 0.75rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MessagesContainer = styled.div`
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1rem 0.25rem 1rem;
`;

const MessageInputContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.15rem 1rem;
`;

const Home = () => {
  const [active, setActive] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const onChange = (e: any) => {
    setMessage(e.target.value);
  };

  const addMessage = () => {
    if (!message) return;
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <Container fullHeight display="flex">
      <ChatListSection>
        <SearchBoxContainer>
          <TextField fullWidth placeholder="Поиск" icon={<Icon icon={faSearch} size="xs" />} />
        </SearchBoxContainer>
        <ChatListContainer>
          <ChatList>
            {chats.map((props, idx) => (
              <ChatListItem
                as="button"
                isActive={active === idx}
                onClick={() => setActive(idx)}
                key={idx}
                {...props}
              />
            ))}
          </ChatList>
        </ChatListContainer>
      </ChatListSection>
      <MessagesSection>
        <MessagesHeader>
          <Avatar
            isSmall
            imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.naAZE2Vx6EidFLMoWMbYtQAAAA%26pid%3DApi&f=1"
          />
          <div
            css={css`
              padding-left: 0.75rem;
            `}
          >
            <Text
              variant="text2"
              as="span"
              css={css`
                line-height: 0.4rem;
                display: block;
                padding-top: 0.25rem;
              `}
            >
              Sovarim
            </Text>
            <Text as="span" variant="caption" light fontWeight={400}>
              в сети
            </Text>
          </div>
        </MessagesHeader>
        <PerfectScrollbar>
          <MessagesContainer>
            {messages.map((message, idx) => (
              <Message key={idx} isMe>
                {message}
              </Message>
            ))}
          </MessagesContainer>
        </PerfectScrollbar>
        <MessageInputContainer>
          <TextField
            fullWidth
            multiline
            placeholder="Введите сообщение"
            value={message}
            onChange={onChange}
            maxRows={7}
          />
          <div
            css={css`
              padding-left: 0.5rem;
            `}
          >
            <IconButton onClick={addMessage}>
              <Icon icon={faShare} size="lg" />
            </IconButton>
          </div>
        </MessageInputContainer>
      </MessagesSection>
    </Container>
  );
};

export default Home;
