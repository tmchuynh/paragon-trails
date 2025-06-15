"use client";

import { DateTimePicker } from "@/components/calendar/date-time-picker";
import FlightCard from "@/components/cards/FlightCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { getMockFlights } from "@/data/flights";
import { Flight } from "@/lib/interfaces/services/flights";
import { formatToSlug } from "@/lib/utils/format";
import { Filter, Plane, RotateCcw, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FlightsPage() {
  const { formatPrice } = useCurrency();
  const { state: cartState, dispatch } = useCart();
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [flightsData] = await Promise.all([getMockFlights()]);

        setFlights(flightsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [searchQuery, setSearchQuery] = useState("");
  const [fromLocation, setFromLocation] = useState<string>("all");
  const [toLocation, setToLocation] = useState<string>("all");
  const [selectedAirline, setSelectedAirline] = useState<string>("all");
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    undefined
  );
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(undefined);
  const [departureTimeRange, setDepartureTimeRange] = useState<string>("all");
  const [arrivalTimeRange, setArrivalTimeRange] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [classType, setClassType] = useState("economy");
  const [passengers, setPassengers] = useState("1");
  const [selectedStops, setSelectedStops] = useState<string>("all");
  const [selectedMeal, setSelectedMeal] = useState<string>("all");
  const [selectedAmenity, setSelectedAmenity] = useState<string>("all");
  const [ratingFilter, setRatingFilter] = useState([0, 5]);

  // Calculate min and max prices from flights data based on class type
  const getPriceRange = () => {
    const prices = flights
      .map((flight) => {
        switch (classType) {
          case "business":
            return flight.pricing.business;
          case "first":
            return flight.pricing.first;
          default:
            return flight.pricing.economy;
        }
      })
      .filter((price) => price > 0); // Filter out 0 prices (unavailable classes)

    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  };

  const { min: minPrice, max: maxPrice } = getPriceRange();
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [sortBy, setSortBy] = useState<string>("price-low");
  const [showFilters, setShowFilters] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Get unique values for filters
  const airlines = [
    { value: "all", label: "All Airlines" },
    ...Array.from(new Set(flights.map((flight) => flight.airline)))
      .sort()
      .map((airline) => ({ value: airline, label: airline })),
  ];

  const durations = [
    { value: "all", label: "All Durations" },
    ...Array.from(new Set(flights.map((flight) => flight.duration)))
      .sort()
      .map((duration) => ({ value: duration, label: duration })),
  ];

  const meals = [
    { value: "all", label: "All Meal Types" },
    ...Array.from(new Set(flights.map((flight) => flight.meal)))
      .sort()
      .map((meal) => ({ value: meal, label: meal })),
  ];

  const amenities = [
    { value: "all", label: "All Amenities" },
    ...Array.from(new Set(flights.flatMap((flight) => flight.amenities)))
      .sort()
      .map((amenity) => ({ value: amenity, label: amenity })),
  ];

  const stopOptions = [
    { value: "all", label: "All Flights" },
    { value: "0", label: "Non-stop" },
    { value: "1", label: "1 Stop" },
    { value: "2+", label: "2+ Stops" },
  ];

  const timeRanges = [
    { value: "all", label: "Any Time" },
    { value: "morning", label: "Morning (6:00 AM - 12:00 PM)" },
    { value: "afternoon", label: "Afternoon (12:00 PM - 6:00 PM)" },
    { value: "evening", label: "Evening (6:00 PM - 12:00 AM)" },
    { value: "overnight", label: "Overnight (12:00 AM - 6:00 AM)" },
  ];

  // Extract unique locations from flights
  const locations = [
    { value: "all", label: "All Locations" },
    ...Array.from(
      new Set(
        [
          ...flights.map((flight) => flight.origin),
          ...flights.map((flight) => flight.destination),
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
      .sort((a, b) => a.label.localeCompare(b.label)),
  ];

  const isTimeInRange = (time: string, range: string) => {
    if (range === "all") return true;

    const hour = parseInt(time.split(":")[0]);
    switch (range) {
      case "morning":
        return hour >= 6 && hour < 12;
      case "afternoon":
        return hour >= 12 && hour < 18;
      case "evening":
        return hour >= 18 && hour < 24;
      case "overnight":
        return hour >= 0 && hour < 6;
      default:
        return true;
    }
  };

  const handleSearch = () => {
    let filtered = flights;

    // Filter by search query
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
          flight.origin.city
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          flight.aircraft.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by origin and destination
    if (fromLocation !== "all") {
      filtered = filtered.filter(
        (flight) => flight.origin.code === fromLocation
      );
    }
    if (toLocation !== "all") {
      filtered = filtered.filter(
        (flight) => flight.destination.code === toLocation
      );
    }

    // Filter by airline
    if (selectedAirline !== "all") {
      filtered = filtered.filter(
        (flight) => flight.airline === selectedAirline
      );
    }

    // Filter by departure date
    if (departureDate) {
      filtered = filtered.filter((flight) => {
        const flightDate = new Date(flight.departure.date);
        flightDate.setHours(0, 0, 0, 0);
        const filterDate = new Date(departureDate);
        filterDate.setHours(0, 0, 0, 0);
        return flightDate.getTime() === filterDate.getTime();
      });
    }

    // Filter by arrival date
    if (arrivalDate) {
      filtered = filtered.filter((flight) => {
        const flightDate = new Date(flight.arrival.date);
        flightDate.setHours(0, 0, 0, 0);
        const filterDate = new Date(arrivalDate);
        filterDate.setHours(0, 0, 0, 0);
        return flightDate.getTime() === filterDate.getTime();
      });
    }

    // Filter by departure time range
    if (departureTimeRange !== "all") {
      filtered = filtered.filter((flight) =>
        isTimeInRange(flight.departure.time, departureTimeRange)
      );
    }

    // Filter by arrival time range
    if (arrivalTimeRange !== "all") {
      filtered = filtered.filter((flight) =>
        isTimeInRange(flight.arrival.time, arrivalTimeRange)
      );
    }

    // Filter by duration
    if (selectedDuration !== "all") {
      filtered = filtered.filter(
        (flight) => flight.duration === selectedDuration
      );
    }

    // Filter by stops
    if (selectedStops !== "all") {
      if (selectedStops === "2+") {
        filtered = filtered.filter((flight) => flight.stops >= 2);
      } else {
        filtered = filtered.filter(
          (flight) => flight.stops === parseInt(selectedStops)
        );
      }
    }

    // Filter by meal type
    if (selectedMeal !== "all") {
      filtered = filtered.filter((flight) => flight.meal === selectedMeal);
    }

    // Filter by amenity
    if (selectedAmenity !== "all") {
      filtered = filtered.filter((flight) =>
        flight.amenities.includes(selectedAmenity)
      );
    }

    // Filter by price range
    filtered = filtered.filter((flight) => {
      const price = getFlightPrice(flight);
      return price >= priceRange[0] && price <= priceRange[1] && price > 0;
    });

    // Filter by rating
    filtered = filtered.filter(
      (flight) =>
        flight.rating >= ratingFilter[0] && flight.rating <= ratingFilter[1]
    );

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return getFlightPrice(a) - getFlightPrice(b);
        case "price-high":
          return getFlightPrice(b) - getFlightPrice(a);
        case "rating":
          return b.rating - a.rating;
        case "duration":
          return a.duration.localeCompare(b.duration);
        case "departure":
          return a.departure.time.localeCompare(b.departure.time);
        case "airline":
          return a.airline.localeCompare(b.airline);
        default:
          return getFlightPrice(a) - getFlightPrice(b);
      }
    });

    setFilteredFlights(filtered);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setFromLocation("all");
    setToLocation("all");
    setSelectedAirline("all");
    setDepartureDate(undefined);
    setArrivalDate(undefined);
    setDepartureTimeRange("all");
    setArrivalTimeRange("all");
    setSelectedDuration("all");
    setSelectedStops("all");
    setSelectedMeal("all");
    setSelectedAmenity("all");
    setPriceRange([minPrice, maxPrice]);
    setRatingFilter([0, 5]);
    setPassengers("1");
    setClassType("economy");
  };

  // Auto-filter flights whenever filter values change
  useEffect(() => {
    handleSearch();
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [
    searchQuery,
    fromLocation,
    toLocation,
    selectedAirline,
    departureDate,
    arrivalDate,
    departureTimeRange,
    arrivalTimeRange,
    selectedDuration,
    selectedStops,
    selectedMeal,
    selectedAmenity,
    priceRange,
    ratingFilter,
    classType,
    sortBy,
  ]);

  // Update price range when class type changes
  useEffect(() => {
    const { min, max } = getPriceRange();
    setPriceRange([min, max]);
  }, [classType]);

  // Set responsive filter visibility
  useEffect(() => {
    const handleResize = () => {
      // Show filters by default on large screens (lg breakpoint is 1024px)
      if (window.innerWidth >= 1024) {
        setShowFilters(true);
      } else {
        setShowFilters(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset to page 1 when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredFlights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFlights = filteredFlights.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    const departureBaseDate = departureDate
      ? departureDate.toISOString().split("T")[0]
      : flight.departure.date;

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

        {/* Top Filters */}
        <Card className="mb-8">
          <div className="p-6">
            <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
              {/* From Location */}
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <div className="relative">
                  <Plane className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                  <Select value={fromLocation} onValueChange={setFromLocation}>
                    <SelectTrigger className="pl-10 border border-border w-full">
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
              </div>

              {/* To Location */}
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
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

              {/* Airline */}
              <div className="space-y-2">
                <Label htmlFor="airline">Airline</Label>
                <Select
                  value={selectedAirline}
                  onValueChange={setSelectedAirline}
                >
                  <SelectTrigger className="border border-border w-full">
                    <SelectValue placeholder="Select airline" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    {airlines.map((airline) => (
                      <SelectItem key={airline.value} value={airline.value}>
                        {airline.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Reset Filters Button */}
              <div className="flex items-end">
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="m-0 p-0 w-full"
                >
                  <RotateCcw className="mr-2 w-4 h-4" />
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div
          className={`gap-8 grid grid-cols-1 ${showFilters ? "lg:grid-cols-4" : "lg:grid-cols-1"}`}
        >
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="space-y-6 lg:col-span-1">
              <Card className="p-0">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="w-5 h-5" />
                    <h3 className="font-semibold text-lg">Filters</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Search */}
                    <div className="space-y-2">
                      <Label>Search Flights</Label>
                      <div className="relative">
                        <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          placeholder="Airline, flight number..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 focus:border-muted border-border focus:ring-muted/20 h-8"
                        />
                      </div>
                    </div>

                    {/* Departure Date */}
                    <div className="space-y-2">
                      <Label>Departure Date</Label>
                      <DateTimePicker
                        value={departureDate}
                        onChange={setDepartureDate}
                        placeholder="Pick departure date"
                        minDate={new Date()}
                        className="w-full"
                      />
                    </div>

                    {/* Arrival Date */}
                    <div className="space-y-2">
                      <Label>Arrival Date</Label>
                      <DateTimePicker
                        value={arrivalDate}
                        onChange={setArrivalDate}
                        placeholder="Pick arrival date"
                        minDate={departureDate || new Date()}
                        className="w-full"
                      />
                    </div>

                    {/* Passengers */}
                    <div className="space-y-2">
                      <Label>Passengers</Label>
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

                    {/* Class Type */}
                    <div className="space-y-2">
                      <Label>Class</Label>
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

                    {/* Departure Time */}
                    <div className="space-y-2">
                      <Label>Departure Time</Label>
                      <Select
                        value={departureTimeRange}
                        onValueChange={setDepartureTimeRange}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select time range" />
                        </SelectTrigger>
                        <SelectContent className="w-full max-h-60">
                          {timeRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Arrival Time */}
                    <div className="space-y-2">
                      <Label>Arrival Time</Label>
                      <Select
                        value={arrivalTimeRange}
                        onValueChange={setArrivalTimeRange}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select time range" />
                        </SelectTrigger>
                        <SelectContent className="w-full max-h-60">
                          {timeRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                      <Label>Duration</Label>
                      <Select
                        value={selectedDuration}
                        onValueChange={setSelectedDuration}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent className="w-full max-h-60">
                          {durations.map((duration) => (
                            <SelectItem
                              key={duration.value}
                              value={duration.value}
                            >
                              {duration.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Stops */}
                    <div className="space-y-2">
                      <Label>Stops</Label>
                      <Select
                        value={selectedStops}
                        onValueChange={setSelectedStops}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select stops" />
                        </SelectTrigger>
                        <SelectContent className="w-full max-h-60">
                          {stopOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Meal Type */}
                    <div className="space-y-2">
                      <Label>Meal Type</Label>
                      <Select
                        value={selectedMeal}
                        onValueChange={setSelectedMeal}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select meal type" />
                        </SelectTrigger>
                        <SelectContent className="w-full max-h-60">
                          {meals.map((meal) => (
                            <SelectItem key={meal.value} value={meal.value}>
                              {meal.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Amenities */}
                    <div className="space-y-2">
                      <Label>Required Amenity</Label>
                      <Select
                        value={selectedAmenity}
                        onValueChange={setSelectedAmenity}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select amenity" />
                        </SelectTrigger>
                        <SelectContent className="w-full max-h-60">
                          {amenities.map((amenity) => (
                            <SelectItem
                              key={amenity.value}
                              value={amenity.value}
                            >
                              {amenity.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-2">
                      <Label>
                        Price Range (
                        {classType.charAt(0).toUpperCase() + classType.slice(1)}{" "}
                        Class)
                      </Label>
                      <div className="px-2 py-4">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={maxPrice}
                          min={minPrice}
                          step={50}
                          className="w-full"
                        />
                        <div className="flex justify-between mt-2 text-slate-600 text-sm dark:text-slate-400">
                          <span>{formatPrice(priceRange[0])}</span>
                          <span>{formatPrice(priceRange[1])}</span>
                        </div>
                      </div>
                    </div>

                    {/* Rating Filter */}
                    <div className="space-y-2">
                      <Label>Rating Range</Label>
                      <div className="px-2 py-4">
                        <Slider
                          value={ratingFilter}
                          onValueChange={setRatingFilter}
                          max={5}
                          min={0}
                          step={0.1}
                          className="w-full"
                        />
                        <div className="flex justify-between mt-2 text-slate-600 text-sm dark:text-slate-400">
                          <span>{ratingFilter[0].toFixed(1)}</span>
                          <span>{ratingFilter[1].toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Reset Filters Button */}
                    <Button
                      onClick={resetFilters}
                      className="w-full"
                      variant="outline"
                    >
                      <RotateCcw className="mr-2 w-4 h-4" />
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Flights List */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-1"}>
            <div className="flex md:flex-row flex-col justify-between items-center mb-6">
              <div className="md:w-1/4 text-center text-slate-600 text-wrap md:text-start dark:text-slate-400">
                {filteredFlights.length} flight
                {filteredFlights.length !== 1 ? "s" : ""} found
                {filteredFlights.length > 0 && (
                  <p>
                    (Showing {startIndex + 1}-{" "}
                    {Math.min(endIndex, filteredFlights.length)} of{" "}
                    {filteredFlights.length})
                  </p>
                )}
              </div>

              <div className="flex md:flex-row flex-col items-center md:items-end gap-4 mt-2 md:mt-0 w-full md:w-auto">
                {/* Items per page dropdown */}
                <div className="flex flex-col items-center w-4/5 md:w-auto">
                  <Label className="text-sm whitespace-nowrap">Show:</Label>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => setItemsPerPage(Number(value))}
                  >
                    <SelectTrigger className="border border-border w-full md:w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="w-full max-h-60">
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort dropdown */}
                <div className="flex flex-col items-center w-4/5 md:w-auto">
                  <Label className="text-sm whitespace-nowrap">Sort By:</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="border border-border w-full md:w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="w-full max-h-60">
                      <SelectItem value="price-low">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-high">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="duration">Duration</SelectItem>
                      <SelectItem value="departure">Departure Time</SelectItem>
                      <SelectItem value="airline">Airline (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Toggle Filters Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 m-0.5 w-4/5 md:w-auto"
                >
                  <Filter className="w-4 h-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>
            </div>

            {filteredFlights.length === 0 ? (
              <Card className="p-12 text-center">
                <Plane className="mx-auto mb-4 w-12 h-12 text-slate-400" />
                <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                  No flights found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search criteria or filters to find
                  available flights.
                </p>
              </Card>
            ) : (
              <>
                <div className="space-y-4">
                  {paginatedFlights.map((flight) => (
                    <FlightCard
                      key={flight.id}
                      flight={flight}
                      classType={classType}
                      flightPrice={getFlightPrice(flight)}
                      handleAddToCart={handleAddToCart}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mt-8">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) {
                                handlePageChange(currentPage - 1);
                              }
                            }}
                            className={
                              currentPage <= 1
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          />
                        </PaginationItem>

                        {/* Page numbers */}
                        {Array.from(
                          { length: Math.min(5, totalPages) },
                          (_, i) => {
                            let pageNumber;
                            if (totalPages <= 5) {
                              pageNumber = i + 1;
                            } else if (currentPage <= 3) {
                              pageNumber = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNumber = totalPages - 4 + i;
                            } else {
                              pageNumber = currentPage - 2 + i;
                            }

                            return (
                              <PaginationItem key={pageNumber}>
                                <PaginationLink
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(pageNumber);
                                  }}
                                  isActive={currentPage === pageNumber}
                                >
                                  {pageNumber}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          }
                        )}

                        {totalPages > 5 && currentPage < totalPages - 2 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}

                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < totalPages) {
                                handlePageChange(currentPage + 1);
                              }
                            }}
                            className={
                              currentPage >= totalPages
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>

                    {/* Page info and quick jump (only show if more than 5 pages) */}
                    {totalPages > 5 && (
                      <div className="flex items-center gap-3 text-slate-600 text-sm dark:text-slate-400">
                        <span>
                          Page {currentPage} of {totalPages}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
