"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Stack,
  IconButton,
  Paper,
  Divider,
  Switch,
  FormControlLabel,
  Chip,
  useTheme,
} from "@mui/material";
import {
  Add as AddIcon,
  Save as SaveIcon,
  Delete as DeleteIcon,
  DragIndicator as DragIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { useState } from "react";

// Mock form templates
const mockFormTemplates = [
  {
    id: "1",
    name: "Contact Form",
    fields: 5,
    submissions: 123,
    createdAt: "2024-01-15",
    status: "active",
  },
  {
    id: "2",
    name: "Feedback Form",
    fields: 8,
    submissions: 456,
    createdAt: "2024-01-20",
    status: "active",
  },
  {
    id: "3",
    name: "Registration Form",
    fields: 12,
    submissions: 789,
    createdAt: "2024-02-01",
    status: "draft",
  },
];

// Available field types
const fieldTypes = [
  { label: "Text Input", value: "text" },
  { label: "Email", value: "email" },
  { label: "Number", value: "number" },
  { label: "Textarea", value: "textarea" },
  { label: "Select", value: "select" },
  { label: "Checkbox", value: "checkbox" },
  { label: "Radio", value: "radio" },
  { label: "Date", value: "date" },
];

export default function DynamicFormBuilderPage() {
  const theme = useTheme();
  const [showBuilder, setShowBuilder] = useState(false);
  const [formName, setFormName] = useState("");
  const [formFields, setFormFields] = useState<Array<{ id: string; type: string; label: string; required: boolean }>>([]);

  const handleCreateForm = () => {
    setShowBuilder(true);
    setFormName("");
    setFormFields([]);
  };

  const handleAddField = () => {
    const newField = {
      id: Date.now().toString(),
      type: "text",
      label: `Field ${formFields.length + 1}`,
      required: false,
    };
    setFormFields([...formFields, newField]);
  };

  const handleRemoveField = (fieldId: string) => {
    setFormFields(formFields.filter((field) => field.id !== fieldId));
  };

  const handleSaveForm = () => {
    // TODO: Implement save form functionality
    console.log("Saving form:", { name: formName, fields: formFields });
    setShowBuilder(false);
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
          Dynamic Form Builder
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreateForm}
          disabled={showBuilder}
          sx={{
            borderRadius: "12px",
            px: { xs: 2, sm: 3 },
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
            minHeight: { xs: 40, sm: 44 },
          }}
        >
          Create New Form
        </Button>
      </Box>

      {showBuilder ? (
        <Card
          variant="outlined"
          sx={{
            mb: { xs: 2, sm: 3 },
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
                justifyContent: "space-between",
                alignItems: "center",
                mb: { xs: 2, sm: 3 },
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 0 },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Form Builder
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  onClick={() => setShowBuilder(false)}
                  sx={{
                    borderRadius: "12px",
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  startIcon={<SaveIcon />}
                  onClick={handleSaveForm}
                  disabled={!formName || formFields.length === 0}
                  sx={{
                    borderRadius: "12px",
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  }}
                >
                  Save Form
                </Button>
              </Stack>
            </Box>

            <TextField
              fullWidth
              label="Form Name"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              sx={{ mb: { xs: 2, sm: 3 } }}
            />

            <Divider sx={{ my: { xs: 2, sm: 3 } }} />

            <Box sx={{ mb: { xs: 2, sm: 3 } }}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: "0.9375rem", sm: "1rem" },
                }}
              >
                Form Fields
              </Typography>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleAddField}
                sx={{
                  borderRadius: "12px",
                  mb: { xs: 2, sm: 2.5 },
                  fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                }}
              >
                Add Field
              </Button>

              <Stack spacing={2}>
                {formFields.map((field, index) => (
                  <Paper
                    key={field.id}
                    variant="outlined"
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <DragIcon sx={{ color: "text.secondary", cursor: "move" }} />
                    <TextField
                      label="Field Label"
                      value={field.label}
                      onChange={(e) => {
                        const updated = [...formFields];
                        updated[index].label = e.target.value;
                        setFormFields(updated);
                      }}
                      size="small"
                      sx={{ flex: 1 }}
                    />
                    <TextField
                      select
                      label="Field Type"
                      value={field.type}
                      onChange={(e) => {
                        const updated = [...formFields];
                        updated[index].type = e.target.value;
                        setFormFields(updated);
                      }}
                      SelectProps={{ native: true }}
                      size="small"
                      sx={{ minWidth: 120 }}
                    >
                      {fieldTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </TextField>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={field.required}
                          onChange={(e) => {
                            const updated = [...formFields];
                            updated[index].required = e.target.checked;
                            setFormFields(updated);
                          }}
                          size="small"
                        />
                      }
                      label="Required"
                      sx={{ mr: 0 }}
                    />
                    <IconButton
                      size="small"
                      onClick={() => handleRemoveField(field.id)}
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
                  </Paper>
                ))}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      ) : null}

      {/* Form Templates */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: { xs: 2, sm: 3 },
        }}
      >
        {mockFormTemplates.map((form) => (
          <Box key={form.id}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    mb: { xs: 1.5, sm: 2 },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                    }}
                  >
                    {form.name}
                  </Typography>
                  <Chip
                    label={form.status}
                    size="small"
                    color={form.status === "active" ? "success" : "default"}
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                      height: { xs: 20, sm: 24 },
                    }}
                  />
                </Box>
                <Stack spacing={1} sx={{ mb: { xs: 2, sm: 2.5 } }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    }}
                  >
                    Fields: {form.fields}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    }}
                  >
                    Submissions: {form.submissions}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    }}
                  >
                    Created: {form.createdAt}
                  </Typography>
                </Stack>
              </CardContent>
              <Divider />
              <Box
                sx={{
                  p: { xs: 1.5, sm: 2 },
                  display: "flex",
                  gap: 1,
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  size="small"
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
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
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
                  <SaveIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
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
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

