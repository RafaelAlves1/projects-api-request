import { Box, Button } from '@mui/material';
import React from 'react';
import Head from '../../components/Head/Head';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      background: '#b71c1c',
      border: 'none',
    },
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        height: 'calc(100vh - 64px)',
        background: 'url("https://i.redd.it/y69ercliqi551.png")',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <Head title="Inicio" />

      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          to="/agentes"
          style={{
            textDecoration: 'none',
          }}
        >
          <Button
            className={classes.root}
            variant="contained"
            sx={{
              background: '#c62828',
            }}
          >
            VER AGENTES
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
