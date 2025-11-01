'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { otpSchema } from '@/utils/validators';
import type { OtpFormData } from '@/utils/validators';

interface OtpModalProps {
  open: boolean;
  onVerify: () => void;
  onClose: () => void;
}

export default function OtpModal({ open, onVerify, onClose }: OtpModalProps) {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OtpFormData>({
    resolver: yupResolver(otpSchema),
  });

  const onSubmit = (data: OtpFormData) => {
    // Check OTP (static value: 123456)
    if (data.otp === '123456') {
      setError('');
      onVerify();
      reset();
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleClose = () => {
    reset();
    setError('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          m: { xs: 2, sm: 3 },
          width: { xs: "100%", sm: "auto" },
          maxWidth: { xs: "100%", sm: 500 },
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            fontWeight: 600,
            pb: { xs: 1, sm: 2 },
          }}
        >
          Two-Factor Authentication
        </DialogTitle>
        <DialogContent
          sx={{
            px: { xs: 2, sm: 3 },
            pb: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: { xs: 2, sm: 2.5 },
              fontSize: { xs: "0.875rem", sm: "0.9375rem" },
            }}
          >
            Enter the 6-digit code sent to your email
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="OTP Code"
            type="text"
            fullWidth
            variant="outlined"
            {...register("otp")}
            error={!!errors.otp || !!error}
            helperText={errors.otp?.message || error}
            inputProps={{ maxLength: 6, pattern: "[0-9]{6}" }}
            sx={{
              "& .MuiInputBase-root": {
                fontSize: { xs: "0.875rem", sm: "1rem" },
              },
              mb: { xs: 1.5, sm: 2 },
            }}
          />
          <Box sx={{ mt: { xs: 1.5, sm: 2 } }}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            >
              For demo purposes, use: <strong>123456</strong>
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            px: { xs: 2, sm: 3 },
            pb: { xs: 2, sm: 3 },
            gap: { xs: 1, sm: 2 },
            flexDirection: { xs: "column-reverse", sm: "row" },
            "& > button": {
              width: { xs: "100%", sm: "auto" },
              minHeight: { xs: 40, sm: 36 },
              fontSize: { xs: "0.875rem", sm: "0.9375rem" },
            },
          }}
        >
          <Button onClick={handleClose} variant="outlined" fullWidth={false}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" fullWidth={false}>
            Verify
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

