import Proj1 from 'img/projects/proj-0.jpg';
import Proj2 from 'img/projects/proj-1.jpg';
import Proj3 from 'img/projects/proj-2.jpg';
import Proj4 from 'img/projects/proj-3.jpg';
import Proj5 from 'img/projects/proj-4.jpg';
import Proj6 from 'img/projects/proj-5.jpg';
import Proj7 from 'img/projects/proj-6.jpg';
import Proj8 from 'img/projects/proj-7.jpg';
import Proj9 from 'img/projects/proj-8.jpg';

export const aboutMe = {
  intro: "I'm a Frontend Developer and it brings me pleasure.",
  main: "I completed a Master's degree in Computer Science and also completed Fullstack Developer courses. I have experience working with JavaScript, React, Redux, and Node.js. Also, I did 3 successful team projects.",
  conclusion:
    'It is important to me to grow as a Frontend Developer and put into practice my knowledge in JavaScript and React.',
  skillsSet: [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Redux Toolkit',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MUI',
    'GIT',
    'BEM',
    'REST API',
  ],
};

export const projectsList = [
  {
    id: 9,
    title: 'Tweets',
    description:
      'A simple application with a nice design for managing tweets, there is an option to filter by following status',
    prevImg: Proj9,
    skills: ['React', 'MUI', 'LocalStorage'],
    sourceUrl: 'https://github.com/YuriiPohorilets/test-task-tweets',
    siteUrl: 'https://yuriipohorilets.github.io/test-task-tweets/',
    type: 'personal',
    role: null,
    createdAt: '2023-04-01',
  },

  {
    id: 8,
    title: 'Petly',
    description:
      'Is a web application created to help search and choose a pet for adoption. Users can view various animal profiles, search by different criteria, and save their favorite listings.',
    prevImg: Proj8,
    skills: ['React', 'RTK Query', 'Formik', 'Yup', 'Node.js', 'Express.js', 'Joi'],
    sourceUrl: 'https://github.com/YuriiPohorilets/fs-55-project-3-backend',
    siteUrl: 'https://kirill-filonchuk.github.io/pet_team02/',
    type: 'team',
    role: 'backend',
    createdAt: '2023-03-30',
  },

  {
    id: 7,
    title: 'Phonebook',
    description:
      'The simple SPA to keep your contacts in one place with the possibility of creating, searching, and removing contact. Form value validation. For authorization, you can use the demo credentials.',
    prevImg: Proj7,
    skills: ['React', 'Redux Toolkit', 'Formik', 'Yup', 'Styled Components'],
    sourceUrl: 'https://github.com/YuriiPohorilets/goit-react-hw-08-phonebook',
    siteUrl: 'https://yuriipohorilets.github.io/goit-react-hw-08-phonebook/',
    type: 'personal',
    role: null,
    createdAt: '2023-03-01',
  },

  {
    id: 6,
    title: 'Filmoteka',
    description:
      'The adaptive website for searching popular films with the possibility of watching a trailer, adding to queue for watching or marking as watched film.',
    prevImg: Proj6,
    skills: ['HTML', 'SASS', 'JavaScript', 'Axios', 'Parcel', 'REST API'],
    sourceUrl: 'https://github.com/YuriiPohorilets/filmoteka-project-02',
    siteUrl: 'https://yuriipohorilets.github.io/filmoteka-project-02/',
    type: 'team',
    role: 'scrum master',
    createdAt: '2023-02-01',
  },

  {
    id: 5,
    title: 'Image finder',
    description: 'A simple image search app',
    prevImg: Proj5,
    skills: ['JavaScript', 'Axios', 'Parcel', 'REST API'],
    sourceUrl: 'https://github.com/YuriiPohorilets/goit-js-hw-11',
    siteUrl: 'https://yuriipohorilets.github.io/goit-js-hw-11/',
    type: 'personal',
    role: null,
    createdAt: '2023-01-01',
  },

  {
    id: 4,
    title: 'IceCream',
    description: 'Team project. The adaptive landing page is an Ice-cream shop with a nice design.',
    prevImg: Proj4,
    skills: ['HTML', 'SASS', 'BEM', 'Parcel'],
    sourceUrl: 'https://github.com/YuriiPohorilets/icecream-project-01',
    siteUrl: 'https://yuriipohorilets.github.io/icecream-project-01/',
    type: 'team',
    role: 'team lead',
    createdAt: '2022-10-01',
  },

  {
    id: 3,
    title: 'WebStudio',
    description: 'Adaptive landing page',
    prevImg: Proj3,
    skills: ['HTML', 'SASS', 'BEM', 'Mobile first'],
    sourceUrl: 'https://github.com/YuriiPohorilets/goit-markup-hw-08',
    siteUrl: 'https://yuriipohorilets.github.io/goit-markup-hw-08/',
    type: 'personal',
    role: null,
    createdAt: '2022-10-01',
  },

  {
    id: 2,
    title: 'Britlex',
    description: 'Adaptive landing page',
    prevImg: Proj2,
    skills: ['HTML', 'SASS', 'BEM'],
    sourceUrl: 'https://github.com/YuriiPohorilets/Britlex',
    siteUrl: 'https://yuriipohorilets.github.io/Britlex/',
    type: 'personal',
    role: null,
    createdAt: '2022-09-01',
  },

  {
    id: 1,
    title: 'Bhromaon',
    description: 'Adaptive landing page',
    prevImg: Proj1,
    skills: ['HTML', 'CSS'],
    sourceUrl: 'https://github.com/YuriiPohorilets/bhromaon-travel',
    siteUrl: 'https://yuriipohorilets.github.io/bhromaon-travel/',
    type: 'personal',
    role: null,
    createdAt: '2022-08-01',
  },
];
