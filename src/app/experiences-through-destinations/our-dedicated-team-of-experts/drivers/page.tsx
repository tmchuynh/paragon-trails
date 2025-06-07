"use client";

import { useState, useEffect } from "react";
import { getDrivers } from "@/lib/utils/get/drivers";
import {
  Driver,
  WeeklyAvailability,
  DriverSpecialty,
  VehicleTypeCertified,
} from "@/lib/interfaces/people/staff";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  Users,
  Star,
  Languages as LanguagesIcon,
  Award,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Check,
  X,
  MessageSquare,
  SlidersHorizontal,
} from "lucide-react";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import Image from "next/image";
import Link from "next/link";

// Filter state interface
interface DriverFilters {
  city: string | null;
  country: string | null;
  minExperienceYears: number | null;
  maxExperienceYears: number | null;
  language: string | null;
  minRating: number | null;
  specialty: DriverSpecialty | null;
  vehicleType: VehicleTypeCertified | null;
  availableDay: string | null;
  availableTimeFrom: string | null;
  availableTimeTo: string | null;
}

export default function DriversPage() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [filteredDrivers, setFilteredDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState<string>("rating-high");

  // Initialize filter state with null values
  const [filters, setFilters] = useState<DriverFilters>({
    city: null,
    country: null,
    minExperienceYears: null,
    maxExperienceYears: null,
    language: null,
    minRating: null,
    specialty: null,
    vehicleType: null,
    availableDay: null,
    availableTimeFrom: null,
    availableTimeTo: null,
  });

  // Arrays for unique filter values
  const [uniqueCities, setUniqueCities] = useState<string[]>([]);
  const [uniqueCountries, setUniqueCountries] = useState<string[]>([]);
  const [experienceRange, setExperienceRange] = useState<[number, number]>([
    0, 20,
  ]);
  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>([]);
  const [uniqueSpecialties, setUniqueSpecialties] = useState<DriverSpecialty[]>(
    []
  );
  const [uniqueVehicleTypes, setUniqueVehicleTypes] = useState<
    VehicleTypeCertified[]
  >([]);
  const [availableDays, setAvailableDays] = useState<string[]>([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);
  const [experienceSliderValue, setExperienceSliderValue] = useState<
    [number, number]
  >([0, 20]);

  // Load all drivers and extract unique values for filters
  useEffect(() => {
    async function loadDrivers() {
      try {
        const allDrivers = await getDrivers();
        setDrivers(allDrivers);
        setFilteredDrivers(allDrivers);

        // Extract unique cities
        const cities = new Set<string>();
        const countries = new Set<string>();
        const languages = new Set<string>();
        const specialties = new Set<DriverSpecialty>();
        const vehicleTypes = new Set<VehicleTypeCertified>();

        // Find min and max experience
        let minExp = Number.MAX_VALUE;
        let maxExp = 0;

        allDrivers.forEach((driver: Driver) => {
          // Extract location information (assuming it's available in the data)
          if (driver.id.includes("-")) {
            const cityPart = driver.id.split("-")[1];
            cities.add(cityPart);
          }

          // Experience range
          minExp = Math.min(minExp, driver.experienceYears);
          maxExp = Math.max(maxExp, driver.experienceYears);

          // Languages
          driver.languagesSpoken.forEach((lang) => languages.add(lang));

          // Specialties
          driver.specialties?.forEach((spec) =>
            specialties.add(spec as DriverSpecialty)
          );

          // Vehicle Types
          driver.vehicleTypesCertified.forEach((type) =>
            vehicleTypes.add(type as VehicleTypeCertified)
          );
        });

        setUniqueCities(Array.from(cities).sort());
        setUniqueCountries(Array.from(countries).sort());
        setUniqueLanguages(Array.from(languages).sort());
        setUniqueSpecialties(Array.from(specialties).sort());
        setUniqueVehicleTypes(Array.from(vehicleTypes).sort());

        // Set experience range
        if (minExp !== Number.MAX_VALUE) {
          setExperienceRange([minExp, maxExp]);
          setExperienceSliderValue([minExp, maxExp]);
        }
      } catch (error) {
        console.error("Error loading drivers:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDrivers();
  }, []);

  // Apply filters whenever filter state changes
  useEffect(() => {
    if (drivers.length === 0) return;

    let results = [...drivers];

    // Apply each filter if it's set
    if (filters.city) {
      results = results.filter((driver) =>
        driver.id.includes(`-${filters.city}-`)
      );
    }

    if (
      filters.minExperienceYears !== null ||
      filters.maxExperienceYears !== null
    ) {
      const min = filters.minExperienceYears ?? experienceRange[0];
      const max = filters.maxExperienceYears ?? experienceRange[1];
      results = results.filter(
        (driver) =>
          driver.experienceYears >= min && driver.experienceYears <= max
      );
    }

    if (filters.language) {
      results = results.filter((driver) =>
        driver.languagesSpoken.includes(filters.language!)
      );
    }

    if (filters.minRating !== null) {
      results = results.filter(
        (driver) => (driver.ratings || 0) >= (filters.minRating || 0)
      );
    }

    if (filters.specialty) {
      results = results.filter((driver) =>
        driver.specialties?.includes(filters.specialty!)
      );
    }

    if (filters.vehicleType) {
      results = results.filter((driver) =>
        driver.vehicleTypesCertified.includes(filters.vehicleType!)
      );
    }

    if (filters.availableDay) {
      results = results.filter((driver) =>
        driver.available.some((avail) => avail.day === filters.availableDay)
      );

      // If time is also specified
      if (filters.availableTimeFrom && filters.availableTimeTo) {
        results = results.filter((driver) => {
          return driver.available.some((avail) => {
            if (avail.day !== filters.availableDay) return false;

            // Check if any of the available hours overlap with requested time range
            return avail.availableHours.some((hours) => {
              const driverStartTime = hours.from;
              const driverEndTime = hours.to;

              // Simple string comparison works for 24-hour format times like "14:00"
              return (
                driverStartTime <= filters.availableTimeTo! &&
                driverEndTime >= filters.availableTimeFrom!
              );
            });
          });
        });
      }
    }

    // Apply sorting
    results = applySorting(results, sortBy);

    setFilteredDrivers(results);
    setCurrentPage(1);
  }, [drivers, filters, sortBy]);

  // Function to apply sorting
  const applySorting = (driverList: Driver[], sortOption: string): Driver[] => {
    const sortedDrivers = [...driverList];

    switch (sortOption) {
      case "rating-high":
        return sortedDrivers.sort(
          (a, b) => (b.ratings || 0) - (a.ratings || 0)
        );
      case "rating-low":
        return sortedDrivers.sort(
          (a, b) => (a.ratings || 0) - (b.ratings || 0)
        );
      case "experience-high":
        return sortedDrivers.sort(
          (a, b) => b.experienceYears - a.experienceYears
        );
      case "experience-low":
        return sortedDrivers.sort(
          (a, b) => a.experienceYears - b.experienceYears
        );
      case "name":
        return sortedDrivers.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sortedDrivers;
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      city: null,
      country: null,
      minExperienceYears: null,
      maxExperienceYears: null,
      language: null,
      minRating: null,
      specialty: null,
      vehicleType: null,
      availableDay: null,
      availableTimeFrom: null,
      availableTimeTo: null,
    });
    setExperienceSliderValue([experienceRange[0], experienceRange[1]]);
  };

  // Pagination logic
  const indexOfLastDriver = currentPage * itemsPerPage;
  const indexOfFirstDriver = indexOfLastDriver - itemsPerPage;
  const currentDrivers = filteredDrivers.slice(
    indexOfFirstDriver,
    indexOfLastDriver
  );
  const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);

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

  // Extract city name from driver ID
  const getCityFromDriverId = (id: string): string => {
    const parts = id.split("-");
    if (parts.length >= 2) {
      return parts[1].replace(/-/g, " ");
    }
    return "Unknown";
  };

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <header>
          <h1 className="flex items-center gap-2 text-start">
            <Users className="size-8" />
            Professional Drivers
          </h1>
          <h5 className="text-start">
            {filteredDrivers.length}{" "}
            {filteredDrivers.length === 1 ? "driver" : "drivers"} available for
            your journey
          </h5>
        </header>

        {/* Controls bar - Sorting, Items Per Page, Mobile Filter Button */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating-high">Rating: High to Low</SelectItem>
                <SelectItem value="rating-low">Rating: Low to High</SelectItem>
                <SelectItem value="experience-high">
                  Experience: Most to Least
                </SelectItem>
                <SelectItem value="experience-low">
                  Experience: Least to Most
                </SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => setItemsPerPage(parseInt(value))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Drivers per page" />
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
                <SheetDescription>Find the perfect driver</SheetDescription>
              </SheetHeader>
              <div className="space-y-6 mt-6">
                {/* Mobile filters content */}
                {renderFilterComponents()}
                <Button className="w-full" onClick={resetFilters}>
                  Reset All Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Link back to car rentals */}
        <div className="bg-muted/50 mb-2 p-4 rounded-lg">
          <p className="text-sm">
            Looking for a vehicle to complement your driver experience?
            <Link
              href="/services/rentals/car-rentals"
              className="ml-2 font-medium underline underline-offset-4"
            >
              Browse our luxury car rentals
            </Link>
          </p>
        </div>

        {/* Main content area - Filters sidebar + Driver grid */}
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

          {/* Drivers Display Area */}
          <div className="space-y-6">
            {/* Filter tags display */}
            <div className="flex flex-wrap items-center gap-2">
              {Object.entries(filters).map(([key, value]) => {
                if (value === null) return null;

                let displayValue: string;
                if (
                  key === "minExperienceYears" ||
                  key === "maxExperienceYears"
                ) {
                  if (
                    filters.minExperienceYears === experienceRange[0] &&
                    filters.maxExperienceYears === experienceRange[1]
                  ) {
                    return null; // Don't show tag if it's the full range
                  }
                  return (
                    <Badge
                      key={key}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      Experience: {filters.minExperienceYears} -{" "}
                      {filters.maxExperienceYears} years
                      <X
                        className="cursor-pointer size-3"
                        onClick={() => {
                          setFilters((prev) => ({
                            ...prev,
                            minExperienceYears: null,
                            maxExperienceYears: null,
                          }));
                          setExperienceSliderValue([
                            experienceRange[0],
                            experienceRange[1],
                          ]);
                        }}
                      />
                    </Badge>
                  );
                }

                // For time filters
                if (key === "availableTimeFrom" || key === "availableTimeTo") {
                  // Only show if both are set
                  if (
                    filters.availableTimeFrom &&
                    filters.availableTimeTo &&
                    key === "availableTimeFrom"
                  ) {
                    return (
                      <Badge
                        key="availableTime"
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        Time: {filters.availableTimeFrom} -{" "}
                        {filters.availableTimeTo}
                        <X
                          className="cursor-pointer size-3"
                          onClick={() => {
                            setFilters((prev) => ({
                              ...prev,
                              availableTimeFrom: null,
                              availableTimeTo: null,
                            }));
                          }}
                        />
                      </Badge>
                    );
                  } else if (key === "availableTimeTo") {
                    return null;
                  }
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
              Showing {indexOfFirstDriver + 1}-
              {Math.min(indexOfLastDriver, filteredDrivers.length)} of{" "}
              {filteredDrivers.length} results
            </div>

            {filteredDrivers.length > 0 ? (
              <>
                {/* Drivers Grid */}
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {currentDrivers.map((driver) => (
                    <DriverCard
                      key={driver.id}
                      driver={driver}
                      cityName={getCityFromDriverId(driver.id)}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                  {renderPagination()}
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center py-12 text-center">
                <Users className="mb-4 text-muted size-12" />
                <h3 className="mb-2 font-semibold text-xl">No drivers found</h3>
                <p className="mb-6 text-muted-foreground">
                  We couldn't find any drivers matching your filters.
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
            <MapPin className="size-4" /> City
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
            <SelectContent>
              <SelectItem value="">All Cities</SelectItem>
              {uniqueCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city.replace(/-/g, " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Experience Range Filter */}
        <div className="space-y-2">
          <h4 className="flex justify-between items-center font-medium">
            <span className="flex items-center gap-2">
              <Award className="size-4" /> Experience
            </span>
            <span className="font-normal text-sm">
              {experienceSliderValue[0]} - {experienceSliderValue[1]} years
            </span>
          </h4>
          <Slider
            min={experienceRange[0]}
            max={experienceRange[1]}
            step={1}
            value={experienceSliderValue}
            onValueChange={(value) => {
              setExperienceSliderValue(value as [number, number]);
              setFilters({
                ...filters,
                minExperienceYears: value[0],
                maxExperienceYears: value[1],
              });
            }}
          />
        </div>

        {/* Language Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <LanguagesIcon className="size-4" /> Language
          </h4>
          <Select
            value={filters.language || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, language: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Language" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="">Any Language</SelectItem>
              {uniqueLanguages.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Rating Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Star className="size-4" /> Minimum Rating
          </h4>
          <Select
            value={filters.minRating?.toString() || ""}
            onValueChange={(value) =>
              setFilters({
                ...filters,
                minRating: value ? parseFloat(value) : null,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Rating</SelectItem>
              <SelectItem value="3">3+ Stars</SelectItem>
              <SelectItem value="3.5">3.5+ Stars</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="4.5">4.5+ Stars</SelectItem>
              <SelectItem value="5">5 Stars</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Specialty Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Award className="size-4" /> Specialty
          </h4>
          <Select
            value={filters.specialty || ""}
            onValueChange={(value) =>
              setFilters({
                ...filters,
                specialty: (value as DriverSpecialty) || null,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Specialty" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="">Any Specialty</SelectItem>
              {uniqueSpecialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Vehicle Type Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Car className="size-4" /> Vehicle Type
          </h4>
          <Select
            value={filters.vehicleType || ""}
            onValueChange={(value) =>
              setFilters({
                ...filters,
                vehicleType: (value as VehicleTypeCertified) || null,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Vehicle Type" />
            </SelectTrigger>
            <SelectContent className="max-h-[50vh] overflow-auto">
              <SelectItem value="">Any Vehicle Type</SelectItem>
              {uniqueVehicleTypes.map((vehicleType) => (
                <SelectItem key={vehicleType} value={vehicleType}>
                  {vehicleType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Availability - Day Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Calendar className="size-4" /> Available Day
          </h4>
          <Select
            value={filters.availableDay || ""}
            onValueChange={(value) =>
              setFilters({ ...filters, availableDay: value || null })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Day" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Day</SelectItem>
              {availableDays.map((day) => (
                <SelectItem key={day} value={day}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Availability - Time Range Filter */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-medium">
            <Clock className="size-4" /> Available Time
          </h4>
          <div className="space-y-2">
            <div>
              <label htmlFor="time-from" className="text-sm">
                From
              </label>
              <input
                id="time-from"
                type="time"
                className="bg-background mt-1 px-3 py-2 border border-border rounded-md w-full"
                value={filters.availableTimeFrom || ""}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    availableTimeFrom: e.target.value || null,
                  })
                }
                disabled={!filters.availableDay}
              />
            </div>
            <div>
              <label htmlFor="time-to" className="text-sm">
                To
              </label>
              <input
                id="time-to"
                type="time"
                className="bg-background mt-1 px-3 py-2 border border-border rounded-md w-full"
                value={filters.availableTimeTo || ""}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    availableTimeTo: e.target.value || null,
                  })
                }
                disabled={!filters.availableDay}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Driver Card Component
function DriverCard({
  driver,
  cityName,
}: {
  driver: Driver;
  cityName: string;
}) {
  return (
    <Dialog>
      <div className="flex flex-col bg-card shadow-sm border border-border rounded-lg h-full overflow-hidden">
        {/* Driver Photo */}
        <div className="relative bg-muted w-full h-60">
          {driver.photoUrl ? (
            <Image
              src={driver.photoUrl}
              alt={driver.name}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="flex justify-center items-center h-full text-muted-foreground">
              <Users className="size-10" />
            </div>
          )}
        </div>

        {/* Driver Details */}
        <div className="flex flex-col justify-between p-4 h-full">
          <div>
            {/* Driver name and location */}
            <h3 className="font-semibold">{driver.name}</h3>
            <div className="flex items-center gap-1.5 mb-3 text-muted-foreground text-sm">
              <MapPin className="size-4" />
              <span>{cityName}</span>
            </div>

            {/* Rating */}
            <div className="mb-3">
              {displayRatingStars(Math.round(driver.ratings || 0))}
            </div>

            {/* Experience and Languages */}
            <div className="gap-2 grid grid-cols-1 my-3 text-sm">
              <div className="flex items-center gap-1.5">
                <Award className="text-muted-foreground size-4" />
                <span>{driver.experienceYears} Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LanguagesIcon className="text-muted-foreground size-4" />
                <span>
                  {driver.languagesSpoken.slice(0, 2).join(", ")}
                  {driver.languagesSpoken.length > 2 && "..."}
                </span>
              </div>
            </div>

            {/* Specialties */}
            {driver.specialties && driver.specialties.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {driver.specialties.slice(0, 2).map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {(driver.specialties?.length || 0) > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{(driver.specialties?.length || 0) - 2} more
                  </Badge>
                )}
              </div>
            )}

            {/* Vehicle types */}
            <div className="mb-3 text-sm">
              <span className="mr-1 text-muted-foreground">Vehicles:</span>
              <span>
                {driver.vehicleTypesCertified.slice(0, 2).join(", ")}
                {driver.vehicleTypesCertified.length > 2 && "..."}
              </span>
            </div>
          </div>

          {/* View Details Button */}
          <DialogTrigger asChild>
            <Button className="mt-2 w-full">View Details</Button>
          </DialogTrigger>
        </div>

        {/* Dialog Content */}
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{driver.name}</DialogTitle>
          </DialogHeader>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mt-4">
            {/* Left Column - Photo and Contact */}
            <div className="md:col-span-1">
              <div className="relative mb-4 rounded-lg w-full overflow-hidden aspect-square">
                {driver.photoUrl ? (
                  <Image
                    src={driver.photoUrl}
                    alt={driver.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="flex justify-center items-center bg-muted h-full text-muted-foreground">
                    <Users className="size-16" />
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-4">
                <h4 className="font-medium">Contact Information</h4>
                <div className="flex items-center gap-2">
                  <Phone className="text-muted-foreground size-4" />
                  <span>{driver.phone}</span>
                </div>
                {driver.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="text-muted-foreground size-4" />
                    <span className="text-sm">{driver.email}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">License Information</h4>
                <div className="text-sm">
                  <div>
                    <span className="text-muted-foreground">License #:</span>{" "}
                    {driver.licenseNumber}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Expires:</span>{" "}
                    {new Date(driver.licenseExpiry).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-1 font-medium">Rating</h4>
                <div className="flex items-center gap-2">
                  {displayRatingStars(Math.round(driver.ratings || 0))}
                  <span>{driver.ratings || "No ratings"}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-4 md:col-span-2">
              <div>
                <h3 className="mb-1 font-medium">Experience & Expertise</h3>
                <p>
                  {driver.experienceYears} years of professional driving
                  experience
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-medium">Languages Spoken</h3>
                <div className="flex flex-wrap gap-2">
                  {driver.languagesSpoken.map((language) => (
                    <Badge key={language} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              {driver.specialties && driver.specialties.length > 0 && (
                <div>
                  <h3 className="mb-1 font-medium">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {driver.specialties.map((specialty) => (
                      <Badge key={specialty}>{specialty}</Badge>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="mb-1 font-medium">Vehicle Types Certified</h3>
                <div className="flex flex-wrap gap-2">
                  {driver.vehicleTypesCertified.map((type) => (
                    <Badge key={type} variant="outline">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">Weekly Availability</h3>
                <div className="space-y-2">
                  {driver.available.map((day, index) => (
                    <div key={index} className="bg-muted/30 p-2 rounded-md">
                      <h4 className="font-medium">{day.day}</h4>
                      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 mt-1">
                        {day.availableHours.map((hours, hourIndex) => (
                          <div
                            key={hourIndex}
                            className="bg-muted/30 px-3 py-1 rounded text-sm"
                          >
                            {hours.from} - {hours.to}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="flex items-center gap-2 mb-2 font-medium">
                  <MessageSquare className="size-4" /> Request This Driver
                </h3>
                <p className="mb-4 text-muted-foreground text-sm">
                  You can request this driver when booking a tour or car rental,
                  or contact us directly to arrange.
                </p>
                <div className="flex gap-2">
                  <Link href="/services/rentals/car-rentals">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Car className="size-4" />
                      Book Car Rental
                    </Button>
                  </Link>
                  <Link href="/contact-us">
                    <Button
                      variant="default"
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="size-4" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
