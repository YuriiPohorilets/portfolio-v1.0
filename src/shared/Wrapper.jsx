import { Box } from '@mui/material';

export const Wrapper = ({ children, id }) => {
  return (
    <Box
      id={id}
      sx={{ width: '100%', height: '100vh', backgroundSize: 'cover', scrollSnapAlign: 'start' }}
    >
      {children}
    </Box>
  );
};
