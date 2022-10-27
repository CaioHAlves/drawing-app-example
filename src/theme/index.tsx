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
      light: "#08944D",
      main: "#044725",
      dark: "#011d0F",
    },
    secondary: {
      light: "#ebb377",
      main: "#9e6e35",
      dark: "#683f0d",
    },
    error: {
      light: "#EA6568",
      dark: "#860539",
      main: "#BB0A30"
    },
    action: {
      hover: "#08944e6e"
    }
  }
});
