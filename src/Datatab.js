import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Typography } from '@mui/material';
import OrangeTick from './icons/tickOrange.png';
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', borderRadius: '14px' }}>
      <Typography
        fontSize='16px'
        fontWeight='bold'>
        Today Task
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'>
            <Tab
              sx={{ minHeight: '28px' }}
              label={
                <Typography
                  color='gray'
                  fontSize='14px'>
                  Item One
                </Typography>
              }
              value='1'
            />
            <Tab
              label={
                <Typography
                  color='gray'
                  fontSize='14px'>
                  Item Two
                </Typography>
              }
              value='2'
            />
            <Tab
              label={
                <Typography
                  color='gray'
                  fontSize='14px'>
                  Item Three
                </Typography>
              }
              value='3'
            />
          </TabList>
        </Box>

        <TabPanel value='1'>
          <Grid
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='space-around'>
            <Grid
              display='flex'
              justifyContent='start'
              alignItems='center'
              gap='10px'>
              <img
                src={OrangeTick}
                style={{ width: '18px', height: '18px' }}
                alt='orangeTick'
              />
              <Typography>
                Create a user flow of social application design
              </Typography>
            </Grid>
            <Grid>
              <Typography
                padding='4px'
                borderRadius='40px'
                color='#1A932E'
                bgcolor='#11A932E'>
                Approved
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value='2'>Item Two</TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
