import { FC, useState, MouseEvent } from 'react';
import styled, { css } from 'styled-components/macro';
import { Container, Tabs } from 'components';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

// const Tabs = styled.div`
//   display: flex;
//   justify-content: center;
//   position: relative;
//   &::after {
//     content: '';
//     position: absolute;
//     height: 0.125rem;
//     width: 50%;
//     bottom: 0;
//     left: 0;
//     transition: all 0.3s ease-out;
//     background: ${({ theme }) => theme.colors.primary.main};
//   }
// `;

const Tab = styled.button`
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
  transition: all 0.2s linear;
  flex: 0;
  height: auto;
  overflow: hidden;
`;

const Login: FC = () => {
  return (
    <Container fullHeight display="flex">
      <Container
        maxWidth={600}
        verticalCenter
        horizontalCenter
        css={css`
          border-radius: ${({ theme }) => theme.shape.borderRadius};
          box-shadow: ${({ theme }) => theme.shadows[0]};
        `}
      >
        <Tabs>
          <Tab>Авторизация</Tab>
          <Tab>Регистрация</Tab>
        </Tabs>
        <TabPanel>{(0 == 0 && <LoginForm />) || <RegisterForm />}</TabPanel>
      </Container>
    </Container>
  );
};

export default Login;
