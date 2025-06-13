"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrency } from "@/context/CurrencyContext";
import { mockActivities } from "@/data/activities";
import { mockAttractions } from "@/data/attractions";
import { mockDestinations } from "@/data/destinations";
import { mockTours } from "@/data/tours";
import {
  ArrowLeft,
  Calendar,
  Compass,
  DollarSign,
  Globe,
  Heart,
  Info,
  MapPin,
  Plane,
  Star,
  Thermometer,
  Users,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function DestinationDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find destination by URL param
  const destinationSlug = params.destination as string;
  const destination = mockDestinations.find(
    (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === destinationSlug
  );

  if (!destination) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Destination not found</h1>
            <Button onClick={() => router.push("/destinations")}>
              Browse all destinations
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Filter related content
  const relatedTours = mockTours.slice(0, 3);
  const relatedActivities = mockActivities.slice(0, 3);
  const relatedAttractions = mockAttractions.slice(0, 3);

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to destinations
        </Button>

        {/* Hero Section */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <div className="relative h-96">
            <Image
              src={destination.images[selectedImageIndex]}
              alt={destination.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="bottom-6 left-6 absolute text-white">
              <h1 className="mb-2 font-bold text-4xl">{destination.name}</h1>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{destination.country}</span>
                <Separator
                  orientation="vertical"
                  className="bg-white/30 mx-2 h-6"
                />
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>{destination.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex gap-2 mt-4">
            {destination.images.slice(0, 4).map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden ${
                  selectedImageIndex === index ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`${destination.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="things-to-do">Things to Do</TabsTrigger>
                <TabsTrigger value="practical">Practical Info</TabsTrigger>
                <TabsTrigger value="culture">Culture</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      About {destination.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">
                      {destination.description}
                    </p>

                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Climate & Weather</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Thermometer className="w-4 h-4 text-orange-500" />
                            <span className="text-sm">
                              Avg. Temperature:{" "}
                              {destination.climate.averageTemperature}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">
                              Best time:{" "}
                              {destination.bestTimeToVisit.join(", ")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Popular With</h4>
                        <div className="flex flex-wrap gap-2">
                          {destination.popularWith.map((group, index) => (
                            <Badge key={index} variant="secondary">
                              <Users className="mr-1 w-3 h-3" />
                              {group}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Location & Getting There
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-semibold">Transportation</h4>
                        <ul className="space-y-2 text-sm">
                          {destination.transportation.airports.map(
                            (airport, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Plane className="w-4 h-4 text-blue-500" />
                                {airport}
                              </li>
                            )
                          )}
                          {destination.transportation.publicTransport.map(
                            (transport, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Compass className="w-4 h-4 text-green-500" />
                                {transport}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold">Connectivity</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-blue-500" />
                            <span>
                              WiFi: {destination.connectivity.wifiAvailability}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-green-500" />
                            <span>
                              Internet: {destination.connectivity.internetSpeed}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="things-to-do" className="space-y-6">
                <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {relatedTours.map((tour) => (
                          <div
                            key={tour.id}
                            className="pb-3 border-slate-200 dark:border-slate-700 last:border-0 border-b"
                          >
                            <h4 className="font-semibold text-sm">
                              {tour.title}
                            </h4>
                            <p className="text-slate-600 text-xs line-clamp-2">
                              {tour.description}
                            </p>
                            <p className="mt-1 font-medium text-blue-600 text-sm">
                              {tour.price}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                        onClick={() =>
                          router.push(`/destinations/${destinationSlug}/tours`)
                        }
                      >
                        View all tours
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {relatedActivities.map((activity) => (
                          <div
                            key={activity.id}
                            className="pb-3 border-slate-200 dark:border-slate-700 last:border-0 border-b"
                          >
                            <h4 className="font-semibold text-sm">
                              {activity.name}
                            </h4>
                            <p className="text-slate-600 text-xs line-clamp-2">
                              {activity.description}
                            </p>
                            <div className="flex justify-between items-center mt-1">
                              <p className="font-medium text-blue-600 text-sm">
                                {formatPrice(activity.pricing.adult)}
                              </p>
                              <Badge variant="outline" className="text-xs">
                                {activity.difficulty}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                        onClick={() =>
                          router.push(
                            `/destinations/${destinationSlug}/activities`
                          )
                        }
                      >
                        View all activities
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Attractions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {relatedAttractions.map((attraction) => (
                          <div
                            key={attraction.id}
                            className="pb-3 border-slate-200 dark:border-slate-700 last:border-0 border-b"
                          >
                            <h4 className="font-semibold text-sm">
                              {attraction.name}
                            </h4>
                            <p className="text-slate-600 text-xs line-clamp-2">
                              {attraction.description}
                            </p>
                            <div className="flex justify-between items-center mt-1">
                              <p className="font-medium text-blue-600 text-sm">
                                {formatPrice(attraction.pricing.adult)}
                              </p>
                              <Badge variant="outline" className="text-xs">
                                {attraction.type}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                        onClick={() =>
                          router.push(
                            `/destinations/${destinationSlug}/attractions`
                          )
                        }
                      >
                        View all attractions
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="practical" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Practical Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold">Visa Requirements</h4>
                      <p className="text-slate-600 text-sm">
                        {destination.visaRequirements}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="mb-2 font-semibold">Safety & Health</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Safety Level:</strong>{" "}
                          {destination.safety.crimeRate}
                        </p>
                        <p>
                          <strong>Health Risks:</strong>{" "}
                          {destination.safety.healthRisks.join(", ") ||
                            "None reported"}
                        </p>
                        <p>
                          <strong>Emergency Number:</strong>{" "}
                          {destination.safety.emergencyNumber}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="mb-2 font-semibold">Currency & Costs</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Currency:</strong> {destination.currency.name}
                        </p>
                        <p>
                          <strong>Average Daily Budget:</strong>{" "}
                          {formatPrice(destination.pricing.averageDailyBudget)}
                        </p>
                        <p>
                          <strong>Accommodation:</strong>{" "}
                          {formatPrice(
                            destination.pricing.accommodationRange.budget
                          )}{" "}
                          -{" "}
                          {formatPrice(
                            destination.pricing.accommodationRange.luxury
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="culture" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cultural Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.culture.languages.map(
                          (language, index) => (
                            <Badge key={index} variant="secondary">
                              {language}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold">Cuisine</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.culture.cuisine.map((food, index) => (
                          <Badge key={index} variant="outline">
                            {food}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold">
                        Cultural Highlights
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {destination.culture.traditions.map(
                          (tradition, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Heart className="flex-shrink-0 mt-0.5 w-4 h-4 text-red-500" />
                              {tradition}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Budget Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Daily Budget</span>
                    <span className="font-semibold">
                      {formatPrice(destination.pricing.averageDailyBudget)}
                    </span>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Budget Accommodation</span>
                      <span>
                        {formatPrice(
                          destination.pricing.accommodationRange.budget
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mid-range Accommodation</span>
                      <span>
                        {formatPrice(
                          destination.pricing.accommodationRange.midRange
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Luxury Accommodation</span>
                      <span>
                        {formatPrice(
                          destination.pricing.accommodationRange.luxury
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Best time to visit</span>
                  <span>{destination.bestTimeToVisit[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time zone</span>
                  <span>{destination.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Currency</span>
                  <span>{destination.currency.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Main language</span>
                  <span>{destination.culture.languages[0]}</span>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" size="lg">
              Plan Your Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
