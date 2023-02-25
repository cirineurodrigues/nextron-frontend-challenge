import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IDataItemProps {
  text: string | number | undefined;
  title: string;
}

const DataItem: React.FC<IDataItemProps> = ({ text, title }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      columnGap={1}
      justifyContent="center"
      my={1}
    >
      <Typography component="h3" variant="h6">
        {title}:
      </Typography>
      <Typography variant="body1">{text || '-'}</Typography>
    </Box>
  );
};

export default DataItem;
