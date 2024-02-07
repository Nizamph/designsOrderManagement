import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import deleteIcon from './icons/deleteIcon.png';
import closeicon from './icons/close-icon.png';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';
import { grey, red } from '@mui/material/colors';
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

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
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
              src={deleteIcon}
              alt='deleteIcon'
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
            Want to Delete this ??
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: '4px', color: 'gray' }}>
            This action would remove this item from table
          </Typography>
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
                border: 'solid grey 0.5px',
                borderRadius: '8px',
                '&:hover': { bgcolor: 'white' },
              }}>
              cancel
            </Button>
            <Button
              disableElevation
              variant='contained'
              sx={{
                bgcolor: '#D92D20',
                fontSize: '1rem',
                width: '170px',
                height: '44px',
                '&:hover': { bgcolor: '#D92D20' },
              }}>
              Confirm
            </Button>
          </div>
        </Box>
      </Modal>
    </Grid>
  );
}
