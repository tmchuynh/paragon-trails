// This file now uses API services instead of mock data
// Destinations are fetched from FakerAPI via DestinationService

export { DestinationService } from "@/lib/api/services";

// Re-export the Destination interface for backward compatibility
export type { Destination } from "@/lib/interfaces/services/destinations";
export { getMockDestinations as mockDestinations_async };

// Legacy export for components that still expect mockDestinations
// This will fetch destinations from the API
export const getMockDestinations = async () => {
  const { DestinationService } = await import("@/lib/api/services");
  return await DestinationService.getAllDestinations();
};

// For components that need a single destination
export const getMockDestination = async (id: string) => {
  const { DestinationService } = await import("@/lib/api/services");
  return await DestinationService.getDestinationById(id);
};

// Backward compatibility exports
export const mockDestinations = [];
