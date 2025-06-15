"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Attraction } from "@/lib/api/attractions";
import { getCityAccommodation, type City } from "@/lib/api/destinations";
import {
  Accessibility,
  ArrowLeft,
  Bed,
  Building,
  Clock,
  Globe,
  MapPin,
  Phone,
  Search,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AccommodationPageProps {
  params: Promise<{
    countryISO2: string;
    cityName: string;
  }>;
}

export default function AccommodationPage({ params }: AccommodationPageProps) {
  const [data, setData] = useState<{
    city: City | null;
    accommodations: Attraction[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAccommodations, setFilteredAccommodations] = useState<
    Attraction[]
  >([]);

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

    async function loadAccommodationData() {
      try {
        const result = await getCityAccommodation({
          cityName: decodeURIComponent(resolvedParams!.cityName),
          countryISO2: resolvedParams!.countryISO2.toUpperCase(),
          limit: 60,
        });
        setData(result);
        setFilteredAccommodations(result.accommodations);
      } catch (error) {
        console.error("Error loading accommodation data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadAccommodationData();
  }, [resolvedParams]);

  useEffect(() => {
    if (!data) return;

    if (!searchQuery.trim()) {
      setFilteredAccommodations(data.accommodations);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = data.accommodations.filter(
      (accommodation) =>
        accommodation.name.toLowerCase().includes(query) ||
        accommodation.address.toLowerCase().includes(query) ||
        accommodation.categories.some((category) =>
          category.toLowerCase().includes(query)
        )
    );
    setFilteredAccommodations(filtered);
  }, [searchQuery, data]);

  if (loading) {
    return <Loading />;
  }

  if (!data || !data.city) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <Bed className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
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

  const { city, accommodations } = data;

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

        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Bed className="w-8 h-8 text-blue-600" />
            <h1 className="font-bold text-4xl">
              Places to Stay in {city.name}
            </h1>
          </div>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
            Discover comfortable accommodations, hotels, and places to stay in{" "}
            {city.name}.
          </p>

          {/* Search Bar */}
          <div className="relative mx-auto mb-6 max-w-md">
            <Search className="top-3 left-3 absolute w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search accommodations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground text-sm">
            {filteredAccommodations.length} accommodation
            {filteredAccommodations.length !== 1 ? "s" : ""} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Accommodations Grid */}
        {filteredAccommodations.length === 0 ? (
          <div className="py-12 text-center">
            <Bed className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
            <h3 className="mb-2 font-medium text-lg">
              No Accommodations Found
            </h3>
            <p className="text-muted-foreground">
              {searchQuery
                ? `No accommodations match your search for "${searchQuery}".`
                : "No accommodations are available for this location."}
            </p>
            {searchQuery && (
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="mt-4"
              >
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredAccommodations.map((accommodation) => (
              <Card
                key={accommodation.id}
                className="group hover:shadow-md transition-shadow duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="group-hover:text-blue-600 transition-colors line-clamp-2">
                      {accommodation.name}
                    </CardTitle>
                    {accommodation.categories.includes(
                      "accommodation.hotel"
                    ) && (
                      <Star className="flex-shrink-0 w-5 h-5 text-yellow-500" />
                    )}
                  </div>
                  {accommodation.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {accommodation.categories.slice(0, 2).map((category) => (
                        <Badge
                          key={category}
                          variant="secondary"
                          className="text-xs"
                        >
                          {category.split(".").pop()?.replace("_", " ")}
                        </Badge>
                      ))}
                      {accommodation.categories.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{accommodation.categories.length - 2}
                        </Badge>
                      )}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Address */}
                  <div className="flex items-start gap-2">
                    <MapPin className="flex-shrink-0 mt-0.5 w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm line-clamp-2">
                      {accommodation.address}
                    </span>
                  </div>

                  {/* Distance */}
                  {accommodation.distance && (
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">
                        {(accommodation.distance / 1000).toFixed(1)} km from
                        center
                      </span>
                    </div>
                  )}

                  {/* Website */}
                  {accommodation.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <a
                        href={accommodation.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:text-blue-700 transition-colors line-clamp-1"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}

                  {/* Phone */}
                  {accommodation.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <a
                        href={`tel:${accommodation.phone}`}
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {accommodation.phone}
                      </a>
                    </div>
                  )}

                  {/* Opening Hours */}
                  {accommodation.opening_hours && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm line-clamp-1">
                        {accommodation.opening_hours}
                      </span>
                    </div>
                  )}

                  {/* Accessibility */}
                  {accommodation.wheelchair && (
                    <div className="flex items-center gap-2">
                      <Accessibility className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 text-sm">
                        Wheelchair accessible
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  {accommodation.description && (
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {accommodation.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Load More Section (for future enhancement) */}
        {filteredAccommodations.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Showing {filteredAccommodations.length} accommodations
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
