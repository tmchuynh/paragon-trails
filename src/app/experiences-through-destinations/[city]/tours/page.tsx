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
import { Currency, SortDirection, SortField } from "@/lib/interfaces/general";
import { Tour, TourTheme, TourType } from "@/lib/interfaces/services/tours";
import {
  convertPrice,
  formatKebebToTitleCase,
  formatPrice,
  removeSpecialCharactersFromNumbers,
} from "@/lib/utils/format";
import { getCityTours, getTourById } from "@/lib/utils/get/tours";
import { getCityAttractionById } from "@/lib/utils/get/attractions";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo, useCallback, useRef } from "react";

export default function ToursByCityPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const citySlug = params.city as string;
  const cityName = formatKebebToTitleCase(citySlug);

  // Get attraction filter from URL if present
  const urlAttractionFilter = searchParams.get("attractionFilter");

  // State management
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [tours, setTours] = useState<Tour[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>("price");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");

  // Filter states - reduced since we're already filtering by city
  const [languageFilter, setLanguageFilter] = useState<string[]>([]);
  const [durationRange, setDurationRange] = useState<[number, number]>([0, 24]);
  const [typeFilter, setTypeFilter] = useState<TourType[]>([]);
  const [tagFilter, setTagFilter] = useState<TourTheme[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [groupSizeRange, setGroupSizeRange] = useState<[number, number]>([
    1, 50,
  ]);
  const [guideFilter, setGuideFilter] = useState<string[]>([]);
  const [privateOnly, setPrivateOnly] = useState(false);
  const [petFriendlyOnly, setPetFriendlyOnly] = useState(false);
  // New state for attraction filtering
  const [attractionFilter, setAttractionFilter] = useState<string[]>([]);
  // State to store attraction details for display names
  const [attractionDetails, setAttractionDetails] = useState<
    Record<string, { title: string; description: string }>
  >({});

  // Add a ref to track if we've already applied the URL filter
  const appliedUrlFilter = useRef(false);

  // Memoize derived states to prevent unnecessary recalculations
  const uniqueLanguages = useMemo(
    () => [...new Set(tours.flatMap((tour) => tour.languagesOffered))].sort(),
    [tours]
  );

  const uniqueTypes = useMemo(
    () => [...new Set(tours.map((tour) => tour.type))].sort() as TourType[],
    [tours]
  );

  const uniqueTags = useMemo(
    () =>
      [...new Set(tours.flatMap((tour) => tour.tags))].sort() as TourTheme[],
    [tours]
  );

  const uniqueGuides = useMemo(
    () => [...new Set(tours.map((tour) => tour.guideId))].sort(),
    [tours]
  );

  // Extract unique attractions from tour schedules - memoized
  const uniqueAttractionIds = useMemo(
    () =>
      [
        ...new Set(
          tours.flatMap(
            (tour) => tour.schedule?.map((item) => item.attractionId) || []
          )
        ),
      ].sort(),
    [tours]
  );

  // Max values for ranges - memoized
  const maxPrice = useMemo(
    () => Math.max(...tours.map((tour) => tour.pricePerPerson || 0), 1000),
    [tours]
  );

  const maxGroupSize = useMemo(
    () => Math.max(...tours.map((tour) => tour.maxGroupSize || 0), 50),
    [tours]
  );

  // Pagination values - memoized
  const { totalItems, totalPages, startIndex, endIndex, currentItems } =
    useMemo(() => {
      const totalItems = filteredTours.length;
      const totalPages = Math.ceil(totalItems / pageSize);
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const currentItems = filteredTours.slice(startIndex, endIndex);

      return { totalItems, totalPages, startIndex, endIndex, currentItems };
    }, [filteredTours, pageSize, currentPage]);

  // Helper function to toggle filter items - memoized to prevent recreation on renders
  const toggleFilter = useCallback(
    (
      filterArray: any[],
      setFilterArray: React.Dispatch<React.SetStateAction<any[]>>,
      item: any
    ) => {
      if (filterArray.includes(item)) {
        setFilterArray(filterArray.filter((i) => i !== item));
      } else {
        setFilterArray([...filterArray, item]);
      }
    },
    []
  );

  // Reset all filters - memoized
  const resetAllFilters = useCallback(() => {
    setLanguageFilter([]);
    setTypeFilter([]);
    setTagFilter([]);
    setGuideFilter([]);
    setAttractionFilter([]);
    setPriceRange([0, maxPrice]);
    setGroupSizeRange([1, maxGroupSize]);
    setPrivateOnly(false);
    setPetFriendlyOnly(false);
  }, [maxPrice, maxGroupSize]);

  // Fetch tours and apply URL params in a single effect to avoid race conditions
  useEffect(() => {
    let isMounted = true;

    async function fetchToursAndApplyParams() {
      if (!citySlug) return;

      try {
        setLoading(true);

        // Fetch tours data
        const cityToursResponse = await getCityTours(citySlug);
        let cityTours =
          Array.isArray(cityToursResponse) && cityToursResponse.length > 0
            ? cityToursResponse
            : [];

        if (cityTours.length === 0) {
          console.log(
            `Fetching tours for ${cityName} using individual fetches`
          );
          const tourIds = Array.from(
            { length: 5 },
            (_, i) => `tour-${citySlug.toLowerCase()}-${i + 1}`
          );
          const tourPromises = tourIds.map((id) => getTourById(citySlug, id));
          const tourResults = await Promise.all(tourPromises);
          cityTours = tourResults.filter(Boolean);
        }

        if (!isMounted) return;

        if (cityTours.length > 0) {
          console.log(`Found ${cityTours.length} tours for ${cityName}`);

          // Set state with the fetched data
          setTours(cityTours);
          setFilteredTours(cityTours);

          // Set ranges based on actual data
          const maxDataPrice = Math.max(
            ...cityTours.map((tour) => tour.pricePerPerson || 0)
          );
          const minDataGroupSize = Math.min(
            ...cityTours.map((tour) => tour.minGroupSize || 1)
          );
          const maxDataGroupSize = Math.max(
            ...cityTours.map((tour) => tour.maxGroupSize || 0)
          );

          if (isMounted) {
            setPriceRange([0, maxDataPrice > 0 ? maxDataPrice : 1000]);
            setGroupSizeRange([
              minDataGroupSize > 0 ? minDataGroupSize : 1,
              maxDataGroupSize > 1 ? maxDataGroupSize : 50,
            ]);
          }

          // Now that we have tours data, apply URL params if needed
          // This ensures we only try to filter once we have data to filter
          if (urlAttractionFilter && !appliedUrlFilter.current) {
            const attractionExists = cityTours.some((tour) =>
              tour.schedule?.some(
                (item: { attractionId: string }) =>
                  item.attractionId === urlAttractionFilter
              )
            );

            if (attractionExists && isMounted) {
              console.log(
                `Applied attraction filter from URL: ${urlAttractionFilter}`
              );
              setAttractionFilter([urlAttractionFilter]);
              appliedUrlFilter.current = true;
            }
          }
        } else {
          console.warn(`No tours found for city: ${cityName}`);
        }
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchToursAndApplyParams();

    // Cleanup to prevent state updates on unmounted component
    return () => {
      isMounted = false;
    };
  }, [citySlug, cityName, urlAttractionFilter]);

  // Load attraction details in a separate effect
  useEffect(() => {
    if (!uniqueAttractionIds.length || loading) return;

    let isMounted = true;
    const fetchAttractionDetails = async () => {
      const details: Record<string, { title: string; description: string }> =
        {};

      // Fetch in smaller batches to avoid overwhelming browser
      const batchSize = 5;
      for (let i = 0; i < uniqueAttractionIds.length; i += batchSize) {
        const batch = uniqueAttractionIds.slice(i, i + batchSize);

        await Promise.all(
          batch.map(async (attractionId) => {
            try {
              const attraction = await getCityAttractionById(
                citySlug,
                attractionId
              );
              if (attraction) {
                details[attractionId] = {
                  title: attraction.title || attractionId,
                  description: attraction.description || "",
                };
              }
            } catch (error) {
              console.error(
                `Error fetching attraction ${attractionId}:`,
                error
              );
            }
          })
        );

        // Check if component is still mounted before updating state
        if (!isMounted) return;
      }

      if (isMounted) {
        setAttractionDetails(details);

        // Only scroll to filter section once attraction details are loaded
        if (
          urlAttractionFilter &&
          attractionFilter.includes(urlAttractionFilter)
        ) {
          setTimeout(() => {
            const filterSection = document.getElementById("attraction-filters");
            if (filterSection) {
              filterSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 500);
        }
      }
    };

    fetchAttractionDetails();

    return () => {
      isMounted = false;
    };
  }, [
    uniqueAttractionIds,
    citySlug,
    loading,
    urlAttractionFilter,
    attractionFilter,
  ]);

  // Apply filters and sorting - with debouncing to improve performance
  useEffect(() => {
    if (tours.length === 0) return;

    // Debounce filter application to prevent too many updates
    const timer = setTimeout(() => {
      let result = [...tours];

      // Apply language filter
      if (languageFilter.length > 0) {
        result = result.filter(
          (tour) =>
            tour.languagesOffered &&
            languageFilter.some((lang) => tour.languagesOffered.includes(lang))
        );
      }

      // Apply type filter
      if (typeFilter.length > 0) {
        result = result.filter((tour) => typeFilter.includes(tour.type));
      }

      // Apply tag filter
      if (tagFilter.length > 0) {
        result = result.filter(
          (tour) =>
            tour.tags && tagFilter.some((tag) => tour.tags.includes(tag))
        );
      }

      // Filter by guide
      if (guideFilter.length > 0) {
        result = result.filter((tour) => guideFilter.includes(tour.guideId));
      }

      // Apply attraction filter
      if (attractionFilter.length > 0) {
        result = result.filter(
          (tour) =>
            tour.schedule &&
            attractionFilter.some((attractionId) =>
              tour.schedule.some((item) => item.attractionId === attractionId)
            )
        );
      }

      // Filter by price range
      result = result.filter((tour) => {
        const price =
          tour.pricePerPerson ||
          parseFloat(removeSpecialCharactersFromNumbers(tour.price)) ||
          0;
        return price >= priceRange[0] && price <= priceRange[1];
      });

      // Filter by group size range
      result = result.filter((tour) => {
        const minSize = tour.minGroupSize || 1;
        const maxSize = tour.maxGroupSize || 50;
        return minSize >= groupSizeRange[0] && maxSize <= groupSizeRange[1];
      });

      // Apply additional filters
      if (privateOnly) {
        result = result.filter((tour) => tour.privateAvailable === true);
      }

      if (petFriendlyOnly) {
        result = result.filter((tour) => tour.isPetFriendly === true);
      }

      // Apply sorting
      result.sort((a, b) => {
        let valueA, valueB;

        switch (sortField) {
          case "price":
            valueA =
              a.pricePerPerson ||
              parseFloat(removeSpecialCharactersFromNumbers(a.price)) ||
              0;
            valueB =
              b.pricePerPerson ||
              parseFloat(removeSpecialCharactersFromNumbers(b.price)) ||
              0;
            break;
          default:
            valueA = a.hasOwnProperty(sortField)
              ? a[sortField as keyof Tour]
              : undefined;
            valueB = b.hasOwnProperty(sortField)
              ? b[sortField as keyof Tour]
              : undefined;
        }

        if (valueA !== undefined && valueB !== undefined && valueA < valueB) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (valueA !== undefined && valueB !== undefined && valueA > valueB) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      });

      setFilteredTours(result);
      setCurrentPage(1);
    }, 300); // Debounce delay

    return () => clearTimeout(timer);
  }, [
    tours,
    languageFilter,
    typeFilter,
    tagFilter,
    guideFilter,
    attractionFilter,
    priceRange,
    durationRange,
    groupSizeRange,
    privateOnly,
    petFriendlyOnly,
    sortField,
    sortDirection,
  ]);

  // Memoized pagination renderer
  const renderPagination = useCallback(() => {
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
  }, [totalPages, currentPage]);

  // Apply URL params for initial filter state - MODIFIED to prevent infinite updates
  useEffect(() => {
    // Only run this effect once when data is ready and only if filter isn't already set
    if (
      uniqueAttractionIds.length > 0 &&
      urlAttractionFilter &&
      attractionFilter.length === 0 &&
      uniqueAttractionIds.includes(urlAttractionFilter)
    ) {
      console.log(`Applied attraction filter from URL: ${urlAttractionFilter}`);
      setAttractionFilter([urlAttractionFilter]);
    }
  }, [urlAttractionFilter, uniqueAttractionIds, attractionFilter.length]);

  // Scroll to filter section - MODIFIED with timeout and safety check
  useEffect(() => {
    if (!loading && urlAttractionFilter && attractionFilter.length > 0) {
      // Use timeout to ensure the DOM has been updated
      setTimeout(() => {
        const filterSection = document.getElementById("attraction-filters");
        if (filterSection) {
          filterSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, [loading, attractionFilter.length, urlAttractionFilter]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <div className="flex flex-col gap-6">
        {/* Header and Controls */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
          <header>
            <h1 className="text-start">Tours in {cityName}</h1>
            <h5 className="text-start">
              {filteredTours.length} tour{filteredTours.length !== 1 ? "s" : ""}{" "}
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
                  <DropdownMenuItem
                    onClick={() => {
                      setSortField("rating");
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    Sort by Rating{" "}
                    {sortField === ("rating" as SortField) &&
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
                <SelectContent className="max-h-[35em] overflow-y-auto">
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
              <SelectContent className="max-h-[35em] overflow-y-auto">
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
                    setLanguageFilter([]);
                    setTypeFilter([]);
                    setTagFilter([]);
                    setGuideFilter([]);
                    setAttractionFilter([]); // Add this line to reset attraction filter
                    setPriceRange([0, maxPrice]);
                    setGroupSizeRange([1, maxGroupSize]);
                    setPrivateOnly(false);
                    setPetFriendlyOnly(false);
                  }}
                >
                  Reset All
                </Button>
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

              {/* Attractions filter - new section */}
              {uniqueAttractionIds.length > 0 && (
                <div className="space-y-2" id="attraction-filters">
                  <h5>Attractions</h5>
                  <div className="space-y-1 p-2 border rounded-lg max-h-40 overflow-y-auto">
                    {uniqueAttractionIds.map((attractionId) => (
                      <div
                        key={attractionId}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`attraction-${attractionId}`}
                          checked={attractionFilter.includes(attractionId)}
                          onCheckedChange={() =>
                            toggleFilter(
                              attractionFilter,
                              setAttractionFilter,
                              attractionId
                            )
                          }
                        />
                        <Label
                          htmlFor={`attraction-${attractionId}`}
                          className="text-sm cursor-pointer"
                          title={
                            attractionDetails[attractionId]?.description || ""
                          }
                        >
                          {attractionDetails[attractionId]?.title ||
                            attractionId}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                <Checkbox
                  id="private-available"
                  checked={privateOnly}
                  onCheckedChange={(checked) =>
                    setPrivateOnly(checked === true)
                  }
                />
                <Label htmlFor="private-available">Private tours only</Label>
              </div>

              {/* Pet Friendly Toggle */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pet-friendly"
                  checked={petFriendlyOnly}
                  onCheckedChange={(checked) =>
                    setPetFriendlyOnly(checked === true)
                  }
                />
                <Label htmlFor="pet-friendly">Pet friendly only</Label>
              </div>

              {/* Reset Button - make sure it calls the updated resetAllFilters function */}
              <Button
                variant="outline"
                className="w-full"
                onClick={resetAllFilters}
              >
                Reset All Filters
              </Button>
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
                {currentItems.map((tour) => {
                  // Convert price to selected currency
                  const displayPrice = convertPrice(
                    tour.pricePerPerson ||
                      parseFloat(
                        removeSpecialCharactersFromNumbers(tour.price)
                      ),
                    tour.currency || "USD",
                    selectedCurrency
                  );

                  return (
                    <div
                      key={tour.id}
                      className="flex flex-col shadow-md border border-border rounded-lg h-full overflow-hidden"
                    >
                      {/* Content */}
                      <div className="relative flex flex-col flex-grow p-4 h-full">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="w-4/5">{tour.title}</h3>
                          {tour.isPopular && (
                            <Badge
                              className="top-5 right-4 absolute"
                              variant="defaultFaded"
                            >
                              Popular
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondaryFaded" size="sm">
                            {tour.type}
                          </Badge>
                        </div>

                        {/* Tour description */}
                        <p className="flex-grow mb-4 text-gray-600 text-sm line-clamp-3">
                          {tour.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {tour.tags &&
                            tour.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="tertiaryFaded"
                                size="xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          {tour.tags && tour.tags.length > 3 && (
                            <Badge variant="infoFaded" size="xs">
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
                                `/experiences-through-destinations/${citySlug}/tours/${encodeURIComponent(tour.title)}?tourId=${tour.id}&city=${citySlug}&guideId=${tour.guideId}&currency=${selectedCurrency}`
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
                    setLanguageFilter([]);
                    setTypeFilter([]);
                    setTagFilter([]);
                    setGuideFilter([]);
                    setPriceRange([0, maxPrice]);
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
          ;
        </div>
      </div>
    </div>
  );
}
