// components/NavBar.tsx
import React, { useState, MouseEvent, KeyboardEvent } from 'react';
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
  display: 'flex',
  alignItems: 'center',
});

const NavLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
});

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <List>
      {['Overview', 'Tasks', 'Schedule', 'Corpus', 'Evaluation', 'Submission', 'Results', 'Application', 'Resources', 'Contact'].map((text) => (
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
                <img src="/icon.png" alt="COLIEE Icon" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                COLIEE 2024
              </Title>
              {['Overview', 'Tasks', 'Schedule', 'Corpus', 'Evaluation', 'Submission', 'Results', 'Application', 'Resources', 'Contact'].map((text) => (
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
