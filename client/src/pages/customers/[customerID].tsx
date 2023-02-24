import { GetServerSideProps } from 'next';
import Head from 'next/head';

import NavBar from '@components/NavBar';
import COOKIES from '@constants/cookies';
import PATHS from '@constants/paths';
import CustomerWrapper from '@customers//pages/CustomerWrapper';
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

  const customerID = context.query.customerID as string;

  const {
    data: { customer },
  } = (await CustomersService.getCustomerById(context, customerID)) as any;

  return {
    props: { customer },
  };
};

export default function Customer({ customer }: any) {
  return (
    <>
      <Head>
        <title>{customer.name}</title>
      </Head>
      <NavBar />
      <CustomerWrapper customer={customer} />
    </>
  );
}
