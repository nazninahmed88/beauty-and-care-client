import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Header from '../../Header/Header';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <Header></Header>
            <div >
                <Container >
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <Typography className='fs-3 text-center' gutterBottom>Login</Typography>
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '100%', m: 1, backgroundColor: 'white' }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '100%', m: 1, backgroundColor: 'white' }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard" />

                                <Button sx={{ width: '25%', m: 1 }} type="submit" variant="contained">Login</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <br />
                                    <Button variant="text">New User? Please Register</Button>
                                </NavLink>
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </form>

                            <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '100%' }} src='./images/login.png' alt="" />
                        </Grid>

                    </Grid>
                </Container>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Login;