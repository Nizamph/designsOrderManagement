import {
  Box,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';

const SummaryTable = () => {
  function createData(name, projectManager, due_date, status, progress) {
    return { name, projectManager, due_date, status, progress };
  }

  const rows = [
    createData('gameApp', 'sreejth', 'feb 20,2024', 'completed', 100),
    createData('TradingApp', 'Nizam', 'feb 21,2024', 'at Risk', 35),
    createData('DataScience', 'jabir', 'feb 22,2024', 'delayed', 50),
  ];

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Grid
      width='100%'
      display='flex'
      flexDirection='column'
      alignContent='center'>
      <Grid
        width='100%'
        display='flex'
        flexDirection={isSmallScreen ? 'column' : 'row'}
        justifyContent='space-between'
        alignItems={!isSmallScreen ? 'center' : 'start'}>
        <Grid
          width={!isSmallScreen ? '30%' : '100%'}
          marginLeft='15px'>
          <Typography
            fontSize='16px'
            fontWeight='bold'>
            Project Summary
          </Typography>
        </Grid>
        <Grid
          display='flex'
          marginRight='10px'
          alignItems='center'
          justifyContent='end'>
          <FormControl sx={{ marginRight: '6px' }}>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              sx={{ height: '40px', width: '100px' }}
              value={34}
              label='Age'
              onChange={() => {}}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginRight: '6px' }}>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              sx={{ height: '40px', width: '100px' }}
              id='demo-simple-select'
              value={34}
              label='Age'
              onChange={() => {}}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              sx={{ height: '40px', width: '100px' }}
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
      <TableContainer component={Box}>
        <Table
          sx={{ minWidth: 450 }}
          aria-label='caption table'>
          <TableHead>
            <TableRow sx={{ height: '20px' }}>
              <TableCell sx={{ borderBottom: 'none' }}>
                <Typography
                  fontSize='14px'
                  fontWeight='bold'>
                  Name
                </Typography>
              </TableCell>
              <TableCell
                align='right'
                sx={{ borderBottom: 'none' }}>
                <Typography
                  fontSize='14px'
                  fontWeight='bold'>
                  Project Manager
                </Typography>
              </TableCell>
              <TableCell
                sx={{ borderBottom: 'none' }}
                align='right'>
                <Typography
                  fontSize='14px'
                  fontWeight='bold'>
                  Due Date
                </Typography>
              </TableCell>
              <TableCell
                sx={{ borderBottom: 'none' }}
                align='center'>
                <Typography
                  fontSize='14px'
                  fontWeight='bold'>
                  Status
                </Typography>
              </TableCell>
              <TableCell
                sx={{ borderBottom: 'none' }}
                align='right'>
                <Typography
                  fontSize='14px'
                  fontWeight='bold'>
                  Progress
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ height: '20px' }}>
                <TableCell
                  component='th'
                  sx={{ borderBottom: 'none' }}
                  scope='row'>
                  <Typography fontSize='14px'>{row.name}</Typography>
                </TableCell>
                <TableCell
                  sx={{ borderBottom: 'none' }}
                  align='center'>
                  <Typography fontSize='14px'>{row.projectManager}</Typography>
                </TableCell>
                <TableCell
                  sx={{ borderBottom: 'none' }}
                  align='right'>
                  <Typography fontSize='14px'>{row.due_date}</Typography>
                </TableCell>
                <TableCell
                  sx={{ borderBottom: 'none' }}
                  align='center'>
                  <Typography
                    fontSize='14px'
                    padding='6px'
                    paddingX={'8px'}
                    borderRadius='20px'
                    color={
                      row.status === 'completed'
                        ? '#1A932E'
                        : row.status === 'delayed'
                        ? '#DFA510'
                        : row.status === 'at Risk'
                        ? '#EE201C'
                        : '#E65F2B'
                    }
                    bgcolor={
                      row.status === 'completed'
                        ? 'rgba(26, 147, 46, 0.3)' // Adjust the opacity value as needed (0.5 for example)
                        : row.status === 'delayed'
                        ? 'rgba(223, 165, 16, 0.3)'
                        : row.status === 'at Risk'
                        ? 'rgba(238, 32, 28, 0.3)'
                        : 'rgba(230, 95, 43, 0.3)'
                    }
                    sx={{}}>
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: 'none',
                    position: 'relative',
                    display: 'inline-flex',
                  }}
                  align='center'>
                  <CircularProgress
                    sx={{
                      color:
                        row.status === 'completed'
                          ? '#1A932E'
                          : row.status === 'delayed'
                          ? '#DFA510'
                          : row.status === 'at Risk'
                          ? '#EE201C'
                          : '#E65F2B',
                    }}
                    variant='determinate'
                    value={row.progress}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Typography>{row.progress}</Typography>
                  </Box>

                  {/* <Typography fontSize='14px'>{row.progress}</Typography> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default SummaryTable;
