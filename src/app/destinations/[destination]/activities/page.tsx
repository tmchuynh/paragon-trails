"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockActivities } from "@/data/activities";
import { mockDestinations } from "@/data/destinations";
import { formatToSlug } from "@/lib/utils/format";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Filter,
  MapPin,
  Search,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function BookActivitiesPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const { dispatch } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [filteredActivities, setFilteredActivities] = useState(mockActivities);

  // Find destination by URL param
  const destinationSlug = params.destination as string;
  const destination = mockDestinations.find(
    (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === destinationSlug
  );

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Water Sports", label: "Water Sports" },
    { value: "Adventure", label: "Adventure" },
    { value: "Aerial Tours", label: "Aerial Tours" },
    { value: "Wildlife", label: "Wildlife" },
    { value: "Outdoor Recreation", label: "Outdoor Recreation" },
  ];

  const difficulties = [
    { value: "all", label: "All Levels" },
    { value: "Easy", label: "Easy" },
    { value: "Moderate", label: "Moderate" },
    { value: "Challenging", label: "Challenging" },
    { value: "Expert", label: "Expert" },
  ];

  const handleSearch = () => {
    let filtered = mockActivities;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (activity) =>
          activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          activity.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((activity) => activity.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter((activity) => activity.difficulty === selectedDifficulty);
    }

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.pricing.adult - b.pricing.adult;
        case "difficulty":
          const difficultyOrder = ["Easy", "Moderate", "Challenging", "Expert"];
          return difficultyOrder.indexOf(a.difficulty) - difficultyOrder.indexOf(b.difficulty);
        case "duration":
          return parseInt(a.duration.split(" ")[0]) - parseInt(b.duration.split(" ")[0]);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredActivities(filtered);
  };

  const handleAddToCart = (activity: any) => {
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
      cancellationPolicy: "Flexible cancellation up to 24 hours before activity",
    };

    cartHelpers.addItem(dispatch, activityItem);
    toast.success(`${activity.name} added to cart!`);
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
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="font-medium text-sm">Search Activities</label>
              <div className="relative">
                <Search className="top-3 left-3 absolute w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Activity name or description..."
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
              <label className="font-medium text-sm">Difficulty Level</label>
              <Select
                value={selectedDifficulty}
                onValueChange={setSelectedDifficulty}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
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
                  <SelectItem value="difficulty">Difficulty</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button onClick={handleSearch}>
              <Filter className="mr-2 w-4 h-4" />
              Apply Filters
            </Button>
          </div>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-slate-600 dark:text-slate-400">
            Found {filteredActivities.length} activit
            {filteredActivities.length !== 1 ? "ies" : "y"} in{" "}
            {destination.name}
          </p>
        </div>

        {/* Activity Cards */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredActivities.map((activity) => (
            <Card
              key={activity.id}
              className="hover:shadow-xl transition-shadow overflow-hidden"
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

              <CardContent className="p-6">
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
                      Group: {activity.groupSize.min}-{activity.groupSize.max}{" "}
                      people
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      {activity.location.city}, {activity.location.country}
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
                    {activity.inclusions.slice(0, 3).map((inclusion, index) => (
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
                  <h4 className="mb-2 font-semibold text-sm">Requirements:</h4>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    {activity.requirements.slice(0, 2).map((req, index) => (
                      <li key={index} className="flex items-start gap-1">
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
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="py-20 text-center">
            <div className="flex justify-center items-center bg-slate-200 dark:bg-slate-700 mx-auto mb-4 rounded-full w-16 h-16">
              <Zap className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="mb-2 font-semibold text-lg text-slate-900 dark:text-white">
              No activities found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search criteria or browse all activities.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedDifficulty("all");
                setFilteredActivities(mockActivities);
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Safety Information */}
        <Card className="bg-blue-50 dark:bg-blue-950/20 mt-12 p-6 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Safety & Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
