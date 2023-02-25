import { GetServerSideProps } from 'next';
import Head from 'next/head';

import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import RegisterWrapper from '@register/pages/RegisterWrapper';
import { parseCookies } from 'nookies';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { [COOKIES.TOKEN_NAME]: token } = parseCookies(context);

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

export default function Register() {
  return (
    <>
      <Head>
        <title>Register - Nextron Energia</title>
      </Head>
      <RegisterWrapper />
    </>
  );
}
