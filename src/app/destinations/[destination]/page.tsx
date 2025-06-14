"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrency } from "@/context/CurrencyContext";
import { mockActivities } from "@/data/activities";
import { mockAttractions } from "@/data/attractions";
import { mockDestinations } from "@/data/destinations";
import { mockTours } from "@/data/tours";
import { formatToSlug } from "@/lib/utils/format";
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
  Thermometer,
  Users,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DestinationDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find destination by URL param
  const destinationSlug = params.destination as string;
  const initialDestination = mockDestinations.find(
    (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === destinationSlug
  );

  const [currentDestination, setCurrentDestination] =
    useState(initialDestination);

  // Update current destination when URL param changes
  useEffect(() => {
    const foundDestination = mockDestinations.find(
      (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === destinationSlug
    );
    setCurrentDestination(foundDestination);
    setSelectedImageIndex(0); // Reset image index when destination changes
  }, [destinationSlug]);

  // Handle destination change from selector
  const handleDestinationChange = (newDestinationId: string) => {
    const newDestination = mockDestinations.find(
      (dest) => dest.id === newDestinationId
    );
    if (newDestination) {
      const newSlug = newDestination.name.toLowerCase().replace(/\s+/g, "-");
      // Update URL without reloading the page
      router.replace(`/destinations/${newSlug}`, { scroll: false });
    }
  };

  if (!currentDestination) {
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

        {/* Destination Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <label className="font-medium text-sm">Choose Destination:</label>
            <Select
              value={currentDestination?.id || ""}
              onValueChange={handleDestinationChange}
            >
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select a destination" />
              </SelectTrigger>
              <SelectContent>
                {mockDestinations.map((dest) => (
                  <SelectItem key={dest.id} value={dest.id}>
                    {dest.name}, {dest.country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <div className="relative h-96">
            <Image
              src={currentDestination.images[selectedImageIndex]}
              alt={currentDestination.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="bottom-6 left-6 absolute text-white">
              <h1 className="mb-2 font-bold text-4xl">
                {currentDestination.name}
              </h1>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{currentDestination.country}</span>
                <Separator
                  orientation="vertical"
                  className="bg-white/30 mx-2 h-6"
                />
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex gap-2 mt-4">
            {currentDestination.images
              .slice(0, 4)
              .map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden ${
                    selectedImageIndex === index ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${currentDestination.name} ${index + 1}`}
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
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Info className="w-5 h-5" />
                      About {currentDestination.name}
                    </div>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">
                      {currentDestination.description}
                    </p>

                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Climate & Weather</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Thermometer className="w-4 h-4 text-orange-500" />
                            <span className="text-sm">
                              Avg. Temperature:{" "}
                              {currentDestination.climate.averageTemperature}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">
                              Best time:{" "}
                              {currentDestination.bestTimeToVisit.join(", ")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Popular With</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentDestination.popularWith.map(
                            (group: string, index: number) => (
                              <Badge key={index} variant="secondary">
                                <Users className="mr-1 w-3 h-3" />
                                {group}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <MapPin className="w-5 h-5" />
                      Location & Getting There
                    </div>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-semibold">Transportation</h4>
                        <ul className="space-y-2 text-sm">
                          {currentDestination.transportation.airports.map(
                            (airport: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Plane className="w-4 h-4 text-blue-500" />
                                {airport}
                              </li>
                            )
                          )}
                          {currentDestination.transportation.publicTransport.map(
                            (transport: string, index: number) => (
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
                              WiFi:{" "}
                              {currentDestination.connectivity.wifiAvailability}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-green-500" />
                            <span>
                              Internet:{" "}
                              {currentDestination.connectivity.internetSpeed}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="things-to-do" className="space-y-6">
                <div className="gap-6 grid grid-cols-1">
                  <Card className="max-h-[30em] overflow-y-auto">
                    <div className="px-6">
                      <div className="mb-4 font-semibold text-lg">Tours</div>
                      <div className="space-y-3">
                        {relatedTours.map((tour) => (
                          <div
                            key={tour.id}
                            className="group pb-3 border-slate-200 dark:border-slate-700 last:border-0 border-b"
                            onClick={() =>
                              router.push(`/tours/${formatToSlug(tour.title)}`)
                            }
                          >
                            <h4 className="font-semibold text-sm group-hover:no-underline">
                              {tour.title}
                            </h4>
                            <p className="text-slate-600 text-xs line-clamp-2">
                              {tour.description}
                            </p>
                            <div className="flex justify-between">
                              <p className="mt-1 font-medium text-sm">
                                <strong>Adults: </strong>
                                {formatPrice(tour.pricing.adult)}
                              </p>
                              <p className="mt-1 font-medium text-sm">
                                <strong>Children: </strong>
                                {formatPrice(tour.pricing.child)}
                              </p>
                              <p className="mt-1 font-medium text-sm">
                                <strong>Seniors: </strong>
                                {formatPrice(tour.pricing.senior)}
                              </p>
                              {tour.pricing.student && (
                                <p className="mt-1 font-medium text-sm">
                                  <strong>Students: </strong>
                                  {formatPrice(tour.pricing.student)}
                                </p>
                              )}
                              {tour.pricing.family && (
                                <p className="mt-1 font-medium text-sm">
                                  <strong>Family: </strong>
                                  {formatPrice(tour.pricing.family)}
                                </p>
                              )}
                            </div>
                            <p className="text-slate-500 text-xs">
                              {tour.type} | {tour.duration}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                        onClick={() => router.push(`/tours`)}
                      >
                        View all tours
                      </Button>
                    </div>
                  </Card>

                  <Card className="max-h-[30em] overflow-y-auto">
                    <div className="px-6">
                      <div className="mb-4 font-semibold text-lg">
                        Activities
                      </div>
                      <div className="space-y-3">
                        {relatedActivities.map((activity) => (
                          <div
                            key={activity.id}
                            className="group pb-3 border-slate-200 dark:border-slate-700 last:border-0 border-b"
                            onClick={() =>
                              router.push(
                                `/activities/${formatToSlug(activity.name)}`
                              )
                            }
                          >
                            <h4 className="font-semibold text-sm group-hover:no-underline">
                              {activity.name}
                            </h4>
                            <p className="text-slate-600 text-xs line-clamp-2">
                              {activity.description}
                            </p>
                            <div className="flex justify-between items-center mt-1">
                              <p className="font-medium text-sm">
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
                        onClick={() => router.push(`/activities`)}
                      >
                        View all activities
                      </Button>
                    </div>
                  </Card>

                  <Card className="max-h-[30em] overflow-y-auto">
                    <div className="px-6">
                      <div className="mb-4 font-semibold text-lg">
                        Attractions
                      </div>
                      <div className="space-y-3">
                        {relatedAttractions.map((attraction) => (
                          <div
                            key={attraction.id}
                            className="group pb-3 border-slate-200 dark:border-slate-700 last:border-0 border-b"
                            onClick={() =>
                              router.push(
                                `/attractions/${formatToSlug(attraction.name)}`
                              )
                            }
                          >
                            <h4 className="font-semibold text-sm group-hover:no-underline">
                              {attraction.name}
                            </h4>
                            <p className="text-slate-600 text-xs line-clamp-2">
                              {attraction.description}
                            </p>
                            <div className="flex justify-between items-center mt-1">
                              <p className="font-medium text-sm">
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
                        onClick={() => router.push(`/attractions`)}
                      >
                        View all attractions
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="practical" className="space-y-6">
                <Card>
                  <div className="space-y-4 px-6">
                    <div className="font-semibold text-lg">
                      Practical Information
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Visa Requirements</h4>
                      <p className="text-slate-600 text-sm">
                        {currentDestination.visaRequirements}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="mb-2 font-semibold">Safety & Health</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Safety Level:</strong>{" "}
                          {currentDestination.safety.crimeRate}
                        </p>
                        <p>
                          <strong>Health Risks:</strong>{" "}
                          {currentDestination.safety.healthRisks.join(", ") ||
                            "None reported"}
                        </p>
                        <p>
                          <strong>Emergency Number:</strong>{" "}
                          {currentDestination.safety.emergencyNumber}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="mb-2 font-semibold">Currency & Costs</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Currency:</strong>{" "}
                          {currentDestination.currency.name}
                        </p>
                        <p>
                          <strong>Average Daily Budget:</strong>{" "}
                          {formatPrice(
                            currentDestination.pricing.averageDailyBudget
                          )}
                        </p>
                        <p>
                          <strong>Accommodation:</strong>{" "}
                          {formatPrice(
                            currentDestination.pricing.accommodationRange.budget
                          )}{" "}
                          -{" "}
                          {formatPrice(
                            currentDestination.pricing.accommodationRange.luxury
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="culture" className="space-y-6">
                <Card>
                  <div className="space-y-4 px-6">
                    <div className="font-semibold text-lg">
                      Cultural Information
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentDestination.language.map(
                          (language: string, index: number) => (
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
                        {currentDestination.cuisine.map(
                          (food: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {food}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold">
                        Cultural Highlights
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {currentDestination.culture.traditions.map(
                          (tradition: string, index: number) => (
                            <li key={index} className="flex items-start gap-2">
                              <Heart className="flex-shrink-0 mt-0.5 w-4 h-4 text-red-500" />
                              {tradition}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <div className="px-6">
                <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <DollarSign className="w-5 h-5" />
                  Budget Guide
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Daily Budget</span>
                    <span className="font-semibold">
                      {formatPrice(
                        currentDestination.pricing.averageDailyBudget
                      )}
                    </span>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Budget Accommodation</span>
                      <span>
                        {formatPrice(
                          currentDestination.pricing.accommodationRange.budget
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mid-range Accommodation</span>
                      <span>
                        {formatPrice(
                          currentDestination.pricing.accommodationRange.midRange
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Luxury Accommodation</span>
                      <span>
                        {formatPrice(
                          currentDestination.pricing.accommodationRange.luxury
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-2 px-6 text-sm">
                <div className="mb-4 font-semibold text-lg">Quick Facts</div>
                <div className="flex justify-between">
                  <span>Best time to visit</span>
                  <span>{currentDestination.bestTimeToVisit[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time zone</span>
                  <span>{currentDestination.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Currency</span>
                  <span>{currentDestination.currency.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Main language</span>
                  <span>{currentDestination.language[0]}</span>
                </div>
              </div>
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
