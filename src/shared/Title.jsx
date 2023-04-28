import { Typography } from '@mui/material';
import { titleStyle } from 'commonStyles';

export const Title = ({ children }) => {
  return (
    <Typography component="h2" sx={titleStyle}>
      {children}
    </Typography>
  );
};
