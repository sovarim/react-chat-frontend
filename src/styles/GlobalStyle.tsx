import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  *:visited {
    text-decoration: none;
  }

  html {
    width: 100%;
    height: 100vh;
  }

  body {
    color: ${({ theme }) => theme.colors.text};
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

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

`;

export default GlobalStyle;
