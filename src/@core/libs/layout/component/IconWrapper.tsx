import { alpha, styled } from '@mui/material/styles';

const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  '&:hover::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'white'
  },
}));

export default IconWrapper;
