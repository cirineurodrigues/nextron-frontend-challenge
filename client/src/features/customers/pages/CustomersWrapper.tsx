import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from '@components/CustomButton';
import CustomContainer from '@components/CustomContainer';
import PATHS from '@constants/paths';
import { ICustomerBase } from '@interfaces/customersInterfaces';

import CustomersTable from '../components/CustomersTable';

interface ICustomersWrapperProps {
  customers: ICustomerBase[];
}

const CustomersWrapper: React.FC<ICustomersWrapperProps> = ({ customers }) => {
  const router = useRouter();

  return (
    <CustomContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
        mt={2}
      >
        <Typography component="h1" variant="h5">
          Customers
        </Typography>
        <CustomButton
          color="primary"
          onClick={() => router.push(PATHS.CREATE_CUSTOMER)}
          variant="contained"
        >
          Add Customer
        </CustomButton>
      </Box>
      <CustomersTable customers={customers} />
    </CustomContainer>
  );
};

export default CustomersWrapper;
