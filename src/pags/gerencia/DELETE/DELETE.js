import React from "react";
import { useParams} from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./DELETE.css"
import { ThemeProvider } from "@emotion/react";
import theme from "../../../styles/theme";

export default function DELETE () {

    const Delete = function (event) {
        const {cadastra_id} = useParams();
        axios.delete(`http://127.0.0.1:8000/cadastras/${cadastra_id}/`)
            .then(() => {
                console.log('DELETADO')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div id='caixa'>
            <div id='caixa_app'>
                <ThemeProvider theme={theme}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            O usuario foi deletado com sucesso.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color ="secondary"size="small"><a href="/gerencia">Voltar</a></Button>
                        </CardActions>
                    </Card>
                </ThemeProvider>
            </div>
            {Delete()}
        </div>
    )
}

