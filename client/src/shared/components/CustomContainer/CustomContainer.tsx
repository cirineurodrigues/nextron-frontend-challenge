import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { IChildren } from '@interfaces/commonInterfaces';

const CustomContainer: React.FC<IChildren> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        py: 2,
        background: theme.palette.grey[100],
      })}
    >
      <Container maxWidth="xl">
        <Paper
          sx={(theme) => ({
            padding: theme.spacing(2),
            minHeight: 'calc(100vh - 88px)',
            [theme.breakpoints.up('sm')]: {
              minHeight: 'calc(100vh - 96px)',
            },
            [theme.breakpoints.up('md')]: {
              minHeight: 'calc(100vh - 100.5px)',
            },
          })}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default CustomContainer;
