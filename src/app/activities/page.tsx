"use client";

import { DateTimePicker } from "@/components/calendar/date-time-picker";
import Loading from "@/components/Loading";
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
import { getMockActivities } from "@/data/activities";
import { Activity } from "@/lib/interfaces/services/activities";
import { formatToSlug } from "@/lib/utils/format";
import {
  Calendar,
  Clock,
  Filter,
  MapPin,
  RotateCcw,
  Search,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActivitiesPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [activityDate, setActivityDate] = useState<Date | undefined>(undefined);

  // Initialize with sensible defaults, will be updated when data loads
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState<string>("name");
  const [showFilters, setShowFilters] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Load activities data
  useEffect(() => {
    const loadActivities = async () => {
      try {
        setLoading(true);
        setError(null);
        const activitiesData = await getMockActivities();
        setActivities(activitiesData);
        setFilteredActivities(activitiesData);

        // Calculate actual min and max prices from loaded data
        if (activitiesData.length > 0) {
          const prices = activitiesData.map(
            (activity: Activity) => activity.pricing.adult
          );
          const calculatedMinPrice = Math.min(...prices);
          const calculatedMaxPrice = Math.max(...prices);
          setMinPrice(calculatedMinPrice);
          setMaxPrice(calculatedMaxPrice);
          setPriceRange([calculatedMinPrice, calculatedMaxPrice]);
        }
      } catch (err) {
        console.error("Error loading activities:", err);
        setError("Failed to load activities. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  // Get unique values for filters
  const cities = [
    { value: "all", label: "All Cities" },
    ...Array.from(
      new Set(activities.map((activity: Activity) => activity.location.city))
    )
      .sort()
      .map((city) => ({ value: city, label: city })),
  ];

  const countries = [
    { value: "all", label: "All Countries" },
    ...Array.from(
      new Set(activities.map((activity: Activity) => activity.location.country))
    )
      .sort()
      .map((country) => ({ value: country, label: country })),
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    ...Array.from(
      new Set(activities.map((activity: Activity) => activity.category))
    )
      .sort()
      .map((category) => ({ value: category, label: category })),
  ];

  const difficulties = [
    { value: "all", label: "All Difficulties" },
    ...Array.from(
      new Set(activities.map((activity: Activity) => activity.difficulty))
    )
      .sort()
      .map((difficulty) => ({ value: difficulty, label: difficulty })),
  ];

  const durations = [
    { value: "all", label: "All Durations" },
    ...Array.from(
      new Set(activities.map((activity: Activity) => activity.duration))
    )
      .sort()
      .map((duration) => ({ value: duration, label: duration })),
  ];

  const handleSearch = () => {
    let filtered = activities;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (activity: Activity) =>
          activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          activity.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          activity.location.city
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          activity.location.country
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          activity.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by city
    if (selectedCity !== "all") {
      filtered = filtered.filter(
        (activity: Activity) => activity.location.city === selectedCity
      );
    }

    // Filter by country
    if (selectedCountry !== "all") {
      filtered = filtered.filter(
        (activity: Activity) => activity.location.country === selectedCountry
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (activity: Activity) => activity.category === selectedCategory
      );
    }

    // Filter by difficulty
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (activity: Activity) => activity.difficulty === selectedDifficulty
      );
    }

    // Filter by duration
    if (selectedDuration !== "all") {
      filtered = filtered.filter(
        (activity: Activity) => activity.duration === selectedDuration
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (activity: Activity) =>
        activity.pricing.adult >= priceRange[0] &&
        activity.pricing.adult <= priceRange[1]
    );

    // Sort results
    filtered = filtered.sort((a: Activity, b: Activity) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.pricing.adult - b.pricing.adult;
        case "price-high":
          return b.pricing.adult - a.pricing.adult;
        case "rating":
          return b.rating - a.rating;
        case "duration":
          return a.duration.localeCompare(b.duration);
        case "difficulty":
          const difficultyOrder: Record<string, number> = {
            Easy: 1,
            Moderate: 2,
            Challenging: 3,
            Expert: 4,
          };
          return (
            (difficultyOrder[a.difficulty] || 0) -
            (difficultyOrder[b.difficulty] || 0)
          );
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredActivities(filtered);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCity("all");
    setSelectedCountry("all");
    setSelectedCategory("all");
    setSelectedDifficulty("all");
    setSelectedDuration("all");
    setActivityDate(undefined);
    setPriceRange([minPrice, maxPrice]);
  };

  // Auto-filter when any filter changes
  useEffect(() => {
    if (activities.length > 0) {
      handleSearch();
      // Reset to page 1 when filters change
      setCurrentPage(1);
    }
  }, [
    activities,
    searchQuery,
    selectedCity,
    selectedCountry,
    selectedCategory,
    selectedDifficulty,
    selectedDuration,
    activityDate,
    priceRange,
    sortBy,
  ]);

  // Reset to page 1 when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Set responsive filter visibility
  useEffect(() => {
    const handleResize = () => {
      // Show filters by default on large screens (lg breakpoint is 1024px)
      if (window.innerWidth >= 1024) {
        setShowFilters(true);
      } else {
        setShowFilters(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedActivities = filteredActivities.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getDifficultyBadgeVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "outlineGradient";
      case "Moderate":
        return "outlineGradientPrimary";
      case "Challenging":
        return "outlineGradientWarning";
      case "Expert":
        return "outlineGradientDanger";
      default:
        return "outlineGradientInfo";
    }
  };

  // Early return for loading state
  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              Discover Amazing Activities
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
              Explore exciting activities and experiences around the world. From
              cultural tours to adventure activities, find your perfect
              adventure.
            </p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  // Early return for error state
  if (error) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              Discover Amazing Activities
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
              Explore exciting activities and experiences around the world. From
              cultural tours to adventure activities, find your perfect
              adventure.
            </p>
          </div>
          <Card className="mb-8">
            <div className="p-6 text-center">
              <p className="text-red-600 dark:text-red-400">{error}</p>
              <Button
                onClick={() => window.location.reload()}
                className="mt-4"
                variant="outline"
              >
                Try Again
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
            Discover Amazing Activities
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Explore exciting activities and experiences around the world. From
            cultural tours to adventure activities, find your perfect adventure.
          </p>
        </div>
        {/* Top Filters */}
        <Card className="mb-8">
          <div className="p-6">
            <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
              {/* City */}
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <div className="relative">
                  <MapPin className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger
                      className="pl-10 border border-border w-full"
                      variant="professional"
                    >
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent
                      className="w-full max-h-60"
                      variant="professional"
                    >
                      {cities.map((city) => (
                        <SelectItem
                          key={city.value}
                          value={city.value}
                          variant="classic"
                        >
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Country */}
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  value={selectedCountry}
                  onValueChange={setSelectedCountry}
                >
                  <SelectTrigger className="border border-border w-full">
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

              {/* Activity Date */}
              <div className="space-y-2">
                <Label htmlFor="activity-date">Activity Date</Label>
                <DateTimePicker
                  value={activityDate}
                  onChange={setActivityDate}
                  placeholder="Select activity date"
                  minDate={new Date()}
                  className="w-full"
                />
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
                      <Label>Search Activities</Label>
                      <div className="relative">
                        <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          placeholder="Cooking class, museum tour..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 focus:border-muted border-border focus:ring-muted/20 h-8"
                        />
                      </div>
                    </div>

                    {/* Difficulty */}
                    <div className="space-y-2">
                      <Label>Difficulty</Label>
                      <Select
                        value={selectedDifficulty}
                        onValueChange={setSelectedDifficulty}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent
                          className="w-full max-h-60"
                          variant="professional"
                        >
                          {difficulties.map((difficulty) => (
                            <SelectItem
                              key={difficulty.value}
                              value={difficulty.value}
                              variant="classic"
                            >
                              {difficulty.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                      <Label>Duration</Label>
                      <Select
                        value={selectedDuration}
                        onValueChange={setSelectedDuration}
                      >
                        <SelectTrigger className="border border-border w-full">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent
                          className="w-full max-h-60"
                          variant="professional"
                        >
                          {durations.map((duration) => (
                            <SelectItem
                              key={duration.value}
                              value={duration.value}
                              variant="classic"
                            >
                              {duration.label}
                            </SelectItem>
                          ))}
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
                          max={maxPrice}
                          min={minPrice}
                          step={10}
                          className="w-full"
                        />
                        <div className="flex justify-between mt-2 text-slate-600 text-sm dark:text-slate-400">
                          <span>{formatPrice(priceRange[0])}</span>
                          <span>{formatPrice(priceRange[1])}</span>
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
          )}

          {/* Activities Grid */}
          <div className={showFilters ? "lg:col-span-3" : "lg:col-span-1"}>
            <div className="flex md:flex-row flex-col justify-between items-center mb-6">
              <div className="md:w-1/4 text-center text-slate-600 text-wrap md:text-start dark:text-slate-400">
                {filteredActivities.length} activit
                {filteredActivities.length !== 1 ? "ies" : "y"} found
                {filteredActivities.length > 0 && (
                  <p>
                    (Showing {startIndex + 1}-{" "}
                    {Math.min(endIndex, filteredActivities.length)} of{" "}
                    {filteredActivities.length})
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
                      <SelectItem value="price-low" variant="classic">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-high" variant="classic">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="rating" variant="classic">
                        Highest Rated
                      </SelectItem>
                      <SelectItem value="duration" variant="classic">
                        Duration
                      </SelectItem>
                      <SelectItem value="difficulty" variant="classic">
                        Difficulty
                      </SelectItem>
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

            {filteredActivities.length === 0 ? (
              <Card className="p-12 text-center">
                <MapPin className="mx-auto mb-4 w-12 h-12 text-slate-400" />
                <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                  No activities found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search criteria or filters to find
                  available activities.
                </p>
              </Card>
            ) : (
              <>
                <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
                  {paginatedActivities.map((activity) => (
                    <Card
                      key={activity.id}
                      className="group hover:shadow-xl p-0 transition-all cursor-pointer overflow-hidden"
                      onClick={() =>
                        router.push(
                          `/activities/${formatToSlug(activity.name)}`
                        )
                      }
                    >
                      <div className="relative h-64">
                        <Image
                          src={activity.images[0]}
                          alt={activity.name}
                          fill
                          className="transition-transform group-hover:scale-105 object-cover"
                        />
                        <div className="top-4 right-4 absolute bg-white px-3 py-1 rounded-full font-semibold text-black">
                          {formatPrice(activity.pricing.adult)}
                        </div>
                        <div className="top-4 left-4 absolute">
                          <Badge
                            variant={getDifficultyBadgeVariant(
                              activity.difficulty
                            )}
                          >
                            {activity.difficulty}
                          </Badge>
                        </div>
                        <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full font-medium text-sm text-white">
                          <MapPin className="inline mr-1 w-3 h-3" />
                          {activity.location.city}, {activity.location.country}
                        </div>
                        <div className="right-4 bottom-4 absolute bg-black/70 px-3 py-1 rounded-full font-medium text-sm text-white">
                          <Clock className="inline mr-1 w-3 h-3" />
                          {activity.duration}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-bold text-slate-900 text-xl dark:group-hover:text-blue-400 dark:text-white group-hover:text-blue-600 transition-colors">
                            {activity.name}
                          </h3>
                        </div>

                        <p className="mb-4 text-slate-600 text-sm dark:text-slate-400 line-clamp-2">
                          {activity.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="softPrimary" className="text-xs">
                            {activity.category}
                          </Badge>
                          <Badge variant="softInfo" className="text-xs">
                            <Users className="inline mr-1 w-3 h-3" />
                            {activity.groupSize.min}-{activity.groupSize.max}{" "}
                            people
                          </Badge>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
                              <Calendar className="w-4 h-4" />
                              <span>{activity.schedule.frequency}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              <span>
                                {activity.rating} ({activity.reviews})
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900 text-xl dark:text-white">
                              {formatPrice(activity.pricing.adult)}
                            </div>
                            <div className="text-slate-500 text-sm">
                              per adult
                            </div>
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
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) {
                                handlePageChange(currentPage - 1);
                              }
                            }}
                            className={
                              currentPage <= 1
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          />
                        </PaginationItem>

                        {/* Page numbers */}
                        {Array.from(
                          { length: Math.min(5, totalPages) },
                          (_, i) => {
                            let pageNumber;
                            if (totalPages <= 5) {
                              pageNumber = i + 1;
                            } else if (currentPage <= 3) {
                              pageNumber = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNumber = totalPages - 4 + i;
                            } else {
                              pageNumber = currentPage - 2 + i;
                            }

                            return (
                              <PaginationItem key={pageNumber}>
                                <PaginationLink
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(pageNumber);
                                  }}
                                  isActive={currentPage === pageNumber}
                                >
                                  {pageNumber}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          }
                        )}

                        {totalPages > 5 && currentPage < totalPages - 2 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}

                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < totalPages) {
                                handlePageChange(currentPage + 1);
                              }
                            }}
                            className={
                              currentPage >= totalPages
                                ? "pointer-events-none opacity-50"
                                : ""
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
