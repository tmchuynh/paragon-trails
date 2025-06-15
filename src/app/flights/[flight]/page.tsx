"use client";

import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { getMockFlights } from "@/data/flights";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatToSlug } from "@/lib/utils/format";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Luggage,
  MapPin,
  Plane,
  Shield,
  Star,
  Tv,
  Utensils,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FlightDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const { state: cartState, dispatch } = useCart();
  const [selectedClass, setSelectedClass] = useState("economy");
  const [passengers, setPassengers] = useState(1);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [flight, setFlight] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Find flight by ID
  const flightId = params.flight as string;

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const flights = await getMockFlights();
        const foundFlight = flights.find((f: any) => f.id === flightId);
        setFlight(foundFlight);
      } catch (error) {
        console.error("Error fetching flight:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlight();
  }, [flightId]);

  if (loading) {
    return <Loading />;
  }

  if (!flight) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Flight not found</h1>
            <Button onClick={() => router.push("/flights")}>
              Browse all flights
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getFlightPrice = () => {
    switch (selectedClass) {
      case "business":
        return flight.pricing.business;
      case "first":
        return flight.pricing.first;
      default:
        return flight.pricing.economy;
    }
  };

  const totalPrice = getFlightPrice() * passengers;

  const handleBookFlight = () => {
    setIsBooking(true);

    const departureBaseDate = departureDate || flight.departure.date;

    const flightItem = {
      id: `flight-${formatToSlug(flight.flightNumber)}-${departureBaseDate}-${selectedClass}`,
      type: "flight" as const,
      name: `${flight.airline} ${flight.flightNumber}`,
      description: `${flight.origin.city} to ${flight.destination.city} - ${selectedClass} class`,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=60",
      price: getFlightPrice(),
      dates: {
        startDate: departureBaseDate,
        endDate: returnDate || departureBaseDate,
      },
      guests: passengers,
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
        const newGuestCount = existingItem.guests + passengers;
        cartHelpers.updateGuests(dispatch, existingItem.id, newGuestCount);
        toast.success(
          `Added ${passengers} more passenger${passengers > 1 ? "s" : ""} to ${flight.flightNumber}!`
        );
        setIsBooking(false);
        return;
      }
    }

    cartHelpers.addItem(dispatch, flightItem);
    toast.success(`Flight ${flight.flightNumber} added to cart!`);
    setIsBooking(false);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to flights
        </Button>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Flight Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 rounded-full w-12 h-12">
                    <Plane className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{flight.airline}</CardTitle>
                    <p className="text-slate-600">
                      {flight.flightNumber} • {flight.aircraft}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{flight.rating}</span>
                    <span className="text-slate-600 text-sm">
                      ({flight.reviews} reviews)
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                  {/* Departure */}
                  <div>
                    <h3 className="mb-3 font-semibold text-lg">Departure</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>{flight.departure.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span className="font-bold text-xl">
                          {flight.departure.time}
                        </span>
                        <span className="text-slate-600 text-sm">
                          {flight.departure.timezone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <div>
                          <p className="font-semibold">
                            {flight.origin.airport}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {flight.origin.city} ({flight.origin.code}) •{" "}
                            {flight.origin.terminal}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrival */}
                  <div>
                    <h3 className="mb-3 font-semibold text-lg">Arrival</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>{flight.arrival.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span className="font-bold text-xl">
                          {flight.arrival.time}
                        </span>
                        <span className="text-slate-600 text-sm">
                          {flight.arrival.timezone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <div>
                          <p className="font-semibold">
                            {flight.destination.airport}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {flight.destination.city} ({flight.destination.code}
                            ) • {flight.destination.terminal}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flight Route */}
                <div className="mt-8">
                  <div className="flex justify-center items-center">
                    <div className="text-center">
                      <p className="font-bold text-lg">{flight.origin.code}</p>
                      <p className="text-slate-600 text-sm">
                        {flight.origin.city}
                      </p>
                    </div>

                    <div className="relative flex-1 mx-8">
                      <div className="border-slate-300 border-t-2"></div>
                      <div className="top-[-8px] left-1/2 absolute bg-blue-500 rounded-full w-4 h-4 transform -translate-x-1/2"></div>
                      <p className="mt-2 font-semibold text-blue-600 text-center">
                        {flight.duration}
                      </p>
                      {flight.stops === 0 ? (
                        <p className="text-center text-green-600 text-sm">
                          Non-stop
                        </p>
                      ) : (
                        <p className="text-center text-orange-600 text-sm">
                          {flight.stops} stop{flight.stops > 1 ? "s" : ""}
                        </p>
                      )}
                    </div>

                    <div className="text-center">
                      <p className="font-bold text-lg">
                        {flight.destination.code}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {flight.destination.city}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities & Services */}
            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-lg">
                  Amenities & Services
                </CardTitle>
              </CardHeader>
              <CardContent className="-mt-5">
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold">In-Flight Amenities</h4>
                    <div className="space-y-2">
                      {flight.amenities.map(
                        (amenity: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold">
                      Entertainment & Dining
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Tv className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                          {flight.entertainment.join(", ")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-orange-500" />
                        <span className="text-sm">{flight.meal}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h4 className="mb-3 font-semibold">Baggage Policy</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Luggage className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">
                        <strong>Carry-on:</strong> {flight.baggage.carryOn}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Luggage className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">
                        <strong>Checked:</strong> {flight.baggage.checked}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seat Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-lg">
                  Available Classes
                </CardTitle>
              </CardHeader>
              <CardContent className="-mt-5">
                <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                  {flight.availability.economy > 0 && (
                    <div
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedClass === "economy"
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
                          : "border-slate-200"
                      }`}
                      onClick={() => setSelectedClass("economy")}
                    >
                      <h4 className="mb-2 font-semibold">Economy</h4>
                      <p className="mb-2 font-bold text-2xl text-blue-600">
                        {formatPrice(flight.pricing.economy)}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {flight.availability.economy} seats available
                      </p>
                    </div>
                  )}
                  {flight.availability.business > 0 && (
                    <div
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedClass === "business"
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
                          : "border-slate-200"
                      }`}
                      onClick={() => setSelectedClass("business")}
                    >
                      <h4 className="mb-2 font-semibold">Business</h4>
                      <p className="mb-2 font-bold text-2xl text-blue-600">
                        {formatPrice(flight.pricing.business)}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {flight.availability.business} seats available
                      </p>
                    </div>
                  )}

                  {flight.availability.first > 0 && (
                    <div
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedClass === "first"
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
                          : "border-slate-200"
                      }`}
                      onClick={() => setSelectedClass("first")}
                    >
                      <h4 className="mb-2 font-semibold">First Class</h4>
                      <p className="mb-2 font-bold text-2xl text-blue-600">
                        {formatPrice(flight.pricing.first)}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {flight.availability.first} seats available
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-lg">
                  Book Your Flight
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 -mt-3">
                <div className="space-y-2">
                  <Label htmlFor="departure-date">
                    <strong>Departure Date</strong>
                  </Label>
                  <Input
                    id="departure-date"
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="flex flex-col justify-center mt-0.25 border focus:border-muted border-border focus:ring-muted/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="return-date">
                    <strong>Return Date (Optional)</strong>
                  </Label>
                  <Input
                    id="return-date"
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={
                      departureDate || new Date().toISOString().split("T")[0]
                    }
                    className="flex flex-col justify-center mt-0.25 border focus:border-muted border-border focus:ring-muted/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passengers">
                    <strong>Passengers</strong>
                  </Label>
                  <Select
                    value={passengers.toString()}
                    onValueChange={(value) => setPassengers(parseInt(value))}
                  >
                    <SelectTrigger id="passengers">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent
                      className="w-full max-h-60"
                      variant="professional"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} passenger{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="capitalize">{selectedClass} class</span>
                    <span>{formatPrice(getFlightPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Passengers</span>
                    <span>×{passengers}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-blue-600">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleBookFlight}
                  disabled={
                    isBooking ||
                    flight.availability[
                      selectedClass as keyof typeof flight.availability
                    ] === 0
                  }
                  className="w-full"
                  size="lg"
                >
                  {isBooking ? "Adding to Cart..." : "Add to Cart"}
                </Button>

                <div className="flex items-center gap-2 pt-2 text-slate-600 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Free cancellation up to 24 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Flight Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <strong>Route</strong>
                  <span>
                    {flight.origin.code} → {flight.destination.code}
                  </span>
                </div>
                <div className="flex justify-between">
                  <strong>Duration</strong>
                  <span>{flight.duration}</span>
                </div>
                <div className="flex justify-between">
                  <strong>Aircraft</strong>
                  <span>{flight.aircraft}</span>
                </div>
                <div className="flex justify-between">
                  <strong>Stops</strong>
                  <span>
                    {flight.stops === 0
                      ? "Non-stop"
                      : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <strong>Rating</strong>
                  <span className="flex items-center gap-1">
                    {displayRatingStars(flight.rating, 5, {
                      showRatingNumber: true,
                    })}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
