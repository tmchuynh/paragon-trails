"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MySavedToursPage() {
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
  const router = useRouter();

  // Get current user data
  const currentUser =
    mockUserData.find((u) => u.email === user?.email) || mockUserData[0];
  const favoriteTours = currentUser.favorites?.tours
    ? mockTours.filter((tour) =>
        currentUser.favorites?.tours?.includes(tour.id)
      )
    : [];

  if (favoriteTours.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Saved Tours</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="py-8 text-center text-muted-foreground">
            No saved tours yet
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          Saved Tours ({favoriteTours.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {favoriteTours.slice(0, 3).map((tour) => (
            <div
              key={tour.id}
              className="flex items-center gap-4 hover:bg-muted/50 p-3 border rounded-lg transition-colors cursor-pointer"
              onClick={() => router.push(`/tours/${tour.id}`)}
            >
              <div className="relative flex-shrink-0 rounded-lg w-16 h-16 overflow-hidden">
                <Image
                  src={tour.images[0]}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{tour.title}</h4>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-3 h-3" />
                  <span>{tour.location.city}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{tour.reviews.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1 text-muted-foreground text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{tour.duration}</span>
                  <Badge variant="outline" className="text-xs">
                    {tour.type}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  {formatPrice(tour.pricing.adult)}
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
