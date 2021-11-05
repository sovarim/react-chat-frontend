import React, { FC, useState, useRef, useEffect, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components/macro';
import Text from '../Text/Text';

type Color = 'primary' | 'secondary';

interface StyledFieldsetProps {
  focus: boolean;
  color: Color;
  filled: boolean;
  error: boolean;
}

interface StyledLabelProps {
  focus: boolean;
  color: Color;
  filled: boolean;
  error: boolean;
}

interface ContainerProps {
  fullWidth: boolean;
}

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  color?: Color;
  label?: string;
  id?: string;
  fullWidth?: boolean;
  value?: string;
  className?: string;
  name?: string;
  error?: boolean;
  errorText?: string;
}

const Wrapper = styled.div`
  display: block;
  text-align: left;
`;

const Container = styled.div<ContainerProps>`
  position: relative;
  min-height: 0px;
  max-width: 400px;
  ${(props) =>
    props.fullWidth &&
    css`
      max-width: 100%;
    `}
`;

const StyledFieldset = styled.fieldset.attrs<StyledFieldsetProps>((props) => ({
  color: props.color || 'primary',
}))<StyledFieldsetProps>`
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  margin: 0;
  padding: 0 0.5rem;
  position: absolute;
  right: 0;
  left: 0;
  top: ${(props) => (props.focus || props.filled ? `-7px` : 0)};
  bottom: 0;
  pointer-events: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border 0.05s linear;
  ${(props) =>
    (props.focus || props.filled) &&
    css`
      border-color: ${props.color && props.theme.colors[props.color].main} !important;
      border-width: 2px;
    `}
  ${(props) =>
    props.error &&
    css`
      border-color: ${props.theme.colors.error} !important;
      border-width: 2px;
    `}
  & legend {
    padding: 0 0.25rem;
    transition: all 0.05s linear;
    font-weight: 400;
    font-size: 0.75rem;
    opacity: 0;
    color: ${({ theme }) => theme.colors.border};
    ${(props) =>
      (props.focus || props.filled) &&
      css`
        color: ${props.color && props.theme.colors[props.color].main};
      `}
  }
`;

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  padding: 0.875rem 1rem;
  border: none;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  font-weight: 400;
  background: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.border};
  }
  &:hover + ${StyledFieldset} {
    border-color: #000;
  }
`;

const StyledLabel = styled.label<StyledLabelProps>`
  position: absolute;
  padding-left: 0.875rem;
  pointer-events: none;
  top: 0;
  left: 0;
  font-weight: 400;
  transform: translateY(13px) scale(1);
  transform-origin: top left;
  transition: transform 0.2s linear;
  color: ${(props) => props.theme.colors.label};
  ${(props) =>
    (props.focus || props.filled) &&
    css`
      color: ${props.theme.colors[props.color].main};
      transform: translate(3px, -8px) scale(0.75);
    `}
  ${(props) =>
    props.error &&
    css`
      color: ${props.theme.colors.error} !important;
    `}
`;

const Input: FC<InputProps> = ({
  fullWidth = false,
  color = 'primary',
  label = 'Label',
  id = 'id',
  name = 'name',
  value,
  error = false,
  errorText,
  className,
  ...props
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [filled, setFilled] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const checkFilled = (e: any) => {
    if (e.target?.value) {
      setFilled(true);
      return;
    }
    setFilled(false);
  };

  useEffect(() => {
    if (inputRef.current?.value) {
      onFocus();
    }

    inputRef.current?.addEventListener('change', checkFilled);
    inputRef.current?.addEventListener('blur', onBlur);
    inputRef.current?.addEventListener('focus', onFocus);

    return () => {
      inputRef.current?.removeEventListener('change', checkFilled);
      inputRef.current?.removeEventListener('blur', onBlur);
      inputRef.current?.removeEventListener('focus', onFocus);
    };
  }, []);

  return (
    <Wrapper className={className}>
      <Container fullWidth={fullWidth}>
        <StyledLabel htmlFor={id} focus={focus} filled={filled} color={color} error={error}>
          {label}
        </StyledLabel>
        <StyledInput id={id} name={name} ref={inputRef} value={value} {...props} />
        <StyledFieldset focus={focus} filled={filled} color={color} error={error}>
          {(focus || filled) && <legend>{label}</legend>}
        </StyledFieldset>
      </Container>
      {error && (
        <Text
          css={css`
            color: ${({ theme }) => theme.colors.error};
            padding-left: 0.5rem;
          `}
          variant="text2"
        >
          {errorText}
        </Text>
      )}
    </Wrapper>
  );
};

export default Input;
