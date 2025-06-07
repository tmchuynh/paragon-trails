"use client";

import { useEffect, useState } from "react";
import { getAllMotorcycles } from "@/lib/utils/get/motorcycles";
import {
  Motorcycle,
  MotorcycleFeature,
} from "@/lib/interfaces/services/rentals";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/Loading";
import {
  Filter,
  SlidersHorizontal,
  X,
  CheckCircle,
  XCircle,
  Check,
  Bike,
  Search,
  Car,
  DollarSign,
  Calendar,
  User,
  Key,
  Fuel,
  Settings,
  Palette,
  Star,
  List,
  ArrowUpDown,
} from "lucide-react";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function MotorcyclesRentalPage() {
  // State
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [filteredMotorcycles, setFilteredMotorcycles] = useState<Motorcycle[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [sortField, setSortField] = useState<string>("make");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Filters
  const [makeFilter, setMakeFilter] = useState<string | null>(null);
  const [modelFilter, setModelFilter] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [engineSizeFilter, setEngineSizeFilter] = useState<string | null>(null);
  const [transmissionFilter, setTransmissionFilter] = useState<string | null>(
    null
  );
  const [colorFilter, setColorFilter] = useState<string | null>(null);
  const [seatCapacityFilter, setSeatCapacityFilter] = useState<number | null>(
    null
  );
  const [minPriceFilter, setMinPriceFilter] = useState<number | null>(null);
  const [maxPriceFilter, setMaxPriceFilter] = useState<number | null>(null);
  const [availabilityFilter, setAvailabilityFilter] = useState<boolean | null>(
    null
  );
  const [hasStorageFilter, setHasStorageFilter] = useState<boolean | null>(
    null
  );
  const [featuresFilter, setFeaturesFilter] = useState<string[]>([]);

  // Load all motorcycles
  useEffect(() => {
    async function loadMotorcycles() {
      setIsLoading(true);
      try {
        const all = await getAllMotorcycles();
        setMotorcycles(all);
        setFilteredMotorcycles(all);
      } catch (error) {
        console.error("Error loading motorcycles:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadMotorcycles();
  }, []);

  // Unique values for filters
  const uniqueMakes = Array.from(
    new Set(motorcycles.map((m) => m.make))
  ).sort();
  const uniqueModels = Array.from(
    new Set(motorcycles.map((m) => m.model))
  ).sort();
  const uniqueYears = Array.from(new Set(motorcycles.map((m) => m.year))).sort(
    (a, b) => b - a
  );
  const uniqueTypes = Array.from(
    new Set(motorcycles.map((m) => m.type))
  ).sort();
  const uniqueEngineSizes = Array.from(
    new Set(motorcycles.map((m) => m.engineSize))
  ).sort();
  const uniqueTransmissions = Array.from(
    new Set(motorcycles.map((m) => m.transmission))
  ).sort();
  const uniqueColors = Array.from(
    new Set(motorcycles.map((m) => m.color))
  ).sort();
  const uniqueSeatCapacities = Array.from(
    new Set(motorcycles.map((m) => m.seatCapacity))
  ).sort((a, b) => a - b);
  const uniqueFeatures = Array.from(
    new Set(motorcycles.flatMap((m) => m.features || []))
  ).sort();

  // Filtering logic
  useEffect(() => {
    let filtered = motorcycles.filter((m) => {
      if (makeFilter && m.make !== makeFilter) return false;
      if (modelFilter && m.model !== modelFilter) return false;
      if (yearFilter && m.year !== yearFilter) return false;
      if (typeFilter && m.type !== typeFilter) return false;
      if (engineSizeFilter && m.engineSize !== engineSizeFilter) return false;
      if (transmissionFilter && m.transmission !== transmissionFilter)
        return false;
      if (colorFilter && m.color !== colorFilter) return false;
      if (seatCapacityFilter && m.seatCapacity !== seatCapacityFilter)
        return false;
      if (minPriceFilter !== null && m.rentalPricePerDay < minPriceFilter)
        return false;
      if (maxPriceFilter !== null && m.rentalPricePerDay > maxPriceFilter)
        return false;
      if (availabilityFilter !== null && m.available !== availabilityFilter)
        return false;
      if (hasStorageFilter !== null && m.hasStorage !== hasStorageFilter)
        return false;
      if (featuresFilter.length > 0) {
        if (
          !featuresFilter.every((f) =>
            m.features.includes(f as MotorcycleFeature)
          )
        )
          return false;
      }
      return true;
    });

    // Sorting
    filtered = [...filtered].sort((a, b) => {
      let valueA: any, valueB: any;
      switch (sortField) {
        case "make":
          valueA = a.make.toLowerCase();
          valueB = b.make.toLowerCase();
          break;
        case "model":
          valueA = a.model.toLowerCase();
          valueB = b.model.toLowerCase();
          break;
        case "year":
          valueA = a.year;
          valueB = b.year;
          break;
        case "rentalPricePerDay":
          valueA = a.rentalPricePerDay;
          valueB = b.rentalPricePerDay;
          break;
        default:
          valueA = a[sortField as keyof Motorcycle];
          valueB = b[sortField as keyof Motorcycle];
      }
      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortDirection === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredMotorcycles(filtered);
    setCurrentPage(1);
  }, [
    motorcycles,
    makeFilter,
    modelFilter,
    yearFilter,
    typeFilter,
    engineSizeFilter,
    transmissionFilter,
    colorFilter,
    seatCapacityFilter,
    minPriceFilter,
    maxPriceFilter,
    availabilityFilter,
    hasStorageFilter,
    featuresFilter,
    sortField,
    sortDirection,
  ]);

  // Pagination
  const totalItems = filteredMotorcycles.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentMotorcycles = filteredMotorcycles.slice(startIndex, endIndex);

  // Reset filters
  const resetFilters = () => {
    setMakeFilter(null);
    setModelFilter(null);
    setYearFilter(null);
    setTypeFilter(null);
    setEngineSizeFilter(null);
    setTransmissionFilter(null);
    setColorFilter(null);
    setSeatCapacityFilter(null);
    setMinPriceFilter(null);
    setMaxPriceFilter(null);
    setAvailabilityFilter(null);
    setHasStorageFilter(null);
    setFeaturesFilter([]);
    setSortField("make");
    setSortDirection("asc");
  };

  // Handle features checkbox
  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFeaturesFilter((prev) =>
      checked ? [...prev, feature] : prev.filter((f) => f !== feature)
    );
  };

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
          {pageNumbers.map((page, idx) =>
            page === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${idx}`}>
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

  if (isLoading) return <Loading />;

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header */}
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
                      setSortField("model");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    By Model{" "}
                    {sortField === "model" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("year");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Year{" "}
                    {sortField === "year" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("rentalPricePerDay");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Price{" "}
                    {sortField === "rentalPricePerDay" &&
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
                <SelectValue placeholder="Items per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9">9 per page</SelectItem>
                <SelectItem value="12">12 per page</SelectItem>
                <SelectItem value="18">18 per page</SelectItem>
                <SelectItem value="24">24 per page</SelectItem>
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
                <Button variant="ghost" onClick={resetFilters}>
                  Reset All
                </Button>
              </div>
              {/* Make */}
              <div className="space-y-2">
                <h5>Make</h5>
                <Select
                  value={makeFilter || "all"}
                  onValueChange={(value) =>
                    setMakeFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Makes</SelectItem>
                    {uniqueMakes.map((make) => (
                      <SelectItem key={make} value={make}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Model */}
              <div className="space-y-2">
                <h5>Model</h5>
                <Select
                  value={modelFilter || "all"}
                  onValueChange={(value) =>
                    setModelFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Models</SelectItem>
                    {uniqueModels.map((model) => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Year */}
              <div className="space-y-2">
                <h5>Year</h5>
                <Select
                  value={yearFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setYearFilter(value === "all" ? null : parseInt(value))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {uniqueYears.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Type */}
              <div className="space-y-2">
                <h5>Type</h5>
                <Select
                  value={typeFilter || "all"}
                  onValueChange={(value) =>
                    setTypeFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {uniqueTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Engine Size */}
              <div className="space-y-2">
                <h5>Engine Size</h5>
                <Select
                  value={engineSizeFilter || "all"}
                  onValueChange={(value) =>
                    setEngineSizeFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Engine Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    {uniqueEngineSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Transmission */}
              <div className="space-y-2">
                <h5>Transmission</h5>
                <Select
                  value={transmissionFilter || "all"}
                  onValueChange={(value) =>
                    setTransmissionFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {uniqueTransmissions.map((trans) => (
                      <SelectItem key={trans} value={trans}>
                        {trans.charAt(0).toUpperCase() + trans.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Color */}
              <div className="space-y-2">
                <h5>Color</h5>
                <Select
                  value={colorFilter || "all"}
                  onValueChange={(value) =>
                    setColorFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Colors</SelectItem>
                    {uniqueColors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Seat Capacity */}
              <div className="space-y-2">
                <h5>Seat Capacity</h5>
                <Select
                  value={seatCapacityFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setSeatCapacityFilter(
                      value === "all" ? null : parseInt(value)
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Seat Capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {uniqueSeatCapacities.map((seat) => (
                      <SelectItem key={seat} value={seat.toString()}>
                        {seat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Rental Price */}
              <div className="space-y-2">
                <h5>Rental Price Per Day</h5>
                <div className="flex gap-2">
                  <input
                    type="number"
                    className="px-2 py-1 border rounded w-1/2"
                    placeholder="Min"
                    value={minPriceFilter ?? ""}
                    onChange={(e) =>
                      setMinPriceFilter(
                        e.target.value ? parseInt(e.target.value) : null
                      )
                    }
                  />
                  <input
                    type="number"
                    className="px-2 py-1 border rounded w-1/2"
                    placeholder="Max"
                    value={maxPriceFilter ?? ""}
                    onChange={(e) =>
                      setMaxPriceFilter(
                        e.target.value ? parseInt(e.target.value) : null
                      )
                    }
                  />
                </div>
              </div>
              {/* Availability */}
              <div className="space-y-2">
                <h5>Availability</h5>
                <Select
                  value={
                    availabilityFilter === null
                      ? "all"
                      : availabilityFilter
                        ? "available"
                        : "unavailable"
                  }
                  onValueChange={(value) =>
                    setAvailabilityFilter(
                      value === "all" ? null : value === "available"
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="available">Available Only</SelectItem>
                    <SelectItem value="unavailable">
                      Unavailable Only
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Has Storage */}
              <div className="space-y-2">
                <h5>Storage</h5>
                <Select
                  value={
                    hasStorageFilter === null
                      ? "all"
                      : hasStorageFilter
                        ? "yes"
                        : "no"
                  }
                  onValueChange={(value) =>
                    setHasStorageFilter(
                      value === "all" ? null : value === "yes"
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Has Storage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="yes">With Storage</SelectItem>
                    <SelectItem value="no">No Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Features */}
              <div className="space-y-2">
                <h5>Features</h5>
                <div className="space-y-2 p-2 border border-border rounded-md max-h-48 overflow-y-auto">
                  {uniqueFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={`feature-${feature}`}
                        checked={featuresFilter.includes(feature)}
                        onCheckedChange={(checked) =>
                          handleFeatureChange(feature, checked === true)
                        }
                      />
                      <label
                        htmlFor={`feature-${feature}`}
                        className="peer-disabled:opacity-70 text-sm leading-none peer-disabled:cursor-not-allowed"
                      >
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={resetFilters}
              >
                Reset All Filters
              </Button>
            </div>
          )}
          {/* Main Content */}
          <div
            className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
          >
            <div className="text-gray-500">
              Showing {startIndex + 1} to {endIndex} of {totalItems} motorcycles
            </div>
            {currentMotorcycles.length > 0 ? (
              <>
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {currentMotorcycles.map((motorcycle) => (
                    <MotorcycleCard
                      key={motorcycle.id}
                      motorcycle={motorcycle}
                    />
                  ))}
                </div>
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
                  onClick={resetFilters}
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

// Motorcycle Card Component
function MotorcycleCard({ motorcycle }: { motorcycle: Motorcycle }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>
            {motorcycle.make} {motorcycle.model}
          </CardTitle>
          {motorcycle.available ? (
            <Badge variant="default">Available</Badge>
          ) : (
            <Badge variant="secondary">Unavailable</Badge>
          )}
        </div>
        <CardDescription>
          {motorcycle.type.charAt(0).toUpperCase() + motorcycle.type.slice(1)} •{" "}
          {motorcycle.year}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2">
              {motorcycle.engineSize} Engine
            </div>
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-muted-foreground" />
              {motorcycle.transmission.charAt(0).toUpperCase() +
                motorcycle.transmission.slice(1)}
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-muted-foreground" />{" "}
              {motorcycle.rentalPricePerDay} {motorcycle.currency}/day
            </div>
            <div className="flex items-center gap-2">{motorcycle.color}</div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              {motorcycle.seatCapacity} Seat
              {motorcycle.seatCapacity > 1 ? "s" : ""}
            </div>
            <div className="flex items-center gap-2">
              {motorcycle.hasStorage ? "Has Storage" : "No Storage"}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Bike className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">
              {motorcycle.pickUpCity}, {motorcycle.pickUpCountry}
              {motorcycle.pickUpLocation
                ? ` • ${motorcycle.pickUpLocation}`
                : ""}
            </span>
          </div>

          <div className="space-y-1 mt-2 text-sm">
            <div className="flex items-center gap-2">
              <span>
                {motorcycle.features.slice(0, 3).join(", ")}
                {motorcycle.features.length > 3 && (
                  <span> +{motorcycle.features.length - 3} more</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
