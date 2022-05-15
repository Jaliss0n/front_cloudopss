import logo from '../../img/logo_cloudopss.webp';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './header.css';

const theme = createTheme({
  palette: {
    secondary:{
      main:'#44749d'
    }
  }
})

function Cabecalho() {
  return (
    <div>
      <header id="cabecalho">
        <a href='/'><img src={logo} width='w00px' height='70px' /></a>
        
        <ThemeProvider theme={theme}>
          <aside id='login'>
            <button className='btn-cabecalho-att'><a href='/gerencia'>Gerenciador</a></button>
            <button className='btn-cabecalho-att'><a href='/cadastro'>Novo Usuario</a></button>
          </aside>
        </ThemeProvider>
        
      </header>
    </div>
  );
}

export default Cabecalho;
