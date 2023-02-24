import Image from 'next/image';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import empty_state from '@shared/assets/images/empty_state.svg';

interface IEmptyStateProps {
  text?: string;
}

const EmptyState: React.FC<IEmptyStateProps> = ({ text = 'No data found' }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      my={10}
    >
      <Typography component="h2" mb={2} textAlign="center" variant="h4">
        {text}
      </Typography>
      <Image
        alt="No data found"
        src={empty_state}
        style={{ width: '100%', maxWidth: '500px' }}
      />
    </Box>
  );
};

export default EmptyState;
