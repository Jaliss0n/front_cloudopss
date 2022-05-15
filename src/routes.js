import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cadastro from './pags/cadastro/cadastro';
import Gerencia from './pags/gerencia/gerencia';
import Home from './pags/home/home';


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/gerencia' element={<Gerencia/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;