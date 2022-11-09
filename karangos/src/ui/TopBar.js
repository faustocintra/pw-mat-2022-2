import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MainMenu from './MainMenu'
import logo from '../assets/karangos-logo-300px.png'

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark="true">
        <Toolbar variant="dense">
          
          <MainMenu />

          <Box>
            <img src={logo} alt="Logotipo da loja Karangos" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
