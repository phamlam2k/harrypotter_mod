import React from 'react';
import { List, ListItem, ListItemText, Typography, Avatar, ListItemIcon, Divider, Box } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GamepadIcon from '@mui/icons-material/Gamepad';
import SchoolIcon from '@mui/icons-material/School';

const SidebarContent = () => (
  <Box sx={{ padding: '20px', bgcolor: '#f5f5f5', height: '100%' }}>
    <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
      <img
        src={'https://burrow.hogwartsishere.com/static//fawkes/logo_flat_black.png'}
        alt="Hogwarts is Here"
        style={{ height: '50%', width: '50%', marginBottom: '20px' }}
      />
      <Avatar
        alt="Dac Tuan Thanh Nguyen"
        src="https://cdn-icons-png.flaticon.com/512/195/195138.png" // replace with the path to your avatar image
        sx={{ width: 80, height: 80, margin: '0 auto' }}
      />
      <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
        Dac Tuan Thanh Nguyen
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ color: 'red' }}>
        1st Year • 0 Points
      </Typography>
    </Box>
    <Divider sx={{ marginBottom: '20px' }} />
    <List>
      <ListItem button style={{ color: 'rgb(37, 150, 190)' }}>
        <ListItemIcon style={{ color: 'rgb(37, 150, 190)' }}>
          <LibraryBooksIcon  />
        </ListItemIcon>
        <ListItemText primary="Hogwarts Library" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NewspaperIcon />
        </ListItemIcon>
        <ListItemText primary="The Newsroom" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <GamepadIcon />
        </ListItemIcon>
        <ListItemText primary="Hogwartle" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Academics" />
      </ListItem>
    </List>
  </Box>
);

export default SidebarContent;
