import { GetServerSideProps } from 'next';
import Head from 'next/head';

import NavBar from '@components/NavBar';
import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import CustomersService from '@services/customers';
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

  const {
    data: { customers },
  } = (await CustomersService.getCustomers(context)) as any;

  return {
    props: { customers },
  };
};

export default function Payments({ customers }: any) {
  return (
    <>
      <Head>
        <title>Payments - Nextron Energia</title>
      </Head>
      <NavBar />
    </>
  );
}
