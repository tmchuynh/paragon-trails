"use client";
import { cityattractions } from "@/lib/constants/destinations/city";
import { featuredArray, groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";

export default function PopularDestinations() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
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

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featuredArray(
          groupAndSortByProperties(
            cityattractions,
            "country",
            "region",
            true,
            false,
            false,
            true
          )
        ).map((item, index) => (
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
