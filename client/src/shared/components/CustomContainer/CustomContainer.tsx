import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { IChildren } from '@interfaces/commonInterfaces';

const CustomContainer: React.FC<IChildren> = ({ children }) => {
  return (
    <Box sx={(theme) => ({ py: 2, background: theme.palette.grey[100] })}>
      <Container maxWidth="xl">
        <Paper>{children}</Paper>
      </Container>
    </Box>
  );
};

export default CustomContainer;
