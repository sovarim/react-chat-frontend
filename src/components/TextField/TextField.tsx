import React, { FC, InputHTMLAttributes } from 'react';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { Input, Container, IconContainer, Textarea, ErrorText } from './TextField.styles';

type HTMLProps = TextareaAutosizeProps & InputHTMLAttributes<HTMLInputElement>;

interface TextFieldProps extends HTMLProps {
  multiline?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  value?: string;
  rows?: number;
  fullWidth?: boolean;
  errorText?: string;
  error?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  multiline = false,
  startIcon,
  endIcon,
  value,
  fullWidth = false,
  type,
  error = false,
  errorText,
  ...props
}) => {
  if (!multiline) {
    return (
      <Container fullWidth={fullWidth}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
        <Input value={value} type={type} {...props} />
        {endIcon && <IconContainer>{endIcon}</IconContainer>}
        {error && <ErrorText>{errorText}</ErrorText>}
      </Container>
    );
  }
  return (
    <Container fullWidth={fullWidth}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      <Textarea value={value} {...props}></Textarea>
      {endIcon && <IconContainer>{endIcon}</IconContainer>}
    </Container>
  );
};

export default TextField;
