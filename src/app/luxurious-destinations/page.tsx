"use client";

import { cityattractions } from "@/lib/constants/destinations/city";
import { formatToSlug } from "@/lib/utils/format";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";

export default function LuxuriousDestinations() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
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
      </header>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {groupAndSortByProperties(
          cityattractions,
          "country",
          "region",
          true,
          false,
          false,
          true
        ).map((item, index) => (
          <div
            key={index}
            className="group shadow-md hover:shadow-lg p-6 border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
            onClick={() =>
              router.push(
                `/luxurious-destinations/${formatToSlug(item.city)}-${
                  item.state
                }-${formatToSlug(item.region as string)}-${formatToSlug(
                  item.country
                )}`
              )
            }
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
