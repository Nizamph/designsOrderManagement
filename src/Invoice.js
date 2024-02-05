import {
  Box,
  Grid,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  tableCellClasses,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import React from 'react';
import salarySlip from './icons/Left ContentCopy.png';
const Invoice = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  console.log('isSmallScreen', isSmallScreen);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#343F71',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#FBF1F7',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Paper
        sx={{
          padding: '2rem',
          display: 'flex',
          maxWidth: '650px',
          gap: '10px',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
        }}>
        <Grid
          maxHeight='30%'
          display='flex'
          flexDirection={isSmallScreen ? 'column' : 'row'}
          width='100%'
          gap='8px'
          alignItems={!isSmallScreen ? 'center' : 'start'}>
          <img
            src={salarySlip}
            style={{ width: isSmallScreen ? '100%' : '54%', height: '100%' }}
          />
          <Paper
            sx={{
              padding: '16px',
              bgcolor: '#F6F8FC',
              height: '100%',
              width: !isSmallScreen ? '36%' : '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              gap: '14px',
              width: '100%',
              borderRadius: '20px',
            }}>
            <Paper
              sx={{
                width: '100%',
                height: '43%',
                display: 'flex',
                padding: '12px',
                borderRadius: '10px',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'start',
              }}>
              <Typography
                color='#868DA6'
                align='left'
                marginLeft='4px'
                fontSize='10px'>
                Amount Due
              </Typography>
              <Typography
                fontSize='24px'
                marginLeft='4px'
                fontWeight='bold'>
                $ 12299.00
              </Typography>
              <Typography
                color='#868DA6'
                marginLeft='4px'
                align='left'
                fontSize='10px'>
                july 26, 2024
              </Typography>
            </Paper>
            <Grid
              sx={{ width: '100%', height: '43%' }}
              display='flex'
              flexDirection='column'
              gap='3px'
              alignContent='center'>
              <Typography fontSize='8px'>INVOICE TO:</Typography>
              <Typography
                fontWeight='bold'
                fontSize='14px'>
                Mauro Saucad
              </Typography>
              <Typography fontSize='10px'>(612) 856 - 0989</Typography>
              <Typography fontSize='10px'>
                Pablo Alto, San Francisco, CA 92102, United States of America
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid
          maxHeight='70%'
          width='100%'
          display='flex'
          flexDirection='column'
          gap='24px'
          alignContent='center'>
          <Grid>
            <Typography
              color='#868DA6'
              fontSize='15px'>
              INVOICE DETAILS{' '}
            </Typography>
            <Paper
              elevation={3}
              sx={{
                padding: '15px',
                display: 'flex',
                marginTop: '7px',
                flexDirection: isSmallScreen ? 'column' : 'row',
                border: 'solid thick grey 1px',
                borderRadius: '12px',
                alignItems: !isSmallScreen ? 'center' : 'start',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Grid
                display='flex'
                flexDirection='column'
                alignItems='start'
                justifyContent='center'>
                <Typography
                  color='#868DA6'
                  fontSize='12px'>
                  Invoice Number:
                </Typography>
                <Typography
                  fontWeight='bold'
                  fontSize='15px'>
                  N 2323
                </Typography>
              </Grid>
              <Grid
                display='flex'
                flexDirection='column'
                alignItems='start'
                justifyContent='center'>
                <Typography
                  color='#868DA6'
                  fontSize='12px'>
                  ISSUED:
                </Typography>
                <Typography
                  fontWeight='bold'
                  fontSize='15px'>
                  June 34, 2024
                </Typography>
              </Grid>
              <Grid
                display='flex'
                flexDirection='column'
                alignItems='start'
                justifyContent='center'>
                <Typography
                  color='#868DA6'
                  fontSize='12px'>
                  Due Date:
                </Typography>
                <Typography
                  fontWeight='bold'
                  fontSize='15px'>
                  June 34, 2024
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          {!isSmallScreen && (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 520 }}
                aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align='left'
                      sx={{
                        borderBottom: 'none',
                        color: '#868DA6',
                      }}>
                      Description
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: 'none', color: '#868DA6' }}
                      align='right'
                      color='#868DA6'>
                      QTY
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: 'none', color: '#868DA6' }}
                      align='right'
                      color='#868DA6'>
                      PRICE
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: 'none', color: '#868DA6' }}
                      align='right'
                      color='#868DA6'>
                      TOTAL
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                        bgcolor: '#F6F8FC',
                      }}>
                      <TableCell
                        component='th'
                        sx={{ borderBottom: 'none' }}
                        scope='row'>
                        <Typography
                          color='#5D6481'
                          fontSize='15px'
                          sx={{ fontWeight: 'bold' }}>
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell
                        align='right'
                        sx={{ borderBottom: 'none' }}>
                        <Typography color='#868DA6'>{row.calories}</Typography>
                      </TableCell>
                      <TableCell
                        align='right'
                        color='#868DA6'
                        sx={{ borderBottom: 'none' }}>
                        <Typography color='#868DA6'>{row.fat}</Typography>
                      </TableCell>
                      <TableCell
                        align='right'
                        sx={{ borderBottom: 'none' }}>
                        <Typography
                          fontSize='15px'
                          fontWeight='bold'>
                          {row.carbs}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {isSmallScreen &&
            rows.map((itm) => (
              <Paper sx={{ padding: '6px', borderRadius: '8px' }}>
                <Grid
                  display='flex'
                  minWidth='32s0px'
                  justifyContent='space-between'
                  alignItems='center'>
                  <Typography
                    padding='3px'
                    color='#868DA6'
                    margin='3px'>
                    Desciption
                  </Typography>
                  <Typography
                    align='left'
                    padding='3px'
                    margin='3px'
                    color='#5D6481'
                    fontSize='15px'
                    bgcolor='#F6F8FC'
                    sx={{ fontWeight: 'bold' }}>
                    {itm.name}
                  </Typography>
                </Grid>
                <Grid
                  display='flex'
                  width='100%'
                  minWidth='330px'
                  justifyContent='space-between'
                  gap='20px'
                  alignItems='center'>
                  <Typography
                    padding='3px'
                    color='#868DA6'
                    margin='3px'>
                    Quantity
                  </Typography>
                  <Typography
                    padding='3px'
                    margin='3px'
                    bgcolor='#F6F8FC'>
                    {itm.calories}
                  </Typography>
                </Grid>
                <Grid
                  display='flex'
                  width='100%'
                  minWidth='330px'
                  gap='10px'
                  justifyContent='space-between'
                  alignItems='center'>
                  <Typography
                    padding='3px'
                    color='#868DA6'
                    margin='3px'>
                    Amount
                  </Typography>
                  <Typography
                    padding='3px'
                    margin='3px'
                    bgcolor='#F6F8FC'
                    marginLeft='10px'>
                    {itm.carbs}
                  </Typography>
                </Grid>
              </Paper>
            ))}
          <Grid width='100%'>
            <Typography
              color='#868DA6'
              fontSize='10px'
              textAlign='right'>
              TOTAL AMOUNT
            </Typography>
            <Typography
              textAlign='right'
              fontSize='24px'
              color='#2388FF'
              fontWeight='bold'>
              $120000
            </Typography>
          </Grid>
          <Grid>
            <Typography
              textAlign='left'
              fontSize='10px'
              color='#5D6481'
              fontWeight='bold'>
              Terms & Conditions:
            </Typography>
            <Typography
              textAlign='left'
              fontSize='10px'
              color='#868DA6'>
              Fees and payment terms will be established in the contract or
              agreement prior to the commencement of the project. An initial
              deposit will be required before any design work begins. We reserve
              the right to suspend or halt work in the event of non-payment.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Invoice;
