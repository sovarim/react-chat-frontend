import styled, { css } from 'styled-components';
import { Property } from 'csstype';

interface ContainerProps {
  isScroll?: boolean;
  maxWidth?: number;
  fullHeight?: boolean;
  display?: Property.Display;
  verticalCenter?: boolean;
  horizontalCenter?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  overflow: ${({ isScroll }) => (isScroll ? 'auto' : 'hidden')};
  display: ${({ display }) => display || 'block'};
  ${({ verticalCenter }) =>
    verticalCenter &&
    css`
      margin-top: auto;
      margin-bottom: auto;
    `}
  ${({ horizontalCenter }) =>
    horizontalCenter &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
`;

export default Container;
