"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockAttractions } from "@/data/attractions";
import { mockUserData } from "@/data/users";
import { Camera, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MySavedAttractionsPage() {
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
  const router = useRouter();

  // Get current user data
  const currentUser =
    mockUserData.find((u) => u.email === user?.email) || mockUserData[0];
  const favoriteAttractions = currentUser.favorites?.attractions
    ? mockAttractions.filter((attraction) =>
        currentUser.favorites?.attractions?.includes(attraction.id)
      )
    : [];

  if (favoriteAttractions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Saved Attractions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="py-8 text-center text-muted-foreground">
            No saved attractions yet
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="w-5 h-5" />
          Saved Attractions ({favoriteAttractions.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {favoriteAttractions.slice(0, 3).map((attraction) => (
            <div
              key={attraction.id}
              className="flex items-center gap-4 hover:bg-muted/50 p-3 border rounded-lg transition-colors cursor-pointer"
              onClick={() => router.push(`/attractions/${attraction.id}`)}
            >
              <div className="relative flex-shrink-0 rounded-lg w-16 h-16 overflow-hidden">
                <Image
                  src={attraction.images[0]}
                  alt={attraction.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{attraction.name}</h4>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-3 h-3" />
                  <span>{attraction.location.city}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{attraction.rating}</span>
                  </div>
                </div>
                <div className="mt-1 text-muted-foreground text-xs">
                  {attraction.category} • {attraction.type}
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  {formatPrice(attraction.pricing.adult)}
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
