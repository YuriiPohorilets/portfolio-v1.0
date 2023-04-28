import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { ProjectsItem } from 'components/ProjectsItem/ProjectsItem';
import { projectsList } from 'data/about';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ProjectsList = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      rewind={true}
      slidesPerView={1}
      spaceBetween={36}
      grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 36,
        },
      }}
    >
      {projectsList.map(projectItem => {
        return (
          <SwiperSlide key={projectItem.id} style={{ height: 'auto' }}>
            <ProjectsItem key={projectItem.id} project={projectItem} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
