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
  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
    fibre,
    unknow1,
    unnkow2
  ) {
    return { name, calories, fat, carbs, protein, fibre, unknow1, unnkow2 };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 500, 500, 600),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 500, 500, 600),
    createData('Eclair', 262, 16.0, 24, 6.0, 500, 500, 600),
    createData('Cupcake', 305, 3.7, 67, 4.3, 500, 500, 600),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 500, 500, 600),
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
          maxWidth: '80%',
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
              minHeight: '345px',
              width: !isSmallScreen ? '36%' : '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
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
              <Typography fontSize='12px'>INVOICE TO:</Typography>
              <Typography
                fontWeight='bold'
                fontSize='17px'>
                Mauro Saucad
              </Typography>
              <Typography fontSize='12px'>(612) 856 - 0989</Typography>
              <Typography fontSize='12px'>
                Pablo Alto, San Francisco, CA 92102, United States of America
              </Typography>
            </Grid>
            <Grid
              sx={{ width: '100%', height: '43%' }}
              display='flex'
              flexDirection='column'
              gap='3px'
              alignContent='center'>
              <Typography fontSize='12px'>INVOICE TO:</Typography>
              <Typography
                fontWeight='bold'
                fontSize='17px'>
                Mauro Saucad
              </Typography>
              <Typography fontSize='12px'>(612) 856 - 0989</Typography>
              <Typography fontSize='12px'>
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

          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 520,
                overflowX: 'auto',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                '@media (max-width: 520px)': {
                  minWidth: '100%', // Make table full width on small screens
                },
              }}
              aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell
                    align='left'
                    sx={{
                      borderBottom: 'none',
                      color: '#868DA6',
                    }}>
                    ITEM
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
                    RATE
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: 'none', color: '#868DA6' }}
                    align='right'
                    color='#868DA6'>
                    AMOUNT
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: 'none', color: '#868DA6' }}
                    align='right'
                    color='#868DA6'>
                    GST Rate
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: 'none', color: '#868DA6' }}
                    align='right'
                    color='#868DA6'>
                    CGST
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: 'none', color: '#868DA6' }}
                    align='right'
                    color='#868DA6'>
                    SGST
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
                    <TableCell
                      align='right'
                      sx={{ borderBottom: 'none' }}>
                      <Typography
                        fontSize='15px'
                        fontWeight='bold'>
                        {row.fibre}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align='right'
                      sx={{ borderBottom: 'none' }}>
                      <Typography
                        fontSize='15px'
                        fontWeight='bold'>
                        {row.unknow1}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align='right'
                      sx={{ borderBottom: 'none' }}>
                      <Typography
                        fontSize='15px'
                        fontWeight='bold'>
                        {row.unnkow2}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align='right'
                      sx={{ borderBottom: 'none' }}>
                      <Typography
                        fontSize='15px'
                        fontWeight='bold'>
                        {row.unnkow2}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid
            display='flex'
            width='100%'
            justifyContent='space-between'
            alignItems='center'>
            <Grid
              display='flex'
              flexDirection='column'
              justifyContent='start'
              alignItems='start'
              width='70%'>
              <Typography
                fontSize='24px'
                color='#2388FF'
                fontWeight='bold'>
                Twelve thousand Rupees Only
              </Typography>
            </Grid>
            <Grid
              display='flex'
              width='25%'
              justifyContent='start'
              flexDirection='column'>
              <Grid
                display='flex'
                alignItems='center'
                justifyContent='space-between'>
                <Typography
                  color='#868DA6'
                  fontSize='7px'
                  textAlign='right'>
                  DISCOUNT
                </Typography>
                <Typography
                  textAlign='left'
                  fontSize='12px'
                  color='black'>
                  30
                </Typography>
              </Grid>
              <Grid
                display='flex'
                alignItems='center'
                justifyContent='space-between'>
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
              <Grid
                display='flex'
                alignItems='center'
                justifyContent='space-between'>
                <Typography
                  color='#868DA6'
                  fontSize='10px'
                  textAlign='right'>
                  PAID AMOUNT
                </Typography>
                <Typography
                  textAlign='left'
                  fontSize='15px'
                  color='black'>
                  122
                </Typography>
              </Grid>
              <Grid
                display='flex'
                alignItems='center'
                justifyContent='space-between'>
                <Typography
                  color='#868DA6'
                  fontSize='10px'
                  textAlign='right'>
                  DUE AMOUNT
                </Typography>
                <Typography
                  textAlign='left'
                  fontSize='15px'
                  color='black'>
                  122
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Grid width='100%'>
              <Paper
                sx={{
                  display: 'flex',
                  padding: '10px',
                  width: '35%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Grid
                  display='flex'
                  gap='3px'
                  flexDirection='column'
                  alignContent='center'>
                  <Typography
                    fontWeight='bold'
                    fontSize='12px'
                    color='#5D6481'>
                    Account HolderName
                  </Typography>
                  <Typography
                    fontWeight='bold'
                    fontSize='12px'
                    color='#5D6481'>
                    Account type
                  </Typography>
                  <Typography
                    fontWeight='bold'
                    fontSize='12px'
                    color='#5D6481'>
                    IFSC
                  </Typography>
                  <Typography
                    fontWeight='bold'
                    fontSize='12px'
                    color='#5D6481'>
                    BANK
                  </Typography>
                </Grid>
                <Grid
                  display='flex'
                  gap='3px'
                  flexDirection='column'
                  alignContent='center'>
                  <Typography
                    fontWeight='bold'
                    fontSize='12px'
                    color='#5D6481'>
                    Rasheed
                  </Typography>
                  <Typography
                    fontWeight='bold'
                    fontSize='12px'
                    color='#5D6481'>
                    Current
                  </Typography>
                  <Typography
                    fontWeight='bold'
                    fontSize='12px'
                    color='#5D6481'>
                    3940
                  </Typography>
                  <Typography
                    fontWeight='bold'
                    fontSize='12px'
                    color='#5D6481'>
                    HDFC
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
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
              1. Please pay within 15 days from the date of invoice, overdue
              interest @ 14% will be charged on delayed payments.
            </Typography>
            <Typography
              textAlign='left'
              fontSize='10px'
              color='#868DA6'>
              2. Please quote invoice number when remitting funds.
            </Typography>
          </Grid>
          <Grid>
            <Typography
              textAlign='left'
              fontSize='16px'
              color='#5D6481'
              fontWeight='bold'>
              Attachements:
            </Typography>
            <Typography
              textAlign='left'
              fontSize='12px'
              color='#868DA6'>
              1. Please pay within 15 days from the date of invoice, overdue
              interest @ 14% will be charged on delayed payments.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Invoice;
