"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { mockHotels } from "@/data/hotels";
import { Hotel } from "@/lib/interfaces/services/hotels";
import { formatToSlug } from "@/lib/utils/format";
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
  Star,
  Users,
  Utensils,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function HotelsPage() {
  const router = useRouter();
  const { state: cartState, dispatch } = useCart();
  const { formatPrice } = useCurrency();

  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(mockHotels);
  const [searchQuery, setSearchQuery] = useState("");
  const [destination, setDestination] = useState("all");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const [starRating, setStarRating] = useState("1");
  const [hotelType, setHotelType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("rating");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Extract unique destinations from mockHotels
  const destinations = Array.from(
    new Set(mockHotels.map((hotel) => hotel.location.city))
  ).sort();

  // Extract unique hotel types from mockHotels
  const hotelTypes = [
    { value: "all", label: "All Types" },
    ...Array.from(new Set(mockHotels.map((hotel) => hotel.type)))
      .sort()
      .map((type) => ({
        value: type,
        label: type.charAt(0).toUpperCase() + type.slice(1),
      })),
  ];

  const handleSearch = () => {
    let filtered = mockHotels;

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
    setCheckInDate("");
    setCheckOutDate("");
    setGuests({ adults: 2, children: 0 });
    setStarRating("1");
    setHotelType("all");
    setPriceRange([0, 2000]);
    setSortBy("rating");
  };

  const handleAddToCart = (hotel: Hotel) => {
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }

    const hotelItem = {
      id: `hotel-${formatToSlug(hotel.name)}-${checkInDate}-${checkOutDate}`,
      type: "hotel" as const,
      name: hotel.name,
      description: `${hotel.starRating}-star ${hotel.type} in ${hotel.location.city}`,
      image: hotel.images[0],
      price: hotel.pricing.priceRange.min,
      dates: {
        startDate: checkInDate,
        endDate: checkOutDate,
      },
      guests: guests.adults + guests.children,
      location: `${hotel.location.city}, ${hotel.location.country}`,
      features: hotel.amenities.general.slice(0, 3),
      cancellationPolicy: hotel.policies.cancellation,
    };

    // Check if this exact hotel booking already exists
    if (cartHelpers.checkIfDuplicate(cartState.items, hotelItem)) {
      toast.error(`${hotel.name} for these dates is already in your cart`);
      return;
    }

    cartHelpers.addItem(dispatch, hotelItem);
    toast.success(`${hotel.name} added to cart!`);
  };

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 1;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
  };

  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
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
                    <SelectTrigger className="pl-10 w-full">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent className="w-full max-h-60">
                      <SelectItem value="all">All Destinations</SelectItem>
                      {destinations.map((dest) => (
                        <SelectItem key={dest} value={dest.toLowerCase()}>
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
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    {hotelTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Check-in Date */}
              <div className="space-y-2">
                <Label htmlFor="checkin">Check-in Date</Label>
                <Input
                  className="flex flex-col justify-center"
                  id="checkin"
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              {/* Reset Filters Button */}
              <div className="flex items-end">
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="w-full"
                >
                  <RotateCcw className="mr-2 w-4 h-4" />
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="gap-8 grid lg:grid-cols-4">
          {/* Filters Sidebar */}
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
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Check-out Date */}
                  <div className="space-y-2">
                    <Label htmlFor="checkout">Check-out Date</Label>
                    <Input
                      className="flex flex-col justify-center"
                      id="checkout"
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      min={
                        checkInDate || new Date().toISOString().split("T")[0]
                      }
                    />
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
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
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
                            setGuests({ ...guests, children: parseInt(value) })
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3, 4].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
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
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        <SelectItem value="1">1+ Stars</SelectItem>
                        <SelectItem value="2">2+ Stars</SelectItem>
                        <SelectItem value="3">3+ Stars</SelectItem>
                        <SelectItem value="4">4+ Stars</SelectItem>
                        <SelectItem value="5">5 Stars</SelectItem>
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
                        max={2000}
                        min={0}
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

          {/* Hotels Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-600 dark:text-slate-400">
                {filteredHotels.length} hotel
                {filteredHotels.length !== 1 ? "s" : ""} found
                {destination && destination !== "all" && ` in ${destination}`}
                {filteredHotels.length > 0 && (
                  <span className="ml-2">
                    (Showing {startIndex + 1}-
                    {Math.min(endIndex, filteredHotels.length)} of{" "}
                    {filteredHotels.length})
                  </span>
                )}
              </p>

              <div className="flex items-center gap-4">
                {/* Items per page dropdown */}
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="items-per-page"
                    className="text-sm whitespace-nowrap"
                  >
                    Show:
                  </Label>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => setItemsPerPage(Number(value))}
                  >
                    <SelectTrigger className="w-20">
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
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    <SelectItem value="rating">Rating (High to Low)</SelectItem>
                    <SelectItem value="price">Price (Low to High)</SelectItem>
                    <SelectItem value="stars">
                      Star Rating (High to Low)
                    </SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
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
                    <Card
                      key={hotel.id}
                      className="group hover:shadow-xl p-0 transition-all cursor-pointer overflow-hidden"
                      onClick={() =>
                        router.push(`/hotels/${formatToSlug(hotel.name)}`)
                      }
                    >
                      <div className="relative h-64">
                        <Image
                          src={hotel.images[0]}
                          alt={hotel.name}
                          fill
                          className="transition-transform group-hover:scale-105 object-cover"
                        />
                        <div className="top-4 left-4 absolute">
                          <Badge variant="secondary" className="">
                            {hotel.type.charAt(0).toUpperCase() +
                              hotel.type.slice(1)}
                          </Badge>
                        </div>

                        <div className="top-4 right-4 absolute bg-white px-3 py-1 rounded-full font-semibold text-black">
                          {formatPrice(hotel.pricing.priceRange.min)}
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="mb-2 font-bold text-slate-900 text-xl dark:group-hover:text-blue-400 dark:text-white group-hover:text-blue-600 transition-colors">
                            {hotel.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-slate-600 text-sm dark:text-slate-400">
                              {hotel.location.city}, {hotel.location.country}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm dark:text-slate-400 line-clamp-2">
                            {hotel.description}
                          </p>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="font-medium text-sm">
                              {hotel.rating}
                            </span>
                            <span className="text-slate-600 text-sm dark:text-slate-400">
                              ({hotel.reviews} reviews)
                            </span>
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="mb-4">
                          <h4 className="mb-2 font-semibold text-sm">
                            Popular Amenities:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {hotel.amenities.general
                              .slice(0, 4)
                              .map((amenity, index) => {
                                const IconComponent = getAmenityIcon(amenity);
                                return (
                                  <div
                                    key={index}
                                    className="flex items-center gap-1 text-xs"
                                  >
                                    <IconComponent className="w-3 h-3" />
                                    <span>{amenity}</span>
                                  </div>
                                );
                              })}
                          </div>
                        </div>

                        {/* Pricing and Actions */}
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-slate-600 text-sm dark:text-slate-400">
                              From
                            </p>
                            <span className="font-bold text-2xl">
                              {formatPrice(hotel.pricing.priceRange.min)}
                            </span>{" "}
                            <span className="text-slate-500 text-xs dark:text-slate-400 uppercase">
                              /per night
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
