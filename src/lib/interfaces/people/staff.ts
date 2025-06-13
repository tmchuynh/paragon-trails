// Staff interface types for Paragon Trails
export interface TourGuide {
  id: string;
  name: string;
  bio?: string;
  image?: string;
  languages?: string[];
  specializations?: string[];
  rating?: number;
}

// Export for module compatibility
export {};
