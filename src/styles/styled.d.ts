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

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: IColor;
      secondary: IColor;
      background: string;
      border: string;
      text: string;
      label: string;
    };
    breakpoints: IBreakpoints;
  }
}
