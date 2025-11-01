"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  PersonAdd as PersonAddIcon,
} from "@mui/icons-material";

// Mock data for roles
const mockRoles = [
  {
    id: "1",
    name: "Administrator",
    description: "Full access to all system features",
    usersCount: 5,
    permissions: ["all"],
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Manager",
    description: "Can manage users and view reports",
    usersCount: 12,
    permissions: ["users", "reports", "view"],
    createdAt: "2024-01-20",
  },
  {
    id: "3",
    name: "Editor",
    description: "Can create and edit content",
    usersCount: 25,
    permissions: ["create", "edit", "view"],
    createdAt: "2024-02-01",
  },
  {
    id: "4",
    name: "Viewer",
    description: "Read-only access",
    usersCount: 45,
    permissions: ["view"],
    createdAt: "2024-02-10",
  },
];

export default function RoleManagementPage() {
  const theme = useTheme();

  const handleAddRole = () => {
    // TODO: Implement add role functionality
    console.log("Add new role");
  };

  const handleEditRole = (roleId: string) => {
    // TODO: Implement edit role functionality
    console.log("Edit role:", roleId);
  };

  const handleDeleteRole = (roleId: string) => {
    // TODO: Implement delete role functionality
    console.log("Delete role:", roleId);
  };

  const handleAssignUser = (roleId: string) => {
    // TODO: Implement assign user functionality
    console.log("Assign user to role:", roleId);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: { xs: 2, sm: 3 },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.125rem" },
          }}
        >
          Role Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddRole}
          sx={{
            borderRadius: "12px",
            px: { xs: 2, sm: 3 },
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
            minHeight: { xs: 40, sm: 44 },
          }}
        >
          Add New Role
        </Button>
      </Box>

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
              Total Roles
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mt: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.125rem" },
              }}
            >
              {mockRoles.length}
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
              {mockRoles.reduce((sum, role) => sum + role.usersCount, 0)}
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Roles Table */}
      <Card
        variant="outlined"
        sx={{
          transition: "box-shadow 0.2s",
          "&:hover": {
            boxShadow: theme.shadows[2],
          },
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 }, "&:last-child": { pb: { xs: 2, sm: 3 } } }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
              mb: { xs: 1.5, sm: 2 },
            }}
          >
            Roles List
          </Typography>
          <TableContainer
            component={Paper}
            variant="outlined"
            sx={{
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <Table
              sx={{
                minWidth: 650,
                "& .MuiTableCell-root": {
                  borderColor: (theme) =>
                    theme.palette.mode === "light"
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.1)",
                  fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  py: { xs: 1, sm: 1.5 },
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Role Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: 600 }} align="center">
                    Users
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Permissions</TableCell>
                  <TableCell sx={{ fontWeight: 600 }} align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockRoles.map((role) => (
                  <TableRow
                    key={role.id}
                    sx={{
                      "&:hover": {
                        backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                            ? "rgba(255, 255, 255, 0.05)"
                            : "rgba(255, 255, 255, 0.03)",
                      },
                    }}
                  >
                    <TableCell sx={{ fontWeight: 500 }}>{role.name}</TableCell>
                    <TableCell
                      sx={{
                        color: "text.secondary",
                        maxWidth: { xs: 150, sm: 300 },
                      }}
                    >
                      {role.description}
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={role.usersCount}
                        size="small"
                        sx={{
                          backgroundColor: "primary.main",
                          color: "white",
                          fontWeight: 500,
                          fontSize: { xs: "0.75rem", sm: "0.8125rem" },
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={0.5} flexWrap="wrap" gap={0.5}>
                        {role.permissions.length > 3 ? (
                          <>
                            {role.permissions.slice(0, 3).map((perm, idx) => (
                              <Chip
                                key={idx}
                                label={perm}
                                size="small"
                                sx={{
                                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                                  height: { xs: 20, sm: 24 },
                                }}
                              />
                            ))}
                            <Chip
                              label={`+${role.permissions.length - 3}`}
                              size="small"
                              sx={{
                                fontSize: { xs: "0.7rem", sm: "0.75rem" },
                                height: { xs: 20, sm: 24 },
                              }}
                            />
                          </>
                        ) : (
                          role.permissions.map((perm, idx) => (
                            <Chip
                              key={idx}
                              label={perm}
                              size="small"
                              sx={{
                                fontSize: { xs: "0.7rem", sm: "0.75rem" },
                                height: { xs: 20, sm: 24 },
                              }}
                            />
                          ))
                        )}
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <Stack
                        direction="row"
                        spacing={0.5}
                        justifyContent="center"
                        sx={{ flexWrap: "wrap", gap: { xs: 0.5, sm: 1 } }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => handleAssignUser(role.id)}
                          sx={{
                            color: "primary.main",
                            "&:hover": {
                              backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                  ? "rgba(108, 99, 255, 0.1)"
                                  : "rgba(108, 99, 255, 0.15)",
                            },
                          }}
                        >
                          <PersonAddIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleEditRole(role.id)}
                          sx={{
                            color: "info.main",
                            "&:hover": {
                              backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                  ? "rgba(33, 150, 243, 0.1)"
                                  : "rgba(33, 150, 243, 0.15)",
                            },
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteRole(role.id)}
                          sx={{
                            color: "error.main",
                            "&:hover": {
                              backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                  ? "rgba(244, 67, 54, 0.1)"
                                  : "rgba(244, 67, 54, 0.15)",
                            },
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}

