'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress } from '@mui/material';
import { authUtils } from '@/lib/auth';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated and verified
    const user = authUtils.getUser();
    const token = authUtils.getToken();
    const isVerified = authUtils.getVerified();
    
    if (user && token && isVerified) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [router]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
