import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const MAX_ITEMS = 5;

const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const useStyles = makeStyles({
  root: {
    '&:hover': {
      background: '#000',
      border: 'none',
    },
  },
});

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: 'calc((100% - 140px))',
        height: '60px',
        position: 'relative',
      }}
    >
      <Button
        className={classes.root}
        onClick={() => onPageChange(current - 1)}
        variant="contained"
        disabled={current === 1}
        sx={{
          color: '#bbb',
          background: '#131219',
          border: 'none',
        }}
      >
        Anterior
      </Button>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <div key={page}>
            {page > pages ? null : (
              <Button
                className="button"
                onClick={() => setOffset((page - 1) * limit)}
                variant={page === current ? 'contained' : 'outlined'}
                sx={{
                  margin: '0 5px',
                  color: '#bbb',
                  border: 'none',
                }}
              >
                {page}
              </Button>
            )}
          </div>
        ))}
      <Button
        onClick={() => onPageChange(current + 1)}
        disabled={current === pages}
        variant="contained"
        sx={{
          color: '#bbb',
          background: '#131219',
          border: 'none',
        }}
        className={classes.root}
      >
        Próximo
      </Button>
    </Box>
  );
};

export default Pagination;
