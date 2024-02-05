import { ThemeProvider } from '@emotion/react';
import './App.css';
import CustomModal from './BasicModal';
import ButtonUsage from './BasicModal';
import { createTheme } from '@mui/material';
import BasicModal from './BasicModal';
import PaymentRecordModal from './PaymentRecordModal';
import { green, grey, red } from '@mui/material/colors';
import { Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import '@fontsource/poppins';
import SignUp from './SignUp';
import Invoice from './Invoice';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[800],
      },
      secondary: {
        main: green[400],
        dark: grey[700],
      },
    },
    components: {
      MuiPaper: {
        padding: '17px',
        borderRadius: '12px',
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            width: '100%',
            textTransform: 'none',
            fontSize: '1rem',
            borderRadius: '8px',
          },
        },
      },
    },
    typography: {
      fontFamily: 'Poppins,Roboto, sans-serif',
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {' '}
                <BasicModal />
                <PaymentRecordModal />
              </>
            }
          />
          <Route
            path='/signIn'
            element={<SignIn />}
          />
          <Route
            path='/signUp'
            element={<SignUp />}
          />
          <Route
            path='/invoice'
            element={<Invoice />}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
