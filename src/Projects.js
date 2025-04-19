import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import { Grid, Container} from '@mui/material';

export default function Projects() {
  return (
    <Container sx={{ py: 4 /* vertical padding */, px: 2 /* horizontal */ }}>
      <Grid container spacing={3}>
        <ImgMediaCard 
          image_path={"/images/Architecture.png"}
          name="TradingPlatform"
          description={"A full stack trading platform, with an online UI, Order Management System, Matching Engine, and audit logging."}
          github_link={"https://github.com/bwz5/TradingPlatform"}
        />

        <ImgMediaCard 
          image_path={"/images/rocket.webp"}
          name="Ground Software"
          description={"The software ran on the ground for Cornell Rocketry."}
          github_link={"https://github.com/cornellrocketryteam/Ground-Software"}
        />      

        <ImgMediaCard 
          image_path={"/images/Server.jpg"}
          name="HTTPS Server"
          description={"An Load-Balancing HTTP server written entirely in C. Uses the TCP/IP protocol via socket endpoints, layering on HTTP request parsing and response management in the servers. Uses the Smooth Weighted Round Robin load balancing algorithm, and OpenSSL for TLS/SSL encryption."}
          github_link={"https://github.com/bwz5/Load-Balancing-HTTPS-Server-in-C"}
        />

        <ImgMediaCard 
          image_path={"/images/Game.png"}
          name="Gameboy Simulator"
          description={"A GameBoy-style two dimensional game, with accompanying 6 button controller. The controller face was designed in SolidWorks then 3D printed, and it utilizes a RaspberryPi to carry out button commands."}
          github_link={"https://github.com/bwz5/2D-Virtual-Game-with-RaspberryPi-Controller"}
        />

<       ImgMediaCard 
          image_path={"/images/react.png"}
          name="This website!"
          description={"A simple React website, hosted with GitHub Pages."}
          github_link={"https://github.com/bwz5/website"}
        />
    </Grid>
  </Container>
  );
}
