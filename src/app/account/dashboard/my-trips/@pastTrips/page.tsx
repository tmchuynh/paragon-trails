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
import { format, isBefore } from "date-fns";
import {
  Calendar,
  Copy,
  DollarSign,
  Download,
  MapPin,
  MoreHorizontal,
  Share2,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function PastTripsSection() {
  const { user } = useAuth();
  const [showReviews, setShowReviews] = useState<string | null>(null);

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Past Trips</CardTitle>
          <CardDescription>
            Please log in to view your travel history
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const allTrips = getTripsByUser(user.id);
  const now = new Date();

  // Filter to show only completed trips
  const pastTrips = allTrips
    .filter(
      (trip) =>
        trip.status === "completed" ||
        (trip.status === "upcoming" && isBefore(trip.endDate, now))
    )
    .sort(
      (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
    );

  const totalSpent = pastTrips.reduce(
    (sum, trip) => sum + (trip.totalCost || 0),
    0
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Past Trips</CardTitle>
            <CardDescription>
              {pastTrips.length} completed trips • $
              {totalSpent.toLocaleString()} total spent
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Travel Report
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {pastTrips.length === 0 ? (
            <div className="py-8 text-center">
              <Calendar className="mx-auto mb-4 w-12 h-12 text-muted-foreground" />
              <h3 className="mb-2 font-medium text-lg text-muted-foreground">
                No completed trips yet
              </h3>
              <p className="mb-4 text-muted-foreground text-sm">
                Your travel memories will appear here after your trips
              </p>
              <Button
                size="sm"
                onClick={() => (window.location.href = "/trip-planner")}
              >
                Plan Your First Trip
              </Button>
            </div>
          ) : (
            pastTrips.map((trip) => (
              <div
                key={trip.id}
                className="flex items-start gap-3 hover:bg-muted/50 p-3 border rounded-lg transition-colors"
              >
                {/* Trip Image */}
                <div className="relative flex-shrink-0 bg-muted rounded-lg w-16 h-16 overflow-hidden">
                  <div className="flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-600 w-full h-full">
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
                      <Badge variant="secondary">Completed</Badge>
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
                            <Star className="mr-2 w-4 h-4" />
                            Write Review
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 w-4 h-4" />
                            Copy as Template
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="mr-2 w-4 h-4" />
                            Share Memories
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Download className="mr-2 w-4 h-4" />
                            Export Itinerary
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

                  {trip.notes && (
                    <div className="mt-2">
                      <p className="text-muted-foreground text-xs italic">
                        "{trip.notes}"
                      </p>
                    </div>
                  )}

                  {/* Trip Rating/Review Preview */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-3 h-3 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground text-xs">
                      Amazing trip!
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {pastTrips.length > 0 && (
          <div className="pt-3 border-t">
            <div className="gap-2 grid grid-cols-2">
              <Button variant="outline" size="sm">
                Travel Timeline
              </Button>
              <Button variant="outline" size="sm">
                Photo Memories
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
