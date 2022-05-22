import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Paper } from '@mui/material';
import background_home from '../../img/background_home.jpg'
import '../../styles/geral.css';
import styled from "@emotion/styled";

const Box_home = styled(Box)(({theme}) => ({
    display: 'flex',
    borderRadius: '12px',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: "10% 20%",
    justifyContent: 'center',
    backgroundImage: 'radial-gradient(circle at 10% -20.71%, #96536f 0, #904c6f 10%, #88446f 20%, #7f3c6f 30%, #743470 40%, #672c70 50%, #582571 60%, #462172 70%, #301f73 80%, #021e75 90%, #001e76 100%)',
    gap: '100px',
    [theme.breakpoints.up("md")]:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:'10% 3%',
        backgroundImage: 'radial-gradient(circle at 10% -20.71%, #96536f 0, #904c6f 10%, #88446f 20%, #7f3c6f 30%, #743470 40%, #672c70 50%, #582571 60%, #462172 70%, #301f73 80%, #021e75 90%, #001e76 100%)',
    }
}))

export default function Home() {

    return(
        <Box>
            <img className="background" src={background_home}/>
            <Container sx={{}}>
                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '50px', 
                    justifyContent: 'center',
                    marginTop: '150px',
                    borderRadius: '20px',
                }}>
                    <h1>Sistema de Gerenciamento de usuarios.</h1>
                    <Box_home>
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
                    </Box_home>
                </Paper>
            </Container>
        </Box>
    )
}