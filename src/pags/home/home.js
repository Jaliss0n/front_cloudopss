import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import background_home from '../../img/background_home.jpg'
import './home.css';
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/styles";

function Home() {

    return(
        <div id='corpo_home'>
            <img src={background_home}/>

            <div id="paper_home">
                <h1>Sistema de Gerenciamento de usuarios.</h1>
                <div id="menu">

                    <ThemeProvider theme={theme}>
                        <Card sx={{ maxWidth: 345, padding: 2}}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="secondary">
                                    Gerenciar Usuarios
                                </Typography>
                                <Typography variant="body2" color="secondary">
                                    Criar, deletar,Editar e atualizar usuarios a partir deste menu.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant='contained' color="secondary">
                                <a href='/gerencia'>Acessar</a>
                                </Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345 , padding: 2}}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color='secondary'>
                                    Criar Usuarios
                                </Typography>
                                <Typography variant="body2" color="secondary">
                                    Criar um usuario, cadastrando seu curriculo, nome, email, telefone
                                    endereço e profissão.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant='contained' color="secondary">
                                    <a href='/cadastro'>Acessar</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </ThemeProvider>
                    
                    
                </div>
            </div>
        </div>
        
    )
}

export default Home;