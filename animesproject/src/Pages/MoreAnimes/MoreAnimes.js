import React from 'react';
import { Box, CircularProgress, Container, Grid } from '@mui/material';
import QueryString from 'qs';
import Pagination from '../../components/Pagination/Pagination';
import AnimeCards from '../../components/AnimeCards/AnimeCards';
import Head from '../../components/Head/Head';

const LIMIT = 12;

const MoreAnimes = () => {
  const [animes, setAnimes] = React.useState({});
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const query = {
      page: {
        limit: LIMIT,
        offset,
      },
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/anime?${QueryString.stringify(query)}`,
    )
      .then((response) => response.json())
      .then((response) => {
        setAnimes(response);
      });
  }, [offset]);

  return (
    <>
      <Container
        maxWidth="false"
        sx={{
          display: 'flex',
          alignItems: 'center',
          margin: '15px 0',
          minHeight: 'calc(100vh - 128px)',
        }}
      >
        <Head title="Mais Animes" />
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

          {animes.meta && (
            <Pagination
              limit={LIMIT}
              total={animes.meta.count}
              offset={offset}
              setOffset={setOffset}
            />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default MoreAnimes;
