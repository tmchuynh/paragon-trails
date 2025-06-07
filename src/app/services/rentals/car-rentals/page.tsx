"use client";

import { useState, useEffect } from "react";
import { LuxuryRentalCar } from "@/lib/interfaces/services/rentals";
import { getLuxuryRentalCars } from "@/lib/utils/get/car";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Loading from "@/components/Loading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  Car,
  Filter,
  Info,
  Check,
  X,
  MapPin,
  Calendar,
  Users,
  Gauge,
  Palette,
  DollarSign,
  Shield,
  Clock,
  BanknoteIcon,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Filter state interface
interface CarFilters {
  city: string | null;
  make: string | null;
  model: string | null;
  year: number | null;
  type: string | null;
  seats: number | null;
  transmission: string | null;
  fuelType: string | null;
  minHorsepower: number | null;
  maxHorsepower: number | null;
  color: string | null;
  feature: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  available: boolean | null;
  pickUpLocation: string | null;
  insuranceIncluded: boolean | null;
  minRentalAge: number | null;
  maxDeposit: number | null;
}

export default function CarRentalsPage() {
  const [cars, setCars] = useState<LuxuryRentalCar[]>([]);
  const [filteredCars, setFilteredCars] = useState<LuxuryRentalCar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState<string>("price-low");

  // Initialize filter state with null values
  const [filters, setFilters] = useState<CarFilters>({
    city: null,
    make: null,
    model: null,
    year: null,
    type: null,
    seats: null,
    transmission: null,
    fuelType: null,
    minHorsepower: null,
    maxHorsepower: null,
    color: null,
    feature: null,
    minPrice: null,
    maxPrice: null,
    available: null,
    pickUpLocation: null,
    insuranceIncluded: null,
    minRentalAge: null,
    maxDeposit: null,
  });

  // Arrays for unique filter values
  const [uniqueCities, setUniqueCities] = useState<string[]>([]);
  const [uniqueMakes, setUniqueMakes] = useState<string[]>([]);
  const [uniqueModels, setUniqueModels] = useState<string[]>([]);
  const [uniqueYears, setUniqueYears] = useState<number[]>([]);
  const [uniqueTypes, setUniqueTypes] = useState<string[]>([]);
  const [uniqueSeats, setUniqueSeats] = useState<number[]>([]);
  const [uniqueTransmissions, setUniqueTransmissions] = useState<string[]>([]);
  const [uniqueFuelTypes, setUniqueFuelTypes] = useState<string[]>([]);
  const [horsepowerRange, setHorsepowerRange] = useState<[number, number]>([
    0, 0,
  ]);
  const [uniqueColors, setUniqueColors] = useState<string[]>([]);
  const [uniqueFeatures, setUniqueFeatures] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [uniquePickUpLocations, setUniquePickUpLocations] = useState<string[]>(
    []
  );
  const [ageRange, setAgeRange] = useState<[number, number]>([0, 0]);
  const [depositRange, setDepositRange] = useState<[number, number]>([0, 0]);
  const [horsepowerSliderValue, setHorsepowerSliderValue] = useState<
    [number, number]
  >([0, 1000]);
  const [priceSliderValue, setPriceSliderValue] = useState<[number, number]>([
    0, 5000,
  ]);
  const [depositSliderValue, setDepositSliderValue] = useState<
    [number, number]
  >([0, 10000]);

  // Load all cars and extract unique values for filters
  useEffect(() => {
    async function loadCars() {
      try {
        console.log("Starting to load luxury cars...");
        const allCars = await getLuxuryRentalCars();

        console.log(`Loaded ${allCars.length} cars`);

        // Debug output for first few cars if any
        if (allCars.length > 0) {
          console.log("Sample car data:", allCars.slice(0, 2));
        } else {
          console.warn("No cars were loaded from the data source");
          setError("No car data available. Please try again later.");
        }

        setCars(allCars);
        setFilteredCars(allCars);

        // Only extract filter values if we have cars
        if (allCars.length > 0) {
          // Extract unique values for filters
          setUniqueCities(
            [
              ...new Set(allCars.map((car: LuxuryRentalCar) => car.pickUpCity)),
            ].sort()
          );
          setUniqueMakes(
            [...new Set(allCars.map((car: LuxuryRentalCar) => car.make))].sort()
          );
          setUniqueModels(
            [
              ...new Set(allCars.map((car: LuxuryRentalCar) => car.model)),
            ].sort()
          );
          setUniqueYears(
            [...new Set(allCars.map((car: LuxuryRentalCar) => car.year))].sort(
              (a, b) => b - a
            )
          );
          setUniqueTypes(
            [...new Set(allCars.map((car: LuxuryRentalCar) => car.type))].sort()
          );
          setUniqueSeats(
            [...new Set(allCars.map((car: LuxuryRentalCar) => car.seats))].sort(
              (a, b) => a - b
            )
          );
          setUniqueTransmissions(
            [
              ...new Set(
                allCars.map((car: LuxuryRentalCar) => car.transmission)
              ),
            ].sort()
          );
          setUniqueFuelTypes(
            [
              ...new Set(allCars.map((car: LuxuryRentalCar) => car.fuelType)),
            ].sort()
          );

          // Extract all unique colors from the colorOptions arrays
          const allColors = new Set<string>();
          allCars.forEach((car: LuxuryRentalCar) => {
            car.colorOptions.forEach((color) => allColors.add(color));
          });
          setUniqueColors([...allColors].sort());

          // Extract all unique features from the features arrays
          const allFeatures = new Set<string>();
          allCars.forEach((car: LuxuryRentalCar) => {
            car.features.forEach((feature) => allFeatures.add(feature));
          });
          setUniqueFeatures([...allFeatures].sort());

          setUniquePickUpLocations(
            [
              ...new Set(
                allCars.map((car: LuxuryRentalCar) => car.pickUpLocation)
              ),
            ].sort()
          );

          // Calculate ranges
          const minHorsepower = Math.min(
            ...allCars.map((car: LuxuryRentalCar) => car.horsepower)
          );
          const maxHorsepower = Math.max(
            ...allCars.map((car: LuxuryRentalCar) => car.horsepower)
          );
          setHorsepowerRange([minHorsepower, maxHorsepower]);
          setHorsepowerSliderValue([minHorsepower, maxHorsepower]);

          const minPrice = Math.min(
            ...allCars.map((car: LuxuryRentalCar) => car.rentalPricePerDay)
          );
          const maxPrice = Math.max(
            ...allCars.map((car: LuxuryRentalCar) => car.rentalPricePerDay)
          );
          setPriceRange([minPrice, maxPrice]);
          setPriceSliderValue([minPrice, maxPrice]);

          const minAge = Math.min(
            ...allCars.map((car: LuxuryRentalCar) => car.minimumRentalAge)
          );
          const maxAge = Math.max(
            ...allCars.map((car: LuxuryRentalCar) => car.minimumRentalAge)
          );
          setAgeRange([minAge, maxAge]);

          const minDeposit = Math.min(
            ...allCars.map((car: LuxuryRentalCar) => car.depositAmount)
          );
          const maxDeposit = Math.max(
            ...allCars.map((car: LuxuryRentalCar) => car.depositAmount)
          );
          setDepositRange([minDeposit, maxDeposit]);
          setDepositSliderValue([minDeposit, maxDeposit]);
        }
      } catch (error) {
        console.error("Error loading cars:", error);
        setError("Failed to load car data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadCars();
  }, []);

  // Apply filters and sorting whenever filter state changes
  useEffect(() => {
    if (cars.length === 0) return;

    let results = [...cars];

    // Apply each filter if it's set
    if (filters.city) {
      results = results.filter((car) => car.pickUpCity === filters.city);
    }

    if (filters.make) {
      results = results.filter((car) => car.make === filters.make);
    }

    if (filters.model) {
      results = results.filter((car) => car.model === filters.model);
    }

    if (filters.year) {
      results = results.filter((car) => car.year === filters.year);
    }

    if (filters.type) {
      results = results.filter((car) => car.type === filters.type);
    }

    if (filters.seats) {
      results = results.filter((car) => car.seats === filters.seats);
    }

    if (filters.transmission) {
      results = results.filter(
        (car) => car.transmission === filters.transmission
      );
    }

    if (filters.fuelType) {
      results = results.filter((car) => car.fuelType === filters.fuelType);
    }

    if (filters.minHorsepower !== null || filters.maxHorsepower !== null) {
      const min = filters.minHorsepower ?? horsepowerRange[0];
      const max = filters.maxHorsepower ?? horsepowerRange[1];
      results = results.filter(
        (car) => car.horsepower >= min && car.horsepower <= max
      );
    }

    if (filters.color) {
      results = results.filter((car) =>
        car.colorOptions.includes(filters.color)
      );
    }

    if (filters.feature) {
      results = results.filter((car) => car.features.includes(filters.feature));
    }

    if (filters.minPrice !== null || filters.maxPrice !== null) {
      const min = filters.minPrice ?? priceRange[0];
      const max = filters.maxPrice ?? priceRange[1];
      results = results.filter(
        (car) => car.rentalPricePerDay >= min && car.rentalPricePerDay <= max
      );
    }

    if (filters.available !== null) {
      results = results.filter((car) => car.available === filters.available);
    }

    if (filters.pickUpLocation) {
      results = results.filter(
        (car) => car.pickUpLocation === filters.pickUpLocation
      );
    }

    if (filters.insuranceIncluded !== null) {
      results = results.filter(
        (car) => car.insuranceIncluded === filters.insuranceIncluded
      );
    }

    if (filters.minRentalAge !== null) {
      results = results.filter(
        (car) => car.minimumRentalAge <= filters.minRentalAge
      );
    }

    if (filters.maxDeposit !== null) {
      results = results.filter(
        (car) => car.depositAmount <= filters.maxDeposit
      );
    }

    // Apply sorting
    results = applySorting(results, sortBy);

    setFilteredCars(results);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [cars, filters, sortBy]);

  // Function to apply sorting
  const applySorting = (
    cars: LuxuryRentalCar[],
    sortOption: string
  ): LuxuryRentalCar[] => {
    const sortedCars = [...cars];

    switch (sortOption) {
      case "price-low":
        return sortedCars.sort(
          (a, b) => a.rentalPricePerDay - b.rentalPricePerDay
        );
      case "price-high":
        return sortedCars.sort(
          (a, b) => b.rentalPricePerDay - a.rentalPricePerDay
        );
      case "horsepower":
        return sortedCars.sort((a, b) => b.horsepower - a.horsepower);
      case "newest":
        return sortedCars.sort((a, b) => b.year - a.year);
      case "oldest":
        return sortedCars.sort((a, b) => a.year - b.year);
      default:
        return sortedCars;
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      city: null,
      make: null,
      model: null,
      year: null,
      type: null,
      seats: null,
      transmission: null,
      fuelType: null,
      minHorsepower: null,
      maxHorsepower: null,
      color: null,
      feature: null,
      minPrice: null,
      maxPrice: null,
      available: null,
      pickUpLocation: null,
      insuranceIncluded: null,
      minRentalAge: null,
      maxDeposit: null,
    });
    setHorsepowerSliderValue([horsepowerRange[0], horsepowerRange[1]]);
    setPriceSliderValue([priceRange[0], priceRange[1]]);
    setDepositSliderValue([depositRange[0], depositRange[1]]);
  };

  // Pagination logic
  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Render pagination component
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    let pageNumbers = [];
    if (totalPages <= 7) {
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 4) {
        pageNumbers = [1, 2, 3, 4, 5, "...", totalPages];
      } else if (currentPage >= totalPages - 3) {
        pageNumbers = [
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pageNumbers = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {pageNumbers.map((page, index) =>
            typeof page === "number" ? (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={page === currentPage}
                  onClick={() => paginate(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ) : (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
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

  if (error) {
    return (
      <div className="mx-auto pt-12 w-10/12 text-center">
        <Car className="mx-auto mb-6 text-muted-foreground size-16" />
        <h2 className="mb-4 font-bold text-2xl">Something went wrong</h2>
        <p className="mb-6 text-muted-foreground">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <header>
          <h1 className="flex items-center gap-2 text-start">
            <Car className="size-8" />
            Luxury Car Rentals
          </h1>
          <h5 className="text-start">
            {filteredCars.length}{" "}
            {filteredCars.length === 1 ? "vehicle" : "vehicles"} available for
            your journey
          </h5>
          {!cars.length && (
            <div className="bg-amber-50 mt-2 p-2 border border-amber-200 rounded text-amber-700">
              No car data was loaded. This could be due to missing data files or
              configuration issues.
            </div>
          )}
        </header>

        {/* Controls bar - Sorting, Items Per Page, Mobile Filter Button */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="horsepower">Horsepower</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => setItemsPerPage(parseInt(value))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Items per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12 per page</SelectItem>
                <SelectItem value="24">24 per page</SelectItem>
                <SelectItem value="36">36 per page</SelectItem>
                <SelectItem value="48">48 per page</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile filter button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 md:hidden"
              >
                <Filter className="size-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Refine your car rental search
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-6 mt-6">
                {/* Mobile filters content - same filter components as desktop but in sheet */}
                {renderFilterComponents()}
                <Button className="w-full" onClick={resetFilters}>
                  Reset All Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Main content area - Filters sidebar + Car grid */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-[280px_1fr]">
          {/* Desktop Filters Sidebar */}
          <div className="md:block space-y-6 hidden bg-card p-6 border border-border rounded-lg h-fit">
            <div className="flex justify-between items-center">
              <h3 className="flex items-center gap-2 font-medium">
                <SlidersHorizontal className="size-4" /> Filters
              </h3>
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Reset
              </Button>
            </div>
            {renderFilterComponents()}
          </div>

          {/* Cars Display Area */}
          <div className="space-y-6">
            {/* Filter tags display */}
            <div className="flex flex-wrap items-center gap-2">
              {Object.entries(filters).map(([key, value]) => {
                if (value === null) return null;

                let displayValue: string;
                if (key === "minHorsepower" || key === "maxHorsepower") {
                  if (
                    filters.minHorsepower === horsepowerRange[0] &&
                    filters.maxHorsepower === horsepowerRange[1]
                  ) {
                    return null; // Don't show tag if it's the full range
                  }
                  return (
                    <Badge
                      key={key}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      Horsepower: {filters.minHorsepower} -{" "}
                      {filters.maxHorsepower}
                      <X
                        className="cursor-pointer size-3"
                        onClick={() => {
                          setFilters((prev) => ({
                            ...prev,
                            minHorsepower: null,
                            maxHorsepower: null,
                          }));
                          setHorsepowerSliderValue([
                            horsepowerRange[0],
                            horsepowerRange[1],
                          ]);
                        }}
                      />
                    </Badge>
                  );
                }

                if (key === "minPrice" || key === "maxPrice") {
                  if (
                    filters.minPrice === priceRange[0] &&
                    filters.maxPrice === priceRange[1]
                  ) {
                    return null; // Don't show tag if it's the full range
                  }
                  return (
                    <Badge
                      key={key}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      Price: {filters.minPrice} - {filters.maxPrice}
                      <X
                        className="cursor-pointer size-3"
                        onClick={() => {
                          setFilters((prev) => ({
                            ...prev,
                            minPrice: null,
                            maxPrice: null,
                          }));
                          setPriceSliderValue([priceRange[0], priceRange[1]]);
                        }}
                      />
                    </Badge>
                  );
                }

                if (key === "maxDeposit") {
                  if (filters.maxDeposit === depositRange[1]) {
                    return null; // Don't show tag if it's the max value
                  }
                  return (
                    <Badge
                      key={key}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      Max Deposit: {filters.maxDeposit}
                      <X
                        className="cursor-pointer size-3"
                        onClick={() => {
                          setFilters((prev) => ({
                            ...prev,
                            maxDeposit: null,
                          }));
                          setDepositSliderValue([
                            depositRange[0],
                            depositRange[1],
                          ]);
                        }}
                      />
                    </Badge>
                  );
                }

                if (typeof value === "boolean") {
                  let label = "";
                  if (key === "available")
                    label = value ? "Available" : "Unavailable";
                  if (key === "insuranceIncluded")
                    label = value ? "Insurance Included" : "No Insurance";

                  return (
                    <Badge
                      key={key}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      {label}
                      <X
                        className="cursor-pointer size-3"
                        onClick={() =>
                          setFilters((prev) => ({ ...prev, [key]: null }))
                        }
                      />
                    </Badge>
                  );
                }

                // For string and number filters
                displayValue = value.toString();
                let label = key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase());

                return (
                  <Badge
                    key={key}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    {label}: {displayValue}
                    <X
                      className="cursor-pointer size-3"
                      onClick={() =>
                        setFilters((prev) => ({ ...prev, [key]: null }))
                      }
                    />
                  </Badge>
                );
              })}

              {Object.values(filters).some((v) => v !== null) && (
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  Clear All
                </Button>
              )}
            </div>

            {/* Results count */}
            <div className="text-muted-foreground">
              Showing {indexOfFirstCar + 1}-
              {Math.min(indexOfLastCar, filteredCars.length)} of{" "}
              {filteredCars.length} results
            </div>

            {filteredCars.length > 0 ? (
              <>
                {/* Cars Grid */}
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {currentCars.map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                  {renderPagination()}
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center py-12 text-center">
                <Car className="mb-4 text-muted size-12" />
                <h3 className="mb-2 font-semibold text-xl">No cars found</h3>
                <p className="mb-6 text-muted-foreground">
                  We couldn't find any cars matching your filters.
                </p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Helper function to render all filter components
  function renderFilterComponents() {
    return (
      <div className="space-y-6">
        {/* City Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <MapPin className="size-4" /> Pick-up City
          </h4>
          <Select
            value={filters.city || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, city: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="all">All Cities</SelectItem>
              {uniqueCities
                .filter((city) => city && city.trim() !== "")
                .map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Make Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Car className="size-4" /> Make
          </h4>
          <Select
            value={filters.make || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, make: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Makes" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="all">All Makes</SelectItem>
              {uniqueMakes.map((make) => (
                <SelectItem key={make} value={make}>
                  {make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Model Filter - only show models for selected make */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Info className="size-4" /> Model
          </h4>
          <Select
            value={filters.model || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, model: value || null })
            }
            disabled={!filters.make}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={
                  filters.make ? "Select Model" : "Select Make First"
                }
              />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="all">All Models</SelectItem>
              {uniqueModels
                .filter(
                  (model) =>
                    !filters.make ||
                    cars.some(
                      (car) => car.make === filters.make && car.model === model
                    )
                )
                .map((model) => (
                  <SelectItem key={model} value={model}>
                    {model}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Calendar className="size-4" /> Year
          </h4>
          <Select
            value={filters.year?.toString() || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, year: value ? parseInt(value) : null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Years" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="all">All Years</SelectItem>
              {uniqueYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Car Type Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Car className="size-4" /> Car Type
          </h4>
          <Select
            value={filters.type || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, type: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="all">All Types</SelectItem>
              {uniqueTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Seats Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Users className="size-4" /> Seats
          </h4>
          <Select
            value={filters.seats?.toString() || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, seats: value ? parseInt(value) : null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Seats" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="all">Any Seats</SelectItem>
              {uniqueSeats.map((seats) => (
                <SelectItem key={seats} value={seats.toString()}>
                  {seats} Seats
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Transmission Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <SlidersHorizontal className="size-4" /> Transmission
          </h4>
          <Select
            value={filters.transmission || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, transmission: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Transmission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Transmission</SelectItem>
              {uniqueTransmissions
                .filter(
                  (transmission) => transmission && transmission.trim() !== ""
                )
                .map((transmission) => (
                  <SelectItem key={transmission} value={transmission}>
                    {transmission}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Fuel Type Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <SlidersHorizontal className="size-4" /> Fuel Type
          </h4>
          <Select
            value={filters.fuelType || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, fuelType: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Fuel Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Fuel Type</SelectItem>
              {uniqueFuelTypes
                .filter((fuelType) => fuelType && fuelType.trim() !== "")
                .map((fuelType) => (
                  <SelectItem key={fuelType} value={fuelType}>
                    {fuelType}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Horsepower Range Filter */}
        <div className="space-y-2">
          <h4 className="flex justify-between items-center font-medium">
            <span className="flex items-center gap-2">
              <Gauge className="size-4" /> Horsepower
            </span>
            <span className="font-normal text-sm">
              {horsepowerSliderValue[0]} - {horsepowerSliderValue[1]}
            </span>
          </h4>
          <Slider
            min={horsepowerRange[0]}
            max={horsepowerRange[1]}
            step={10}
            value={horsepowerSliderValue}
            onValueChange={(value) => {
              setHorsepowerSliderValue(value as [number, number]);
              setFilters({
                ...filters,
                minHorsepower: value[0],
                maxHorsepower: value[1],
              });
            }}
          />
        </div>

        {/* Color Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Palette className="size-4" /> Color
          </h4>
          <Select
            value={filters.color || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, color: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Color" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="all">Any Color</SelectItem>
              {uniqueColors.map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Feature Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Check className="size-4" /> Features
          </h4>
          <Select
            value={filters.feature || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, feature: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Feature" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="all">Any Feature</SelectItem>
              {uniqueFeatures.map((feature) => (
                <SelectItem key={feature} value={feature}>
                  {feature}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div className="space-y-2">
          <h4 className="flex justify-between items-center font-medium">
            <span className="flex items-center gap-2">
              <DollarSign className="size-4" /> Price Per Day
            </span>
            <span className="font-normal text-sm">
              {priceSliderValue[0]} - {priceSliderValue[1]}
            </span>
          </h4>
          <Slider
            min={priceRange[0]}
            max={priceRange[1]}
            step={10}
            value={priceSliderValue}
            onValueChange={(value) => {
              setPriceSliderValue(value as [number, number]);
              setFilters({
                ...filters,
                minPrice: value[0],
                maxPrice: value[1],
              });
            }}
          />
        </div>

        {/* Availability Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Check className="size-4" /> Availability
          </h4>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="available"
              checked={filters.available === true}
              onCheckedChange={(checked) => {
                if (checked) {
                  setFilters({ ...filters, available: true });
                } else {
                  setFilters({ ...filters, available: null });
                }
              }}
            />
            <Label htmlFor="available">Show only available cars</Label>
          </div>
        </div>

        {/* Pick-up Location Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <MapPin className="size-4" /> Pick-up Location
          </h4>
          <Select
            value={filters.pickUpLocation || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, pickUpLocation: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Location" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="all">Any Location</SelectItem>
              {uniquePickUpLocations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Insurance Included Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Shield className="size-4" /> Insurance
          </h4>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="insurance"
              checked={filters.insuranceIncluded === true}
              onCheckedChange={(checked) => {
                if (checked) {
                  setFilters({ ...filters, insuranceIncluded: true });
                } else {
                  setFilters({ ...filters, insuranceIncluded: null });
                }
              }}
            />
            <Label htmlFor="insurance">Insurance included</Label>
          </div>
        </div>

        {/* Minimum Rental Age Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Clock className="size-4" /> Minimum Age
          </h4>
          <Select
            value={filters.minRentalAge?.toString() || ""}
            onValueChange={(value) =>
              setFilters({
                ...filters,
                minRentalAge: value === "all" ? null : parseInt(value),
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Age Requirement" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Age</SelectItem>
              {Array.from(new Set(cars.map((car) => car.minimumRentalAge)))
                .sort()
                .map((age) => (
                  <SelectItem key={age} value={age.toString()}>
                    Age {age}+
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Deposit Amount Filter */}
        <div className="space-y-2">
          <h4 className="flex justify-between items-center font-medium">
            <span className="flex items-center gap-2">
              <BanknoteIcon className="size-4" /> Maximum Deposit
            </span>
            <span className="font-normal text-sm">{depositSliderValue[1]}</span>
          </h4>
          <Slider
            min={depositRange[0]}
            max={depositRange[1]}
            step={100}
            value={[depositRange[0], depositSliderValue[1]]}
            onValueChange={(value) => {
              setDepositSliderValue([depositRange[0], value[1]]);
              setFilters({
                ...filters,
                maxDeposit: value[1],
              });
            }}
          />
        </div>
      </div>
    );
  }
}

// Car Card Component
function CarCard({ car }: { car: LuxuryRentalCar }) {
  return (
    <div className="flex flex-col bg-card shadow-sm border border-border rounded-lg h-full overflow-hidden">
      {/* Car Image */}
      <div className="relative bg-muted w-full h-48">
        {car.imageUrl ? (
          <Image
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="flex justify-center items-center h-full text-muted-foreground">
            No image available
          </div>
        )}

        {/* Availability badge */}
        <div className="top-2 right-2 absolute">
          <Badge variant={car.available ? "success" : "error"}>
            {car.available ? "Available" : "Unavailable"}
          </Badge>
        </div>
      </div>

      {/* Car Details */}
      <div className="flex flex-col justify-between p-4 h-full">
        <div>
          {/* Car name and type */}
          <h3 className="font-semibold">
            {car.make} {car.model}
          </h3>
          <div className="flex items-center gap-1 mb-2 text-muted-foreground text-sm">
            <span>{car.year}</span>
            <span>•</span>
            <span>{car.type}</span>
          </div>

          {/* Key features */}
          <div className="gap-2 grid grid-cols-2 my-3 text-sm">
            <div className="flex items-center gap-1.5">
              <Users className="text-muted-foreground size-4" />
              <span>{car.seats} Seats</span>
            </div>
            <div className="flex items-center gap-1.5">
              <SlidersHorizontal className="text-muted-foreground size-4" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <SlidersHorizontal className="text-muted-foreground size-4" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gauge className="text-muted-foreground size-4" />
              <span>{car.horsepower} HP</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-3 text-muted-foreground text-sm">
            <MapPin className="size-4" />
            <span>
              {car.pickUpCity}, {car.pickUpCountry}
            </span>
          </div>
        </div>

        {/* Price and Book button */}
        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-lg">
                {car.rentalPricePerDay} {car.currency}
              </span>
              <p className="text-muted-foreground text-xs">per day</p>
            </div>
            <Link href={`/services/rentals/car-rentals/${car.id}`}>
              <Button>View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
