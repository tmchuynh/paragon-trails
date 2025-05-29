"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cityattractions } from "@/lib/constants/destinations/city";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LuxuriousDestinations() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("country");
  const [popularSort, setPopularSort] = useState("none"); // "first", "last", "none"

  // Filter destinations based on search
  const filteredDestinations = cityattractions.filter((item) => {
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

  // First sort by the selected criterion (city or country)
  const sortedDestinations = groupAndSortByProperties(
    filteredDestinations,
    sortBy as keyof (typeof cityattractions)[0],
    secondarySortField as keyof (typeof cityattractions)[0],
    true,
    false,
    false,
    true
  );

  // Then apply popularity sorting if selected
  if (popularSort !== "none") {
    sortedDestinations.sort((a, b) => {
      // If one is popular and the other is not, sort accordingly
      if (a.isPopular !== b.isPopular) {
        if (popularSort === "first") {
          return a.isPopular ? -1 : 1;
        } else {
          return a.isPopular ? 1 : -1;
        }
      }

      // If both have the same popularity status, maintain the original sort order
      return 0;
    });
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Luxurious Destinations</h1>
        <h5>
          Exclusive retreats crafted for unparalleled comfort and elegance
        </h5>
        <blockquote>
          "Every destination felt like a private paradise—luxury redefined in
          every detail. Paragon Trails transformed our travel dreams into
          unforgettable realities." — Emily Carter, Santorini & Amalfi Coast
        </blockquote>
        <p>
          Discover the epitome of luxury travel with Paragon Trails, where every
          destination is a masterpiece of elegance and comfort. From the
          sun-kissed shores of Santorini to the breathtaking Amalfi Coast, our
          exclusive retreats are designed to redefine your travel experience.
          Immerse yourself in the beauty of these iconic locations, where every
          detail is meticulously crafted to ensure your journey is nothing short
          of extraordinary. Whether you're exploring the ancient ruins of Rome
          or savoring the culinary delights of Tuscany, Paragon Trails offers a
          seamless blend of luxury and adventure. Join us as we take you on a
          journey through the world's most luxurious destinations, where every
          moment is an unforgettable experience. Let Paragon Trails transform
          your travel dreams into reality, creating memories that will last a
          lifetime. Experience the world like never before with our curated
          selection of luxurious retreats, where comfort meets elegance in every
          detail. Discover the art of luxury travel with Paragon Trails, where
          every destination is a gateway to unparalleled comfort and
          sophistication.
        </p>
      </header>

      <div className="space-y-4 mb-8">
        <div className="flex md:flex-row flex-col items-start md:items-center gap-4">
          <div className="w-full md:w-1/2">
            <Input
              type="text"
              className="w-full"
              placeholder="Search by city, country, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="space-x-2">
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

            <div className="space-x-2">
              <Label>
                <strong>Popular:</strong>
              </Label>
              <Select value={popularSort} onValueChange={setPopularSort}>
                <SelectTrigger>
                  <SelectValue placeholder="Select popularity filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No priority</SelectItem>
                  <SelectItem value="first">Show first</SelectItem>
                  <SelectItem value="last">Show last</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground text-sm">
          {filteredDestinations.length} destinations found
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedDestinations.map((item, index) => (
          <div
            key={index}
            className="group relative shadow-md hover:shadow-lg p-6 border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
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
            <h2 className="w-2/3 font-semibold text-2xl underline-offset-2 group-hover:underline">
              {item.city}
            </h2>

            {item.isPopular && (
              <Badge
                size={"sm"}
                variant={"outline"}
                className="top-4 right-4 absolute uppercase"
              >
                Popular
              </Badge>
            )}

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
