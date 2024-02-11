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
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';
import { PersonPinCircleOutlined } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <Grid
      width='100%'
      display='flex'
      alignItems='start'
      justifyContent='start'
      minHeight='100vh'>
      <Grid
        width='16%'
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
          width='100%'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          marginTop='100px'>
          <Grid
            display='flex'
            alignItems='center'
            width='100%'
            padding='16px'
            justifyContent='center'>
            <Grid
              width='25%'
              marginRight='10px'
              textAlign='end'>
              <DashboardIcon style={{ color: 'white' }} />
            </Grid>
            <Grid width='75%'>
              <Typography
                fontSize='15px'
                color='white'>
                Dashboard
              </Typography>
            </Grid>
          </Grid>
          <Grid
            display='flex'
            alignItems='center'
            width='100%'
            padding='16px'
            justifyContent='center'>
            <Grid
              width='25%'
              marginRight='10px'
              textAlign='end'>
              <SchoolIcon style={{ color: 'white' }} />
            </Grid>
            <Grid width='75%'>
              <Typography
                fontSize='15px'
                color='white'>
                Manage orders
              </Typography>
            </Grid>
          </Grid>

          <Grid
            display='flex'
            alignItems='center'
            width='100%'
            padding='16px'
            justifyContent='center'>
            <Grid
              width='25%'
              marginRight='10px'
              textAlign='end'>
              <PersonPinCircleOutlined style={{ color: 'white' }} />
            </Grid>
            <Grid width='75%'>
              <Typography
                fontSize='15px'
                color='white'>
                Register
              </Typography>
            </Grid>
          </Grid>
          <Grid
            display='flex'
            alignItems='center'
            width='100%'
            padding='16px'
            justifyContent='center'>
            <Grid
              width='25%'
              marginRight='10px'
              textAlign='end'>
              <AccountBoxIcon style={{ color: 'white' }} />
            </Grid>
            <Grid width='75%'>
              <Typography
                fontSize='15px'
                color='white'>
                Accounting
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        width='84%'
        display='flex'
        height='100%'
        marginLeft='191px'
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
