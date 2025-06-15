"use client";

import { useAuth } from "@/context/AuthContext";
import { Award, Crown, Star, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const rewardsTierBenefits = {
  bronze: {
    pointsRequired: 0,
    icon: Star,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    benefits: [
      "5% off all bookings",
      "Early access to new tours",
      "Exclusive newsletters",
    ],
  },
  silver: {
    pointsRequired: 1000,
    icon: Award,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    benefits: [
      "10% off all bookings",
      "Free travel insurance on bookings over $500",
      "Access to exclusive events",
      "Priority booking window",
    ],
  },
  gold: {
    pointsRequired: 2500,
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    benefits: [
      "15% off all bookings",
      "Free airport transfers on bookings over $1000",
      "Priority customer support",
      "Complimentary room upgrades",
      "Late checkout privileges",
    ],
  },
  platinum: {
    pointsRequired: 5000,
    icon: Crown,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    benefits: [
      "20% off all bookings",
      "Free upgrades on select tours",
      "Personalized travel planning service",
      "Dedicated concierge service",
      "Exclusive platinum-only experiences",
      "Birthday bonus points",
    ],
  },
};

// Mock user data - in a real app, this would come from your auth context or API
const mockUserData = {
  currentPoints: 2847,
  currentTier: "gold" as keyof typeof rewardsTierBenefits,
  pointsThisYear: 1200,
  totalPointsEarned: 8450,
  nextTierPoints: 5000,
};

const pointsHistory = [
  {
    id: 1,
    date: "2025-06-10",
    description: "Tokyo City Explorer Booking",
    points: 250,
    type: "earned" as const,
  },
  {
    id: 2,
    date: "2025-05-28",
    description: "Hotel Booking - Kyoto",
    points: 180,
    type: "earned" as const,
  },
  {
    id: 3,
    date: "2025-05-15",
    description: "Redeemed: 10% Off Coupon",
    points: -500,
    type: "redeemed" as const,
  },
  {
    id: 4,
    date: "2025-04-22",
    description: "Grand Tour of Europe Booking",
    points: 450,
    type: "earned" as const,
  },
  {
    id: 5,
    date: "2025-04-10",
    description: "Flight Booking - Paris",
    points: 320,
    type: "earned" as const,
  },
];

const availableRewards = [
  {
    id: 1,
    title: "5% Off Next Booking",
    points: 250,
    description: "Get 5% off your next travel booking",
    available: true,
  },
  {
    id: 2,
    title: "10% Off Next Booking",
    points: 500,
    description: "Get 10% off your next travel booking",
    available: true,
  },
  {
    id: 3,
    title: "Free Travel Insurance",
    points: 750,
    description: "Complimentary travel insurance for your next trip",
    available: true,
  },
  {
    id: 4,
    title: "Airport Lounge Access",
    points: 1000,
    description: "Access to premium airport lounges worldwide",
    available: true,
  },
  {
    id: 5,
    title: "Free Hotel Night",
    points: 1500,
    description: "One free night at participating hotels",
    available: false,
  },
];

export default function RewardsPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to access this page.");
      router.push("/login");
    }
  }, [isAuthenticated, router]);
  if (!isAuthenticated) {
    return null; // Prevent rendering if not authenticated
  }
  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-3xl">Rewards Program</h1>
          <p className="text-muted-foreground">
            Manage your rewards points and benefits.
          </p>
        </div>
      </div>
    </div>
  );
}
