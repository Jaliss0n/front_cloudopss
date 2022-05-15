import React, {useEffect} from "react";
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import bcg_home from '../../img/bcg_home.jpg';
import {ThemeProvider } from '@mui/material/styles';
import { useForm , Controller} from "react-hook-form";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './cadastro.css'
import theme from "../../styles/styles";
import CssTextField from "../../styles/CssTextField";
import profissoes from "../../styles/listProf";
import axios from 'axios';

function Cadastro () {

   

    const { control, handleSubmit } = useForm();
    
    const onSubmit = function (data) {
        
        let axiosConfig = {

            mode: 'no-cors',

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        
        axios.post("http://127.0.0.1:8000/cadastra/",JSON.stringify(data), axiosConfig)
        .then(data => {
            console.log(data, typeof data)
        }).catch(err => {
            console.log(err)
        })
    }

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    
    return(
        <div className="corpo">

            <img src={bcg_home}/>
            <div id="formulario">
                <h2>Criação de usuario</h2>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <ThemeProvider theme={theme}>
                        <div id='form1'>

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <h6>Nome</h6>
                            </InputLabel>
                            <Controller
                                name='nome'
                                control={control}
                                render={({field: {onChange, value} }) => (
                                    <CssTextField 
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
                                        onChange={onChange}
                                        value={value}
                                        id="tel" 
                                        label={<h5>Telefone</h5>} 
                                        variant="outlined" 

                                    />
                                )}
                            />

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <h6>Endereço</h6>
                            </InputLabel>
                            <Controller
                                name='end'
                                control={control}
                                render={({field: {onChange, value} }) => (
                                    <CssTextField 
                                        onChange={onChange}
                                        value={value}
                                        id="end" 
                                        label={<h5>Endereço Completo</h5>} 
                                        variant="outlined" 

                                    />
                                )}
                            />
                        </div>

                        <div id='form2'>
                            <div>
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    <h6>Selecione uma Profissão</h6>
                                </InputLabel>
                                <Controller 
                                    name='prof'
                                    control={control}
                                    render={({field: {onChange, value} }) => (
                                        <Autocomplete
                                            disablePortal
                                            options={profissoes}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <CssTextField {...params} label={<h5>Profissão</h5>}  />}
                                        
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
                                    <DialogTitle>{"Suas Informações foram Enviadas !!!"}</DialogTitle>
                                    
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            Seus dadaos foram eviados com sucesso.
                                            Clique no menu Gerenciador, ou botão prosseguir logo abaixo
                                            para ver as alterações que foram realizadas. 
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button color='secondary'><a href='/cadastro'>Reiniciar</a></Button>
                                        <Button color='secondary'><a href='/gerencia'>Proceguir</a></Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                            
                        </div>
                    </ThemeProvider>
                </form>

            </div>
        </div>
    );

    
}

export default Cadastro;