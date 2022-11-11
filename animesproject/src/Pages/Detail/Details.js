import {
  Box,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';
import QueryString from 'qs';
import React from 'react';
import { useParams } from 'react-router-dom';
import Head from '../../components/Head/Head';
import Pagination from '../../components/Pagination/Pagination';

const LIMIT = 12;

const Details = () => {
  const { id } = useParams();

  const [detail, setDetail] = React.useState({});
  const [episodes, setEpisodes] = React.useState({});
  const [genres, setGenres] = React.useState({});
  const [offset, setOffset] = React.useState(0);

  // detalhes do anime
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/anime/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setDetail(response);
      });
  }, [id]);

  // generos do anime
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/anime/${id}/genres`)
      .then((res) => res.json())
      .then((data) => setGenres(data));
  }, [id]);

  //episodeos do animes
  React.useEffect(() => {
    const query = {
      page: {
        limit: LIMIT,
        offset,
      },
    };
    fetch(
      `${
        process.env.REACT_APP_API_URL
      }/anime/${id}/episodes?${QueryString.stringify(query)}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data);
      });
  }, [id, offset]);

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: 'calc(100vh - 128px)',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        margin: '20px auto',
      }}
    >
      <Grid container>
        {detail.data ? (
          <>
            <Head title={detail.data.attributes.canonicalTitle} />

            <Grid item xs="12" md="8">
              <Grid container spacing={3}>
                <Grid item xs="12">
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#bbb',
                    }}
                  >
                    {detail.data.attributes.canonicalTitle}
                  </Typography>
                </Grid>
                <Grid item xs="12">
                  {detail.data.attributes.episodeCount ? (
                    <Typography
                      sx={{
                        color: '#bbb',
                      }}
                    >
                      Episódios: {detail.data.attributes.episodeCount}
                    </Typography>
                  ) : null}
                </Grid>
                {genres.data ? (
                  genres.data.map((genre) => (
                    <Grid item key={genre.id}>
                      <Paper
                        elevation={24}
                        sx={{
                          background: '#131219',
                          padding: '5px',
                          color: '#bbb',
                        }}
                      >
                        {genre.attributes.name}
                      </Paper>
                    </Grid>
                  ))
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

                <Grid
                  item
                  xs="12"
                  sx={{
                    padding: '15px',
                  }}
                >
                  {detail.data.attributes.description ? (
                    <Typography
                      sx={{
                        overflowY: 'scroll',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        lineHeight: '16px',
                        maxHeight: '200px',
                        textAlign: 'justify',
                        color: '#bbb',
                        marginRight: '14px',
                        padding: '15px',
                      }}
                    >
                      {detail.data.attributes.description}
                    </Typography>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
            <Grid item md="4">
              <img
                src={detail.data.attributes.posterImage.small}
                alt={detail.data.attributes.canonicalTitle}
              />
            </Grid>

            {episodes.data ? (
              <>
                <Grid container>
                  <ImageList
                    sx={{ width: '100%', height: 450, padding: '15px' }}
                  >
                    <ImageListItem key="Subheader" cols={2}>
                      <ListSubheader
                        component="div"
                        sx={{
                          background: '#131219',
                          color: '#bbb',
                          borderRadius: '10px',
                          marginTop: '10px',
                        }}
                      >
                        Episodios
                      </ListSubheader>
                    </ImageListItem>
                    {episodes.data.map((episode) => (
                      <ImageListItem
                        key={episode.attributes.thumbnail.original}
                        sx={{
                          borderRadius: '10px',
                        }}
                      >
                        <img
                          src={`${episode.attributes.thumbnail.original}?w=248&fit=crop&auto=format`}
                          srcSet={`${episode.attributes.thumbnail.original}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={episode.attributes.canonicalTitle}
                          loading={<Skeleton animation="wave" />}
                          style={{
                            borderRadius: '10px',
                          }}
                        />
                        <ImageListItemBar
                          sx={{
                            textTransform: 'capitalize',
                            borderRadius: '10px',
                          }}
                          title={episode.attributes.canonicalTitle}
                          subtitle={episode.type}
                          actionIcon={
                            <IconButton
                              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                              aria-label={`info about ${episode.attributes.canonicalTitle}`}
                            ></IconButton>
                          }
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Grid>
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
            {episodes.meta && (
              <Pagination
                limit={LIMIT}
                total={episodes.meta.count}
                offset={offset}
                setOffset={setOffset}
              />
            )}
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

export default Details;
