import React from 'react';
import { Box, CircularProgress } from '@mui/material';

// Assuming this is your progress bar component
function ProgressBar() {
  let progress = 40;
  return (
    <Box>
      <CircularProgress
        progress={progress}
        sx={{ padding: '20px' }}
      />
    </Box>
  );
}

export default ProgressBar;
