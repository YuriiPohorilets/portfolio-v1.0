import { Box, Typography, List, ListItem } from '@mui/material';
import { Section } from 'shared/Section';
import { Container } from 'shared/Container';
import { Title } from 'shared/Title';
import { aboutMe } from 'data/about';
import { wrapperStyle, primaryTextStyle, skillListStyle, skillItemStyle } from './aboutStyles';

export const About = () => {
  const { intro, main, conclusion, skillsSet } = aboutMe;

  return (
    <Section>
      <Container>
        <Box sx={wrapperStyle}>
          <Box sx={{ maxWidth: '700px' }}>
            <Title>About me</Title>

            <Typography sx={{ ...primaryTextStyle, mb: '24px' }}>{intro}</Typography>
            <Typography sx={{ ...primaryTextStyle, mb: '24px' }}>{main}</Typography>
            <Typography sx={primaryTextStyle}>{conclusion}</Typography>
          </Box>

          <Box>
            <Title>Hard skills</Title>

            <List sx={skillListStyle}>
              {skillsSet.map(skill => {
                return (
                  <ListItem key={skill} sx={skillItemStyle}>
                    {skill}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
