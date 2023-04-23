import { Box } from '@mui/material';
import { Container } from 'shared/Container';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  return (
    <Container>
      <Box component="nav">
        <Navigation />
      </Box>
    </Container>
  );
};
