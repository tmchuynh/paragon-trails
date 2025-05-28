"use client";
import { cityattractions } from "@/lib/constants/destinations/city";
import { featuredArray, groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PopularDestinations() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("country");
  const [popularSort, setPopularSort] = useState("first"); // Default to showing popular first

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

  // Get the final destinations (either all filtered ones or only featured ones)
  const finalDestinations =
    popularSort === "none"
      ? featuredArray(sortedDestinations)
      : sortedDestinations.filter((item) => item.isPopular);

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
          <div className="w-full md:w-1/2">
            <input
              type="text"
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary w-full focus:outline-none"
              placeholder="Search by city, country, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="space-x-2">
              <span>Sort by:</span>
              <select
                className="px-3 py-1 border border-border rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="city">City</option>
                <option value="country">Country</option>
              </select>
            </div>

            <div className="space-x-2">
              <span>Popular:</span>
              <select
                className="px-3 py-1 border border-border rounded-md"
                value={popularSort}
                onChange={(e) => setPopularSort(e.target.value)}
              >
                <option value="first">Show first</option>
                <option value="last">Show last</option>
                <option value="none">No priority</option>
              </select>
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
