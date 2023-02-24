import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from '@components/CustomButton';
import CustomContainer from '@components/CustomContainer';
import { ICustomerBase } from '@interfaces/customersInterfaces';

import CustomersTable from '../components/CustomersTable';

interface ICustomersWrapperProps {
  customers: ICustomerBase[];
}

const CustomersWrapper: React.FC<ICustomersWrapperProps> = ({ customers }) => {
  return (
    <CustomContainer>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography component="h1" mb={4} mt={2} variant="h5">
          Customers
        </Typography>
        <CustomButton color="primary" variant="contained">
          Add Customer
        </CustomButton>
      </Box>
      <CustomersTable customers={customers} />
    </CustomContainer>
  );
};

export default CustomersWrapper;
