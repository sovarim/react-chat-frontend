import { ReactNode, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';

const Root = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1010;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
`;

const Modal = ({
  width,
  maxWidth = '300px',
  children,
  open,
  onClose,
}: {
  width?: string;
  maxWidth?: string;
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
  }, [open]);

  if (!open) return null;
  return (
    <Root onClick={onClose}>
      <div
        css={css`
          width: ${width};
          max-width: ${maxWidth};
          background-color: ${({ theme }) => theme.colors.white};
          box-shadow: ${({ theme }) => theme.shadows[1]};
          border-radius: ${({ theme }) => theme.shape.borderRadius};
          padding: 0.5rem;
          margin: auto;
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </Root>
  );
};

export default Modal;
