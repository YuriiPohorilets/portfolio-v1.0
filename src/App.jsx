import { useState } from 'react';
import { Box } from '@mui/material';
import { Wrapper } from 'shared/Wrapper';
import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'pages/Home/Home';
import { About } from 'pages/About/About';
import { Projects } from 'pages/Projects/Projects';
import { Contacts } from 'pages/Contacts/Contacts';
import { headerStyle, smoothContainerStyle } from 'commonStyles';

export const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <>
      <Box component="header" sx={headerStyle}>
        <AppBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </Box>

      <Box component="main" sx={smoothContainerStyle}>
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
