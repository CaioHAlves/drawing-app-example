import {
  createTheme,
} from '@material-ui/core/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#F2CE1B',
      light: '#F2DBAE',
      dark: '#F2CE1B'
    },
    secondary: {
      main: '#47419c',
      light: '#47419c',
      dark: '#18153b'
    }
  },
  overrides: {
    MuiLink: {
      root: {
        color: '#F2DBAE',
        margin: '0rem 0rem 0rem 0.9375rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '1.25rem'
      }
    }
  }
});
