import { Container, Grid } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const Home = () => {
  const [pokemons, setPokemons] = React.useState({});

  React.useEffect(() => {
    getPokemons();
  }, []);

  function getPokemons() {
    var endpoints = [];
    for (var i = 1; i < 899; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    axios
      .all(endpoints.map((item) => axios.get(item)))
      .then((res) => setPokemons(res));
  }

  return (
    <>
      <NavBar />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.length >= 1 ? (
            <>
              {pokemons.map((pokemon) => (
                <Grid item xs="2" key={pokemon.data.name}>
                  <PokemonCard
                    name={pokemon.data.name}
                    image={pokemon.data.sprites.front_default}
                    types={pokemon.data.types}
                    id={pokemon.data.id}
                  />
                </Grid>
              ))}
            </>
          ) : (
            'carregando'
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
