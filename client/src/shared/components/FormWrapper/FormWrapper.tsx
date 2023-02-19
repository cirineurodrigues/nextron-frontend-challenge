import { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import IMAGES from '@constants/images';

interface IFormWrapper {
  children: ReactNode;
}

const FormWrapper: React.FC<IFormWrapper> = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({
        minHeight: '100vh',
        padding: theme.spacing(4, 2),
        backgroundImage: `url(${IMAGES.LOGIN_BACKGROUND.SRC})`,
        backgroundSize: 'cover',
      })}
    >
      <Paper
        sx={(theme) => ({
          maxWidth: theme.breakpoints.values.sm,
          width: '100%',
          padding: `${theme.spacing(4, 2)} !important`,
          background: theme.palette.background.default,
          [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(6, 4)} !important`,
          },
        })}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default FormWrapper;
