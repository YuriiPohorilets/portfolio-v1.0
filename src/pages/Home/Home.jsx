import { Box, Typography, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Section } from 'shared/Section';
import { Container } from 'shared/Container';
import Photo from 'img/photo.webp';
import {
  wrapperStyle,
  photoStyle,
  primaryTextStyle,
  accentTextStyle,
  buttonWrapperStyle,
} from './homeStyles';
import { outlinedButtonStyle, containedButtonStyle } from 'commonStyles';

export const Home = () => {
  return (
    <Section>
      <Container>
        <Box sx={wrapperStyle}>
          <Box sx={{ width: '536px' }}>
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
              Junior Frontend Developer
            </Typography>

            <Box sx={buttonWrapperStyle}>
              <Button
                variant="outlined"
                component="a"
                target="_blank"
                href="https://drive.google.com/file/d/1djD_kJykntesXbu4bwGBdBsOlCYi7H8E/view?usp=share_link"
                sx={outlinedButtonStyle}
              >
                Get CV <OpenInNewIcon sx={{ ml: '8px' }} />
              </Button>
              <Button variant="contained" component="a" href="#contacts" sx={containedButtonStyle}>
                Hire me
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
