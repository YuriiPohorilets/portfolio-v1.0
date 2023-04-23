import { Box } from '@mui/material';

export const Section = ({ children }) => {
  return (
    <Box component="section" sx={{ py: '60px' }}>
      {children}
    </Box>
  );
};
