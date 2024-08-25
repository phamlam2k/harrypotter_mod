import React, { useEffect } from 'react';
import { Box, Container, Tabs, Tab ,Typography } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import { HeaderImage } from 'src/modules/apps/home/_styled/home.styled';
import withAuth from './../constants/withauth';

const HomeLayout = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/') {
      setTabValue(0);
    } else if (location.pathname === '/library/popular') {
      setTabValue(1);
    } else if (location.pathname === '/library/update') {
      setTabValue(2);
    }
  }, [location.pathname]);

  const handleTabChange = (event: any, newValue: React.SetStateAction<number>) => {
    setTabValue(newValue); 
      if (newValue === 0) {
      navigate('/');
    } else if (newValue === 1) {
      navigate('/library/popular');
    } else if (newValue === 2) {
      navigate('/library/update');
    }
  };


  return (
    <Box>
      <Header />
      <HeaderImage>
        <Typography variant="h2">The Hogwarts Library</Typography>
      </HeaderImage>
      <Container>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="All the books" onClick={() => navigate('/')} />
          <Tab label="Most Popular" onClick={() => navigate('/library/popular')} />
          <Tab label="Recently Updated" onClick={() => navigate('/library/update')} />
        </Tabs>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};


export default withAuth(HomeLayout);
