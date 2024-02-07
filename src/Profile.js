import { Grid, Typography } from '@mui/material';
import React from 'react';

const Profile = () => {
  return (
    <Grid
      width='195px'
      display='flex'
      justifyContent='start'
      alignItems='center'
      height='48px'>
      <Typography>One</Typography>
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        marginLeft='16px'
        justifyContent='center'>
        <Typography fontSize='10px'>Alen george</Typography>
        <Typography fontSize='8px'>Product Manager</Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
