import { Grid } from '@mui/material';
import React from 'react';
import Header from './Header';
import MainBody from './MainBody';

const Dashboard = () => {
  return (
    <Grid
      width='100%'
      display='flex'
      alignItems='start'
      justifyContent='start'
      minHeight='100vh'>
      <Grid width='15%'></Grid>
      <Grid
        width='85%'
        display='flex'
        height='100%'
        flexDirection='column'
        justifyContent='start'
        gap='40px'
        alignContent='center'>
        <Header />
        <MainBody />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
