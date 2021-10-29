import { FC } from 'react';
import './i18n';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { light } from './styles/theme';
// import { Button, Input } from './components';
import AuthLayout from './layouts/AuthLayout';

const App: FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <AuthLayout>AuthLayout</AuthLayout>
    </ThemeProvider>
  );
};

export default App;
