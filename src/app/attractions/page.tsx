"use client";

import AttractionDisplayCard from "@/components/cards/AttractionDisplayCard";
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
import { mockAttractions } from "@/data/attractions";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { Filter, MapPin, RotateCcw, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function AttractionsPage() {
  const { formatPrice } = useCurrency();

  const [filteredAttractions, setFilteredAttractions] =
    useState<Attraction[]>(mockAttractions);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTimeToVisit, setSelectedTimeToVisit] = useState<string>("all");
  const [accessibilityRequired, setAccessibilityRequired] =
    useState<string>("all");
  const [skipLineAvailable, setSkipLineAvailable] = useState<string>("all");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [ratingFilter, setRatingFilter] = useState([0, 5]);
  const [sortBy, setSortBy] = useState<string>("name");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // Get unique values for filters
  const countries = [
    { value: "all", label: "All Countries" },
    ...Array.from(
      new Set(mockAttractions.map((attraction) => attraction.location.country))
    )
      .sort()
      .map((country) => ({ value: country, label: country })),
  ];

  const types = [
    { value: "all", label: "All Types" },
    ...Array.from(new Set(mockAttractions.map((attraction) => attraction.type)))
      .sort()
      .map((type) => ({ value: type, label: type })),
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    ...Array.from(
      new Set(mockAttractions.map((attraction) => attraction.category))
    )
      .sort()
      .map((category) => ({ value: category, label: category })),
  ];

  const timesToVisit = [
    { value: "all", label: "All Times" },
    ...Array.from(
      new Set(
        mockAttractions.flatMap((attraction) => attraction.bestTimeToVisit)
      )
    )
      .sort()
      .map((time) => ({ value: time, label: time })),
  ];

  const handleSearch = () => {
    let filtered = mockAttractions;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (attraction) =>
          attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          attraction.location.country
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          attraction.location.city
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          attraction.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          attraction.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by country
    if (selectedCountry !== "all") {
      filtered = filtered.filter(
        (attraction) => attraction.location.country === selectedCountry
      );
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter(
        (attraction) => attraction.type === selectedType
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (attraction) => attraction.category === selectedCategory
      );
    }

    // Filter by best time to visit
    if (selectedTimeToVisit !== "all") {
      filtered = filtered.filter((attraction) =>
        attraction.bestTimeToVisit.includes(selectedTimeToVisit)
      );
    }

    // Filter by accessibility
    if (accessibilityRequired !== "all") {
      const isRequired = accessibilityRequired === "true";
      filtered = filtered.filter(
        (attraction) =>
          attraction.accessibility?.wheelchairAccessible === isRequired
      );
    }

    // Filter by skip line availability
    if (skipLineAvailable !== "all") {
      const isAvailable = skipLineAvailable === "true";
      filtered = filtered.filter(
        (attraction) => attraction.tickets.skipTheLine === isAvailable
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (attraction) =>
        attraction.pricing.adult >= priceRange[0] &&
        attraction.pricing.adult <= priceRange[1]
    );

    // Filter by rating
    filtered = filtered.filter(
      (attraction) =>
        attraction.rating >= ratingFilter[0] &&
        attraction.rating <= ratingFilter[1]
    );

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.pricing.adult - b.pricing.adult;
        case "price-high":
          return b.pricing.adult - a.pricing.adult;
        case "rating":
          return b.rating - a.rating;
        case "popularity":
          return b.reviews.totalReviews - a.reviews.totalReviews;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredAttractions(filtered);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCountry("all");
    setSelectedType("all");
    setSelectedCategory("all");
    setSelectedTimeToVisit("all");
    setAccessibilityRequired("all");
    setSkipLineAvailable("all");
    setPriceRange([0, 200]);
    setRatingFilter([0, 5]);
  };

  // Auto-filter when any filter changes
  useEffect(() => {
    handleSearch();
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [
    searchQuery,
    selectedCountry,
    selectedType,
    selectedCategory,
    selectedTimeToVisit,
    accessibilityRequired,
    skipLineAvailable,
    priceRange,
    ratingFilter,
    sortBy,
  ]);

  // Reset to page 1 when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredAttractions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedAttractions = filteredAttractions.slice(startIndex, endIndex);

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
            Discover Amazing Attractions
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Explore iconic landmarks, historical sites, and must-see attractions
            around the world. From ancient monuments to modern marvels, find
            experiences that will create lasting memories.
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
                    <SelectTrigger className="pl-10 w-full">
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

              {/* Type */}
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    {types.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
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
                  className="w-full"
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
                    <Label>Search Attractions</Label>
                    <div className="relative">
                      <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                      <Input
                        placeholder="Eiffel Tower, Colosseum..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                      />
                    </div>
                  </div>

                  {/* Best Time to Visit */}
                  <div className="space-y-2">
                    <Label>Best Time to Visit</Label>
                    <Select
                      value={selectedTimeToVisit}
                      onValueChange={setSelectedTimeToVisit}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {timesToVisit.map((time) => (
                          <SelectItem key={time.value} value={time.value}>
                            {time.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Accessibility */}
                  <div className="space-y-2">
                    <Label>Wheelchair Accessible</Label>
                    <Select
                      value={accessibilityRequired}
                      onValueChange={setAccessibilityRequired}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Accessibility" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="true">Accessible</SelectItem>
                        <SelectItem value="false">Not Required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Skip Line Available */}
                  <div className="space-y-2">
                    <Label>Skip Line Available</Label>
                    <Select
                      value={skipLineAvailable}
                      onValueChange={setSkipLineAvailable}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Skip line" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="true">Available</SelectItem>
                        <SelectItem value="false">Not Available</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <Label>Price Range (Adult)</Label>
                    <div className="px-2 py-4">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={200}
                        min={0}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-slate-600 text-sm dark:text-slate-400">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div className="space-y-2">
                    <Label>Minimum Rating</Label>
                    <div className="px-2 py-4">
                      <Slider
                        value={ratingFilter}
                        onValueChange={setRatingFilter}
                        max={5}
                        min={0}
                        step={0.5}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-slate-600 text-sm dark:text-slate-400">
                        <span>{ratingFilter[0]} ⭐</span>
                        <span>{ratingFilter[1]} ⭐</span>
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

          {/* Attractions Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-600 dark:text-slate-400">
                {filteredAttractions.length} attraction
                {filteredAttractions.length !== 1 ? "s" : ""} found
                {filteredAttractions.length > 0 && (
                  <span className="ml-2">
                    (Showing {startIndex + 1}-
                    {Math.min(endIndex, filteredAttractions.length)} of{" "}
                    {filteredAttractions.length})
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
                    <SelectTrigger className="w-20">
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
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredAttractions.length === 0 ? (
              <Card className="p-12 text-center">
                <MapPin className="mx-auto mb-4 w-12 h-12 text-slate-400" />
                <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                  No attractions found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search criteria or filters to find
                  available attractions.
                </p>
              </Card>
            ) : (
              <>
                <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
                  {paginatedAttractions.map((attraction) => (
                    <AttractionDisplayCard
                      key={attraction.id}
                      attraction={attraction}
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
