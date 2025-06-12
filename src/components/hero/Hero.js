import React from 'react';
import { Typography, Container } from '@mui/material';
import '../../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <div className="hero-content">
          <Typography variant="h1" className="hero-title">
            Discover timeless elegance
          </Typography>
          <Typography variant="h2" className="hero-subtitle">
            with our luxury watches and clocks
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Hero;