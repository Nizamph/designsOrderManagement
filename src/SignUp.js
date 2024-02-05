import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import Saly3 from './icons/Saly-3.png';
import Saly2 from './icons/Saly-2.png';
import { grey } from '@mui/material/colors';
import json2mq from 'json2mq';
const SignUp = () => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const iphoneSE = useMediaQuery(
    json2mq({
      maxWidth: 376,
    })
  );

  return (
    <Grid
      display='flex'
      minHeight='100vh'
      xs={12}
      width='100%'>
      <Box
        sx={{
          backgroundColor: '#ECBC76',
          width: '50%',
          position: 'relative',
        }}>
        <Grid
          display='flex'
          flexDirection='column'
          gap='80px'>
          <Grid
            item
            xs={12}
            textAlign='start'>
            <Typography
              margin='10px'
              padding='10px'
              fontWeight='semi-bold'
              color='#C6553B'>
              Logo
            </Typography>
          </Grid>
          {!isMediumScreen && (
            <Grid
              item
              xs={12}
              marginLeft='181px'>
              <img
                src={Saly3}
                alt='sali image'
                style={{ width: '269px', height: '256px' }}
              />
            </Grid>
          )}
        </Grid>
      </Box>
      <Paper
        sx={{
          position: 'absolute',
          maxWidth: !isSmallScreen ? '500px' : '326px',
          maxHeight: '741px',
          borderRadius: '40px',
          top: iphoneSE
            ? '4rem'
            : isSmallScreen
            ? '8rem'
            : isMediumScreen
            ? '15rem'
            : '4rem',
          left: iphoneSE
            ? '25px'
            : isSmallScreen
            ? '40px'
            : isMediumScreen
            ? '10rem'
            : '29rem',
          padding: '49px',
          zIndex: '10',
        }}>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <Grid
            xs={12}
            display='flex'
            justifyContent='start'
            alignItems='start'
            width='100%'>
            <Typography sx={{ fontSize: '20px', fontWeight: 'regular' }}>
              Welcome To TutorShive
            </Typography>
            <Grid
              display='flex'
              flexDirection='column'
              marginLeft='55px'
              alignItems='start'
              justifyContent='center'>
              <Typography
                fontSize='12px'
                color='#8D8D8D'>
                Have an account?
              </Typography>
              <Typography
                fontSize='12px'
                color='#B87514'>
                SignIn
              </Typography>
            </Grid>
          </Grid>
          <Grid width='100%'>
            <Typography sx={{ fontSize: '53px', fontWeight: 'medium' }}>
              SignUp
            </Typography>
          </Grid>
        </Grid>
        <FormControl
          sx={{
            marginTop: '45px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
          <TextField
            id='outlined-basic'
            label='Outlined'
            fullWidth
          />
          <Grid
            display='flex'
            justifyContent='start'
            alignItems='center'
            gap='8px'>
            <TextField
              id='outlined-basic'
              label='name'
            />
            <TextField
              id='outlined-basic'
              label='username'
            />
          </Grid>
          <TextField
            id='outlined-basic'
            label='name'
          />
          <Button
            sx={{
              bgcolor: '#E48700',
              color: 'white',
              '&:hover': { bgcolor: '#E48700', color: 'white' },
            }}>
            SignUp
          </Button>
        </FormControl>
      </Paper>
      <Box
        sx={{
          width: '50%',
          position: 'relative',
          bgcolor: isMediumScreen || isSmallScreen ? '#ECBC76' : '',
        }}>
        {!isMediumScreen && (
          <Grid
            xs={6}
            display='flex'
            alignItems='start'>
            <Grid
              marginTop='144px'
              marginLeft='200px'>
              <img
                src={Saly2}
                alt='sali image'
                style={{ width: '450px', height: '450px' }}
              />
            </Grid>
          </Grid>
        )}
      </Box>
    </Grid>
  );
};

export default SignUp;
