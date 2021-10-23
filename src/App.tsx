import { FC } from 'react';
import './i18n';
import { ThemeProvider } from 'styled-components';
import { light } from './theme';
import { Button } from './components';

const App: FC = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <Button color="primary">CLick</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
