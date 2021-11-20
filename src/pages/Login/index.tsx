import { FC } from 'react';
import { Container } from 'components';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  display: flex;
`;

const Section = styled.section`
  max-width: 400px;
  width: 100%;
  margin: auto;
`;

const Login: FC = () => {
  return (
    <StyledContainer fullHeight>
      <Section></Section>
    </StyledContainer>
  );
};

export default Login;
