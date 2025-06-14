export interface TripPlan {
  id: string;
  destination: string;
  destinationName: string;
  hotel: string;
  hotelName: string;
  startDate: Date;
  endDate: Date;
  guests: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface TripItem {
  id: string;
  type: "activity" | "attraction" | "tour";
  name: string;
  description: string;
  image: string;
  duration: string; // e.g., "2 hours", "3-4 hours"
  customDuration?: number; // user-specified duration in minutes
  location: string;
  price?: number;
  currency?: string;
  category: string;
  timeSlot?: string; // morning, afternoon, evening
  originalData: any; // store the original item data
}

export interface TripDay {
  id: string;
  date: Date;
  dayNumber: number;
  items: TripItem[];
  notes?: string;
}

export interface TimeSlot {
  id: string;
  label: string;
  startTime: string;
  endTime: string;
  items: TripItem[];
}

export interface DurationOption {
  label: string;
  value: number; // in minutes
}
