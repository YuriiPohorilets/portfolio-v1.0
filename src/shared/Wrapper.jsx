import { Box } from '@mui/material';

export const Wrapper = ({ children }) => {
  return (
    <Box sx={{ width: '100%', height: '100vh', backgroundSize: 'cover', scrollSnapAlign: 'start' }}>
      {children}
    </Box>
  );
};
