import 'styled-components';

export interface IColor {
  light: string;
  main: string;
  dark: string;
}

export interface IBreakpoints {
  desktop: string;
  laptop: string;
  tablet: string;
  mobile: string;
}

export interface ITypography {
  h1: string;
  h2: string;
  h3: string;
  text: string;
  text2: string;
}

export interface IShape {
  borderRadius: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: IColor;
      secondary: IColor;
      background: string;
      border: string;
      text: string;
      label: string;
      white: string;
      error: string;
    };
    breakpoints: IBreakpoints;
    typography: ITypography;
    shadows: string[];
    shape: IShape;
  }
}
