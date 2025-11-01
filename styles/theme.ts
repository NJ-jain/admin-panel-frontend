"use client";
import { createTheme } from "@mui/material/styles";

// Glassmorphism surface styles for light theme
const glassSurfaceLight = {
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)", // Safari support
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  transition: "all 0.3s ease",
};

// Glassmorphism surface styles for dark theme
const glassSurfaceDark = {
  background: "rgba(30, 30, 30, 0.4)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
  borderRadius: "16px",
  transition: "all 0.3s ease",
};

export const getTheme = (mode: "light" | "dark" = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#6C63FF",
        light: "#8B84FF",
        dark: "#4A42CC",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#03DAC6",
        light: "#33E3D1",
        dark: "#02A895",
        contrastText: "#FFFFFF",
      },
      background: {
        default:
          mode === "light"
            ? "linear-gradient(135deg, #E0EAFB 0%, #CDE7F0 100%)"
            : "#000000",
        paper:
          mode === "light"
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(30, 30, 30, 0.4)",
      },
      text: {
        primary: mode === "light" ? "#1E1E1E" : "#FFFFFF",
        secondary: mode === "light" ? "#555555" : "#B0B0B0",
      },
    },
    typography: {
      fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: {
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h3: {
        fontWeight: 600,
        letterSpacing: "-0.01em",
      },
      h4: {
        fontWeight: 600,
        letterSpacing: "-0.01em",
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "12px",
            padding: "10px 24px",
            fontWeight: 500,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(108, 99, 255, 0.3)",
            },
          },
          contained: {
            background:
              mode === "light"
                ? "rgba(108, 99, 255, 0.9)"
                : "rgba(108, 99, 255, 0.8)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            "&:hover": {
              background:
                mode === "light"
                  ? "rgba(108, 99, 255, 1)"
                  : "rgba(108, 99, 255, 0.95)",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            ...(mode === "light" ? glassSurfaceLight : glassSurfaceDark),
          },
          elevation1: {
            boxShadow:
              mode === "light"
                ? "0 4px 30px rgba(0, 0, 0, 0.1)"
                : "0 4px 30px rgba(0, 0, 0, 0.5)",
          },
          elevation2: {
            boxShadow:
              mode === "light"
                ? "0 6px 40px rgba(0, 0, 0, 0.12)"
                : "0 6px 40px rgba(0, 0, 0, 0.6)",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            ...(mode === "light" ? glassSurfaceLight : glassSurfaceDark),
            boxShadow: "none",
            borderBottom: `1px solid ${mode === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            ...(mode === "light" ? glassSurfaceLight : glassSurfaceDark),
            borderRight: `1px solid ${mode === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
            boxShadow: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            ...(mode === "light" ? glassSurfaceLight : glassSurfaceDark),
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow:
                mode === "light"
                  ? "0 8px 40px rgba(0, 0, 0, 0.15)"
                  : "0 8px 40px rgba(0, 0, 0, 0.6)",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor:
                mode === "light"
                  ? "rgba(255, 255, 255, 0.3)"
                  : "rgba(30, 30, 30, 0.6)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
              "& input": {
                color: mode === "light" ? "#1E1E1E" : "#FFFFFF",
              },
              "& fieldset": {
                borderColor:
                  mode === "light"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(255, 255, 255, 0.1)",
              },
              "&:hover fieldset": {
                borderColor:
                  mode === "light"
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(255, 255, 255, 0.2)",
              },
              "&.Mui-focused": {
                backgroundColor:
                  mode === "light"
                    ? "rgba(255, 255, 255, 0.4)"
                    : "rgba(30, 30, 30, 0.8)",
                "& fieldset": {
                  borderColor: "#6C63FF",
                  borderWidth: "2px",
                },
              },
            },
            "& .MuiInputLabel-root": {
              color: mode === "light" ? "#555555" : "#B0B0B0",
              "&.Mui-focused": {
                color: "#6C63FF",
              },
            },
            "& .MuiFormHelperText-root": {
              color: mode === "light" ? "#666666" : "#888888",
            },
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            ...(mode === "light" ? glassSurfaceLight : glassSurfaceDark),
            borderRadius: "20px",
            border: `1px solid ${mode === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            margin: "4px 8px",
            color: mode === "light" ? "#1E1E1E" : "#FFFFFF",
            "&:hover": {
              backgroundColor:
                mode === "light"
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            },
          },
        },
      },
    },
  });

