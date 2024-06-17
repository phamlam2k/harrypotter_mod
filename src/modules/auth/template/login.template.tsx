import React, { useState } from 'react';
import { Box, Button, Divider, TextField, Typography, Link, Card, CardContent, IconButton, InputAdornment } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useLoginController from './../controllers/login.controller';
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';
import { url } from 'inspector';

const LoginTemplate = () => {
  const { loginForm, handleSubmit } = useLoginController();
  const [showPassword, setShowPassword] = useState(false);

  const getErrorMessage = (error:any) => {
    if (error && typeof error.message === "string") {
      return error.message;
    }
    return undefined;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          padding: 4,
          backgroundColor: '#d5dae3',
        }}
      >
        <Card sx={{ width: '100%', maxWidth: 500, padding: 4, boxShadow: 3 , borderRadius:5 }}>
          <CardContent> 
            <Typography variant="h3" component="h1" sx={{ fontFamily:'Roboto' , fontSize:'bold'}} gutterBottom align="center">
              Sign In
            </Typography>
            <Typography variant="body1" align="center" sx={{ fontFamily:'Roboto'}} mb={2}>
              How do I get started from finding a best job?
            </Typography>
            <Button
              variant="outlined"
              
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{ mb: 1 
                , fontFamily:'sans-serif'

              }}
            >
              Sign in with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<FacebookIcon />}
              sx={{ mb: 2,
                  fontFamily:'sans-serif'
               }}
            >
              Sign in with Facebook
            </Button>
            <Divider>or Sign in with Email</Divider>
            <form onSubmit={loginForm.handleSubmit(handleSubmit)} noValidate style={{ width: '100%' }}>
              <TextField
                id="username"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...loginForm.register('username', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Invalid email address',
                  },
                })}
                error={!!loginForm.formState.errors.username}
                helperText={getErrorMessage(loginForm.formState.errors.username)}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                {...loginForm.register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                  maxLength: {
                    value: 12,
                    message: 'Password must be no more than 12 characters long',
                  },
                })}
                error={!!loginForm.formState.errors.password}
                helperText={getErrorMessage(loginForm.formState.errors.password)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Link href="#" variant="body2" align="right" display="block" mb={2}>
                Forget Password?
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, backgroundColor: '#6200ea', '&:hover': { backgroundColor: '#3700b3' } }}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          width: '50%',
          backgroundColor: '#6200ea',
          backgroundImage: 'url(https://wallpaper.forfun.com/fetch/8a/8a9f2adb9b92e59c0d47bf7733a08f57.jpeg)',
          backgroundSize: 'cover',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Typography variant="h3" sx={{ fontFamily:'sans-serif'}} gutterBottom>
          Very good works are waiting for you 
        </Typography>
         <Button
                type="button"
                variant="contained"
                color="primary"
                sx={{ mt: 2, backgroundColor: '#6200ea', '&:hover': { backgroundColor: '#3700b3' } }}
              >
                Sign Up Now
              </Button>
       
      </Box>
    </Box>
  );
};

export default LoginTemplate;
