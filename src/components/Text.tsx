import styled from 'styled-components';

interface TextProps {
  variant?: 'text' | 'h1' | 'h2' | 'h3';
}

const Text = styled.p.attrs<TextProps>((props) => ({
  variant: props.variant || 'text',
}))<TextProps>`
  font-size: ${({ theme, variant }) => variant && theme.typography[variant]};
`;

export default Text;
