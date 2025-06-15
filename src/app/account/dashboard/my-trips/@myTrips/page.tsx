"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { getTripsByUser } from "@/data/trips";
import { format, isAfter, isBefore, isWithinInterval } from "date-fns";
import {
  Calendar,
  DollarSign,
  Edit,
  MapPin,
  MoreHorizontal,
  Share2,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function MyTripsSection() {
  const { user } = useAuth();
  const [filter, setFilter] = useState<
    "all" | "upcoming" | "ongoing" | "completed"
  >("all");

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>My Trips</CardTitle>
          <CardDescription>Please log in to view your trips</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const allTrips = getTripsByUser(user.id);
  const now = new Date();

  // Filter trips based on selected filter
  const filteredTrips = allTrips.filter((trip) => {
    const isUpcoming =
      trip.status === "upcoming" && isAfter(trip.startDate, now);
    const isOngoing =
      trip.status === "ongoing" ||
      (trip.status === "upcoming" &&
        isWithinInterval(now, { start: trip.startDate, end: trip.endDate }));
    const isCompleted =
      trip.status === "completed" ||
      (trip.status === "upcoming" && isBefore(trip.endDate, now));

    switch (filter) {
      case "upcoming":
        return isUpcoming;
      case "ongoing":
        return isOngoing;
      case "completed":
        return isCompleted;
      default:
        return true;
    }
  });

  const getStatusBadge = (trip: any) => {
    const isUpcoming =
      trip.status === "upcoming" && isAfter(trip.startDate, now);
    const isOngoing =
      trip.status === "ongoing" ||
      (trip.status === "upcoming" &&
        isWithinInterval(now, { start: trip.startDate, end: trip.endDate }));
    const isCompleted =
      trip.status === "completed" ||
      (trip.status === "upcoming" && isBefore(trip.endDate, now));

    if (isOngoing) {
      return (
        <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
          Ongoing
        </Badge>
      );
    } else if (isUpcoming) {
      return (
        <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
          Upcoming
        </Badge>
      );
    } else if (isCompleted) {
      return <Badge variant="secondary">Completed</Badge>;
    }
    return <Badge variant="outline">{trip.status}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>My Trips</CardTitle>
            <CardDescription>Your travel plans and adventures</CardDescription>
          </div>
          <Button
            size="sm"
            onClick={() => (window.location.href = "/trip-planner")}
          >
            Plan New Trip
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filter Tabs */}
        <div className="flex gap-2 border-b">
          {[
            { key: "all", label: "All" },
            { key: "upcoming", label: "Upcoming" },
            { key: "ongoing", label: "Ongoing" },
            { key: "completed", label: "Completed" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                filter === key
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Trips List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredTrips.length === 0 ? (
            <div className="py-8 text-center">
              <MapPin className="mx-auto mb-4 w-12 h-12 text-muted-foreground" />
              <h3 className="mb-2 font-medium text-lg text-muted-foreground">
                {filter === "all"
                  ? "No trips planned yet"
                  : `No ${filter} trips`}
              </h3>
              <p className="mb-4 text-muted-foreground text-sm">
                Start planning your next adventure!
              </p>
              <Button
                size="sm"
                onClick={() => (window.location.href = "/trip-planner")}
              >
                Plan Your First Trip
              </Button>
            </div>
          ) : (
            filteredTrips.map((trip) => (
              <div
                key={trip.id}
                className="flex items-start gap-3 hover:bg-muted/50 p-3 border rounded-lg transition-colors"
              >
                {/* Trip Image */}
                <div className="relative flex-shrink-0 bg-muted rounded-lg w-16 h-16 overflow-hidden">
                  <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 w-full h-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Trip Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium truncate">
                        {trip.destinationName}
                      </h4>
                      <p className="text-muted-foreground text-sm truncate">
                        {trip.hotelName}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      {getStatusBadge(trip)}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 w-8 h-8"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 w-4 h-4" />
                            Edit Trip
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="mr-2 w-4 h-4" />
                            Share Trip
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 w-4 h-4" />
                            Delete Trip
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2 text-muted-foreground text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {format(trip.startDate, "MMM d")} -{" "}
                        {format(trip.endDate, "MMM d, yyyy")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{trip.guests} guests</span>
                    </div>
                    {trip.totalCost && (
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3" />
                        <span>${trip.totalCost.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  {trip.companions && trip.companions.length > 0 && (
                    <div className="mt-2">
                      <p className="text-muted-foreground text-xs">
                        With: {trip.companions.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {filteredTrips.length > 0 && (
          <div className="pt-3 border-t">
            <Button variant="outline" size="sm" className="w-full">
              View All Trips
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
