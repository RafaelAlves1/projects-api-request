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

const PokemonCard = ({ name, image, types, id }) => {
  const typesRender = () => {
    if (types[1]) {
      return types[0].type.name + ' ' + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt="pokemon" />
        <CardContent>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              textTransform: 'capitalize',
            }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {typesRender}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detalhes/${id}`}>
          <Button size="small" color="primary">
            Detalhes
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
