import React, { FC } from 'react';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Icon, Text } from '../components';

interface AuthLayoutProps {
  children: React.ReactNode | React.ReactChildren;
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  flex: 1 1 auto;
  max-width: 800px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  console.log(children);
  return (
    <Wrapper>
      <Container>
        <Icon icon={faSignInAlt} size="3x" display="block" />
        <Text as="h1">asd</Text>
      </Container>
    </Wrapper>
  );
};

export default AuthLayout;
