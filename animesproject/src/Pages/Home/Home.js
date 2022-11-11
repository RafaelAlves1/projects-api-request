import { Box, CircularProgress, Container, Grid } from '@mui/material';
import React from 'react';
import AnimeCards from '../../components/AnimeCards/AnimeCards';
import Head from '../../components/Head/Head';

const Home = () => {
  const [animes, setAnimes] = React.useState({});
  React.useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/anime?page[limit]=12&page[offset]=9`,
    )
      .then((response) => response.json())
      .then((response) => {
        setAnimes(response);
      });
  }, []);

  return (
    <Container
      maxWidth="false"
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: '15px 0',
        minHeight: 'calc(100vh - 128px)',
      }}
    >
      <Head title="Inicio" />
      <Grid container spacing={3}>
        {animes.data ? (
          <>
            {animes.data.map((anime) => (
              <Grid item xs="12" md="6" lg="3" xl="2" key={anime.id}>
                <AnimeCards
                  image={anime.attributes.posterImage.small}
                  name={anime.attributes.canonicalTitle}
                  id={anime.id}
                />
              </Grid>
            ))}
          </>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <CircularProgress color="info" />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
