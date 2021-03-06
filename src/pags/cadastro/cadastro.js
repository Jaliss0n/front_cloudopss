import React from "react";
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import bcg_home from '../../img/bcg_home.jpg';
import { useForm , Controller} from "react-hook-form";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import '../../styles/geral.css';
import theme from "../../styles/theme";
import CssTextField from "../../styles/CssTextField";
import profissoes from "../../styles/listProf";
import axios from 'axios';
import { Box, Paper } from "@mui/material";

export default function Cadastro () {

    const { control, handleSubmit } = useForm();
    
    const onSubmit = function (data) {
        let axiosConfig = {

            mode: 'no-cors',

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        
        axios.post("http://127.0.0.1:8000/cadastras/",JSON.stringify(data), axiosConfig)
        .then(data => {
            console.log(data, typeof data)
        }).catch(err => {
            console.log(err)
        })
    }
    ///////////////////////////////popup/////////////////////////////////////

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);
    
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>

            <img className="background" src={bcg_home}/>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0 20px 20px',
                margin: '150px 10px 0',
                borderRadius: '20px',
                width: '80%',
                [theme.breakpoints.up('md')]:{
                    width:'60%'
                }
            }}>

                <h1>Cadastro de Usuario</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection:'row',
                        justifyContent: 'space-around',

                        [theme.breakpoints.down('md')]:{
                            flexDirection: 'column',

                        }
                    }}>
                        <Box sx={{margin: '0 20px 0'}}>

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <h6>Nome</h6>
                            </InputLabel>
                            <Controller
                                name='nome'
                                control={control}
                                render={({field: {onChange, value} }) => (
                                    <CssTextField 
                                        required
                                        onChange={onChange}
                                        value={value}
                                        id="name" 
                                        label={<h5>Nome</h5>} 
                                        variant="outlined" 

                                    />
                                )}
                            />
                            <InputLabel shrink htmlFor="bootstrap-input">
                            <h6>E-mail</h6>
                            </InputLabel>   

                            <Controller
                                name='email'
                                control={control}
                                render={({field: {onChange, value} }) => (
                                    <CssTextField 
                                        required
                                        onChange={onChange}
                                        value={value}
                                        id="email" 
                                        label={<h5>E-mail</h5>} 
                                        variant="outlined" 

                                    />
                                )}
                            />

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <h6>Telefone</h6>
                            </InputLabel>
                            <Controller
                                name='telefone'
                                control={control}
                                render={({field: {onChange, value} }) => (
                                    <CssTextField 
                                        required
                                        onChange={onChange}
                                        value={value}
                                        id="tel" 
                                        label={<h5>Telefone</h5>} 
                                        variant="outlined" 

                                    />
                                )}
                            />

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <h6>Endere??o</h6>
                            </InputLabel>
                            <Controller
                                name='end'
                                control={control}
                                render={({field: {onChange, value} }) => (
                                    <CssTextField 
                                        required
                                        onChange={onChange}
                                        value={value}
                                        id="end" 
                                        label={<h5>Endere??o Completo</h5>} 
                                        variant="outlined" 

                                    />
                                )}
                            />
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection:'column',
                            margin: '0 20px 0',
                            justifyContent: 'space-between',
                            width: '300px',
                            [theme.breakpoints.down('md')]:{
                                gap: '30px'
    
                            }
                            
                        }}>
                            <div>
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    <h6>Profiss??o</h6>
                                </InputLabel>
                                <Controller 
                                    name='prof'
                                    control={control}
                                    render={({field: {onChange, value} }) => (
                                        <Autocomplete
                                            disablePortal
                                            options={profissoes}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <CssTextField required {...params} label={<h5>Profiss??o</h5>}  />}
                                        
                                            onChange={(_,data) => {
                                                onChange(data);
                                                return data;
                                            }}
                                        />
                                    )}
                                />

                            </div>
                            
                            <label class="custom-file-upload">
                                <h6>Curriculo</h6>
                                <input type= "file" name="Upload" accept="application/pdf"/>
                            </label>

                            <div id='btn-home'>
                                <Button type='reset' variant="contained" color ='error' startIcon={<DeleteIcon />}>
                                    <a href='/cadastro'>Limpar</a>
                                </Button>

                                <Button onClick={handleClickOpen} type='submit' variant="contained" endIcon={<SendIcon />}>
                                    Enviar
                                </Button>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={<a href='/home'></a>}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"Suas Informa????es foram Enviadas !!!"}</DialogTitle>
                                    
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            Seus dadaos foram eviados com sucesso.
                                            Clique no menu Gerenciador, ou bot??o prosseguir logo abaixo
                                            para ver as altera????es que foram realizadas. 
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button color='secondary'><a style={{color: '#672c70'}} href='/cadastro'>Reiniciar</a></Button>
                                        <Button color='secondary'><a style={{color: '#672c70'}}href='/gerencia'>Proceguir</a></Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </Box>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}