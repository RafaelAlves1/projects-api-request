import { Box, Button, Container, Input } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/FirebaseConfig';
import React from 'react';
import { toast } from 'react-toastify';

import './Login.modules.css';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleLogin() {
    if (email !== '' && password !== '') {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success('Logado com sucesso');
          setEmail('');
          setPassword('');
        })
        .catch((err) => {
          if (err.code === 'auth/invalid-email') {
            toast.error('Email inválido');
          }
          if (err.code === 'auth/wrong-password') {
            toast.error('Senha inválida');
          }
        });
    } else {
      toast.error('Preencha todos os campos');
    }
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        height: '100vh',
        padding: '10px',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputLogin"
          placeholder="Digite o email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputLogin"
          placeholder="Digite sua senha"
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            width: '100%',
            margin: '10px 0',
          }}
        >
          Entrar
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '100%',
            marginTop: '10px',
          }}
        >
          Registrar
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
