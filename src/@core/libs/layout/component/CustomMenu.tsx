import React from 'react';
import { Menu, MenuList, MenuItem, Typography, ListItemText, ListItemIcon } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const CustomMenuContainer = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    minWidth: '240px',
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
    },
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: alpha(theme.palette.action.hover, 0.1),
    transform: 'scale(1.02)',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  padding: theme.spacing(1.5),
  fontSize: '14px',
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  '&:not(:last-child)': {
    marginBottom: theme.spacing(1),
  },
  '& .MuiListItemIcon-root': {
    minWidth: '32px',
  },
}));

interface CustomMenuProps {
  anchorEl: null | HTMLElement;
  anchorOrigin: { vertical: string; horizontal: string; };
  keepMounted: true;
  transformOrigin: any;
  open: boolean;
  onClose: () => void;
  title?: string;
  viewAllText?: string;
  items?: { icon: React.ReactNode; text: string }[];
  scrollable?: boolean;  // Add this new prop
}

const CustomMenu: React.FC<CustomMenuProps> = ({ anchorEl, open, onClose, title, viewAllText, items, scrollable }) => (
  <CustomMenuContainer
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
    open={open}
    onClose={onClose}
  >
    <MenuList style={scrollable ? { maxHeight: '300px', overflowY: 'auto' } : {}}>
      {title && (
        <CustomMenuItem>
          <Typography variant="body2" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" component="div" sx={{ cursor: 'pointer' }}>
            {viewAllText}
          </Typography>
        </CustomMenuItem>
      )}
      {items && items.map((item, index) => (
        <CustomMenuItem key={index} onClick={onClose}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </CustomMenuItem>
      ))}
    </MenuList>
  </CustomMenuContainer>
);

export default CustomMenu;
