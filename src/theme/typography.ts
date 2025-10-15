import type { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions["typography"] = {
  fontFamily: ['"NotoSansLao"', '"Roboto"', "sans-serif"].join(", "),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,

  h1: {
    fontSize: "2.125rem",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "1.875rem",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },

  subtitle1: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.57,
  },

  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.43,
  },

  button: {
    textTransform: "none",
    fontWeight: 500,
    fontSize: "0.875rem",
  },

  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 500,
    lineHeight: 2.66,
    textTransform: "uppercase",
  },
};

export default typography;
