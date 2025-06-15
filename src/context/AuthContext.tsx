"use client";

import Loading from "@/components/Loading";
import { UserService } from "@/lib/api/services";
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
      // Try to authenticate with the API first
      try {
        const apiUser = await UserService.authenticateUser(email, password);
        if (apiUser) {
          const loggedInUser = {
            id: apiUser.id,
            email: apiUser.email,
            firstName: apiUser.firstName,
            lastName: apiUser.lastName,
            avatar: `https://ui-avatars.com/api/?name=${apiUser.firstName}+${apiUser.lastName}&background=random`,
            loginTimestamp: Date.now(),
          };

          setUser(loggedInUser);
          storage.setItem("auth_user", loggedInUser);
          setIsLoading(false);
          return true;
        }
      } catch (apiError) {
        console.log("API authentication failed, falling back to demo mode");
      }

      // Fallback to simple validation for demo purposes
      if (email && password) {
        // Try to get a user from the API for demo
        try {
          const demoUsers = await UserService.getAllUsers(5);
          const demoUser = demoUsers[0]; // Use first user as demo

          const loggedInUser = {
            id: demoUser?.id || "demo-1",
            email: email,
            firstName: demoUser?.firstName || "Demo",
            lastName: demoUser?.lastName || "User",
            avatar: `https://ui-avatars.com/api/?name=${demoUser?.firstName || "Demo"}+${demoUser?.lastName || "User"}&background=random`,
            loginTimestamp: Date.now(),
          };

          setUser(loggedInUser);
          storage.setItem("auth_user", loggedInUser);
          setIsLoading(false);
          return true;
        } catch (error) {
          // Final fallback to static demo user
          const loggedInUser = {
            id: "demo-1",
            email: email,
            firstName: "Demo",
            lastName: "User",
            avatar: `https://ui-avatars.com/api/?name=Demo+User&background=random`,
            loginTimestamp: Date.now(),
          };

          setUser(loggedInUser);
          storage.setItem("auth_user", loggedInUser);
          setIsLoading(false);
          return true;
        }
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
