import 'styled-components';

interface colorTypes {
  light: string;
  main: string;
  dark: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: colorTypes;
      secondary: colorTypes;
    };
  }
}
