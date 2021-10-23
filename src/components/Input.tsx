import { FC, useState } from 'react';
import styled, { css } from 'styled-components';

type Color = 'primary' | 'secondary';

interface StyledFieldsetProps {
  focus: boolean;
  color: Color;
}

interface InputProps {
  color: Color;
}

const Wrapper = styled.div`
  position: relative;
  min-height: 0px;
  margin: 1rem;
`;

const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  border-radius: 0.25rem;
  margin: 0;
  padding: 0 0.5rem;
  position: absolute;
  right: 0;
  left: 0;
  top: ${(props) => (props.focus ? `-9px` : 0)};
  bottom: 0;
  pointer-events: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border 0.05s linear;
  ${(props) =>
    props.focus &&
    css`
      border-color: ${props.theme.colors[props.color].main};
    `}
  & legend {
    padding: 0 0.25rem;
    transition: all 0.05s linear;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.border};
    ${(props) =>
      props.focus &&
      css`
        color: ${props.theme.colors[props.color].main};
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
`;

const Input: FC<InputProps> = ({ color = 'primary' }) => {
  const [focus, setFocus] = useState<boolean>(false);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Wrapper>
      <StyledInput
        placeholder={!focus ? 'Имя пользователя' : ''}
        color={color}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <StyledFieldset focus={focus} color={color}>
        {focus && <legend>Имя пользователя</legend>}
      </StyledFieldset>
    </Wrapper>
  );
};

export default Input;
