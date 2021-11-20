import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  *:visited {
    text-decoration: none;
  }

  *:active, *:hover, *:focus {
    outline: none;
}

  html {
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.breakpoints.mobile} {
      font-size: 15px;
    }
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
