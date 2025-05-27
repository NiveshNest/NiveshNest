import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  ListItemButton
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { name: 'Retirement Planning', path: '/retirement-planning' },
  { name: 'Investment planning', path: '/Investment-planning' },
  { name: 'Tax and Loan', path: '/Tax-and-Loan' },
  { name: 'Goal Planning', path: '/Goal-Planning' }
];

const rightNavItems = [
  { name: 'About us', path: '/' },
  { name: 'Login', path: '/login' },
  { name: 'Sign Up', path: '/sign-up' },
  
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => handleNavigation('/')}
          >
            Company Logo
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow:1 }}>
            {navItems.map((item) => (
              <Button 
                key={item.name} 
                color="inherit"
                onClick={() => handleNavigation(item.path)}
                sx={{ 
                  mx: 1,
                  borderBottom: location.pathname === item.path ? '2px solid white' : 'none'
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' },flexGrow:0 }}>
            {rightNavItems.map((item) => (
              <Button 
                key={item.name} 
                color="inherit"
                onClick={() => handleNavigation(item.path)}
                sx={{ 
                  mx: 1,
                  borderBottom: location.pathname === item.path ? '2px solid white' : 'none'
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItemButton 
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
            >
              <ListItem>
                <ListItemText primary={item.name} />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;