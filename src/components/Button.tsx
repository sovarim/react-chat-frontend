import styled, { css } from 'styled-components';

interface ButtonProps {
  color: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button = styled.button.attrs<ButtonProps>((props) => ({
  color: props.color || 'primary',
  fullWidth: props.fullWidth || false,
}))<ButtonProps>`
  background: ${({ theme, color }) => theme.colors[color].main};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #fff;
  border-radius: 0.25rem;
  box-shadow: 11px 11px 29px -12px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  transition: all 0.1s linear;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  &:hover {
    background: ${({ theme, color }) => theme.colors[color].dark};
    box-shadow: 100% 100% 6px -14px rgba(34, 60, 80, 0.2);
  }
`;

export default Button;
