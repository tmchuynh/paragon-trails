"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { getBudgetsByUser, getTripsByUser } from "@/data/users";
import { Calendar, DollarSign, MapPin, Plane, Target } from "lucide-react";
import { useEffect, useState } from "react";

export default function MyTripsPage() {
  const { user } = useAuth();
  const [tripStats, setTripStats] = useState({
    total: 0,
    upcoming: 0,
    completed: 0,
    totalSpent: 0,
  });
  const [budgetStats, setBudgetStats] = useState({
    total: 0,
    active: 0,
    achieved: 0,
    totalBudget: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const [trips, budgets] = await Promise.all([
          getTripsByUser(user.id),
          getBudgetsByUser(user.id),
        ]);

        // Calculate trip stats
        const completedTrips = trips.filter(
          (trip: any) => trip.status === "completed"
        );
        const upcomingTrips = trips.filter(
          (trip: any) => trip.status === "upcoming"
        );
        const totalSpent = completedTrips.reduce(
          (sum: number, trip: any) => sum + (trip.totalCost || 0),
          0
        );

        setTripStats({
          total: trips.length,
          upcoming: upcomingTrips.length,
          completed: completedTrips.length,
          totalSpent,
        });

        // Calculate budget stats
        const activeBudgets = budgets.filter((budget: any) => budget.isActive);
        const achievedBudgets = budgets.filter(
          (budget: any) => budget.currentAmount / budget.targetAmount >= 1
        );
        const totalBudget = budgets.reduce(
          (sum: number, budget: any) => sum + (budget.targetAmount || 0),
          0
        );

        setBudgetStats({
          total: budgets.length,
          active: activeBudgets.length,
          achieved: achievedBudgets.length,
          totalBudget,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Please log in to view your trips.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="font-bold text-3xl text-gray-900 dark:text-white">
            My Trips
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Manage your travel plans and budgets
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">Total Trips</CardTitle>
            <Plane className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">{tripStats.total}</div>
            <p className="text-muted-foreground text-xs">
              {tripStats.completed} completed trips
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Upcoming Trips
            </CardTitle>
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">{tripStats.upcoming}</div>
            <p className="text-muted-foreground text-xs">Ready to travel</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">Total Spent</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">
              ${tripStats.totalSpent.toLocaleString()}
            </div>
            <p className="text-muted-foreground text-xs">
              $
              {tripStats.completed > 0
                ? Math.round(
                    tripStats.totalSpent / tripStats.completed
                  ).toLocaleString()
                : 0}{" "}
              avg per trip
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Budget Progress
            </CardTitle>
            <Target className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">{budgetStats.achieved}</div>
            <p className="text-muted-foreground text-xs">
              {budgetStats.achieved} of {budgetStats.total} budgets achieved
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Badge
          variant="outline"
          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
          onClick={() => (window.location.href = "/trip-planner")}
        >
          <Plane className="mr-1 w-3 h-3" />
          Plan New Trip
        </Badge>
        <Badge
          variant="outline"
          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
          onClick={() => (window.location.href = "/budget-calculator")}
        >
          <DollarSign className="mr-1 w-3 h-3" />
          Budget Calculator
        </Badge>
        <Badge
          variant="outline"
          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
        >
          <MapPin className="mr-1 w-3 h-3" />
          Explore Destinations
        </Badge>
      </div>
    </div>
  );
}
