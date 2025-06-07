"use client";

import { useState, useEffect } from "react";
import { getCityHotels, getHotelRooms } from "@/lib/utils/get/hotels";
import { Hotel, RoomOption } from "@/lib/interfaces/services/rentals";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loading from "@/components/Loading";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Check,
  X,
  ArrowLeft,
  Filter,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

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

  // Room filter states
  const [roomFilters, setRoomFilters] = useState<{
    maxOccupancy?: number | null;
    bedType?: string | null;
    minSquareFootage?: number | null;
    features?: string[]; // changed from feature?: string | null;
    minPrice?: number | null;
    maxPrice?: number | null;
    breakfastIncluded?: boolean | null;
    view?: string | null;
    refundable?: boolean | null;
    minAvailability?: number | null;
  }>({});

  // Filter panel state
  const [showFilters, setShowFilters] = useState(true);

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
            const hotelRooms = await getHotelRooms(citySlug, selectedHotel); // Pass hotel object
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

  // Unique values for room filters
  const uniqueBedTypes = Array.from(
    new Set(rooms.map((r) => r.bedType))
  ).sort();
  const uniqueViews = Array.from(
    new Set(rooms.map((r) => r.view).filter(Boolean))
  ).sort();
  const uniqueFeatures = Array.from(
    new Set(rooms.flatMap((r) => r.amenities || []))
  ).sort();

  // Filtering logic for rooms
  const filteredRooms = rooms.filter((room) => {
    if (
      roomFilters.maxOccupancy &&
      room.occupancy.maxGuests < roomFilters.maxOccupancy
    )
      return false;
    if (roomFilters.bedType && room.bedType !== roomFilters.bedType)
      return false;
    if (
      roomFilters.features &&
      roomFilters.features.length > 0 &&
      !roomFilters.features.every((f) => (room.amenities || []).includes(f))
    )
      return false;
    if (roomFilters.minPrice && room.pricePerNight < roomFilters.minPrice)
      return false;
    if (roomFilters.maxPrice && room.pricePerNight > roomFilters.maxPrice)
      return false;
    if (
      roomFilters.breakfastIncluded !== undefined &&
      room.breakfastIncluded !== undefined &&
      room.breakfastIncluded !== roomFilters.breakfastIncluded
    )
      return false;
    if (roomFilters.view && room.view !== roomFilters.view) return false;
    if (
      roomFilters.refundable !== undefined &&
      room.refundable !== undefined &&
      room.refundable !== roomFilters.refundable
    )
      return false;
    if (
      roomFilters.minAvailability &&
      room.availableCount < roomFilters.minAvailability
    )
      return false;
    return true;
  });

  // Reset all filters
  const resetAllFilters = () => {
    setRoomFilters({});
  };

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
      <div className="flex flex-col gap-6">
        <Link
          href="/services/hotels"
          className="inline-flex items-center mb-4 text-primary hover:underline"
        >
          <ArrowLeft className="mr-1 w-4 h-4" />
          Back to Hotels
        </Link>
        <header>
          <h1 className="text-start">{hotel.name}</h1>
          {hotel.isPopular && (
            <Badge
              className="mt-2 md:mt-0 md:ml-4 self-start"
              variant="default"
            >
              Popular Hotel
            </Badge>
          )}
          <div className="mt-2">
            {displayRatingStars(hotel.rating, 5, {
              size: "sm",
              showRatingNumber: true,
              containerClassName: "justify-start",
            })}
          </div>
        </header>

        <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Tabs for small screens only */}
            <div className="sm:hidden">
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
                            <div
                              key={amenity}
                              className="flex items-center gap-2"
                            >
                              <Check className="w-4 h-4 text-green-500" />
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>
                          No amenities information available for this hotel.
                        </p>
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
                          <h5 className="mb-2 font-medium">
                            Cancellation Policy
                          </h5>
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
                          <h5 className="mb-2 font-medium">
                            Check-in/Check-out
                          </h5>
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

            {/* Stacked panels for md+ screens */}
            <div className="sm:flex flex-col space-y-6 hidden md:h-full">
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

              {/* Amenities */}
              {hotel.amenities && hotel.amenities.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Hotel Amenities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                      {hotel.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Policies */}
              <Card className="flex flex-col h-full">
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
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4 h-full">
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
            <Card className="flex flex-col justify-center h-full">
              <CardHeader>
                <CardTitle>Hotel Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium">
                      {hotel.accommodationType}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">{hotel.rating} stars</span>
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
                    <span className="text-muted-foreground">
                      Rooms Available
                    </span>
                    <span className="font-medium">{hotel.roomsAvailable}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
            <h5 className="text-start">
              {filteredRooms.length} room{filteredRooms.length !== 1 ? "s" : ""}{" "}
              available
            </h5>
            <div className="flex sm:flex-row flex-col items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
                size="sm"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>
          </div>
          <div className="gap-6 grid grid-cols-1 lg:grid-cols-4">
            {/* Filters Panel */}
            {showFilters && (
              <div className="space-y-6 lg:col-span-1 shadow p-6 border border-border rounded-lg h-fit">
                <div className="flex justify-between items-center">
                  <h3>Filters</h3>
                  <Button variant="ghost" onClick={resetAllFilters}>
                    Reset All
                  </Button>
                </div>
                {/* Max Occupancy */}
                <div className="space-y-2">
                  <h5>Max Occupancy</h5>
                  <Input
                    id="maxOccupancy"
                    type="number"
                    min={1}
                    placeholder="Any"
                    value={roomFilters.maxOccupancy ?? ""}
                    onChange={(e) =>
                      setRoomFilters((f) => ({
                        ...f,
                        maxOccupancy: e.target.value
                          ? parseInt(e.target.value)
                          : null,
                      }))
                    }
                  />
                </div>
                {/* Bed Type */}
                <div className="space-y-2">
                  <h5>Bed Type</h5>
                  <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                    {uniqueBedTypes.map((bed) => (
                      <div key={bed} className="flex items-center space-x-2">
                        <Checkbox
                          id={`bedType-${bed}`}
                          checked={roomFilters.bedType === bed}
                          onCheckedChange={(checked) =>
                            setRoomFilters((f) => ({
                              ...f,
                              bedType: checked ? bed : null,
                            }))
                          }
                        />
                        <Label
                          htmlFor={`bedType-${bed}`}
                          className="text-sm cursor-pointer"
                        >
                          {bed}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Features */}
                <div className="space-y-2">
                  <h5>Features</h5>
                  <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                    {uniqueFeatures.map((f) => (
                      <div key={f} className="flex items-center space-x-2">
                        <Checkbox
                          id={`feature-${f}`}
                          checked={roomFilters.features?.includes(f) || false}
                          onCheckedChange={(checked) => {
                            setRoomFilters((prev) => {
                              const features = prev.features
                                ? [...prev.features]
                                : [];
                              if (checked) {
                                if (!features.includes(f)) features.push(f);
                              } else {
                                const idx = features.indexOf(f);
                                if (idx > -1) features.splice(idx, 1);
                              }
                              return {
                                ...prev,
                                features:
                                  features.length > 0 ? features : undefined,
                              };
                            });
                          }}
                        />
                        <Label
                          htmlFor={`feature-${f}`}
                          className="text-sm cursor-pointer"
                        >
                          {f}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="gap-4 grid grid-cols-2">
                  {" "}
                  {/* Min Price */}
                  <div className="space-y-2">
                    <h5>Min Price</h5>
                    <Input
                      id="minPrice"
                      type="number"
                      min={0}
                      placeholder="Any"
                      value={roomFilters.minPrice ?? ""}
                      onChange={(e) =>
                        setRoomFilters((f) => ({
                          ...f,
                          minPrice: e.target.value
                            ? parseInt(e.target.value)
                            : null,
                        }))
                      }
                      className="w-24"
                    />
                  </div>
                  {/* Max Price */}
                  <div className="space-y-2">
                    <h5>Max Price</h5>
                    <Input
                      id="maxPrice"
                      type="number"
                      min={0}
                      placeholder="Any"
                      value={roomFilters.maxPrice ?? ""}
                      onChange={(e) =>
                        setRoomFilters((f) => ({
                          ...f,
                          maxPrice: e.target.value
                            ? parseInt(e.target.value)
                            : null,
                        }))
                      }
                      className="w-24"
                    />
                  </div>
                </div>
                {/* Breakfast */}
                <div className="space-y-2">
                  <h5>Breakfast Included</h5>
                  <div className="space-y-1 p-2 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="breakfast-yes"
                        checked={roomFilters.breakfastIncluded === true}
                        onCheckedChange={(checked) =>
                          setRoomFilters((f) => ({
                            ...f,
                            breakfastIncluded: checked ? true : null,
                          }))
                        }
                      />
                      <Label
                        htmlFor="breakfast-yes"
                        className="text-sm cursor-pointer"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="breakfast-no"
                        checked={roomFilters.breakfastIncluded === false}
                        onCheckedChange={(checked) =>
                          setRoomFilters((f) => ({
                            ...f,
                            breakfastIncluded: checked ? false : null,
                          }))
                        }
                      />
                      <Label
                        htmlFor="breakfast-no"
                        className="text-sm cursor-pointer"
                      >
                        No
                      </Label>
                    </div>
                  </div>
                </div>
                {/* View */}
                <div className="space-y-2">
                  <h5>View</h5>
                  <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                    {uniqueViews.map((v) => (
                      <div key={v} className="flex items-center space-x-2">
                        <Checkbox
                          id={`view-${v}`}
                          checked={roomFilters.view === v}
                          onCheckedChange={(checked) =>
                            setRoomFilters((f) => ({
                              ...f,
                              view: checked ? v : null,
                            }))
                          }
                        />
                        <Label
                          htmlFor={`view-${v}`}
                          className="text-sm cursor-pointer"
                        >
                          {v}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Refundable */}
                <div className="space-y-2">
                  <h5>Refundable</h5>
                  <div className="space-y-1 p-2 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="refundable-yes"
                        checked={roomFilters.refundable === true}
                        onCheckedChange={(checked) =>
                          setRoomFilters((f) => ({
                            ...f,
                            refundable: checked ? true : null,
                          }))
                        }
                      />
                      <Label
                        htmlFor="refundable-yes"
                        className="text-sm cursor-pointer"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="refundable-no"
                        checked={roomFilters.refundable === false}
                        onCheckedChange={(checked) =>
                          setRoomFilters((f) => ({
                            ...f,
                            refundable: checked ? false : null,
                          }))
                        }
                      />
                      <Label
                        htmlFor="refundable-no"
                        className="text-sm cursor-pointer"
                      >
                        No
                      </Label>
                    </div>
                  </div>
                </div>
                {/* Min Available */}
                <div className="space-y-2">
                  <h5>Min Available</h5>
                  <Input
                    id="minAvailability"
                    type="number"
                    min={1}
                    placeholder="Any"
                    value={roomFilters.minAvailability ?? ""}
                    onChange={(e) =>
                      setRoomFilters((f) => ({
                        ...f,
                        minAvailability: e.target.value
                          ? parseInt(e.target.value)
                          : null,
                      }))
                    }
                  />
                </div>
                {/* Reset Button */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={resetAllFilters}
                >
                  Reset All Filters
                </Button>
              </div>
            )}

            {/* Main Content - Room Cards */}
            <div
              className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
            >
              <div className="text-gray-500">
                Showing {filteredRooms.length} room
                {filteredRooms.length !== 1 ? "s" : ""}
              </div>
              {filteredRooms.length > 0 ? (
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredRooms.map((room) => (
                    <Card key={room.id} className="flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>{room.name}</CardTitle>
                        <CardDescription>{room.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="space-y-2">
                          <div>
                            <span className="font-medium">Max Occupancy:</span>{" "}
                            {room.occupancy.maxGuests}
                          </div>
                          <div>
                            <span className="font-medium">Bed Type:</span>{" "}
                            {room.bedType}
                          </div>
                          {room.view && (
                            <div>
                              <span className="font-medium">View:</span>{" "}
                              {room.view}
                            </div>
                          )}
                          <div>
                            <span className="font-medium">Price:</span>{" "}
                            {room.pricePerNight}{" "}
                            {room.currency || hotel.currency}
                          </div>
                          <div>
                            <span className="font-medium">Available:</span>{" "}
                            {room.availableCount}
                          </div>
                          <div>
                            <span className="font-medium">Refundable:</span>{" "}
                            {room.refundable ? "Yes" : "No"}
                          </div>
                          <div>
                            <span className="font-medium">
                              Breakfast Included:
                            </span>{" "}
                            {room.breakfastIncluded ? "Yes" : "No"}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Book This Room</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center shadow py-12 rounded-lg text-center">
                  <div className="mb-4">
                    <X className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-lg">No rooms found</h3>
                  <p className="mt-2 max-w-md text-gray-500">
                    We couldn't find any rooms matching your filters. Try
                    adjusting your search criteria or reset filters.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={resetAllFilters}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
