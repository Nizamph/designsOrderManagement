import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import StatCard from './StatCard';
import SummaryTable from './SummaryTable';
import DataTab from './Datatab';
import CIrcularProgressBar from './CIrcularProgressBar';
import Project from './icons/projectIcon.png';
import ResourseIcon from './icons/resources.png';
import StatIcon from './icons/statIcon.png';
const totalProjects = 150;
const completedProjects = 30;
const ongoingProjects = 30;
const delayedProjects = 30;

const MainBody = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Grid
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='start'
      alignItems='center'
      gap='20px'>
      <Grid
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='start'
        gap='20px'
        height='15%'>
        <Grid
          width='100%'
          display='flex'
          justifyContent='space-between'
          alignItems='center'>
          <Grid width='20%'>
            <Typography
              marginRight='20px'
              marginLeft='20px'>
              Overview
            </Typography>
          </Grid>
          <Grid
            width={isSmallScreen ? '30%' : '10%'}
            display='flex'
            flexDirection='column'
            marginRight='20px'
            marginLeft='20px'
            alignItems='center'
            justifyContent='center'>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Age</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={34}
                label='Age'
                onChange={() => {}}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          maxWidth='100%'
          display='flex'
          gap='9px'
          marginRight='6px'
          marginLeft='6px'
          justifyContent='space-between'
          flexWrap='wrap'
          alignItems='center'>
          <StatCard
            type={'Total revenue'}
            totalFigure={'$50000'}
            iconName={StatIcon}
          />
          <StatCard
            type={'Projects'}
            totalFigure={'95/100'}
            iconName={Project}
          />
          <StatCard
            type={'Time spent'}
            totalFigure={'1022/1300 Hrs'}
            iconName={ResourseIcon}
          />
          <StatCard
            type={'Resources'}
            totalFigure={'101/120'}
            iconName={Project}
          />
        </Grid>
      </Grid>
      <Grid
        width='100%'
        display='flex'
        flexDirection={isSmallScreen ? 'column' : 'row'}
        gap={isSmallScreen ? '14px' : ''}
        alignItems='center'
        justifyContent='space-between'>
        <Paper
          sx={{
            width: !isSmallScreen ? '55%' : '100%',
            padding: '14px',
            marginLeft: !isSmallScreen ? '20px' : '',
            minHeight: '359px',
            borderRadius: '14px',
          }}>
          <SummaryTable />
        </Paper>
        <Paper
          sx={{
            width: !isSmallScreen ? '39%' : '100%',
            padding: '15px',
            display: 'flex',
            minHeight: '359px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginRight: !isSmallScreen ? '20px' : '',
            borderRadius: '14px',
            position: 'relative',
          }}>
          <CIrcularProgressBar
            completedProjects={completedProjects}
            ongoingProjects={ongoingProjects}
            delayed={delayedProjects}
            totalProjects={totalProjects}
          />
          <Grid
            display='flex'
            justifyContent='space-between'
            width='100%'
            alignItems='center'>
            <Grid
              display='flex'
              flexDirection='column'
              alignContent='center'>
              <Typography
                fontSize='22px'
                fontWeight='bold'>
                {totalProjects}
              </Typography>
              <Typography
                fontSize='14px'
                color='#797979'>
                Total
              </Typography>
            </Grid>
            <Grid
              display='flex'
              flexDirection='column'
              alignContent='center'>
              <Typography
                fontSize='22px'
                fontWeight='bold'
                color='#1A932E'>
                {completedProjects}
              </Typography>
              <Typography
                fontSize='14px'
                color='#797979'>
                Completed
              </Typography>
            </Grid>
            <Grid
              display='flex'
              flexDirection='column'
              alignContent='center'>
              <Typography
                fontSize='22px'
                color='#DFA510'
                fontWeight='bold'>
                {delayedProjects}
              </Typography>
              <Typography
                fontSize='14px'
                color='#797979'>
                Delayed{' '}
              </Typography>
            </Grid>
            <Grid
              display='flex'
              flexDirection='column'
              alignContent='center'>
              <Typography
                fontSize='22px'
                fontWeight='bold'
                color='#E65F2B'>
                {ongoingProjects}
              </Typography>
              <Typography
                fontSize='14px'
                color='#797979'>
                On going
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid
        width='100%'
        display='flex'
        flexDirection={isSmallScreen ? 'column' : 'row'}
        height='32.5%'
        alignItems='center'
        justifyContent='space-between'>
        <Paper
          sx={{
            width: !isSmallScreen ? '55%' : '100%',
            padding: '14px',
            marginLeft: !isSmallScreen ? '20px' : '',
            borderRadius: '14px',
          }}>
          <DataTab />
        </Paper>
        <Paper
          sx={{
            width: '39%',
            padding: '8px',
            marginRight: !isSmallScreen ? '20px' : '',
            borderRadius: '14px',
          }}></Paper>
      </Grid>
    </Grid>
  );
};

export default MainBody;
