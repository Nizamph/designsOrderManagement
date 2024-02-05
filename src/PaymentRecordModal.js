import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import deleteIcon from './icons/deleteIcon.png';
import closeicon from './icons/close-icon.png';
import salaryIcon from './icons/salary.png';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import {
  DialogContent,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { DatePicker, LocalizationProvider } from '@mui/lab';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  innerHeight: 250,
  borderRadius: 2,
};

export default function PaymentRecordModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box sx={style}>
            <div className='icon-container'>
              <img
                src={salaryIcon}
                alt='salaryIcon'
                className='image'
              />
              <img
                src={closeicon}
                alt='close icon'
                className='image-close'
              />
            </div>
            <Typography
              id='modal-modal-title'
              variant='h5'
              marginTop='16px'
              fontWeight='bold'
              component='h2'>
              Record Payment
            </Typography>
            <DialogContent
              dividers
              fullWidth
              sx={{ padding: 3 }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid
                  item
                  xs={6}>
                  <Typography
                    color='secondary.dark'
                    fontSize='15px'
                    sx={{ fontWeight: 'bold' }}>
                    Invoice No
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}>
                  <Typography
                    color='secondary.dark'
                    fontSize='15px'>
                    3434
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}>
                  <Typography
                    color='secondary.dark'
                    fontSize='15px'
                    sx={{ fontWeight: 'bold' }}>
                    Billed To
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}>
                  <Typography
                    color='secondary.dark'
                    fontSize='15px'>
                    sulaiman
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}>
                  <Typography
                    color='secondary.dark'
                    fontSize='15px'
                    sx={{ fontWeight: 'bold' }}>
                    Invoice Total
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}>
                  <Typography
                    color='secondary.dark'
                    fontSize='15px'>
                    $4000
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}>
                  <Typography
                    color='secondary.dark'
                    fontSize='15px'
                    sx={{ fontWeight: 'bold' }}>
                    Amount Recieved
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}>
                  <FormControl>
                    <InputLabel
                      htmlFor='outlined-adornment-amount'
                      sx={{ fontWeight: 'bold' }}>
                      Amount
                    </InputLabel>
                    <OutlinedInput
                      size='small'
                      value={''}
                      onChange={() => {}}
                      id='outlined-adornment-amount'
                      startAdornment={
                        <InputAdornment position='start'>$</InputAdornment>
                      }
                      label='Amount'
                    />
                  </FormControl>
                </Grid>

                <Grid
                  item
                  xs={6}>
                  <Typography
                    color='secondary.dark'
                    fontSize='15px'
                    sx={{ fontWeight: 'bold' }}>
                    Payment Date
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}>
                  <LocalizationProvider>
                    <DatePicker
                      value={''} // Set the value prop to display the selected date
                      onChange={() => {}} // Capture the selected date
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label='Select Date'
                          variant='outlined'
                          inputFormat='DDMMYYYY'
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid
                  item
                  xs={6}>
                  <Typography
                    color='secondary.dark'
                    fontSize='15px'
                    sx={{ fontWeight: 'bold' }}>
                    Payment Method
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}>
                  <FormControl
                    fullWidth
                    size='small'>
                    <Select
                      labelId='demo-select-small-label'
                      id='demo-select-small'
                      value={''}
                      onChange={() => {}}>
                      <MenuItem value=''>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value='account_transfer'>
                        Account Transfer
                      </MenuItem>
                      <MenuItem value='cheque'>Cheque</MenuItem>
                      <MenuItem value='upi'>UPI</MenuItem>
                      <MenuItem value='cash'>Cash Payment</MenuItem>
                      <MenuItem value='dd'>Demand Draft</MenuItem>
                      <MenuItem value='other'>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContent>
            <div className='action-container'>
              <Button
                variant='contained'
                disableElevation
                sx={{
                  bgcolor: 'white',
                  textTransform: 'none',
                  width: '170px',
                  height: '44px',
                  color: grey[700],
                  border: 'solid gray 0.5px',
                  borderRadius: '8px',
                  '&:hover': { bgcolor: 'white' },
                }}>
                cancel
              </Button>
              <Button
                disableElevation
                variant='contained'
                sx={{
                  bgcolor: 'secondary.main',
                  textTransform: 'none',
                  fontSize: '1rem',
                  width: '170px',
                  height: '44px',
                  borderRadius: '8px',
                  '&:hover': { bgcolor: 'secondary.main' },
                }}>
                Confirm
              </Button>
            </div>
          </Box>
        </Modal>
      </Grid>
    </ThemeProvider>
  );
}
