import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const NavBarContainer = styled('div')({
  flexGrow: 1,
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const NavLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
});

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <List>
      {['Home', 'Overview', 'Tasks', 'Schedule', 'Corpus', 'Evaluation', 'Submission', 'Results', 'Application', 'Resources', 'Contact'].map((text) => (
        <ListItem button key={text} component={Link} href={`/${text.toLowerCase()}`}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <NavBarContainer>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
              </Drawer>
            </>
          ) : (
            <>
              <Title variant="h6">
                COLIEE 2024
              </Title>
              {['Home', 'Overview', 'Tasks', 'Schedule', 'Corpus', 'Evaluation', 'Submission', 'Results', 'Application', 'Resources', 'Contact'].map((text) => (
                <NavLink key={text} href={`/${text.toLowerCase()}`} passHref>
                  <Button color="inherit">{text}</Button>
                </NavLink>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </NavBarContainer>
  );
};

export default NavBar;
