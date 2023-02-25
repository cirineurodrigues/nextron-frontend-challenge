import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import create_customer from '@assets/images/create_customer.svg';
import CustomButton from '@components/CustomButton';
import MESSAGES from '@constants/messages';
import useCreateCustomer from '@customers//hooks/useCreateCustomer';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export interface IFormValues {
  email: string;
  name: string;
  telephone: string;
  country: string;
  street1: string;
  latitude: number;
  longitude: number;
}

const CreateCustomerForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(MESSAGES.REQUIRED_EMAIL)
      .email(MESSAGES.INVALID_EMAIL),
    name: Yup.string().required(MESSAGES.REQUIRED_NAME),
    telephone: Yup.string().required(MESSAGES.REQUIRED_TELEPHONE),
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

  const { createCustomer, loading } = useCreateCustomer();

  const handleCreateCustomer = async (data: any) => {
    await createCustomer(data);
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
            src={create_customer}
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
            name="name"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.name)}
                fullWidth
                helperText={errors?.name?.message}
                label="Name"
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
            name="email"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.email)}
                fullWidth
                helperText={errors?.email?.message}
                label="E-mail"
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
            name="telephone"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                error={Boolean(errors?.telephone)}
                fullWidth
                helperText={errors?.telephone?.message}
                label="Telephone"
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
            Create Customer
          </CustomButton>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateCustomerForm;
