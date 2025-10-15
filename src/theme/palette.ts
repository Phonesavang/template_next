import { PaletteOptions } from "@mui/material/styles";

export const palette: PaletteOptions = {
  mode: "light", // Support dark mode later
  primary: {
    main: "#4F46E5", // Exporter blue
    light: "#4F46E5",
    dark: "#4F46E5",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#dc004e", // Accent red
    light: "#ff5983",
    dark: "#9a0036",
    contrastText: "#ffffff",
  },
  error: {
    main: "#FF3B30",
    light: "#FF3B30",
    dark: "#FF3B30",
  },
  warning: {
    main: "#ff9800",
    light: "#ffb74d",
    dark: "#f57c00",
  },
  info: {
    main: "#2196f3",
    light: "#64b5f6",
    dark: "#1976d2",
  },
  success: {
    main: "#34C759",
    light: "#34C759",
    dark: "#34C759",
  },
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },
  text: {
    primary: "#171717",
    secondary: "#171717",
    disabled: "#171717",
  },
  divider: "rgba(0, 0, 0, 0.12)",
};
