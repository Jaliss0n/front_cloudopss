import logo from '../../img/logo_cloudopss.webp';
import { AppBar, Box, Button, IconButton, Link, Toolbar } from '@mui/material';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AttributionIcon from '@mui/icons-material/Attribution';
import theme from '../../styles/theme';
import { Drawer } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  padding: '5px',
  justifyContent: 'space-around'
})

const Buttons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: '30px',
  [theme.breakpoints.up("md")]: {
    display: "flex"
  }
})) //gap e espaçamento

/////////////////////DRAWER//////////////////////////

const drawerWidth = 240;

const Sidebar = styled(Drawer)(({theme}) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  }
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function Cabecalho() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);


  return (

    <Box>
      <AppBar color='primary' sx={{ display: "flex", boxShadow: "none" }}>
        <StyledToolbar>

          <a href='/'><img src={logo} width='w00px' height='70px' /></a>
          <Buttons>
            <Button color='secondary' variant='contained'><a href='/gerencia' style={{ textDecoration: 'none', color: "inherit" }}>Gerenciador</a></Button>
            <Button color='secondary' variant='contained'><a href='/cadastro' style={{ textDecoration: 'none', color: "inherit" }}>Novo Usuario</a></Button>
          </Buttons>

          <IconButton
            onClick={handleDrawerOpen}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon color='secondary' />
          </IconButton>

        </StyledToolbar>
      </AppBar>

      <Sidebar anchor="right" open={open}>
        <DrawerHeader>
          <IconButton color='secondary' onClick={handleDrawerClose}>
            {theme.direction === 'rtr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List >
          <Link color='secondary' sx={{textDecoration: 'none'}} href='/gerencia'>
            <ListItem disablePadding>
              <ListItemButton href='gerencia'>
                <ListItemIcon>
                  <AccountBoxIcon color= 'secondary'/>
                </ListItemIcon>
                <ListItemText primary="Gerenciador de Usuarios" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link color='secondary' sx={{textDecoration: 'none'}} href='/cadastro'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddCircleOutlineIcon color= 'secondary' />
                </ListItemIcon>
                <ListItemText primary="Criar Usuarios" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <Divider />

        <Link color='secondary' sx={{textDecoration: 'none'}} href='/cadastro'>
          <List>
            <ListItem disablePadding>
              <ListItemButton disabled>
                <ListItemIcon>
                  <AttributionIcon color= 'secondary'/>
                </ListItemIcon>
                <ListItemText primary="Sobre Nós" />
              </ListItemButton>
            </ListItem>
          </List>
        </Link>
      </Sidebar>
    </Box>
  );
}