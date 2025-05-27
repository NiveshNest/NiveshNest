// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', py: 2, textAlign: 'center', mt: 'auto' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
