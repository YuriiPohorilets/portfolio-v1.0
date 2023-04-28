import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#30475E',
      darker: '#222831',
      accent: '#AA8B56',
    },

    neutral: {
      main: '#DDDDDD',
    },

    active: {
      main: '#a88241',
      accent: 'rgba(170, 139, 86, 0.25)',
      neutral: 'rgba(221, 221, 221, 0.1)',
    },
  },

  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});
