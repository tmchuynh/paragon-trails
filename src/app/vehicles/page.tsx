"use client";

import VehicleCard from "@/components/cards/VehicleCard";
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
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Vehicle } from "@/lib/interfaces/services/vehicles";
import { Calendar, Car, Filter, MapPin, Search } from "lucide-react";
import { useState } from "react";

// Mock data for vehicles
const mockVehicles: Vehicle[] = [
  {
    id: "1",
    name: "BMW 7 Series",
    type: "luxury-car",
    brand: "BMW",
    model: "7 Series",
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=500&fit=crop",
    ],
    description:
      "Experience ultimate luxury with the BMW 7 Series. Perfect for executive travel and special occasions.",
    features: [
      "Leather Seats",
      "Navigation System",
      "Bluetooth",
      "Premium Sound",
      "Climate Control",
      "Heated Seats",
    ],
    specifications: {
      engine: "3.0L Twin-Turbo V6",
      transmission: "8-Speed Automatic",
      fuelType: "Gasoline",
      seatingCapacity: 5,
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 5.8s",
      fuelEconomy: "8.5L/100km",
    },
    pricing: {
      daily: 250,
      weekly: 1650,
      monthly: 6500,
      currency: "USD",
    },
    availability: {
      locations: ["New York", "Los Angeles", "Miami", "Chicago"],
      isAvailable: true,
      minimumAge: 25,
      licenseRequired: ["Full License"],
    },
    insurance: {
      included: ["Third Party", "Theft Protection"],
      optional: ["Full Coverage", "Personal Accident"],
    },
    rating: 4.8,
    reviews: 124,
    category: "Luxury",
    tags: ["Executive", "Premium", "Comfort"],
  },
  {
    id: "2",
    name: "Harley-Davidson Street Glide",
    type: "motorcycle",
    brand: "Harley-Davidson",
    model: "Street Glide",
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=500&fit=crop",
    ],
    description:
      "Iconic American motorcycle perfect for long touring rides and city exploration.",
    features: [
      "ABS Brakes",
      "Cruise Control",
      "Bluetooth Audio",
      "GPS Navigation",
      "Heated Grips",
      "Touring Seat",
    ],
    specifications: {
      engine: "114 Milwaukee-Eight",
      transmission: "6-Speed",
      fuelType: "Gasoline",
      seatingCapacity: 2,
      topSpeed: "180 km/h",
      fuelEconomy: "5.5L/100km",
    },
    pricing: {
      daily: 180,
      weekly: 1200,
      monthly: 4800,
      currency: "USD",
    },
    availability: {
      locations: ["Las Vegas", "Phoenix", "Austin", "Nashville"],
      isAvailable: true,
      minimumAge: 21,
      licenseRequired: ["Motorcycle License"],
    },
    insurance: {
      included: ["Third Party", "Theft Protection"],
      optional: ["Full Coverage", "Gear Insurance"],
    },
    rating: 4.9,
    reviews: 89,
    category: "Touring",
    tags: ["Adventure", "Touring", "Classic"],
  },
  {
    id: "3",
    name: "Tesla Model S Plaid",
    type: "sports-car",
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=500&fit=crop",
    ],
    description:
      "The fastest production sedan ever made. Experience the future of electric performance.",
    features: [
      "Autopilot",
      "Premium Audio",
      "Glass Roof",
      "Wireless Charging",
      "Over-the-Air Updates",
      "Ludicrous Mode",
    ],
    specifications: {
      engine: "Tri-Motor Electric",
      transmission: "Single-Speed",
      fuelType: "Electric",
      seatingCapacity: 5,
      topSpeed: "320 km/h",
      acceleration: "0-100 km/h in 2.1s",
      fuelEconomy: "18 kWh/100km",
    },
    pricing: {
      daily: 350,
      weekly: 2300,
      monthly: 9000,
      currency: "USD",
    },
    availability: {
      locations: ["San Francisco", "Seattle", "Portland", "Denver"],
      isAvailable: true,
      minimumAge: 25,
      licenseRequired: ["Full License"],
    },
    insurance: {
      included: ["Third Party", "Theft Protection"],
      optional: ["Full Coverage", "Premium Protection"],
    },
    rating: 4.7,
    reviews: 156,
    category: "Electric Sports",
    tags: ["Electric", "Performance", "Innovation"],
  },
];

export default function VehiclesPage() {
  const { dispatch } = useCart();
  const { formatPrice } = useCurrency();
  const [filteredVehicles, setFilteredVehicles] =
    useState<Vehicle[]>(mockVehicles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const vehicleTypes = [
    { value: "all", label: "All Vehicles" },
    { value: "car", label: "Standard Cars" },
    { value: "luxury-car", label: "Luxury Cars" },
    { value: "suv", label: "SUVs" },
    { value: "sports-car", label: "Sports Cars" },
    { value: "motorcycle", label: "Motorcycles" },
  ];

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "new-york", label: "New York" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "miami", label: "Miami" },
    { value: "chicago", label: "Chicago" },
    { value: "las-vegas", label: "Las Vegas" },
    { value: "san-francisco", label: "San Francisco" },
  ];

  const handleSearch = () => {
    let filtered = mockVehicles;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.model.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((vehicle) => vehicle.type === selectedType);
    }

    // Filter by price range
    filtered = filtered.filter(
      (vehicle) =>
        vehicle.pricing.daily >= priceRange[0] &&
        vehicle.pricing.daily <= priceRange[1]
    );

    setFilteredVehicles(filtered);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
            Premium Vehicle Rentals
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Discover our exclusive collection of luxury cars and motorcycles.
            From executive sedans to high-performance sports cars and touring
            motorcycles.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
              {/* Pickup Location */}
              <div className="space-y-2">
                <Label htmlFor="pickup-location">Pickup Location</Label>
                <div className="relative">
                  <MapPin className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                  >
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Pickup Date */}
              <div className="space-y-2">
                <Label htmlFor="pickup-date">Pickup Date</Label>
                <div className="relative">
                  <Calendar className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                  <Input
                    id="pickup-date"
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Return Date */}
              <div className="space-y-2">
                <Label htmlFor="return-date">Return Date</Label>
                <div className="relative">
                  <Calendar className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                  <Input
                    id="return-date"
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button onClick={handleSearch} className="w-full">
                  <Search className="mr-2 w-4 h-4" />
                  Search Vehicles
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="gap-8 grid lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Filters</h3>
                </div>

                <div className="space-y-6">
                  {/* Search by Name */}
                  <div className="space-y-2">
                    <Label>Search Vehicles</Label>
                    <div className="relative">
                      <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                      <Input
                        placeholder="BMW, Tesla, Harley..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Vehicle Type */}
                  <div className="space-y-2">
                    <Label>Vehicle Type</Label>
                    <Select
                      value={selectedType}
                      onValueChange={setSelectedType}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicleTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <Label>Daily Price Range</Label>
                    <div className="px-2 py-4">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-slate-600 text-sm">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Filters Button */}
                  <Button
                    onClick={handleSearch}
                    className="w-full"
                    variant="outline"
                  >
                    Apply Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vehicles Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-600 dark:text-slate-400">
                {filteredVehicles.length} vehicle
                {filteredVehicles.length !== 1 ? "s" : ""} found
              </p>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredVehicles.length === 0 ? (
              <Card className="p-12 text-center">
                <Car className="mx-auto mb-4 w-12 h-12 text-slate-400" />
                <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                  No vehicles found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search criteria or filters to find
                  available vehicles.
                </p>
              </Card>
            ) : (
              <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    pickupDate={pickupDate}
                    returnDate={returnDate}
                    location={selectedLocation}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
