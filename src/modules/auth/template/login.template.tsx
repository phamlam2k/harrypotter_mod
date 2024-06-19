import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, TextField, Typography, Link, Card, CardContent, IconButton, InputAdornment, FormControlLabel, Checkbox } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useLoginController from './../controllers/login.controller';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const imageDetails = [
  {
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9e3440d-0f91-47a7-82c9-7c72df86c43d/dcmtdg9-67b1e4b2-8a46-439f-a890-5c4f8c4e37e8.jpg/v1/fill/w_1024,h_577,q_75,strp/harry_potter_and_the_philosopher_s_stone_fanart_03_by_vladislavpantic_dcmtdg9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc3IiwicGF0aCI6IlwvZlwvYTllMzQ0MGQtMGY5MS00N2E3LTgyYzktN2M3MmRmODZjNDNkXC9kY210ZGc5LTY3YjFlNGIyLThhNDYtNDM5Zi1hODkwLTVjNGY4YzRlMzdlOC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.27K1WGPVZ18mmRtbdNBovKSisfCq3Xmf974KFDu1ru8',
    title: 'Diagon Alley',
    description: 'Hogwarts is Here celebrates creative works from around the fandom. This is one of our favorite fanart pieces from DeviantArt.',
    artist: 'Thanh Nguyen'
  },
  {
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9e3440d-0f91-47a7-82c9-7c72df86c43d/dcl0klm-39676ff2-50da-4739-9426-e27b3b59a293.jpg/v1/fill/w_1024,h_577,q_75,strp/harry_potter_and_the_philosopher_s_stone_fanart_01_by_vladislavpantic_dcl0klm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc3IiwicGF0aCI6IlwvZlwvYTllMzQ0MGQtMGY5MS00N2E3LTgyYzktN2M3MmRmODZjNDNkXC9kY2wwa2xtLTM5Njc2ZmYyLTUwZGEtNDczOS05NDI2LWUyN2IzYjU5YTI5My5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FycamM_Eho1WMOChGoAlfzk-g7lEof_DxRIxrktJgwo',
    title: 'Hogwarts Castle',
    description: 'An amazing view of the Hogwarts Castle. This fanart captures the magical essence of the school perfectly.',
    artist: 'Jane Doe'
  },
  {
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9e3440d-0f91-47a7-82c9-7c72df86c43d/ddzhn9j-59f0da47-6ed4-4e34-b732-aec2d19513d0.png/v1/fill/w_1024,h_600,q_80,strp/harry_potter_and_the_chamber_of_secrets_fanart_07_by_vladislavpantic_ddzhn9j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYTllMzQ0MGQtMGY5MS00N2E3LTgyYzktN2M3MmRmODZjNDNkXC9kZHpobjlqLTU5ZjBkYTQ3LTZlZDQtNGUzNC1iNzMyLWFlYzJkMTk1MTNkMC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Y9jlhivjYT4XS4LVTbDlVe2ipynHrHPquQ1WsaRE_8s',
    title: 'Chamber of Secrets',
    description: 'The entrance to the Chamber of Secrets, beautifully depicted in this fanart piece.',
    artist: 'John Smith'
  }
];

const LoginTemplate = () => {
  const { loginForm, handleSubmit } = useLoginController();
  const [showPassword, setShowPassword] = useState(false);
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
      {/* Left side - Login form */}
      <Box
        sx={{
          width: { xs: '100%', lg: '22%' }, 
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
              <Button component={Link} href="/login" variant="text" sx={{ fontFamily: 'sans-serif', textTransform: 'none', fontWeight: 'bold', borderBottom: '2px solid purple', marginRight: 2 }}>Log In</Button>
              <Button component={Link} href="/signup" variant="text" sx={{ fontFamily: 'sans-serif', textTransform: 'none' }}>Sign Up</Button>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <form onSubmit={loginForm.handleSubmit(handleSubmit)} noValidate style={{ width: '100%' }}>
              <TextField
                id="username"
                label="Email address"
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
              <Link href="#" variant="body2" align="right" display="block" mb={2} sx={{ textDecoration: 'none', color: 'purple' }}>
                Forgot your password?
              </Link>
              <FormControlLabel
                control={<Checkbox name="remember" color="primary" />}
                label="Remember me"
                sx={{ mt: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, backgroundColor: '#6200ea', '&:hover': { backgroundColor: '#3700b3' } }}
              >
                LOGIN
              </Button>
            </form>
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center'  , fontFamily:'sans-serif' ,}}>
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
            width: { xs: '100%', lg: '78%' }, 
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

export default LoginTemplate;
