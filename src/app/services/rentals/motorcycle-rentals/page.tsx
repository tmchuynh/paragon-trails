"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  MotorcycleFeature,
  MotorcycleType,
} from "@/lib/interfaces/services/rentals";
import { getAllMotorcycles } from "@/lib/utils/get/motorcycles";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MotorcycleRentalsPage() {
  // State for all motorcycles and filtered results
  const [motorcycles, setMotorcycles] = useState<any[]>([]);
  const [filteredMotorcycles, setFilteredMotorcycles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  // Sorting state
  const [sortField, setSortField] = useState<string>("rentalPricePerDay");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Filter states
  const [cityFilter, setCityFilter] = useState<string[]>([]);
  const [makeFilter, setMakeFilter] = useState<string[]>([]);
  const [modelFilter, setModelFilter] = useState<string[]>([]);
  const [transmissionFilter, setTransmissionFilter] = useState<string[]>([]);
  const [engineSizeFilter, setEngineSizeFilter] = useState<string[]>([]);
  const [seatCapacityFilter, setSeatCapacityFilter] = useState<number[]>([]);
  const [featuresFilter, setFeaturesFilter] = useState<MotorcycleFeature[]>([]);
  const [pickupLocationFilter, setPickupLocationFilter] = useState<string[]>(
    []
  );
  const [yearFilter, setYearFilter] = useState<number[]>([]);
  const [hasStorageFilter, setHasStorageFilter] = useState<boolean | null>(
    null
  );
  const [availabilityFilter, setAvailabilityFilter] = useState<boolean | null>(
    null
  );
  const [requirementsFilter, setRequirementsFilter] = useState<string[]>([]);

  // Load all motorcycles on component mount
  useEffect(() => {
    async function loadMotorcycles() {
      try {
        const motorcycleData = await getAllMotorcycles();
        setMotorcycles(motorcycleData);
        setFilteredMotorcycles(motorcycleData);
      } catch (error) {
        console.error("Error loading motorcycles:", error);
      } finally {
        setLoading(false);
      }
    }

    loadMotorcycles();
  }, []);

  // Extract unique values for filters
  const uniqueCities = [
    ...new Set(motorcycles.map((m) => m.pickUpCity)),
  ].sort();
  const uniqueMakes = [...new Set(motorcycles.map((m) => m.make))].sort();
  const uniqueModels = [...new Set(motorcycles.map((m) => m.model))].sort();
  const uniqueTransmissions = [
    ...new Set(motorcycles.map((m) => m.transmission)),
  ].sort();
  const uniqueEngineSizes = [
    ...new Set(motorcycles.map((m) => m.engineSize)),
  ].sort();
  const uniqueSeats = [
    ...new Set(motorcycles.map((m) => m.seatCapacity)),
  ].sort();
  const uniqueYears = [...new Set(motorcycles.map((m) => m.year))].sort();
  const uniquePickupLocations = [
    ...new Set(motorcycles.map((m) => m.pickUpLocation)),
  ].sort();

  // Get all unique features across all motorcycles
  const allFeatures = motorcycles.flatMap((m) => m.features);
  const uniqueFeatures = [...new Set(allFeatures)].sort();

  // Get all unique requirements across all motorcycles
  const allRequirements = motorcycles.flatMap((m) => m.requirements);
  const uniqueRequirements = [...new Set(allRequirements)].sort();

  // Apply filters whenever filter states change
  useEffect(() => {
    let filtered = [...motorcycles];

    // Apply city filter
    if (cityFilter.length > 0) {
      filtered = filtered.filter((m) => cityFilter.includes(m.pickUpCity));
    }

    // Apply make filter
    if (makeFilter.length > 0) {
      filtered = filtered.filter((m) => makeFilter.includes(m.make));
    }

    // Apply model filter
    if (modelFilter.length > 0) {
      filtered = filtered.filter((m) => modelFilter.includes(m.model));
    }

    // Apply transmission filter
    if (transmissionFilter.length > 0) {
      filtered = filtered.filter((m) =>
        transmissionFilter.includes(m.transmission)
      );
    }

    // Apply engine size filter
    if (engineSizeFilter.length > 0) {
      filtered = filtered.filter((m) =>
        engineSizeFilter.includes(m.engineSize)
      );
    }

    // Apply seat capacity filter
    if (seatCapacityFilter.length > 0) {
      filtered = filtered.filter((m) =>
        seatCapacityFilter.includes(m.seatCapacity)
      );
    }

    // Apply features filter
    if (featuresFilter.length > 0) {
      filtered = filtered.filter((m) =>
        featuresFilter.every((feature) => m.features.includes(feature))
      );
    }

    // Apply pickup location filter
    if (pickupLocationFilter.length > 0) {
      filtered = filtered.filter((m) =>
        pickupLocationFilter.includes(m.pickUpLocation)
      );
    }

    // Apply year filter
    if (yearFilter.length > 0) {
      filtered = filtered.filter((m) => yearFilter.includes(m.year));
    }

    // Apply storage filter
    if (hasStorageFilter !== null) {
      filtered = filtered.filter((m) => m.hasStorage === hasStorageFilter);
    }

    // Apply availability filter
    if (availabilityFilter !== null) {
      filtered = filtered.filter((m) => m.available === availabilityFilter);
    }

    // Apply requirements filter
    if (requirementsFilter.length > 0) {
      filtered = filtered.filter((m) =>
        requirementsFilter.every((req) => m.requirements.includes(req))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortField] > b[sortField]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredMotorcycles(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [
    motorcycles,
    cityFilter,
    makeFilter,
    modelFilter,
    transmissionFilter,
    engineSizeFilter,
    seatCapacityFilter,
    featuresFilter,
    pickupLocationFilter,
    yearFilter,
    hasStorageFilter,
    availabilityFilter,
    requirementsFilter,
    sortField,
    sortDirection,
  ]);

  // Helper function to toggle filter items
  const toggleFilter = (
    filterArray: any[],
    setFilterArray: React.Dispatch<React.SetStateAction<any[]>>,
    item: any
  ) => {
    if (filterArray.includes(item)) {
      setFilterArray(filterArray.filter((i) => i !== item));
    } else {
      setFilterArray([...filterArray, item]);
    }
  };

  // Reset all filters
  const resetAllFilters = () => {
    setCityFilter([]);
    setMakeFilter([]);
    setModelFilter([]);
    setTransmissionFilter([]);
    setEngineSizeFilter([]);
    setSeatCapacityFilter([]);
    setFeaturesFilter([]);
    setPickupLocationFilter([]);
    setYearFilter([]);
    setHasStorageFilter(null);
    setAvailabilityFilter(null);
    setRequirementsFilter([]);
  };

  // Pagination calculations
  const totalItems = filteredMotorcycles.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentMotorcycles = filteredMotorcycles.slice(startIndex, endIndex);

  // Pagination renderer
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    let pageNumbers: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pageNumbers.push(1);

      if (currentPage <= 3) {
        pageNumbers.push(2, 3, 4, "ellipsis");
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          "ellipsis",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1
        );
      } else {
        pageNumbers.push(
          "ellipsis",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "ellipsis"
        );
      }

      pageNumbers.push(totalPages);
    }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {pageNumbers.map((page, index) =>
            page === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={page === currentPage}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              aria-disabled={currentPage === totalPages}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  if (loading) {
    return <Loading />;
  }

  // Map motorcycle type to more readable label
  const formatMotorcycleType = (type: MotorcycleType): string => {
    return type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ");
  };

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header and Controls */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
          <header>
            <h1 className="text-start">Motorcycle Rentals</h1>
            <h5 className="text-start">
              {filteredMotorcycles.length} motorcycle
              {filteredMotorcycles.length !== 1 ? "s" : ""} available
            </h5>
          </header>

          <div className="flex sm:flex-row flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
                size="sm"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>

              {/* Sort dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("rentalPricePerDay");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    By Price{" "}
                    {sortField === "rentalPricePerDay" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("make");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    By Make{" "}
                    {sortField === "make" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("year");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    By Year{" "}
                    {sortField === "year" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Items per page selector */}
            <Select
              value={pageSize.toString()}
              onValueChange={(value) => setPageSize(parseInt(value))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Motorcycles per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12 per page</SelectItem>
                <SelectItem value="24">24 per page</SelectItem>
                <SelectItem value="36">36 per page</SelectItem>
                <SelectItem value="48">48 per page</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="gap-6 grid grid-cols-1 lg:grid-cols-4">
          {/* Filters Panel */}
          {showFilters && (
            <div className="space-y-6 lg:col-span-1 shadow p-6 border border-border rounded-lg h-fit">
              <div className="flex justify-between items-center">
                <h3>Filters</h3>
                <Button variant="ghost" onClick={resetAllFilters}>
                  Reset All
                </Button>
              </div>

              {/* City filter */}
              <div className="space-y-2">
                <h5>City</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueCities.map((city) => (
                    <div key={city} className="flex items-center space-x-2">
                      <Checkbox
                        id={`city-${city}`}
                        checked={cityFilter.includes(city)}
                        onCheckedChange={() =>
                          toggleFilter(cityFilter, setCityFilter, city)
                        }
                      />
                      <Label
                        htmlFor={`city-${city}`}
                        className="text-sm cursor-pointer"
                      >
                        {city}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Make filter */}
              <div className="space-y-2">
                <h5>Make</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueMakes.map((make) => (
                    <div key={make} className="flex items-center space-x-2">
                      <Checkbox
                        id={`make-${make}`}
                        checked={makeFilter.includes(make)}
                        onCheckedChange={() =>
                          toggleFilter(makeFilter, setMakeFilter, make)
                        }
                      />
                      <Label
                        htmlFor={`make-${make}`}
                        className="text-sm cursor-pointer"
                      >
                        {make}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Model filter */}
              <div className="space-y-2">
                <h5>Model</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueModels.map((model) => (
                    <div key={model} className="flex items-center space-x-2">
                      <Checkbox
                        id={`model-${model}`}
                        checked={modelFilter.includes(model)}
                        onCheckedChange={() =>
                          toggleFilter(modelFilter, setModelFilter, model)
                        }
                      />
                      <Label
                        htmlFor={`model-${model}`}
                        className="text-sm cursor-pointer"
                      >
                        {model}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transmission filter */}
              <div className="space-y-2">
                <h5>Transmission</h5>
                <div className="space-y-1 p-2 border rounded-lg">
                  {uniqueTransmissions.map((transmission) => (
                    <div
                      key={transmission}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`transmission-${transmission}`}
                        checked={transmissionFilter.includes(transmission)}
                        onCheckedChange={() =>
                          toggleFilter(
                            transmissionFilter,
                            setTransmissionFilter,
                            transmission
                          )
                        }
                      />
                      <Label
                        htmlFor={`transmission-${transmission}`}
                        className="text-sm cursor-pointer"
                      >
                        {transmission.charAt(0).toUpperCase() +
                          transmission.slice(1)}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engine Size filter */}
              <div className="space-y-2">
                <h5>Engine Size</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueEngineSizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={`engine-${size}`}
                        checked={engineSizeFilter.includes(size)}
                        onCheckedChange={() =>
                          toggleFilter(
                            engineSizeFilter,
                            setEngineSizeFilter,
                            size
                          )
                        }
                      />
                      <Label
                        htmlFor={`engine-${size}`}
                        className="text-sm cursor-pointer"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seat Capacity filter */}
              <div className="space-y-2">
                <h5>Seat Capacity</h5>
                <div className="space-y-1 p-2 border rounded-lg">
                  {uniqueSeats.map((capacity) => (
                    <div key={capacity} className="flex items-center space-x-2">
                      <Checkbox
                        id={`seat-${capacity}`}
                        checked={seatCapacityFilter.includes(capacity)}
                        onCheckedChange={() =>
                          toggleFilter(
                            seatCapacityFilter,
                            setSeatCapacityFilter,
                            capacity
                          )
                        }
                      />
                      <Label
                        htmlFor={`seat-${capacity}`}
                        className="text-sm cursor-pointer"
                      >
                        {capacity} {capacity === 1 ? "person" : "people"}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Storage filter */}
              <div className="space-y-2">
                <h5>Storage</h5>
                <div className="space-y-1 p-2 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="has-storage"
                      checked={hasStorageFilter === true}
                      onCheckedChange={(checked) =>
                        setHasStorageFilter(
                          checked === true
                            ? true
                            : hasStorageFilter === true
                              ? null
                              : false
                        )
                      }
                    />
                    <Label
                      htmlFor="has-storage"
                      className="text-sm cursor-pointer"
                    >
                      Has Storage
                    </Label>
                  </div>
                </div>
              </div>

              {/* Features filter */}
              <div className="space-y-2">
                <h5>Features</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={`feature-${feature}`}
                        checked={featuresFilter.includes(
                          feature as MotorcycleFeature
                        )}
                        onCheckedChange={() =>
                          toggleFilter(
                            featuresFilter,
                            setFeaturesFilter,
                            feature as MotorcycleFeature
                          )
                        }
                      />
                      <Label
                        htmlFor={`feature-${feature}`}
                        className="text-sm cursor-pointer"
                      >
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pickup Location filter */}
              <div className="space-y-2">
                <h5>Pickup Location</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniquePickupLocations.map(
                    (location) =>
                      location && (
                        <div
                          key={location}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`location-${location}`}
                            checked={pickupLocationFilter.includes(location)}
                            onCheckedChange={() =>
                              toggleFilter(
                                pickupLocationFilter,
                                setPickupLocationFilter,
                                location
                              )
                            }
                          />
                          <Label
                            htmlFor={`location-${location}`}
                            className="text-sm cursor-pointer"
                          >
                            {location}
                          </Label>
                        </div>
                      )
                  )}
                </div>
              </div>

              {/* Year filter */}
              <div className="space-y-2">
                <h5>Year</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueYears.map((year) => (
                    <div key={year} className="flex items-center space-x-2">
                      <Checkbox
                        id={`year-${year}`}
                        checked={yearFilter.includes(year)}
                        onCheckedChange={() =>
                          toggleFilter(yearFilter, setYearFilter, year)
                        }
                      />
                      <Label
                        htmlFor={`year-${year}`}
                        className="text-sm cursor-pointer"
                      >
                        {year}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability filter */}
              <div className="space-y-2">
                <h5>Availability</h5>
                <div className="space-y-1 p-2 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="available"
                      checked={availabilityFilter === true}
                      onCheckedChange={(checked) =>
                        setAvailabilityFilter(
                          checked === true
                            ? true
                            : availabilityFilter === true
                              ? null
                              : false
                        )
                      }
                    />
                    <Label
                      htmlFor="available"
                      className="text-sm cursor-pointer"
                    >
                      Available Now
                    </Label>
                  </div>
                </div>
              </div>

              {/* Requirements filter */}
              <div className="space-y-2">
                <h5>Requirements</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueRequirements.map((requirement) => (
                    <div
                      key={requirement}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`requirement-${requirement}`}
                        checked={requirementsFilter.includes(requirement)}
                        onCheckedChange={() =>
                          toggleFilter(
                            requirementsFilter,
                            setRequirementsFilter,
                            requirement
                          )
                        }
                      />
                      <Label
                        htmlFor={`requirement-${requirement}`}
                        className="text-sm cursor-pointer"
                      >
                        {requirement}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <Button
                variant="outline"
                className="w-full"
                onClick={resetAllFilters}
              >
                Reset All Filters
              </Button>
            </div>
          )}

          {/* Main Content - Motorcycle Cards */}
          <div
            className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
          >
            {/* Results count */}
            <div className="text-gray-500">
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
              {totalItems} motorcycles
            </div>

            {currentMotorcycles.length > 0 ? (
              <>
                {/* Motorcycle Cards in a grid layout */}
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {currentMotorcycles.map((motorcycle) => (
                    <Card key={motorcycle.id} className="flex flex-col h-full">
                      {/* Motorcycle Image */}
                      <div className="relative w-full h-48">
                        {motorcycle.imageUrl ? (
                          <Image
                            src={motorcycle.imageUrl}
                            alt={`${motorcycle.make} ${motorcycle.model}`}
                            className="rounded-t-lg object-cover"
                            layout="fill"
                          />
                        ) : (
                          <div className="flex justify-center items-center bg-muted rounded-t-lg w-full h-full">
                            No image available
                          </div>
                        )}

                        {/* Availability badge */}
                        <Badge
                          className="top-2 right-2 absolute"
                          variant={
                            motorcycle.available ? "success" : "destructive"
                          }
                        >
                          {motorcycle.available ? "Available" : "Unavailable"}
                        </Badge>
                      </div>

                      <CardContent className="flex flex-col flex-grow p-4">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-bold">
                            {motorcycle.make} {motorcycle.model}
                          </h3>
                          <span className="font-semibold text-lg">
                            {motorcycle.rentalPricePerDay} {motorcycle.currency}
                            /day
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">
                            {formatMotorcycleType(motorcycle.type)}
                          </Badge>
                          <Badge variant="outline">
                            {motorcycle.engineSize}
                          </Badge>
                          <Badge variant="outline">{motorcycle.year}</Badge>
                        </div>

                        <div className="flex items-center mb-2">
                          <p className="text-gray-600 text-sm">
                            {motorcycle.transmission.charAt(0).toUpperCase() +
                              motorcycle.transmission.slice(1)}{" "}
                            • {motorcycle.seatCapacity}{" "}
                            {motorcycle.seatCapacity === 1 ? "seat" : "seats"} •{" "}
                            {motorcycle.color}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {motorcycle.features
                            .slice(0, 3)
                            .map((feature: string, index: number) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {feature}
                              </Badge>
                            ))}
                          {motorcycle.features.length > 3 && (
                            <Tooltip>
                              <TooltipTrigger>
                                <Badge variant="secondary" className="text-xs">
                                  +{motorcycle.features.length - 3} more
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="flex flex-col gap-1">
                                  {motorcycle.features
                                    .slice(3)
                                    .map((feature: string, index: number) => (
                                      <span key={index}>{feature}</span>
                                    ))}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </div>

                        <div className="mt-auto">
                          <p className="mb-2 text-sm">
                            <strong>Pickup:</strong> {motorcycle.pickUpLocation}
                            , {motorcycle.pickUpCity}
                          </p>

                          <div className="flex gap-2">
                            <Button className="flex-1">View Details</Button>
                            <Button variant="outline" className="flex-1">
                              Reserve Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {renderPagination()}
              </>
            ) : (
              <div className="flex flex-col justify-center items-center shadow py-12 rounded-lg text-center">
                <div className="mb-4">
                  <X className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-semibold text-lg">No motorcycles found</h3>
                <p className="mt-2 max-w-md text-gray-500">
                  We couldn't find any motorcycles matching your filters. Try
                  adjusting your search criteria or reset filters.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={resetAllFilters}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
