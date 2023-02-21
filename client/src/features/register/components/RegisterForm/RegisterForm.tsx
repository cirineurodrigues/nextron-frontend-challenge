import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useRouter } from 'next/router';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import CustomButton from '@components/CustomButton';
import MESSAGES from '@constants/messages';
import PATHS from '@constants/paths';
import { useAuthContext } from '@contexts/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { IRegisterData } from '@interfaces/authInterfaces';
import * as Yup from 'yup';

interface IFormValues {
  email: string;
  name: string;
  password: string;
}

const RegisterForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const { loading, signUp } = useAuthContext();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(MESSAGES.REQUIRED_EMAIL)
      .email(MESSAGES.INVALID_EMAIL),
    name: Yup.string().required(MESSAGES.REQUIRED_NAME),
    password: Yup.string()
      .required(MESSAGES.REQUIRED_PASSWORD)
      .min(4, MESSAGES.MIN_LENGTH_PASSWORD),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const handleClickShowPassword = () => setShowPassword((value) => !value);

  const handleRegister = async (data: IRegisterData) => {
    await signUp(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleRegister)}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
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
          name="password"
          render={({ field: { onBlur, onChange, value } }) => (
            <TextField
              error={Boolean(errors?.password)}
              fullWidth
              helperText={errors?.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} size="small">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
              onBlur={onBlur}
              onChange={onChange}
              required
              size="small"
              sx={(theme) => ({
                marginBottom: theme.spacing(3),
              })}
              type={showPassword ? 'text' : 'password'}
              value={value}
            />
          )}
        />
        <CustomButton
          color="primary"
          fullWidth
          loading={loading}
          sx={(theme) => ({
            marginBottom: theme.spacing(2),
          })}
          type="submit"
          variant="contained"
        >
          REGISTER
        </CustomButton>
        <CustomButton
          disabled={loading}
          fullWidth
          onClick={() => router.push(PATHS.LOGIN)}
          variant="text"
        >
          ALREADY HAVE AN ACCOUNT?
        </CustomButton>
      </Box>
    </form>
  );
};

export default RegisterForm;
