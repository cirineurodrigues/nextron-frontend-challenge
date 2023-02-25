import { GetServerSideProps } from 'next';
import Head from 'next/head';

import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import { parseCookies } from 'nookies';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { [COOKIES.TOKEN_NAME]: token } = parseCookies(context);

  if (token) {
    return {
      redirect: {
        destination: PATHS.CUSTOMERS,
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: PATHS.LOGIN,
      permanent: false,
    },
  };
};

export default function Login() {
  return (
    <>
      <Head>
        <title>Home - Nextron Energia</title>
      </Head>
    </>
  );
}
