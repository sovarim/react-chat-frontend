import styled, { css } from 'styled-components/macro';
import TextareaAutosize from 'react-textarea-autosize';
import Text from '../Text/Text';

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 0.875rem;
  width: 100%;
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
  width: 100%;
  min-height: 21px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.label};
    font-size: inherit;
  }
`;

export const Container = styled.div<{ fullWidth: boolean }>`
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 4px 12px;
  position: relative;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export const IconContainer = styled.span`
  &:first-child {
    margin-right: 0.5rem;
  }
  &:last-child {
    margin-left: 0.5rem;
  }
  display: inline-flex;
  align-items: center;
`;

export const ErrorText = styled(({ children, ...props }) => (
  <Text {...props} variant="caption">
    {children}
  </Text>
))`
  color: ${({ theme }) => theme.colors.error};
  position: absolute;
  top: 100%;
  font-size: 0.7rem;
  padding: 0 0.25rem;
`;
