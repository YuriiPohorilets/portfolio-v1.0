import { Box } from '@mui/material';

export const Container = ({ children }) => {
  return <Box sx={{ mx: 'auto', px: '15px', maxWidth: '1280px' }}>{children}</Box>;
};
