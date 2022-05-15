import React, {useEffect,useState} from "react";
import "./gerencia.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import back_gerencia from '../../img/back_gerencia.jpg';
import StyledTableCell from "../../styles/StyledTableCell";
import StyledTableRow from "../../styles/StyledTableRow";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton } from "@mui/material";

function Gerencia () {

    const [usuario, setUsuario] = useState([]);

    useEffect( () =>  {
        axios.get('http://127.0.0.1:8000/cadastra')
          .then(res => {
            setUsuario(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    })
    
    const Delete = function (cadastra_id) {
        axios.delete('http://127.0.0.1:8000/cadastra/8')
            .then(() => {
                console.log('DELETADO')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div id="corpo_tabela" >
            
            <img src={back_gerencia}/>
            <div id="paper">
                <h1>Gerenciador de Usuarios</h1>

                <hr/>
 
                <div id="tabela">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Nome </StyledTableCell>
                                    <StyledTableCell align="right">E-mail</StyledTableCell>
                                    <StyledTableCell align="right">Numero</StyledTableCell>
                                    <StyledTableCell align="right">Endereço</StyledTableCell>
                                    <StyledTableCell align="right">Profissão</StyledTableCell>
                                    <StyledTableCell align="right">Ações</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {usuario.map((usuarios) => (
                                <StyledTableRow key={usuarios.cadastra_id}>
                                    <StyledTableCell component="th" scope="row">
                                        {usuarios.nome}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{usuarios.email}</StyledTableCell>
                                    <StyledTableCell align="right">{usuarios.telefone}</StyledTableCell>
                                    <StyledTableCell align="right">{usuarios.end}</StyledTableCell>
                                    <StyledTableCell align="right">{usuarios.prof}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <IconButton color="error" onClick={Delete}>
                                            <DeleteForeverOutlinedIcon/>
                                        </IconButton>
                                        <IconButton color='inherit'>
                                            <EditOutlinedIcon/>
                                        </IconButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default Gerencia;