"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cities } from "@/lib/constants/info/city";
import { useRouter } from "next/navigation";
import {
  formatTitleToCamelCase,
  formatTitleCaseToKebabCase,
} from "@/lib/utils/format";

export default function ExperiencesThroughDestinationsPage() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <header>
        <h1>Explore Our Beautiful Destinations</h1>
        <h5>
          Where the Journey Begins: Discover the World with Paragon Trails
        </h5>
      </header>

      <section className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {cities.map((city) => (
          <div
            key={city.city}
            className="relative flex flex-col shadow-md border border-border rounded-lg h-full overflow-hidden"
          >
            <div className="p-4">
              <h2>
                {city.city}, {city.country}
              </h2>
              <h5>{city.subtitle}</h5>
              <p>{city.quote}</p>

              <Badge
                className="top-5 right-4 absolute"
                variant={city.isPopular ? "successFaded" : "errorFaded"}
              >
                {city.isPopular && "Popular Destination"}
              </Badge>
              <Button
                className="md:w-1/2"
                variant={"fancy"}
                onClick={() =>
                  router.push(
                    `/experiences-through-destinations/${formatTitleCaseToKebabCase(city.city)}?city=${city.city}`
                  )
                }
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
