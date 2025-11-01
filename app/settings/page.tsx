"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
  IconButton,
  Grid,
  useTheme,
} from "@mui/material";
import {
  Save as SaveIcon,
  PhotoCamera as PhotoCameraIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Palette as PaletteIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import { useState } from "react";

export default function SettingsPage() {
  const theme = useTheme();
  const [settings, setSettings] = useState({
    // Profile Settings
    displayName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    
    // Security Settings
    twoFactorAuth: true,
    sessionTimeout: "30",
    
    // Appearance Settings
    theme: "light",
    language: "en",
    
    // General Settings
    timezone: "UTC",
    dateFormat: "MM/DD/YYYY",
  });

  const handleSave = () => {
    // TODO: Implement save settings functionality
    console.log("Saving settings:", settings);
  };

  const handleChange = (field: string, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.125rem" },
          mb: { xs: 2, sm: 3 },
        }}
      >
        Settings
      </Typography>

      <Stack spacing={{ xs: 2, sm: 3 }}>
        {/* Profile Settings */}
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: { xs: 2, sm: 3 },
              }}
            >
              <Avatar sx={{ width: 56, height: 56, bgcolor: "primary.main" }}>
                {settings.displayName.charAt(0)}
              </Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem" },
                  }}
                >
                  Profile Information
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  }}
                >
                  Update your profile information
                </Typography>
              </Box>
              <IconButton
                color="primary"
                sx={{
                  border: (theme) =>
                    `1px solid ${theme.palette.mode === "light" ? "rgba(108, 99, 255, 0.3)" : "rgba(108, 99, 255, 0.4)"}`,
                }}
              >
                <PhotoCameraIcon />
              </IconButton>
            </Box>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Display Name"
                  value={settings.displayName}
                  onChange={(e) => handleChange("displayName", e.target.value)}
                  sx={{ mb: { xs: 2, sm: 0 } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={settings.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Notification Settings */}
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: { xs: 2, sm: 3 },
              }}
            >
              <NotificationsIcon color="primary" />
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                }}
              >
                Notification Settings
              </Typography>
            </Box>
            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailNotifications}
                    onChange={(e) =>
                      handleChange("emailNotifications", e.target.checked)
                    }
                  />
                }
                label="Email Notifications"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  },
                }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.pushNotifications}
                    onChange={(e) =>
                      handleChange("pushNotifications", e.target.checked)
                    }
                  />
                }
                label="Push Notifications"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  },
                }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.smsNotifications}
                    onChange={(e) =>
                      handleChange("smsNotifications", e.target.checked)
                    }
                  />
                }
                label="SMS Notifications"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  },
                }}
              />
            </Stack>
          </CardContent>
        </Card>

        {/* Security Settings */}
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: { xs: 2, sm: 3 },
              }}
            >
              <SecurityIcon color="primary" />
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                }}
              >
                Security Settings
              </Typography>
            </Box>
            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.twoFactorAuth}
                    onChange={(e) =>
                      handleChange("twoFactorAuth", e.target.checked)
                    }
                  />
                }
                label="Two-Factor Authentication"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  },
                }}
              />
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  }}
                >
                  Session Timeout
                </InputLabel>
                <Select
                  value={settings.sessionTimeout}
                  label="Session Timeout"
                  onChange={(e) =>
                    handleChange("sessionTimeout", e.target.value)
                  }
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  }}
                >
                  <MenuItem value="15">15 minutes</MenuItem>
                  <MenuItem value="30">30 minutes</MenuItem>
                  <MenuItem value="60">60 minutes</MenuItem>
                  <MenuItem value="120">2 hours</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </CardContent>
        </Card>

        {/* Appearance & General Settings */}
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                transition: "box-shadow 0.2s",
                "&:hover": {
                  boxShadow: theme.shadows[2],
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: { xs: 2, sm: 3 },
                  }}
                >
                  <PaletteIcon color="primary" />
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                    }}
                  >
                    Appearance
                  </Typography>
                </Box>
                <Stack spacing={2}>
                  <FormControl fullWidth>
                    <InputLabel
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                      }}
                    >
                      Theme
                    </InputLabel>
                    <Select
                      value={settings.theme}
                      label="Theme"
                      onChange={(e) => handleChange("theme", e.target.value)}
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                      }}
                    >
                      <MenuItem value="light">Light</MenuItem>
                      <MenuItem value="dark">Dark</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                      }}
                    >
                      Language
                    </InputLabel>
                    <Select
                      value={settings.language}
                      label="Language"
                      onChange={(e) => handleChange("language", e.target.value)}
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                      }}
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="es">Spanish</MenuItem>
                      <MenuItem value="fr">French</MenuItem>
                      <MenuItem value="de">German</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                transition: "box-shadow 0.2s",
                "&:hover": {
                  boxShadow: theme.shadows[2],
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem" },
                    mb: { xs: 2, sm: 3 },
                  }}
                >
                  General Settings
                </Typography>
                <Stack spacing={2}>
                  <FormControl fullWidth>
                    <InputLabel
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                      }}
                    >
                      Timezone
                    </InputLabel>
                    <Select
                      value={settings.timezone}
                      label="Timezone"
                      onChange={(e) => handleChange("timezone", e.target.value)}
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                      }}
                    >
                      <MenuItem value="UTC">UTC</MenuItem>
                      <MenuItem value="EST">EST</MenuItem>
                      <MenuItem value="PST">PST</MenuItem>
                      <MenuItem value="GMT">GMT</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                      }}
                    >
                      Date Format
                    </InputLabel>
                    <Select
                      value={settings.dateFormat}
                      label="Date Format"
                      onChange={(e) => handleChange("dateFormat", e.target.value)}
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                      }}
                    >
                      <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
                      <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
                      <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Save Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            pt: { xs: 2, sm: 3 },
          }}
        >
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSave}
            sx={{
              borderRadius: "12px",
              px: { xs: 3, sm: 4 },
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              minHeight: { xs: 40, sm: 44 },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

