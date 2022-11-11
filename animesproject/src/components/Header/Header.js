import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  SwipeableDrawer,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const [text, setText] = React.useState('');
  const [searchAnime, setSearchAnime] = React.useState({});

  React.useEffect(() => {
    if (text) {
      setSearchAnime({});
      fetch(`${process.env.REACT_APP_API_URL}/anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => setSearchAnime(response));
    }
  }, [text]);

  function handleSearch({ target }) {
    setText(target.value);
  }

  function handleClear() {
    setSearchAnime({});
    setText('');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: '#131219',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            LALALAL
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Link to="/">
              <Button
                sx={{
                  color: '#bbb',
                }}
              >
                Inicio
              </Button>
            </Link>
            <Link to="/mais-animes">
              <Button
                sx={{
                  color: '#bbb',
                }}
              >
                Mais Animes
              </Button>
            </Link>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={text}
              onChange={handleSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>

      {text !== '' ? (
        <>
          {searchAnime.data && (
            <Box
              style={{
                top: '64px',
                right: '0',
                display: 'flex',
                width: '300px',
                height: '500px',
                position: 'absolute',
                flexDirection: 'column',
                overflowY: 'scroll',
                background: '#131219',
                zIndex: 9999,
              }}
            >
              {searchAnime.data.map((item) => (
                <Box key={item.id}>
                  <Link to={`/detalhes/${item.id}`} onClick={handleClear}>
                    <Card
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: '#131219',
                        color: '#bbb',
                        marginBottom: '10px',

                        padding: '10px',
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography
                            component="div"
                            variant="h6"
                            sx={{
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                              width: '150px',
                              height: '100%',
                            }}
                          >
                            {item.attributes.canonicalTitle}
                          </Typography>
                        </CardContent>
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{
                          width: 80,
                          borderRadius: '10px',
                        }}
                        image={item.attributes.posterImage.tiny}
                        alt={item.attributes.canonicalTitle}
                      />
                    </Card>
                  </Link>
                </Box>
              ))}
            </Box>
          )}
        </>
      ) : null}
    </Box>
  );
};

export default Header;
