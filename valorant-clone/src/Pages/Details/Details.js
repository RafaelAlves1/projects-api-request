import { Box, Button, Container, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { makeStyles } from '@mui/styles';

import { toast } from 'react-toastify';

const useStyles = makeStyles({
  root: {
    color: '#bbb',
  },
});

const Details = () => {
  const classes = useStyles();
  const [detail, setDetail] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    api
      .get(`/agents/${id}?language=pt-BR&isPlayableCharacter=true`)
      .then((response) => {
        setDetail(response.data);
      })
      .catch((err) => console.log(err))
      .finally();
  }, [id]);

  function saveAgent() {
    const myAgentList = localStorage.getItem('@agent');
    let myAgentSave = JSON.parse(myAgentList) || [];
    const hasAgent = myAgentSave.some(
      (agent) => agent.data.uuid === detail.data.uuid,
    );
    if (hasAgent) {
      toast.error('Esse agente ja existe nos favoritos');
      return;
    }

    myAgentSave.push(detail);
    localStorage.setItem('@agent', JSON.stringify(myAgentSave));
    toast.success('Agente salvo');
  }
  if (detail.status === 200)
    return (
      <>
        <Container
          maxWidth="false"
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              margin: '0 auto',
              width: '1200px',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Box maxWidth="500px">
              <img
                src={detail.data.bustPortrait}
                alt={detail.data.displayName}
                width="100%"
              />
            </Box>
            <Box maxWidth="700px" display="flex" flexDirection="column">
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Tooltip title="Favoritar Agente">
                  <Button onClick={saveAgent}>
                    <FavoriteIcon color="error" />
                  </Button>
                </Tooltip>
              </Box>
              <Box display="flex" justifyContent="start" alignItems="center">
                <Typography className={classes.root} variant="h4">
                  {detail.data.displayName}
                </Typography>
                <Tooltip
                  title={detail.data.role.displayName}
                  placement="right-end"
                >
                  <Box width="30px" marginLeft="15px">
                    <img
                      src={detail.data.role.displayIcon}
                      alt={detail.data.role.displayName}
                      width="100%"
                    />
                  </Box>
                </Tooltip>
              </Box>

              <Typography className={classes.root}>
                {detail.data.description}
              </Typography>

              <Typography className={classes.root}>
                {detail.data.role.description}
              </Typography>

              <Typography className={classes.root}>Habilidades:</Typography>

              {detail.data.abilities && (
                <Box
                  display="flex"
                  width="100%"
                  flexWrap="wrap"
                  justifyContent="space-between"
                >
                  {detail.data.abilities.map((abiliti, index) => (
                    <Box key={index} display="flex" flexDirection="column">
                      <Typography className={classes.root} marginBottom="10px">
                        {abiliti.displayName}
                      </Typography>
                      <Tooltip title={abiliti.description}>
                        <Box width="100px">
                          <img
                            src={
                              abiliti.displayIcon !== null
                                ? abiliti.displayIcon
                                : 'https://net3d.com.br/mercadoimgs/imagem_indisponivel.png'
                            }
                            alt={abiliti.displayName}
                            width="100%"
                          />
                        </Box>
                      </Tooltip>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </>
    );
};

export default Details;
