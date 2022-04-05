import { ReactNode, RefObject } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  box-shadow: ${({ theme }) => theme.shadows[1]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  padding: 0.5rem;
  position: absolute;
  z-index: 1000;
`;

const Popper = ({
  anchorEl,
  children,
  open,
}: {
  anchorEl: RefObject<HTMLElement | null>;
  children: ReactNode;
  open: boolean;
}) => {
  if (!open || !anchorEl.current) return null;
  return (
    <Root
      style={{
        left: anchorEl.current.offsetLeft,
        width: anchorEl.current.offsetWidth,
        top: anchorEl.current.offsetTop + anchorEl.current.offsetHeight + 1,
      }}
    >
      {children}
    </Root>
  );
};

export default Popper;
