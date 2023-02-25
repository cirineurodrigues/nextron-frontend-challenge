import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import add_payment_method from '@assets/images/add_payment_method.svg';
import CustomButton from '@components/CustomButton';
import MESSAGES from '@constants/messages';
import useAddPaymentMethod from '@features/payments/hooks/useAddPaymentMethod';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export interface IFormValues {
  methodType: string;
  cardBin: string;
  cardLastFour: string;
  expiryMonth: number;
  expiryYear: number;
  eWallet: string;
  nameOnCard: string;
  latitude: number;
  longitude: number;
  country: string;
  street1: string;
}

const AddPaymentMethodForm = () => {
  const validationSchema = Yup.object().shape({
    methodType: Yup.string().required(MESSAGES.REQUIRED_METHOD_TYPE),
    cardBin: Yup.string().required(MESSAGES.REQUIRED_CARD_BIN),
    cardLastFour: Yup.string().required(MESSAGES.REQUIRED_CARD_LAST_FOUR),
    expiryMonth: Yup.number().required(MESSAGES.REQUIRED_EXPIRY_MONTH),
    expiryYear: Yup.number().required(MESSAGES.REQUIRED_EXPIRY_YEAR),
    eWallet: Yup.string().required(MESSAGES.REQUIRED_E_WALLET),
    nameOnCard: Yup.string().required(MESSAGES.REQUIRED_NAME_ON_CARD),
    country: Yup.string().required(MESSAGES.REQUIRED_COUNTRY),
    street1: Yup.string().required(MESSAGES.REQUIRED_STREET),
    latitude: Yup.number().required(MESSAGES.REQUIRED_LATITUDE),
    longitude: Yup.number().required(MESSAGES.REQUIRED_LONGITUDE),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const router = useRouter();

  const customerID = Number(router.query.customerID);

  const { AddPaymentMethod, loading } = useAddPaymentMethod(customerID);

  const handleCreateCustomer = async (data: any) => {
    await AddPaymentMethod(data);
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={(theme) => ({ padding: theme.spacing(4, 2) })}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={2}
          py={4}
        >
          <Image
            alt="Create customer"
            src={add_payment_method}
            style={{
              width: '100%',
              maxWidth: '200px',
              height: 'fit-content',
            }}
          />
        </Box>
        <form noValidate onSubmit={handleSubmit(handleCreateCustomer)}>
          <Controller
            control={control}
            defaultValue=""
            name="methodType"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.methodType)}
                fullWidth
                helperText={errors?.methodType?.message}
                label="Mathod Type"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="cardBin"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.cardBin)}
                fullWidth
                helperText={errors?.cardBin?.message}
                label="Card Bin"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="cardLastFour"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.cardLastFour)}
                fullWidth
                helperText={errors?.cardLastFour?.message}
                label="Card Last Four"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue={0}
            name="expiryMonth"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.expiryMonth)}
                fullWidth
                helperText={errors?.expiryMonth?.message}
                label="Expiry Month"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                type="number"
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue={0}
            name="expiryYear"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.expiryYear)}
                fullWidth
                helperText={errors?.expiryYear?.message}
                label="Expiry Year"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                type="number"
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="eWallet"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.eWallet)}
                fullWidth
                helperText={errors?.eWallet?.message}
                label="E-Wallet"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="nameOnCard"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.nameOnCard)}
                fullWidth
                helperText={errors?.nameOnCard?.message}
                label="Name On Card"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="country"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.country)}
                fullWidth
                helperText={errors?.country?.message}
                label="Country"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="street1"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.street1)}
                fullWidth
                helperText={errors?.street1?.message}
                label="Street"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue={0}
            name="latitude"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.latitude)}
                fullWidth
                helperText={errors?.latitude?.message}
                label="Latitude"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                type="number"
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue={0}
            name="longitude"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.longitude)}
                fullWidth
                helperText={errors?.longitude?.message}
                label="Longitude"
                onBlur={onBlur}
                onChange={onChange}
                required
                size="small"
                sx={(theme) => ({
                  marginBottom: theme.spacing(3),
                })}
                type="number"
                value={value}
              />
            )}
          />
          <CustomButton
            color="primary"
            fullWidth
            loading={loading}
            type="submit"
            variant="contained"
          >
            Add Payment Method
          </CustomButton>
        </form>
      </Paper>
    </Container>
  );
};

export default AddPaymentMethodForm;
