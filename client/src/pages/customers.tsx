import { GetServerSideProps } from 'next';
import Head from 'next/head';

import NavBar from '@components/NavBar';
import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import CustomersWrapper from '@features/customers/pages/CustomersWrapper';
import { ICustomerBase } from '@interfaces/customersInterfaces';
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

export default function Customers({ customers }: any) {
  return (
    <>
      <Head>
        <title>Customers - Nextron Energia</title>
      </Head>
      <NavBar />
      <CustomersWrapper customers={customers} />
    </>
  );
}
