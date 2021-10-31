import React, { FC } from 'react';
import styled from 'styled-components';

interface AuthLayoutProps {
  children: React.ReactNode | React.ReactChildren;
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 5rem 0.5rem 0.5rem 0.5rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary.light};
`;

const Container = styled.div`
  flex: 1 1 auto;
  max-width: 400px;
  height: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  padding: 1rem;
`;

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  console.log(children);
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default AuthLayout;
