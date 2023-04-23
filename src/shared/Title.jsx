import { Typography } from '@mui/material';

export const Title = ({ children }) => {
  return (
    <Typography
      sx={{ fontWeight: 700, fontSize: '36px', lineHeight: 1.22, color: 'primary.accent' }}
    >
      {children}
    </Typography>
  );
};
