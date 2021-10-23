import { IBreakpoints } from './../styled.d';
import { DefaultTheme } from 'styled-components';

const breakpoints: IBreakpoints = {
  desktop: `@media (min-width: 1440px)`,
  laptop: `@media (max-width: 1440px)`,
  tablet: `@media (max-width: 768px)`,
  mobile: `@media (max-width: 425px)`,
};

export const light: DefaultTheme = {
  colors: {
    primary: {
      light: '#0b6e8d',
      main: '#084c61',
      dark: '#073e4f',
    },
    secondary: {
      light: '#ff5f59',
      main: '#db504a',
      dark: '#a73d39',
    },
    border: 'rgba(0, 0, 0, 0.23)',
    background: '#f2f2f2',
    text: '#333',
  },
  breakpoints,
};

export const dark: DefaultTheme = {
  colors: {
    primary: {
      light: '#0b6e8d',
      main: '#084c61',
      dark: '#073e4f',
    },
    secondary: {
      light: '#ff5f59',
      main: '#db504a',
      dark: '#a73d39',
    },
    border: 'rgba(0, 0, 0, 0.23)',
    background: '#323232',
    text: '#333',
  },
  breakpoints,
};
