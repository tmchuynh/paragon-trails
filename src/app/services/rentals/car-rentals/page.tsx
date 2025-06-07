"use client";

import { useState, useEffect } from "react";
import { getLuxuryRentalCars } from "@/lib/utils/get/car";
import { LuxuryRentalCar } from "@/lib/interfaces/services/rentals";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function CarRentalsPage() {
  // State
  const [cars, setCars] = useState<LuxuryRentalCar[]>([]);
  const [filteredCars, setFilteredCars] = useState<LuxuryRentalCar[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [sortField, setSortField] = useState<string>("make");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Filter states
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [makeFilter, setMakeFilter] = useState<string | null>(null);
  const [modelFilter, setModelFilter] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [seatsFilter, setSeatsFilter] = useState<number | null>(null);
  const [transmissionFilter, setTransmissionFilter] = useState<string | null>(
    null
  );
  const [fuelTypeFilter, setFuelTypeFilter] = useState<string | null>(null);
  const [horsepowerFilter, setHorsepowerFilter] = useState<number | null>(null);
  const [colorFilter, setColorFilter] = useState<string | null>(null);
  const [featuresFilter, setFeaturesFilter] = useState<string[]>([]);
  const [minPriceFilter, setMinPriceFilter] = useState<number | null>(null);
  const [maxPriceFilter, setMaxPriceFilter] = useState<number | null>(null);
  const [availabilityFilter, setAvailabilityFilter] = useState<boolean | null>(
    null
  );
  const [minRentalAgeFilter, setMinRentalAgeFilter] = useState<number | null>(
    null
  );
  const [minDepositFilter, setMinDepositFilter] = useState<number | null>(null);
  const [maxDepositFilter, setMaxDepositFilter] = useState<number | null>(null);

  // Load all cars on initial render
  useEffect(() => {
    async function loadCars() {
      setIsLoading(true);
      try {
        const allCars = await getLuxuryRentalCars();
        setCars(allCars);
        setFilteredCars(allCars);
      } catch (error) {
        console.error("Error loading cars:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadCars();
  }, []);

  // Extract unique values for filters
  const uniqueTypes = Array.from(new Set(cars.map((car) => car.type))).sort();
  const uniqueMakes = Array.from(new Set(cars.map((car) => car.make))).sort();
  const uniqueModels = Array.from(new Set(cars.map((car) => car.model))).sort();
  const uniqueYears = Array.from(new Set(cars.map((car) => car.year))).sort(
    (a, b) => b - a
  );
  const uniqueSeats = Array.from(new Set(cars.map((car) => car.seats))).sort(
    (a, b) => a - b
  );
  const uniqueTransmissions = Array.from(
    new Set(cars.map((car) => car.transmission))
  ).sort();
  const uniqueFuelTypes = Array.from(
    new Set(cars.map((car) => car.fuelType))
  ).sort();
  const uniqueColors = Array.from(
    new Set(cars.flatMap((car) => car.colorOptions))
  ).sort();
  const uniqueFeatures = Array.from(
    new Set(cars.flatMap((car) => car.features))
  ).sort();
  const uniqueRentalAges = Array.from(
    new Set(cars.map((car) => car.minimumRentalAge))
  ).sort((a, b) => a - b);

  // Filtering logic
  useEffect(() => {
    let filtered = cars.filter((car) => {
      if (typeFilter && car.type !== typeFilter) return false;
      if (makeFilter && car.make !== makeFilter) return false;
      if (modelFilter && car.model !== modelFilter) return false;
      if (yearFilter && car.year !== yearFilter) return false;
      if (seatsFilter && car.seats !== seatsFilter) return false;
      if (transmissionFilter && car.transmission !== transmissionFilter)
        return false;
      if (fuelTypeFilter && car.fuelType !== fuelTypeFilter) return false;
      if (horsepowerFilter && car.horsepower < horsepowerFilter) return false;
      if (colorFilter && !car.colorOptions.includes(colorFilter)) return false;
      if (
        featuresFilter.length > 0 &&
        !featuresFilter.every((f) => car.features.includes(f))
      )
        return false;
      if (minPriceFilter !== null && car.rentalPricePerDay < minPriceFilter)
        return false;
      if (maxPriceFilter !== null && car.rentalPricePerDay > maxPriceFilter)
        return false;
      if (availabilityFilter !== null && car.available !== availabilityFilter)
        return false;
      if (
        minRentalAgeFilter !== null &&
        car.minimumRentalAge < minRentalAgeFilter
      )
        return false;
      if (minDepositFilter !== null && car.depositAmount < minDepositFilter)
        return false;
      if (maxDepositFilter !== null && car.depositAmount > maxDepositFilter)
        return false;
      return true;
    });

    // Sorting
    filtered = filtered.sort((a, b) => {
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
          valueA = a[sortField as keyof LuxuryRentalCar];
          valueB = b[sortField as keyof LuxuryRentalCar];
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

    setFilteredCars(filtered);
    setCurrentPage(1);
  }, [
    cars,
    typeFilter,
    makeFilter,
    modelFilter,
    yearFilter,
    seatsFilter,
    transmissionFilter,
    fuelTypeFilter,
    horsepowerFilter,
    colorFilter,
    featuresFilter,
    minPriceFilter,
    maxPriceFilter,
    availabilityFilter,
    minRentalAgeFilter,
    minDepositFilter,
    maxDepositFilter,
    sortField,
    sortDirection,
  ]);

  // Reset all filters
  const resetFilters = () => {
    setTypeFilter(null);
    setMakeFilter(null);
    setModelFilter(null);
    setYearFilter(null);
    setSeatsFilter(null);
    setTransmissionFilter(null);
    setFuelTypeFilter(null);
    setHorsepowerFilter(null);
    setColorFilter(null);
    setFeaturesFilter([]);
    setMinPriceFilter(null);
    setMaxPriceFilter(null);
    setAvailabilityFilter(null);
    setMinRentalAgeFilter(null);
    setMinDepositFilter(null);
    setMaxDepositFilter(null);
    setSortField("make");
    setSortDirection("asc");
  };

  // Handle features checkbox changes
  const handleFeatureChange = (feature: string, isChecked: boolean) => {
    setFeaturesFilter((prev) =>
      isChecked ? [...prev, feature] : prev.filter((f) => f !== feature)
    );
  };

  // Pagination
  const totalItems = filteredCars.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentCars = filteredCars.slice(startIndex, endIndex);

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
          <header>
            <h1 className="text-start">Car Rentals</h1>
            <h5 className="text-start">
              {filteredCars.length} car{filteredCars.length !== 1 ? "s" : ""}{" "}
              available
            </h5>
          </header>
          <div className="flex sm:flex-row flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
                size="sm"
                variant="outline"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
              {/* Sort dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
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
                <SelectItem value="6">6 per page</SelectItem>
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
              {/* Car Type */}
              <div className="space-y-2">
                <h5>Car Type</h5>
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
              {/* Seats */}
              <div className="space-y-2">
                <h5>Seats</h5>
                <Select
                  value={seatsFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setSeatsFilter(value === "all" ? null : parseInt(value))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Seats" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    {uniqueSeats.map((seats) => (
                      <SelectItem key={seats} value={seats.toString()}>
                        {seats} seats
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
                    <SelectItem value="all">Any</SelectItem>
                    {uniqueTransmissions.map((trans) => (
                      <SelectItem key={trans} value={trans}>
                        {trans}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Fuel Type */}
              <div className="space-y-2">
                <h5>Fuel Type</h5>
                <Select
                  value={fuelTypeFilter || "all"}
                  onValueChange={(value) =>
                    setFuelTypeFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Fuel Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    {uniqueFuelTypes.map((fuel) => (
                      <SelectItem key={fuel} value={fuel}>
                        {fuel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Horsepower */}
              <div className="space-y-2">
                <h5>Minimum Horsepower</h5>
                <Select
                  value={horsepowerFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setHorsepowerFilter(
                      value === "all" ? null : parseInt(value)
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Min. Horsepower" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    {[200, 300, 400, 500, 600].map((hp) => (
                      <SelectItem key={hp} value={hp.toString()}>
                        {hp}+
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
                    <SelectItem value="all">Any</SelectItem>
                    {uniqueColors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Features */}
              <div className="space-y-2">
                <h5>Features</h5>
                <div className="space-y-2 p-2 border border-border rounded-md max-h-48 overflow-y-auto">
                  {uniqueFeatures.slice(0, 15).map((feature) => (
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
                  {uniqueFeatures.length > 15 && (
                    <p className="text-muted-foreground text-xs">
                      + {uniqueFeatures.length - 15} more features available
                    </p>
                  )}
                </div>
              </div>
              {/* Rental Price */}
              <div className="space-y-2">
                <h5>Rental Price Per Day</h5>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={0}
                    placeholder="Min"
                    className="px-2 py-1 border rounded w-1/2"
                    value={minPriceFilter ?? ""}
                    onChange={(e) =>
                      setMinPriceFilter(
                        e.target.value === "" ? null : parseInt(e.target.value)
                      )
                    }
                  />
                  <input
                    type="number"
                    min={0}
                    placeholder="Max"
                    className="px-2 py-1 border rounded w-1/2"
                    value={maxPriceFilter ?? ""}
                    onChange={(e) =>
                      setMaxPriceFilter(
                        e.target.value === "" ? null : parseInt(e.target.value)
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
                      value === "all"
                        ? null
                        : value === "available"
                          ? true
                          : false
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
              {/* Minimum Rental Age */}
              <div className="space-y-2">
                <h5>Minimum Rental Age</h5>
                <Select
                  value={minRentalAgeFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setMinRentalAgeFilter(
                      value === "all" ? null : parseInt(value)
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Min. Rental Age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    {uniqueRentalAges.map((age) => (
                      <SelectItem key={age} value={age.toString()}>
                        {age}+
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Deposit Amount */}
              <div className="space-y-2">
                <h5>Deposit Amount</h5>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={0}
                    placeholder="Min"
                    className="px-2 py-1 border rounded w-1/2"
                    value={minDepositFilter ?? ""}
                    onChange={(e) =>
                      setMinDepositFilter(
                        e.target.value === "" ? null : parseInt(e.target.value)
                      )
                    }
                  />
                  <input
                    type="number"
                    min={0}
                    placeholder="Max"
                    className="px-2 py-1 border rounded w-1/2"
                    value={maxDepositFilter ?? ""}
                    onChange={(e) =>
                      setMaxDepositFilter(
                        e.target.value === "" ? null : parseInt(e.target.value)
                      )
                    }
                  />
                </div>
              </div>
              <Button className="w-full" onClick={resetFilters}>
                Reset All Filters
              </Button>
            </div>
          )}
          {/* Main Content - Car Cards */}
          <div
            className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
          >
            <div className="text-gray-500">
              Showing {startIndex + 1} to {endIndex} of {totalItems} cars
            </div>
            {currentCars.length > 0 ? (
              <>
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {currentCars.map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
                {renderPagination()}
              </>
            ) : (
              <div className="flex flex-col justify-center items-center shadow py-12 rounded-lg text-center">
                <div className="mb-4">
                  <X className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-semibold text-lg">No cars found</h3>
                <p className="mt-2 max-w-md text-gray-500">
                  We couldn't find any cars matching your filters. Try adjusting
                  your search criteria or reset filters.
                </p>
                <Button className="mt-4" onClick={resetFilters}>
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

// Car Card Component
function CarCard({ car }: { car: LuxuryRentalCar }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>
            {car.make} {car.model}
          </CardTitle>
          {car.available ? (
            <Badge variant="default">Available</Badge>
          ) : (
            <Badge variant="secondary">Unavailable</Badge>
          )}
        </div>
        <CardDescription>
          {car.year} • {car.type} • {car.pickUpCity}, {car.pickUpCountry}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {car.insuranceIncluded ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <XCircle className="w-4 h-4 text-red-500" />
            )}
            <span>
              {car.insuranceIncluded ? "Insurance included" : "No insurance"}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" /> {car.seats}{" "}
              seats
            </div>
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-muted-foreground" />{" "}
              {car.transmission}
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-muted-foreground" />{" "}
              {car.rentalPricePerDay} {car.currency}/day
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-muted-foreground" /> Deposit:{" "}
              {car.depositAmount} {car.currency}
            </div>
          </div>
          <div className="space-y-1 mt-2 text-sm">
            <div className="flex items-center gap-2">
              <span>
                {car.features.slice(0, 3).join(", ")}
                {car.features.length > 3 && (
                  <span> +{car.features.length - 3} more</span>
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
