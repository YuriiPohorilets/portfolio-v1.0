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
      <Box
        component="header"
        sx={{
          py: '18px',
          bgcolor: 'primary.darker',
          position: 'fixed',
          width: '100%',
          zIndex: 99,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
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
        <Wrapper id="home">
          <Home />
        </Wrapper>

        <Wrapper id="about">
          <About />
        </Wrapper>

        <Wrapper id="projects">
          <Projects />
        </Wrapper>

        <Wrapper id="contacts">
          <Contacts />
        </Wrapper>
      </Box>
    </>
  );
};
