'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { store } from '@/redux/store';
import { getTheme } from '@/styles/theme';
import { useAppSelector } from '@/redux/hooks';
import { useAppDispatch } from '@/redux/hooks';
import { setCredentials, setVerified } from '@/redux/slices/authSlice';
import { authUtils } from '@/lib/auth';

function MuiProviders({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Hydrate Redux state from localStorage on mount
    const user = authUtils.getUser();
    const token = authUtils.getToken();
    const isVerified = authUtils.getVerified();

    if (user && token) {
      dispatch(setCredentials({ user, token }));
      dispatch(setVerified(isVerified));
    }
  }, [dispatch]);

  useEffect(() => {
    // Update body class when theme changes
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark-theme', theme === 'dark');
    }
  }, [theme]);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <MuiProviders>{children}</MuiProviders>
    </Provider>
  );
}
