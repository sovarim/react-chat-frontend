import { FC, useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

type Color = 'primary' | 'secondary';

interface StyledFieldsetProps {
  focus: boolean;
  color?: Color;
  filled: boolean;
}

interface StyledLabelProps {
  focus: boolean;
  color: Color;
  filled: boolean;
}

interface WrapperProps {
  fullWidth: boolean;
}

interface InputProps {
  color?: Color;
  label: string;
  id: string;
  fullWidth?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
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
  border-radius: 0.25rem;
  margin: 0;
  padding: 0 0.5rem;
  position: absolute;
  right: 0;
  left: 0;
  top: ${(props) => (props.focus || props.filled ? `-8px` : 0)};
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
  border-radius: 0.25rem;
  font-weight: 400;
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
  font-weight: 500;
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
`;

const Input: FC<InputProps> = ({ fullWidth = false, color = 'primary', label, id, ...other }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [filled, setFilled] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  useEffect(() => {
    const checkFilled = (e: any) => {
      if (e.target.value) {
        setFilled(true);
        return;
      }
      setFilled(false);
    };
    inputRef.current?.addEventListener('input', checkFilled);

    return () => inputRef.current?.removeEventListener('input', checkFilled);
  }, []);

  return (
    <Wrapper fullWidth={fullWidth}>
      <StyledLabel htmlFor={id} focus={focus} filled={filled} color={color}>
        {label}
      </StyledLabel>
      <StyledInput
        id={id}
        color={color}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        {...other}
      />
      <StyledFieldset focus={focus} filled={filled} color={color}>
        {(focus || filled) && <legend>{label}</legend>}
      </StyledFieldset>
    </Wrapper>
  );
};

export default Input;
