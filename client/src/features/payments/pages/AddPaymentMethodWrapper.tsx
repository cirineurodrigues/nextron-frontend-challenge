import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomContainer from '@components/CustomContainer';

import AddPaymentMethodForm from '../components/AddPaymentMethodForm';

const AddPaymentMethodWrapper: React.FC = () => {
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
          Add Payment Method
        </Typography>
      </Box>
      <AddPaymentMethodForm />
    </CustomContainer>
  );
};

export default AddPaymentMethodWrapper;
