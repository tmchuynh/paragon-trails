import React from "react";

// Tour interface for the Paragon Trails application
export interface Tour {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  features: string[];
  restrictions: string[];
  images: string[];
  duration: string;
  pricing: {
    adult: number;
    child: number;
    senior: number;
    student?: number;
    family?: number;
    currency: string;
  };
  tickets: {
    advanceBooking: boolean;
    skipTheLine: boolean;
    groupDiscounts: boolean;
  };
  location: {
    city: string;
    country: string;
    address: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  reviews: {
    rating: number;
    totalReviews: number;
    highlights: string[];
  };
  itinerary: {
    startTime: string;
    endTime: string;
    activities: string[];
  }[];
  cancellationPolicy?: string;
  icon?: React.ComponentType;
  meetingPoint: {
    address: string;
    instructions?: string;
    contactNumber: string;
  };
}
