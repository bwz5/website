import React from 'react';
import { Container, Typography, Card, CardContent, Stack } from '@mui/material';

export default function Blog() {
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
              First Post
            </Typography>
            <Typography component="p" gutterBottom>
              one day something will be written here
            </Typography>
          </CardContent>
        </Card>

      </Stack>
    </Container>
  );
}
