import type { AppProps } from 'next/app';
import Head from 'next/head';

import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '@providers/CustomThemeProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
