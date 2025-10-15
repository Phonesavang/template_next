import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

// Create MTS Exporter Theme
export const exporterTheme = createTheme({
  palette,
  typography,
  components,
  spacing: 8, // 8px grid system
  shape: {
    borderRadius: 8, // Rounded corners
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
    modal: 1300,
    snackbar: 1400,
  },
});

export type ExporterTheme = typeof exporterTheme;
