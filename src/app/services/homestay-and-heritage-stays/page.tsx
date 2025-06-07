"use client";

import { useEffect, useState } from "react";
import { getHosts } from "@/lib/utils/get/homestay";
import { Host } from "@/lib/interfaces/people/homestay";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/Loading";
import {
  Filter,
  SlidersHorizontal,
  X,
  CheckCircle,
  XCircle,
  Star,
  Users,
  Globe,
  Home,
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
import { Separator } from "@/components/ui/separator";

const HOSTING_STYLES = [
  "laid-back",
  "hands-on",
  "private",
  "social",
  "family-oriented",
];

export default function HomestayAndHeritageStaysPage() {
  // State
  const [hosts, setHosts] = useState<Host[]>([]);
  const [filteredHosts, setFilteredHosts] = useState<Host[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [sortField, setSortField] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Filters
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [countryFilter, setCountryFilter] = useState<string | null>(null);
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [maxGuestsFilter, setMaxGuestsFilter] = useState<number | null>(null);
  const [isPopularFilter, setIsPopularFilter] = useState<boolean | null>(null);
  const [hostingStyleFilter, setHostingStyleFilter] = useState<string | null>(
    null
  );
  const [isVerifiedFilter, setIsVerifiedFilter] = useState<boolean | null>(
    null
  );
  const [minRatingFilter, setMinRatingFilter] = useState<number | null>(null);
  const [stayTypeFilter, setStayTypeFilter] = useState<string | null>(null);

  // Load all hosts on initial render
  useEffect(() => {
    async function loadHosts() {
      setIsLoading(true);
      try {
        const allHosts = await getHosts();
        setHosts(allHosts);
        setFilteredHosts(allHosts);
      } catch (error) {
        console.error("Error loading hosts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadHosts();
  }, []);

  // Extract unique values for filters
  const uniqueCities = Array.from(
    new Set(hosts.map((h) => h.location.city))
  ).sort();
  const uniqueCountries = Array.from(
    new Set(hosts.map((h) => h.location.country))
  ).sort();
  const uniqueLanguages = Array.from(
    new Set(hosts.flatMap((h) => h.languages))
  ).sort();
  const uniqueHostingStyles = Array.from(
    new Set(hosts.map((h) => h.hostingStyle).filter(Boolean))
  ).sort();
  const uniqueStayTypes = Array.from(
    new Set(hosts.map((h) => h.stayType))
  ).sort();

  // Filtering logic
  useEffect(() => {
    let filtered = hosts.filter((host) => {
      if (cityFilter && host.location.city !== cityFilter) return false;
      if (countryFilter && host.location.country !== countryFilter)
        return false;
      if (languageFilter && !host.languages.includes(languageFilter))
        return false;
      if (maxGuestsFilter !== null && host.maxGuests < maxGuestsFilter)
        return false;
      if (isPopularFilter !== null && !!host.isPopular !== isPopularFilter)
        return false;
      if (hostingStyleFilter && host.hostingStyle !== hostingStyleFilter)
        return false;
      if (isVerifiedFilter !== null && host.isVerified !== isVerifiedFilter)
        return false;
      if (minRatingFilter !== null && (host.rating ?? 0) < minRatingFilter)
        return false;
      if (stayTypeFilter && host.stayType !== stayTypeFilter) return false;
      return true;
    });

    // Sorting
    filtered = [...filtered].sort((a, b) => {
      let valueA: any, valueB: any;
      switch (sortField) {
        case "name":
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
          break;
        case "rating":
          valueA = a.rating ?? 0;
          valueB = b.rating ?? 0;
          break;
        case "maxGuests":
          valueA = a.maxGuests;
          valueB = b.maxGuests;
          break;
        default:
          valueA = a[sortField as keyof Host];
          valueB = b[sortField as keyof Host];
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

    setFilteredHosts(filtered);
    setCurrentPage(1);
  }, [
    hosts,
    cityFilter,
    countryFilter,
    languageFilter,
    maxGuestsFilter,
    isPopularFilter,
    hostingStyleFilter,
    isVerifiedFilter,
    minRatingFilter,
    stayTypeFilter,
    sortField,
    sortDirection,
  ]);

  // Pagination
  const totalItems = filteredHosts.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentHosts = filteredHosts.slice(startIndex, endIndex);

  // Reset all filters
  const resetFilters = () => {
    setCityFilter(null);
    setCountryFilter(null);
    setLanguageFilter(null);
    setMaxGuestsFilter(null);
    setIsPopularFilter(null);
    setHostingStyleFilter(null);
    setIsVerifiedFilter(null);
    setMinRatingFilter(null);
    setStayTypeFilter(null);
    setSortField("name");
    setSortDirection("asc");
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
          <header>
            <h1 className="text-start">Homestay and Heritage Stays</h1>
            <h5 className="text-start">
              {filteredHosts.length} host{filteredHosts.length !== 1 ? "s" : ""}{" "}
              available
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
                      setSortField("maxGuests");
                      setSortDirection((prev) =>
                        prev === "desc" ? "asc" : "desc"
                      );
                    }}
                  >
                    By Max Guests{" "}
                    {sortField === "maxGuests" &&
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
              {/* City Filter */}
              {uniqueCities.length > 0 && (
                <div className="space-y-2">
                  <h5>City</h5>
                  <Select
                    value={cityFilter || "all"}
                    onValueChange={(value) =>
                      setCityFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cities</SelectItem>
                      {uniqueCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              {/* Country Filter */}
              {uniqueCountries.length > 0 && (
                <div className="space-y-2">
                  <h5>Country</h5>
                  <Select
                    value={countryFilter || "all"}
                    onValueChange={(value) =>
                      setCountryFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Countries</SelectItem>
                      {uniqueCountries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              {/* Language Filter */}
              {uniqueLanguages.length > 0 && (
                <div className="space-y-2">
                  <h5>Language</h5>
                  <Select
                    value={languageFilter || "all"}
                    onValueChange={(value) =>
                      setLanguageFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Languages</SelectItem>
                      {uniqueLanguages.map((lang) => (
                        <SelectItem key={lang} value={lang}>
                          {lang}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              {/* Max Guests Filter */}
              <div className="space-y-2">
                <h5>Minimum Guests</h5>
                <Select
                  value={maxGuestsFilter?.toString() || "all"}
                  onValueChange={(value) =>
                    setMaxGuestsFilter(value === "all" ? null : parseInt(value))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Min. Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    {[1, 2, 3, 4, 5, 6].map((count) => (
                      <SelectItem key={count} value={count.toString()}>
                        {count}+
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Is Popular Filter */}
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
                    <SelectItem value="all">All Hosts</SelectItem>
                    <SelectItem value="popular">Popular Only</SelectItem>
                    <SelectItem value="regular">Regular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Hosting Style Filter */}
              {uniqueHostingStyles.length > 0 && (
                <div className="space-y-2">
                  <h5>Hosting Style</h5>
                  <Select
                    value={hostingStyleFilter || "all"}
                    onValueChange={(value) =>
                      setHostingStyleFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Hosting Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Styles</SelectItem>
                      {uniqueHostingStyles.map((style) => (
                        <SelectItem key={style} value={`${style}`}>
                          {style}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              {/* Is Verified Filter */}
              <div className="space-y-2">
                <h5>Verified</h5>
                <Select
                  value={
                    isVerifiedFilter === null
                      ? "all"
                      : isVerifiedFilter
                        ? "yes"
                        : "no"
                  }
                  onValueChange={(value) =>
                    setIsVerifiedFilter(
                      value === "all" ? null : value === "yes"
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Verified" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    <SelectItem value="yes">Verified Only</SelectItem>
                    <SelectItem value="no">Not Verified</SelectItem>
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
              {/* Stay Type Filter */}
              {uniqueStayTypes.length > 0 && (
                <div className="space-y-2">
                  <h5>Stay Type</h5>
                  <Select
                    value={stayTypeFilter || "all"}
                    onValueChange={(value) =>
                      setStayTypeFilter(value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Stay Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {uniqueStayTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
          {/* Main Content - Host Cards */}
          <div
            className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
          >
            <div className="text-gray-500">
              Showing {startIndex + 1} to {endIndex} of {totalItems} hosts
            </div>
            {currentHosts.length > 0 ? (
              <>
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {currentHosts.map((host, idx) => (
                    <HostCard key={host.email + idx} host={host} />
                  ))}
                </div>
                {renderPagination()}
              </>
            ) : (
              <div className="flex flex-col justify-center items-center shadow py-12 rounded-lg text-center">
                <div className="mb-4">
                  <X className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-semibold text-lg">No hosts found</h3>
                <p className="mt-2 max-w-md text-gray-500">
                  We couldn't find any hosts matching your filters. Try
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

// Host Card Component
function HostCard({ host }: { host: Host }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{host.name}</CardTitle>
          <div className="flex gap-1">
            {host.isPopular && <Badge variant="default">Popular</Badge>}
            {host.isVerified && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Check className="w-3 h-3 text-green-500" /> Verified
              </Badge>
            )}
          </div>
        </div>
        <CardDescription>
          {host.location.city}, {host.location.country}
        </CardDescription>
        <div className="flex items-center gap-2 mt-1">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="font-medium">{host.rating ?? "N/A"}</span>
          <span className="text-muted-foreground text-xs">
            ({host.reviewCount ?? 0} reviews)
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm capitalize">
              {host.stayType.replace(/-/g, " ")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Max Guests: {host.maxGuests}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">
              Languages: {host.languages.join(", ")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm capitalize">{host.hostingStyle}</span>
          </div>

          <Separator className="my-3" />
          <div className="flex items-center gap-2">
            <h5>{host.background}</h5>
          </div>
          {host.quote && (
            <blockquote className="text-sm">"{host.quote}"</blockquote>
          )}
        </div>
      </CardContent>
      {host.phoneNumber && (
        <CardFooter>
          <div className="flex gap-4 w-full">
            <h5>Contact:</h5>
            <h5>{host.phoneNumber}</h5>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
