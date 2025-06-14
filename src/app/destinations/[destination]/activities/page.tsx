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
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockActivities } from "@/data/activities";
import { mockDestinations } from "@/data/destinations";
import { Activity } from "@/lib/interfaces/services/activities";
import { formatToSlug } from "@/lib/utils/format";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Filter,
  MapPin,
  RotateCcw,
  Search,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function BookActivitiesPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const { dispatch } = useCart();

  const [filteredActivities, setFilteredActivities] =
    useState<Activity[]>(mockActivities);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedCancellationPolicy, setSelectedCancellationPolicy] =
    useState<string>("all");
  const [selectedScheduleFrequency, setSelectedScheduleFrequency] =
    useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState<string>("name");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // Find destination by URL param
  const destinationSlug = params.destination as string;
  const destination = mockDestinations.find(
    (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === destinationSlug
  );

  // Get unique values for filters
  const countries = [
    { value: "all", label: "All Countries" },
    ...Array.from(
      new Set(mockActivities.map((activity) => activity.location.country))
    )
      .sort()
      .map((country) => ({ value: country, label: country })),
  ];

  // Get cities based on selected country
  const getCities = () => {
    let activities = mockActivities;
    if (selectedCountry !== "all") {
      activities = activities.filter(
        (activity) => activity.location.country === selectedCountry
      );
    }
    return [
      { value: "all", label: "All Cities" },
      ...Array.from(
        new Set(activities.map((activity) => activity.location.city))
      )
        .sort()
        .map((city) => ({ value: city, label: city })),
    ];
  };

  const categories = [
    { value: "all", label: "All Categories" },
    ...Array.from(new Set(mockActivities.map((activity) => activity.category)))
      .sort()
      .map((category) => ({ value: category, label: category })),
  ];

  const difficulties = [
    { value: "all", label: "All Levels" },
    { value: "Easy", label: "Easy" },
    { value: "Moderate", label: "Moderate" },
    { value: "Challenging", label: "Challenging" },
    { value: "Expert", label: "Expert" },
  ];

  const cancellationPolicies = [
    { value: "all", label: "All Policies" },
    ...Array.from(
      new Set(mockActivities.map((activity) => activity.cancellation.policy))
    )
      .sort()
      .map((policy) => ({ value: policy, label: policy })),
  ];

  const scheduleFrequencies = [
    { value: "all", label: "All Frequencies" },
    ...Array.from(
      new Set(mockActivities.map((activity) => activity.schedule.frequency))
    )
      .sort()
      .map((frequency) => ({ value: frequency, label: frequency })),
  ];

  const durations = [
    { value: "all", label: "All Durations" },
    ...Array.from(new Set(mockActivities.map((activity) => activity.duration)))
      .sort((a, b) => {
        const getHours = (duration: string) => {
          const match = duration.match(/(\d+(?:\.\d+)?)/);
          return match ? parseFloat(match[1]) : 0;
        };
        return getHours(a) - getHours(b);
      })
      .map((duration) => ({ value: duration, label: duration })),
  ];

  const handleSearch = () => {
    let filtered = mockActivities;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (activity) =>
          activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          activity.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          activity.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by country
    if (selectedCountry !== "all") {
      filtered = filtered.filter(
        (activity) => activity.location.country === selectedCountry
      );
    }

    // Filter by city
    if (selectedCity !== "all") {
      filtered = filtered.filter(
        (activity) => activity.location.city === selectedCity
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (activity) => activity.category === selectedCategory
      );
    }

    // Filter by difficulty
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (activity) => activity.difficulty === selectedDifficulty
      );
    }

    // Filter by cancellation policy
    if (selectedCancellationPolicy !== "all") {
      filtered = filtered.filter(
        (activity) =>
          activity.cancellation.policy === selectedCancellationPolicy
      );
    }

    // Filter by schedule frequency
    if (selectedScheduleFrequency !== "all") {
      filtered = filtered.filter(
        (activity) => activity.schedule.frequency === selectedScheduleFrequency
      );
    }

    // Filter by duration
    if (selectedDuration !== "all") {
      filtered = filtered.filter(
        (activity) => activity.duration === selectedDuration
      );
    }

    // Filter by price range (considering adult, child, and senior prices)
    filtered = filtered.filter((activity) => {
      const minPrice = Math.min(
        activity.pricing.adult,
        activity.pricing.child,
        activity.pricing.senior || activity.pricing.adult
      );
      const maxPrice = Math.max(
        activity.pricing.adult,
        activity.pricing.child,
        activity.pricing.senior || activity.pricing.adult
      );
      return (
        (minPrice >= priceRange[0] && minPrice <= priceRange[1]) ||
        (maxPrice >= priceRange[0] && maxPrice <= priceRange[1]) ||
        (minPrice <= priceRange[0] && maxPrice >= priceRange[1])
      );
    });

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.pricing.adult - b.pricing.adult;
        case "price-high":
          return b.pricing.adult - a.pricing.adult;
        case "duration":
          const getDurationHours = (duration: string) => {
            const match = duration.match(/(\d+(?:\.\d+)?)/);
            return match ? parseFloat(match[1]) : 0;
          };
          return getDurationHours(a.duration) - getDurationHours(b.duration);
        case "difficulty":
          const difficultyOrder = ["Easy", "Moderate", "Challenging", "Expert"];
          return (
            difficultyOrder.indexOf(a.difficulty) -
            difficultyOrder.indexOf(b.difficulty)
          );
        case "rating":
          return b.rating - a.rating;
        case "name":
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
    setSelectedCancellationPolicy("all");
    setSelectedScheduleFrequency("all");
    setSelectedDuration("all");
    setPriceRange([0, 200]);
  };

  // Handle cascading filter resets
  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setSelectedCity("all");
  };

  // Auto-filter when any filter changes
  useEffect(() => {
    handleSearch();
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [
    searchQuery,
    selectedCity,
    selectedCountry,
    selectedCategory,
    selectedDifficulty,
    selectedCancellationPolicy,
    selectedScheduleFrequency,
    selectedDuration,
    priceRange,
    sortBy,
  ]);

  // Reset to page 1 when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

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

  const handleAddToCart = (activity: Activity) => {
    const activityItem = {
      id: `${formatToSlug(activity.name)}-${Math.random().toString(36).substr(2, 9)}`,
      type: "activity" as const,
      name: activity.name,
      description: activity.description,
      image: activity.images[0],
      price: activity.pricing.adult,
      dates: {
        startDate: new Date().toISOString().split("T")[0],
        endDate: new Date().toISOString().split("T")[0],
      },
      guests: 1,
      location: `${activity.location.city}, ${activity.location.country}`,
      features: activity.inclusions || [],
      cancellationPolicy: activity.cancellation.policy,
    };

    cartHelpers.addItem(dispatch, activityItem);
    toast.success(`${activity.name} added to cart!`);
  };

  if (!destination) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Destination not found</h1>
            <Button onClick={() => router.push("/destinations")}>
              Browse all destinations
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.push(`/destinations/${destinationSlug}`)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to {destination.name}
        </Button>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
            Activities in {destination.name}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Experience thrilling adventures and unique activities in{" "}
            {destination.name}, {destination.country}. From adrenaline-pumping
            sports to peaceful nature experiences, find your perfect activity.
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <MapPin className="w-5 h-5 text-slate-500" />
            <span className="text-slate-600">{destination.country}</span>
          </div>
        </div>

        {/* Safety Information */}
        <Card className="bg-blue-50 dark:bg-blue-950/20 my-7 mt-12 p-6 border-blue-200 dark:border-blue-800">
          <div className="mb-4">
            <h3 className="flex items-center gap-2 font-bold text-lg">
              <Shield className="w-5 h-5 text-blue-600" />
              Safety & Guidelines
            </h3>
          </div>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold">Before You Book</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Shield className="flex-shrink-0 mt-0.5 w-4 h-4 text-green-500" />
                  Check activity requirements and fitness levels
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="flex-shrink-0 mt-0.5 w-4 h-4 text-green-500" />
                  Read cancellation policies carefully
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="flex-shrink-0 mt-0.5 w-4 h-4 text-green-500" />
                  Verify all equipment is included or what to bring
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">During Activities</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Shield className="flex-shrink-0 mt-0.5 w-4 h-4 text-blue-500" />
                  Follow all safety instructions from guides
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="flex-shrink-0 mt-0.5 w-4 h-4 text-blue-500" />
                  Inform guides of any medical conditions
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="flex-shrink-0 mt-0.5 w-4 h-4 text-blue-500" />
                  Stay within designated activity areas
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Top Filters */}
        <Card className="mb-8 p-0">
          <div className="p-6">
            <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {/* Country */}
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <div className="relative">
                  <MapPin className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                  <Select
                    value={selectedCountry}
                    onValueChange={handleCountryChange}
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

              {/* City */}
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-h-60">
                    {getCities().map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
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
            <Card>
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
                        placeholder="Activity name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {categories.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Difficulty Level */}
                  <div className="space-y-2">
                    <Label>Difficulty Level</Label>
                    <Select
                      value={selectedDifficulty}
                      onValueChange={setSelectedDifficulty}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {difficulties.map((difficulty) => (
                          <SelectItem
                            key={difficulty.value}
                            value={difficulty.value}
                          >
                            {difficulty.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Cancellation Policy */}
                  <div className="space-y-2">
                    <Label>Cancellation Policy</Label>
                    <Select
                      value={selectedCancellationPolicy}
                      onValueChange={setSelectedCancellationPolicy}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select policy" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {cancellationPolicies.map((policy) => (
                          <SelectItem key={policy.value} value={policy.value}>
                            {policy.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Schedule Frequency */}
                  <div className="space-y-2">
                    <Label>Schedule Frequency</Label>
                    <Select
                      value={selectedScheduleFrequency}
                      onValueChange={setSelectedScheduleFrequency}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {scheduleFrequencies.map((frequency) => (
                          <SelectItem
                            key={frequency.value}
                            value={frequency.value}
                          >
                            {frequency.label}
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
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent className="w-full max-h-60">
                        {durations.map((duration) => (
                          <SelectItem
                            key={duration.value}
                            value={duration.value}
                          >
                            {duration.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <Label>Price Range</Label>
                    <div className="px-2 py-4">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={200}
                        min={0}
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

          {/* Activities Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-600 dark:text-slate-400">
                {filteredActivities.length} activit
                {filteredActivities.length !== 1 ? "ies" : "y"} found
                {filteredActivities.length > 0 && (
                  <span className="ml-2">
                    (Showing {startIndex + 1}-
                    {Math.min(endIndex, filteredActivities.length)} of{" "}
                    {filteredActivities.length})
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
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="18">18</SelectItem>
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
                    <SelectItem value="duration">Duration</SelectItem>
                    <SelectItem value="difficulty">Difficulty</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredActivities.length === 0 ? (
              <Card className="p-12 text-center">
                <Zap className="mx-auto mb-4 w-12 h-12 text-slate-400" />
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
                      className="hover:shadow-xl p-0 transition-shadow overflow-hidden"
                    >
                      <div className="relative h-48">
                        <Image
                          src={activity.images[0]}
                          alt={activity.name}
                          fill
                          className="object-cover"
                        />
                        <div className="top-4 right-4 absolute">
                          <Badge
                            variant={
                              activity.difficulty === "Easy"
                                ? "secondary"
                                : activity.difficulty === "Moderate"
                                  ? "default"
                                  : activity.difficulty === "Challenging"
                                    ? "destructive"
                                    : "outline"
                            }
                          >
                            {activity.difficulty}
                          </Badge>
                        </div>
                        <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full text-white">
                          <Clock className="inline mr-1 w-3 h-3" />
                          {activity.duration}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-3">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {activity.category}
                          </Badge>
                          <h3 className="mb-2 font-bold text-slate-900 text-xl dark:text-white">
                            {activity.name}
                          </h3>
                          <p className="text-slate-600 text-sm dark:text-slate-400 line-clamp-2">
                            {activity.description}
                          </p>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span>
                              Group: {activity.groupSize.min}-
                              {activity.groupSize.max} people
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-green-500" />
                            <span>
                              {activity.location.city},{" "}
                              {activity.location.country}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-orange-500" />
                            <span>Schedule: {activity.schedule.frequency}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="mb-2 font-semibold text-sm">
                            What's Included:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {activity.inclusions
                              .slice(0, 3)
                              .map((inclusion, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {inclusion}
                                </Badge>
                              ))}
                            {activity.inclusions.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{activity.inclusions.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="mb-2 font-semibold text-sm">
                            Requirements:
                          </h4>
                          <ul className="space-y-1 text-slate-600 text-xs">
                            {activity.requirements
                              .slice(0, 2)
                              .map((req, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-1"
                                >
                                  <Shield className="flex-shrink-0 mt-0.5 w-3 h-3 text-red-500" />
                                  {req}
                                </li>
                              ))}
                          </ul>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-bold text-2xl text-blue-600">
                              {formatPrice(activity.pricing.adult)}
                            </p>
                            <p className="text-slate-600 text-sm">per adult</p>
                          </div>
                          <Button onClick={() => handleAddToCart(activity)}>
                            Book Now
                          </Button>
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
