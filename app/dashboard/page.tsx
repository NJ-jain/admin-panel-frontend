"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  useTheme,
} from "@mui/material";
import { useAppSelector } from "@/redux/hooks";

export default function DashboardPage() {
  const { user } = useAppSelector((state) => state.auth);
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.125rem" },
          mb: { xs: 2, sm: 3 },
        }}
      >
        Dashboard
      </Typography>

      {/* Welcome Card */}
      <Card
        variant="outlined"
        sx={{
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, rgba(108, 99, 255, 0.25) 0%, rgba(3, 218, 198, 0.25) 100%)"
              : "linear-gradient(135deg, rgba(108, 99, 255, 0.15) 0%, rgba(3, 218, 198, 0.15) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: (theme) =>
            `1px solid ${theme.palette.mode === "light" ? "rgba(108, 99, 255, 0.3)" : "rgba(108, 99, 255, 0.3)"}`,
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 8px 32px rgba(108, 99, 255, 0.2)"
              : "0 8px 32px rgba(108, 99, 255, 0.3)",
          color: "text.primary",
          mb: { xs: 3, sm: 4 },
          mt: { xs: 2, sm: 3 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: (theme) =>
              theme.palette.mode === "light"
                ? "linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(3, 218, 198, 0.1) 100%)"
                : "linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(3, 218, 198, 0.1) 100%)",
            pointerEvents: "none",
          },
        }}
      >
        <CardContent
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: 2, sm: 3 },
            }}
          >
            <Avatar
              sx={{
                width: { xs: 60, sm: 70, md: 80 },
                height: { xs: 60, sm: 70, md: 80 },
                bgcolor: (theme) =>
                  theme.palette.mode === "light"
                    ? "rgba(108, 99, 255, 0.2)"
                    : "rgba(108, 99, 255, 0.3)",
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                border: (theme) =>
                  `2px solid ${theme.palette.mode === "light" ? "rgba(108, 99, 255, 0.4)" : "rgba(108, 99, 255, 0.5)"}`,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </Avatar>
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                  color: "text.primary",
                }}
              >
                Welcome back, {user?.name || "User"}!
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  color: "text.secondary",
                }}
              >
                {user?.email}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 3 }}
        sx={{ mb: { xs: 2, sm: 3 } }}
      >
        <Card
          variant="outlined"
          sx={{
            flex: 1,
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: theme.shadows[4],
            },
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Total Users
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mt: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.125rem" },
              }}
            >
              1,234
            </Typography>
            <Typography
              variant="caption"
              color="success.main"
              sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
            >
              +12% this month
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            flex: 1,
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: theme.shadows[4],
            },
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Active Sessions
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mt: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.125rem" },
              }}
            >
              567
            </Typography>
            <Typography
              variant="caption"
              color="info.main"
              sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
            >
              +8% this month
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            flex: 1,
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: theme.shadows[4],
            },
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Revenue
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mt: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.125rem" },
              }}
            >
              $45K
            </Typography>
            <Typography
              variant="caption"
              color="warning.main"
              sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
            >
              +23% this month
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Additional Info */}
      <Card
        variant="outlined"
        sx={{
          transition: "box-shadow 0.2s",
          "&:hover": {
            boxShadow: theme.shadows[2],
          },
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
              mb: { xs: 1, sm: 2 },
            }}
          >
            Quick Actions
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.875rem", sm: "0.9375rem" },
              lineHeight: 1.6,
            }}
          >
            This is your admin dashboard. You can manage users, view analytics,
            and configure settings from here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

