import styled from 'styled-components';
import { Property } from 'csstype';

interface ContainerProps {
  isScroll?: boolean;
  maxWidth?: number;
  fullHeight?: boolean;
  display?: Property.Display;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  overflow: ${({ isScroll }) => (isScroll ? 'auto' : 'hidden')};
  display: ${({ display }) => display || 'block'};
`;

export default Container;
