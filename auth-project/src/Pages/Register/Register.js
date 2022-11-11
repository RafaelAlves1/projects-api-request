import { Box, Button, Container, Input } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/FirebaseConfig';
import React from 'react';
import { toast } from 'react-toastify';

import './Register.modules.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const navigate = useNavigate();

  // async function handleCadastro(e) {
  //   e.preventDefault();
  //   if (email !== '' && password !== '') {
  //     await createUserWithEmailAndPassword(auth, email, password)
  //       .then(() => {
  //         toast.success('Cadastrado com sucesso');
  //         setEmail('');
  //         setPassword('');
  //         navigate('/');
  //       })
  //       .catch((err) => {
  //         if (err.code === 'auth/email-already-in-use') {
  //           toast.error('Email ja cadastrado');
  //         }

  //         if (err.code === 'auth/weak-password') {
  //           toast.error('Senha fraca');
  //         }
  //       });
  //   } else {
  //     toast.error('Preencha todos os campos');
  //   }
  // }
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
          className="inputRegister"
          placeholder="Digite o email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputRegister"
          placeholder="Digite sua senha"
        />
        <Button
          variant="contained"
          // onClick={handleCadastro}
          sx={{
            width: '100%',
            margin: '10px 0',
          }}
        >
          Cadastrar
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
