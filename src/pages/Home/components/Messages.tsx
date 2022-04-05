import { ChangeEvent, FC, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { TextField, Icon, Message, Avatar, Text, IconButton } from 'components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'store';
import { selectCurrentChat } from 'store/features/chatSlice';

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

const Messages: FC = () => {
  const currentChat = useAppSelector(selectCurrentChat);

  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const addMessage = () => {
    if (!message) return;
    setMessages([...messages, message]);
    setMessage('');
  };

  if (!currentChat) {
    return <div>Выберите чат</div>;
  }

  return (
    <>
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
          minRows={1}
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
    </>
  );
};

export default Messages;
