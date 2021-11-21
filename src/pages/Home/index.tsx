import { FC } from 'react';
import { Container } from 'components';
import styled, { css } from 'styled-components/macro';
import Messages from './components/Messages';
import Chats from './components/Chats';

const ChatsSection = styled.section`
  flex: 1 1 28%;
  max-width: 28%;
  min-width: 320px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 0px 3px 0px rgba(34, 60, 80, 0.2);
  position: relative;
  z-index: 100;
`;

const MessagesSection = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  background-color: #e5ddd5ba;
  display: flex;
  flex-direction: column;
`;

const Home: FC = () => {
  return (
    <Container
      fullHeight
      display="flex"
      css={css`
        position: relative;
      `}
    >
      <ChatsSection>
        <Chats />
      </ChatsSection>
      <MessagesSection>
        <Messages />
      </MessagesSection>
    </Container>
  );
};

export default Home;
