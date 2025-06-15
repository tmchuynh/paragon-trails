// This file now uses API services instead of mock data
// Users are fetched from DummyJSON API via UserService

export { UserService } from "@/lib/api/services";

// Re-export the User interface for backward compatibility
export type { User } from "@/lib/interfaces/services/user";
export { getMockUserData as mockUserData_async };

// Legacy export for components that still expect mockUserData
// This will fetch users from the API
export const getMockUserData = async () => {
  const { UserService } = await import("@/lib/api/services");
  return await UserService.getAllUsers();
};

// For components that need a single user
export const getMockUser = async (id: string) => {
  const { UserService } = await import("@/lib/api/services");
  return await UserService.getUserById(id);
};

export const getBudgetsByUser = async (userId: string) => {
  const { UserService } = await import("@/lib/api/services");
  return await UserService.getBudgetsByUser(userId);
};

export const getTripsByUser = async (userId: string) => {
  const { UserService } = await import("@/lib/api/services");
  return await UserService.getTripsByUser(userId);
};

export const getUserFavorites = async (userId: string) => {
  const { UserService } = await import("@/lib/api/services");
  return await UserService.getUserFavorites(userId);
};

// Backward compatibility exports
export const mockUserData = [];
