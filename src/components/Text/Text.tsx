import styled from 'styled-components';

export interface TextProps {
  variant?: 'text' | 'text2' | 'h1' | 'h2' | 'h3' | 'caption';
  fontWeight?: number;
  light?: boolean;
}

const Text = styled.p.attrs<TextProps>((props) => ({
  variant: props.variant || 'text',
  fontWeight: props.fontWeight || 500,
}))<TextProps>`
  font-size: ${({ theme, variant }) => variant && theme.typography[variant]};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ light, theme }) => (light ? theme.colors.label : theme.colors.black)};
`;

export default Text;
