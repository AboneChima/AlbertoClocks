import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import '../../styles/Ticker.css';

const Ticker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Get geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=4e2b6de523034920a0f0ff19228253c8`
          );
          const data = await response.json();
          if (data.results && data.results[0]) {
            setLocation(data.results[0].formatted);
          }
        } catch (error) {
          console.error('Error fetching location:', error);
          setLocation('Location unavailable');
        }
      });
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <Box className="ticker-container">
      <Typography className="ticker-content">
        {currentTime.toLocaleString()} | {location}
      </Typography>
    </Box>
  );
};

export default Ticker;