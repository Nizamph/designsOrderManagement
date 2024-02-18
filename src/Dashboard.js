import {
  Button,
  Collapse,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import Header from './Header';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MainBody from './MainBody';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';
import {
  Assignment,
  ExpandLess,
  ExpandMore,
  Leaderboard,
  Money,
  People,
  PeopleAlt,
  PeopleAltSharp,
  PersonPinCircleOutlined,
  StarBorder,
} from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import json2mq from 'json2mq';

const Dashboard = () => {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [openCollapseAccount, setOpenCollapseAccount] = useState(false);
  const [openCollapseTeam, setOpenCollapseTeam] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const ipad = useMediaQuery(
    json2mq({
      maxWidth: 768,
    })
  );
  const toggleClientSubmenu = () => {
    setOpenCollapse(!openCollapse);
  };
  const toggleAccountSubmenu = () => {
    setOpenCollapseAccount(!openCollapseAccount);
  };
  const toggleAccountTeam = () => {
    setOpenCollapseTeam(!openCollapseTeam);
  };

  console.log('ipad', ipad);

  console.log('isSmallScreen', isSmallScreen);
  return (
    <Grid
      width='100%'
      display='flex'
      alignItems='start'
      justifyContent='start'
      minHeight='100vh'>
      {!isMediumScreen && (
        <Grid
          width='16%'
          position='fixed'
          zIndex='10'
          overflow='auto'
          minHeight='100vh'
          maxHeight='100vh'
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
            marginTop='70px'>
            <Grid
              display='flex'
              alignItems='center'
              width='100%'
              padding='16px'
              justifyContent='center'>
              <Grid
                width='22%'
                marginRight='13px'
                textAlign='end'>
                <DashboardIcon style={{ color: 'white' }} />
              </Grid>
              <Grid width='78%'>
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
                width='21%'
                marginRight='14px'
                textAlign='end'>
                <SchoolIcon style={{ color: 'white' }} />
              </Grid>
              <Grid width='79%'>
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
              sx={{ cursor: 'pointer' }}
              padding='16px'
              onClick={toggleClientSubmenu}
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
                  Client
                </Typography>
              </Grid>
              <Grid>
                {openCollapse ? (
                  <ExpandLess style={{ color: 'white' }} />
                ) : (
                  <ExpandMore style={{ color: 'white' }} />
                )}
              </Grid>
            </Grid>
            <Collapse
              in={openCollapse}
              timeout='auto'
              unmountOnExit>
              <Grid
                display='flex'
                alignItems='center'
                width='100%'
                sx={{ cursor: 'pointer' }}
                padding='16px'
                onClick={toggleClientSubmenu}
                justifyContent='center'>
                <Grid
                  width='25%'
                  marginRight='10px'
                  textAlign='end'>
                  {/* <PersonPinCircleOutlined style={{ color: 'white' }} /> */}
                  <PeopleAltSharp sx={{ color: 'white' }} />
                </Grid>
                <Grid width='75%'>
                  <Typography
                    fontSize='15px'
                    color='white'>
                    Student
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                display='flex'
                alignItems='center'
                width='100%'
                sx={{ cursor: 'pointer' }}
                padding='16px'
                onClick={toggleClientSubmenu}
                justifyContent='center'>
                <Grid
                  width='25%'
                  marginRight='10px'
                  textAlign='end'>
                  <People style={{ color: 'white' }} />
                </Grid>
                <Grid width='75%'>
                  <Typography
                    fontSize='15px'
                    color='white'>
                    Vendor
                  </Typography>
                </Grid>
              </Grid>
            </Collapse>
            <Grid
              display='flex'
              alignItems='center'
              sx={{ cursor: 'pointer' }}
              onClick={toggleAccountSubmenu}
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
              <Grid>
                {openCollapseAccount ? (
                  <ExpandLess sx={{ color: 'white' }} />
                ) : (
                  <ExpandMore sx={{ color: 'white' }} />
                )}
              </Grid>
            </Grid>
            <Collapse
              in={openCollapseAccount}
              timeout='auto'
              unmountOnExit>
              <Grid
                display='flex'
                alignItems='center'
                width='100%'
                sx={{ cursor: 'pointer' }}
                padding='16px'
                onClick={toggleClientSubmenu}
                justifyContent='center'>
                <Grid
                  width='25%'
                  marginRight='10px'
                  textAlign='end'>
                  <Assignment sx={{ color: 'white' }} />
                </Grid>
                <Grid width='75%'>
                  <Typography
                    fontSize='15px'
                    color='white'>
                    Invoices
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                display='flex'
                alignItems='center'
                width='100%'
                sx={{ cursor: 'pointer' }}
                padding='16px'
                onClick={toggleClientSubmenu}
                justifyContent='center'>
                <Grid
                  width='25%'
                  marginRight='10px'
                  textAlign='end'>
                  <Money sx={{ color: 'white' }} />
                </Grid>
                <Grid width='75%'>
                  <Typography
                    fontSize='15px'
                    color='white'>
                    Expense Management
                  </Typography>
                </Grid>
              </Grid>
            </Collapse>
            <Grid
              display='flex'
              alignItems='center'
              sx={{ cursor: 'pointer' }}
              onClick={toggleAccountTeam}
              width='100%'
              padding='16px'
              justifyContent='center'>
              <Grid
                width='25%'
                marginRight='10px'
                textAlign='end'>
                <ManageAccountsIcon style={{ color: 'white' }} />
              </Grid>
              <Grid width='75%'>
                <Typography
                  fontSize='15px'
                  color='white'>
                  Manage Team
                </Typography>
              </Grid>
              <Grid>
                {openCollapseTeam ? (
                  <ExpandLess sx={{ color: 'white' }} />
                ) : (
                  <ExpandMore sx={{ color: 'white' }} />
                )}
              </Grid>
            </Grid>
            <Collapse
              in={openCollapseTeam}
              timeout='auto'
              unmountOnExit>
              <Grid
                display='flex'
                alignItems='center'
                width='100%'
                sx={{ cursor: 'pointer' }}
                padding='16px'
                onClick={toggleClientSubmenu}
                justifyContent='center'>
                <Grid
                  width='25%'
                  marginRight='10px'
                  textAlign='end'>
                  <StarBorder sx={{ color: 'white' }} />
                </Grid>
                <Grid width='75%'>
                  <Typography
                    fontSize='15px'
                    color='white'>
                    Experts
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                display='flex'
                alignItems='center'
                width='100%'
                sx={{ cursor: 'pointer' }}
                padding='16px'
                onClick={toggleClientSubmenu}
                justifyContent='center'>
                <Grid
                  width='25%'
                  marginRight='10px'
                  textAlign='end'>
                  <PeopleAlt sx={{ color: 'white' }} />
                </Grid>
                <Grid width='75%'>
                  <Typography
                    fontSize='15px'
                    color='white'>
                    OTM
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                display='flex'
                alignItems='center'
                width='100%'
                sx={{ cursor: 'pointer' }}
                padding='16px'
                justifyContent='center'>
                <Grid
                  width='25%'
                  marginRight='10px'
                  textAlign='end'>
                  <Leaderboard sx={{ color: 'white' }} />
                </Grid>
                <Grid width='75%'>
                  <Typography
                    fontSize='15px'
                    color='white'>
                    Team Lead
                  </Typography>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>
      )}
      <Grid
        width={isSmallScreen ? '100%' : isMediumScreen ? '100%' : '84%'}
        display='flex'
        height='100%'
        marginLeft={isSmallScreen ? '0px' : isMediumScreen ? '0px' : '199px'}
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
