import { FC } from 'react';
import './i18n';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { light } from './styles/theme';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import PerfectScrollbar from 'react-perfect-scrollbar';

const App: FC = () => {
  const appRoutes = useRoutes(routes);
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <PerfectScrollbar>{appRoutes}</PerfectScrollbar>
    </ThemeProvider>
  );
};

export default App;
