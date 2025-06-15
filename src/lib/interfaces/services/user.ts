import { IconType } from "react-icons/lib";
import { Activity } from "./activities";
import { Attraction } from "./attractions";
import { Destination } from "./destinations";
import { Flight } from "./flights";
import { Hotel } from "./hotels";
import { Tour } from "./tours";
import { Vehicle } from "./vehicles";

export interface User {
  id: string;
  email: string;
  password?: string; // Optional for security reasons
  username?: string; // Optional for display purposes
  emailVerified?: boolean; // Optional, true if email is verified
  phoneNumber?: string; // Optional, for contact purposes
  phoneNumberVerified?: boolean; // Optional, true if phone number is verified
  firstName: string;
  lastName: string;
  memberSince: string;
  lastLogin: string;
  membershipStatus: string;
  membershipTier: string;
  membershipExpiry: string;
  favorites?: {
    hotels?: Hotel["id"][];
    flights?: Flight["id"][];
    tours?: Tour["id"][];
    destinations?: Destination["id"][];
    attractions?: Attraction["id"][];
    activities?: Activity["id"][];
    vehicles?: Vehicle["id"][];
  };
  rewards: {
    rewardId: number;
    points: number;
    title: string;
  }[];
  rewardsPoints: {
    current: number;
    tier: string;
    expiry: string;
  };
  totalBookings: {
    thisMonth: number;
    thisYear: number;
    growth: string;
  };
  totalSpent: {
    thisYear: number;
    lastYear: number;
  };
  favoriteDestinations: number;
  upcomingTrips: number;
  recentActivities: {
    id: number;
    type: string;
    title: string;
    date: string;
    description?: string;
    status: string;
    amount: string;
    icon: IconType;
    color: string;
  }[];
  avatarUrl?: string;
  preferences?: {
    language?: string;
    timezone?: string;
    notifications?: {
      email?: boolean;
      sms?: boolean;
      push?: boolean;
    };
  };
}
