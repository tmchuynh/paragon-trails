"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Search,
  Star,
  Users,
  Utensils,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function HotelsPage() {
  const router = useRouter();
  const { state: cartState, dispatch } = useCart();
  const { formatPrice } = useCurrency();

  const [searchQuery, setSearchQuery] = useState("");
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const [starRating, setStarRating] = useState([1]);
  const [hotelType, setHotelType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("rating");
  const [filteredHotels, setFilteredHotels] = useState(mockHotels);

  const destinations = Array.from(
    new Set(mockHotels.map((hotel) => hotel.location.city))
  );
  const hotelTypes = [
    { value: "all", label: "All Types" },
    { value: "hotel", label: "Hotel" },
    { value: "resort", label: "Resort" },
    { value: "boutique", label: "Boutique" },
    { value: "villa", label: "Villa" },
    { value: "hostel", label: "Hostel" },
    { value: "apartment", label: "Apartment" },
    { value: "bed-and-breakfast", label: "B&B" },
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
    filtered = filtered.filter((hotel) => hotel.starRating >= starRating[0]);

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
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
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

        {/* Search Filters */}
        <Card className="mb-8 p-6">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-6">
            <div className="space-y-2">
              <Label htmlFor="search">Search Hotels</Label>
              <div className="relative">
                <Search className="top-3 left-3 absolute w-4 h-4 text-slate-400" />
                <Input
                  id="search"
                  placeholder="Hotel name or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Destinations</SelectItem>
                  {destinations.map((dest) => (
                    <SelectItem key={dest} value={dest.toLowerCase()}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkin">Check-in Date</Label>
              <Input
                id="checkin"
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkout">Check-out Date</Label>
              <Input
                id="checkout"
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate || new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="space-y-2">
              <Label>Guests</Label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Label className="text-xs">Adults</Label>
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    value={guests.adults}
                    onChange={(e) =>
                      setGuests({
                        ...guests,
                        adults: parseInt(e.target.value) || 1,
                      })
                    }
                  />
                </div>
                <div className="flex-1">
                  <Label className="text-xs">Children</Label>
                  <Input
                    type="number"
                    min="0"
                    max="10"
                    value={guests.children}
                    onChange={(e) =>
                      setGuests({
                        ...guests,
                        children: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="space-y-2">
              <Label>Hotel Type</Label>
              <Select value={hotelType} onValueChange={setHotelType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {hotelTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Minimum Star Rating: {starRating[0]} stars</Label>
              <Slider
                value={starRating}
                onValueChange={setStarRating}
                max={5}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label>
                Price Range: {formatPrice(priceRange[0])} -{" "}
                {formatPrice(priceRange[1])}
              </Label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={2000}
                min={0}
                step={50}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label>Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
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

          <div className="flex justify-end">
            <Button onClick={handleSearch}>
              <Filter className="mr-2 w-4 h-4" />
              Search Hotels
            </Button>
          </div>
        </Card>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-slate-600 dark:text-slate-400">
            Found {filteredHotels.length} hotel
            {filteredHotels.length !== 1 ? "s" : ""}
            {destination && destination !== "all" && ` in ${destination}`}
          </p>
          {checkInDate && checkOutDate && (
            <p className="text-slate-600">
              {calculateNights()} night{calculateNights() !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Hotel Cards */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
          {filteredHotels.map((hotel) => (
            <Card
              key={hotel.id}
              className="hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={hotel.images[0]}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <div className="top-4 left-4 absolute">
                  <Badge variant="secondary" className="bg-white text-black">
                    {hotel.type.charAt(0).toUpperCase() + hotel.type.slice(1)}
                  </Badge>
                </div>
                <div className="top-4 right-4 absolute flex items-center">
                  {renderStarRating(hotel.starRating)}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="mb-2 font-bold text-slate-900 text-xl dark:text-white">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600 text-sm">
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
                    <span className="font-medium text-slate-900 text-sm dark:text-white">
                      {hotel.rating}
                    </span>
                    <span className="text-slate-500 text-sm">
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
                            className="flex items-center gap-1 text-slate-600 text-xs"
                          >
                            <IconComponent className="w-3 h-3" />
                            <span>{amenity}</span>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-slate-600 text-sm">From</p>
                    <p className="font-bold text-2xl text-slate-900 dark:text-white">
                      {formatPrice(hotel.pricing.priceRange.min)}
                    </p>
                    <p className="text-slate-500 text-xs">per night</p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const hotelSlug = formatToSlug(hotel.name);
                        router.push(`/hotels/${hotelSlug}`);
                      }}
                    >
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(hotel)}
                      disabled={!checkInDate || !checkOutDate}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredHotels.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="mb-4 font-semibold text-lg text-slate-900 dark:text-white">
              No hotels found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search criteria or browse all hotels.
            </p>
            <Button
              onClick={() => setFilteredHotels(mockHotels)}
              className="mt-4"
            >
              Show All Hotels
            </Button>
          </div>
        )}
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
