"use client";

import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCityAttractions, type City } from "@/lib/api/destinations";
import {
  Activity,
  ArrowLeft,
  Calendar,
  Car,
  Globe,
  MapPin,
  Navigation,
  ShoppingBag,
  Star,
  Users,
  UtensilsCrossed,
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
  } | null>(null);
  const [loading, setLoading] = useState(true);

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

    async function loadCityData() {
      try {
        const result = await getCityAttractions({
          cityName: decodeURIComponent(resolvedParams!.cityName),
          countryISO2: resolvedParams!.countryISO2.toUpperCase(),
          limit: 1, // We only need the city data
        });
        setData({ city: result.city });
      } catch (error) {
        console.error("Error loading city data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCityData();
  }, [resolvedParams]);

  if (loading) {
    return <Loading />;
  }

  if (!data || !data.city) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <MapPin className="mx-auto mb-4 w-16 h-16" />
          <h1 className="mb-2 font-semibold text-2xl">City Not Found</h1>
          <p className="mb-4">
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

  const { city } = data;

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

        {/* City Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="flex justify-center items-center gap-2 mb-4 font-bold text-4xl lg:text-5xl">
            Welcome to {city.name}
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg">
            Discover the best attractions, activities, dining, and shopping
            experiences in this beautiful destination.
          </p>

          {/* City Info Cards */}
          <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mx-auto mb-8 max-w-4xl">
            <Card>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">Location</span>
                </div>
                <p className="mt-1">
                  {city.country_code}
                  {city.state_code && `, ${city.state_code}`}
                </p>
              </CardContent>
            </Card>

            {city.latitude && city.longitude && (
              <Card>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <Navigation className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Coordinates</span>
                  </div>
                  <p className="mt-1">
                    {city.latitude.toFixed(4)}, {city.longitude.toFixed(4)}
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="font-medium">Explore</span>
                </div>
                <p className="mt-1">Multiple categories available</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Navigation Grid */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Attractions Card */}
          <Card className="group bg-gradient-to-br from-yellow-50 to-orange-100 hover:shadow-md border-yellow-200 transition-all duration-300 cursor-pointer">
            <Link
              href={
                resolvedParams
                  ? `/destinations/${resolvedParams.countryISO2}/${resolvedParams.cityName}/attractions`
                  : "#"
              }
            >
              <CardHeader className="pb-2 text-center">
                <div className="flex justify-center items-center bg-yellow-500 mx-auto mb-4 p-4 rounded-full w-16 h-16 transition-colors">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-yellow-800">
                  Attractions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-sm text-yellow-700">
                  Discover must-see sights, landmarks, and tourist attractions
                </p>
                <Badge variant="gradient">Explore Now</Badge>
              </CardContent>
            </Link>
          </Card>

          {/* Activities Card */}
          <Card className="group bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-md border-green-200 transition-all duration-300 cursor-pointer">
            <Link
              href={
                resolvedParams
                  ? `/destinations/${resolvedParams.countryISO2}/${resolvedParams.cityName}/activities`
                  : "#"
              }
            >
              <CardHeader className="pb-2 text-center">
                <div className="flex justify-center items-center bg-green-500 mx-auto mb-4 p-4 rounded-full w-16 h-16 transition-colors">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-800 text-xl">
                  Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-green-700 text-sm">
                  Entertainment, sports, leisure activities and fun experiences
                </p>
                <Badge variant="gradient">Find Activities</Badge>
              </CardContent>
            </Link>
          </Card>

          {/* Food Card */}
          <Card className="group bg-gradient-to-br from-red-50 to-pink-100 hover:shadow-md border-red-200 transition-all duration-300 cursor-pointer">
            <Link
              href={
                resolvedParams
                  ? `/destinations/${resolvedParams.countryISO2}/${resolvedParams.cityName}/food`
                  : "#"
              }
            >
              <CardHeader className="pb-2 text-center">
                <div className="flex justify-center items-center bg-red-500 mx-auto mb-4 p-4 rounded-full w-16 h-16 transition-colors">
                  <UtensilsCrossed className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-red-800 text-xl">
                  Food & Dining
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-red-700 text-sm">
                  Restaurants, cafes, bars and local culinary experiences
                </p>
                <Badge variant="gradient">Discover Food</Badge>
              </CardContent>
            </Link>
          </Card>

          {/* Shopping Card */}
          <Card className="group bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-md border-blue-200 transition-all duration-300 cursor-pointer">
            <Link
              href={
                resolvedParams
                  ? `/destinations/${resolvedParams.countryISO2}/${resolvedParams.cityName}/shopping`
                  : "#"
              }
            >
              <CardHeader className="pb-2 text-center">
                <div className="flex justify-center items-center bg-blue-500 mx-auto mb-4 p-4 rounded-full w-16 h-16 transition-colors">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-800 text-xl">
                  Shopping
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-blue-700 text-sm">
                  Shops, markets, services and commercial establishments
                </p>
                <Badge variant="gradient">Go Shopping</Badge>
              </CardContent>
            </Link>
          </Card>

          {/* Rentals Card */}
          <Card className="group bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-md border-purple-200 transition-all duration-300 cursor-pointer">
            <Link
              href={
                resolvedParams
                  ? `/destinations/${resolvedParams.countryISO2}/${resolvedParams.cityName}/rentals`
                  : "#"
              }
            >
              <CardHeader className="pb-2 text-center">
                <div className="flex justify-center items-center bg-purple-500 mx-auto mb-4 p-4 rounded-full w-16 h-16 transition-colors">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-purple-800 text-xl">
                  Rentals
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-purple-700 text-sm">
                  Car rentals, equipment and vehicle rental services
                </p>
                <Badge variant="gradient">Find Rentals</Badge>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="pt-10">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 text-center">
            <div>
              <MapPin className="mx-auto mb-2 w-8 h-8 text-blue-600" />
              <h3 className="font-medium">Location</h3>
              <p className="text-sm">
                Explore {city.name} with detailed maps and navigation
              </p>
            </div>
            <div>
              <Calendar className="mx-auto mb-2 w-8 h-8 text-green-600" />
              <h3 className="font-medium">Plan Your Visit</h3>
              <p className="text-sm">
                Find the best times and places to visit various attractions
              </p>
            </div>
            <div>
              <Globe className="mx-auto mb-2 w-8 h-8 text-purple-600" />
              <h3 className="font-medium">Local Insights</h3>
              <p className="text-sm">
                Discover hidden gems and local recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
