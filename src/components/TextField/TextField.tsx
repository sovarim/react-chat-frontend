import React, { FC, InputHTMLAttributes } from 'react';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { Input, Container, IconContainer, Textarea } from './TextField.styles';

type HTMLProps = TextareaAutosizeProps & InputHTMLAttributes<HTMLInputElement>;

interface TextFieldProps extends HTMLProps {
  multiline?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  value?: string;
  rows?: number;
  fullWidth?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  multiline = false,
  startIcon,
  endIcon,
  value,
  fullWidth = false,
  type,
  ...props
}) => {
  if (!multiline) {
    return (
      <Container fullWidth={fullWidth}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
        <Input value={value} type={type} {...props} />
        {endIcon && <IconContainer>{endIcon}</IconContainer>}
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
