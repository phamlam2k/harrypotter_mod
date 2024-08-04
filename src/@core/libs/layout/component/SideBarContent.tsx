import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography, Avatar, ListItemIcon, Divider, Collapse } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GamepadIcon from '@mui/icons-material/Gamepad';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import BookIcon from '@mui/icons-material/Book';
import CreateIcon from '@mui/icons-material/Create';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

interface SidebarContentProps {
  setOpen: (open: boolean) => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ setOpen }) => {
  const [openLibrary, setOpenLibrary] = useState(false);
  const navigate = useNavigate();

  const handleLibraryClick = () => {
    setOpenLibrary(!openLibrary);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Box sx={{ padding: '20px', bgcolor: '#f5f5f5', height: '100%' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="https://burrow.hogwartsishere.com/static//fawkes/logo_flat_black.png"
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
      <Divider sx={{ marginBottom: '0px' }} />
      <List>
        <ListItem button onClick={handleLibraryClick} style={{ color: 'rgb(37, 150, 190)' }}>
          <ListItemIcon style={{ color: 'rgb(37, 150, 190)' }}>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Hogwarts Library" />
          {openLibrary ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openLibrary} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/')}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="All the books" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/library/storywritten')}>
              <ListItemIcon>
                <NewspaperIcon />
              </ListItemIcon>
              <ListItemText primary="Handwritten story" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/library/popular')}>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Most Popular" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/library/favorite')}>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="My Favorite Book" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/library/yourbook')}>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Books I'm Writing" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleNavigation('/newsroom')}>
          <ListItemIcon>
            <NewspaperIcon />
          </ListItemIcon>
          <ListItemText primary="The Newsroom" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/about-us')}>
          <ListItemIcon>
            <GamepadIcon />
          </ListItemIcon>
          <ListItemText primary="About us" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SidebarContent;
