import { FC } from 'react';
import './i18n';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { light } from './styles/theme';
import { Button, Input } from './components';

const App: FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <div className="App">
        <Button fullWidth color="primary">
          Login
        </Button>
        <div style={{ marginTop: 8 }}></div>
        <Input id="input" color="primary" label="Login" />
      </div>
    </ThemeProvider>
  );
};

export default App;
