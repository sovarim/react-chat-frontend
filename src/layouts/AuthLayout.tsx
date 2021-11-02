import React, { FC } from 'react';
import styled from 'styled-components';

interface AuthLayoutProps {
  children: React.ReactNode | React.ReactChildren;
}

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  /* background: ${({ theme }) => theme.colors.primary.light}; */
`;

const Wrapper = styled.div`
  flex: 1 1 auto;
  max-width: 1440px;
  min-height: 100%;
  padding: 0 0.5rem;
  display: flex;
  overflow: auto;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;

const Container = styled.section`
  flex: 1 1 400px;
  max-width: 400px;
  margin: auto;
  padding-bottom: 4rem;
`;

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Root>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </Root>
  );
};

export default AuthLayout;
