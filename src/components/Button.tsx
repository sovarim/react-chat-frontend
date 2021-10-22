import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  border: none;
  padding: 5px 10px;
  font-size: 100px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 11px 11px 29px -12px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    background: black;
    box-shadow: 100% 100% 6px -14px rgba(34, 60, 80, 0.2);
  }
`;

export default Button;
