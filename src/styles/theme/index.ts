import { IBreakpoints, IShape, ITypography } from './../styled.d';
import { DefaultTheme } from 'styled-components';

const breakpoints: IBreakpoints = {
  desktop: `@media (min-width: 1440px)`,
  laptop: `@media (max-width: 1440px)`,
  tablet: `@media (max-width: 768px)`,
  mobile: `@media (max-width: 425px)`,
};

const shadows: string[] = [
  '0px 1px 4px 0px rgba(0, 0, 0, 0.14)',
  '0px 1px 8px 0px rgba(0, 0, 0, 0.14)',
];

const shape: IShape = {
  borderRadius: '0.5rem',
};

const typography: ITypography = {
  text: '1rem',
  text2: '0.875rem',
  h1: '4rem',
  h2: '2.25rem',
  h3: '1.5rem',
  caption: '0.75rem',
};

const common = {
  breakpoints,
  shadows,
  shape,
  typography,
};

export const light: DefaultTheme = {
  ...common,
  name: 'Light Theme',
  colors: {
    primary: {
      light: '#ce28fd',
      main: '#9520b6',
      dark: '#5f1374',
    },
    secondary: {
      light: '#ff5f59',
      main: '#db504a',
      dark: '#a73d39',
    },
    border: 'rgba(0, 0, 0, 0.23)',
    background: '#f2f2f2',
    text: '#333',
    label: 'rgba(0, 0, 0, .6)',
    white: '#fff',
    error: '#fd4d4d',
    black: '#000',
  },
};

export const dark: DefaultTheme = {
  ...common,
  name: 'Dark Theme',
  colors: {
    primary: {
      light: '#0b6e8d',
      main: '#214f95',
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
    label: '#3d3d3d',
    white: '#000',
    error: '#fd4d4d',
    black: '#fff',
  },
};
