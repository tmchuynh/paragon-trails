"use client";

import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatToSlug } from "@/lib/utils/format";
import { findGuideBySpecialty, getTourData } from "@/lib/utils/get";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function TourPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "";
  const country = searchParams.get("country") || "";
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [tourGuides, setTourGuides] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    duration: "all",
    minPrice: 0,
    maxPrice: 1500,
    rating: 0,
    tags: [] as string[],
    guide: "all",
    tourCategoryId: "all",
  });

  useEffect(() => {
    async function loadTours() {
      if (city) {
        const cityName = Array.isArray(city) ? city[0] : city;
        setLoading(true);
        try {
          const tourData = await getTourData(decodeURIComponent(cityName));
          setTours(tourData);

          // Load tour guides for each tour
          const guidePromises = tourData.map(async (tour: Tour) => {
            try {
              const guide = await findGuideBySpecialty(
                decodeURIComponent(cityName).toLowerCase(),
                tour.tourCategoryId
              );
              return { tourTitle: tour.title, guideName: guide.name };
            } catch (error) {
              console.error(`Failed to load guide for ${tour.title}:`, error);
              return { tourTitle: tour.title, guideName: "Local Expert" };
            }
          });

          const guides = await Promise.all(guidePromises);
          const guidesMap = guides.reduce((acc, { tourTitle, guideName }) => {
            acc[tourTitle] = guideName;
            return acc;
          }, {} as { [key: string]: string });

          setTourGuides(guidesMap);
        } catch (error) {
          console.error("Failed to load tour data:", error);
        } finally {
          setLoading(false);
        }
      }
    }

    loadTours();
  }, [city]);

  const cityInfo = cityattractions.find(
    (attraction) =>
      attraction.city.toLowerCase() ===
      (Array.isArray(city) ? city[0] : city).toLowerCase()
  );

  // Extract unique filter options
  const filterOptions = useMemo(() => {
    if (!tours.length)
      return {
        durations: [],
        guides: [],
        categories: [],
        tags: [],
        prices: { min: 0, max: 0 },
      };

    const durations = [...new Set(tours.map((tour) => tour.duration))];
    const guides = [...new Set(Object.values(tourGuides))]; // Use the loaded guide names
    const categories = [...new Set(tours.map((tour) => tour.tourCategoryId))];
    const allTags = new Set<string>();
    tours.forEach((tour) => tour.tags?.forEach((tag) => allTags.add(tag)));

    const prices = tours.map((tour) => {
      const priceValue = parseFloat(tour.price.replace(/[^0-9.]/g, ""));
      return isNaN(priceValue) ? 0 : priceValue;
    });

    return {
      durations,
      guides,
      categories,
      tags: Array.from(allTags),
      prices: {
        min: Math.min(...prices),
        max: Math.max(...prices),
      },
    };
  }, [tours, tourGuides]);

  // Apply filters to tours
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      // Duration filter
      if (filters.duration !== "all" && tour.duration !== filters.duration)
        return false;

      // Price filter
      const tourPrice = parseFloat(tour.price.replace(/[^0-9.]/g, ""));
      if (tourPrice < filters.minPrice || tourPrice > filters.maxPrice)
        return false;

      // Rating filter
      if (filters.rating > 0 && tour.rating < filters.rating) return false;

      // Tags filter
      if (
        filters.tags.length > 0 &&
        !filters.tags.some((tag) => tour.tags?.includes(tag))
      )
        return false;

      // Guide filter - use our loaded guide names
      if (filters.guide !== "all" && tourGuides[tour.title] !== filters.guide)
        return false;

      // Category filter
      if (
        filters.tourCategoryId !== "all" &&
        tour.tourCategoryId !== filters.tourCategoryId
      )
        return false;

      return true;
    });
  }, [tours, filters, tourGuides]);

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleTagToggle = (tag: string) => {
    setFilters((prev) => {
      const updatedTags = prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags: updatedTags };
    });
  };

  const resetFilters = () => {
    setFilters({
      duration: "all",
      minPrice: filterOptions.prices.min,
      maxPrice: filterOptions.prices.max,
      rating: 0,
      tags: [],
      guide: "all",
      tourCategoryId: "all",
    });
  };

  // Format price for display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center p-8 min-h-screen">
        <h1 className="mb-4 font-bold text-3xl">No Tours Available</h1>
        <p className="max-w-2xl text-center text-lg">
          We're currently developing tour options for {city}. Please check back
          soon or contact us for custom tour arrangements.
        </p>
        <ContactDepartmentCard department="Custom Tour Arrangements" />
      </div>
    );
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>
          Tours in{" "}
          {city ? decodeURIComponent(Array.isArray(city) ? city[0] : city) : ""}
          : {cityInfo?.subtitle}
        </h1>
        <blockquote>{cityInfo?.quote}</blockquote>
      </header>

      <section>
        <ContactDepartmentCard department="Concierge Services" />
      </section>

      {/* Filter Panel */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2>Available Tours</h2>
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
              {/* Duration filter */}
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
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
                      {formatPrice(filters.minPrice)} -{" "}
                      {formatPrice(filters.maxPrice)}
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

                {/* Guide filter */}
                <div className="space-y-2">
                  <Label htmlFor="guide-filter">
                    <strong>Tour Guide</strong>
                  </Label>
                  <Select
                    value={filters.guide}
                    onValueChange={(value) =>
                      handleFilterChange("guide", value)
                    }
                  >
                    <SelectTrigger id="guide-filter">
                      <SelectValue placeholder="Any guide" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any guide</SelectItem>
                      {filterOptions.guides.map((guide) => (
                        <SelectItem key={guide} value={guide}>
                          {guide}
                        </SelectItem>
                      ))}
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
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tags filter */}
                <div className="space-y-2 col-span-1 md:col-span-2 lg:col-span-3">
                  <Label>
                    <strong>Tags</strong>
                  </Label>
                  <div className="gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
                    {filterOptions.tags.map((tag) => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox
                          id={`tag-${tag}`}
                          checked={filters.tags.includes(tag)}
                          onCheckedChange={() => handleTagToggle(tag)}
                        />
                        <Label
                          htmlFor={`tag-${tag}`}
                          className="cursor-pointer"
                        >
                          {tag}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end mt-6">
                <div className="flex items-center text-muted-foreground text-sm">
                  Showing {filteredTours.length} of {tours.length} tours
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

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredTours.map((tour, index) => (
          <div
            key={index}
            className="bg-card shadow-lg hover:shadow-xl border border-border rounded-lg h-full transition-shadow overflow-hidden"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="relative h-64">
                  <Image
                    src={tour.images[0]}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  <Badge
                    variant={"outline"}
                    className="top-4 right-4 absolute uppercase"
                  >
                    {tour.tourCategoryId}
                  </Badge>
                </div>
                <div className="px-6">
                  <div className="flex flex-col justify-between items-start mb-2">
                    <h2>{tour.title}</h2>
                    {displayRatingStars(tour.rating)}
                  </div>
                  <p className="mb-4">{tour.description}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between mb-7 px-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.tags?.map((tag, i) => (
                    <Badge size={"lg"} variant={"secondary"} key={i}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center my-4">
                  <div className="space-y-2">
                    <h5 className="text-tertiary">
                      <strong className="text-foreground">Duration:</strong>{" "}
                      {tour.duration}
                    </h5>
                    <h5 className="text-tertiary">
                      <strong className="text-foreground">Guide:</strong>{" "}
                      {tourGuides[tour.title] || "Loading guide..."}
                    </h5>
                  </div>
                  <h2>{tour.price}</h2>
                </div>
                <Button
                  onClick={() => {
                    const queryParams = new URLSearchParams({
                      city: city,
                      country: country,
                      tour: tour.title,
                      tourCategoryId: tour.tourCategoryId,
                    });

                    router.push(
                      `/luxurious-destinations/${country}/${city}/tours/${formatToSlug(
                        tour.title
                      )}?${queryParams.toString()}`
                    );
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
