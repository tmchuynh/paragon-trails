"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Switch } from "@/components/ui/switch";
import { Currency, SortDirection, SortField } from "@/lib/interfaces/general";
import {
  Tour,
  TourRegion,
  TourTheme,
  TourType,
} from "@/lib/interfaces/services/tours";
import {
  convertPrice,
  formatKebebToTitleCase,
  formatPrice,
  removeSpecialCharactersFromNumbers,
} from "@/lib/utils/format";
import { getAllTours } from "@/lib/utils/get/tours";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ToursExplorePageClient() {
  const router = useRouter();
  // State management
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [tours, setTours] = useState<Tour[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>("city");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");

  // Filter states
  const [cityFilter, setCityFilter] = useState<string[]>([]);
  const [countryFilter, setCountryFilter] = useState<string[]>([]);
  const [regionFilter, setRegionFilter] = useState<TourRegion[]>([]);
  const [languageFilter, setLanguageFilter] = useState<string[]>([]);
  const [durationRange, setDurationRange] = useState<[number, number]>([0, 24]);
  const [typeFilter, setTypeFilter] = useState<TourType[]>([]);
  const [tagFilter, setTagFilter] = useState<TourTheme[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [groupSizeRange, setGroupSizeRange] = useState<[number, number]>([
    1, 50,
  ]);
  const [privateOnly, setPrivateOnly] = useState(false);
  const [petFriendlyOnly, setPetFriendlyOnly] = useState(false);

  // Derived states
  const uniqueCities = [...new Set(tours.map((tour) => tour.city))].sort();
  const uniqueCountries = [
    ...new Set(tours.map((tour) => tour.country)),
  ].sort();
  const uniqueRegions = [
    ...new Set(tours.map((tour) => tour.region)),
  ].sort() as TourRegion[];
  const uniqueLanguages = [
    ...new Set(tours.flatMap((tour) => tour.languagesOffered)),
  ].sort();
  const uniqueTypes = [
    ...new Set(tours.map((tour) => tour.type)),
  ].sort() as TourType[];
  const uniqueTags = [
    ...new Set(tours.flatMap((tour) => tour.tags)),
  ].sort() as TourTheme[];

  // Max values for ranges
  const maxPrice = Math.max(
    ...tours.map((tour) => tour.pricePerPerson || 0),
    1000
  );
  const maxDuration = Math.max(
    ...tours.map((tour) => tour.durationInHours || 0),
    24
  );
  const maxGroupSize = Math.max(
    ...tours.map((tour) => tour.maxGroupSize || 0),
    50
  );

  // Pagination values
  const totalItems = filteredTours.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = filteredTours.slice(startIndex, endIndex);

  // Fetch tours on component mount
  useEffect(() => {
    async function fetchTours() {
      try {
        const allTours = await getAllTours();
        setTours(allTours);
        setFilteredTours(allTours);
        // Set price range based on actual data
        const maxDataPrice = Math.max(
          ...allTours.map((tour) => parseFloat(tour.price) || 0)
        );
        setPriceRange([0, maxDataPrice > 0 ? maxDataPrice : 1000]);

        // Set duration range based on actual data
        const maxDataDuration = Math.max(
          ...allTours.map((tour) => tour.durationInHours || 0)
        );
        // Ensure we have a reasonable min/max for duration
        setDurationRange([
          0,
          maxDataDuration > 0 ? Math.ceil(maxDataDuration) : 24,
        ]);

        // Set group size range based on actual data
        const minDataGroupSize = Math.min(
          ...allTours.map((tour) => tour.minGroupSize || 1)
        );
        const maxDataGroupSize = Math.max(
          ...allTours.map((tour) => tour.maxGroupSize || 0)
        );
        setGroupSizeRange([
          minDataGroupSize > 0 ? minDataGroupSize : 1,
          maxDataGroupSize > 1 ? maxDataGroupSize : 50,
        ]);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTours();
  }, []);

  // Console log whenever currentItems changes
  useEffect(() => {
    if (currentItems.length === 0 && filteredTours.length > 0) {
      console.log("Warning: No items to display despite having filtered tours");
    }
  }, [currentItems, filteredTours]);

  // Apply filters and sorting when any filter changes
  useEffect(() => {
    if (tours.length === 0) return;
    let result = [...tours];

    // Apply city filter
    if (cityFilter.length > 0) {
      const beforeCount = result.length;
      // Debug problem cities
      const tourCities = new Set(result.map((tour) => tour.city));
      console.log(
        "Available tour cities:",
        Array.from(tourCities).slice(0, 10),
        "..."
      );

      result = result.filter((tour) => {
        const includesCity = cityFilter.includes(tour.city);
        if (!includesCity) {
          console.log(
            `City mismatch: Tour has "${tour.city}", filter wants ${cityFilter}`
          );
        }
        return includesCity;
      });
      console.log(`City filter: ${beforeCount} → ${result.length} tours`);
    }

    // Apply country filter - only if we have any countries selected
    if (countryFilter.length > 0) {
      const beforeCount = result.length;
      result = result.filter((tour) => countryFilter.includes(tour.country));
      console.log(`Country filter: ${beforeCount} → ${result.length} tours`);
    }

    // Apply region filter - only if we have any regions selected
    if (regionFilter.length > 0) {
      const beforeCount = result.length;
      result = result.filter((tour) => regionFilter.includes(tour.region));
      console.log(`Region filter: ${beforeCount} → ${result.length} tours`);
    }

    // Apply language filter
    if (languageFilter.length > 0) {
      const beforeCount = result.length;
      result = result.filter(
        (tour) =>
          tour.languagesOffered &&
          languageFilter.some((lang) => tour.languagesOffered.includes(lang))
      );
      console.log(`Language filter: ${beforeCount} → ${result.length} tours`);
    }

    // Apply type filter
    if (typeFilter.length > 0) {
      const beforeCount = result.length;
      result = result.filter((tour) => typeFilter.includes(tour.type));
      console.log(`Type filter: ${beforeCount} → ${result.length} tours`);
    }

    // Apply tag filter
    if (tagFilter.length > 0) {
      const beforeCount = result.length;
      result = result.filter(
        (tour) => tour.tags && tagFilter.some((tag) => tour.tags.includes(tag))
      );
      console.log(`Tag filter: ${beforeCount} → ${result.length} tours`);
    }

    // Filter by price range
    const beforePriceCount = result.length;
    result = result.filter((tour) => {
      const price =
        parseFloat(tour.price) ||
        parseFloat(tour.price?.replace(/[^0-9.]/g, "")) ||
        0;
      if (isNaN(price)) {
        console.log(`Price parsing issue: "${tour.price}" for tour ${tour.id}`);
        return true; // Don't filter out tours with unparseable prices
      }
      return price >= priceRange[0] && price <= priceRange[1];
    });
    console.log(`Price filter: ${beforePriceCount} → ${result.length} tours`);

    // Filter by duration range
    const beforeDurationCount = result.length;
    result = result.filter((tour) => {
      const duration = tour.durationInHours || 0;
      return duration >= durationRange[0] && duration <= durationRange[1];
    });
    console.log(
      `Duration filter: ${beforeDurationCount} → ${result.length} tours`
    );

    // Filter by group size range
    const beforeGroupSizeCount = result.length;
    result = result.filter((tour) => {
      const minSize = tour.minGroupSize || 1;
      const maxSize = tour.maxGroupSize || 50;
      return minSize >= groupSizeRange[0] && maxSize <= groupSizeRange[1];
    });
    console.log(
      `Group size filter: ${beforeGroupSizeCount} → ${result.length} tours`
    );

    // Filter by private availability
    if (privateOnly) {
      const beforeCount = result.length;
      result = result.filter((tour) => tour.privateAvailable === true);
      console.log(
        `Private only filter: ${beforeCount} → ${result.length} tours`
      );
    }

    // Filter by pet friendly
    if (petFriendlyOnly) {
      const beforeCount = result.length;
      result = result.filter((tour) => tour.isPetFriendly === true);
      console.log(
        `Pet friendly filter: ${beforeCount} → ${result.length} tours`
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      let valueA, valueB;

      switch (sortField) {
        case "price":
          valueA = parseFloat(a.price);
          valueB = parseFloat(b.price);
          break;
        case "duration":
          valueA = a.durationInHours;
          valueB = b.durationInHours;
          break;
        default:
          valueA = a[sortField];
          valueB = b[sortField];
      }

      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    console.log("After filtering:", result.length, "tours remain");
    setFilteredTours(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [
    tours,
    cityFilter,
    countryFilter,
    regionFilter,
    languageFilter,
    typeFilter,
    tagFilter,
    priceRange,
    durationRange,
    groupSizeRange,
    privateOnly,
    petFriendlyOnly,
    sortField,
    sortDirection,
  ]);

  // Set default filter values on component mount - NEW CODE
  useEffect(() => {
    // Don't set any filters by default
    setCityFilter([]);
    setCountryFilter([]);
    setRegionFilter([]);
    setLanguageFilter([]);
    setTypeFilter([]);
    setTagFilter([]);
  }, []);

  // Helper functions
  const toggleFilter = (
    filterArray: any[],
    setFilterArray: React.Dispatch<React.SetStateAction<any[]>>,
    item: any
  ) => {
    console.log(
      `Toggling filter: ${item} in array of length ${filterArray.length}`
    );
    if (filterArray.includes(item)) {
      setFilterArray(filterArray.filter((i) => i !== item));
    } else {
      setFilterArray([...filterArray, item]);
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    // Calculate which page numbers to show
    let pageNumbers: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      // Show all page numbers if 7 or fewer
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      // Always include first and last page
      pageNumbers.push(1);

      // Logic for showing ellipsis and surrounding current page
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header and Controls */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
          <header>
            <h1 className="text-start">Explore Tours</h1>
            <h5 className="text-start">
              {filteredTours.length} tour
              {filteredTours.length !== 1 ? "s" : ""} available
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
                    {sortDirection === "asc" ? (
                      <ChevronUp className="w-3 h-3" />
                    ) : (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("city");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    Sort by City{" "}
                    {sortField === "city" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("country");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    Sort by Country{" "}
                    {sortField === "country" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("region");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    Sort by Region{" "}
                    {sortField === "region" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("price");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    Sort by Price{" "}
                    {sortField === "price" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("duration");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    Sort by Duration{" "}
                    {sortField === "duration" &&
                      (sortDirection === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Currency selector */}
              <Select
                value={selectedCurrency}
                onValueChange={(value) =>
                  setSelectedCurrency(value as Currency)
                }
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD ($)</SelectItem>
                  <SelectItem value="EUR">EUR (€)</SelectItem>
                  <SelectItem value="GBP">GBP (£)</SelectItem>
                  <SelectItem value="JPY">JPY (¥)</SelectItem>
                  <SelectItem value="AUD">AUD (A$)</SelectItem>
                  <SelectItem value="CAD">CAD (C$)</SelectItem>
                  <SelectItem value="CNY">CNY (¥)</SelectItem>
                  <SelectItem value="CHF">CHF (CHF)</SelectItem>
                  <SelectItem value="SEK">SEK (kr)</SelectItem>
                  <SelectItem value="NOK">NOK (kr)</SelectItem>
                  <SelectItem value="DKK">DKK (kr)</SelectItem>
                  <SelectItem value="NZD">NZD (NZ$)</SelectItem>
                  <SelectItem value="INR">INR (₹)</SelectItem>
                  <SelectItem value="MXN">MXN ($)</SelectItem>
                  <SelectItem value="BRL">BRL (R$)</SelectItem>
                  <SelectItem value="ZAR">ZAR (R)</SelectItem>
                  <SelectItem value="KRW">KRW (₩)</SelectItem>
                  <SelectItem value="SGD">SGD (S$)</SelectItem>
                  <SelectItem value="HKD">HKD (HK$)</SelectItem>
                  <SelectItem value="AED">AED (د.إ)</SelectItem>
                  <SelectItem value="THB">THB (฿)</SelectItem>
                  <SelectItem value="TRY">TRY (₺)</SelectItem>
                  <SelectItem value="IDR">IDR (Rp)</SelectItem>
                  <SelectItem value="PHP">PHP (₱)</SelectItem>
                  <SelectItem value="PLN">PLN (zł)</SelectItem>
                  <SelectItem value="HUF">HUF (Ft)</SelectItem>
                </SelectContent>
              </Select>
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
                <SelectItem value="10">10 per page</SelectItem>
                <SelectItem value="15">15 per page</SelectItem>
                <SelectItem value="20">20 per page</SelectItem>
                <SelectItem value="25">25 per page</SelectItem>
                <SelectItem value="50">50 per page</SelectItem>
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
                <Button
                  variant="ghost"
                  onClick={() => {
                    setCityFilter([]);
                    setCountryFilter([]);
                    setRegionFilter([]);
                    setLanguageFilter([]);
                    setTypeFilter([]);
                    setTagFilter([]);
                    setPriceRange([0, maxPrice]);
                    setDurationRange([0, maxDuration]);
                    setGroupSizeRange([1, maxGroupSize]);
                    setPrivateOnly(false);
                    setPetFriendlyOnly(false);
                  }}
                >
                  Reset All
                </Button>
              </div>

              {/* Cities filter */}
              <div className="space-y-2">
                <h5>Cities</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueCities.map((city) => (
                    <div key={city} className="flex items-center space-x-2">
                      <Checkbox
                        id={`city-${city}`}
                        checked={cityFilter.includes(city)}
                        onCheckedChange={() =>
                          toggleFilter(cityFilter, setCityFilter, city)
                        }
                      />
                      <Label
                        htmlFor={`city-${city}`}
                        className="text-sm cursor-pointer"
                      >
                        {formatKebebToTitleCase(city)}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Countries filter */}
              <div className="space-y-2">
                <h5>Countries</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueCountries.map((country) => (
                    <div key={country} className="flex items-center space-x-2">
                      <Checkbox
                        id={`country-${country}`}
                        checked={countryFilter.includes(country)}
                        onCheckedChange={() =>
                          toggleFilter(countryFilter, setCountryFilter, country)
                        }
                      />
                      <Label
                        htmlFor={`country-${country}`}
                        className="text-sm cursor-pointer"
                      >
                        {country}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regions filter */}
              <div className="space-y-2">
                <h5>Regions</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueRegions.map((region) => (
                    <div key={region} className="flex items-center space-x-2">
                      <Checkbox
                        id={`region-${region}`}
                        checked={regionFilter.includes(region)}
                        onCheckedChange={() =>
                          toggleFilter(regionFilter, setRegionFilter, region)
                        }
                      />
                      <Label
                        htmlFor={`region-${region}`}
                        className="text-sm cursor-pointer"
                      >
                        {region}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages filter */}
              <div className="space-y-2">
                <h5>Languages</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueLanguages.map((language) => (
                    <div key={language} className="flex items-center space-x-2">
                      <Checkbox
                        id={`language-${language}`}
                        checked={languageFilter.includes(language)}
                        onCheckedChange={() =>
                          toggleFilter(
                            languageFilter,
                            setLanguageFilter,
                            language
                          )
                        }
                      />
                      <Label
                        htmlFor={`language-${language}`}
                        className="text-sm cursor-pointer"
                      >
                        {language}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tour Types filter */}
              <div className="space-y-2">
                <h5>Tour Types</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={`type-${type}`}
                        checked={typeFilter.includes(type)}
                        onCheckedChange={() =>
                          toggleFilter(typeFilter, setTypeFilter, type)
                        }
                      />
                      <Label
                        htmlFor={`type-${type}`}
                        className="text-sm cursor-pointer"
                      >
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags filter */}
              <div className="space-y-2">
                <h5>Tags</h5>
                <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                  {uniqueTags.map((tag) => (
                    <div key={tag} className="flex items-center space-x-2">
                      <Checkbox
                        id={`tag-${tag}`}
                        checked={tagFilter.includes(tag)}
                        onCheckedChange={() =>
                          toggleFilter(tagFilter, setTagFilter, tag)
                        }
                      />
                      <Label
                        htmlFor={`tag-${tag}`}
                        className="text-sm cursor-pointer"
                      >
                        {tag}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration Range */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h5>Duration (hours)</h5>
                  <span className="text-gray-600 text-sm">
                    {durationRange[0]} - {durationRange[1]} hrs
                  </span>
                </div>
                <Slider
                  min={0}
                  max={maxDuration || 24}
                  step={0.5}
                  value={durationRange}
                  onValueChange={(value: [number, number]) => {
                    if (Array.isArray(value) && value.length === 2) {
                      setDurationRange(value);
                    }
                  }}
                />
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h5>Price Range</h5>
                  <span className="text-gray-600 text-sm">
                    {formatPrice(priceRange[0], selectedCurrency)} -{" "}
                    {formatPrice(priceRange[1], selectedCurrency)}
                  </span>
                </div>
                <Slider
                  min={0}
                  max={maxPrice}
                  step={5}
                  value={priceRange}
                  onValueChange={(value) => {
                    if (Array.isArray(value) && value.length === 2) {
                      setPriceRange([value[0], value[1]]);
                    }
                  }}
                />
              </div>

              {/* Group Size Range */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h5>Group Size</h5>
                  <span className="text-gray-600 text-sm">
                    {groupSizeRange[0]} - {groupSizeRange[1]} people
                  </span>
                </div>
                <Slider
                  min={1}
                  max={maxGroupSize}
                  step={1}
                  value={groupSizeRange}
                  onValueChange={(value) =>
                    setGroupSizeRange(value as [number, number])
                  }
                />
              </div>

              {/* Private Tours Toggle */}
              <div className="flex items-center space-x-2">
                <Switch
                  id="private-available"
                  checked={privateOnly}
                  onCheckedChange={setPrivateOnly}
                />
                <Label htmlFor="private-available">Private tours only</Label>
              </div>

              {/* Pet Friendly Toggle */}
              <div className="flex items-center space-x-2">
                <Switch
                  id="pet-friendly"
                  checked={petFriendlyOnly}
                  onCheckedChange={setPetFriendlyOnly}
                />
                <Label htmlFor="pet-friendly">Pet friendly only</Label>
              </div>
            </div>
          )}

          {/* Main Content - Tour Cards */}
          <div
            className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"} space-y-6`}
          >
            {/* Results count */}
            <div className="text-gray-500">
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
              {totalItems} tours
            </div>

            {/* Tour Cards */}
            {currentItems.length > 0 ? (
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {currentItems.map((tour, idx) => {
                  // Debug specific tour data
                  console.log(`Rendering tour ${idx}:`, tour.id, tour.title);

                  // Convert price to selected currency
                  const displayPrice = convertPrice(
                    parseFloat(removeSpecialCharactersFromNumbers(tour.price)),
                    tour.currency || "USD", // Add fallback if currency is missing
                    selectedCurrency
                  );

                  return (
                    <div
                      key={tour.id || idx} // Use index as fallback if id is missing
                      className="flex flex-col shadow-md border border-border rounded-lg h-full overflow-hidden"
                    >
                      {/* Content */}
                      <div className="relative flex flex-col flex-grow p-4 h-full">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="w-4/5">{tour.title}</h3>
                          <Badge
                            className="top-5 right-4 absolute"
                            variant={
                              tour.isPetFriendly ? "successFaded" : "errorFaded"
                            }
                          >
                            {tour.isPetFriendly ? "Pet Friendly" : "No Pets"}
                          </Badge>
                        </div>

                        <h5 className="mb-1">
                          {formatKebebToTitleCase(tour.city)}, {tour.country}
                        </h5>

                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondaryFaded" size="sm">
                            {tour.type}
                          </Badge>
                          <span className="text-sm">
                            {tour.durationInHours} hours
                          </span>
                        </div>

                        {/* Tour description */}
                        <p className="flex-grow mb-4 text-gray-600 text-sm line-clamp-3">
                          {tour.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {tour.tags &&
                            tour.tags.slice(0, 3).map((tag: string) => (
                              <Badge
                                key={tag}
                                variant="tertiaryFaded"
                                size="xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          {tour.tags && tour.tags.length > 3 && (
                            <Badge variant={"infoFaded"} size="xs">
                              +{tour.tags.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Footer with price and button */}
                        <div className="flex justify-between items-center mt-auto">
                          <div className="inline-flex items-baseline text-xl">
                            {formatPrice(displayPrice, selectedCurrency)}
                            <h5 className="ml-1">/ person</h5>
                          </div>
                          <Button
                            size="sm"
                            className="whitespace-nowrap"
                            onClick={() =>
                              router.push(
                                `/experiences-through-destinations/${tour.city}/tours/${tour.title}?tourId=${tour.id}&city=${tour.city}/&guideId=${tour.guideId}&currency=${selectedCurrency}`
                              )
                            }
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center shadow py-12 rounded-lg text-center">
                <div className="mb-4">
                  <X className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-semibold text-lg">No tours found</h3>
                <p className="mt-2 max-w-md text-gray-500">
                  We couldn't find any tours matching your filters. Try
                  adjusting your search criteria or reset filters.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setCityFilter([]);
                    setCountryFilter([]);
                    setRegionFilter([]);
                    setLanguageFilter([]);
                    setTypeFilter([]);
                    setTagFilter([]);
                    setPriceRange([0, maxPrice]);
                    setDurationRange([0, maxDuration]);
                    setGroupSizeRange([1, maxGroupSize]);
                    setPrivateOnly(false);
                    setPetFriendlyOnly(false);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {renderPagination()}
          </div>
        </div>
      </div>
    </div>
  );
}
