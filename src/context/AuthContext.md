# AuthContext Documentation

## Overview

The `AuthContext` provides authentication functionality for the Paragon Trails application, managing user login, logout, and session persistence using React Context API.

## Features

- User authentication with API fallback
- Session persistence using localStorage
- Demo mode support
- Loading states management
- Automatic session validation
- Manual authentication refresh

## Types

### User Interface
```typescript
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  loginTimestamp?: number;
}
```

### AuthContextType Interface
```typescript
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshAuth: () => void;
}
```

## Components

### AuthProvider

The main context provider component that wraps the application.

**Props:**
- `children: ReactNode` - Child components to wrap

**State:**
- `user` - Current authenticated user or null
- `isLoading` - Loading state for authentication operations
- `isInitialized` - Whether the auth context has been initialized

## Methods

### login(email: string, password: string): Promise<boolean>

Authenticates a user with the provided credentials.

**Parameters:**
- `email` - User's email address
- `password` - User's password

**Returns:**
- `Promise<boolean>` - True if login successful, false otherwise

**Behavior:**
1. Attempts API authentication via `UserService.authenticateUser()`
2. Falls back to demo mode if API fails
3. Creates user avatar using UI Avatars service
4. Stores user data in localStorage
5. Sets login timestamp for session management

### logout(): void

Logs out the current user and clears session data.

**Behavior:**
- Sets user state to null
- Removes user data from localStorage

### refreshAuth(): void

Manually refreshes authentication state from localStorage.

**Behavior:**
- Validates stored user data
- Removes invalid/expired sessions
- Updates user state if valid

## Usage

### Setup

Wrap your application with the AuthProvider:

```tsx
import { AuthProvider } from '@/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <YourAppContent />
    </AuthProvider>
  );
}
```

### Using the Hook

```tsx
import { useAuth } from '@/context/AuthContext';

function LoginComponent() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  const handleLogin = async () => {
    const success = await login('user@example.com', 'password');
    if (success) {
      console.log('Login successful');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.firstName}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
```

## Dependencies

- `@/components/Loading` - Loading component for initialization
- `@/lib/api/services` - UserService for API authentication
- `@/lib/utils/storage` - Storage utility for localStorage operations
- `react` - React hooks and components

## Error Handling

- Invalid stored user data is automatically removed
- API errors fall back to demo mode
- Loading states prevent UI inconsistencies during auth operations

## Session Management

- User sessions are persisted in localStorage
- Login timestamp is stored for potential expiration logic
- Manual refresh available via `refreshAuth()`
- Automatic validation on app initialization

## Demo Mode

When API authentication fails, the context falls back to demo mode:
- Uses provided email with demo user data
- Attempts to fetch real user data from API for demo purposes
- Creates static demo user if all API calls fail
- Maintains same interface as authenticated mode

## Security Considerations

- Passwords are only passed to API, never stored
- User data validation before storage
- Session data can be easily extended with expiration logic
- Avatar URLs are generated client-side to avoid storing sensitive data
