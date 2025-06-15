import { TripPlan } from "../trip-planner";

export interface SavedTrip extends TripPlan {
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  totalCost?: number;
  currency?: string;
  notes?: string;
  isPublic?: boolean;
  bookingConfirmations?: {
    flight?: string;
    hotel?: string;
    activities?: string[];
  };
  companions?: string[];
  imageUrl?: string;
}

export interface TripBudget {
  id: string;
  tripId?: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  currency: string;
  targetDate: Date;
  createdAt: Date;
  updatedAt: Date;
  category:
    | "vacation"
    | "business"
    | "family"
    | "adventure"
    | "luxury"
    | "budget";
  monthlyContribution?: number;
  isActive: boolean;
  notes?: string;
}
