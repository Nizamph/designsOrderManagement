import { Grid, Typography } from '@mui/material';

const Pill = ({ image, text, onClick }) => {
  return (
    <Grid
      sx={{
        height: '10px',
        display: 'flex',
        padding: '10px',
        paddingY: '16px',
        bgcolor: 'black',
        borderRadius: '20px',
        alignItems: 'center',
      }}
      onClick={onClick}>
      <Typography
        fontSize='10px'
        color='white'
        borderRadius='20px'>
        {text}
      </Typography>
    </Grid>
  );
};

export default Pill;
