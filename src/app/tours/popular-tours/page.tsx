"use client";

import TourCard from "@/components/cards/TourCard";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cityattractions } from "@/lib/constants/info/city";
import { Tour } from "@/lib/interfaces/services/tours";
import { capitalize, formatNumberToCurrency } from "@/lib/utils/format";
import { getAllTours } from "@/lib/utils/get";
import {
  featuredArray,
  groupAndSortByProperties,
  sortDurations,
} from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function PopularTours() {
  const [allTours, setAllTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [filters, setFilters] = useState({
    duration: "all",
    minPrice: 0,
    maxPrice: 0,
    rating: 0,
    tourCategoryId: "all",
  });

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getAllTours();
        setAllTours(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  // Extract unique filter options
  const filterOptions = useMemo(() => {
    if (!allTours.length)
      return {
        durations: [],
        categories: [],
        prices: { min: 0, max: 0 },
      };

      let durations = [
        ...new Set(
          allTours
            .filter((tour) => tour.duration) // Ensure only valid durations
            .map((tour) => tour.duration)
        ),
      ];
    console.log("Durations before sorting:", durations);
    // Sort durations by time (assuming durations are in a format like "1 hour", "2 days", etc.)
    durations = sortDurations(durations);
    const categories = [
      ...new Set(
        groupAndSortByProperties(allTours, "tourCategoryId").map(
          (tour) => tour.tourCategoryId
        )
      ),
    ];
    console.log("Categories:", categories);
    // Ensure categories are sorted alphabetically
    categories.sort((a, b) => a.localeCompare(b));
    console.log("Sorted Categories:", categories);
    const allTags = new Set<string>();
    allTours.forEach((tour) => tour.tags?.forEach((tag) => allTags.add(tag)));

    const prices = allTours.map((tour) => {
      const priceValue = parseFloat(tour.price.replace(/[^0-9.]/g, ""));
      return isNaN(priceValue) ? 0 : priceValue;
    });

    return {
      durations,
      categories,
      prices: {
        min: Math.min(...prices),
        max: Math.max(...prices),
      },
    };
  }, [allTours]);

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const resetFilters = () => {
    setFilters({
      duration: "all",
      minPrice: filterOptions.prices.min,
      maxPrice: filterOptions.prices.max,
      rating: 0,
      tourCategoryId: "all",
    });
  };

  useEffect(() => {
    if (!initialized && filterOptions.prices.max > 0) {
      setFilters({
        duration: "all",
        minPrice: filterOptions.prices.min,
        maxPrice: filterOptions.prices.max,
        rating: 0,
        tourCategoryId: "all",
      });
      setInitialized(true);
    }
  }, [filterOptions, initialized]);

  // Apply filters to tours
  const filteredTours = useMemo(() => {
    if (!filters) return [];
  
    return allTours.filter((tour) => {
      // Duration filter
      if (
        filters.duration !== "all" &&
        (!tour.duration || tour.duration !== filters.duration)
      )
        return false;
  
      // Price filter
      const tourPrice = parseFloat(tour.price.replace(/[^0-9.]/g, ""));
      if (tourPrice < filters.minPrice || tourPrice > filters.maxPrice)
        return false;
  
      // Rating filter
      if (filters.rating > 0 && tour.rating < filters.rating) return false;
  
      // Category filter
      if (
        filters.tourCategoryId !== "all" &&
        tour.tourCategoryId !== filters.tourCategoryId
      )
        return false;
  
      return true;
    });
  }, [allTours, filters]);
  

  if (loading || !filters) {
    return <Loading />;
  }

  const popularTours = featuredArray(allTours);

  console.log("Popular Tours Data:", allTours);
  console.log("Filtered Tours Data:", filteredTours);
  console.log("Popular Tours", popularTours);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Popular Tours</h1>
        <p>
          Explore our most popular tours that have captivated travelers from
          around the world. Each tour offers a unique experience, showcasing the
          beauty and culture of our destinations.
        </p>
      </header>

      {/* Filter Panel */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2>Filter Tours</h2>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="icon"
            size={"sm"}
            className="flex items-center gap-2"
          >
            <FaFilter />
          </Button>
        </div>

        {showFilters && (
          <Card className="mb-6">
            <CardContent>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
                {/* Duration filter */}
                <div className="space-y-2">
                  <Label htmlFor="duration-filter">
                    <strong>Duration</strong>
                  </Label>
                  <Select
                    value={filters.duration}
                    onValueChange={(value) =>
                      handleFilterChange("duration", value)
                    }
                  >
                    <SelectTrigger id="duration-filter">
                      <SelectValue placeholder="Any duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any duration</SelectItem>
                      {filterOptions.durations.map((duration) => (
                        <SelectItem key={duration} value={duration}>
                          {duration}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price filter - replaced with slider */}
                <div className="space-y-4 col-span-1 md:col-span-2">
                  <div className="flex justify-between">
                    <Label>
                      <strong>Price Range</strong>
                    </Label>
                    <span className="text-sm">
                      {formatNumberToCurrency(filters.minPrice)} -{" "}
                      {formatNumberToCurrency(filters.maxPrice)}
                    </span>
                  </div>
                  <Slider
                    min={filterOptions.prices.min}
                    max={filterOptions.prices.max}
                    step={50}
                    value={[filters.minPrice, filters.maxPrice]}
                    onValueChange={(values) => {
                      if (Array.isArray(values) && values.length === 2) {
                        handleFilterChange("minPrice", values[0]);
                        handleFilterChange("maxPrice", values[1]);
                      }
                    }}
                    className="py-4"
                  />
                </div>

                {/* Rating filter */}
                <div className="space-y-2">
                  <Label htmlFor="rating-filter">
                    <strong>Minimum Rating</strong>
                  </Label>
                  <Select
                    value={filters.rating.toString()}
                    onValueChange={(value) =>
                      handleFilterChange("rating", Number(value))
                    }
                  >
                    <SelectTrigger id="rating-filter">
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any rating</SelectItem>
                      <SelectItem value="1">★ and above</SelectItem>
                      <SelectItem value="2">★★ and above</SelectItem>
                      <SelectItem value="3">★★★ and above</SelectItem>
                      <SelectItem value="4">★★★★ and above</SelectItem>
                      <SelectItem value="5">★★★★★ only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category filter */}
                <div className="space-y-2">
                  <Label htmlFor="category-filter">
                    <strong>Tour Category</strong>
                  </Label>
                  <Select
                    value={filters.tourCategoryId}
                    onValueChange={(value) =>
                      handleFilterChange("tourCategoryId", value)
                    }
                  >
                    <SelectTrigger id="category-filter">
                      <SelectValue placeholder="Any category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any category</SelectItem>
                      {filterOptions.categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {capitalize(category)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between items-end mt-6">
                <div className="flex items-center text-muted-foreground text-sm">
                  Showing {filteredTours.length} of {allTours.length} tours
                </div>
                <Button
                  variant="destructive"
                  onClick={resetFilters}
                  className="mr-2"
                >
                  Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <section className="mt-6">
        <h2>Featured Tours</h2>
        {allTours && (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {filteredTours.map((tour, index) => {
              if (!tour) {
                console.warn(`Tour data is missing for index: ${index}`);
                return null; // Skip rendering this tour if data is missing
              }
              if (!tour.city || !tour.country || !tour.region) {
                console.warn(
                  `Tour is missing city, country, or region: ${tour.title}`
                );
                return null; // Skip rendering this tour if city, country, or region is missing
              }
              const cityInfo = cityattractions.find((attraction) => {
                if (
                  attraction.city.toLowerCase() === tour.city?.toLowerCase()
                ) {
                  return attraction;
                }
                if (
                  attraction.country.toLowerCase() ===
                  tour.country?.toLowerCase()
                ) {
                  return attraction;
                }
                if (
                  attraction.region.toLowerCase() === tour.region?.toLowerCase()
                ) {
                  return attraction;
                }
                return null;
              });
              if (!cityInfo) {
                console.warn(
                  `City information not found for tour: ${tour.title}`
                );
                return null; // Skip rendering this tour if city info is not found
              }
              return (
                <TourCard
                  tour={tour}
                  key={index}
                  city={cityInfo.city || "Not specified"}
                  country={cityInfo.country || "Not specified"}
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
