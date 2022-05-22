import { ThemeProvider } from '@emotion/react';
import Cabecalho from './pags/header/header';
import Rotas from './routes';
import theme from './styles/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Cabecalho/>
        <Rotas/>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
