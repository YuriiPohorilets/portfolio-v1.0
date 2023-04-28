import { List } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import { ProjectsItem } from 'components/ProjectsItem/ProjectsItem';
import { projectsList } from 'data/about';
import { listStyle } from './projectsListStyle';
import 'swiper/css';
import 'swiper/css/scrollbar';

export const ProjectsList = () => {
  return (
    <List as={Swiper} component="ul" modules={[Scrollbar]} slidesPerView={3} sx={listStyle}>
      {projectsList.map(projectItem => {
        return (
          <SwiperSlide key={projectItem.id} style={{ height: 'auto' }}>
            <ProjectsItem key={projectItem.id} project={projectItem} />
          </SwiperSlide>
        );
      })}
    </List>
  );
};
