import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { AuthProvider } from '@contexts/AuthContext';
import theme from '@providers/CustomThemeProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
