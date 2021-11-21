import styled from 'styled-components';

const IconButton = styled.button<{ disablePadding?: boolean }>`
  border: none;
  background: transparent;
  display: inline-flex;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  padding: ${({ disablePadding }) => (disablePadding ? '0' : '0.25rem')};
  font-size: 18px;
  &:focus {
    background: rgba(0, 0, 0, 0.116);
  }
`;

export default IconButton;
