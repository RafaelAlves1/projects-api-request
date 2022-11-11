import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import HomeIcon from '@mui/icons-material/Home';

const Characters = ({ name, status, gender, specie, image, house }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        sx={{
          textTransform: 'capitalize',
        }}
        avatar={
          <Avatar
            sx={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'transparent',
              border: '1px solid #bbb',
            }}
          >
            <img
              src={
                image === ''
                  ? 'https://www.ispsaude.com.br/images/image-404.png'
                  : image
              }
              alt={name}
              width="100%"
              height="100%"
            />
          </Avatar>
        }
        title={name}
        subheader={gender}
      />

      <CardMedia
        component="img"
        height="400"
        image={
          image === ''
            ? 'https://www.ispsaude.com.br/images/image-404.png'
            : image
        }
        alt={name}
      />

      <CardContent>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            textTransform: 'capitalize',
          }}
        >
          {status === true ? (
            <FavoriteIcon color="error" />
          ) : (
            <HeartBrokenIcon />
          )}
          <Chip
            label={
              house === '' ? (
                'House not found'
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textTransform: 'capitalize',
                  }}
                >
                  <Typography>{house}</Typography>
                </Box>
              )
            }
          />
          <Chip label={specie} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Characters;
