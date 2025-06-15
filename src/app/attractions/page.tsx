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
import { useCurrency } from "@/context/CurrencyContext";
import { Attraction, fetchAttractionsList } from "@/lib/api/attractions";
import { Filter, MapPin, RotateCcw, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function AttractionsPage() {
  const { formatPrice } = useCurrency();
  // Ensure this state uses the Attraction type from @/lib/api/attractions
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name"); // Default sort
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attractionsData = await fetchAttractionsList();
        setAttractions(attractionsData);
      } catch (error) {
        console.error("Error fetching attractions data:", error);
        setAttractions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>(
    []
  );

  useEffect(() => {
    if (attractions.length > 0) {
      // Placeholder for price calculation if data becomes available
      // const prices = attractions.map(attr => attr.somePriceField).filter(p => typeof p === 'number');
      // if (prices.length > 0) {
      //   const newMinPrice = Math.min(...prices);
      //   const newMaxPrice = Math.max(...prices);
      //   setMinPrice(newMinPrice);
      //   setMaxPrice(newMaxPrice);
      //   setPriceRange([newMinPrice, newMaxPrice]);
      // }
      setFilteredAttractions(attractions);
    } else {
      setFilteredAttractions([]);
    }
  }, [attractions]);

  const countries = [
    { value: "all", label: "All Countries" },
    ...Array.from(new Set(attractions.map((attraction) => attraction.country)))
      .sort()
      .map((country) => ({ value: country, label: country })),
  ];

  const types = [
    { value: "all", label: "All Types" },
    ...Array.from(
      new Set(
        attractions
          .map((attraction) => attraction.categories[0])
          .filter(Boolean)
      )
    )
      .sort()
      .map((type) => ({ value: type as string, label: type as string })), // Ensure type is string
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    ...Array.from(
      new Set(attractions.flatMap((attraction) => attraction.categories))
    )
      .sort()
      .map((category) => ({ value: category, label: category })),
  ];

  // const timesToVisit = [ ... ]; // Commented out

  const handleSearch = () => {
    let filtered = [...attractions];

    if (searchQuery) {
      filtered = filtered.filter(
        (attraction) =>
          attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          attraction.country
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          attraction.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (attraction.description &&
            attraction.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) ||
          attraction.categories.some((cat: string) =>
            cat.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    if (selectedCountry !== "all") {
      filtered = filtered.filter(
        (attraction) => attraction.country === selectedCountry
      );
    }

    if (selectedType !== "all") {
      filtered = filtered.filter(
        (attraction) => attraction.categories[0] === selectedType
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((attraction) =>
        attraction.categories.includes(selectedCategory)
      );
    }

    // Filters for data not in Geoapify Place Details (pricing, rating, etc.) are removed/commented

    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        // Add other sorting cases if relevant data becomes available
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
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
    setCurrentPage(1);
  }, [
    searchQuery,
    selectedCountry,
    selectedType,
    selectedCategory,
    sortBy,
    attractions,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowFilters(true);
      } else {
        setShowFilters(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(filteredAttractions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedAttractions = filteredAttractions.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
                    <SelectTrigger
                      className="pl-10 border border-border w-full"
                      variant="professional"
                    >
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent
                      className="w-full max-h-60"
                      variant="professional"
                    >
                      {countries.map((country) => (
                        <SelectItem
                          key={country.value}
                          value={country.value}
                          variant="classic"
                        >
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
                  <SelectTrigger className="border border-border w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent
                    className="w-full max-h-60"
                    variant="professional"
                  >
                    {types.map((type) => (
                      <SelectItem
                        key={type.value}
                        value={type.value}
                        variant="classic"
                      >
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
                  <SelectTrigger className="border border-border w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent
                    className="w-full max-h-60"
                    variant="professional"
                  >
                    {categories.map((category) => (
                      <SelectItem
                        key={category.value}
                        value={category.value}
                        variant="classic"
                      >
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
                  className="m-0 p-0 w-full"
                >
                  <RotateCcw className="mr-2 w-4 h-4" />
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div
          className={`gap-8 grid grid-cols-1 ${showFilters ? "lg:grid-cols-4" : "lg:grid-cols-1"}`}
        >
          {/* Filters Sidebar */}
          {showFilters && (
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
                          className="pl-10 focus:border-muted border-border focus:ring-muted/20 h-8"
                        />
                      </div>
                    </div>

                    {/* Best Time to Visit - REMOVE OR ADAPT (Commented out) */}
                    {/* <div className="space-y-2"> ... </div> */}

                    {/* Accessibility - REMOVE OR ADAPT (Commented out) */}
                    {/* <div className="space-y-2"> ... </div> */}

                    {/* Skip Line Available - REMOVE OR ADAPT (Commented out) */}
                    {/* <div className="space-y-2"> ... </div> */}

                    {/* Price Range - REMOVE OR ADAPT (Commented out) */}
                    {/* <div className="space-y-2"> ... </div> */}

                    {/* Rating Filter - REMOVE OR ADAPT (Commented out) */}
                    {/* <div className="space-y-2"> ... </div> */}

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
          )}

          {/* Attractions Grid */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-1"}>
            <div className="flex md:flex-row flex-col justify-between items-center mb-6">
              <div className="md:w-1/4 text-center text-slate-600 text-wrap md:text-start dark:text-slate-400">
                {filteredAttractions.length} attraction
                {filteredAttractions.length !== 1 ? "s" : ""} found
                {filteredAttractions.length > 0 && (
                  <p>
                    (Showing {startIndex + 1}-{" "}
                    {Math.min(endIndex, filteredAttractions.length)} of{" "}
                    {filteredAttractions.length})
                  </p>
                )}
              </div>

              <div className="flex md:flex-row flex-col items-center md:items-end gap-4 mt-2 md:mt-0 w-full md:w-auto">
                {/* Items per page dropdown */}
                <div className="flex flex-col items-center w-4/5 md:w-auto">
                  <Label className="text-sm whitespace-nowrap">Show:</Label>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => setItemsPerPage(Number(value))}
                  >
                    <SelectTrigger className="border border-border w-full md:w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent
                      className="w-full max-h-60"
                      variant="professional"
                    >
                      <SelectItem value="4" variant="classic">
                        4
                      </SelectItem>
                      <SelectItem value="8" variant="classic">
                        8
                      </SelectItem>
                      <SelectItem value="12" variant="classic">
                        12
                      </SelectItem>
                      <SelectItem value="16" variant="classic">
                        16
                      </SelectItem>
                      <SelectItem value="24" variant="classic">
                        24
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort dropdown */}
                <div className="flex flex-col items-center w-4/5 md:w-auto">
                  <Label className="text-sm whitespace-nowrap">Sort By:</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="border border-border w-full md:w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent
                      className="w-full max-h-60"
                      variant="professional"
                    >
                      <SelectItem value="name" variant="classic">
                        Name (A-Z)
                      </SelectItem>
                      {/* Other sort options commented out */}
                    </SelectContent>
                  </Select>
                </div>

                {/* Toggle Filters Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 m-0.5 w-4/5 md:w-auto"
                >
                  <Filter className="w-4 h-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>
            </div>

            {loading ? (
              <Card className="p-12 text-center">
                <p className="text-slate-600 dark:text-slate-400">
                  Loading attractions...
                </p>
              </Card>
            ) : filteredAttractions.length === 0 ? (
              <Card className="p-12 text-center">
                <MapPin className="mx-auto mb-4 w-12 h-12 text-slate-400" />
                <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                  No attractions found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search criteria or filters, or check back
                  later. (Note: Attraction list fetching is currently a
                  placeholder.)
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
