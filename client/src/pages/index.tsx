import { GetServerSideProps } from 'next';
import Head from 'next/head';

import NavBar from '@components/NavBar';
import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import { parseCookies } from 'nookies';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { [COOKIES.TOKEN_NAME]: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: PATHS.LOGIN,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Nextron Energia</title>
      </Head>
      <NavBar />
    </>
  );
}
