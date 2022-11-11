import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      background: '#4207A3',
      border: 'none',
    },
  },
});

const CardAgents = ({ name, icon, roleName, roleIcon, id }) => {
  const classes = useStyles();
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        background: '#131219',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', color: '#bbb' }}>
          <Box
            sx={{
              padding: '5px',
            }}
          >
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" component="div">
              {roleName}
            </Typography>
            <Box
              sx={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src={roleIcon}
                alt={roleName}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
          </Box>
          <Link
            to={`/detalhe-agente/${id}`}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              className={classes.root}
              variant="contained"
              sx={{
                background: '#6610F2',
                color: '#fff',
              }}
            >
              Detalhe
            </Button>
          </Link>
        </CardContent>
      </Box>
      <CardMedia component="img" sx={{ width: 151 }} image={icon} alt={name} />
    </Card>
  );
};

export default CardAgents;
