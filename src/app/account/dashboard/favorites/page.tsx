"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { useCurrency } from "@/context/CurrencyContext";
import {
  ArrowLeft,
  Building,
  Camera,
  Car,
  Clock,
  Heart,
  MapPin,
  Plane,
  Star,
  Trash2,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FavoritesPage() {
  const { user, isAuthenticated } = useAuth();
  const { formatPrice } = useCurrency();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("hotels");

  // Get current user data
  const currentUser =
    mockUserData.find((u) => u.email === user?.email) || mockUserData[0];
  const favorites = currentUser.favorites || {};

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to access this page.");
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  // Get favorite items based on IDs
  const favoriteHotels = favorites.hotels
    ? mockHotels.filter((hotel) => favorites.hotels?.includes(hotel.id))
    : [];
  const favoriteFlights = favorites.flights
    ? mockFlights.filter((flight) => favorites.flights?.includes(flight.id))
    : [];
  const favoriteTours = favorites.tours
    ? mockTours.filter((tour) => favorites.tours?.includes(tour.id))
    : [];
  const favoriteDestinations = favorites.destinations
    ? mockDestinations.filter((dest) =>
        favorites.destinations?.includes(dest.id)
      )
    : [];
  const favoriteAttractions = favorites.attractions
    ? mockAttractions.filter((attr) => favorites.attractions?.includes(attr.id))
    : [];
  const favoriteActivities = favorites.activities
    ? mockActivities.filter((activity) =>
        favorites.activities?.includes(activity.id)
      )
    : [];
  const favoriteVehicles = favorites.vehicles
    ? mockVehicles.filter((vehicle) => favorites.vehicles?.includes(vehicle.id))
    : [];

  const totalFavorites =
    favoriteHotels.length +
    favoriteFlights.length +
    favoriteTours.length +
    favoriteDestinations.length +
    favoriteAttractions.length +
    favoriteActivities.length +
    favoriteVehicles.length;

  const handleRemoveFavorite = (type: string, id: string) => {
    toast.success(`Removed from favorites`);
    // In a real app, this would update the user's favorites in the backend
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/account/dashboard")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Dashboard
          </Button>

          <div className="flex justify-between items-center">
            <div>
              <h1 className="mb-2 font-bold text-3xl">My Favorites</h1>
              <p className="text-muted-foreground">
                Manage your saved travel items ({totalFavorites} total)
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => router.push("/destinations")}
            >
              <Heart className="mr-2 w-4 h-4" />
              Find More Favorites
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="gap-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
          <Card className="text-center">
            <CardContent className="p-4">
              <Building className="mx-auto mb-2 w-8 h-8 text-blue-500" />
              <p className="font-semibold text-2xl">{favoriteHotels.length}</p>
              <p className="text-muted-foreground text-sm">Hotels</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Plane className="mx-auto mb-2 w-8 h-8 text-green-500" />
              <p className="font-semibold text-2xl">{favoriteFlights.length}</p>
              <p className="text-muted-foreground text-sm">Flights</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Users className="mx-auto mb-2 w-8 h-8 text-purple-500" />
              <p className="font-semibold text-2xl">{favoriteTours.length}</p>
              <p className="text-muted-foreground text-sm">Tours</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <MapPin className="mx-auto mb-2 w-8 h-8 text-red-500" />
              <p className="font-semibold text-2xl">
                {favoriteDestinations.length}
              </p>
              <p className="text-muted-foreground text-sm">Destinations</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Camera className="mx-auto mb-2 w-8 h-8 text-orange-500" />
              <p className="font-semibold text-2xl">
                {favoriteAttractions.length}
              </p>
              <p className="text-muted-foreground text-sm">Attractions</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Clock className="mx-auto mb-2 w-8 h-8 text-teal-500" />
              <p className="font-semibold text-2xl">
                {favoriteActivities.length}
              </p>
              <p className="text-muted-foreground text-sm">Activities</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Car className="mx-auto mb-2 w-8 h-8 text-indigo-500" />
              <p className="font-semibold text-2xl">
                {favoriteVehicles.length}
              </p>
              <p className="text-muted-foreground text-sm">Vehicles</p>
            </CardContent>
          </Card>
        </div>

        {/* Favorites Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-7 mb-8 w-full">
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="flights">Flights</TabsTrigger>
            <TabsTrigger value="tours">Tours</TabsTrigger>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="attractions">Attractions</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          </TabsList>

          {/* Hotels Tab */}
          <TabsContent value="hotels">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Favorite Hotels ({favoriteHotels.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favoriteHotels.length === 0 ? (
                  <div className="py-12 text-center">
                    <Building className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
                    <h3 className="mb-2 font-semibold text-lg">
                      No favorite hotels yet
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      Start exploring hotels to add them to your favorites
                    </p>
                    <Button onClick={() => router.push("/hotels")}>
                      Browse Hotels
                    </Button>
                  </div>
                ) : (
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {favoriteHotels.map((hotel) => (
                      <Card
                        key={hotel.id}
                        className="group hover:shadow-lg p-0 transition-shadow"
                      >
                        <div className="relative">
                          <div className="relative rounded-t-lg overflow-hidden aspect-video">
                            <Image
                              src={hotel.images[0]}
                              alt={hotel.name}
                              fill
                              className="transition-transform duration-300 object-cover group-hover:scale-105"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="top-2 right-2 absolute bg-white/90 hover:bg-white"
                            onClick={() =>
                              handleRemoveFavorite("hotels", hotel.id)
                            }
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg truncate">
                              {hotel.name}
                            </h3>
                            <div className="flex items-center gap-1">
                              {[...Array(hotel.starRating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 mb-2 text-muted-foreground text-sm">
                            <MapPin className="w-4 h-4" />
                            {hotel.location.city}, {hotel.location.country}
                          </div>
                          <p className="mb-3 text-muted-foreground text-sm line-clamp-2">
                            {hotel.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="font-semibold text-lg">
                                {formatPrice(hotel.pricing.priceRange.min)}
                              </span>
                              <span className="text-muted-foreground text-sm">
                                {" "}
                                /night
                              </span>
                            </div>
                            <Button
                              size="sm"
                              onClick={() => router.push(`/hotels/${hotel.id}`)}
                            >
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Flights Tab */}
          <TabsContent value="flights">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  Favorite Flights ({favoriteFlights.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favoriteFlights.length === 0 ? (
                  <div className="py-12 text-center">
                    <Plane className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
                    <h3 className="mb-2 font-semibold text-lg">
                      No favorite flights yet
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      Start exploring flights to add them to your favorites
                    </p>
                    <Button onClick={() => router.push("/flights")}>
                      Browse Flights
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {favoriteFlights.map((flight) => (
                      <Card
                        key={flight.id}
                        className="group hover:shadow-lg p-0 transition-shadow"
                      >
                        <CardContent className="-mt-5 p-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-4">
                                  <div className="text-center">
                                    <p className="font-semibold text-lg">
                                      {flight.origin.code}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                      {flight.departure.time}
                                    </p>
                                    <p className="text-muted-foreground text-xs">
                                      {flight.origin.city}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-center">
                                    <div className="flex-1 border-t border-dashed"></div>
                                    <Plane className="mx-2 w-5 h-5 text-muted-foreground" />
                                    <div className="flex-1 border-t border-dashed"></div>
                                  </div>
                                  <div className="text-center">
                                    <p className="font-semibold text-lg">
                                      {flight.destination.code}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                      {flight.arrival.time}
                                    </p>
                                    <p className="text-muted-foreground text-xs">
                                      {flight.destination.city}
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    handleRemoveFavorite("flights", flight.id)
                                  }
                                >
                                  <Trash2 className="w-4 h-4 text-red-500" />
                                </Button>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex gap-4 text-muted-foreground text-sm">
                                  <span>Airline: {flight.airline}</span>
                                  <span>Duration: {flight.duration}</span>
                                  <span>Stops: {flight.stops}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <span className="font-semibold text-lg">
                                    {formatPrice(flight.pricing.economy)}
                                  </span>
                                  <Button
                                    size="sm"
                                    onClick={() =>
                                      router.push(`/flights/${flight.id}`)
                                    }
                                  >
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tours Tab */}
          <TabsContent value="tours">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Favorite Tours ({favoriteTours.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favoriteTours.length === 0 ? (
                  <div className="py-12 text-center">
                    <Users className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
                    <h3 className="mb-2 font-semibold text-lg">
                      No favorite tours yet
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      Start exploring tours to add them to your favorites
                    </p>
                    <Button onClick={() => router.push("/tours")}>
                      Browse Tours
                    </Button>
                  </div>
                ) : (
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {favoriteTours.map((tour) => (
                      <Card
                        key={tour.id}
                        className="group hover:shadow-lg p-0 transition-shadow"
                      >
                        <div className="relative">
                          <div className="relative rounded-t-lg overflow-hidden aspect-video">
                            <Image
                              src={tour.images[0]}
                              alt={tour.title}
                              fill
                              className="transition-transform duration-300 object-cover group-hover:scale-105"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="top-2 right-2 absolute bg-white/90 hover:bg-white"
                            onClick={() =>
                              handleRemoveFavorite("tours", tour.id)
                            }
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg truncate">
                              {tour.title}
                            </h3>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm">
                                {tour.reviews.rating}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 mb-2 text-muted-foreground text-sm">
                            <MapPin className="w-4 h-4" />
                            {tour.location.city}, {tour.location.country}
                          </div>
                          <div className="flex items-center gap-4 mb-3 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {tour.duration}
                            </div>
                            <Badge variant="outline">{tour.type}</Badge>
                          </div>
                          <p className="mb-3 text-muted-foreground text-sm line-clamp-2">
                            {tour.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="font-semibold text-lg">
                                {formatPrice(tour.pricing.adult)}
                              </span>
                              <span className="text-muted-foreground text-sm">
                                {" "}
                                /person
                              </span>
                            </div>
                            <Button
                              size="sm"
                              onClick={() => router.push(`/tours/${tour.id}`)}
                            >
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Destinations Tab */}
          <TabsContent value="destinations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Favorite Destinations ({favoriteDestinations.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favoriteDestinations.length === 0 ? (
                  <div className="py-12 text-center">
                    <MapPin className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
                    <h3 className="mb-2 font-semibold text-lg">
                      No favorite destinations yet
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      Start exploring destinations to add them to your favorites
                    </p>
                    <Button onClick={() => router.push("/destinations")}>
                      Browse Destinations
                    </Button>
                  </div>
                ) : (
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {favoriteDestinations.map((destination) => (
                      <Card
                        key={destination.id}
                        className="group hover:shadow-lg p-0 transition-shadow"
                      >
                        <div className="relative">
                          <div className="relative rounded-t-lg overflow-hidden aspect-video">
                            <Image
                              src={destination.images[0]}
                              alt={destination.name}
                              fill
                              className="transition-transform duration-300 object-cover group-hover:scale-105"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="top-2 right-2 absolute bg-white/90 hover:bg-white"
                            onClick={() =>
                              handleRemoveFavorite(
                                "destinations",
                                destination.id
                              )
                            }
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="mb-2 font-semibold text-lg">
                            {destination.name}
                          </h3>
                          <div className="flex items-center gap-1 mb-2 text-muted-foreground text-sm">
                            <MapPin className="w-4 h-4" />
                            {destination.country}
                          </div>
                          <p className="mb-3 text-muted-foreground text-sm line-clamp-2">
                            {destination.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                              {destination.highlights
                                .slice(0, 2)
                                .map((highlight, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {highlight}
                                  </Badge>
                                ))}
                            </div>
                            <Button
                              size="sm"
                              onClick={() =>
                                router.push(`/destinations/${destination.id}`)
                              }
                            >
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Attractions Tab */}
          <TabsContent value="attractions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Favorite Attractions ({favoriteAttractions.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favoriteAttractions.length === 0 ? (
                  <div className="py-12 text-center">
                    <Camera className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
                    <h3 className="mb-2 font-semibold text-lg">
                      No favorite attractions yet
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      Start exploring attractions to add them to your favorites
                    </p>
                    <Button onClick={() => router.push("/attractions")}>
                      Browse Attractions
                    </Button>
                  </div>
                ) : (
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {favoriteAttractions.map((attraction) => (
                      <Card
                        key={attraction.id}
                        className="group hover:shadow-lg p-0 transition-shadow"
                      >
                        <div className="relative">
                          <div className="relative rounded-t-lg overflow-hidden aspect-video">
                            <Image
                              src={attraction.images[0]}
                              alt={attraction.name}
                              fill
                              className="transition-transform duration-300 object-cover group-hover:scale-105"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="top-2 right-2 absolute bg-white/90 hover:bg-white"
                            onClick={() =>
                              handleRemoveFavorite("attractions", attraction.id)
                            }
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg truncate">
                              {attraction.name}
                            </h3>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm">
                                {attraction.rating}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 mb-2 text-muted-foreground text-sm">
                            <MapPin className="w-4 h-4" />
                            {attraction.location.city},{" "}
                            {attraction.location.country}
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline">
                              {attraction.category}
                            </Badge>
                            <Badge variant="outline">{attraction.type}</Badge>
                          </div>
                          <p className="mb-3 text-muted-foreground text-sm line-clamp-2">
                            {attraction.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="font-semibold text-lg">
                                {formatPrice(attraction.pricing.adult)}
                              </span>
                              <span className="text-muted-foreground text-sm">
                                {" "}
                                /person
                              </span>
                            </div>
                            <Button
                              size="sm"
                              onClick={() =>
                                router.push(`/attractions/${attraction.id}`)
                              }
                            >
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Favorite Activities ({favoriteActivities.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favoriteActivities.length === 0 ? (
                  <div className="py-12 text-center">
                    <Clock className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
                    <h3 className="mb-2 font-semibold text-lg">
                      No favorite activities yet
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      Start exploring activities to add them to your favorites
                    </p>
                    <Button onClick={() => router.push("/activities")}>
                      Browse Activities
                    </Button>
                  </div>
                ) : (
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {favoriteActivities.map((activity) => (
                      <Card
                        key={activity.id}
                        className="group hover:shadow-lg p-0 transition-shadow"
                      >
                        <div className="relative">
                          <div className="relative rounded-t-lg overflow-hidden aspect-video">
                            <Image
                              src={activity.images[0]}
                              alt={activity.name}
                              fill
                              className="transition-transform duration-300 object-cover group-hover:scale-105"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="top-2 right-2 absolute bg-white/90 hover:bg-white"
                            onClick={() =>
                              handleRemoveFavorite("activities", activity.id)
                            }
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg truncate">
                              {activity.name}
                            </h3>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm">{activity.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 mb-2 text-muted-foreground text-sm">
                            <MapPin className="w-4 h-4" />
                            {activity.location.city},{" "}
                            {activity.location.country}
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline">{activity.category}</Badge>
                            <Badge
                              variant="outline"
                              className={
                                activity.difficulty === "Easy"
                                  ? "bg-green-100 text-green-800"
                                  : activity.difficulty === "Moderate"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : activity.difficulty === "Challenging"
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-red-100 text-red-800"
                              }
                            >
                              {activity.difficulty}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 mb-3 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {activity.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {activity.groupSize.min}-{activity.groupSize.max}
                            </div>
                          </div>
                          <p className="mb-3 text-muted-foreground text-sm line-clamp-2">
                            {activity.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="font-semibold text-lg">
                                {formatPrice(activity.pricing.adult)}
                              </span>
                              <span className="text-muted-foreground text-sm">
                                {" "}
                                /person
                              </span>
                            </div>
                            <Button
                              size="sm"
                              onClick={() =>
                                router.push(`/activities/${activity.id}`)
                              }
                            >
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vehicles Tab */}
          <TabsContent value="vehicles">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Favorite Vehicles ({favoriteVehicles.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favoriteVehicles.length === 0 ? (
                  <div className="py-12 text-center">
                    <Car className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
                    <h3 className="mb-2 font-semibold text-lg">
                      No favorite vehicles yet
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      Start exploring vehicles to add them to your favorites
                    </p>
                    <Button onClick={() => router.push("/vehicles")}>
                      Browse Vehicles
                    </Button>
                  </div>
                ) : (
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {favoriteVehicles.map((vehicle) => (
                      <Card
                        key={vehicle.id}
                        className="group hover:shadow-lg p-0 transition-shadow"
                      >
                        <div className="relative">
                          <div className="relative rounded-t-lg overflow-hidden aspect-video">
                            <Image
                              src={vehicle.images[0]}
                              alt={vehicle.name}
                              fill
                              className="transition-transform duration-300 object-cover group-hover:scale-105"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="top-2 right-2 absolute bg-white/90 hover:bg-white"
                            onClick={() =>
                              handleRemoveFavorite("vehicles", vehicle.id)
                            }
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg truncate">
                              {vehicle.name}
                            </h3>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm">{vehicle.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 mb-2 text-muted-foreground text-sm">
                            <MapPin className="w-4 h-4" />
                            {vehicle.availability.locations[0] ||
                              "Multiple locations"}
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline">{vehicle.type}</Badge>
                            <Badge variant="outline">{vehicle.category}</Badge>
                          </div>
                          <div className="flex items-center gap-4 mb-3 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {vehicle.specifications.seatingCapacity ||
                                "N/A"}{" "}
                              passengers
                            </div>
                            <span>
                              {vehicle.specifications.transmission || "N/A"}
                            </span>
                          </div>
                          <p className="mb-3 text-muted-foreground text-sm line-clamp-2">
                            {vehicle.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="font-semibold text-lg">
                                {formatPrice(vehicle.pricing.daily)}
                              </span>
                              <span className="text-muted-foreground text-sm">
                                {" "}
                                /day
                              </span>
                            </div>
                            <Button
                              size="sm"
                              onClick={() =>
                                router.push(`/vehicles/${vehicle.id}`)
                              }
                            >
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
