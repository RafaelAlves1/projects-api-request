import { Container, Grid } from '@mui/material';
import React from 'react';
import Characters from '../../components/Characters/Characters';
import api from '../../services/api';

const Home = () => {
  const [characters, setCharacters] = React.useState({});

  React.useEffect(() => {
    api.get('/characters').then((json) => {
      setCharacters(json.data);
      console.log(json.data);
    });
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: '15px',
      }}
    >
      <Grid container spacing={3}>
        {characters.length >= 1 ? (
          <>
            {characters.map((character, index) => (
              <Grid item xs={2} key={index}>
                <Characters
                  name={character.name}
                  status={character.alive}
                  gender={character.gender}
                  specie={character.species}
                  image={character.image}
                  house={character.house}
                />
              </Grid>
            ))}
          </>
        ) : (
          'Loading'
        )}
      </Grid>
    </Container>
  );
};

export default Home;
