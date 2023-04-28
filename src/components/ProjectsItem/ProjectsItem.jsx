import { List, ListItem, Typography, Box, Link, Button } from '@mui/material';
import {
  titleStyle,
  imageStyle,
  itemStyle,
  skillListStyle,
  imageWrapperStyle,
  skillItemStyle,
  linkWrapperStyle,
  linkStyle,
} from './projectsItemStyles';
import { SwiperSlide } from 'swiper/react';

export const ProjectsItem = ({ project }) => {
  const { title, description, prevImg, skills, sourceUrl, siteUrl } = project;

  return (
    <ListItem sx={itemStyle} as={SwiperSlide}>
      <Typography sx={titleStyle}>{title}</Typography>

      <Box sx={imageWrapperStyle}>
        <Box
          component="img"
          src={prevImg}
          alt={description}
          width={361}
          height={170}
          sx={imageStyle}
        />
      </Box>

      <List sx={skillListStyle}>
        {skills.map(skill => {
          return (
            <ListItem key={skill} sx={skillItemStyle}>
              {skill}
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ flexGrow: 1 }}>
        <Typography>{description}</Typography>
      </Box>

      <Box sx={linkWrapperStyle}>
        <Button component={Link} href={sourceUrl} underline="none" target="_blank" sx={linkStyle}>
          View source
        </Button>
        <Button component={Link} href={siteUrl} underline="none" target="_blank" sx={linkStyle}>
          Visit the site
        </Button>
      </Box>
    </ListItem>
  );
};
