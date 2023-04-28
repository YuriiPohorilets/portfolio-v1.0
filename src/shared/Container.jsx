import { Box } from '@mui/material';
import { containerStyle } from 'commonStyles';

export const Container = ({ children }) => {
  return <Box sx={containerStyle}>{children}</Box>;
};
