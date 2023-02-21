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
import { ILoginData } from '@interfaces/authInterfaces';
import * as Yup from 'yup';

interface IFormValues {
  email: string;
  password: string;
}
const LoginForm: React.FC = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const { loading, signIn } = useAuthContext();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(MESSAGES.REQUIRED_EMAIL)
      .email(MESSAGES.INVALID_EMAIL),
    password: Yup.string().required(MESSAGES.REQUIRED_PASSWORD),
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

  const handleSignIn = async (data: ILoginData) => {
    await signIn(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleSignIn)}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
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
          LOGIN
        </CustomButton>
        <CustomButton
          disabled={loading}
          fullWidth
          onClick={() => router.push(PATHS.REGISTER)}
          variant="text"
        >
          CREATE AN ACCOUNT
        </CustomButton>
      </Box>
    </form>
  );
};

export default LoginForm;
