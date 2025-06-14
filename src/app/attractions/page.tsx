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
import { mockAttractions } from "@/data/attractions";
import { mockDestinations } from "@/data/destinations";
import { formatToSlug } from "@/lib/utils/format";
import {
  ArrowLeft,
  Camera,
  Clock,
  Filter,
  Info,
  MapPin,
  Search,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaWheelchair } from "react-icons/fa";
import { toast } from "sonner";

export default function DiscoverAttractionsPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const { dispatch } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [filteredAttractions, setFilteredAttractions] =
    useState(mockAttractions);

  // Find destination by URL param
  const destinationSlug = params.destination as string;
  const destination = mockDestinations.find(
    (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === destinationSlug
  );

  const types = [
    { value: "all", label: "All Types" },
    { value: "Monument", label: "Monument" },
    { value: "Landmark", label: "Landmark" },
    { value: "Museum", label: "Museum" },
    { value: "Archaeological Site", label: "Archaeological Site" },
    { value: "Natural Wonder", label: "Natural Wonder" },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Historical Landmark", label: "Historical Landmark" },
    { value: "Cultural Site", label: "Cultural Site" },
    { value: "Natural Attraction", label: "Natural Attraction" },
    { value: "Modern Architecture", label: "Modern Architecture" },
    { value: "Religious Site", label: "Religious Site" },
  ];

  const handleSearch = () => {
    let filtered = mockAttractions;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (attraction) =>
          attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          attraction.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          attraction.location.city
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter(
        (attraction) => attraction.type === selectedType
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (attraction) => attraction.category === selectedCategory
      );
    }

    // Sort results
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.pricing.adult - b.pricing.adult;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredAttractions(filtered);
  };

  const handleAddToCart = (attraction: any) => {
    const attractionItem = {
      id: `${formatToSlug(attraction.name)}-${Math.random().toString(36).substr(2, 9)}`,
      type: "attraction" as const,
      name: attraction.name,
      description: attraction.description,
      image: attraction.images[0],
      price: attraction.pricing.adult,
      dates: {
        startDate: new Date().toISOString().split("T")[0],
        endDate: new Date().toISOString().split("T")[0],
      },
      guests: 1,
      location: `${attraction.location.city}, ${attraction.location.country}`,
      features: attraction.features || [],
      cancellationPolicy: "Standard cancellation policy applies",
    };

    cartHelpers.addItem(dispatch, attractionItem);
    toast.success(`${attraction.name} ticket added to cart!`);
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
            Attractions in {destination.name}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Discover iconic landmarks, historical sites, and must-see
            attractions in {destination.name}, {destination.country}. Book your
            tickets in advance and skip the lines at popular destinations.
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <MapPin className="w-5 h-5 text-slate-500" />
            <span className="text-slate-600">{destination.country}</span>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 p-6">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="font-medium text-sm">Search Attractions</label>
              <div className="relative">
                <Search className="top-3 left-3 absolute w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Attraction name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm">Type</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="w-full max-h-60">
                  {types.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm">Category</label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="w-full max-h-60">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="w-full max-h-60">
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price">Price (Low to High)</SelectItem>
                  <SelectItem value="rating">Rating (High to Low)</SelectItem>
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
            Found {filteredAttractions.length} attraction
            {filteredAttractions.length !== 1 ? "s" : ""} in {destination.name}
          </p>
        </div>

        {/* Attraction Cards */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredAttractions.map((attraction) => (
            <Card
              key={attraction.id}
              className="hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={attraction.images[0]}
                  alt={attraction.name}
                  fill
                  className="object-cover"
                />
                <div className="top-4 right-4 absolute">
                  <Badge variant="secondary">{attraction.type}</Badge>
                </div>
                <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full text-white">
                  <Clock className="inline mr-1 w-3 h-3" />
                  {attraction.duration.recommended}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {attraction.category}
                  </Badge>
                  <h3 className="mb-2 font-bold text-slate-900 text-xl dark:text-white">
                    {attraction.name}
                  </h3>
                  <p className="text-slate-600 text-sm dark:text-slate-400 line-clamp-2">
                    {attraction.description}
                  </p>
                </div>

                {attraction.rating && (
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= attraction.rating!
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-medium text-slate-600 text-sm">
                      {attraction.rating}
                    </span>
                  </div>
                )}

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      {attraction.location.city}, {attraction.location.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>
                      Recommended visit: {attraction.duration.recommended}
                    </span>
                  </div>
                  {attraction.accessibility?.wheelchairAccessible && (
                    <div className="flex items-center gap-2 text-sm">
                      <FaWheelchair className="w-4 h-4 text-purple-500" />
                      <span>Wheelchair accessible</span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-sm">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {attraction.features.slice(0, 3).map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                    {attraction.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{attraction.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-sm">Opening Hours:</h4>
                  <div className="text-slate-600 text-xs">
                    <p>Mon-Fri: {attraction.openingHours.monday}</p>
                    <p>Weekends: {attraction.openingHours.saturday}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-2xl text-blue-600">
                      {formatPrice(attraction.pricing.adult)}
                    </p>
                    <p className="text-slate-600 text-sm">per adult</p>
                    {attraction.pricing.child < attraction.pricing.adult && (
                      <p className="text-slate-500 text-xs">
                        Child: {formatPrice(attraction.pricing.child)}
                      </p>
                    )}
                  </div>
                  <Button onClick={() => handleAddToCart(attraction)}>
                    Book Ticket
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAttractions.length === 0 && (
          <div className="py-20 text-center">
            <div className="flex justify-center items-center bg-slate-200 dark:bg-slate-700 mx-auto mb-4 rounded-full w-16 h-16">
              <Camera className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="mb-2 font-semibold text-lg text-slate-900 dark:text-white">
              No attractions found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search criteria or browse all attractions.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedType("all");
                setSelectedCategory("all");
                setFilteredAttractions(mockAttractions);
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Visitor Tips */}
        <Card className="bg-green-50 dark:bg-green-950/20 mt-12 p-6 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-green-600" />
              Visitor Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold">Planning Your Visit</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Camera className="flex-shrink-0 mt-0.5 w-4 h-4 text-blue-500" />
                    Book tickets in advance to skip the lines
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="flex-shrink-0 mt-0.5 w-4 h-4 text-orange-500" />
                    Check opening hours and seasonal closures
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="flex-shrink-0 mt-0.5 w-4 h-4 text-green-500" />
                    Allow extra time for popular attractions
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold">What to Bring</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Camera className="flex-shrink-0 mt-0.5 w-4 h-4 text-purple-500" />
                    Camera for memorable photos
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="flex-shrink-0 mt-0.5 w-4 h-4 text-blue-500" />
                    Valid ID for ticket verification
                  </li>
                  <li className="flex items-start gap-2">
                    <FaWheelchair className="flex-shrink-0 mt-0.5 w-4 h-4 text-indigo-500" />
                    Check accessibility requirements in advance
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
