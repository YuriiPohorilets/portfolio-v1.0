import { Box } from '@mui/material';
import { wrapperStyle } from 'commonStyles';

export const Wrapper = ({ children, id }) => {
  return (
    <Box id={id} sx={wrapperStyle}>
      {children}
    </Box>
  );
};
