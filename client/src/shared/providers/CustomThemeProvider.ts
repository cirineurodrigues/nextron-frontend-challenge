import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#37E1C2',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#FFF',
      contrastText: '#37E1C2',
    },
    text: {
      primary: '#696969',
    },
  },
});

export default theme;
