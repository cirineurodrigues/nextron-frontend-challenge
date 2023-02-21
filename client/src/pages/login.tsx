import { GetServerSideProps } from 'next';
import Head from 'next/head';

import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import Login from '@features/login/pages/Login';
import { parseCookies } from 'nookies';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Nextron Energia</title>
      </Head>
      <Login />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { [COOKIES.NAME]: token } = parseCookies(context);

  if (token) {
    return {
      redirect: {
        destination: PATHS.ROOT,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
