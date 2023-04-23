import { Box } from '@mui/material';

export const Section = ({ children }) => {
  return (
    <Box component="section" sx={{ pt: '140px', pb: '60px' }}>
      {children}
    </Box>
  );
};
