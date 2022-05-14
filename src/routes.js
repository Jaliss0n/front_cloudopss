import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cadastro from './pags/cadastro/cadastro';
import Home from './pags/home/home';


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;