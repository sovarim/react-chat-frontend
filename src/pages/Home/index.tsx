import { FC } from 'react';
import { Container } from 'components';
import styled, { css } from 'styled-components/macro';
import Messages from './components/Messages';
import Chats from './components/Chats';
import { useGetMeQuery } from 'api/authApi';
import { useAppSelector } from 'store';
import { selectCurrentChat } from 'store/features/chatSlice';
import { useBoolean } from 'ahooks';

const ChatsSection = styled.section<{ isOpen: boolean }>`
  flex: 0 0 28%;
  max-width: 28%;
  min-width: 320px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 0px 3px 0px rgba(34, 60, 80, 0.2);
  z-index: 100;
  ${({ theme }) => theme.breakpoints.tablet} {
    position: fixed;
    flex: 0 0 100%;
    max-width: 100%;
    min-width: 100%;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.2s ease-in-out;
    z-index: 1010;
  }
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
  const { isLoading } = useGetMeQuery();
  const currentChat = useAppSelector(selectCurrentChat);
  const [isOpen, { setTrue, setFalse }] = useBoolean(!currentChat);

  return (
    <Container
      fullHeight
      display="flex"
      css={css`
        position: relative;
      `}
    >
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <ChatsSection isOpen={isOpen}>
            <Chats onSelect={setFalse} />
          </ChatsSection>
          <MessagesSection>
            <Messages onBack={setTrue} />
          </MessagesSection>
        </>
      )}
    </Container>
  );
};

export default Home;
