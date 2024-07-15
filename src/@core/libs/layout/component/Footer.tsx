import React from 'react';
import { Container, Typography, Box, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px 0',
        marginTop: 'auto',
        textAlign: 'center'
      }}
    >
      <Container>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Hogwarts is Here © 2024
        </Typography>
        <Typography variant="body2" color="textSecondary">
          HogwartsIsHere.com was made for fans, by fans, and is not endorsed or supported directly or indirectly with Warner Bros.
          Entertainment, JK Rowling, Wizarding World Digital, or any of the official Harry Potter trademark/right holders.
        </Typography>
        <Box sx={{ margin: '10px 0' }}>
          <IconButton
            component={Link}
            href="https://www.facebook.com"
            aria-label="Facebook"
            sx={{ color: '#3b5998' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component={Link}
            href=""
            aria-label="Twitter"
            sx={{ color: '#1da1f2' }}
          >
            <TwitterIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary">
          Powered by Dac Tuan Thanh Nguyen 
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
