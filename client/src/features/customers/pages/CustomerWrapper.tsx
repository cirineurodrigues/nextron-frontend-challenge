import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from '@components/CustomButton';
import CustomContainer from '@components/CustomContainer';
import { ICustomerBase } from '@interfaces/customersInterfaces';

import CustomerDetailsCard from '../components/CustomerDetailsCard';

interface ICustomerWrapperProps {
  customer: ICustomerBase;
}

const CustomerWrapper: React.FC<ICustomerWrapperProps> = ({ customer }) => {
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
          Customer: {customer.name}
        </Typography>
        <CustomButton color="primary" variant="contained">
          Edit Customer
        </CustomButton>
      </Box>
      <CustomerDetailsCard customer={customer} />
    </CustomContainer>
  );
};

export default CustomerWrapper;
