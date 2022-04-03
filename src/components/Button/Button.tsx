import styled, { css } from 'styled-components';

interface ButtonProps {
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button = styled.button.attrs<ButtonProps>((props) => ({
  color: props.color || 'primary',
  fullWidth: props.fullWidth || false,
}))<ButtonProps>`
  background: ${({ theme, color }) => color && theme.colors[color].main};
  border: none;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.1s linear;
  letter-spacing: 0.1rem;
  font-weight: 600;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  &:hover {
    background: ${({ theme, color }) => color && theme.colors[color].dark};
  }
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.label};
      &:hover {
        background: ${theme.colors.label};
      }
    `}
`;

export default Button;
