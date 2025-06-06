"use client";

import Loading from "@/components/Loading";
import { cities } from "@/lib/constants/info/city-information";
import { CityInfo } from "@/lib/interfaces/general";
import {
  formatTitleToCamelCase,
  formatTitleCaseToKebabCase,
  formatKebabToCamelCase,
} from "@/lib/utils/format";
import { getCityAttractions } from "@/lib/utils/get/attractions";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function CityToursPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [cityData, setCityData] = useState<CityInfo | null>(null);
  const city = searchParams.get("city");
  const [loading, setLoading] = useState(true);

  console.log("City Slug:", city);

  // First useEffect to fetch basic city data
  useEffect(() => {
    if (city) {
      setLoading(true);
      console.log(
        "City IDs:",
        cities.map((c) => c.id)
      );

      // Try multiple approaches to find the city
      let foundCity = cities.find((c) => c.id === city);

      // If not found, try converting formats
      if (!foundCity) {
        console.log(
          "City not found directly. Attempting format conversions..."
        );

        // Try kebab-case conversion
        const cityKebab = formatTitleCaseToKebabCase(city);
        foundCity = cities.find((c) => c.id === cityKebab);
        console.log(`Tried kebab-case: ${cityKebab}, found:`, !!foundCity);

        // Try camelCase conversion
        if (!foundCity) {
          const cityCamel = formatKebabToCamelCase(city);
          foundCity = cities.find((c) => c.id === cityCamel);
          console.log(`Tried camelCase: ${cityCamel}, found:`, !!foundCity);
        }

        // Case insensitive comparison as last resort
        if (!foundCity) {
          foundCity = cities.find(
            (c) =>
              c.id.toLowerCase() === city.toLowerCase() ||
              c.city.toLowerCase() === city.toLowerCase()
          );
          console.log("Tried case-insensitive comparison, found:", !!foundCity);
        }
      }

      console.log("Found City:", foundCity);
      if (foundCity) {
        setCityData({
          ...foundCity,
          testimonials: foundCity.testimonials.map((testimonial) => ({
            id: testimonial.id || "", // Handle missing id
            title: testimonial.title || "", // Handle missing title
            rating: testimonial.rating,
            author: testimonial.author,
            quote: testimonial.content,
            city: testimonial.city,
            date: testimonial.date,
          })),
        });
        setLoading(false);
      } else {
        console.error(`No data found for city: ${city}`);
        console.log(
          "Available cities:",
          cities.map((c) => `${c.id} (${c.city})`).join(", ")
        );
        setLoading(false);
      }
    }
  }, [city]);

  // Second useEffect to fetch attraction data after city data is loaded
  useEffect(() => {
    if (cityData) {
      const fetchAttractions = async () => {
        try {
          const attractions = await getCityAttractions(cityData.city);
          if (attractions && attractions.length > 0) {
            setCityData((prevData) => ({
              ...prevData!,
              attractions: attractions,
            }));
          }
        } catch (error) {
          console.error(
            `Failed to load attractions for ${cityData.city}:`,
            error
          );
        }
      };

      fetchAttractions();
    }
  }, [cityData?.city]);

  console.log("City Data:", cityData);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {cityData && (
        <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
          <header className="mb-8">
            <h1>{cityData.city}</h1>
            <h5 className="mb-4 text-xl">{cityData.subtitle}</h5>
            <blockquote className="pl-4 border-primary border-l-4">
              {cityData.quote}
            </blockquote>
          </header>
          <div className="mt-8 mb-10 max-w-2xl">
            <p className="text-gray-800 leading-relaxed">
              {cityData.description}
            </p>
            <Button
              onClick={() =>
                router.push(
                  `/experiences-through-destinations/${formatTitleCaseToKebabCase(cityData.city)}/tours`
                )
              }
            >
              Find Tours in {cityData.city}
            </Button>
          </div>

          <section className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-6">
            <div className="relative flex flex-col md:col-span-2 lg:col-span-3 shadow-md p-6 border border-border rounded-lg h-full overflow-hidden">
              <h2>Featured Attractions</h2>
              {cityData.attractions && cityData.attractions.length > 0 ? (
                <div className="space-y-8">
                  {cityData.attractions.map((attraction, index) => (
                    <div
                      key={index}
                      className="flex flex-col pb-6 border-b last:border-b-0"
                    >
                      <div className="flex md:flex-row flex-col gap-6 w-full">
                        {attraction.imageUrl && (
                          <div className="relative w-full md:w-1/3 h-56">
                            <Image
                              width={400}
                              height={300}
                              src={attraction.imageUrl}
                              alt={`${attraction.title} in ${cityData.city}`}
                              className="shadow-sm rounded-lg w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3>{attraction.title}</h3>
                            {attraction.rating && (
                              <div className="flex items-center text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i}>
                                    {i < Math.round(attraction.rating)
                                      ? "★"
                                      : "☆"}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          {attraction.location && (
                            <div className="mb-2 text-sm">
                              <span className="inline-flex items-center">
                                <svg
                                  className="mr-1 w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                {attraction.location}
                              </span>
                            </div>
                          )}

                          <p className="mb-4">{attraction.description}</p>

                          <div className="flex flex-wrap gap-2 mt-3">
                            {attraction.priceRange && (
                              <Badge variant={"default"}>
                                {attraction.priceRange}
                              </Badge>
                            )}
                            {attraction.timeOfDay && (
                              <Badge
                                variant={"tertiary"}
                                className="capitalize"
                              >
                                {attraction.timeOfDay}
                              </Badge>
                            )}
                            {attraction.entryFeeCategory && (
                              <Badge
                                variant={"tertiary"}
                                className="capitalize"
                              >
                                {attraction.entryFeeCategory}
                              </Badge>
                            )}
                            {attraction.tags &&
                              attraction.tags.slice(0, 2).map((tag, idx) => (
                                <Badge key={idx} variant={"defaultFaded"}>
                                  {tag}
                                </Badge>
                              ))}
                          </div>
                        </div>
                        <Button
                          onClick={() => {
                            router.push(
                              `/experiences-through-destinations/${cityData.city}/${formatTitleCaseToKebabCase(
                                attraction.title
                              )}?attraction=${attraction.title}&city=${formatTitleToCamelCase(
                                cityData.city
                              )}`
                            );
                          }}
                          className="mt-4 w-fit self-end-safe"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="italic">
                  Explore the beautiful attractions of {cityData.city} with our
                  guided tours.
                </div>
              )}
            </div>

            <div className="relative flex flex-col md:col-span-1 lg:col-span-2 shadow-md p-6 border border-border rounded-lg h-full overflow-hidden">
              <h2>Testimonials</h2>
              {cityData.testimonials && cityData.testimonials.length > 0 ? (
                <div className="space-y-6">
                  {cityData.testimonials
                    .slice(0, 3)
                    .map((testimonial, index) => (
                      <div
                        key={`${testimonial.id}-${testimonial.city}-${index}`}
                        className="bg-card p-4 rounded-lg"
                      >
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>
                                {i < testimonial.rating ? "★" : "☆"}
                              </span>
                            ))}
                          </div>
                          <span className="ml-2 font-medium">
                            {testimonial.title}
                          </span>
                        </div>
                        <blockquote>"{testimonial.quote}"</blockquote>
                        <div className="text-sm">
                          <cite className="font-medium">
                            {testimonial.author}
                          </cite>{" "}
                          - {testimonial.date}
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="italic">No testimonials available yet.</p>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
