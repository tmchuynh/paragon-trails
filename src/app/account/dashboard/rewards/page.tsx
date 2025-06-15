"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/context/AuthContext";
import { getMockUserData } from "@/data/users";
import {
  ArrowLeft,
  Award,
  Calendar,
  Check,
  Crown,
  Gift,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
    color: "",
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

interface Reward {
  id: number;
  title: string;
  points: number;
  description: string;
  available: boolean;
  redeemed?: boolean;
  redeemedDate?: string;
  expiryDate?: string;
}

interface Activity {
  id: number;
  date: string;
  description: string;
  points: number;
  type: "earned" | "redeemed" | "expired";
  expiryDate?: string;
  daysLeft?: number;
}

// Initial user data
const initialUserData = {
  currentPoints: 2847,
  currentTier: "gold" as keyof typeof rewardsTierBenefits,
  pointsThisYear: 1200,
  totalPointsEarned: 8450,
  nextTierPoints: 5000,
};

// Initial rewards with one already expired in history
const initialRewards: Reward[] = [
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

const initialPointsHistory: Activity[] = [
  {
    id: 1,
    date: "2025-06-10",
    description: "Tokyo City Explorer Booking",
    points: 250,
    type: "earned",
  },
  {
    id: 2,
    date: "2025-05-28",
    description: "Hotel Booking - Kyoto",
    points: 180,
    type: "earned",
  },
  {
    id: 3,
    date: "2025-05-15",
    description: "15% Off Coupon - EXPIRED",
    points: -750,
    type: "expired",
  },
  {
    id: 4,
    date: "2025-04-22",
    description: "Grand Tour of Europe Booking",
    points: 450,
    type: "earned",
  },
  {
    id: 5,
    date: "2025-04-10",
    description: "Flight Booking - Paris",
    points: 320,
    type: "earned",
  },
];

export default function RewardsPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const userData = await getMockUserData();
        const foundUser =
          userData.find((u: any) => u.email === user.email) || userData[0];
        setCurrentUser(foundUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  // State management
  const [userData, setUserData] = useState({
    currentPoints: 0,
    currentTier: "bronze" as keyof typeof rewardsTierBenefits,
    pointsThisYear: 0,
    totalPointsEarned: 0,
    nextTierPoints: 5000,
  });

  // Update userData when currentUser is loaded
  useEffect(() => {
    if (currentUser && currentUser.rewardsPoints) {
      setUserData({
        currentPoints: currentUser.rewardsPoints.current,
        currentTier:
          currentUser.rewardsPoints.tier.toLowerCase() as keyof typeof rewardsTierBenefits,
        pointsThisYear: 1200,
        totalPointsEarned: 8450,
        nextTierPoints: 5000,
      });
    }
  }, [currentUser]);

  const [availableRewards, setAvailableRewards] = useState(initialRewards);
  const [pointsHistory, setPointsHistory] = useState([
    ...initialPointsHistory,
    // Add an expired reward to recent activity
    {
      id: Date.now() - 1000,
      date: "2025-05-01",
      description: "15% Off Hotel Booking - EXPIRED",
      points: -500,
      type: "expired" as const,
      expiryDate: "2025-05-31",
      daysLeft: -14,
    },
  ]);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to access this page.");
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return null;
  }

  const currentTierData = rewardsTierBenefits[userData.currentTier];
  const tierKeys = Object.keys(
    rewardsTierBenefits
  ) as (keyof typeof rewardsTierBenefits)[];
  const currentTierIndex = tierKeys.indexOf(userData.currentTier);
  const nextTier = tierKeys[currentTierIndex + 1];
  const nextTierData = nextTier ? rewardsTierBenefits[nextTier] : null;

  const progressToNextTier = nextTierData
    ? ((userData.currentPoints - currentTierData.pointsRequired) /
        (nextTierData.pointsRequired - currentTierData.pointsRequired)) *
      100
    : 100;

  const pointsToNextTier = nextTierData
    ? nextTierData.pointsRequired - userData.currentPoints
    : 0;

  const handleRedeemReward = (
    rewardId: number,
    points: number,
    title: string
  ) => {
    if (points <= userData.currentPoints) {
      // Update user points
      setUserData((prev) => ({
        ...prev,
        currentPoints: prev.currentPoints - points,
      }));

      // Move reward to end and mark as redeemed
      setAvailableRewards((prev) => {
        const updatedRewards = prev.map((reward) =>
          reward.id === rewardId
            ? {
                ...reward,
                redeemed: true,
                redeemedDate: new Date().toISOString(),
                expiryDate: new Date(
                  Date.now() + 30 * 24 * 60 * 60 * 1000
                ).toISOString(), // 30 days from now
              }
            : reward
        );

        // Move redeemed reward to end
        const redeemedReward = updatedRewards.find((r) => r.id === rewardId);
        const otherRewards = updatedRewards.filter((r) => r.id !== rewardId);
        return redeemedReward
          ? [...otherRewards, redeemedReward]
          : updatedRewards;
      });

      // Add to recent activity at the top
      const expiryDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      const daysLeft = Math.ceil(
        (expiryDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
      );

      setPointsHistory((prev) => [
        {
          id: Date.now(),
          date: new Date().toISOString(),
          description: `Redeemed: ${title}`,
          points: -points,
          type: "redeemed" as const,
          expiryDate: expiryDate.toISOString(),
          daysLeft: daysLeft,
        },
        ...prev,
      ]);

      toast.success(
        `Reward redeemed successfully! Valid for ${daysLeft} days.`
      );
    } else {
      toast.error("Insufficient points for this reward.");
    }
  };

  const formatDaysLeft = (daysLeft: number) => {
    if (daysLeft <= 0) return "Expired";
    if (daysLeft === 1) return "1 day left";
    return `${daysLeft} days left`;
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to dashboard
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-4xl">Rewards Program</h1>
          <p className="text-lg">
            Earn points with every booking and unlock exclusive benefits.
          </p>
        </div>

        {/* Current Status Overview */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-medium text-sm">
                <Star className="w-4 h-4" />
                Current Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-3xl text-blue-600">
                {userData.currentPoints.toLocaleString()}
              </div>
              <p className="text-sm">Valid until Dec 2025</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-medium text-sm">
                <currentTierData.icon
                  className={`w-4 h-4 ${currentTierData.color}`}
                />
                Current Tier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-3xl capitalize">
                {userData.currentTier}
              </div>
              <Badge variant="platinum" size={"xs"}>
                Member Since 2024
              </Badge>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-medium text-sm">
                <TrendingUp className="w-4 h-4" />
                Points This Year
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-3xl text-green-600">
                {userData.pointsThisYear.toLocaleString()}
              </div>
              <p className="text-sm">+15% from last year</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-medium text-sm">
                <Award className="w-4 h-4" />
                Lifetime Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-3xl text-purple-600">
                {userData.totalPointsEarned.toLocaleString()}
              </div>
              <p className="text-sm">Total earned</p>
            </CardContent>
          </Card>
        </div>

        {/* Tier Progress */}
        {nextTierData && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Progress to {nextTier} Tier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">
                    {userData.currentPoints.toLocaleString()} /{" "}
                    {nextTierData.pointsRequired.toLocaleString()} points
                  </span>
                  <span className="text-sm">
                    {pointsToNextTier.toLocaleString()} points to go
                  </span>
                </div>
                <Progress value={progressToNextTier} className="h-3" />
                <p className="text-sm">
                  Earn {pointsToNextTier.toLocaleString()} more points to unlock{" "}
                  {nextTier} tier benefits!
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tier Benefits */}
        <div className="mb-8">
          <h2 className="mb-6 font-bold text-2xl">
            Membership Tiers & Benefits
          </h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(rewardsTierBenefits).map(([tier, data]) => {
              const isCurrentTier = tier === userData.currentTier;
              const isUnlocked = userData.currentPoints >= data.pointsRequired;

              return (
                <Card
                  key={tier}
                  className={`relative ${isCurrentTier ? `${data.borderColor} border-2` : ""} ${
                    isUnlocked ? "" : "opacity-75"
                  }`}
                >
                  <CardHeader
                    className={`${data.bgColor} ${isCurrentTier ? "bg-opacity-100" : "bg-opacity-50"}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <data.icon className={`w-6 h-6 ${data.color}`} />
                        <CardTitle className="font-bold text-lg capitalize">
                          {tier}
                        </CardTitle>
                      </div>
                      {isCurrentTier && (
                        <Badge variant="gradientPrimary">Current</Badge>
                      )}
                    </div>
                    <p className="font-medium text-sm">
                      {data.pointsRequired.toLocaleString()} points required
                    </p>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {data.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              isUnlocked ? "text-green-500" : ""
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              isUnlocked
                                ? "text-foreground"
                                : "line-through text-muted-foreground"
                            }`}
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Available Rewards & Points History */}
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Available Rewards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Available Rewards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableRewards.map((reward) => (
                <div
                  key={reward.id}
                  className={`flex justify-between items-center p-4 border rounded-lg ${
                    !reward.available || reward.points > userData.currentPoints
                      ? "opacity-50 bg-muted/50 cursor-not-allowed"
                      : "hover:border hover:border-blue-500 "
                  }`}
                >
                  <div className="flex-1">
                    <h4 className="font-medium">{reward.title}</h4>
                    <p className="text-sm">{reward.description}</p>
                    <p className="font-medium text-blue-600 text-sm">
                      {reward.points.toLocaleString()} points
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant={
                      reward.available &&
                      reward.points <= userData.currentPoints
                        ? "classic"
                        : "professional"
                    }
                    disabled={
                      !reward.available ||
                      reward.points > userData.currentPoints
                    }
                    onClick={() =>
                      handleRedeemReward(reward.id, reward.points, reward.title)
                    }
                  >
                    {!reward.available
                      ? "Unavailable"
                      : reward.points > userData.currentPoints
                        ? "Insufficient Points"
                        : "Redeem"}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Points History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-4 h-[35em] overflow-y-auto">
                {pointsHistory.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex justify-between items-center p-3 border rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{activity.description}</p>
                      <p className="text-sm">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div
                      className={`font-medium ${
                        activity.type === "earned"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {activity.type === "earned" ? "+" : ""}
                      {activity.points.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="classic"
                className="w-full"
                onClick={() =>
                  router.push("/account/dashboard/rewards/history")
                }
              >
                View Full History
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* How to Earn Points */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              How to Earn Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center items-center bg-blue-100 mx-auto mb-3 rounded-full w-12 h-12">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="mb-2 font-medium">Book Travel</h4>
                <p className="text-sm">
                  Earn 1 point for every $1 spent on bookings
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center bg-green-100 mx-auto mb-3 rounded-full w-12 h-12">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="mb-2 font-medium">Write Reviews</h4>
                <p className="text-sm">
                  Get 50 bonus points for each verified review
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center bg-purple-100 mx-auto mb-3 rounded-full w-12 h-12">
                  <Gift className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="mb-2 font-medium">Referrals</h4>
                <p className="text-sm">
                  Earn 500 points for each friend you refer
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
