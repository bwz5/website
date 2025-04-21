// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',           
    primary: {
      main:  '#CA3E47',      // use MUI color helpers or your own hex
      light: '#c1e0c7',
      dark: '#327840',
    },
    text: {
      primary: '#ffffff',   // all “primary” text becomes white
      secondary: '#ffffff', 
    },
    background: {
      default: '#525252',    // page background
      paper: '#414141',         // surface (e.g. Cards)
    },
  },
  typography: {
    // you can also tweak fonts and sizes here
    fontFamily: '"Press Start 2P", monospace',
    default: '#FFFFFF'
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
