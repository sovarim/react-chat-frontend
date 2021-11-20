import { FC, useState, MouseEvent } from 'react';
import styled, { css } from 'styled-components/macro';
import { Container } from 'components';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 0.125rem;
    width: 50%;
    bottom: 0;
    left: 0%;
    transition: all 0.3s ease-out;
    background: ${({ theme }) => theme.colors.primary.main};
  }
`;

const Tab = styled.button<{ isActive?: boolean }>`
  flex: 1 1 50%;
  border: none;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  @media (hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

const TabPanel = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
`;

const Login: FC = () => {
  const [activeTab, setActiveTab] = useState<string | number>(0);

  const onActiveTabChange = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveTab(e.currentTarget.dataset?.idx || 1);
  };

  return (
    <Container
      fullHeight
      display="flex"
      css={css`
        padding: 0.5rem;
      `}
    >
      <Container
        maxWidth={600}
        verticalCenter
        horizontalCenter
        css={css`
          border-radius: ${({ theme }) => theme.shape.borderRadius};
          box-shadow: ${({ theme }) => theme.shadows[0]};
        `}
      >
        <Tabs
          css={css`
            &::after {
              left: ${`calc(${activeTab} * 50%)`};
            }
          `}
        >
          <Tab isActive data-idx={0} onClick={onActiveTabChange}>
            Авторизация
          </Tab>
          <Tab data-idx={1} onClick={onActiveTabChange}>
            Регистрация
          </Tab>
        </Tabs>
        <TabPanel>{(activeTab == 0 && <LoginForm />) || <RegisterForm />}</TabPanel>
      </Container>
    </Container>
  );
};

export default Login;
