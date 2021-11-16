import React, { FC, HTMLAttributes } from 'react';
import { Input, Container, IconContainer } from './TextField.styles';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean;
  icon?: React.ReactChildren | React.ReactNode;
  value?: string;
}

const TextField: FC<TextFieldProps> = ({ multiline = false, icon, value, ...props }) => {
  if (!multiline) {
    return (
      <Container>
        <IconContainer>{icon}</IconContainer>
        <Input value={value} {...props} />
      </Container>
    );
  }
  return <textarea value={value} {...props}></textarea>;
};

export default TextField;
