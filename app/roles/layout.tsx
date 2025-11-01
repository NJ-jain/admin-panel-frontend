"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppHeader from "@/components/layout/AppHeader";
import Sidebar from "@/components/layout/Sidebar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function RolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ProtectedRoute>
      <Box sx={{ display: "flex" }}>
        <AppHeader onMenuClick={handleDrawerToggle} />
        <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3, md: 4 },
            width: { xs: "100%", sm: `calc(100% - 240px)` },
            bgcolor: "transparent",
            background: (theme) =>
              theme.palette.mode === "light"
                ? "linear-gradient(135deg, rgba(224, 234, 251, 0.3) 0%, rgba(205, 231, 240, 0.3) 100%)"
                : "#000000",
            minHeight: "100vh",
            transition: (theme) =>
              theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          }}
        >
          <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }} />
          {children}
        </Box>
      </Box>
    </ProtectedRoute>
  );
}

