import React, { useState, MouseEvent } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'Features', 'About', 'Login'];

const theme = createTheme({
  typography: {
    fontFamily: 'Europa',
  },
});

function App() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: '#212121' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <LocalLibraryIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            Gokulam Yoga
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button color="inherit">{page}</Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" edge="start" color="inherit" onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' } }}>
              {pages.map((page) => (
                <MenuItem>{page}</MenuItem>
              ))}
            </Menu>
          </Box>

          <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'flex', md: 'none' } }}>
            <LocalLibraryIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            Gokulam Yoga
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
