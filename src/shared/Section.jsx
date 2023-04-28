import { Box } from '@mui/material';
import { sectionStyle } from 'commonStyles';

export const Section = ({ children }) => {
  return (
    <Box component="section" sx={sectionStyle}>
      {children}
    </Box>
  );
};
