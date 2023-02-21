import { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
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
      <Grow in>
        <Paper
          sx={(theme) => ({
            maxWidth: theme.breakpoints.values.sm,
            width: '100%',
            padding: `${theme.spacing(4, 2)} !important`,
            [theme.breakpoints.up('sm')]: {
              padding: `${theme.spacing(6, 4)} !important`,
            },
            position: 'relative',
          })}
        >
          <Box display="flex" justifyContent="center" my={4}>
            <img
              alt={IMAGES.GREEN_LOGO.ALT}
              src={IMAGES.GREEN_LOGO.SRC}
              style={{ maxWidth: '300px', width: '100%' }}
            />
          </Box>
          {children}
        </Paper>
      </Grow>
    </Box>
  );
};

export default FormWrapper;
