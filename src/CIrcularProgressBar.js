import React from 'react';
import './App.css';
import { Box, Grid, Typography } from '@mui/material';
const CIrcularProgressBar = ({
  completedProjects,
  delayed,
  ongoingProjects,
  totalProjects,
}) => {
  const completedPercentage = (completedProjects / totalProjects) * 100;
  const ongoingPercentage = (ongoingProjects / totalProjects) * 100;
  const delayedPercentage = (delayed / totalProjects) * 100;

  console.log(
    'total ongoing percentage',
    ongoingPercentage + delayedPercentage
  );

  const totalPercentage =
    (Math.floor(completedProjects + delayed + ongoingProjects) /
      totalProjects) *
    100;
  return (
    <>
      <div className='multi-graph margin'>
        JavaScript
        <div
          className='graph'
          data-name='jQuery'
          style={{
            '--percentage': `${
              ongoingPercentage + delayedPercentage + completedPercentage
            }`,
            '--fill': '#E65F2B',
          }}></div>
        <div
          className='graph'
          data-name='Angular'
          style={{
            '--percentage': `${delayedPercentage + completedPercentage}`,
            '--fill': '#DFA510',
          }}></div>
        <div
          className='graph'
          data-name='React'
          style={{
            '--percentage': `${completedPercentage}`,
            '--fill': '#1A932E',
          }}></div>
      </div>
      <Box
        position='absolute'
        top='130px'
        left='196px'
        right='0'>
        <Typography
          fontSize='28px'
          fontWeight='bold'>
          {totalPercentage}%
        </Typography>
      </Box>
    </>
  );
};

export default CIrcularProgressBar;
