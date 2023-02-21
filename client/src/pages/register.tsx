import { GetServerSideProps } from 'next';
import Head from 'next/head';

import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import Register from '@register/pages/Register';
import { parseCookies } from 'nookies';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register - Nextron Energia</title>
      </Head>
      <Register />
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
