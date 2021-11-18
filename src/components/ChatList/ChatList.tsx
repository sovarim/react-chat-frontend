import React, { FC } from 'react';
import styled from 'styled-components';

interface ChatListProps {
  children?: React.ReactNode | React.ReactChildren;
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ChatList: FC<ChatListProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default ChatList;
