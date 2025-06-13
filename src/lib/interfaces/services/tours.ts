import React from "react";

// Tour interface for the Paragon Trails application
export interface Tour {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: string;
  duration: string;
  rating: number;
  tourCategoryId: string;
  tags?: string[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  itinerary?: string[];
  cancellationPolicy?: string;
  icon?: React.ComponentType;
  meetingPoint?: {
    address?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
    instructions?: string;
    contactNumber?: string;
    contactEmail?: string;
  };
}
