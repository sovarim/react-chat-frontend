import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { TextField, Icon, Avatar, Text, IconButton } from 'components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'store';
import {
  selectCurrentChat,
  selectChatById,
  useGetChatMessagesQuery,
} from 'store/features/chatSlice';
import { useKeyPress, useUpdateLayoutEffect } from 'ahooks';
import { useAuth } from 'hooks';
import getWebSocket from 'api/getWebSocket';
import Message from './Message';

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
  const { token, me } = useAuth();
  const ws = getWebSocket({ token });
  const currentChat = useAppSelector(selectCurrentChat);
  const chat = useAppSelector((state) => selectChatById(state, currentChat?._id || ''));

  const { isFetching } = useGetChatMessagesQuery(
    { chatId: currentChat?._id || '' },
    { skip: !currentChat },
  );

  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (!message) return;
    ws.send(
      JSON.stringify({
        chatId: currentChat?._id,
        text: message,
        event: 'message',
      }),
    );
    setMessage('');
    scrollToBottom();
  };

  useKeyPress(
    'enter',
    (e) => {
      e.preventDefault();
      sendMessage();
    },
    { target: inputRef, exactMatch: true },
  );

  const scroll = useRef<HTMLDivElement>();
  const scrollToBottom = () => {
    if (scroll.current) {
      scroll.current.scrollTo(0, scroll.current.scrollHeight);
    }
  };

  useEffect(() => {
    if (scroll.current) return;
    scroll.current = document.querySelector('#messages-scroll') as HTMLDivElement;
  }, [currentChat]);

  useUpdateLayoutEffect(() => {
    /* в некоторых моментах неправильно определяется scrollHeight для PerfectScrollbar. 
    Проблема решается если вызвать функцию синхронно и отложенно. 
    Так как лишних рендеров это всеравно не вызывает, решил оставить. */
    scrollToBottom();
    setTimeout(scrollToBottom);
  }, [chat]);

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
            `}
          >
            {currentChat.partner?.username}
          </Text>
          {/* <Text as="span" variant="caption" light fontWeight={400}>
            в сети
          </Text> */}
        </div>
      </MessagesHeader>
      <PerfectScrollbar id="messages-scroll">
        <MessagesContainer>
          {me &&
            (!isFetching ? (
              chat?.messages?.map((messageId) => (
                <Message key={messageId} id={messageId} authId={me._id} />
              ))
            ) : (
              <>
                Loading...
                {chat?.messages?.map((messageId) => (
                  <Message key={messageId} id={messageId} authId={me._id} />
                ))}
              </>
            ))}
        </MessagesContainer>
      </PerfectScrollbar>
      <MessageInputContainer>
        <TextField
          fullWidth
          multiline
          inputRef={inputRef}
          id="message-input"
          placeholder="Введите сообщение"
          value={message}
          minRows={1}
          maxRows={7}
          onChange={onChange}
        />
        <div
          css={css`
            padding-left: 0.5rem;
          `}
        >
          <IconButton onClick={sendMessage}>
            <Icon icon={faShare} size="lg" />
          </IconButton>
        </div>
      </MessageInputContainer>
    </>
  );
};

export default Messages;
