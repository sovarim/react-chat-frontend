import React, { FC, HTMLAttributes } from 'react';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { Input, Container, IconContainer, Textarea } from './TextField.styles';

type HTMLProps = HTMLAttributes<HTMLInputElement> & TextareaAutosizeProps;

interface TextFieldProps extends HTMLProps {
  multiline?: boolean;
  icon?: React.ReactChildren | React.ReactNode;
  value?: string;
  rows?: number;
  fullWidth?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  multiline = false,
  icon,
  value,
  fullWidth = false,
  ...props
}) => {
  if (!multiline) {
    return (
      <Container fullWidth={fullWidth}>
        {icon && <IconContainer>{icon}</IconContainer>}
        <Input value={value} {...props} />
      </Container>
    );
  }
  return (
    <Container fullWidth={fullWidth}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <Textarea value={value} {...props}></Textarea>
    </Container>
  );
};

export default TextField;
