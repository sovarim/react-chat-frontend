import { FC } from 'react';
import './i18n';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { light } from './styles/theme';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import { Auth, Home } from 'pages';
import { useAuth } from 'hooks';

const App: FC = () => {
  const { isAuth } = useAuth();
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <MainLayout>
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
