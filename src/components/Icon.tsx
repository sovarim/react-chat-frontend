import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  color?: 'primary' | 'secondary';
  display?: string;
}

const Icon = styled(FontAwesomeIcon).attrs<IconProps>(({ theme, color = 'primary' }) => ({
  color: theme.colors[color].main,
}))<IconProps>`
  color: ${({ color }) => color};
  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
`;

export default Icon;
