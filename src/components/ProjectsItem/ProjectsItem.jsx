import { List, ListItem, Typography, Box } from '@mui/material';
import {
  titleStyle,
  imageStyle,
  itemStyle,
  skillListStyle,
  imageWrapperStyle,
  skillItemStyle,
} from './projectsItemStyles';

export const ProjectsItem = ({ project }) => {
  const { title, description, prevImg, skills, sourceUrl, siteUrl, type, role, createdAt } =
    project;

  return (
    <ListItem sx={itemStyle}>
      <Typography sx={titleStyle}>{title}</Typography>

      <Box sx={imageWrapperStyle}>
        <Box
          component="img"
          src={prevImg}
          alt={description}
          width={334}
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

      <Box>
        <Typography>{description}</Typography>
      </Box>
    </ListItem>
  );
};
