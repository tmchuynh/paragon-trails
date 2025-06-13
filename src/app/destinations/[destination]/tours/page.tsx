"use client";

import TourCard from "@/components/cards/TourCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrency } from "@/context/CurrencyContext";
import { mockDestinations } from "@/data/destinations";
import { mockTours } from "@/data/tours";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Filter,
  MapPin,
  Search,
  Star,
  Users,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function FindToursPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredTours, setFilteredTours] = useState(mockTours);

  // Find destination by URL param
  const destinationSlug = params.destination as string;
  const destination = mockDestinations.find(
    (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === destinationSlug
  );

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "adventure", label: "Adventure" },
    { value: "cultural", label: "Cultural" },
    { value: "nature", label: "Nature" },
    { value: "food", label: "Food & Drink" },
    { value: "wildlife", label: "Wildlife" },
    { value: "scenic", label: "Scenic" },
  ];

  const durations = [
    { value: "all", label: "Any Duration" },
    { value: "short", label: "2-4 hours" },
    { value: "half-day", label: "Half day (4-6 hours)" },
    { value: "full-day", label: "Full day (6+ hours)" },
    { value: "multi-day", label: "Multi-day" },
  ];

  const handleSearch = () => {
    let filtered = mockTours;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (tour) =>
          tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tour.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((tour) => tour.tourCategoryId === selectedCategory);
    }

    // Filter by duration
    if (selectedDuration !== "all") {
      filtered = filtered.filter((tour) => {
        const hours = parseInt(tour.duration.split(" ")[0]);
        switch (selectedDuration) {
          case "short":
            return hours >= 2 && hours <= 4;
          case "half-day":
            return hours >= 4 && hours <= 6;
          case "full-day":
            return hours >= 6;
          case "multi-day":
            return tour.duration.includes("day") && !tour.duration.includes("hours");
          default:
            return true;
        }
      });
    }

    // Filter by price range
    filtered = filtered.filter((tour) => {
      const price = parseFloat(tour.price.replace(/[^0-9.]/g, ""));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, ""));
        case "rating":
          return b.rating - a.rating;
        case "duration":
          return parseInt(a.duration.split(" ")[0]) - parseInt(b.duration.split(" ")[0]);
        case "name":
        default:
          return a.title.localeCompare(b.title);
      }
    });

    setFilteredTours(filtered);
  };

  if (!destination) {
    return (
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
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
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
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
            Tours in {destination.name}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Discover amazing guided tours and experiences in {destination.name},{" "}
            {destination.country}. From cultural immersions to adventure
            activities, find the perfect tour for your journey.
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <MapPin className="w-5 h-5 text-slate-500" />
            <span className="text-slate-600">{destination.country}</span>
            <div className="flex items-center gap-1 ml-4">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-slate-600">
                {destination.rating} rating
              </span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 p-6">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="space-y-2">
              <label className="font-medium text-sm">Search Tours</label>
              <div className="relative">
                <Search className="top-3 left-3 absolute w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Tour name, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm">Category</label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm">Duration</label>
              <Select
                value={selectedDuration}
                onValueChange={setSelectedDuration}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map((duration) => (
                    <SelectItem key={duration.value} value={duration.value}>
                      {duration.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price">Price (Low to High)</SelectItem>
                  <SelectItem value="rating">Rating (High to Low)</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="font-medium text-sm">Price Range:</span>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([
                      parseInt(e.target.value) || 0,
                      priceRange[1],
                    ])
                  }
                  className="w-20"
                />
                <span>-</span>
                <Input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      parseInt(e.target.value) || 1000,
                    ])
                  }
                  className="w-20"
                />
              </div>
            </div>
            <Button onClick={handleSearch}>
              <Filter className="mr-2 w-4 h-4" />
              Apply Filters
            </Button>
          </div>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-slate-600 dark:text-slate-400">
            Found {filteredTours.length} tour
            {filteredTours.length !== 1 ? "s" : ""} in {destination.name}
          </p>
        </div>

        {/* Tour Cards */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              city={destination.name}
              country={destination.country}
            />
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="py-20 text-center">
            <div className="flex justify-center items-center bg-slate-200 dark:bg-slate-700 mx-auto mb-4 rounded-full w-16 h-16">
              <MapPin className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="mb-2 font-semibold text-lg text-slate-900 dark:text-white">
              No tours found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search criteria or browse all tours.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedDuration("all");
                setPriceRange([0, 1000]);
                setFilteredTours(mockTours);
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Destination Info Sidebar */}
        <Card className="mt-12 p-6">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <Clock className="mx-auto mb-2 w-8 h-8 text-blue-500" />
              <h3 className="mb-1 font-semibold">Best Time to Visit</h3>
              <p className="text-slate-600 text-sm">
                {destination.bestTimeToVisit.join(", ")}
              </p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-2 w-8 h-8 text-green-500" />
              <h3 className="mb-1 font-semibold">Popular With</h3>
              <p className="text-slate-600 text-sm">
                {destination.popularWith.join(", ")}
              </p>
            </div>
            <div className="text-center">
              <Calendar className="mx-auto mb-2 w-8 h-8 text-orange-500" />
              <h3 className="mb-1 font-semibold">Average Temperature</h3>
              <p className="text-slate-600 text-sm">
                {destination.climate.averageTemperature}
              </p>
            </div>
            <div className="text-center">
              <Star className="mx-auto mb-2 w-8 h-8 text-yellow-500" />
              <h3 className="mb-1 font-semibold">Destination Rating</h3>
              <p className="text-slate-600 text-sm">{destination.rating}/5.0</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
