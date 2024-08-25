import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import IconWrapper from './IconWrapper';
import SidebarContent from './SideBarContent';
import CustomMenu from './CustomMenu';
import logo from './Logo';
import { Link } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../styles/styles.header';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState<null | HTMLElement>(null);
  const [mailEl, setMailEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleMailMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMailEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNotificationsAnchorEl(null);
    setMailEl(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Remove the access token from localStorage
    navigate('/auth/login'); // Redirect to the login page
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#4A0202', fontFamily: 'sans-serif' }}>
      <Toolbar>
        <IconWrapper>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ mx: 1 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </IconWrapper>
        <Link href="/">
          <img src={logo} alt="Hogwarts is Here" style={{ height: '40px', marginRight: 'auto', marginLeft: '10px', marginTop: '8px' }} />
        </Link>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search HiH"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <IconWrapper>
          <IconButton color="inherit" onClick={handleMailMenu}>
            <MailIcon />
          </IconButton>
        </IconWrapper>

        <CustomMenu
          anchorEl={mailEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={Boolean(mailEl)}
          onClose={handleClose}
          title="Messages"
          viewAllText="Open Inbox"
        />

        <IconWrapper>
          <IconButton color="inherit" onClick={handleNotificationsMenu}>
            <NotificationsIcon />
          </IconButton>
        </IconWrapper>
        <CustomMenu
          anchorEl={notificationsAnchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={Boolean(notificationsAnchorEl)}
          onClose={handleClose}
          title="Notifications"
          viewAllText="View All"
        />

        <IconWrapper>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
       
        <Typography variant="body1" color="inherit" style={{ cursor: 'pointer', margin: '10px' }} onClick={handleMenu}>
          Dac (0)
        </Typography>
        </IconWrapper>

        <CustomMenu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          items={[
            { icon: <MessageIcon />, text: 'Messages' },
            { icon: <PersonIcon />, text: 'View Profile' },
            { icon: <EditIcon />, text: 'Edit Profile' },
            { icon: <SettingsIcon />, text: 'Settings' },
            {
              icon: <LogoutIcon />,
              text: 'Log Out',
              onClick: handleLogout, // Attach the logout handler to this item
            },
          ]}
        />
      </Toolbar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <SidebarContent setOpen={setDrawerOpen} />
      </Drawer>
    </AppBar>
  );
}

export default Header;
