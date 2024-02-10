import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import statIcon from './icons/statIcon.png';
import ArrowUp from './icons/upArrow.png';
import ArrowDown from './icons/arrow-right.png';
const StatCard = ({ growth, type, totalFigure, iconName }) => {
  return (
    <Paper
      sx={{
        width: '242px',
        maxHeight: '194px',
        padding: '18px',
        display: 'flex',
        borderRadius: '14px',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'start',
        margin: '1px',
      }}>
      <img
        src={iconName}
        style={{ width: '46px', height: '46px' }}
      />
      <Typography
        fontSize='14px'
        color='#797979'>
        {type}
      </Typography>
      <Typography
        fontSize='28px'
        fontWeight='bold'>
        {totalFigure}
      </Typography>
      <Grid
        width='100%'
        display='flex'
        justifyContent='start'
        gap='4px'
        alignItems='center'>
        {growth === 'increase' ? (
          <img
            src={ArrowUp}
            style={{ width: '14px', height: '14px' }}
          />
        ) : (
          <img
            src={ArrowUp}
            style={{ width: '14px', height: '14px' }}
          />
        )}
        <img
          src={ArrowDown}
          style={{ width: '14px', height: '14px' }}
        />
        <Typography fontSize='10px'>12% {growth} from last month</Typography>
      </Grid>
    </Paper>
  );
};

export default StatCard;
