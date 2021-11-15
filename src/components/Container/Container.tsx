import styled from 'styled-components';

interface ContainerProps {
  isScroll?: boolean;
  maxWidth?: number;
  fullHeight?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  overflow: ${({ isScroll }) => (isScroll ? 'auto' : 'hidden')};
`;

export default Container;
