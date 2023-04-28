import { Box } from '@mui/material';
import { Container } from 'shared/Container';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = ({ setSelectedPage, selectedPage }) => {
  return (
    <Container>
      <Box component="nav">
        <Navigation setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      </Box>
    </Container>
  );
};
