import React from 'react';
import { Container, Typography, Button, Box, Card, CardContent, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const nav = useNavigate();
  return (
    <Container
      sx={{
        mt: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',        // <-- center children horizontally
      }}
    >
      <Stack
        spacing={4}
        sx={{
          width: '100%',
          maxWidth: 800,              // <-- optional: limit max width
          alignItems: 'center',       // <-- center cards in the stack
        }}
      >
        <Card sx={{ width: '100%' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
              Welcome to my website
            </Typography>
            <Box mt={4} display="flex" justifyContent="center" gap={2}>
              <Button variant="contained" onClick={() => nav('/blog')}>
                Blog
              </Button>
              <Button variant="contained" onClick={() => nav('/projects')}>
                Projects
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography component="p">
              I am a current sophomore at Cornell University studying Computer Science.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
