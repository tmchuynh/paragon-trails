"use client";

import { cityattractions } from "@/lib/constants/destinations/city";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";

export default function LuxuriousDestinations() {
  const router = useRouter();
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
