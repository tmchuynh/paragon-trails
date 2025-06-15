"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  getDestinationCities,
  type City,
  type Country,
} from "@/lib/api/destinations";
import {
  ArrowLeft,
  Building,
  Globe,
  MapPin,
  Phone,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CountryPageProps {
  params: Promise<{
    countryISO2: string;
  }>;
}

export default function CountryPage({ params }: CountryPageProps) {
  const router = useRouter();
  const [data, setData] = useState<{ country: Country; cities: City[] } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [resolvedParams, setResolvedParams] = useState<{
    countryISO2: string;
  } | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolved = await params;
      setResolvedParams(resolved);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (!resolvedParams) return;

    async function loadCountryData() {
      try {
        const result = await getDestinationCities({
          countryISO2: resolvedParams!.countryISO2.toUpperCase(),
          limit: 100,
        });
        setData(result);
        setFilteredCities(result.cities);
      } catch (error) {
        console.error("Error loading country data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCountryData();
  }, [resolvedParams]);

  useEffect(() => {
    if (!data) return;

    if (!searchQuery.trim()) {
      setFilteredCities(data.cities);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = data.cities.filter(
      (city) =>
        city.name.toLowerCase().includes(query) ||
        (city.state_code && city.state_code.toLowerCase().includes(query))
    );
    setFilteredCities(filtered);
  }, [searchQuery, data]);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <Globe className="mx-auto mb-4 w-16 h-16 text-muted-foreground" />
          <h1 className="mb-2 font-semibold text-2xl">Country Not Found</h1>
          <p className="mb-4 text-muted-foreground">
            The country with code "{resolvedParams?.countryISO2 || "unknown"}"
            could not be found.
          </p>
          <Button asChild>
            <Link href="/destinations">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Destinations
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const { country, cities } = data;

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/destinations">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Destinations
          </Link>
        </Button>
        {/* Country Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{country.emoji}</span>
            <div>
              <h1 className="font-bold text-4xl">{country.name}</h1>
              <p className="text-muted-foreground text-xl">
                {country.subregion}, {country.region}
              </p>
            </div>
          </div>

          {/* Country Info */}
          <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mb-6">
            <Card>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Capital:</span>
                  <span className="font-medium">{country.capital}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Currency:</span>
                  <span className="font-medium">
                    {country.currency} {country.currency_symbol}
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Phone Code:</span>
                  <span className="font-medium">+{country.phone_code}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Search Cities */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="top-1/2 left-3 absolute w-4 h-4 text-muted-foreground transform -translate-y-1/2" />
            <Input
              placeholder="Search cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 focus:border-muted border-border focus:ring-muted/20 h-8"
            />
          </div>
        </div>
        {/* Cities Grid */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="flex items-center gap-2 font-semibold text-2xl">
              <MapPin className="w-6 h-6" />
              Cities in {country.name}
            </h2>
            <Badge variant="soft">
              {filteredCities.length} of {cities.length} cities
            </Badge>
          </div>

          {filteredCities.length > 0 ? (
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredCities.map((city) => (
                <CityCard key={city.id} city={city} country={country} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <MapPin className="mx-auto mb-4 w-12 h-12 text-muted-foreground" />
              <h3 className="mb-2 font-medium text-lg">No Cities Found</h3>
              <p className="text-muted-foreground">
                {searchQuery.trim()
                  ? `No cities match "${searchQuery}" in ${country.name}`
                  : `No cities available for ${country.name}`}
              </p>
              {searchQuery.trim() && (
                <Button
                  variant="outline"
                  onClick={() => setSearchQuery("")}
                  className="mt-4"
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CityCard({ city, country }: { city: City; country: Country }) {
  return (
    <Link
      href={`/destinations/${country.iso2}/${encodeURIComponent(city.name)}`}
    >
      <Card className="hover:shadow-md transition-all duration-200 cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{country.emoji}</span>
              <CardTitle className="text-lg">{city.name}</CardTitle>
            </div>
            {city.state_code && (
              <Badge variant="outlineGradient" className="text-xs">
                {city.state_code}
              </Badge>
            )}
          </div>
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
