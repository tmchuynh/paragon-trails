"use client";

import Loading from "@/components/Loading";
import { storage } from "@/lib/utils/storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  loginTimestamp?: number; // Add timestamp for session management
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshAuth: () => void; // Add manual refresh function
}

const AuthContext = createContext<AuthContextType | null>(null);

// Mock user data for simulation
const mockUser: User = {
  id: "1",
  email: "user@example.com",
  firstName: "Jane",
  lastName: "Doe",
  avatar:
    "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Start with true for initial load
  const [isInitialized, setIsInitialized] = useState(false);

  // Load user from localStorage on app initialization
  useEffect(() => {
    const loadStoredUser = () => {
      const storedUser = storage.getItem<User>("auth_user");
      if (storedUser) {
        // Validate that the stored user has required properties
        if (
          storedUser.id &&
          storedUser.email &&
          storedUser.firstName &&
          storedUser.lastName
        ) {
          setUser(storedUser);
        } else {
          // Remove invalid user data
          storage.removeItem("auth_user");
        }
      }
      setIsLoading(false);
      setIsInitialized(true);
    };

    loadStoredUser();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simple validation - check if email and password are provided
      if (email && password) {
        // Set the mock user with the actual email provided
        const loggedInUser = {
          ...mockUser,
          email: email,
          loginTimestamp: Date.now(),
        };

        setUser(loggedInUser);

        // Store user in localStorage for persistence
        storage.setItem("auth_user", loggedInUser);

        setIsLoading(false);
        return true;
      }

      setIsLoading(false);
      return false;
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    // Remove user from localStorage
    storage.removeItem("auth_user");
  };

  const refreshAuth = () => {
    const storedUser = storage.getItem<User>("auth_user");
    if (storedUser) {
      // Check if session is still valid (optional: add expiration logic here)
      const isValidSession = true; // You can add expiration logic here if needed

      if (
        isValidSession &&
        storedUser.id &&
        storedUser.email &&
        storedUser.firstName &&
        storedUser.lastName
      ) {
        setUser(storedUser);
      } else {
        // Session expired or invalid
        storage.removeItem("auth_user");
        setUser(null);
      }
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    refreshAuth,
  };

  // Show loading screen during initial authentication check
  if (!isInitialized) {
    return <Loading text="Initializing..." fullScreen />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
