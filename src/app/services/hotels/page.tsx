"use client";

import { useState, useEffect } from "react";
import { getAllHotels } from "@/lib/utils/get/hotels";
import { Hotel } from "@/lib/interfaces/services/rentals";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/Loading";
import {
  Filter,
  MapPin,
  SlidersHorizontal,
  X,
  Clock,
  CheckCircle,
  XCircle,
  Check,
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
import { Label } from "@/components/ui/label";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export default function HotelsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for all hotels and filtered hotels
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [sortField, setSortField] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Filter states
  const [accommodationTypeFilter, setAccommodationTypeFilter] = useState<
    string | null
  >(null);
  const [amenitiesFilter, setAmenitiesFilter] = useState<string[]>([]);
  const [accessibilityFilter, setAccessibilityFilter] = useState<string[]>([]);
  const [checkInTimeFilter, setCheckInTimeFilter] = useState<string | null>(
    null
  );
  const [checkOutTimeFilter, setCheckOutTimeFilter] = useState<string | null>(
    null
  );
  const [minRoomsFilter, setMinRoomsFilter] = useState<number | null>(null);
  const [isPetFriendlyFilter, setIsPetFriendlyFilter] = useState<
    boolean | null
  >(null);
  const [smokingFilter, setSmokingFilter] = useState<string | null>(null);
  const [isPopularFilter, setIsPopularFilter] = useState<boolean | null>(null);
  const [minRatingFilter, setMinRatingFilter] = useState<number | null>(null);
  const [cityFilter, setCityFilter] = useState<string | null>(null);

  // Load all hotels on initial render
  useEffect(() => {
    async function loadHotels() {
      setIsLoading(true);
      try {
        const allHotels = await getAllHotels();
        setHotels(allHotels);
        setFilteredHotels(allHotels);
      } catch (error) {
        console.error("Error loading hotels:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadHotels();
  }, []);

  // Helper function to get filtered options for dropdowns
  const getFilteredOptions = (
    field: keyof Hotel | "city" | "amenities" | "accessibilityFeatures",
    excludeCurrentFilter = true
  ) => {
    // Filter hotels based on all filters except the current one being populated
    let filtered = hotels.filter((hotel) => {
      // Accommodation Type
      if (
        excludeCurrentFilter &&
        field === "accommodationType" &&
        accommodationTypeFilter &&
        hotel.accommodationType !== accommodationTypeFilter
      )
        return true;
      if (field !== "accommodationType" && accommodationTypeFilter)
        return hotel.accommodationType === accommodationTypeFilter;

      // Amenities - skip this filter when generating amenity options
      if (field !== "amenities" && amenitiesFilter.length > 0) {
        if (
          !hotel.amenities ||
          !amenitiesFilter.every((amenity) =>
            hotel.amenities?.includes(amenity)
          )
        )
          return false;
      }

      // Accessibility Features - skip this filter when generating accessibility options
      if (field !== "accessibilityFeatures" && accessibilityFilter.length > 0) {
        if (
          !hotel.accessibilityFeatures ||
          !accessibilityFilter.every((feature) =>
            hotel.accessibilityFeatures?.includes(feature)
          )
        )
          return false;
      }

      // Check-in Time
      if (
        excludeCurrentFilter &&
        field === "checkInTime" &&
        checkInTimeFilter &&
        hotel.checkInTime !== checkInTimeFilter
      )
        return true;
      if (field !== "checkInTime" && checkInTimeFilter)
        return hotel.checkInTime === checkInTimeFilter;

      // Check-out Time
      if (
        excludeCurrentFilter &&
        field === "checkOutTime" &&
        checkOutTimeFilter &&
        hotel.checkOutTime !== checkOutTimeFilter
      )
        return true;
      if (field !== "checkOutTime" && checkOutTimeFilter)
        return hotel.checkOutTime === checkOutTimeFilter;

      // Min Rooms
      if (minRoomsFilter !== null && hotel.roomsAvailable < minRoomsFilter)
        return false;

      // Pet Friendly
      if (
        isPetFriendlyFilter !== null &&
        hotel.isPetFriendly !== isPetFriendlyFilter
      )
        return false;

      // Smoking Policy
      if (
        excludeCurrentFilter &&
        field === "smoking" &&
        smokingFilter &&
        hotel.policies?.smoking !== smokingFilter
      )
        return true;
      if (field !== "smoking" && smokingFilter)
        return hotel.policies?.smoking === smokingFilter;

      // Popularity
      if (isPopularFilter !== null && hotel.isPopular !== isPopularFilter)
        return false;

      // Rating
      if (minRatingFilter !== null && hotel.rating < minRatingFilter)
        return false;

      // City
      if (excludeCurrentFilter && field === "city" && cityFilter) {
        const idParts = hotel.id.split("-");
        const hotelCity = idParts.length > 1 ? idParts[1] : null;
        if (hotelCity !== cityFilter) return true;
      }
      if (field !== "city" && cityFilter) {
        const idParts = hotel.id.split("-");
        const hotelCity = idParts.length > 1 ? idParts[1] : null;
        if (hotelCity !== cityFilter) return false;
      }

      return true;
    });

    // Return the appropriate unique values based on the field
    if (field === "city") {
      const cities = Array.from(
        new Set(
          filtered
            .map((hotel) => {
              const idParts = hotel.id.split("-");
              return idParts.length > 1 ? idParts[1] : null;
            })
            .filter((city) => city !== null)
        )
      ) as string[];
      return cities.sort();
    } else if (field === "amenities") {
      return Array.from(
        new Set(filtered.flatMap((hotel) => hotel.amenities || []))
      ).sort();
    } else if (field === "accessibilityFeatures") {
      return Array.from(
        new Set(filtered.flatMap((hotel) => hotel.accessibilityFeatures || []))
      ).sort();
    } else if (field === "checkInTime" || field === "checkOutTime") {
      return Array.from(
        new Set(filtered.map((hotel) => hotel[field] as string))
      ).sort();
    } else if (field === "smoking") {
      return Array.from(
        new Set(
          filtered.map((hotel) => hotel.policies?.smoking).filter(Boolean)
        )
      ).sort();
    } else {
      // Standard fields
      const values = Array.from(
        new Set(filtered.map((hotel) => hotel[field as keyof Hotel]))
      );

      // Sort appropriately
      if (field === "rating") {
        return (values as number[]).sort((a, b) => b - a); // Rating in descending order
      }

      return values.sort();
    }
  };

  // Generate filtered options for each dropdown
  const filteredCities = getFilteredOptions("city");
  const filteredAccommodationTypes = getFilteredOptions("accommodationType");
  const filteredCheckInTimes = getFilteredOptions("checkInTime");
  const filteredCheckOutTimes = getFilteredOptions("checkOutTime");
  const filteredSmokingPolicies = getFilteredOptions("smoking");
  const filteredAmenities = getFilteredOptions("amenities");
  const filteredAccessibilityFeatures = getFilteredOptions(
    "accessibilityFeatures"
  );

  // Apply filters whenever filter states change
  useEffect(() => {
    const filtered = hotels.filter((hotel) => {
      // Apply each filter if it's set
      if (
        accommodationTypeFilter &&
        hotel.accommodationType !== accommodationTypeFilter
      )
        return false;

      if (amenitiesFilter.length > 0) {
        if (
          !hotel.amenities ||
          !amenitiesFilter.every((amenity) =>
            hotel.amenities?.includes(amenity)
          )
        )
          return false;
      }

      if (accessibilityFilter.length > 0) {
        if (
          !hotel.accessibilityFeatures ||
          !accessibilityFilter.every((feature) =>
            hotel.accessibilityFeatures?.includes(feature)
          )
        )
          return false;
      }

      if (checkInTimeFilter && hotel.checkInTime !== checkInTimeFilter)
        return false;
      if (checkOutTimeFilter && hotel.checkOutTime !== checkOutTimeFilter)
        return false;
      if (minRoomsFilter !== null && hotel.roomsAvailable < minRoomsFilter)
        return false;
      if (
        isPetFriendlyFilter !== null &&
        hotel.isPetFriendly !== isPetFriendlyFilter
      )
        return false;
      if (smokingFilter && hotel.policies?.smoking !== smokingFilter)
        return false;
      if (isPopularFilter !== null && hotel.isPopular !== isPopularFilter)
        return false;
      if (minRatingFilter !== null && hotel.rating < minRatingFilter)
        return false;

      if (cityFilter) {
        const idParts = hotel.id.split("-");
        const hotelCity = idParts.length > 1 ? idParts[1] : null;
        if (hotelCity !== cityFilter) return false;
      }

      return true;
    });

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      let valueA: string | number = "";
      let valueB: string | number = "";

      switch (sortField) {
        case "name":
          valueA = a.name?.toLowerCase() || "";
          valueB = b.name?.toLowerCase() || "";
          break;
        case "rating":
          valueA = a.rating || 0;
          valueB = b.rating || 0;
          break;
        case "price":
          // Note: This assumes there's a price field. If not, add it or remove this option.
          valueA = a.roomsAvailable || 0; // Using rooms as a proxy for price
          valueB = b.roomsAvailable || 0;
          break;
        default:
          const propA = a[sortField as keyof Hotel];
          const propB = b[sortField as keyof Hotel];
          valueA = propA !== undefined ? (propA as string | number) : "";
          valueB = propB !== undefined ? (propB as string | number) : "";
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortDirection === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      if (valueA < valueB) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredHotels(sorted);
    setCurrentPage(1);
  }, [
    hotels,
    accommodationTypeFilter,
    amenitiesFilter,
    accessibilityFilter,
    checkInTimeFilter,
    checkOutTimeFilter,
    minRoomsFilter,
    isPetFriendlyFilter,
    smokingFilter,
    isPopularFilter,
    minRatingFilter,
    cityFilter,
    sortField,
    sortDirection,
  ]);

  // Reset all filters
  const resetFilters = () => {
    setAccommodationTypeFilter(null);
    setAmenitiesFilter([]);
    setAccessibilityFilter([]);
    setCheckInTimeFilter(null);
    setCheckOutTimeFilter(null);
    setMinRoomsFilter(null);
    setIsPetFriendlyFilter(null);
    setSmokingFilter(null);
    setIsPopularFilter(null);
    setMinRatingFilter(null);
    setCityFilter(null);
    setSortField("name");
    setSortDirection("asc");
  };

  // Handle amenity checkbox changes
  const handleAmenityChange = (amenity: string, isChecked: boolean) => {
    setAmenitiesFilter((prev) =>
      isChecked ? [...prev, amenity] : prev.filter((a) => a !== amenity)
    );
  };

  // Handle accessibility checkbox changes
  const handleAccessibilityChange = (feature: string, isChecked: boolean) => {
    setAccessibilityFilter((prev) =>
      isChecked ? [...prev, feature] : prev.filter((f) => f !== feature)
    );
  };

  // Pagination
  const totalItems = filteredHotels.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentHotels = filteredHotels.slice(startIndex, endIndex);

  // Navigation to individual hotel page
  const viewHotelDetails = (hotel: Hotel) => {
    // Extract city from the hotel ID
    const idParts = hotel.id.split("-");
    const city = idParts.length > 1 ? idParts[1] : "";

    // Navigate to the hotel detail page with the hotel name as a query param
    router.push(
      `/services/hotels/${city}?hotel=${encodeURIComponent(hotel.id)}`
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
            <h1 className="text-start">Hotels & Accommodations</h1>
            <h5 className="text-start">
              {filteredHotels.length} accommodation
              {filteredHotels.length !== 1 ? "s" : ""} available
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
                      setSortField("name");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    By Name{" "}
                    {sortField === "name" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("rating");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Rating{" "}
                    {sortField === "rating" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("roomsAvailable");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Rooms Available{" "}
                    {sortField === "roomsAvailable" &&
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

              {/* Location Filter */}
              {filteredCities.length > 0 && (
                <div className="space-y-2">
                  <h5>Location</h5>
                  <Select
                    value={cityFilter || "all"}
                    onValueChange={(value) =>
                      setCityFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {filteredCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city.charAt(0).toUpperCase() + city.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Accommodation Type Filter */}
              <div className="space-y-2">
                <h5>Accommodation Type</h5>
                <Select
                  value={accommodationTypeFilter || "all"}
                  onValueChange={(value) =>
                    setAccommodationTypeFilter(value === "all" ? null : value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {filteredAccommodationTypes.map((type) => (
                      <SelectItem key={type} value={type.toString()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Rating Filter */}
              <div className="space-y-2">
                <h5>Minimum Rating</h5>
                <Select
                  value={minRatingFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setMinRatingFilter(value === "all" ? null : parseInt(value))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Minimum Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Rating</SelectItem>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <SelectItem key={rating} value={rating.toString()}>
                        {rating}+ Stars
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Pet Friendly Filter */}
              <div className="space-y-2">
                <h5>Pet Friendly</h5>
                <Select
                  value={
                    isPetFriendlyFilter === null
                      ? "all"
                      : isPetFriendlyFilter
                        ? "yes"
                        : "no"
                  }
                  onValueChange={(value) =>
                    setIsPetFriendlyFilter(
                      value === "all" ? null : value === "yes"
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pet Friendly" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    <SelectItem value="yes">Pet Friendly Only</SelectItem>
                    <SelectItem value="no">No Pets Allowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Popular Filter */}
              <div className="space-y-2">
                <h5>Popularity</h5>
                <Select
                  value={
                    isPopularFilter === null
                      ? "all"
                      : isPopularFilter
                        ? "popular"
                        : "regular"
                  }
                  onValueChange={(value) =>
                    setIsPopularFilter(
                      value === "all" ? null : value === "popular"
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Popularity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Hotels</SelectItem>
                    <SelectItem value="popular">Popular Hotels Only</SelectItem>
                    <SelectItem value="regular">Regular Hotels</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Smoking Policy Filter */}
              {filteredSmokingPolicies.length > 0 && (
                <div className="space-y-2">
                  <h5>Smoking Policy</h5>
                  <Select
                    value={smokingFilter || "all"}
                    onValueChange={(value) =>
                      setSmokingFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Smoking Policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Policy</SelectItem>
                      {filteredSmokingPolicies.map((policy) => (
                        <SelectItem key={policy} value={`${policy}`}>
                          {policy}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Check-in Time Filter */}
              {filteredCheckInTimes.length > 0 && (
                <div className="space-y-2">
                  <h5>Check-in Time</h5>
                  <Select
                    value={checkInTimeFilter || "all"}
                    onValueChange={(value) =>
                      setCheckInTimeFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Check-in Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Time</SelectItem>
                      {filteredCheckInTimes.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time.slice(0, 2)}:{time.slice(2)} or later
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Check-out Time Filter */}
              {filteredCheckOutTimes.length > 0 && (
                <div className="space-y-2">
                  <h5>Check-out Time</h5>
                  <Select
                    value={checkOutTimeFilter || "all"}
                    onValueChange={(value) =>
                      setCheckOutTimeFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Check-out Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Time</SelectItem>
                      {filteredCheckOutTimes.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time.slice(0, 2)}:{time.slice(2)} or earlier
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Minimum Rooms Filter - keep as is since it uses fixed values */}

              {/* Amenities Filter - Multi-select */}
              <div className="space-y-2">
                <h5>Amenities</h5>
                <div className="space-y-2 p-2 border border-border rounded-md max-h-48 overflow-y-auto">
                  {filteredAmenities.slice(0, 15).map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={`amenity-${amenity}`}
                        checked={amenitiesFilter.includes(amenity)}
                        onCheckedChange={(checked) =>
                          handleAmenityChange(amenity, checked === true)
                        }
                      />
                      <label
                        htmlFor={`amenity-${amenity}`}
                        className="peer-disabled:opacity-70 text-sm leading-none peer-disabled:cursor-not-allowed"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                  {filteredAmenities.length > 15 && (
                    <p className="text-muted-foreground text-xs">
                      + {filteredAmenities.length - 15} more amenities available
                    </p>
                  )}
                </div>
              </div>

              {/* Accessibility Features Filter - Multi-select */}
              {filteredAccessibilityFeatures.length > 0 && (
                <div className="space-y-2">
                  <h5>Accessibility Features</h5>
                  <div className="space-y-2 p-2 border border-border rounded-md max-h-48 overflow-y-auto">
                    {filteredAccessibilityFeatures.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`feature-${feature}`}
                          checked={accessibilityFilter.includes(feature)}
                          onCheckedChange={(checked) =>
                            handleAccessibilityChange(feature, checked === true)
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
              )}

              {/* Reset Button */}
              <Button
                variant="outline"
                className="w-full"
                onClick={resetFilters}
              >
                Reset All Filters
              </Button>
            </div>
          )}

          {/* Main Content - Hotel Cards */}
          <div
            className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
          >
            {/* Results count */}
            <div className="text-gray-500">
              Showing {startIndex + 1} to {endIndex} of {totalItems} hotels
            </div>

            {currentHotels.length > 0 ? (
              <>
                {/* Hotel Cards in a grid layout */}
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {currentHotels.map((hotel) => (
                    <HotelCard
                      key={hotel.id}
                      hotel={hotel}
                      onViewDetails={() => viewHotelDetails(hotel)}
                    />
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
                <h3 className="font-semibold text-lg">No hotels found</h3>
                <p className="mt-2 max-w-md text-gray-500">
                  We couldn't find any hotels matching your filters. Try
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

// Hotel Card Component
function HotelCard({
  hotel,
  onViewDetails,
}: {
  hotel: Hotel;
  onViewDetails: () => void;
}) {
  // Extract city from the hotel ID for determination of location
  const idParts = hotel.id.split("-");
  const city = idParts.length > 1 ? idParts[1] : "";

  // Format city name for display
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{hotel.name}</CardTitle>
          {hotel.isPopular && <Badge variant="default">Popular</Badge>}
        </div>
        <CardDescription>
          {formattedCity} • {hotel.accommodationType}
        </CardDescription>
        {displayRatingStars(hotel.rating, 5, {
          size: "md",
          showRatingNumber: false,
          containerClassName: "mt-1",
          align: "left",
        })}
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{hotel.address}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">
              Check-in: {hotel.checkInTime}, Check-out: {hotel.checkOutTime}
            </span>
          </div>

          <div className="space-y-1 mt-4 text-sm">
            <div className="flex items-center gap-2">
              {hotel.isPetFriendly ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <XCircle className="w-4 h-4 text-red-500" />
              )}
              <span>
                {hotel.isPetFriendly ? "Pet friendly" : "No pets allowed"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {hotel.policies?.smoking === "Not Allowed" ? (
                <XCircle className="w-4 h-4 text-red-500" />
              ) : (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
              <span>Smoking: {hotel.policies?.smoking}</span>
            </div>
          </div>

          {/* Display up to 5 amenities */}
          {hotel.amenities && hotel.amenities.length > 0 && (
            <div>
              <Separator className="my-3" />
              <h5 className="mb-2 font-medium">Amenities</h5>
              <div className="flex flex-wrap gap-1">
                {hotel.amenities?.slice(0, 5).map((amenity) => (
                  <Badge key={amenity} variant="outline" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
                {(hotel.amenities?.length || 0) > 5 && (
                  <Badge variant="outline" className="text-xs">
                    +{(hotel.amenities?.length || 0) - 5} more
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onViewDetails}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
