"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TripPlan } from "@/lib/interfaces/trip-planner";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Building,
  CalendarIcon,
  Calendar as CalendarLucide,
  MapPin,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

interface TripSetupProps {
  onComplete: (plan: TripPlan) => void;
  selectedDestination: string;
  selectedHotel: string;
  dateRange: { start: Date; end: Date } | null;
  guestCount: number;
  onDestinationChange: (destination: string) => void;
  onHotelChange: (hotel: string) => void;
  onDateRangeChange: (range: { start: Date; end: Date } | null) => void;
  onGuestCountChange: (count: number) => void;
}

export default function TripSetup({
  onComplete,
  selectedDestination,
  selectedHotel,
  dateRange,
  guestCount,
  onDestinationChange,
  onHotelChange,
  onDateRangeChange,
  onGuestCountChange,
}: TripSetupProps) {
  const [availableHotels, setAvailableHotels] = useState(mockHotels);

  // Filter hotels by selected destination
  useEffect(() => {
    if (selectedDestination) {
      const destinationData = mockDestinations.find(
        (d) => d.id === selectedDestination
      );
      if (destinationData) {
        const cityHotels = mockHotels.filter(
          (hotel) =>
            hotel.location.city.toLowerCase() ===
            destinationData.name.toLowerCase()
        );
        setAvailableHotels(cityHotels);

        // Reset hotel selection if current hotel is not in the new city
        if (selectedHotel && !cityHotels.find((h) => h.id === selectedHotel)) {
          onHotelChange("");
        }
      }
    }
  }, [selectedDestination, selectedHotel, onHotelChange]);

  const handleDateSelect = (range: any) => {
    if (range?.from && range?.to) {
      onDateRangeChange({ start: range.from, end: range.to });
    } else if (range?.from) {
      onDateRangeChange({ start: range.from, end: range.from });
    }
  };

  const canProceed =
    selectedDestination && selectedHotel && dateRange && guestCount > 0;

  const handleContinue = () => {
    if (!canProceed) return;

    const destinationData = mockDestinations.find(
      (d) => d.id === selectedDestination
    );
    const hotelData = availableHotels.find((h) => h.id === selectedHotel);

    const plan: TripPlan = {
      id: `trip-${Date.now()}`,
      destination: selectedDestination,
      destinationName: destinationData?.name || "",
      hotel: selectedHotel,
      hotelName: hotelData?.name || "",
      startDate: dateRange!.start,
      endDate: dateRange!.end,
      guests: guestCount,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    onComplete(plan);
  };

  return (
    <div className="space-y-8 mx-auto max-w-4xl">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h2 className="font-bold text-3xl text-gray-900 dark:text-white">
          Let's Plan Your Trip
        </h2>
        <p className="text-gray-600 text-lg dark:text-gray-300">
          Start by telling us about your destination, dates, and accommodation
          preferences.
        </p>
      </div>

      {/* Setup Form */}
      <div className="gap-6 grid md:grid-cols-2">
        {/* Destination Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Choose Your Destination
            </CardTitle>
            <CardDescription>
              Select the city you want to explore
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              value={selectedDestination}
              onValueChange={onDestinationChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                {mockDestinations.map((destination) => (
                  <SelectItem
                    key={destination.id}
                    value={destination.id}
                    variant="classic"
                  >
                    <div className="flex items-center gap-2">
                      <span>{destination.name}</span>
                      <span className="text-gray-500 text-sm">
                        {destination.country}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Hotel Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              Choose Your Hotel
            </CardTitle>
            <CardDescription>
              {selectedDestination
                ? `Available hotels in ${mockDestinations.find((d) => d.id === selectedDestination)?.name}`
                : "Select a destination first"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              value={selectedHotel}
              onValueChange={onHotelChange}
              disabled={!selectedDestination}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select hotel" />
              </SelectTrigger>
              <SelectContent>
                {availableHotels.map((hotel) => (
                  <SelectItem key={hotel.id} value={hotel.id} variant="classic">
                    <div className="flex flex-col">
                      <span>{hotel.name}</span>
                      <span className="text-gray-500 text-sm">
                        {hotel.starRating} stars • {hotel.location.address}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Date Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarLucide className="w-5 h-5" />
              Select Your Dates
            </CardTitle>
            <CardDescription>
              Choose your check-in and check-out dates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateRange && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 w-4 h-4" />
                  {dateRange?.start ? (
                    dateRange.end ? (
                      <>
                        {format(dateRange.start, "LLL dd, y")} -{" "}
                        {format(dateRange.end, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.start, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick your dates</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-auto" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.start}
                  selected={{
                    from: dateRange?.start,
                    to: dateRange?.end,
                  }}
                  onSelect={handleDateSelect}
                  numberOfMonths={2}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        {/* Guest Count */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Number of Guests
            </CardTitle>
            <CardDescription>
              How many people will be traveling?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              value={guestCount.toString()}
              onValueChange={(value) => onGuestCountChange(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
                  <SelectItem
                    key={count}
                    value={count.toString()}
                    variant="classic"
                  >
                    {count} {count === 1 ? "guest" : "guests"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {/* Continue Button */}
      <div className="text-center">
        <Button
          onClick={handleContinue}
          disabled={!canProceed}
          size="lg"
          className="min-w-[200px]"
        >
          Continue to Planning
        </Button>
        {!canProceed && (
          <p className="mt-2 text-gray-500 text-sm">
            Please fill in all required fields to continue
          </p>
        )}
      </div>
    </div>
  );
}
