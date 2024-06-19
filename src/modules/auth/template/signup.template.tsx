import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, TextField, Typography, Link, Card, CardContent, IconButton, InputAdornment, FormControlLabel, Checkbox, FormControl, FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useSignUpController from '../controllers/signup.controller'; // Assuming you have a sign-up controller
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const imageDetails = [
  {
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9e3440d-0f91-47a7-82c9-7c72df86c43d/dclmg87-c561f769-f061-4fd7-8035-514556d6e3bc.jpg/v1/fill/w_1024,h_576,q_75,strp/harry_potter_and_the_philosopher_s_stone_fanart_02_by_vladislavpantic_dclmg87-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYTllMzQ0MGQtMGY5MS00N2E3LTgyYzktN2M3MmRmODZjNDNkXC9kY2xtZzg3LWM1NjFmNzY5LWYwNjEtNGZkNy04MDM1LTUxNDU1NmQ2ZTNiYy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.h-fhVhxOXvEsiqAaJIF2f97s3j7lMVbSVxbpgY2X_iA',
    title: 'Letters from No One',
    description: 'A captivating fanart piece illustrating the magical letters that marked the beginning of Harry Potter\'s journey to Hogwarts.',
    artist: 'Thanh Nguyen'
  },
  {
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9e3440d-0f91-47a7-82c9-7c72df86c43d/dde44ws-e76435bf-61e1-43fc-a12c-1cac1c81a24a.jpg/v1/fill/w_1024,h_510,q_75,strp/harry_potter_and_the_philosopher_s_stone_fanart_15_by_vladislavpantic_dde44ws-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEwIiwicGF0aCI6IlwvZlwvYTllMzQ0MGQtMGY5MS00N2E3LTgyYzktN2M3MmRmODZjNDNkXC9kZGU0NHdzLWU3NjQzNWJmLTYxZTEtNDNmYy1hMTJjLTFjYWMxYzgxYTI0YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CNXeXyR_BEG38g4sm-AfoM0Sj6tLoI4JwEujrx2YBqU',
    title: 'Hogwarts at Twilight',
    description: 'An amazing view of the Hogwarts Castle. This fanart captures the magical essence of the school perfectly.',
    artist: 'Jane Doe'
  },
  {
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9e3440d-0f91-47a7-82c9-7c72df86c43d/dcu3ave-78a0e3aa-44bb-41d0-b05b-0d7937fec228.jpg/v1/fill/w_1024,h_575,q_75,strp/harry_potter_fanart_08_by_vladislavpantic_dcu3ave-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc1IiwicGF0aCI6IlwvZlwvYTllMzQ0MGQtMGY5MS00N2E3LTgyYzktN2M3MmRmODZjNDNkXC9kY3UzYXZlLTc4YTBlM2FhLTQ0YmItNDFkMC1iMDViLTBkNzkzN2ZlYzIyOC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZXSmu5GMoy0JDnD9QoCGL7uBklcw3hTZQcrXU2fQztk',
    title: 'Secrets of the Chamber',
    description: 'The entrance to the Chamber of Secrets, beautifully depicted in this fanart piece.',
    artist: 'John Smith'
  }
];

const SignUpTemplate = () => {
  const { signUpForm, handleSubmit } = useSignUpController();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getErrorMessage = (error:any) => {
    if (error && typeof error.message === 'string') {
      return error.message;
    }
    return undefined;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageDetails.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '100vh',
        backgroundColor: '#f4f4f4', 
      }}
    >
      {/* Left side - Sign Up form */}
      <Box
        sx={{
          width: { xs: '100%', md: '22%' }, 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 1,
          backgroundColor: 'white',
        }}
      >
        <Card sx={{ width: '100%', maxWidth: 500, padding: 4, boxShadow: 0, borderRadius: 5 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <img src="https://burrow.hogwartsishere.com/static//fawkes/logo_flat_black.png" alt="Hogwarts is Here" style={{ width: '100%', maxWidth: '300px', marginBottom: '16px' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Button component={Link} href="/login" variant="text" sx={{ textTransform: 'none', fontFamily: 'sans-serif' }}>Log In</Button>
              <Button component={Link} href="/signup" variant="text" sx={{ textTransform: 'none', fontFamily: 'sans-serif', fontWeight: 'bold', borderBottom: '2px solid purple', marginLeft: 2 }}>Sign Up</Button>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <form onSubmit={signUpForm.handleSubmit(handleSubmit)} noValidate style={{ width: '100%' }}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                {...signUpForm.register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters long',
                  },
                })}
                error={!!signUpForm.formState.errors.username}
                helperText={getErrorMessage(signUpForm.formState.errors.username)}
              />
              <TextField
                id="email"
                label="Email address"
                variant="outlined"
                fullWidth
                margin="normal"
                {...signUpForm.register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Invalid email address',
                  },
                })}
                error={!!signUpForm.formState.errors.email}
                helperText={getErrorMessage(signUpForm.formState.errors.email)}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                {...signUpForm.register('password', {
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
                error={!!signUpForm.formState.errors.password}
                helperText={getErrorMessage(signUpForm.formState.errors.password)}
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
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                type={showConfirmPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                {...signUpForm.register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: (value: any) => value === signUpForm.getValues('password') || 'Passwords do not match'
                })}
                error={!!signUpForm.formState.errors.confirmPassword}
                helperText={getErrorMessage(signUpForm.formState.errors.confirmPassword)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl error={!!signUpForm.formState.errors.terms} sx={{ mt: 2 }}>
                <FormControlLabel
                  control={<Checkbox name="terms" color="primary" />}
                  label="I agree to the terms and conditions"

                  {...signUpForm.register('terms', {
                    required: 'You must agree to the terms and conditions'
                    ,
                  })}
                />
                <FormHelperText>{getErrorMessage(signUpForm.formState.errors.terms)}</FormHelperText>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, backgroundColor: '#6200ea', '&:hover': { backgroundColor: '#3700b3' } }}
              >
                SIGN UP
              </Button>
            </form>
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center',fontFamily:'sans-serif' }}>
              This website was made for fans, by fans, and is not endorsed or supported directly or indirectly
              with Warner Bros. Entertainment, JK Rowling, Pottermore, or any of the official Harry Potter trademark/right holders.
            </Typography>
          </CardContent>
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', fontFamily: 'sans-serif' }}>
          © {new Date().getFullYear()} Hogwarts. All rights reserved.
        </Typography>
        </Card>
      </Box>
      {!isMobile && (
        /* Right side - Background image slider */
        <Box
          sx={{
            width: { xs: '100%', md: '78%' }, 
            backgroundImage: `url(${imageDetails[currentImageIndex].url})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            color: 'white',
            padding: 4,
            transition: '2s', 
          }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 2, fontFamily: 'sans-serif', transition: '2s' }}>
            {imageDetails[currentImageIndex].title}
          </Typography>
          <Typography variant="body2" align="center" sx={{ mb: 2, fontFamily: 'sans-serif', fontSize: 20, maxWidth: 900, transition: '2s' }}>
            {imageDetails[currentImageIndex].description}
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 1, fontFamily: 'sans-serif', fontSize: 20, transition: '2s' }}>
            - Illustrated by <Box component="span" sx={{ color: 'red' }}>{imageDetails[currentImageIndex].artist}</Box>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SignUpTemplate;
