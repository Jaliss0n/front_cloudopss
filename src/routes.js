import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cadastro from './pags/cadastro/cadastro';
import Gerencia from './pags/gerencia/gerencia';
import Home from './pags/home/home';
import DELETE from './pags/gerencia/DELETE/DELETE';
import Edita from './pags/gerencia/EDITA/EDITA';


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/gerencia' element={<Gerencia/>}/>
                <Route path='/gerencia/DELETE/:cadastra_id' element={<DELETE/>}/>
                <Route path='/gerencia/Edita/:cadastra_id/' element={<Edita/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;