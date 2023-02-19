import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import IMAGES from '@constants/images';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface IFormValues {
  email: string;
  name: string;
  password: string;
}

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
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

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        /* in progress */
        console.log(data);
      })}
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box display="flex" alignItems="center" my={4}>
          <img
            alt={IMAGES.GREEN_LOGO.ALT}
            src={IMAGES.GREEN_LOGO.SRC}
            style={{ maxWidth: '300px', width: '100%' }}
          />
        </Box>
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
                marginBottom: theme.spacing(4),
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
                marginBottom: theme.spacing(4),
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
                marginBottom: theme.spacing(4),
              })}
              type={showPassword ? 'text' : 'password'}
              value={value}
            />
          )}
        />
        <Button color="primary" fullWidth type="submit" variant="contained">
          SIGN UP
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
