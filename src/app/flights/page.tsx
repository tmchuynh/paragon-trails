"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockFlights } from "@/data/flights";
import { formatToSlug } from "@/lib/utils/format";
import { Label } from "@radix-ui/react-label";
import { Plane, RotateCcw, Search, Star, Wifi } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FlightsPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const { state: cartState, dispatch } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [fromLocation, setFromLocation] = useState<string>("");
  const [toLocation, setToLocation] = useState<string>("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [classType, setClassType] = useState("economy");
  const [filteredFlights, setFilteredFlights] = useState(mockFlights);

  // Extract unique locations from mockFlights
  const locations = Array.from(
    new Set(
      [
        ...mockFlights.map((flight) => flight.origin),
        ...mockFlights.map((flight) => flight.destination),
      ].map((location) => `${location.code}|${location.city}`)
    )
  )
    .map((locationStr) => {
      const [code, city] = locationStr.split("|");
      return {
        value: code,
        label: `${city} (${code})`,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  const handleSearch = () => {
    let filtered = mockFlights;

    // Filter by origin and destination
    if (fromLocation) {
      filtered = filtered.filter(
        (flight) => flight.origin.code === fromLocation
      );
    }
    if (toLocation) {
      filtered = filtered.filter(
        (flight) => flight.destination.code === toLocation
      );
    }

    // Filter by search query (airline, flight number, destination city)
    if (searchQuery) {
      filtered = filtered.filter(
        (flight) =>
          flight.airline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          flight.flightNumber
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          flight.destination.city
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          flight.origin.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredFlights(filtered);
  };

  // Auto-filter flights whenever filter values change
  useEffect(() => {
    handleSearch();
  }, [
    searchQuery,
    fromLocation,
    toLocation,
    departureDate,
    passengers,
    classType,
  ]);

  const resetFilters = () => {
    setSearchQuery("");
    setFromLocation("");
    setToLocation("");
    setDepartureDate("");
    setPassengers("1");
    setClassType("economy");
  };

  const getFlightPrice = (flight: any) => {
    switch (classType) {
      case "business":
        return flight.pricing.business;
      case "first":
        return flight.pricing.first;
      default:
        return flight.pricing.economy;
    }
  };

  const handleAddToCart = (flight: any) => {
    const departureBaseDate = departureDate || flight.departure.date;

    const flightItem = {
      id: `flight-${formatToSlug(flight.flightNumber)}-${departureBaseDate}-${classType}`,
      type: "flight" as const,
      name: `${flight.airline} ${flight.flightNumber}`,
      description: `${flight.origin.city} to ${flight.destination.city} - ${classType} class`,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=60",
      price: getFlightPrice(flight),
      dates: {
        startDate: departureBaseDate,
        endDate: departureBaseDate,
      },
      guests: parseInt(passengers),
      location: `${flight.origin.city} → ${flight.destination.city}`,
      features: flight.amenities,
      cancellationPolicy: "Standard airline cancellation policy applies",
    };

    // Check if this exact flight booking already exists
    if (cartHelpers.checkIfDuplicate(cartState.items, flightItem)) {
      // For flights, we should add more passengers instead of creating duplicate
      const existingItem = cartState.items.find(
        (item) =>
          item.name === flightItem.name &&
          item.dates.startDate === flightItem.dates.startDate &&
          item.location === flightItem.location
      );

      if (existingItem) {
        const newGuestCount = existingItem.guests + parseInt(passengers);
        cartHelpers.updateGuests(dispatch, existingItem.id, newGuestCount);
        toast.success(
          `Added ${passengers} more passenger${parseInt(passengers) > 1 ? "s" : ""} to ${flight.flightNumber}!`
        );
        return;
      }
    }

    cartHelpers.addItem(dispatch, flightItem);
    toast.success(`Flight ${flight.flightNumber} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
            Find Your Perfect Flight
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Search and compare flights from top airlines worldwide. Book with
            confidence and enjoy premium travel experiences.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 p-6">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="space-y-2">
              <Label className="font-medium text-sm">From</Label>
              <Select value={fromLocation} onValueChange={setFromLocation}>
                <SelectTrigger className="border border-border w-full">
                  <SelectValue placeholder="Departure city" />
                </SelectTrigger>
                <SelectContent className="w-full max-h-60">
                  {locations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-medium text-sm">To</Label>
              <Select value={toLocation} onValueChange={setToLocation}>
                <SelectTrigger className="border border-border w-full">
                  <SelectValue placeholder="Destination city" />
                </SelectTrigger>
                <SelectContent className="w-full max-h-60">
                  {locations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-medium text-sm">Departure Date</Label>
              <Input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="flex flex-col justify-center"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-medium text-sm">Passengers</Label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="border border-border w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="w-full max-h-60">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} passenger{num > 1 ? "s" : ""}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="items-center gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <div className="space-y-2">
              <Label className="font-medium text-sm">Search</Label>
              <div className="relative">
                <Search className="top-3 left-3 absolute w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Airline, flight number, or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-medium text-sm">Class</Label>
              <Select value={classType} onValueChange={setClassType}>
                <SelectTrigger className="border border-border w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="w-full max-h-60">
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="first">First Class</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              onClick={resetFilters}
              className="m-0 p-0 w-full"
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Reset Filters
            </Button>
          </div>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-slate-600 dark:text-slate-400">
            Found {filteredFlights.length} flight
            {filteredFlights.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="space-y-4">
          {filteredFlights.map((flight) => (
            <Card
              key={flight.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => router.push(`/flights/${flight.id}`)}
            >
              <CardContent className="p-6">
                <div className="gap-6 grid grid-cols-1 lg:grid-cols-4">
                  {/* Flight Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8">
                        <Plane className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {flight.airline}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {flight.flightNumber} • {flight.aircraft}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="font-bold text-xl">
                          {flight.departure.time}
                        </p>
                        <p className="font-medium text-sm">
                          {flight.origin.code}
                        </p>
                        <p className="text-slate-600 text-xs">
                          {flight.origin.city}
                        </p>
                      </div>

                      <div className="relative flex-1">
                        <div className="border-slate-300 border-t-2"></div>
                        <div className="top-[-8px] left-1/2 absolute bg-slate-300 rounded-full w-4 h-4 transform -translate-x-1/2"></div>
                        <p className="mt-1 font-medium text-center text-slate-600 text-sm">
                          {flight.duration}
                        </p>
                        {flight.stops > 0 && (
                          <p className="text-center text-slate-500 text-xs">
                            {flight.stops} stop{flight.stops > 1 ? "s" : ""}
                          </p>
                        )}
                      </div>

                      <div className="text-center">
                        <p className="font-bold text-xl">
                          {flight.arrival.time}
                        </p>
                        <p className="font-medium text-sm">
                          {flight.destination.code}
                        </p>
                        <p className="text-slate-600 text-xs">
                          {flight.destination.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="mb-3 font-semibold text-sm">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {flight.amenities.slice(0, 3).map((amenity, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {amenity === "In-flight Wi-Fi" && (
                            <Wifi className="mr-1 w-3 h-3" />
                          )}
                          {amenity}
                        </Badge>
                      ))}
                      {flight.amenities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{flight.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-1 mt-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium text-sm">
                        {flight.rating}
                      </span>
                      <span className="text-slate-600 text-xs">
                        ({flight.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Price and Book */}
                  <div className="text-right flex lg:flex-col justify-between lg:justify-center items-center lg:items-end">
                    <div>
                      <p className="font-bold text-2xl text-blue-600">
                        {formatPrice(getFlightPrice(flight))}
                      </p>
                      <p className="text-slate-600 text-sm capitalize">
                        per person • {classType}
                      </p>
                      <div className="mt-2">
                        {flight.availability[
                          classType as keyof typeof flight.availability
                        ] > 0 ? (
                          <Badge variant="outline" className="text-green-600">
                            {
                              flight.availability[
                                classType as keyof typeof flight.availability
                              ]
                            }{" "}
                            seats left
                          </Badge>
                        ) : (
                          <Badge variant="destructive">Sold out</Badge>
                        )}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleAddToCart(flight)}
                      disabled={
                        flight.availability[
                          classType as keyof typeof flight.availability
                        ] === 0
                      }
                      className="mt-4 lg:mt-auto"
                    >
                      {flight.availability[
                        classType as keyof typeof flight.availability
                      ] === 0
                        ? "Sold Out"
                        : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFlights.length === 0 && (
          <div className="py-20 text-center">
            <div className="flex justify-center items-center bg-slate-200 dark:bg-slate-700 mx-auto mb-4 rounded-full w-16 h-16">
              <Plane className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="mb-2 font-semibold text-lg text-slate-900 dark:text-white">
              No flights found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search criteria or check different dates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
