"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  getCityAttractions,
  type Attraction,
  type City,
} from "@/lib/api/destinations";
import { toTitleCase } from "@/lib/utils/format";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  Search,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CityPageProps {
  params: Promise<{
    countryISO2: string;
    cityName: string;
  }>;
}

export default function CityPage({ params }: CityPageProps) {
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

    async function loadCityAttractions() {
      try {
        const result = await getCityAttractions({
          cityName: decodeURIComponent(resolvedParams!.cityName),
          countryISO2: resolvedParams!.countryISO2.toUpperCase(),
          limit: 50,
        });
        setData(result);
        setFilteredAttractions(result.attractions);
      } catch (error) {
        console.error("Error loading city attractions:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCityAttractions();
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
          (attraction.description &&
            attraction.description.toLowerCase().includes(query)) ||
          attraction.categories.some((cat) => cat.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((attraction) =>
        attraction.categories.some((cat) => cat.includes(selectedCategory))
      );
    }

    setFilteredAttractions(filtered);
  }, [searchQuery, selectedCategory, data]);

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

  console.log("categories:", categories);

  if (loading) {
    return <Loading />;
  }

  if (!data || !data.city) {
    return (
      <div className="mx-auto px-4 py-8 container">
        <div className="py-16 text-center">
          <MapPin className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
          <h1 className="mb-2 font-semibold text-2xl">City Not Found</h1>
          <p className="mb-4 text-muted-foreground">
            The city "{cityName}" could not be found
            {resolvedParams ? ` in ${resolvedParams.countryISO2}` : ""}.
          </p>
          <Button asChild>
            <Link
              href={
                resolvedParams
                  ? `/destinations/${resolvedParams.countryISO2}`
                  : "/destinations"
              }
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to{" "}
              {resolvedParams ? resolvedParams.countryISO2 : "Destinations"}
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
                ? `/destinations/${resolvedParams.countryISO2}`
                : "/destinations"
            }
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to{" "}
            {resolvedParams ? resolvedParams.countryISO2 : "Destinations"}
          </Link>
        </Button>

        {/* City Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-4xl">
            Attractions in {city.name}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{city.country_code}</span>
            {city.state_code && (
              <>
                <span>•</span>
                <span>{city.state_code}</span>
              </>
            )}
            {city.latitude && city.longitude && (
              <>
                <span>•</span>
                <span>
                  {city.latitude.toFixed(4)}, {city.longitude.toFixed(4)}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-6">
          <div className="flex sm:flex-row flex-col gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="top-1/2 left-3 absolute w-4 h-4 text-muted-foreground transform -translate-y-1/2" />
              <Input
                placeholder="Search attractions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {categories.length > 0 && (
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-background px-3 py-2 border rounded-md"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {toTitleCase(category.replace(/_/g, " "))}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="flex justify-between items-center">
            <Badge variant="soft">
              {filteredAttractions.length} of {attractions.length} attractions
            </Badge>
            {(searchQuery.trim() || selectedCategory !== "all") && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Attractions Grid */}
        {filteredAttractions.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            {filteredAttractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <Star className="mx-auto mb-4 w-12 h-12 text-muted-foreground" />
            <h3 className="mb-2 font-medium text-lg">No Attractions Found</h3>
            <p className="text-muted-foreground">
              {searchQuery.trim() || selectedCategory !== "all"
                ? "No attractions match your current filters."
                : `No attractions available for ${city.name}.`}
            </p>
            {(searchQuery.trim() || selectedCategory !== "all") && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function AttractionCard({ attraction }: { attraction: Attraction }) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Sightseeing":
        return "gradientSecondary";
      case "History":
        return "gradientInfo";
      case "Culture":
        return "gradientInfo";
      case "Nature & Wildlife":
        return "gradientSuccess";
      case "Entertainment":
        return "gradientPrimary";
      case "Adventure":
        return "gradientWarning";
      case "Local Experience":
        return "gradientSecondary";
      case "Religion":
        return "gradientSuccess";
      default:
        return "gradient";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{attraction.name}</CardTitle>
          <Badge
            variant={`${getTypeColor(attraction.categories[0])}`}
            className="text-xs"
          >
            {toTitleCase(attraction.categories[0]?.split(".")[0]) ||
              "Attraction"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Description */}

        {/* Address */}
        <div className="flex items-start gap-2">
          <MapPin className="mt-0.5 w-4 h-4 text-muted-foreground" />
          <span className="text-sm">{attraction.address}</span>
        </div>

        {/* Categories */}
        {attraction.categories.length > 1 && (
          <div className="flex flex-wrap gap-1">
            {attraction.categories.slice(0, 3).map((category) => (
              <Badge key={category} variant="softPrimary" className="text-xs">
                {category.split(".").pop()?.replace(/_/g, " ")}
              </Badge>
            ))}
            {attraction.categories.length > 3 && (
              <Badge variant="softPrimary" className="text-xs">
                +{attraction.categories.length - 3} more
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
