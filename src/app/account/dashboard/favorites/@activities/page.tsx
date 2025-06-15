"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockActivities } from "@/data/activities";
import { mockUserData } from "@/data/users";
import { Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MySavedActivitiesPage() {
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
  const router = useRouter();

  // Get current user data
  const currentUser =
    mockUserData.find((u) => u.email === user?.email) || mockUserData[0];
  const favoriteActivities = currentUser.favorites?.activities
    ? mockActivities.filter((activity) =>
        currentUser.favorites?.activities?.includes(activity.id)
      )
    : [];

  if (favoriteActivities.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Saved Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="py-8 text-center text-muted-foreground">
            No saved activities yet
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Saved Activities ({favoriteActivities.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {favoriteActivities.slice(0, 3).map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 hover:bg-muted/50 p-3 border rounded-lg transition-colors cursor-pointer"
              onClick={() => router.push(`/activities/${activity.id}`)}
            >
              <div className="relative flex-shrink-0 rounded-lg w-16 h-16 overflow-hidden">
                <Image
                  src={activity.images[0]}
                  alt={activity.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{activity.name}</h4>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-3 h-3" />
                  <span>{activity.location.city}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{activity.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-1 text-muted-foreground text-xs">
                  <span>{activity.duration}</span>
                  <span>{activity.difficulty}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  {formatPrice(activity.pricing.adult)}
                </p>
                <p className="text-muted-foreground text-xs">/person</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
