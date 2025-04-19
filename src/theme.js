// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',           
    primary: {
      main:  '#0b4015',      // use MUI color helpers or your own hex
      light: '#c1e0c7',
      dark: '#327840',
      contrastText: '#fff',
    },
    background: {
      default: '#fafafa',    // page background
      paper: '#fff',         // surface (e.g. Cards)
    },
  },
  typography: {
    // you can also tweak fonts and sizes here
    fontFamily: '"Arial"'
  },
  shape: {
    borderRadius: 8,         // global border radius
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
