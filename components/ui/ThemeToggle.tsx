"use client";
import * as React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { toggleTheme } from "@/redux/slices/uiSlice";

export default function ThemeToggle() {
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Tooltip title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>
      <IconButton
        onClick={handleToggle}
        sx={{
          color: "text.primary",
          borderRadius: "10px",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            transform: "scale(1.1)",
          },
        }}
      >
        {theme === "light" ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Tooltip>
  );
}

