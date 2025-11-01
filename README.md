# Admin Panel

A modern admin panel built with **Next.js 16**, **Material UI v7**, and **Redux Toolkit** featuring authentication, protected routes, and a clean dashboard interface.

## 🚀 Features

- **Authentication System**
  - Login/Signup with email and password validation
  - Two-Factor Authentication (OTP) - Demo OTP: `123456`
  - Session management with localStorage persistence
  - Protected routes

- **UI Components**
  - Material UI v7 with theming support (light/dark mode)
  - Responsive design
  - Toast notifications with Notistack
  - Form validation with React Hook Form + Yup

- **State Management**
  - Redux Toolkit for global state
  - Auth state persistence
  - UI theme management

- **Dashboard**
  - Welcome card with user information
  - Statistics cards
  - Clean, modern interface

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** Material UI v7
- **State Management:** Redux Toolkit
- **Form Handling:** React Hook Form + Yup
- **Notifications:** Notistack
- **HTTP Client:** Axios
- **Styling:** Emotion (MUI styling solution)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
/app
  /login          # Login page with OTP modal
  /signup         # Signup page
  /dashboard      # Protected dashboard
  layout.tsx      # Root layout with providers
  page.tsx        # Home page (redirects to login)

/components
  /auth           # Auth-related components
    OtpModal.tsx
    ProtectedRoute.tsx
  /common         # Common components
    Providers.tsx # Redux + MUI providers
  /ui             # UI components

/lib
  auth.ts         # Authentication utilities
  axiosInstance.ts # Axios configuration

/redux
  /slices
    authSlice.ts  # Authentication state
    uiSlice.ts    # UI state (theme, etc.)
  hooks.ts        # Redux hooks
  store.ts        # Redux store

/styles
  theme.ts        # MUI theme configuration

/utils
  validators.ts   # Form validation schemas
```

## 🔐 Authentication

The app uses a dummy authentication system:

- **Any valid email/password combination is accepted**
- OTP is hardcoded: `123456`
- User data is stored in localStorage
- Sessions persist until manual logout

### Demo Credentials

- **Email:** Any valid email (e.g., `admin@example.com`)
- **Password:** Any 6+ character password (e.g., `password123`)
- **OTP:** `123456`

## 🎨 Theming

The app supports light and dark themes. Theme preference is stored in Redux and can be toggled globally.

## 🔒 Protected Routes

Routes are protected using the `ProtectedRoute` component:
- Unauthenticated users are redirected to `/login`
- Authenticated users have full access

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚧 Future Enhancements

- [ ] Real backend API integration
- [ ] User management features
- [ ] Advanced dashboard analytics
- [ ] Settings panel
- [ ] Profile management
- [ ] Password reset functionality

## 📄 License

This project is private and proprietary.
