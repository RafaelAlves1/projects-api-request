import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCards = ({ name, image, id }) => {
  return (
    <Card
      sx={{
        background: '#131219',
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="300" image={image} alt={name} />
        <CardContent>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              textTransform: 'capitalize',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              width: '150px',
              height: '100%',
              color: '#ddd',
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detalhes/${id}`}>
          <Button
            sx={{
              color: '#bbb',
            }}
          >
            DETALHES
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default AnimeCards;
