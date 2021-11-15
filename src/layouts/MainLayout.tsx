import React, { FC } from 'react';
import styled from 'styled-components';

interface MainLayoutProps {
  children?: React.ReactNode | React.ReactChildren;
}

const Root = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  padding: 1rem;
  &::before {
    position: absolute;
    content: '';
    height: 200px;
    width: 100%;
    background: ${({ theme }) =>
      `linear-gradient(${theme.colors.primary.light} 0%, ${theme.colors.primary.main} 100%)`};
    top: 0;
    left: 0;
    z-index: -1;
  }
  & > div {
    border-radius: ${({ theme }) => theme.shape.borderRadius};
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0;
    & > div {
    border-radius: 0;
  }
`;

const Wrapper = styled.div`
  flex: 1 1 auto;
  max-width: 1440px;
  min-height: 100%;
  padding: 0 0.5rem;
  display: flex;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  background: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Root>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </Root>
  );
};

export default MainLayout;
