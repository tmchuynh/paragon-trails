"use client";

import { DateTimePicker } from "@/components/calendar/date-time-picker";
import HotelCard from "@/components/cards/HotelCard";
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
import { useCurrency } from "@/context/CurrencyContext";
import { getMockHotels } from "@/data/hotels";
import { Hotel } from "@/lib/interfaces/services/hotels";
import {
  Bath,
  Bed,
  Calendar,
  Car,
  Coffee,
  Dumbbell,
  Filter,
  MapPin,
  RotateCcw,
  Search,
  Users,
  Utensils,
  Wifi,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HotelsPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hotelsData] = await Promise.all([getMockHotels()]);

        setHotels(hotelsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const [searchQuery, setSearchQuery] = useState("");
  const [destination, setDestination] = useState("all");
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState({ adults: 2, children: 1 });
  const [starRating, setStarRating] = useState("4");
  const [hotelType, setHotelType] = useState("all");

  // Calculate min and max prices from hotels data
  const minPrice = Math.min(
    ...hotels.map((hotel) => hotel.pricing.priceRange.min)
  );
  const maxPrice = Math.max(
    ...hotels.map((hotel) => hotel.pricing.priceRange.max)
  );

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Extract unique destinations from hotels
  const destinations = Array.from(
    new Set(hotels.map((hotel) => hotel.location.city))
  ).sort();

  // Extract unique hotel types from hotels
  const hotelTypes = [
    { value: "all", label: "All Types" },
    ...Array.from(new Set(hotels.map((hotel) => hotel.type)))
      .sort()
      .map((type) => ({
        value: type,
        label: type.charAt(0).toUpperCase() + type.slice(1),
      })),
  ];

  const handleSearch = () => {
    let filtered = hotels;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hotel.location.city
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          hotel.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by destination
    if (destination && destination !== "all") {
      filtered = filtered.filter(
        (hotel) =>
          hotel.location.city.toLowerCase() === destination.toLowerCase()
      );
    }

    // Filter by hotel type
    if (hotelType !== "all") {
      filtered = filtered.filter((hotel) => hotel.type === hotelType);
    }

    // Filter by star rating
    if (starRating !== "all") {
      filtered = filtered.filter(
        (hotel) => hotel.starRating >= parseInt(starRating)
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (hotel) =>
        hotel.pricing.priceRange.min >= priceRange[0] &&
        hotel.pricing.priceRange.max <= priceRange[1]
    );

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.pricing.priceRange.min - b.pricing.priceRange.min;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        case "stars":
          return b.starRating - a.starRating;
        default:
          return 0;
      }
    });

    setFilteredHotels(filtered);
  };

  // Auto-filter hotels whenever filter values change
  useEffect(() => {
    handleSearch();
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [
    searchQuery,
    destination,
    checkInDate,
    checkOutDate,
    guests,
    starRating,
    hotelType,
    priceRange,
    sortBy,
  ]);

  // Reset to page 1 when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

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

  // Calculate pagination
  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedHotels = filteredHotels.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFilters = () => {
    setSearchQuery("");
    setDestination("all");
    setCheckInDate(undefined);
    setCheckOutDate(undefined);
    setGuests({ adults: 2, children: 0 });
    setStarRating("1");
    setHotelType("all");
    setPriceRange([minPrice, maxPrice]);
    setSortBy("rating");
  };

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 1;
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
            Find Your Perfect Stay
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Discover exceptional hotels, resorts, and unique accommodations
            worldwide. From luxury retreats to budget-friendly options, find
            your ideal home away from home.
          </p>
        </div>

        {/* Top Filters */}
        <Card className="mb-8">
          <div className="p-6">
            <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
              {/* Destination */}
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <div className="relative">
                  <MapPin className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger
                      className="pl-10 border border-border w-full"
                      variant="professional"
                    >
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent
                      className="w-full max-h-60"
                      variant="professional"
                    >
                      <SelectItem value="all">All Destinations</SelectItem>
                      {destinations.map((dest) => (
                        <SelectItem
                          key={dest}
                          value={dest.toLowerCase()}
                          variant="classic"
                        >
                          {dest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Hotel Type */}
              <div className="space-y-2">
                <Label>Hotel Type</Label>
                <Select value={hotelType} onValueChange={setHotelType}>
                  <SelectTrigger className="border border-border w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent
                    className="w-full max-h-60"
                    variant="professional"
                  >
                    {hotelTypes.map((type) => (
                      <SelectItem
                        key={type.value}
                        value={type.value}
                        variant="classic"
                      >
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Check-in Date */}
              <div className="space-y-2">
                <Label htmlFor="checkin">Check-in Date</Label>
                <DateTimePicker
                  value={checkInDate}
                  onChange={setCheckInDate}
                  placeholder="Check-in date"
                  minDate={new Date()}
                  className="w-full"
                />
              </div>

              {/* Check-out Date */}
              <div className="space-y-2">
                <Label htmlFor="checkout">Check-out Date</Label>
                <DateTimePicker
                  value={checkOutDate}
                  onChange={setCheckOutDate}
                  placeholder="Check-out date"
                  minDate={checkInDate || new Date()}
                  className="w-full"
                />
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
                    {/* Search by Name */}
                    <div className="space-y-2">
                      <Label>Search Hotels</Label>
                      <div className="relative">
                        <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          placeholder="Hotel name or city..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 focus:border-muted border-border focus:ring-muted/20 h-8"
                        />
                      </div>
                    </div>

                    {/* Guests */}
                    <div className="space-y-2">
                      <Label>Guests</Label>
                      <div className="gap-2 grid grid-cols-2">
                        <div>
                          <Label className="text-xs">Adults</Label>
                          <Select
                            value={guests.adults.toString()}
                            onValueChange={(value) =>
                              setGuests({ ...guests, adults: parseInt(value) })
                            }
                          >
                            <SelectTrigger className="border border-border w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, 6].map((num) => (
                                <SelectItem
                                  key={num}
                                  value={num.toString()}
                                  variant="classic"
                                >
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-xs">Children</Label>
                          <Select
                            value={guests.children.toString()}
                            onValueChange={(value) =>
                              setGuests({
                                ...guests,
                                children: parseInt(value),
                              })
                            }
                          >
                            <SelectTrigger className="border border-border w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[0, 1, 2, 3, 4].map((num) => (
                                <SelectItem
                                  key={num}
                                  value={num.toString()}
                                  variant="classic"
                                >
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="space-y-2">
                      <Label>Minimum Star Rating</Label>
                      <Select value={starRating} onValueChange={setStarRating}>
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent
                          className="w-full max-h-60"
                          variant="professional"
                        >
                          <SelectItem value="1" variant="classic">
                            1+ Stars
                          </SelectItem>
                          <SelectItem value="2" variant="classic">
                            2+ Stars
                          </SelectItem>
                          <SelectItem value="3" variant="classic">
                            3+ Stars
                          </SelectItem>
                          <SelectItem value="4" variant="classic">
                            4+ Stars
                          </SelectItem>
                          <SelectItem value="5" variant="classic">
                            5 Stars
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-2">
                      <Label>
                        Price Range: {formatPrice(priceRange[0])} -{" "}
                        {formatPrice(priceRange[1])}
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

          {/* Hotels Grid */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-1"}>
            <div className="flex md:flex-row flex-col justify-between items-center mb-6">
              <div className="md:w-1/4 text-center text-slate-600 text-wrap md:text-start dark:text-slate-400">
                {filteredHotels.length} hotel
                {filteredHotels.length !== 1 ? "s" : ""} found
                {destination && destination !== "all" && ` in ${destination}`}
                {filteredHotels.length > 0 && (
                  <p>
                    (Showing {startIndex + 1}-{" "}
                    {Math.min(endIndex, filteredHotels.length)} of{" "}
                    {filteredHotels.length})
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
                    <SelectContent
                      className="w-full max-h-60"
                      variant="professional"
                    >
                      <SelectItem value="4" variant="classic">
                        4
                      </SelectItem>
                      <SelectItem value="8" variant="classic">
                        8
                      </SelectItem>
                      <SelectItem value="12" variant="classic">
                        12
                      </SelectItem>
                      <SelectItem value="16" variant="classic">
                        16
                      </SelectItem>
                      <SelectItem value="24" variant="classic">
                        24
                      </SelectItem>
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
                    <SelectContent
                      className="w-full max-h-60"
                      variant="professional"
                    >
                      <SelectItem value="rating" variant="classic">
                        Rating (High to Low)
                      </SelectItem>
                      <SelectItem value="price" variant="classic">
                        Price (Low to High)
                      </SelectItem>
                      <SelectItem value="stars" variant="classic">
                        Star Rating (High to Low)
                      </SelectItem>
                      <SelectItem value="name" variant="classic">
                        Name (A-Z)
                      </SelectItem>
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

            {checkInDate && checkOutDate && (
              <div className="mb-4 text-center">
                <p className="text-slate-600 dark:text-slate-400">
                  {calculateNights()} night{calculateNights() !== 1 ? "s" : ""}{" "}
                  • {guests.adults + guests.children} guest
                  {guests.adults + guests.children !== 1 ? "s" : ""}
                </p>
              </div>
            )}

            {filteredHotels.length === 0 ? (
              <Card className="p-12 text-center">
                <MapPin className="mx-auto mb-4 w-12 h-12 text-slate-400" />
                <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                  No hotels found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search criteria or filters to find
                  available hotels.
                </p>
              </Card>
            ) : (
              <>
                <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
                  {paginatedHotels.map((hotel) => (
                    <HotelCard
                      hotel={hotel}
                      key={hotel.name}
                      checkInDate={checkInDate}
                      checkOutDate={checkOutDate}
                      guests={guests}
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
                            onClick={() =>
                              handlePageChange(Math.max(1, currentPage - 1))
                            }
                            className={
                              currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                          />
                        </PaginationItem>

                        {/* First page */}
                        {currentPage > 3 && (
                          <>
                            <PaginationItem>
                              <PaginationLink
                                onClick={() => handlePageChange(1)}
                                className="cursor-pointer"
                              >
                                1
                              </PaginationLink>
                            </PaginationItem>
                            {currentPage > 4 && (
                              <PaginationItem>
                                <PaginationEllipsis />
                              </PaginationItem>
                            )}
                          </>
                        )}

                        {/* Current page and neighbors */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter(
                            (page) =>
                              page >= Math.max(1, currentPage - 2) &&
                              page <= Math.min(totalPages, currentPage + 2)
                          )
                          .map((page) => (
                            <PaginationItem key={page}>
                              <PaginationLink
                                onClick={() => handlePageChange(page)}
                                isActive={currentPage === page}
                                className="cursor-pointer"
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          ))}

                        {/* Last page */}
                        {currentPage < totalPages - 2 && (
                          <>
                            {currentPage < totalPages - 3 && (
                              <PaginationItem>
                                <PaginationEllipsis />
                              </PaginationItem>
                            )}
                            <PaginationItem>
                              <PaginationLink
                                onClick={() => handlePageChange(totalPages)}
                                className="cursor-pointer"
                              >
                                {totalPages}
                              </PaginationLink>
                            </PaginationItem>
                          </>
                        )}

                        <PaginationItem>
                          <PaginationNext
                            onClick={() =>
                              handlePageChange(
                                Math.min(totalPages, currentPage + 1)
                              )
                            }
                            className={
                              currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
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

// Helper function to get amenity icons
function getAmenityIcon(amenity: string) {
  const amenityLower = amenity.toLowerCase();

  if (amenityLower.includes("wi-fi") || amenityLower.includes("wifi"))
    return Wifi;
  if (amenityLower.includes("fitness") || amenityLower.includes("gym"))
    return Dumbbell;
  if (amenityLower.includes("restaurant") || amenityLower.includes("dining"))
    return Utensils;
  if (amenityLower.includes("parking") || amenityLower.includes("valet"))
    return Car;
  if (amenityLower.includes("coffee") || amenityLower.includes("breakfast"))
    return Coffee;
  if (amenityLower.includes("bathroom") || amenityLower.includes("bath"))
    return Bath;
  if (amenityLower.includes("bed") || amenityLower.includes("room")) return Bed;
  if (amenityLower.includes("concierge") || amenityLower.includes("front desk"))
    return Users;

  return Calendar; // Default icon
}
