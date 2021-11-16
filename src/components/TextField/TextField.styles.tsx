import styled from 'styled-components';

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-family: inherit;
  &::placeholder {
    color: ${({ theme }) => theme.colors.label};
  }
`;

export const Container = styled.div`
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 4px 12px;
`;

export const IconContainer = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
`;
