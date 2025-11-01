"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { authUtils } from "@/lib/auth";
import { Box, CircularProgress } from "@mui/material";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated, isVerified } = useAppSelector((state) => state.auth);
  const [mounted, setMounted] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Mark as mounted to prevent hydration mismatch
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Check if user is authenticated and verified in Redux or localStorage
    const userFromStorage = authUtils.getUser();
    const tokenFromStorage = authUtils.getToken();
    const verifiedFromStorage = authUtils.getVerified();
    
    const isAuth = isAuthenticated || (userFromStorage !== null && tokenFromStorage !== null);
    const isVerifiedCheck = isVerified || verifiedFromStorage;
    
    setIsChecking(false);
    
    // Redirect to login if not authenticated or not verified
    if (!isAuth || !isVerifiedCheck) {
      router.push("/login");
      return;
    }
  }, [mounted, isAuthenticated, isVerified, router]);

  // Show loading state during initial mount and check to prevent hydration mismatch
  if (!mounted || isChecking) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Final check before rendering
  const userFromStorage = authUtils.getUser();
  const tokenFromStorage = authUtils.getToken();
  const verifiedFromStorage = authUtils.getVerified();
  const isAuth = isAuthenticated || (userFromStorage !== null && tokenFromStorage !== null);
  const isVerifiedCheck = isVerified || verifiedFromStorage;

  // Show nothing if not authenticated or not verified (will redirect via useEffect)
  if (!isAuth || !isVerifiedCheck) {
    return null;
  }

  return <>{children}</>;
}

