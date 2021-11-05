import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { light as LightTheme, dark as DarkTheme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyle';

const themes = [LightTheme, DarkTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

configure(require.context('../src', true, /\.stories\.js$/), module);
