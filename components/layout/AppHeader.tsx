"use client";
import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { authUtils } from "@/lib/auth";

interface Props {
  onMenuClick: () => void;
}

export default function AppHeader({ onMenuClick }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    dispatch(logout());
    authUtils.clearAuth();
    router.push("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { xs: "100%", sm: `calc(100% - 240px)` },
        ml: { sm: "240px" },
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: "none",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: (theme) =>
          `1px solid ${theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Mobile menu button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{
            mr: 2,
            display: { sm: "none" },
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            background: "linear-gradient(135deg, #6C63FF 0%, #03DAC6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: { xs: "1.125rem", sm: "1.25rem" },
          }}
        >
          Admin Panel
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ThemeToggle />
          <IconButton
            onClick={handleMenu}
            sx={{
              p: 0,
              borderRadius: "50%",
              border: "2px solid rgba(108, 99, 255, 0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0 4px 12px rgba(108, 99, 255, 0.3)",
              },
            }}
          >
            <Avatar
              alt="User"
              src="/avatar.png"
              sx={{
                width: { xs: 32, sm: 36 },
                height: { xs: 32, sm: 36 },
              }}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: "16px",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: (theme) =>
                  `1px solid ${theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                borderRadius: "12px",
                mx: 1,
                my: 0.5,
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? "rgba(108, 99, 255, 0.1)"
                      : "rgba(108, 99, 255, 0.15)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                },
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout();
                handleClose();
              }}
              sx={{
                borderRadius: "12px",
                mx: 1,
                my: 0.5,
                color: "error.main",
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? "rgba(244, 67, 54, 0.1)"
                      : "rgba(244, 67, 54, 0.15)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                },
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

