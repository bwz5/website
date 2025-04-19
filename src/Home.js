import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton
} from '@mui/material';

export default function HomeCard() {
  const nav = useNavigate();
  return (
    <Container sx={{ mt: 8 }}>
      <Card>
        <CardContent>
          {/* Top section: text on left, image on right */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 2,                  // space between text & image
            }}
          >
            {/* Text block */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" gutterBottom>
                Hello!
              </Typography>
              <Typography variant="body1" >
              My name is Benjamin Zou, and I am an undergraduate at Cornell University studying Computer Science and Electrical Engineering. In my free time, I enjoy working on coding projects, reading, and playing sports with my friends.
            </Typography>
            <br></br>
            <Typography variant="body1">
              On SSDS, I managed the software development process for miniature PCB satellites and wrote the flight software to send telemetry from the device toward the ground station.
              </Typography>
              <br></br>
             <Typography variant="body1">
              On Cornell Rocketry I manage the ground station that receives telemetry data from the rocket, specifically on the system that fills the rocket with liquid fuel.
              </Typography>
              <br></br>
              <Typography variant="body1">
              This summer, I will be joining AWS in Seattle.
              </Typography>
            </Box>

            {/* Image block, right‑aligned with padding */}
            <Box
              sx={{
                mt: { xs: 2, md: 0 },  // add top margin when stacked
                textAlign: 'right',    // align its contents right
                pr: { md: 2 },         // extra right padding on md+
              }}
            >
              <Box
                component="img"
                src="/images/me.jpg"
                alt="Benjamin Zou"
                sx={{
                  maxWidth: 200,
                  width: '100%',      // responsive down to smaller widths
                  height: 'auto',
                  borderRadius: 1,
                }}
              />
            </Box>
          </Box>

          {/* Bottom section: centered social links */}
          <Box mt={1} display="flex" justifyContent="center" gap={1}>
            <IconButton
              component="a"
              href="https://www.instagram.com/benwzou/"
              target="_blank"
              rel="noopener"
            >
              <Box
                component="img"
                src="/images/insta.webp"
                alt="Instagram"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/benjamin-zou-32a53327b/"
              target="_blank"
              rel="noopener"
            >
              <Box
                component="img"
                src="/images/linkedin.png"
                alt="LinkedIn"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
