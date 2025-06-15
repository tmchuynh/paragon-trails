"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { fetchAttractionsByCity, type Attraction } from "@/lib/api/attractions";
import { type City } from "@/lib/api/geography";
import { toTitleCase } from "@/lib/utils/format";
import {
  ArrowLeft,
  ArrowUpDown,
  ExternalLink,
  Filter,
  MapPin,
  Navigation,
  Phone,
  Search,
  SlidersHorizontal,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FoodPageProps {
  params: Promise<{
    countryISO2: string;
    cityName: string;
  }>;
}

export default function FoodPage({ params }: FoodPageProps) {
  const [data, setData] = useState<{
    city: City | null;
    attractions: Attraction[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Advanced filters
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [hasWebsite, setHasWebsite] = useState(false);
  const [hasPhone, setHasPhone] = useState(false);
  const [hasCoordinates, setHasCoordinates] = useState(false);

  const [resolvedParams, setResolvedParams] = useState<{
    countryISO2: string;
    cityName: string;
  } | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolved = await params;
      setResolvedParams(resolved);
    }
    resolveParams();
  }, [params]);

  const cityName = resolvedParams
    ? decodeURIComponent(resolvedParams.cityName)
    : "";

  useEffect(() => {
    if (!resolvedParams) return;

    async function loadCityFood() {
      try {
        const result = await fetchAttractionsByCity({
          cityName: decodeURIComponent(resolvedParams!.cityName),
          countryISO2: resolvedParams!.countryISO2.toUpperCase(),
          categories:
            "catering,catering.restaurant,catering.fast_food,catering.cafe,catering.bar,catering.pub,catering.food_court,catering.ice_cream,catering.biergarten",
          limit: 60,
        });
        setData(result);
        setFilteredAttractions(result.attractions);
      } catch (error) {
        console.error("Error loading city food:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCityFood();
  }, [resolvedParams]);

  useEffect(() => {
    if (!data) return;

    let filtered = data.attractions;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (attraction) =>
          attraction.name.toLowerCase().includes(query) ||
          attraction.categories.some((cat) => cat.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((attraction) =>
        attraction.categories.some((cat) => cat.includes(selectedCategory))
      );
    }

    // Advanced filters
    if (hasWebsite) {
      filtered = filtered.filter((attraction) => attraction.website);
    }
    if (hasPhone) {
      filtered = filtered.filter((attraction) => attraction.phone);
    }
    if (hasCoordinates) {
      filtered = filtered.filter(
        (attraction) => attraction.latitude && attraction.longitude
      );
    }

    // Sort the filtered results
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "category":
          comparison = (a.categories[0] || "").localeCompare(
            b.categories[0] || ""
          );
          break;
        case "address":
          comparison = (a.address || "").localeCompare(b.address || "");
          break;
        default:
          comparison = a.name.localeCompare(b.name);
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    setFilteredAttractions(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [
    searchQuery,
    selectedCategory,
    hasWebsite,
    hasPhone,
    hasCoordinates,
    sortBy,
    sortOrder,
    data,
  ]);

  // Get unique categories for filtering
  const categories = data
    ? Array.from(
        new Set(
          data.attractions.flatMap((attr) =>
            attr.categories.map((category) => category.split(".")[0])
          )
        )
      ).sort()
    : [];

  // Pagination calculations
  const totalPages = Math.ceil(filteredAttractions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedAttractions = filteredAttractions.slice(startIndex, endIndex);

  // Helper functions
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setHasWebsite(false);
    setHasPhone(false);
    setHasCoordinates(false);
    setSortBy("name");
    setSortOrder("asc");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchQuery.trim() ||
    selectedCategory !== "all" ||
    hasWebsite ||
    hasPhone ||
    hasCoordinates ||
    sortBy !== "name" ||
    sortOrder !== "asc";

  if (loading) {
    return <Loading />;
  }

  if (!data || !data.city) {
    return (
      <div className="mx-auto px-4 py-8 container">
        <div className="py-16 text-center">
          <UtensilsCrossed className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
          <h1 className="mb-2 font-semibold text-2xl">City Not Found</h1>
          <p className="mb-4 text-muted-foreground">
            The city "{cityName}" could not be found
            {resolvedParams ? ` in ${resolvedParams.countryISO2}` : ""}.
          </p>
          <Button asChild>
            <Link
              href={
                resolvedParams
                  ? `/destinations/${resolvedParams.countryISO2}/${resolvedParams.cityName}`
                  : "/destinations"
              }
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to{" "}
              {resolvedParams ? resolvedParams.cityName : "Destinations"}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const { city, attractions } = data;

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link
            href={
              resolvedParams
                ? `/destinations/${resolvedParams.countryISO2}/${resolvedParams.cityName}`
                : "/destinations"
            }
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to {city.name}
          </Link>
        </Button>

        {/* City Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-4xl">
            Food & Dining in {city.name}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <UtensilsCrossed className="w-4 h-4" />
            <span>Restaurants, Cafes, Bars & Food Places</span>
            <span>•</span>
            <span>{city.country_code}</span>
            {city.state_code && (
              <>
                <span>•</span>
                <span>{city.state_code}</span>
              </>
            )}
          </div>
        </div>

        {/* Search, Filters, and Sorting */}
        <div className="space-y-4 mb-6">
          {/* Search and Primary Filters */}
          <div className="flex sm:flex-row flex-col items-center gap-4">
            <div className="relative flex-1 min-w-3/7">
              <Search className="top-1/2 left-3 absolute w-4 h-4 text-muted-foreground transform -translate-y-1/2" />
              <Input
                placeholder="Search restaurants and food places..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 focus:border-muted border-border focus:ring-muted/20 h-8"
              />
            </div>

            {/* Category Select */}
            {categories.length > 0 && (
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="border border-border w-full md:w-1/2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className="w-full max-h-60"
                  variant="professional"
                >
                  <SelectItem value="all" variant="classic">
                    All Categories
                  </SelectItem>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      variant="classic"
                    >
                      {toTitleCase(category.replace(/_/g, " "))}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {/* Sort Select */}
            <Select
              value={`${sortBy}-${sortOrder}`}
              onValueChange={(value) => {
                const [newSortBy, newSortOrder] = value.split("-") as [
                  string,
                  "asc" | "desc",
                ];
                setSortBy(newSortBy);
                setSortOrder(newSortOrder);
              }}
            >
              <SelectTrigger className="border border-border w-full md:w-48">
                <ArrowUpDown className="mr-2 w-4 h-4" />
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent className="w-full max-h-60" variant="professional">
                <SelectItem value="name-asc" variant="classic">
                  Name A-Z
                </SelectItem>
                <SelectItem value="name-desc" variant="classic">
                  Name Z-A
                </SelectItem>
                <SelectItem value="category-asc" variant="classic">
                  Category A-Z
                </SelectItem>
                <SelectItem value="address-asc" variant="classic">
                  Address A-Z
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Items per page Select */}
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => setItemsPerPage(parseInt(value))}
            >
              <SelectTrigger className="border border-border w-full md:w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="w-full max-h-60" variant="professional">
                <SelectItem value="4" variant="classic">
                  4 per page
                </SelectItem>
                <SelectItem value="8" variant="classic">
                  8 per page
                </SelectItem>
                <SelectItem value="12" variant="classic">
                  12 per page
                </SelectItem>
                <SelectItem value="16" variant="classic">
                  16 per page
                </SelectItem>
                <SelectItem value="24" variant="classic">
                  24 per page
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Advanced Filters Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className={showAdvancedFilters ? "bg-accent" : ""}
            >
              <SlidersHorizontal className="mr-2 w-4 h-4" />
              Advanced
            </Button>
          </div>

          {/* Advanced Filters Panel */}
          {showAdvancedFilters && (
            <div className="bg-muted/30 p-4 border rounded-lg">
              <h3 className="mb-3 font-medium text-sm">Advanced Filters</h3>
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-3">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="has-website"
                    checked={hasWebsite}
                    onCheckedChange={setHasWebsite}
                  />
                  <Label htmlFor="has-website" className="text-sm">
                    Has Website
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="has-phone"
                    checked={hasPhone}
                    onCheckedChange={setHasPhone}
                  />
                  <Label htmlFor="has-phone" className="text-sm">
                    Has Phone
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="has-coordinates"
                    checked={hasCoordinates}
                    onCheckedChange={setHasCoordinates}
                  />
                  <Label htmlFor="has-coordinates" className="text-sm">
                    Has Map Location
                  </Label>
                </div>
              </div>
            </div>
          )}

          {/* Results Summary and Clear Filters */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Badge variant="soft">
                {filteredAttractions.length} of {data?.attractions.length || 0}{" "}
                food places
              </Badge>
              {currentPage > 1 && (
                <Badge variant="outline">
                  Page {currentPage} of {totalPages}
                </Badge>
              )}
            </div>
            {hasActiveFilters && (
              <Button variant="outline" size="sm" onClick={resetFilters}>
                <Filter className="mr-2 w-4 h-4" />
                Clear All Filters
              </Button>
            )}
          </div>
        </div>

        {/* Food Grid */}
        {filteredAttractions.length > 0 ? (
          <>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {paginatedAttractions.map((attraction) => (
                <FoodCard key={attraction.id} attraction={attraction} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          currentPage > 1 && setCurrentPage(currentPage - 1)
                        }
                        className={
                          currentPage <= 1
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>

                    {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 7) {
                        pageNum = i + 1;
                      } else if (currentPage <= 4) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 3) {
                        pageNum = totalPages - 6 + i;
                      } else {
                        pageNum = currentPage - 3 + i;
                      }

                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            onClick={() => setCurrentPage(pageNum)}
                            isActive={currentPage === pageNum}
                            className="cursor-pointer"
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          currentPage < totalPages &&
                          setCurrentPage(currentPage + 1)
                        }
                        className={
                          currentPage >= totalPages
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className="py-12 text-center">
            <UtensilsCrossed className="mx-auto mb-4 w-12 h-12 text-muted-foreground" />
            <h3 className="mb-2 font-medium text-lg">No Food Places Found</h3>
            <p className="text-muted-foreground">
              {hasActiveFilters
                ? "No food places match your current filters."
                : `No food places available for ${city.name}.`}
            </p>
            {hasActiveFilters && (
              <Button variant="outline" onClick={resetFilters} className="mt-4">
                <Filter className="mr-2 w-4 h-4" />
                Clear All Filters
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function FoodCard({ attraction }: { attraction: Attraction }) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "restaurant":
        return "gradientPrimary";
      case "fast_food":
        return "gradientWarning";
      case "cafe":
        return "gradientSecondary";
      case "bar":
        return "gradientDanger";
      case "pub":
        return "gradientDanger";
      case "food_court":
        return "gradientInfo";
      case "ice_cream":
        return "gradientSuccess";
      case "biergarten":
        return "gradientWarning";
      case "catering":
        return "gradientPrimary";
      default:
        return "gradient";
    }
  };

  // Process categories to get clean category names
  const processedCategories: string[] = [];
  if (attraction.categories.length > 0) {
    for (const categoryStr of attraction.categories) {
      const categoryName =
        categoryStr.split(".")[1] || categoryStr.split(".")[0]; // Get subcategory first, then main category
      if (!processedCategories.includes(categoryName)) {
        processedCategories.push(categoryName);
      }
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="w-8/9 text-xl">{attraction.name}</CardTitle>
          <Badge
            variant={`${getTypeColor(attraction.categories[0]?.split(".")[1] || attraction.categories[0])}`}
            className="text-xs"
          >
            {toTitleCase(
              attraction.categories[0]?.split(".")[1]?.replace(/_/g, " ") ||
                attraction.categories[0]?.split(".")[0]?.replace(/_/g, " ") ||
                "Restaurant"
            )}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Address */}
        <div className="flex items-start gap-2">
          <MapPin className="mt-0.5 w-4 h-4 text-muted-foreground" />
          <span className="text-sm">{attraction.address}</span>
        </div>

        {/* Categories */}
        {processedCategories.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {processedCategories.slice(0, 3).map((categoryName: string) => (
              <Badge
                key={categoryName}
                variant="softPrimary"
                className="text-xs"
              >
                {toTitleCase(categoryName.replace(/_/g, " "))}
              </Badge>
            ))}
            {processedCategories.length > 3 && (
              <Badge variant="softPrimary" className="text-xs">
                +{processedCategories.length - 3} more
              </Badge>
            )}
          </div>
        )}

        <Separator />

        {/* Contact Info */}
        <div className="space-y-2">
          {attraction.phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span>{attraction.phone}</span>
            </div>
          )}

          {attraction.website && (
            <div className="flex items-center gap-2 text-sm">
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
              <a
                href={attraction.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Website
              </a>
            </div>
          )}

          {attraction.latitude && attraction.longitude && (
            <div className="flex items-center gap-2 text-sm">
              <Navigation className="w-4 h-4 text-muted-foreground" />
              <a
                href={`https://www.google.com/maps?q=${attraction.latitude},${attraction.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Map
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
