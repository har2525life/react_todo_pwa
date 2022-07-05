import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Container, TextField, Typography, Box, Button, Avatar, Grid } from '@mui/material';
import { Navigate, Link, useNavigate } from "react-router-dom"
import Header from '../components/Header';
import { LockOutlined } from '@mui/icons-material';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../servise/firebaseConfig';

const Login = () => {

    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(
                auth, email, password
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleClick = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(() => {
                navigate(`/login/`)
            })
    }

  return (
    <>
        {
            currentUser ? (
                <Navigate to={`/`} />
            ) : (
                <>
                    <Header />
                    <Container component="main" maxWidth="xs">
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlined />
                                </Avatar>
                                <Typography component='h1' variant="h5">Login</Typography>
                                <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <TextField
                                        name="email"
                                        type="email"
                                        label='Email Address'
                                        fullWidth
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoFocus
                                    />
                                    <TextField
                                        name="password"
                                        type="password"
                                        label='Password'
                                        required
                                        fullWidth
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                    <Button
                                        type='submit'
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: 3}}
                                    >
                                        LOGIN
                                    </Button>
                                    <Button
                                        type='btn'
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: 2, mb: 2 }}
                                        onClick={handleClick}
                                    >
                                        Google LogIn
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link to={`/register/`}>新規作成はこちら</Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                </>
            )
        }
    </>
  )
}

export default Login