import { GetServerSideProps } from 'next';
import Head from 'next/head';

import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import LoginWrapper from '@login/pages/LoginWrapper';
import { parseCookies } from 'nookies';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Nextron Energia</title>
      </Head>
      <LoginWrapper />
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
