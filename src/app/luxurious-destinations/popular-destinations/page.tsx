"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities } from "@/lib/constants/info/city";
import { featuredArray, groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PopularDestinations() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("country");

  // Filter destinations based on search
  const filteredDestinations = cities.filter((item) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      item.city.toLowerCase().includes(query) ||
      item.country.toLowerCase().includes(query) ||
      (item.region && item.region.toLowerCase().includes(query)) ||
      (item.state && item.state.toLowerCase().includes(query))
    );
  });

  // Determine secondary sort field
  const secondarySortField = sortBy === "country" ? "region" : "country";

  // Sort by the selected criterion (city or country)
  const sortedDestinations = groupAndSortByProperties(
    filteredDestinations,
    sortBy as keyof (typeof cities)[0],
    secondarySortField as keyof (typeof cities)[0],
    true,
    false,
    false,
    true
  );

  // Get only the popular/featured destinations
  const finalDestinations = featuredArray(sortedDestinations);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>World-Class Journeys, Unforgettable Places</h1>
        <h5>
          Explore our most sought-after escapes, curated for the discerning
          traveler.
        </h5>
        <blockquote>
          "Every destination felt handpicked just for me. From the beaches of
          Bali to the streets of Florence, every moment was a perfect memory in
          the making." — Rachel M., traveled to Italy and Indonesia
        </blockquote>
      </header>

      <div className="space-y-4 mb-8">
        <div className="flex md:flex-row flex-col items-start md:items-center gap-4">
          <div className="w-full">
            <Label>
              <strong>Search</strong>
            </Label>
            <Input
              type="text"
              className="mt-2"
              placeholder="Search by city, country, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <Label>
                <strong>Sort by:</strong>
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sort option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city">City</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground text-sm">
          {finalDestinations.length} destinations found
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {finalDestinations.map((item, index) => (
          <div
            key={index}
            className="group shadow-md hover:shadow-lg p-6 border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
            onClick={() => {
              // Use query parameters instead of path parameters
              const queryParams = new URLSearchParams({
                city: item.city,
                country: item.country,
              });

              if (item.region) {
                queryParams.append("region", item.region as string);
              }

              if (item.state && item.state !== item.region) {
                queryParams.append("state", item.state);
              }

              router.push(
                `/luxurious-destinations/${
                  item.city
                }/details?${queryParams.toString()}`
              );
            }}
          >
            <h2 className="font-semibold text-2xl underline-offset-2 group-hover:underline">
              {item.city}
            </h2>
            <p>
              {(() => {
                const locationParts = [];

                // Add state only if it exists
                if (item.state) locationParts.push(item.state);

                // Add region only if it exists AND is different from state
                if (item.region && item.region !== item.state)
                  locationParts.push(item.region);

                // Always add country if it exists
                if (item.country) locationParts.push(item.country);

                return locationParts.join(", ");
              })()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
