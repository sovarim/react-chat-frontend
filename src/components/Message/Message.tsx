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
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.text2};
  max-width: 80%;
  box-shadow: ${({ theme }) => theme.shadows[1]};
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
