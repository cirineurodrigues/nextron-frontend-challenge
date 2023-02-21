import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

interface IButtonProps extends ButtonProps {
  loading?: boolean;
}

const CustomButton: React.FC<IButtonProps> = ({
  loading,
  children,
  ...props
}) => {
  const { color } = props;

  const theme = useTheme();

  const getContrastColor =
    theme.palette[color && color !== 'inherit' ? color : 'primary']
      .contrastText;

  return (
    <Button size="medium" style={{ height: '36px' }} {...props}>
      {loading ? (
        <CircularProgress size={24} sx={{ color: getContrastColor }} />
      ) : (
        children
      )}
    </Button>
  );
};

export default CustomButton;
