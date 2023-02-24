import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from '@components/CustomButton';
import CustomContainer from '@components/CustomContainer';
import { IPaymentMethod } from '@interfaces/paymentMethodsInterfaces';

import PaymentsTable from '../components/PaymentsTable';

interface IPaymentsWrapperProps {
  payments: IPaymentMethod[];
}

const PaymentsWrapper: React.FC<IPaymentsWrapperProps> = ({ payments }) => {
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
          Payments
        </Typography>
        <CustomButton color="primary" variant="contained">
          Add Payment Method
        </CustomButton>
      </Box>
      <PaymentsTable payments={payments} />
    </CustomContainer>
  );
};

export default PaymentsWrapper;
