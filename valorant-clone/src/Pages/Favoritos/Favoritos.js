import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CardFavoritos from '../../components/CardAgents/CardFavoritos';

const Favoritos = () => {
  const [agents, setAgents] = React.useState([]);

  React.useEffect(() => {
    const myAgentList = localStorage.getItem('@agent');
    setAgents(JSON.parse(myAgentList) || []);
  }, []);

  function remove(id) {
    let filterAgent = agents.filter((item) => {
      return item.data.uuid !== id;
    });

    if (filterAgent) toast.success('Agente removido');

    setAgents(filterAgent);
    localStorage.setItem('@agent', JSON.stringify(filterAgent));
  }

  if (agents)
    return (
      <Container
        maxWidth="false"
        sx={{
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Grid container spacing={2}>
          {agents.length >= 1 ? (
            <>
              {agents.map((agent) => (
                <Grid item xs="12" md="6" lg="3" xl="3" key={agent.data.uuid}>
                  <CardFavoritos
                    id={agent.data.uuid}
                    name={agent.data.displayName}
                    icon={agent.data.displayIcon}
                    roleName={agent.data.role && agent.data.role.displayName}
                    roleIcon={agent.data.role && agent.data.role.displayIcon}
                    remove={() => remove(agent.data.uuid)}
                  />
                </Grid>
              ))}
            </>
          ) : (
            <Box
              width="100%"
              height="calc(100vh - 64px)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography>Nenhum Agente favoritado</Typography>
              <Link to="/agentes">
                <Button variant="contained"> Favoritar agente</Button>
              </Link>
            </Box>
          )}
        </Grid>
      </Container>
    );
};

export default Favoritos;
