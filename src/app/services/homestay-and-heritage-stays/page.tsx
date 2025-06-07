"use client";

import { useState, useEffect } from "react";
import { getHosts } from "@/lib/utils/get/homestay";
import { Host } from "@/lib/interfaces/people/homestay";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/Loading";
import {
  Filter,
  MapPin,
  SlidersHorizontal,
  X,
  Globe,
  Clock,
  Users,
  Languages,
  Home,
  Star,
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
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { formatLanguages } from "@/lib/utils/format";
import { cityFiles } from "@/lib/constants/info/city";
import { formatKebabToTitle } from "@/lib/utils/format";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

export default function HomestaysAndAccommodationsPage() {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [filteredHosts, setFilteredHosts] = useState<Host[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [sortField, setSortField] = useState<string>("rating");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  // Filter states
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [maxGuestsFilter, setMaxGuestsFilter] = useState<number | null>(null);
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [curfewFilter, setCurfewFilter] = useState<string | null>(null);
  const [isPopularFilter, setIsPopularFilter] = useState<boolean | null>(null);
  const [hostingStyleFilter, setHostingStyleFilter] = useState<string | null>(
    null
  );
  const [checkInFilter, setCheckInFilter] = useState<string | null>(null);
  const [isVerifiedFilter, setIsVerifiedFilter] = useState<boolean | null>(
    null
  );
  const [minRatingFilter, setMinRatingFilter] = useState<number>(0);
  const [stayTypeFilter, setStayTypeFilter] = useState<string | null>(null);
  const [regionFilter, setRegionFilter] = useState<string | null>(null);
  const [countryFilter, setCountryFilter] = useState<string | null>(null);

  useEffect(() => {
    async function loadAllHomestays() {
      setIsLoading(true);
      try {
        const allHomestays = await getHosts();
        setHosts(allHomestays);
        setFilteredHosts(allHomestays);
      } catch (error) {
        console.error("Error loading homestays:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAllHomestays();
  }, []);

  useEffect(() => {
    // Apply filters whenever filter states change
    const filtered = hosts.filter((host) => {
      // Apply each filter if it's set
      if (
        cityFilter &&
        host.location.city.toLowerCase() !== cityFilter.toLowerCase()
      )
        return false;
      if (regionFilter && host.location.region !== regionFilter) return false;
      if (countryFilter && host.location.country !== countryFilter)
        return false;
      if (maxGuestsFilter !== null && host.maxGuests < maxGuestsFilter)
        return false;
      if (languageFilter && !host.languages.includes(languageFilter))
        return false;
      if (curfewFilter && host.curfew !== curfewFilter) return false;
      if (isPopularFilter !== null && host.isPopular !== isPopularFilter)
        return false;
      if (hostingStyleFilter && host.hostingStyle !== hostingStyleFilter)
        return false;
      if (checkInFilter && host.availability.checkInTime > checkInFilter)
        return false;
      if (isVerifiedFilter !== null && host.isVerified !== isVerifiedFilter)
        return false;
      if ((host.rating || 0) < minRatingFilter) return false;
      if (stayTypeFilter && host.stayType !== stayTypeFilter) return false;

      return true;
    });

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      let valueA, valueB;

      switch (sortField) {
        case "rating":
          valueA = a.rating || 0;
          valueB = b.rating || 0;
          break;
        case "maxGuests":
          valueA = a.maxGuests;
          valueB = b.maxGuests;
          break;
        case "name":
          valueA = a.name;
          valueB = b.name;
          break;
        default:
          valueA = a[sortField as keyof Host];
          valueB = b[sortField as keyof Host];
      }

      if (valueA < valueB) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredHosts(sorted);
    setCurrentPage(1);
  }, [
    hosts,
    cityFilter,
    regionFilter,
    countryFilter,
    maxGuestsFilter,
    languageFilter,
    curfewFilter,
    isPopularFilter,
    hostingStyleFilter,
    checkInFilter,
    isVerifiedFilter,
    minRatingFilter,
    stayTypeFilter,
    sortField,
    sortDirection,
  ]);

  if (isLoading) {
    return <Loading />;
  }

  // Get unique values for filters
  const uniqueCities = Array.from(
    new Set(hosts.map((host) => host.location.city))
  ).sort();

  const uniqueRegions = Array.from(
    new Set(hosts.map((host) => host.location.region))
  ).sort();

  const uniqueCountries = Array.from(
    new Set(hosts.map((host) => host.location.country))
  ).sort();

  const uniqueLanguages = Array.from(
    new Set(hosts.flatMap((host) => host.languages))
  ).sort();

  const uniqueCurfews = Array.from(
    new Set(hosts.map((host) => host.curfew))
  ).sort();

  const uniqueCheckInTimes = Array.from(
    new Set(hosts.map((host) => host.availability.checkInTime))
  ).sort();

  const uniqueHostingStyles = Array.from(
    new Set(hosts.map((host) => host.hostingStyle).filter(Boolean))
  ).sort();

  const uniqueStayTypes = Array.from(
    new Set(hosts.map((host) => host.stayType))
  ).sort();

  const uniqueMaxGuests = Array.from(
    new Set(hosts.map((host) => host.maxGuests))
  ).sort((a, b) => a - b);

  // Pagination
  const totalItems = filteredHosts.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentHosts = filteredHosts.slice(startIndex, endIndex);

  // Reset filters function
  const resetFilters = () => {
    setCityFilter(null);
    setRegionFilter(null);
    setCountryFilter(null);
    setMaxGuestsFilter(null);
    setLanguageFilter(null);
    setCurfewFilter(null);
    setIsPopularFilter(null);
    setHostingStyleFilter(null);
    setCheckInFilter(null);
    setIsVerifiedFilter(null);
    setMinRatingFilter(0);
    setStayTypeFilter(null);
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

  const formatStayType = (stayType: string) => {
    return stayType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header and Controls */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
          <header>
            <h1 className="text-start">Homestays & Heritage Stays</h1>
            <h5 className="text-start">
              Find authentic accommodations with local hosts worldwide
            </h5>
          </header>

          <div className="flex sm:flex-row flex-col items-center gap-4 md:ml-auto">
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
                      setSortField("maxGuests");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Capacity{" "}
                    {sortField === "maxGuests" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("name");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Name{" "}
                    {sortField === "name" &&
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
                <SelectValue placeholder="Homestays per page" />
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
          {/* Filters Panel - Updated to match tours page design */}
          {showFilters && (
            <div className="space-y-6 lg:col-span-1 shadow p-6 border border-border rounded-lg h-fit">
              <div className="flex justify-between items-center mb-4">
                <h3>Filters</h3>
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  Reset All
                </Button>
              </div>

              {/* Location Filters - New section */}
              <div className="space-y-4">
                <div className="font-semibold text-base">Location</div>
                <Separator />

                {/* City Filter */}
                <div>
                  <label className="font-medium text-sm">City</label>
                  <Select
                    value={cityFilter ?? "__any__"}
                    onValueChange={(value) =>
                      setCityFilter(value === "__any__" ? null : value)
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Any City" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[35em] overflow-y-auto">
                      <SelectItem value="__any__">Any City</SelectItem>
                      {uniqueCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Region Filter */}
                <div>
                  <label className="font-medium text-sm">Region</label>
                  <Select
                    value={regionFilter ?? "__any__"}
                    onValueChange={(value) =>
                      setRegionFilter(value === "__any__" ? null : value)
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Any Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__any__">Any Region</SelectItem>
                      {uniqueRegions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Country Filter */}
                <div>
                  <label className="font-medium text-sm">Country</label>
                  <Select
                    value={countryFilter ?? "__any__"}
                    onValueChange={(value) =>
                      setCountryFilter(value === "__any__" ? null : value)
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Any Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__any__">Any Country</SelectItem>
                      {uniqueCountries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="space-y-4">
                <div className="font-semibold text-base">Rating</div>
                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-medium text-sm">
                      Minimum Rating
                    </label>
                    <span className="bg-background px-2 py-1 border rounded text-xs">
                      {minRatingFilter.toFixed(1)}+
                    </span>
                  </div>
                  <Slider
                    defaultValue={[0]}
                    max={5}
                    step={0.5}
                    value={[minRatingFilter]}
                    onValueChange={(value) => setMinRatingFilter(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-muted-foreground text-xs">
                    <span>Any</span>
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              {/* Guest Capacity */}
              <div className="space-y-4">
                <div className="font-semibold text-base">Guest Capacity</div>
                <Separator />

                <div className="space-y-2">
                  <label className="font-medium text-sm">
                    Minimum Capacity
                  </label>
                  <Select
                    value={
                      maxGuestsFilter !== null
                        ? maxGuestsFilter.toString()
                        : "__any__"
                    }
                    onValueChange={(value) =>
                      setMaxGuestsFilter(
                        value === "__any__" ? null : Number(value)
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any Capacity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__any__">Any Capacity</SelectItem>
                      {uniqueMaxGuests.map((count) => (
                        <SelectItem key={count} value={count.toString()}>
                          At least {count} {count === 1 ? "guest" : "guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-4">
                <div className="font-semibold text-base">Languages</div>
                <Separator />

                <div className="space-y-2">
                  <label className="font-medium text-sm">Host Speaks</label>
                  <Select
                    value={languageFilter ?? "__any__"}
                    onValueChange={(value) =>
                      setLanguageFilter(value === "__any__" ? null : value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any Language" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[35em] overflow-y-auto">
                      <SelectItem value="__any__">Any Language</SelectItem>
                      {uniqueLanguages.map((language) => (
                        <SelectItem key={language} value={language}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Stay Type */}
              <div className="space-y-4">
                <div className="font-semibold text-base">Stay Type</div>
                <Separator />

                <div className="space-y-2">
                  <label className="font-medium text-sm">Type of Stay</label>
                  <Select
                    value={stayTypeFilter ?? "__any__"}
                    onValueChange={(value) =>
                      setStayTypeFilter(value === "__any__" ? null : value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__any__">Any Type</SelectItem>
                      {uniqueStayTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {formatStayType(type)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Hosting Style */}
              <div className="space-y-4">
                <div className="font-semibold text-base">Hosting Style</div>
                <Separator />

                <div className="space-y-2">
                  <label className="font-medium text-sm">Style</label>
                  <Select
                    value={hostingStyleFilter ?? "__any__"}
                    onValueChange={(value) =>
                      setHostingStyleFilter(value === "__any__" ? null : value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__any__">Any Style</SelectItem>
                      {uniqueHostingStyles.map((style) => (
                        <SelectItem key={style} value={style}>
                          {style.split("-").join(" ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Status Options */}
              <div className="space-y-4">
                <div className="font-semibold text-base">Status</div>
                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="popular"
                      checked={isPopularFilter === true}
                      onCheckedChange={(checked) =>
                        setIsPopularFilter(checked ? true : null)
                      }
                    />
                    <Label htmlFor="popular">Popular Hosts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="verified"
                      checked={isVerifiedFilter === true}
                      onCheckedChange={(checked) =>
                        setIsVerifiedFilter(checked ? true : null)
                      }
                    />
                    <Label htmlFor="verified">Verified Hosts</Label>
                  </div>
                </div>
              </div>

              {/* Additional Filters - Curfew and Check-in Time */}
              <div className="space-y-4">
                <div className="font-semibold text-base">Stay Details</div>
                <Separator />

                <div className="space-y-2">
                  <label className="font-medium text-sm">Curfew</label>
                  <Select
                    value={curfewFilter ?? "__any__"}
                    onValueChange={(value) =>
                      setCurfewFilter(value === "__any__" ? null : value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any Curfew" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__any__">Any Curfew</SelectItem>
                      {uniqueCurfews.map((curfew) => (
                        <SelectItem key={curfew} value={curfew}>
                          {curfew}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="font-medium text-sm">Latest Check-In</label>
                  <Select
                    value={checkInFilter ?? "__any__"}
                    onValueChange={(value) =>
                      setCheckInFilter(value === "__any__" ? null : value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__any__">Any Time</SelectItem>
                      {uniqueCheckInTimes.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Reset Button */}
              <Button
                variant="outline"
                className="mt-4 w-full"
                onClick={resetFilters}
              >
                Reset All Filters
              </Button>
            </div>
          )}

          {/* Main Content - Homestay Cards */}
          <div
            className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
          >
            {/* Results count */}
            <div className="text-gray-500">
              Showing {startIndex + 1} to {endIndex} of {totalItems} homestays
              {cityFilter && <> in {cityFilter}</>}
              {regionFilter && <> ({regionFilter})</>}
            </div>

            {currentHosts.length > 0 ? (
              <>
                {/* Homestay Cards in a grid layout */}
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {currentHosts.map((host, index) => (
                    <HomestayCard key={`${host.name}-${index}`} host={host} />
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
                <h3 className="font-semibold text-lg">No homestays found</h3>
                <p className="mt-2 max-w-md text-gray-500">
                  We couldn't find any homestays matching your filters. Try
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

// Homestay Card Component
function HomestayCard({ host }: { host: Host }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col shadow-md hover:shadow-lg border border-border rounded-lg h-full transition-shadow cursor-pointer overflow-hidden">
          <div className="relative bg-muted/50 p-6">
            {host.isPopular && (
              <Badge className="top-3 right-3 absolute">Popular</Badge>
            )}
            <h3 className="mb-1">{host.name}</h3>
            <p className="text-gray-600 text-sm">{host.background}</p>

            <div className="mt-4">
              {host.rating && (
                <div className="mb-2">
                  {displayRatingStars(Math.round(host.rating), 5)}
                  <span className="ml-2 text-gray-600 text-sm">
                    ({host.reviewCount || 0} reviews)
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 text-sm">
                <Users size={16} />
                <span>Up to {host.maxGuests} guests</span>
              </div>

              <div className="flex items-center gap-2 mt-1 text-sm">
                <MapPin size={16} />
                <span>
                  {host.location.city}, {host.location.country}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-4 h-full">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline">{formatStayType(host.stayType)}</Badge>
              {host.hostingStyle && (
                <Badge variant="secondary">{host.hostingStyle}</Badge>
              )}
              {host.isVerified && (
                <Badge
                  variant="successFaded"
                  className="flex items-center gap-1"
                >
                  <Check size={12} /> Verified
                </Badge>
              )}
            </div>

            <p className="mb-3 text-gray-600 text-sm italic line-clamp-2">
              {host.quote ? `"${host.quote}"` : ""}
            </p>

            <div className="mt-auto">
              <div className="text-gray-600 text-sm">
                <span className="font-medium">Check-in:</span>{" "}
                {host.availability.checkInTime}
              </div>
              <div className="text-gray-600 text-sm">
                <span className="font-medium">Languages:</span>{" "}
                {formatLanguages(host.languages.slice(0, 2))}
                {host.languages.length > 2 && ` +${host.languages.length - 2}`}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{host.name}</DialogTitle>
        </DialogHeader>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="mb-2">About the Host</h4>
            <p className="mb-4 text-gray-600">{host.background}</p>

            {host.quote && (
              <div className="bg-muted/50 mb-4 p-4 rounded-lg italic">
                "{host.quote}"
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="text-primary" size={18} />
                <span>Accommodates up to {host.maxGuests} guests</span>
              </div>

              <div className="flex items-center gap-2">
                <Languages className="text-primary" size={18} />
                <span>Speaks {formatLanguages(host.languages)}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="text-primary" size={18} />
                <span>Curfew: {host.curfew}</span>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="text-primary" size={18} />
                <span>
                  Location: {host.location.city}, {host.location.country} (
                  {host.location.region})
                </span>
              </div>
            </div>

            <h4 className="mt-4 mb-2">Guest Policies</h4>
            <div className="flex flex-wrap gap-2">
              {host.guestPolicy.map((policy) => (
                <Badge key={policy} variant="outline">
                  {policy}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2">House Rules</h4>
            <ul className="space-y-1 mb-4">
              {host.houseRules.map((rule) => (
                <li key={rule} className="flex items-start gap-2">
                  <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 mt-1 rounded-full w-5 h-5 text-primary text-xs">
                    •
                  </div>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>

            <h4 className="mb-2">Availability</h4>
            <div className="space-y-1 mb-4">
              <div className="flex justify-between">
                <span className="font-medium">Check-in time:</span>
                <span>{host.availability.checkInTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Check-out time:</span>
                <span>{host.availability.checkOutTime}</span>
              </div>
              {host.availability.calendarLink && (
                <Button variant="outline" className="mt-2 w-full" asChild>
                  <a
                    href={host.availability.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Availability Calendar
                  </a>
                </Button>
              )}
            </div>

            <h4 className="mb-2">Contact</h4>
            <div className="space-y-1 mb-4">
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>{host.email}</span>
              </div>
              {host.phoneNumber && (
                <div className="flex justify-between">
                  <span className="font-medium">Phone:</span>
                  <span>{host.phoneNumber}</span>
                </div>
              )}
            </div>

            {host.rating && (
              <div className="mb-4">
                <h4 className="mb-2">Rating & Reviews</h4>
                <div className="flex items-center gap-2">
                  {displayRatingStars(Math.round(host.rating), 5)}
                  <span className="font-medium">{host.rating.toFixed(1)}</span>
                  <span className="text-gray-600">
                    ({host.reviewCount} reviews)
                  </span>
                </div>
              </div>
            )}

            <Button className="w-full">Reserve This Homestay</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function formatStayType(stayType: string): string {
  return stayType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
