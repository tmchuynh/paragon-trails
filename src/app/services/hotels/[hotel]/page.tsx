"use client";

import { useState, useEffect } from "react";
import { getCityHotels, getHotelRooms } from "@/lib/utils/get/hotels";
import { Hotel, RoomOption } from "@/lib/interfaces/services/rentals";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loading from "@/components/Loading";
import { MapPin, Clock, Phone, Mail, Check, X, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import Link from "next/link";
import React from "react";

export default function HotelDetailsPage({
  params,
}: {
  params: { hotel: string } | Promise<{ hotel: string }>;
}) {
  // Unwrap params if it's a Promise (Next.js 14+ convention)
  const unwrappedParams =
    typeof params.then === "function" ? React.use(params) : params;
  const searchParams = useSearchParams();
  const hotelId = searchParams.get("hotel");
  const citySlug = unwrappedParams.hotel; // Use unwrapped params

  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [rooms, setRooms] = useState<RoomOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHotelData() {
      if (!hotelId || !citySlug) {
        setError("Invalid hotel ID or city");
        setIsLoading(false);
        return;
      }

      try {
        // Load all hotels for this city
        const hotels = await getCityHotels(citySlug);

        // Find the specific hotel by ID
        const selectedHotel = hotels.find((h) => h.id === hotelId);

        if (!selectedHotel) {
          setError("Hotel not found");
        } else {
          setHotel(selectedHotel);

          // Load room options if available
          try {
            const hotelRooms = await getHotelRooms(citySlug, hotelId);
            setRooms(hotelRooms);
          } catch (e) {
            console.warn("Could not load rooms:", e);
            // Not setting an error here as the hotel itself was found
          }
        }
      } catch (e) {
        console.error("Error loading hotel:", e);
        setError("Failed to load hotel information");
      } finally {
        setIsLoading(false);
      }
    }

    loadHotelData();
  }, [hotelId, citySlug]);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !hotel) {
    return (
      <div className="mx-auto pt-12 w-10/12 md:w-11/12">
        <div className="bg-muted/50 p-8 rounded-lg text-center">
          <h2 className="mb-4 font-bold text-2xl">
            {error || "Hotel not found"}
          </h2>
          <p className="mb-6">
            We couldn't find the hotel you were looking for. Please check the
            URL or go back to browse all hotels.
          </p>
          <Link href="/services/hotels">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Hotels
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Format city name for display
  const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="mb-6">
        <Link
          href="/services/hotels"
          className="inline-flex items-center mb-4 text-primary hover:underline"
        >
          <ArrowLeft className="mr-1 w-4 h-4" />
          Back to Hotels
        </Link>

        <div className="flex md:flex-row flex-col justify-between md:items-center">
          <div>
            <h1 className="font-bold text-3xl">{hotel.name}</h1>
            <h5 className="text-gray-500">
              {cityName} • {hotel.accommodationType}
            </h5>
          </div>

          {hotel.isPopular && (
            <Badge
              className="mt-2 md:mt-0 md:ml-4 self-start"
              variant="default"
            >
              Popular Hotel
            </Badge>
          )}
        </div>

        <div className="mt-2">
          {displayRatingStars(hotel.rating, 5, {
            size: "lg",
            showRatingNumber: true,
            containerClassName: "justify-start",
          })}
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        {/* Main content */}
        <div className="space-y-6 lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
              {rooms.length > 0 && (
                <TabsTrigger value="rooms">Room Options</TabsTrigger>
              )}
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>About This Hotel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <span>
                        {hotel.address}, {cityName}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span>
                        Check-in: {hotel.checkInTime} • Check-out:{" "}
                        {hotel.checkOutTime}
                      </span>
                    </div>

                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-4">
                      <div className="flex flex-col space-y-2">
                        <h5 className="font-medium">Property Features</h5>
                        <div>
                          <div className="flex items-center gap-2">
                            {hotel.isPetFriendly ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <X className="w-5 h-5 text-red-500" />
                            )}
                            <span>
                              {hotel.isPetFriendly
                                ? "Pet friendly"
                                : "No pets allowed"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span>
                              Smoking policy: {hotel.policies?.smoking}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <h5 className="font-medium">Rooms Information</h5>
                        <p>{hotel.roomsAvailable} rooms available</p>
                        <p>Currency: {hotel.currency}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Accessibility Features */}
              {hotel.accessibilityFeatures &&
                hotel.accessibilityFeatures.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Accessibility Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
                        {hotel.accessibilityFeatures.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
            </TabsContent>

            {/* Amenities Tab */}
            <TabsContent value="amenities">
              <Card>
                <CardHeader>
                  <CardTitle>Hotel Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  {hotel.amenities && hotel.amenities.length > 0 ? (
                    <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                      {hotel.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No amenities information available for this hotel.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Policies Tab */}
            <TabsContent value="policies">
              <Card>
                <CardHeader>
                  <CardTitle>Hotel Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="mb-2 font-medium">Cancellation Policy</h5>
                      <p>
                        {hotel.policies?.cancellation ||
                          "No cancellation policy information available."}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h5 className="mb-2 font-medium">Smoking Policy</h5>
                      <p>
                        {hotel.policies?.smoking ||
                          "No smoking policy information available."}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h5 className="mb-2 font-medium">Check-in/Check-out</h5>
                      <p>Check-in time: {hotel.checkInTime}</p>
                      <p>Check-out time: {hotel.checkOutTime}</p>
                    </div>

                    <Separator />

                    <div>
                      <h5 className="mb-2 font-medium">Pet Policy</h5>
                      <p>
                        {hotel.isPetFriendly
                          ? "Pets are welcome at this hotel."
                          : "Pets are not allowed at this hotel."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Rooms Tab (only if rooms data is available) */}
            {rooms.length > 0 && (
              <TabsContent value="rooms">
                <Card>
                  <CardHeader>
                    <CardTitle>Room Options</CardTitle>
                    <CardDescription>
                      Available room types at {hotel.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {rooms.map((room) => (
                        <div
                          key={room.id}
                          className="p-4 border border-border rounded-lg"
                        >
                          <div className="flex md:flex-row flex-col justify-between md:items-center mb-4">
                            <h3 className="font-bold">{room.name}</h3>
                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                              <Badge variant="outline">
                                {room.maxOccupancy} Guests
                              </Badge>
                              <Badge
                                variant={
                                  room.availability > 5
                                    ? "default"
                                    : "destructive"
                                }
                              >
                                {room.availability} Available
                              </Badge>
                            </div>
                          </div>

                          <p className="mb-3 text-gray-600">
                            {room.description}
                          </p>

                          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mb-4">
                            <div>
                              <h5 className="mb-2 font-medium">Features</h5>
                              <div className="space-y-1">
                                {room.features.map((feature) => (
                                  <div
                                    key={feature}
                                    className="flex items-center gap-2"
                                  >
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="mb-2 font-medium">Room Details</h5>
                              <p>
                                <span className="font-medium">Size:</span>{" "}
                                {room.squareFootage} sq ft
                              </p>
                              <p>
                                <span className="font-medium">Bed Type:</span>{" "}
                                {room.bedType}
                              </p>
                              <p>
                                <span className="font-medium">Price:</span>{" "}
                                {room.pricePerNight} {hotel.currency}
                              </p>
                            </div>
                          </div>

                          <Button className="w-full sm:w-auto">
                            Book This Room
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hotel.contact?.contactPhone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <span>{hotel.contact.contactPhone}</span>
                  </div>
                )}

                {hotel.contact?.contactEmail && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span>{hotel.contact.contactEmail}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span>
                    {hotel.address}, {cityName}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Inquire About Availability</Button>
            </CardFooter>
          </Card>

          {/* Hotel Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle>Hotel Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium">{hotel.accommodationType}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-medium">{hotel.rating} stars</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-in</span>
                  <span className="font-medium">{hotel.checkInTime}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-out</span>
                  <span className="font-medium">{hotel.checkOutTime}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pet Friendly</span>
                  <span className="font-medium">
                    {hotel.isPetFriendly ? "Yes" : "No"}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rooms Available</span>
                  <span className="font-medium">{hotel.roomsAvailable}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center bg-muted rounded-md aspect-video">
                <p className="text-center text-gray-500">
                  Map view would be displayed here
                  <br />
                  <span className="text-sm">
                    {hotel.address}, {cityName}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
