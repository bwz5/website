// client/src/Header.js
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const nav = useNavigate();

  return (
    <AppBar position="static" >
      <Toolbar >
        <Button color="inherit" onClick={() => nav('/')}>
            Home
        </Button>

        <Button color ="inherit" onClick={() => nav('/blog')}>
            Blog 
        </Button>

        <Button color ="inherit" onClick={() => nav('/projects')}>
            Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
}
