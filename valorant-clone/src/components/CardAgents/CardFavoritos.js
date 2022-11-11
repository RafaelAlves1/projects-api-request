import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const CardFavoritos = ({ name, icon, roleName, roleIcon, id, remove }) => {
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
            <Button
              variant="contained"
              sx={{
                background: '#6610F2',
                color: '#fff',
              }}
              onClick={remove}
            >
              Remover
            </Button>
          </Box>
        </CardContent>
      </Box>
      <CardMedia component="img" sx={{ width: 151 }} image={icon} alt={name} />
    </Card>
  );
};

export default CardFavoritos;
