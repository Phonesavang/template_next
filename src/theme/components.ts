import { Components, Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
  // Button overrides
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none", // ไม่ใช้ uppercase
        fontWeight: 500,
        borderRadius: 4,
        // padding: "8px 16px",
        fontSize: "16px",
      },
      disableElevation: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
      containedPrimary: {
        boxShadow: "0 2px 4px rgba(25, 118, 210, 0.25)",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(25, 118, 210, 0.35)",
        },
      },
    },
  },

  // Card overrides
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  // TextField overrides
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      size: "medium",
    },
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: 8,
        },
      },
    },
  },

  // AppBar overrides
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        color: "#333333",
      },
    },
  },
};
