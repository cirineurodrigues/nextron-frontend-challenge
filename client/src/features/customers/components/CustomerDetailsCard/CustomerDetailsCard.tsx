import { useRouter } from 'next/router';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import CustomButton from '@components/CustomButton';
import DataItem from '@components/DataItem';
import PATHS from '@constants/paths';
import { ICustomerBase } from '@interfaces/customersInterfaces';
import { IPaymentMethod } from '@interfaces/paymentMethodsInterfaces';
import PaymentsTable from '@payments/components/PaymentsTable';

import Map from '../Map';

interface ICustomerDetailsCardProps {
  customer: ICustomerBase;
  payments: IPaymentMethod[];
}

const CustomerDetails: React.FC<ICustomerDetailsCardProps> = ({
  customer,
  payments,
}) => {
  const router = useRouter();
  return (
    <Paper sx={{ overflow: 'hidden' }}>
      <Map />
      <Box position="relative">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          position="absolute"
          top={0}
          left="50%"
          sx={{ transform: 'translate(-50%, -50px)' }}
        >
          <Avatar
            alt={customer.name}
            src="https://i.pravatar.cc/100" //fake avatar image
            sx={{ width: 100, height: 100 }}
          />
          <Typography component="h2" my={2} textAlign="center" variant="h4">
            {customer.name}
          </Typography>
        </Box>
        <Grid container spacing={2} p={2} pt={12}>
          <Grid item xs={12} sm={6} md={4}>
            <DataItem text={customer.customerID} title="Customer ID" />
            <DataItem text={customer.email} title="E-mail" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DataItem text={customer.telephone} title="Telephone" />
            <DataItem text={customer.Location.street1} title="Address" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DataItem text={customer.Location.city} title="City" />
            <DataItem text={customer.Location.country} title="Country" />
          </Grid>
        </Grid>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={(theme) => ({
            padding: theme.spacing(4, 2, 2),
          })}
        >
          <Typography component="h2" variant="h5">
            Payment Methods
          </Typography>
          <CustomButton
            color="primary"
            onClick={() =>
              router.push(PATHS.ADD_PAYMENT_METHOD(customer.customerID))
            }
            variant="contained"
          >
            Add Payment Method
          </CustomButton>
        </Box>
        <Box p={2}>
          <PaymentsTable payments={payments} />
        </Box>
      </Box>
    </Paper>
  );
};

export default CustomerDetails;
