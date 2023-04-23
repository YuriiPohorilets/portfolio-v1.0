import { Box } from '@mui/material';
import { Wrapper } from 'shared/Wrapper';
import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'pages/Home/Home';
import { About } from 'pages/About/About';
import { Projects } from 'pages/Projects/Projects';
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  return (
    <>
      <Box component="header" sx={{ py: '18px', bgcolor: 'primary.darker' }}>
        <AppBar />
      </Box>

      <Box
        component="main"
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          scrollBehavior: 'smooth',
          overflow: 'auto',
          scrollSnapType: 'y mandatory',
        }}
      >
        <Wrapper>
          <Home />
        </Wrapper>

        <Wrapper>
          <About />
        </Wrapper>

        <Wrapper>
          <Projects />
        </Wrapper>

        <Wrapper>
          <Contacts />
        </Wrapper>
      </Box>
    </>
  );
};
