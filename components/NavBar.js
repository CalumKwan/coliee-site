import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { styled } from '@mui/system';

const NavBarContainer = styled('div')({
  flexGrow: 1,
});

const MenuButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const Title = styled(Typography)({
  flexGrow: 1,
});

const NavLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  marginLeft: 16,
});

const NavBar = () => {
  return (
    <NavBarContainer>
      <AppBar position="static">
        <Toolbar>
          <Title variant="h6">
            COLIEE 2024
          </Title>
          <NavLink href="/" passHref>
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink href="/overview" passHref>
            <Button color="inherit">Overview</Button>
          </NavLink>
          <NavLink href="/tasks" passHref>
            <Button color="inherit">Tasks</Button>
          </NavLink>
          <NavLink href="/schedule" passHref>
            <Button color="inherit">Schedule</Button>
          </NavLink>
          <NavLink href="/corpus" passHref>
            <Button color="inherit">Corpus</Button>
          </NavLink>
          <NavLink href="/evaluation" passHref>
            <Button color="inherit">Evaluation</Button>
          </NavLink>
          <NavLink href="/submission" passHref>
            <Button color="inherit">Submission</Button>
          </NavLink>
          <NavLink href="/results" passHref>
            <Button color="inherit">Results</Button>
          </NavLink>
          <NavLink href="/application" passHref>
            <Button color="inherit">Application</Button>
          </NavLink>
          <NavLink href="/resources" passHref>
            <Button color="inherit">Resources</Button>
          </NavLink>
          <NavLink href="/contact" passHref>
            <Button color="inherit">Contact</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </NavBarContainer>
  );
};

export default NavBar;
