import React, { FC } from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

interface ChatListProps {
  children?: React.ReactNode | React.ReactChildren;
}

const Root = styled.div`
  width: 100%;
`;

const ChatList: FC<ChatListProps> = ({ children }) => {
  return (
    <PerfectScrollbar>
      <Root>{children}</Root>
    </PerfectScrollbar>
  );
};

export default ChatList;
