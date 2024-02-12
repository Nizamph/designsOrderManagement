import {
  Grid,
  InputBase,
  Typography,
  alpha,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import Profile from './Profile';

const Header = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '14ch',
        '&:focus': {
          width: '24ch',
        },
      },
    },
  }));

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Grid
      width='100%'
      display='flex'
      height='10%'
      marginTop='15px'
      alignItems='center'
      justifyContent='space-between'>
      <Grid
        width='80%'
        display='flex'
        flexDirection={isSmallScreen ? 'column' : 'row'}
        alignItems={isSmallScreen ? 'start' : 'center'}
        marginRight='20px'
        marginLeft='20px'
        justifyContent='space-between'>
        <Typography
          padding='2px'
          fontSize={isMediumScreen ? '20px' : '32px'}
          fontWeight='semi-bold'>
          Dashboard
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Grid>
      <Grid
        width={isSmallScreen ? '40%' : '30%'}
        display='flex'
        alignItems='center'
        justifyContent='end'>
        <Profile />
      </Grid>
    </Grid>
  );
};

export default Header;
