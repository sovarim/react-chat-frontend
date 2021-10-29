import styled from 'styled-components';

interface TextProps {
  variant?: 'text' | 'h1' | 'h2' | 'h3';
}

const Text = styled.p<TextProps>`
  font-size: 18px;
`;

export default Text;
