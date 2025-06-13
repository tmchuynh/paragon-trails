"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import {
  Calendar,
  MapPin,
  Search,
  Star,
  Thermometer,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchByDestinationPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [filteredDestinations, setFilteredDestinations] = useState(mockDestinations);

  const continents = [
    { value: "all", label: "All Continents" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "north-america", label: "North America" },
    { value: "south-america", label: "South America" },
    { value: "africa", label: "Africa" },
    { value: "oceania", label: "Oceania" },
  ];

  const handleSearch = () => {
    let filtered = mockDestinations;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (destination) =>
          destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          destination.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by continent
    if (selectedContinent !== "all") {
      filtered = filtered.filter(
        (destination) =>
          destination.continent?.toLowerCase() ===
          selectedContinent.toLowerCase()
      );
    }

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.pricing.averageDailyBudget - b.pricing.averageDailyBudget;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredDestinations(filtered);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
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

        {/* Search and Filters */}
        <Card className="mb-8 p-6">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="font-medium text-sm">Search Destinations</label>
              <div className="relative">
                <Search className="top-3 left-3 absolute w-4 h-4 text-slate-400" />
                <Input
                  placeholder="City, country, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm">Continent</label>
              <Select
                value={selectedContinent}
                onValueChange={setSelectedContinent}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select continent" />
                </SelectTrigger>
                <SelectContent>
                  {continents.map((continent) => (
                    <SelectItem key={continent.value} value={continent.value}>
                      {continent.label}
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
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button onClick={handleSearch} className="w-full">
                Search Destinations
              </Button>
            </div>
          </div>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-slate-600 dark:text-slate-400">
            Found {filteredDestinations.length} destination
            {filteredDestinations.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <Card
              key={destination.id}
              className="group hover:shadow-xl transition-all cursor-pointer overflow-hidden"
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

              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= destination.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-medium text-slate-600 text-sm">
                    {destination.rating}
                  </span>
                </div>

                <h3 className="mb-2 font-bold text-slate-900 text-xl dark:text-white">
                  {destination.name}
                </h3>

                <p className="mb-4 text-slate-600 dark:text-slate-400 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    <Thermometer className="mr-1 w-3 h-3" />
                    {destination.climate.averageTemperature}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Calendar className="mr-1 w-3 h-3" />
                    {destination.bestTimeToVisit.join(", ")}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Users className="mr-1 w-3 h-3" />
                    {destination.popularWith.join(", ")}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-600 text-sm">
                      From {formatPrice(destination.pricing.averageDailyBudget)}
                      /day
                    </p>
                    <p className="text-slate-500 text-xs">
                      Best season: {destination.bestTimeToVisit[0]}
                    </p>
                  </div>
                  <Button size="sm">Explore</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="py-20 text-center">
            <div className="flex justify-center items-center bg-slate-200 dark:bg-slate-700 mx-auto mb-4 rounded-full w-16 h-16">
              <MapPin className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="mb-2 font-semibold text-lg text-slate-900 dark:text-white">
              No destinations found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search criteria or browse all destinations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
