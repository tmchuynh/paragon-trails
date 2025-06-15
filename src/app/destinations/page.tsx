"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  getDestinationCountriesByRegion,
  searchDestinations,
  type Country,
} from "@/lib/api/destinations";
import { Globe, MapPin, Search, Star, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DestinationsPage() {
  const [countriesByRegion, setCountriesByRegion] = useState<
    Record<string, Country[]>
  >({});
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{
    countries: Country[];
    cities: Array<{ city: any; country: Country }>;
  }>({ countries: [], cities: [] });
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    async function loadDestinations() {
      try {
        const data = await getDestinationCountriesByRegion();
        setCountriesByRegion(data);
      } catch (error) {
        console.error("Error loading destinations:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDestinations();
  }, []);

  useEffect(() => {
    async function performSearch() {
      if (!searchQuery.trim()) {
        setSearchResults({ countries: [], cities: [] });
        return;
      }

      setSearching(true);
      try {
        const results = await searchDestinations({
          query: searchQuery,
          type: "both",
          limit: 10,
        });
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching destinations:", error);
        setSearchResults({ countries: [], cities: [] });
      } finally {
        setSearching(false);
      }
    }

    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const hasSearchResults =
    searchResults.countries.length > 0 || searchResults.cities.length > 0;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="flex justify-center items-center gap-2 mb-4 font-bold text-4xl">
            <Globe className="w-8 h-8" />
            Explore Destinations
          </h1>
          <p className="text-muted-foreground text-xl">
            Discover amazing places around the world and plan your next
            adventure
          </p>
        </div>
        {/* Search */}
        <div className="mb-8">
          <div className="relative mx-auto max-w-md">
            <Search className="top-1/2 left-3 absolute w-4 h-4 text-muted-foreground transform -translate-y-1/2" />
            <Input
              placeholder="Search countries or cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 focus:border-muted border-border focus:ring-muted/20 h-8"
            />
          </div>
        </div>
        {/* Search Results */}
        {searchQuery.trim() && (
          <div className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">Search Results</h2>
            {searching ? (
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-32" />
                ))}
              </div>
            ) : hasSearchResults ? (
              <div className="space-y-6">
                {/* Countries */}
                {searchResults.countries.length > 0 && (
                  <div>
                    <h3 className="flex items-center gap-2 mb-2 font-medium text-lg">
                      <Globe className="w-4 h-4" />
                      Countries ({searchResults.countries.length})
                    </h3>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                      {searchResults.countries.map((country) => (
                        <CountryCard key={country.iso2} country={country} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Cities */}
                {searchResults.cities.length > 0 && (
                  <div>
                    <h3 className="flex items-center gap-2 mb-2 font-medium text-lg">
                      <MapPin className="w-4 h-4" />
                      Cities ({searchResults.cities.length})
                    </h3>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                      {searchResults.cities.map(({ city, country }) => (
                        <CityCard
                          key={`${city.id}-${country.iso2}`}
                          city={city}
                          country={country}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-8 text-center">
                <MapPin className="mx-auto mb-2 w-12 h-12 text-muted-foreground" />
                <p className="text-muted-foreground">
                  No destinations found matching "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        )}
        {/* Destinations by Region */}
        {!searchQuery.trim() && (
          <div className="space-y-8">
            {Object.entries(countriesByRegion)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([region, countries]) => (
                <div key={region}>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="flex items-center gap-2 font-semibold text-2xl">
                      <Globe className="w-6 h-6" />
                      {region}
                    </h2>
                    <Badge variant="soft">{countries.length} countries</Badge>
                  </div>
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {countries
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((country) => (
                        <CountryCard key={country.iso2} country={country} />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        )}
        {/* Empty State */}
        {!loading && Object.keys(countriesByRegion).length === 0 && (
          <div className="py-16 text-center">
            <Globe className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
            <h2 className="mb-2 font-semibold text-2xl">
              No Destinations Available
            </h2>
            <p className="text-muted-foreground">
              We're working on adding more destinations. Please check back
              later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function CountryCard({ country }: { country: Country }) {
  return (
    <Link href={`/destinations/${country.iso2}`}>
      <Card className="hover:shadow-md transition-all duration-200 cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <span className="text-3xl">{country.emoji}</span>
            <Badge variant="outline" className="text-xs">
              {country.iso2}
            </Badge>
          </div>
          <CardTitle className="text-lg">{country.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Capital: {country.capital}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>{country.subregion}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              <span>Currency: {country.currency}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function CityCard({ city, country }: { city: any; country: Country }) {
  return (
    <Link
      href={`/destinations/${country.iso2}/${encodeURIComponent(city.name)}`}
    >
      <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <span className="text-2xl">{country.emoji}</span>
            <Badge variant="outline" className="text-xs">
              {city.state_code || country.iso2}
            </Badge>
          </div>
          <CardTitle className="text-lg">{city.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{country.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>Explore attractions</span>
            </div>
            {city.latitude && city.longitude && (
              <div className="flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>
                  {city.latitude.toFixed(2)}, {city.longitude.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
