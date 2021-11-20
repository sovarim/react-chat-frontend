import styled from 'styled-components';

const IconButton = styled.button<{ disablePadding?: boolean }>`
  border: none;
  background: transparent;
  display: inline-flex;
  cursor: pointer;
  padding: ${({ disablePadding }) => (disablePadding ? '0' : '0.25rem')};
  font-size: 18px;
`;

export default IconButton;
