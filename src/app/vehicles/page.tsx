"use client";

import { DateTimePicker } from "@/components/calendar/date-time-picker";
import VehicleCard from "@/components/cards/VehicleCard";
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
import { getMockVehicles } from "@/data/vehicles";
import { Vehicle } from "@/lib/interfaces/services/vehicles";
import { Car, Filter, MapPin, RotateCcw, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [vehiclesData] = await Promise.all([getMockVehicles()]);

        setVehicles(vehiclesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedModel, setSelectedModel] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedFuelType, setSelectedFuelType] = useState<string>("all");
  const [selectedSeatingCapacity, setSelectedSeatingCapacity] =
    useState<string>("all");

  // Calculate min and max prices from vehicles data
  const minPrice = Math.min(
    ...vehicles.map((vehicle) => vehicle.pricing?.daily || 50)
  );
  const maxPrice = Math.max(
    ...vehicles.map((vehicle) => vehicle.pricing?.daily || 500)
  );

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string>("price-low");
  const [showFilters, setShowFilters] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Dynamically extract vehicle types from vehicles
  const vehicleTypes = [
    { value: "all", label: "All Vehicles" },
    ...Array.from(new Set(vehicles.map((vehicle) => vehicle.type)))
      .sort()
      .map((type) => ({
        value: type,
        label: type
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      })),
  ];

  // Get available brands based on selected type
  const getAvailableBrands = () => {
    let vehicle = vehicles;
    if (selectedType !== "all") {
      vehicle = vehicles.filter((v) => v.type === selectedType);
    }
    return [
      { value: "all", label: "All Brands" },
      ...Array.from(new Set(vehicles.map((v) => v.brand)))
        .sort()
        .map((brand) => ({ value: brand, label: brand })),
    ];
  };

  // Get available models based on selected type and brand
  const getAvailableModels = () => {
    let vehicle = vehicles;
    if (selectedType !== "all") {
      vehicle = vehicles.filter((v) => v.type === selectedType);
    }
    if (selectedBrand !== "all") {
      vehicle = vehicles.filter((v) => v.brand === selectedBrand);
    }
    return [
      { value: "all", label: "All Models" },
      ...Array.from(new Set(vehicles.map((v) => v.model)))
        .sort()
        .map((model) => ({ value: model, label: model })),
    ];
  };

  // Get available years based on selected type, brand, and model
  const getAvailableYears = () => {
    let vehicle = vehicles;
    if (selectedType !== "all") {
      vehicle = vehicles.filter((v) => v.type === selectedType);
    }
    if (selectedBrand !== "all") {
      vehicle = vehicles.filter((v) => v.brand === selectedBrand);
    }
    if (selectedModel !== "all") {
      vehicle = vehicles.filter((v) => v.model === selectedModel);
    }
    return [
      { value: "all", label: "All Years" },
      ...Array.from(new Set(vehicles.map((v) => v.year.toString())))
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((year) => ({ value: year, label: year })),
    ];
  };

  // Get available fuel types
  const fuelTypes = [
    { value: "all", label: "All Fuel Types" },
    ...Array.from(
      new Set(
        vehicles
          .filter((vehicle) => vehicle.specifications?.fuelType)
          .map((vehicle) => vehicle.specifications.fuelType!)
      )
    )
      .sort()
      .map((fuelType) => ({ value: fuelType, label: fuelType })),
  ];

  // Get available seating capacities
  const seatingCapacities = [
    { value: "all", label: "All Seating" },
    ...Array.from(
      new Set(
        vehicles
          .filter(
            (vehicle) => vehicle.specifications?.seatingCapacity !== undefined
          )
          .map((vehicle) => vehicle.specifications.seatingCapacity!.toString())
      )
    )
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map((capacity) => ({
        value: capacity,
        label: `${capacity} ${parseInt(capacity) === 1 ? "seat" : "seats"}`,
      })),
  ];

  // Dynamically extract locations from mockDestinations
  const locations = [
    { value: "all", label: "All Locations" },
    ...vehicles
      .map((destination) => ({
        value: destination.name.toLowerCase().replace(/\s+/g, "-"),
        label: destination.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
  ];

  const handleSearch = () => {
    let filtered = vehicles;

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

    // Filter by brand
    if (selectedBrand !== "all") {
      filtered = filtered.filter((vehicle) => vehicle.brand === selectedBrand);
    }

    // Filter by model
    if (selectedModel !== "all") {
      filtered = filtered.filter((vehicle) => vehicle.model === selectedModel);
    }

    // Filter by year
    if (selectedYear !== "all") {
      filtered = filtered.filter(
        (vehicle) => vehicle.year.toString() === selectedYear
      );
    }

    // Filter by fuel type
    if (selectedFuelType !== "all") {
      filtered = filtered.filter(
        (vehicle) => vehicle.specifications?.fuelType === selectedFuelType
      );
    }

    // Filter by seating capacity
    if (selectedSeatingCapacity !== "all") {
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.specifications?.seatingCapacity?.toString() ===
          selectedSeatingCapacity
      );
    }

    // Filter by location
    if (selectedLocation !== "all") {
      const locationName = locations.find(
        (loc) => loc.value === selectedLocation
      )?.label;
      if (locationName) {
        filtered = filtered.filter((vehicle) =>
          vehicle.availability.locations.includes(locationName)
        );
      }
    }

    // Filter by price range
    filtered = filtered.filter(
      (vehicle) =>
        (vehicle.pricing?.daily || 100) >= priceRange[0] &&
        (vehicle.pricing?.daily || 100) <= priceRange[1]
    );

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.pricing.daily - b.pricing.daily;
        case "price-high":
          return b.pricing.daily - a.pricing.daily;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.pricing.daily - b.pricing.daily;
      }
    });

    setFilteredVehicles(filtered);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedBrand("all");
    setSelectedModel("all");
    setSelectedYear("all");
    setSelectedFuelType("all");
    setSelectedSeatingCapacity("all");
    setPriceRange([minPrice, maxPrice]);
    setSelectedLocation("all");
    setPickupDate(undefined);
    setReturnDate(undefined);
  };

  // Handle cascading filter resets
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setSelectedBrand("all");
    setSelectedModel("all");
    setSelectedYear("all");
  };

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
    setSelectedModel("all");
    setSelectedYear("all");
  };

  const handleModelChange = (value: string) => {
    setSelectedModel(value);
    setSelectedYear("all");
  };

  // Auto-filter when any filter changes
  useEffect(() => {
    handleSearch();
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [
    searchQuery,
    selectedType,
    selectedBrand,
    selectedModel,
    selectedYear,
    selectedFuelType,
    selectedSeatingCapacity,
    priceRange,
    selectedLocation,
    pickupDate,
    returnDate,
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
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVehicles = filteredVehicles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          <CardContent className="-mt-5 p-6">
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
                    <SelectTrigger
                      className="pl-10 border border-border w-full"
                      variant="professional"
                    >
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent
                      className="w-full max-h-60"
                      variant="professional"
                    >
                      {locations.map((location) => (
                        <SelectItem
                          key={location.value}
                          value={location.value}
                          variant="classic"
                        >
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
                <DateTimePicker
                  value={pickupDate}
                  onChange={setPickupDate}
                  placeholder="Pickup date"
                  minDate={new Date()}
                  className="w-full"
                />
              </div>

              {/* Return Date */}
              <div className="space-y-2">
                <Label htmlFor="return-date">Return Date</Label>
                <DateTimePicker
                  value={returnDate}
                  onChange={setReturnDate}
                  placeholder="Return date"
                  minDate={pickupDate || new Date()}
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
          </CardContent>
        </Card>

        <div
          className={`gap-8 grid grid-cols-1 ${showFilters ? "lg:grid-cols-4" : "lg:grid-cols-1"}`}
        >
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="space-y-6 lg:col-span-1">
              <Card className="p-0">
                <CardContent className="-mt-5 p-6">
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
                          className="pl-10 focus:border-muted border-border focus:ring-muted/20 h-8"
                        />
                      </div>
                    </div>

                    {/* Vehicle Type */}
                    <div className="space-y-2">
                      <Label>Vehicle Type</Label>
                      <Select
                        value={selectedType}
                        onValueChange={handleTypeChange}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent
                          className="w-full max-h-60"
                          variant="professional"
                        >
                          {vehicleTypes.map((type) => (
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

                    {/* Vehicle Brand */}
                    <div className="space-y-2">
                      <Label>Brand</Label>
                      <Select
                        value={selectedBrand}
                        onValueChange={handleBrandChange}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent
                          className="w-full max-h-60"
                          variant="professional"
                        >
                          {getAvailableBrands().map((brand) => (
                            <SelectItem
                              key={brand.value}
                              value={brand.value}
                              variant="classic"
                            >
                              {brand.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Vehicle Model */}
                    <div className="space-y-2">
                      <Label>Model</Label>
                      <Select
                        value={selectedModel}
                        onValueChange={handleModelChange}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent
                          className="w-full max-h-60"
                          variant="professional"
                        >
                          {getAvailableModels().map((model) => (
                            <SelectItem
                              key={model.value}
                              value={model.value}
                              variant="classic"
                            >
                              {model.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Vehicle Year */}
                    <div className="space-y-2">
                      <Label>Year</Label>
                      <Select
                        value={selectedYear}
                        onValueChange={setSelectedYear}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent
                          className="w-full max-h-60"
                          variant="professional"
                        >
                          {getAvailableYears().map((year) => (
                            <SelectItem
                              key={year.value}
                              value={year.value}
                              variant="classic"
                            >
                              {year.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Fuel Type */}
                    <div className="space-y-2">
                      <Label>Fuel Type</Label>
                      <Select
                        value={selectedFuelType}
                        onValueChange={setSelectedFuelType}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent
                          className="w-full max-h-60"
                          variant="professional"
                        >
                          {fuelTypes.map((fuel) => (
                            <SelectItem
                              key={fuel.value}
                              value={fuel.value}
                              variant="classic"
                            >
                              {fuel.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Seating Capacity */}
                    <div className="space-y-2">
                      <Label>Seating Capacity</Label>
                      <Select
                        value={selectedSeatingCapacity}
                        onValueChange={setSelectedSeatingCapacity}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent
                          className="w-full max-h-60"
                          variant="professional"
                        >
                          {seatingCapacities.map((capacity) => (
                            <SelectItem
                              key={capacity.value}
                              value={capacity.value}
                              variant="classic"
                            >
                              {capacity.label}
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
                          max={maxPrice}
                          min={minPrice}
                          step={25}
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
          )}

          {/* Vehicles Grid */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-1"}>
            <div className="flex md:flex-row flex-col justify-between items-center mb-6">
              <div className="md:w-1/4 text-center text-slate-600 text-wrap md:text-start dark:text-slate-400">
                {filteredVehicles.length} vehicle
                {filteredVehicles.length !== 1 ? "s" : ""} found
                {filteredVehicles.length > 0 && (
                  <p>
                    (Showing {startIndex + 1}-{" "}
                    {Math.min(endIndex, filteredVehicles.length)} of{" "}
                    {filteredVehicles.length})
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
                      <SelectItem value="price-low" variant="classic">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-high" variant="classic">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="rating" variant="classic">
                        Highest Rated
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
                  <FaFilter className="w-4 h-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>
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
              <>
                <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
                  {paginatedVehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      pickupDate={pickupDate?.toISOString().split("T")[0]}
                      returnDate={returnDate?.toISOString().split("T")[0]}
                      location={selectedLocation}
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

                        {/* Current page and surrounding pages */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter((page) => {
                            return (
                              page === currentPage ||
                              Math.abs(page - currentPage) <= 1 ||
                              (currentPage <= 3 && page <= 3) ||
                              (currentPage >= totalPages - 2 &&
                                page >= totalPages - 2)
                            );
                          })
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
                        <div className="flex items-center gap-2">
                          <Label
                            htmlFor="goto-page"
                            className="whitespace-nowrap"
                          >
                            Go to:
                          </Label>
                          <Input
                            id="goto-page"
                            type="number"
                            min="1"
                            max={totalPages}
                            value=""
                            placeholder={currentPage.toString()}
                            className="border-slate-200 focus:border-primary focus:ring-primary/20 w-20 h-12"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                const value = parseInt(
                                  (e.target as HTMLInputElement).value
                                );
                                if (value >= 1 && value <= totalPages) {
                                  handlePageChange(value);
                                  (e.target as HTMLInputElement).value = "";
                                }
                              }
                            }}
                          />
                        </div>
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
