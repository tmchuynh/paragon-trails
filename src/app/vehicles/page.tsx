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
import { mockDestinations } from "@/data/destinations";
import { mockVehicles } from "@/data/vehicles";
import { Vehicle } from "@/lib/interfaces/services/vehicles";
import { Calendar, Car, Filter, MapPin, RotateCcw, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function VehiclesPage() {
  const [filteredVehicles, setFilteredVehicles] =
    useState<Vehicle[]>(mockVehicles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Dynamically extract vehicle types from mockVehicles
  const vehicleTypes = [
    { value: "all", label: "All Vehicles" },
    ...Array.from(new Set(mockVehicles.map((vehicle) => vehicle.type)))
      .sort()
      .map((type) => ({
        value: type,
        label: type
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      })),
  ];

  // Dynamically extract locations from mockDestinations
  const locations = [
    { value: "all", label: "All Locations" },
    ...mockDestinations
      .map((destination) => ({
        value: destination.name.toLowerCase().replace(/\s+/g, "-"),
        label: destination.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
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

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setPriceRange([0, 500]);
    setSelectedLocation("all");
    setPickupDate("");
    setReturnDate("");
  };

  // Auto-filter when any filter changes
  useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedType, priceRange, selectedLocation, pickupDate, returnDate]);

  return (
    <div className="min-h-screen">
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
                    onClick={resetFilters}
                    className="w-full"
                    variant="outline"
                  >
                    <RotateCcw className="mr-2 w-4 h-4" />
                    Reset Filters
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
