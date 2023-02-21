import { GetServerSideProps, NextPage } from 'next';

import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import { parseCookies } from 'nookies';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { [COOKIES.NAME]: token } = parseCookies(context);

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
  return <h1>home</h1>;
}
