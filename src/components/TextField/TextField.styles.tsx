import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 0.875rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.label};
    font-size: inherit;
  }
`;

export const Textarea = styled(TextareaAutosize)`
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
  font-size: 0.875rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.label};
    font-size: inherit;
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