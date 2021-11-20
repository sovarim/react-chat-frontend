import { FC } from 'react';
import styled from 'styled-components';

export const Tab = styled.button`
  flex: 1 1 50%;
  border: none;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  @media (hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export default Tab;
