import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import Header from './Header';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MainBody from './MainBody';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Grid
      width='100%'
      display='flex'
      alignItems='start'
      justifyContent='start'
      minHeight='100vh'>
      <Grid
        width='15%'
        position='fixed'
        zIndex='10'
        minHeight='100vh'
        bgcolor='black'>
        <Grid
          minHeight='30%'
          display='flex'
          flexDirection='column'
          justifyContent='start'
          alignItems='center'>
          <Typography
            fontSize='20px'
            margin='4px'
            padding='4px'
            color='white'
            fontWeight='bold'>
            Icon
          </Typography>
        </Grid>
        <Grid
          height='70%'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          marginTop='100px'>
          <Grid color='white'>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary='Dashboard'
                color='white'
              />
            </ListItemButton>
          </Grid>
          <Grid color='white'>
            <ListItemButton>
              <ListItemIcon>
                <ManageAccountsIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary='Manage Orders'
                color='white'
              />
            </ListItemButton>
          </Grid>
          <Grid color='white'>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary='Dashboard'
                color='white'
              />
            </ListItemButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        width='85%'
        display='flex'
        height='100%'
        marginLeft='180px'
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
