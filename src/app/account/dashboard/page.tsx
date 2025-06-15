"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import { MdFlightTakeoff } from "react-icons/md";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Award,
  CalendarDays,
  Clock,
  CreditCard,
  Gift,
  Globe,
  Heart,
  MapPin,
  Plane,
  Settings,
  ShoppingBag,
  Star,
  TrendingUp,
  UserCircle,
  Wallet,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock data for dashboard stats
  const [dashboardStats] = useState({
    totalBookings: { thisMonth: 2, thisYear: 8, growth: "+33%" },
    rewardsPoints: { current: 3247, expiry: "Dec 2025", tier: "Gold" },
    totalSpent: { thisYear: 15750, lastYear: 12300 },
    favoriteDestinations: 12,
    upcomingTrips: 1,
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: "reward_redemption",
      title: "15% Off Hotel Booking Coupon",
      date: "June 12, 2025",
      status: "Active",
      amount: "-750 points",
      icon: Gift,
      color: "text-purple-500",
      expiryDate: "July 12, 2025",
      daysLeft: 28,
    },
    {
      id: 2,
      type: "booking",
      title: "Mediterranean Cruise Adventure",
      date: "April 2-9, 2025",
      status: "Confirmed",
      amount: "$2,850",
      icon: MdFlightTakeoff,
      color: "text-blue-500",
    },
    {
      id: 3,
      type: "reward_expired",
      title: "10% Off Flight Booking - EXPIRED",
      date: "May 15, 2025",
      status: "Expired",
      amount: "-500 points",
      icon: Clock,
      color: "text-red-500",
      expired: true,
    },
    {
      id: 4,
      type: "booking",
      title: "Grand Tour of Europe",
      date: "March 15-25, 2025",
      status: "Confirmed",
      amount: "$4,200",
      icon: CalendarDays,
      color: "text-green-500",
    },
    {
      id: 5,
      type: "reward_redemption",
      title: "Airport Lounge Access Pass",
      date: "April 18, 2025",
      status: "Active",
      amount: "-1000 points",
      icon: Award,
      color: "text-yellow-500",
      expiryDate: "April 18, 2026",
      daysLeft: 308,
    },
    {
      id: 6,
      type: "completed",
      title: "Tokyo City Explorer",
      date: "January 8-12, 2025",
      status: "Completed",
      amount: "$1,850",
      icon: MapPin,
      color: "text-emerald-500",
    },
  ]);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const memberSince = user.loginTimestamp
    ? new Date(user.loginTimestamp)
    : new Date();
  const rewardsProgress = (dashboardStats.rewardsPoints.current % 1000) / 10; // Progress to next tier

  // Helper function to format days left
  const formatDaysLeft = (daysLeft?: number) => {
    if (!daysLeft) return null;
    if (daysLeft <= 0) return "Expired";
    if (daysLeft === 1) return "1 day left";
    if (daysLeft <= 30) return `${daysLeft} days left`;
    return `${Math.ceil(daysLeft / 30)} months left`;
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Enhanced Header Section */}
        <div className="mb-8">
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="mb-2 font-bold text-3xl text-slate-900 dark:text-slate-100">
                Welcome back, {user.firstName}! ✨
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push("/account/settings")}
              >
                <Settings className="mr-2 w-4 h-4" />
                Settings
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => router.push("/destinations")}
              >
                <Globe className="mr-2 w-4 h-4" />
                Plan Trip
              </Button>
            </div>
          </div>
        </div>
        {/* Enhanced Stats Grid */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Profile Overview */}
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 font-medium text-sm">
                <UserCircle className="w-4 h-4" />
                Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="shadow-md border-2 border-white w-16 h-16">
                  <AvatarImage
                    className="object-cover"
                    src={user.avatar}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 font-semibold text-white">
                    {user.firstName[0]}
                    {user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm">{user.email}</p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white"
              >
                {dashboardStats.rewardsPoints.tier} Member
              </Badge>
            </CardContent>
          </Card>

          {/* Travel Stats */}
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 font-medium text-sm">
                <Plane className="w-4 h-4" />
                Travel Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-2xl">
                    {dashboardStats.totalBookings.thisYear}
                  </span>
                  <span className="font-medium text-green-500 text-sm">
                    {dashboardStats.totalBookings.growth}
                  </span>
                </div>
                <p className="text-xs">trips this year</p>
              </div>
              <Separator />
              <div>
                <div className="font-semibold text-lg">
                  {dashboardStats.favoriteDestinations}
                </div>
                <p className="text-xs">favorite destinations</p>
              </div>
            </CardContent>
          </Card>

          {/* Rewards Points */}
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 font-medium text-sm">
                <Star className="w-4 h-4 text-yellow-500" />
                Rewards Points
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-full">
              <div>
                <div className="font-bold text-2xl text-yellow-600">
                  {dashboardStats.rewardsPoints.current.toLocaleString()}
                </div>
                <p className="text-xs">
                  Valid until {dashboardStats.rewardsPoints.expiry}
                </p>
              </div>
              <div className="py-2 h-full">
                <div className="flex justify-between items-center text-xs">
                  <span>Progress to next tier</span>
                  <span>{rewardsProgress}%</span>
                </div>
                <Progress value={rewardsProgress} className="my-2 h-2" />
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() => router.push("/account/dashboard/rewards")}
              >
                <Gift className="mr-1 w-3 h-3" />
                View Benefits
              </Button>
            </CardContent>
          </Card>

          {/* Financial Summary */}
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 font-medium text-sm">
                <Wallet className="w-4 h-4" />
                Spending
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-full">
              <div>
                <div className="font-bold text-2xl">
                  ${dashboardStats.totalSpent.thisYear.toLocaleString()}
                </div>
                <p className="text-xs">spent this year</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">vs last year</span>
                <span className="font-medium text-green-500 text-sm">
                  +
                  {Math.round(
                    ((dashboardStats.totalSpent.thisYear -
                      dashboardStats.totalSpent.lastYear) /
                      dashboardStats.totalSpent.lastYear) *
                      100
                  )}
                  %
                </span>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() =>
                  router.push("/account/dashboard/payment-methods")
                }
              >
                <CreditCard className="mr-1 w-3 h-3" />
                Payment Methods
              </Button>
            </CardContent>
          </Card>
        </div>
        {/* Enhanced Activity Section */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
          {/* Recent Activity - Spans 2 columns */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    router.push("/account/dashboard/rewards/history")
                  }
                >
                  View Full History
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.slice(0, 4).map((activity: any) => {
                const IconComponent = activity.icon;
                const daysLeftText = formatDaysLeft(activity.daysLeft);

                return (
                  <div
                    key={activity.id}
                    className="relative flex justify-between items-start hover:bg-slate-50 dark:hover:bg-slate-800 p-4 border rounded-xl transition-colors cursor-pointer"
                    onClick={() =>
                      toast.info(`Opening ${activity.title} details...`)
                    }
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${activity.color} ${activity.expired ? "opacity-50" : ""}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-semibold ${activity.expired ? "line-through opacity-60" : ""}`}
                        >
                          {activity.title}
                        </p>
                        <p className="text-sm">{activity.date}</p>
                        <p className="text-xs">{activity.amount}</p>
                        {daysLeftText && (
                          <p
                            className={`text-xs mt-1 font-medium ${
                              activity.daysLeft && activity.daysLeft <= 7
                                ? "text-red-500"
                                : activity.daysLeft && activity.daysLeft <= 30
                                  ? "text-orange-500"
                                  : "text-green-500"
                            }`}
                          >
                            ⏰ {daysLeftText}
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge
                      variant={
                        activity.status === "Confirmed" ||
                        activity.status === "Active"
                          ? "default"
                          : activity.status === "Completed"
                            ? "secondary"
                            : activity.status === "Expired"
                              ? "destructive"
                              : "outline"
                      }
                      className={cn("", {
                        "bg-green-500":
                          activity.status === "Confirmed" ||
                          activity.status === "Active",
                        "bg-blue-500": activity.status === "Completed",
                        "bg-red-500": activity.status === "Expired",
                      })}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Enhanced Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="group justify-start w-full h-12"
                onClick={() => router.push("/destinations")}
              >
                <Globe className="mr-3 w-5 h-5 text-blue-500 group-hover:text-white" />
                <div className="text-left">
                  <div className="font-medium">Browse Destinations</div>
                  <div className="text-xs">Find your next adventure</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="group justify-start w-full h-12"
                onClick={() => router.push("/my-cart")}
              >
                <ShoppingBag className="mr-3 w-5 h-5 text-green-500 group-hover:text-white" />
                <div className="text-left">
                  <div className="font-medium">View Cart</div>
                  <div className="text-xs">Complete your booking</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="group justify-start w-full h-12"
                onClick={() => router.push("/account/dashboard/favorites")}
              >
                <Heart className="mr-3 w-5 h-5 text-red-500 group-hover:text-white" />
                <div className="text-left">
                  <div className="font-medium">My Favorites</div>
                  <div className="text-xs">Saved destinations & tours</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="group justify-start w-full h-12"
                onClick={() => router.push("/trip-planner")}
              >
                <MapPin className="mr-3 w-5 h-5 text-purple-500 group-hover:text-white" />
                <div className="text-left">
                  <div className="font-medium">Trip Planner</div>
                  <div className="text-xs">Plan your itinerary</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="group justify-start w-full h-12"
                onClick={() => router.push("/contact")}
              >
                <UserCircle className="mr-3 w-5 h-5 text-orange-500 group-hover:text-white" />
                <div className="text-left">
                  <div className="font-medium">Get Support</div>
                  <div className="text-xs">24/7 customer service</div>
                </div>
              </Button>

              <Separator className="my-4" />

              <Button
                variant={"classic"}
                className="w-full"
                onClick={() => router.push("/account/dashboard/rewards")}
              >
                <Award className="mr-2 w-4 h-4" />
                Claim Rewards
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
