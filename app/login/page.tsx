'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  CircularProgress,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { enqueueSnackbar } from 'notistack';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCredentials, setVerified } from '@/redux/slices/authSlice';
import { authUtils } from '@/lib/auth';
import { loginSchema } from '@/utils/validators';
import type { LoginFormData } from '@/utils/validators';
import OtpModal from '@/components/auth/OtpModal';

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, isVerified } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [pendingUser, setPendingUser] = useState<{
    user: { id: string; email: string; name: string };
    token: string;
  } | null>(null);

  // Redirect to dashboard if already authenticated and verified
  useEffect(() => {
    const userFromStorage = authUtils.getUser();
    const tokenFromStorage = authUtils.getToken();
    const verifiedFromStorage = authUtils.getVerified();
    
    const isAuth = isAuthenticated || (userFromStorage !== null && tokenFromStorage !== null);
    const isVerifiedCheck = isVerified || verifiedFromStorage;
    
    if (isAuth && isVerifiedCheck) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, isVerified, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Dummy authentication - accept any valid email/password combo
      const user = {
        id: '1',
        email: data.email,
        name: data.email.split('@')[0],
      };
      const token = 'dummy_token_' + Date.now();
      
      setPendingUser({ user, token });
      setShowOtpModal(true);
    }, 1000);
  };

  const handleOtpVerify = () => {
    if (pendingUser) {
      // Store in localStorage
      authUtils.storeUser(pendingUser.user, pendingUser.token);
      authUtils.setVerified(true);
      
      // Dispatch to Redux
      dispatch(setCredentials(pendingUser));
      dispatch(setVerified(true));
      
      enqueueSnackbar('Login successful!', { variant: 'success' });
      router.push('/dashboard');
    }
  };

  const handleOtpClose = () => {
    setShowOtpModal(false);
    setPendingUser(null);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, #E0EAFB 0%, #CDE7F0 100%)"
              : "#000000",
          p: { xs: 2, sm: 3 },
          position: "relative",
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: 450, md: 500 },
            mx: { xs: 0, sm: 2 },
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: (theme) =>
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.25)"
                : "rgba(30, 30, 30, 0.4)",
            border: (theme) =>
              `1px solid ${theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"}`,
            boxShadow: (theme) =>
              theme.palette.mode === "light"
                ? "0 8px 32px rgba(0, 0, 0, 0.15)"
                : "0 8px 32px rgba(0, 0, 0, 0.6)",
          }}
        >
          <CardContent
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                mb: { xs: 2, sm: 3 },
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.75rem", sm: "2rem", md: "2.125rem" },
                }}
              >
                Admin Panel
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: { xs: 0.5, sm: 1 },
                  fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                }}
              >
                Sign in to your account
              </Typography>
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                autoComplete="email"
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                autoComplete="current-password"
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isLoading}
                sx={{
                  mt: { xs: 2, sm: 3 },
                  mb: { xs: 1.5, sm: 2 },
                  py: { xs: 1.25, sm: 1.5 },
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  minHeight: { xs: 40, sm: 44 },
                }}
              >
                {isLoading ? (
                  <CircularProgress size={24} sx={{ color: "inherit" }} />
                ) : (
                  "Sign In"
                )}
              </Button>

              <Box
                sx={{
                  textAlign: "center",
                  mt: { xs: 1.5, sm: 2 },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                  }}
                >
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    underline="hover"
                    sx={{
                      color: "primary.main",
                      fontWeight: 500,
                    }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>

      <OtpModal
        open={showOtpModal}
        onVerify={handleOtpVerify}
        onClose={handleOtpClose}
      />
    </>
  );
}

