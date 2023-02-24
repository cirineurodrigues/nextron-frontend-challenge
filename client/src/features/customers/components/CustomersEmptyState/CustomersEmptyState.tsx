import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from '@components/CustomButton';

const CustomersEmptyState = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      flex={1}
    >
      <Typography textAlign="center" variant="h4" component="h2">
        There are no customers.
      </Typography>
      <CustomButton color="primary" variant="contained">
        Add Customer
      </CustomButton>
    </Box>
  );
};

export default CustomersEmptyState;
