import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar
      component="nav"
      sx={{
        position: 'static',
        background: '#131219',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { sm: 'block', padding: '15px' } }}>
          <Link
            to="/"
            style={{
              margin: '0 15px',
            }}
          >
            Inicio
          </Link>
          <Link
            to="/agentes"
            style={{
              margin: '0 15px',
            }}
          >
            Agentes
          </Link>
          <Link
            to="/favoritos"
            style={{
              margin: '0 15px',
            }}
          >
            Favoritos
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
