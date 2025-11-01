"use client";
import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Box,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { authUtils } from "@/lib/auth";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <DashboardOutlinedIcon />, path: "/dashboard" },
  { text: "Role Management", icon: <AdminPanelSettingsOutlinedIcon />, path: "/roles" },
  { text: "Dynamic Form Builder", icon: <DynamicFormOutlinedIcon />, path: "/forms" },
  { text: "Settings", icon: <SettingsOutlinedIcon />, path: "/settings" },
];

export default function Sidebar({
  mobileOpen,
  onDrawerToggle,
}: {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    authUtils.clearAuth();
    router.push("/login");
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: (theme) =>
            `1px solid ${theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
        }}
      >
        <Box
          sx={{
            fontWeight: 700,
            fontSize: { xs: 18, sm: 20 },
            background: "linear-gradient(135deg, #6C63FF 0%, #03DAC6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Admin Panel
        </Box>
      </Toolbar>
      <Divider
        sx={{
          borderColor: (theme) =>
            theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.1)",
        }}
      />
      <List sx={{ py: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ px: 1 }}>
            <Link
              href={item.path}
              style={{ width: "100%", textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton
                selected={pathname === item.path}
                sx={{
                  borderRadius: "12px",
                  my: 0.5,
                  mx: 1,
                  backdropFilter: pathname === item.path ? "blur(8px)" : "none",
                  WebkitBackdropFilter:
                    pathname === item.path ? "blur(8px)" : "none",
                  backgroundColor: pathname === item.path
                    ? (theme) =>
                        theme.palette.mode === "light"
                          ? "rgba(108, 99, 255, 0.2)"
                          : "rgba(108, 99, 255, 0.2)"
                    : "transparent",
                  border: pathname === item.path
                    ? "1px solid rgba(108, 99, 255, 0.3)"
                    : "1px solid transparent",
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
                <ListItemIcon
                  sx={{
                    color: pathname === item.path ? "primary.main" : "text.secondary",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: pathname === item.path ? 600 : 400,
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{
          borderColor: (theme) =>
            theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.1)",
        }}
      />
      <List sx={{ py: 1 }}>
        <ListItem disablePadding sx={{ px: 1 }}>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              borderRadius: "12px",
              my: 0.5,
              mx: 1,
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? "rgba(244, 67, 54, 0.1)"
                    : "rgba(244, 67, 54, 0.15)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: "error.main" }}>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                color: "error.main",
                fontSize: { xs: "0.875rem", sm: "0.9375rem" },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="sidebar navigation"
    >
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

