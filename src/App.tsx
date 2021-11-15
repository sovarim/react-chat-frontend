import { FC } from 'react';
import './i18n';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { light } from './styles/theme';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login/Login';

const App: FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <MainLayout>
        <Login />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
