import { Container, Grid } from '@mui/material';
import React from 'react';
import CardAgents from '../../components/CardAgents/CardAgents';
import Head from '../../components/Head/Head';
import api from '../../services/api';

const Agents = () => {
  const [agents, setAgents] = React.useState({});

  React.useEffect(() => {
    api
      .get('/agents?language=pt-BR&isPlayableCharacter=true')
      .then((response) => {
        setAgents(response.data.data);
      });
  }, []);

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: '100vh',
        padding: '5px',
      }}
    >
      <Head title="Agentes" />

      <Grid container spacing={2}>
        {agents.length >= 1 ? (
          <>
            {agents.map((agent) => (
              <Grid item xs="12" md="6" lg="3" xl="3" key={agent.uuid}>
                <CardAgents
                  id={agent.uuid}
                  name={agent.displayName}
                  icon={agent.displayIcon}
                  roleName={agent.role && agent.role.displayName}
                  roleIcon={agent.role && agent.role.displayIcon}
                />
              </Grid>
            ))}
          </>
        ) : (
          'Loading...'
        )}
      </Grid>
    </Container>
  );
};

export default Agents;
