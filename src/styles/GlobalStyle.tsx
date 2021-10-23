import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *:visited {
    text-decoration: none;
  }

  html {
    width: 100%;
    height: 100vh;
  }

  body {
    color: #333;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
  }

  #root {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
