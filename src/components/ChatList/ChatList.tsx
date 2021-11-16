import React, { FC } from 'react';
import styled from 'styled-components';

interface ChatListProps {
  children?: React.ReactNode | React.ReactChildren;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  & > * {
    padding: 0.5rem 0;
  }
`;

const ChatList: FC<ChatListProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ChatList;
