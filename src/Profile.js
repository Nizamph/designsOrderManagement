import { ExpandMore } from '@mui/icons-material';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import ProPic from './icons/man.jpg';

const Profile = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Grid
      width={'195px'}
      bgcolor='white'
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='48px'>
      <Grid
        display='flex'
        maxWidth='180px'
        paddingX='20px'
        boxShadow='1px 1px 12px grey'
        padding='3px'
        sx={{ bgcolor: 'white', borderRadius: '40px' }}
        justifyContent='center'
        alignItems='center'>
        <Grid
          style={{
            width: '45px',
            height: '45px',
            objectFit: 'cover',
          }}>
          <img
            src={ProPic}
            alt='Profile picture'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '40px',
            }}
          />
        </Grid>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          marginLeft='16px'
          justifyContent='center'>
          <Typography fontSize='10px'>Alen george</Typography>
          <Typography fontSize='8px'>Product Manager</Typography>
        </Grid>
        <ExpandMore />
      </Grid>
    </Grid>
  );
};

export default Profile;
