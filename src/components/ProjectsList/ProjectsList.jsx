import { List } from '@mui/material';
import { ProjectsItem } from 'components/ProjectsItem/ProjectsItem';
import { projectsList } from 'data/about';
import { listStyle } from './projectsListStyle';

export const ProjectsList = () => {
  return (
    <List sx={listStyle}>
      {projectsList.map(projectItem => {
        return <ProjectsItem key={projectItem.id} project={projectItem} />;
      })}
    </List>
  );
};
