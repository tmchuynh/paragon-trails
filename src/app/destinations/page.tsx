"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { useCurrency } from "@/context/CurrencyContext";
import { mockDestinations } from "@/data/destinations";
import { Destination } from "@/lib/interfaces/services/destinations";
import {
  Calendar,
  Filter,
  MapPin,
  RotateCcw,
  Search,
  Thermometer,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DestinationsPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();

  const [filteredDestinations, setFilteredDestinations] =
    useState<Destination[]>(mockDestinations);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedContinent, setSelectedContinent] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedCuisine, setSelectedCuisine] = useState<string>("all");
  const [selectedSafetyLevel, setSelectedSafetyLevel] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [visaRequired, setVisaRequired] = useState<string>("all");
  const [selectedTimezone, setSelectedTimezone] = useState<string>("all");
  
  // Calculate min and max prices from destinations data
  const minPrice = Math.min(...mockDestinations.map(destination => destination.pricing.averageDailyBudget));
  const maxPrice = Math.max(...mockDestinations.map(destination => destination.pricing.averageDailyBudget));
  
  const [budgetRange, setBudgetRange] = useState([minPrice, maxPrice]);
  const [sortBy, setSortBy] = useState<string>("name");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Get unique values for filters
  const countries = [
    { value: "all", label: "All Countries" },
    ...Array.from(new Set(mockDestinations.map((dest) => dest.country)))
      .sort()
      .map((country) => ({ value: country, label: country })),
  ];

  const continents = [
    { value: "all", label: "All Continents" },
    ...Array.from(
      new Set(mockDestinations.map((dest) => dest.continent).filter(Boolean))
    )
      .sort()
      .map((continent) => ({ value: continent!, label: continent! })),
  ];

  const regions = [
    { value: "all", label: "All Regions" },
    ...Array.from(new Set(mockDestinations.map((dest) => dest.region)))
      .sort()
      .map((region) => ({ value: region, label: region })),
  ];

  const languages = [
    { value: "all", label: "All Languages" },
    ...Array.from(new Set(mockDestinations.flatMap((dest) => dest.language)))
      .sort()
      .map((language) => ({ value: language, label: language })),
  ];

  const cuisines = [
    { value: "all", label: "All Cuisines" },
    ...Array.from(new Set(mockDestinations.flatMap((dest) => dest.cuisine)))
      .sort()
      .map((cuisine) => ({ value: cuisine, label: cuisine })),
  ];

  const safetyLevels = [
    { value: "all", label: "All Safety Levels" },
    ...Array.from(new Set(mockDestinations.map((dest) => dest.safety.level)))
      .sort()
      .map((level) => ({ value: level, label: level })),
  ];

  const tags = [
    { value: "all", label: "All Tags" },
    ...Array.from(new Set(mockDestinations.flatMap((dest) => dest.tags)))
      .sort()
      .map((tag) => ({ value: tag, label: tag })),
  ];

  const timezones = [
    { value: "all", label: "All Timezones" },
    ...Array.from(new Set(mockDestinations.map((dest) => dest.timezone)))
      .sort()
      .map((timezone) => ({ value: timezone, label: timezone })),
  ];

  const handleSearch = () => {
    let filtered = mockDestinations;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (destination) =>
          destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          destination.country
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          destination.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    // Filter by country
    if (selectedCountry !== "all") {
      filtered = filtered.filter((dest) => dest.country === selectedCountry);
    }

    // Filter by continent
    if (selectedContinent !== "all") {
      filtered = filtered.filter(
        (dest) => dest.continent === selectedContinent
      );
    }

    // Filter by region
    if (selectedRegion !== "all") {
      filtered = filtered.filter((dest) => dest.region === selectedRegion);
    }

    // Filter by language
    if (selectedLanguage !== "all") {
      filtered = filtered.filter((dest) =>
        dest.language.includes(selectedLanguage)
      );
    }

    // Filter by cuisine
    if (selectedCuisine !== "all") {
      filtered = filtered.filter((dest) =>
        dest.cuisine.includes(selectedCuisine)
      );
    }

    // Filter by safety level
    if (selectedSafetyLevel !== "all") {
      filtered = filtered.filter(
        (dest) => dest.safety.level === selectedSafetyLevel
      );
    }

    // Filter by tag
    if (selectedTag !== "all") {
      filtered = filtered.filter((dest) => dest.tags.includes(selectedTag));
    }

    // Filter by visa requirement
    if (visaRequired !== "all") {
      const isRequired = visaRequired === "true";
      filtered = filtered.filter((dest) => dest.visa.required === isRequired);
    }

    // Filter by timezone
    if (selectedTimezone !== "all") {
      filtered = filtered.filter((dest) => dest.timezone === selectedTimezone);
    }

    // Filter by budget range
    filtered = filtered.filter(
      (dest) =>
        dest.pricing.averageDailyBudget >= budgetRange[0] &&
        dest.pricing.averageDailyBudget <= budgetRange[1]
    );

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.pricing.averageDailyBudget - b.pricing.averageDailyBudget;
        case "price-high":
          return b.pricing.averageDailyBudget - a.pricing.averageDailyBudget;
        case "rating":
          // Use a default rating if not available
          const ratingA = (a as any).rating || 0;
          const ratingB = (b as any).rating || 0;
          return ratingB - ratingA;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredDestinations(filtered);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCountry("all");
    setSelectedContinent("all");
    setSelectedRegion("all");
    setSelectedLanguage("all");
    setSelectedCuisine("all");
    setSelectedSafetyLevel("all");
    setSelectedTag("all");
    setVisaRequired("all");
    setSelectedTimezone("all");
    setBudgetRange([minPrice, maxPrice]);
  };

  // Auto-filter when any filter changes
  useEffect(() => {
    handleSearch();
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [
    searchQuery,
    selectedCountry,
    selectedContinent,
    selectedRegion,
    selectedLanguage,
    selectedCuisine,
    selectedSafetyLevel,
    selectedTag,
    visaRequired,
    selectedTimezone,
    budgetRange,
    sortBy,
  ]);

  // Reset to page 1 when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDestinations = filteredDestinations.slice(
    startIndex,
    endIndex
  );

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
            Discover Amazing Destinations
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Explore handpicked destinations around the world. From vibrant
            cities to peaceful retreats, find your perfect travel experience.
          </p>
        </div>

        {/* Top Filters */}
        <Card className="mb-8">
          <div className="p-6">
            <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
              {/* Country */}
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <div className="relative">
                  <MapPin className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                  <Select
                    value={selectedCountry}
                    onValueChange={setSelectedCountry}
                  >
                    <SelectTrigger className="pl-10 border border-border w-full">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent className="w-full max-h-60">
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Continent */}
              <div className="space-y-2">
                <Label htmlFor="continent">Continent</Label>
                <Select
                  value={selectedContinent}
                  onValueChange={setSelectedContinent}
                >
                  <SelectTrigger className="border border-border w-full">
                    <SelectValue placeholder="Select continent" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    {continents.map((continent) => (
                      <SelectItem key={continent.value} value={continent.value}>
                        {continent.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Region */}
              <div className="space-y-2">
                <Label htmlFor="region">Region</Label>
                <Select
                  value={selectedRegion}
                  onValueChange={setSelectedRegion}
                >
                  <SelectTrigger className="border border-border w-full">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    {regions.map((region) => (
                      <SelectItem key={region.value} value={region.value}>
                        {region.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
          </div>
        </Card>

        <div className="gap-8 grid lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="p-0">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Filters</h3>
                </div>

                <div className="space-y-6">
                  {/* Search by Name */}
                  <div className="space-y-2">
                    <Label>Search Destinations</Label>
                    <div className="relative">
                      <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                      <Input
                        placeholder="Paris, Tokyo, New York..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 focus:border-muted border-border focus:ring-muted/20 h-8"
                      />
                    </div>
                  </div>

                  {/* Language */}
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Select
                      value={selectedLanguage}
                      onValueChange={setSelectedLanguage}
                    >
                      <SelectTrigger className="border border-border w-full">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {languages.map((language) => (
                          <SelectItem
                            key={language.value}
                            value={language.value}
                          >
                            {language.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Cuisine */}
                  <div className="space-y-2">
                    <Label>Cuisine</Label>
                    <Select
                      value={selectedCuisine}
                      onValueChange={setSelectedCuisine}
                    >
                      <SelectTrigger className="border border-border w-full">
                        <SelectValue placeholder="Select cuisine" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {cuisines.map((cuisine) => (
                          <SelectItem key={cuisine.value} value={cuisine.value}>
                            {cuisine.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Safety Level */}
                  <div className="space-y-2">
                    <Label>Safety Level</Label>
                    <Select
                      value={selectedSafetyLevel}
                      onValueChange={setSelectedSafetyLevel}
                    >
                      <SelectTrigger className="border border-border w-full">
                        <SelectValue placeholder="Select safety level" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {safetyLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <Select value={selectedTag} onValueChange={setSelectedTag}>
                      <SelectTrigger className="border border-border w-full">
                        <SelectValue placeholder="Select tag" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {tags.map((tag) => (
                          <SelectItem key={tag.value} value={tag.value}>
                            {tag.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Visa Required */}
                  <div className="space-y-2">
                    <Label>Visa Required</Label>
                    <Select
                      value={visaRequired}
                      onValueChange={setVisaRequired}
                    >
                      <SelectTrigger className="border border-border w-full">
                        <SelectValue placeholder="Visa requirement" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="true">Visa Required</SelectItem>
                        <SelectItem value="false">No Visa Required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Timezone */}
                  <div className="space-y-2">
                    <Label>Timezone</Label>
                    <Select
                      value={selectedTimezone}
                      onValueChange={setSelectedTimezone}
                    >
                      <SelectTrigger className="border border-border w-full">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {timezones.map((timezone) => (
                          <SelectItem
                            key={timezone.value}
                            value={timezone.value}
                          >
                            {timezone.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-2">
                    <Label>Daily Budget Range</Label>
                    <div className="px-2 py-4">
                      <Slider
                        value={budgetRange}
                        onValueChange={setBudgetRange}
                        max={maxPrice}
                        min={minPrice}
                        step={25}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-slate-600 text-sm dark:text-slate-400">
                        <span>{formatPrice(budgetRange[0])}</span>
                        <span>{formatPrice(budgetRange[1])}</span>
                      </div>
                    </div>
                  </div>

                  {/* Reset Filters Button */}
                  <Button
                    onClick={resetFilters}
                    className="w-full"
                    variant="outline"
                  >
                    <RotateCcw className="mr-2 w-4 h-4" />
                    Reset Filters
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Destinations Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-600 dark:text-slate-400">
                {filteredDestinations.length} destination
                {filteredDestinations.length !== 1 ? "s" : ""} found
                {filteredDestinations.length > 0 && (
                  <span className="ml-2">
                    (Showing {startIndex + 1}-
                    {Math.min(endIndex, filteredDestinations.length)} of{" "}
                    {filteredDestinations.length})
                  </span>
                )}
              </p>

              <div className="flex items-center gap-4">
                {/* Items per page dropdown */}
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="items-per-page"
                    className="text-sm whitespace-nowrap"
                  >
                    Show:
                  </Label>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => setItemsPerPage(Number(value))}
                  >
                    <SelectTrigger className="border border-border w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="w-full max-h-60">
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="border border-border w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="price-low">
                      Budget: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Budget: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredDestinations.length === 0 ? (
              <Card className="p-12 text-center">
                <MapPin className="mx-auto mb-4 w-12 h-12 text-slate-400" />
                <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                  No destinations found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search criteria or filters to find
                  available destinations.
                </p>
              </Card>
            ) : (
              <>
                <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
                  {paginatedDestinations.map((destination) => (
                    <Card
                      key={destination.id}
                      className="group hover:shadow-xl p-0 transition-all cursor-pointer overflow-hidden"
                      onClick={() =>
                        router.push(
                          `/destinations/${destination.name.toLowerCase().replace(/\s+/g, "-")}`
                        )
                      }
                    >
                      <div className="relative h-64">
                        <Image
                          src={destination.images[0]}
                          alt={destination.name}
                          fill
                          className="transition-transform group-hover:scale-105 object-cover"
                        />
                        <div className="top-4 right-4 absolute bg-white px-3 py-1 rounded-full font-semibold text-black">
                          {formatPrice(destination.pricing.averageDailyBudget)}
                        </div>
                        <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full font-medium text-sm text-white">
                          <MapPin className="inline mr-1 w-3 h-3" />
                          {destination.country}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-bold text-slate-900 text-xl dark:group-hover:text-blue-400 dark:text-white group-hover:text-blue-600 transition-colors">
                          {destination.name}
                        </h3>

                        <p className="mb-4 text-slate-600 dark:text-slate-400 line-clamp-3">
                          {destination.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="text-xs">
                            <Thermometer className="mr-1 w-3 h-3" />
                            {destination.climate.averageTemperature}°C
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <Calendar className="mr-1 w-3 h-3" />
                            {destination.bestTimeToVisit[0]}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <Users className="mr-1 w-3 h-3" />
                            {destination.popularWith[0]}
                          </Badge>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <p className="font-semibold text-slate-600 text-sm">
                              From{" "}
                              {formatPrice(
                                destination.pricing.averageDailyBudget
                              )}
                              /day
                            </p>
                            <p className="text-slate-500 text-xs">
                              Best season: {destination.bestTimeToVisit[0]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
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

                        {/* Current page and neighbors */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter(
                            (page) =>
                              page >= Math.max(1, currentPage - 2) &&
                              page <= Math.min(totalPages, currentPage + 2)
                          )
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
