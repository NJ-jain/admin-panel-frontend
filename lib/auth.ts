import { User } from '@/redux/slices/authSlice';

const USER_STORAGE_KEY = 'admin_user';
const TOKEN_STORAGE_KEY = 'admin_token';
const VERIFIED_STORAGE_KEY = 'admin_verified';

export const authUtils = {
  // Store user data in localStorage
  storeUser: (user: User, token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
    }
  },

  // Get user from localStorage
  getUser: (): User | null => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem(USER_STORAGE_KEY);
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  },

  // Get token from localStorage
  getToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(TOKEN_STORAGE_KEY);
    }
    return null;
  },

  // Set verified status
  setVerified: (verified: boolean) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(VERIFIED_STORAGE_KEY, String(verified));
    }
  },

  // Get verified status
  getVerified: (): boolean => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(VERIFIED_STORAGE_KEY) === 'true';
    }
    return false;
  },

  // Clear all auth data
  clearAuth: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(USER_STORAGE_KEY);
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(VERIFIED_STORAGE_KEY);
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return authUtils.getUser() !== null && authUtils.getToken() !== null;
  },
};

