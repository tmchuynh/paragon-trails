"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { homestaysAndHeritageStays } from "@/lib/constants/services/homestay/destinations";
import { formatToSlug, removeAccents } from "@/lib/utils/format";
import { generateRandomString } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";

export default function HomestayDestinations() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Where Hospitality Meets Heritage</h1>
        <h5>Explore destinations offering immersive homestay experiences</h5>
        <blockquote>
          “Every destination felt personal because every stay came with a story,
          a face, and a warm local welcome.” – Priya M., Cultural Explorer
        </blockquote>
        <p>
          Discover our unique homestay destinations, where you can experience
          local culture and hospitality like never before. Each destination
          offers a blend of comfort and authenticity, making your stay truly
          memorable.
        </p>
      </header>

      {homestaysAndHeritageStays.map((country, index) => (
        <div
          key={`${country.country}-${index}-${generateRandomString(6)}`}
          className="mb-16"
        >
          <h2 className="mb-6 pb-2 border-gray-700 border-b">
            {country.country}
          </h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {country.locations.map((location, index) => (
              <div
                key={`${country.country}-${index}`}
                className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative py-3 border-tertiary border-b-2">
                  <div className="px-6">
                    <Badge className="right-6 absolute" variant={"secondary"}>
                      {location.stayType}
                    </Badge>
                    <h3 className="mt-4 mb-1 font-semibold text-xl">
                      {location.city}
                    </h3>
                    <p className="mb-3 text-gray-600 text-sm">
                      {location.state
                        ? location.state === location.region
                          ? ""
                          : `${location.state}, `
                        : ""}
                      {location.region}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-sm">{location.description}</p>

                  <div>
                    <strong>Cultural Highlights:</strong>
                    <ul className="ml-2 text-sm list-disc list-inside">
                      {location.culturalHighlights.map((highlight, index) => (
                        <li key={`${index}-${generateRandomString(4)}`}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-4 w-full">
                  <Button
                    size={"sm"}
                    variant={"secondary"}
                    onClick={() => {
                      router.push(
                        `/services/homestays-and-heritage-stays/homestay-destinations/${formatToSlug(
                          removeAccents(location.city)
                        )}`
                      );
                    }}
                  >
                    Meet the Families at {location.city}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
