import { Box, Typography, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Section } from 'shared/Section';
import { Container } from 'shared/Container';
import {
  wrapperStyle,
  photoStyle,
  primaryTextStyle,
  accentTextStyle,
  buttonWrapperStyle,
} from './homeStyles';
import { outlinedButtonStyle, containedButtonStyle } from 'shared/commonStyles';
import Photo from 'img/photo.webp';

export const Home = () => {
  return (
    <Section>
      <Container>
        <Box sx={wrapperStyle}>
          <Box>
            <Box
              component="img"
              src={Photo}
              alt="photo"
              width="536"
              height="570"
              loading="lazy"
              sx={photoStyle}
            />
          </Box>

          <Box>
            <Typography sx={primaryTextStyle}>Hi there! 👋</Typography>
            <Typography sx={{ ...primaryTextStyle, mb: '48px' }}>
              Welcome to my portfolio
            </Typography>
            <Typography sx={primaryTextStyle}>
              I'm{' '}
              <Typography
                component="span"
                sx={{ ...primaryTextStyle, ...accentTextStyle, fontSize: '32px' }}
              >
                Yurii Pohorilets
              </Typography>{' '}
              —
            </Typography>
            <Typography component="h1" sx={{ ...accentTextStyle, mb: '48px' }}>
              Frontend Developer
            </Typography>

            <Box sx={buttonWrapperStyle}>
              <Button variant="outlined" sx={outlinedButtonStyle}>
                Get CV <OpenInNewIcon sx={{ ml: '8px' }} />
              </Button>
              <Button variant="contained" sx={containedButtonStyle}>
                Hire me
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
