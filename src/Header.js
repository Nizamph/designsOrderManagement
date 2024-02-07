import { Grid, InputBase, Typography, alpha } from '@mui/material';
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
  return (
    <Grid
      width='100%'
      display='flex'
      height='10%'
      alignItems='center'
      justifyContent='space-between'>
      <Grid
        width='30%'
        display='flex'
        alignItems='center'
        marginRight='20px'
        marginLeft='20px'
        justifyContent='start'>
        <Typography
          padding='2px'
          margin='2px'>
          Dashboard
        </Typography>
      </Grid>
      <Grid
        width='70%'
        display='flex'
        alignItems='center'
        justifyContent='end'
        gap='70px'>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Profile />
      </Grid>
    </Grid>
  );
};

export default Header;
