import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomContainer from '@components/CustomContainer';

import CreateCustomerForm from '../components/CreateCustomerForm';

const CreateCustomerWrapper: React.FC = () => {
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
          Create Customers
        </Typography>
      </Box>
      <CreateCustomerForm />
    </CustomContainer>
  );
};

export default CreateCustomerWrapper;
