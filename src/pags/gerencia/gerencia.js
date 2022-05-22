import React, {useEffect,useState} from "react";
import "../../styles/geral.css";
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
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function Gerencia () {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (event) => setOpen(true);

    const handleClose = () => setOpen(false);

    const [usuario, setUsuario] = useState([]);

    useEffect( () =>  {

        let axiosConfig = {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.get("http://127.0.0.1:8000/cadastras/", axiosConfig)
          .then(res => {
            setUsuario(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    })

    return (
        <Box sx={{ display:'flex', justifyContent: 'center'}}>

            <img className="background" src={back_gerencia}/>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                margin:'150px 0 0',
                padding: '20px',
                width: '70%'
            }}>
                <h1>Gerenciador de Usuarios</h1>
                <hr/>
                <Box>
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
                                        <IconButton color="error" >
                                            <DeleteForeverOutlinedIcon onClick={handleClickOpen}/>
                                        </IconButton>
                                        <IconButton color='inherit'>
                                            <Link to={`/gerencia/EDITA/${usuarios.cadastra_id}/`}>
                                                <EditOutlinedIcon color="secondary"/>
                                            </Link>
                                        </IconButton>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {"Tem certeza que deseja DELETAR esté usuario?"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Assim que está operacão for confirmada, a mesma não poderá ser revertida.
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>

                                                <Button color="secondary" onClick={handleClose}>Cancelar</Button>

                                                <Link to={`/gerencia/DELETE/${usuarios.cadastra_id}/`}>
                                                    <Button color="secondary" onClick={handleClose} autoFocus>
                                                        Deletar
                                                    </Button>
                                                </Link>
                                            </DialogActions>
                                        </Dialog>
                                        
                                    </StyledTableCell>
                                </StyledTableRow>
                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </Box>
    )
}