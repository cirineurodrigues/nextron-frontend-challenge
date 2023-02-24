import { GetServerSideProps } from 'next';
import Head from 'next/head';

import NavBar from '@components/NavBar';
import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import PaymentsWrapper from '@features/payments/pages/PaymentsWrapper';
import CustomersService from '@services/customers';
import PaymentsService from '@services/payments';
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
    data: { payments },
  } = (await PaymentsService.getPayments(context)) as any;

  return {
    props: { payments },
  };
};

export default function Payments({ payments }: any) {
  return (
    <>
      <Head>
        <title>Payments - Nextron Energia</title>
      </Head>
      <NavBar />
      <PaymentsWrapper payments={payments} />
    </>
  );
}
