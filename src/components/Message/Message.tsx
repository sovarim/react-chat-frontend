import styled, { css } from 'styled-components';
import React, { FC } from 'react';

interface MessageProps {
  children: React.ReactNode | React.ReactChildren;
  isMe?: boolean;
}

const MessageRoot = styled.div<Omit<MessageProps, 'children'>>`
  display: flex;
  padding: 0.5rem;
  ${({ isMe }) =>
    !isMe
      ? css`
          justify-content: flex-start;
        `
      : css`
          justify-content: flex-end;
        `}
`;

const MessageText = styled.span<Omit<MessageProps, 'children'>>`
  white-space: pre-wrap;
  word-break: break-word;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.primary.light};
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  max-width: 80%;
  ${({ isMe }) =>
    !isMe
      ? css`
          border-radius: 15px 10px 10px 0;
        `
      : css`
          border-radius: 10px 15px 0 10px;
        `}
`;

const Message: FC<MessageProps> = ({ children, isMe }) => {
  return (
    <MessageRoot isMe={isMe}>
      <MessageText isMe={isMe}>{children}</MessageText>
    </MessageRoot>
  );
};

export default Message;
