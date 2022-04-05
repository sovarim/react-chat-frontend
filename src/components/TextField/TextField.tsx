import React, { InputHTMLAttributes, forwardRef } from 'react';
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

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      multiline = false,
      startIcon,
      endIcon,
      value,
      fullWidth = false,
      // eslint-disable-next-line react/prop-types
      type,
      error = false,
      errorText,
      ...props
    },
    ref,
  ) => {
    if (!multiline) {
      return (
        <Container ref={ref} fullWidth={fullWidth}>
          {startIcon && <IconContainer>{startIcon}</IconContainer>}
          <Input value={value} type={type} {...props} />
          {endIcon && <IconContainer>{endIcon}</IconContainer>}
          {error && <ErrorText>{errorText}</ErrorText>}
        </Container>
      );
    }
    return (
      <Container ref={ref} fullWidth={fullWidth}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
        <Textarea value={value} {...props}></Textarea>
        {endIcon && <IconContainer>{endIcon}</IconContainer>}
      </Container>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
