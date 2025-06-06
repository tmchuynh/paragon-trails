"use client";
import { useParams } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { getCityAttractionByName } from "@/lib/utils/get/attractions";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  formatTitleToCamelCase,
  formatCamelCaseToKebabCase,
} from "@/lib/utils/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CityAttractionPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const attraction = searchParams.get("attraction");
  const router = useRouter();
  const [attractionData, setAttractionData] = useState<Attraction>();

  useEffect(() => {
    if (city && attraction) {
      const fetchAttractions = async () => {
        try {
          console.log(`Fetching attraction: ${attraction} for city: ${city}`);
          const attractionData = await getCityAttractionByName(
            formatCamelCaseToKebabCase(city),
            attraction
          );
          console.log("Fetched attraction data:", attractionData);

          if (attractionData) {
            // Set the attraction data directly as it's a single object
            setAttractionData(attractionData);
          } else {
            console.error(
              `No attraction found with name ${attraction} in ${city}`
            );
          }
        } catch (error) {
          console.error(`Failed to load attractions for ${city}:`, error);
        }
      };

      fetchAttractions();
    }
  }, [city, attraction]); // Added attraction as a dependency

  return (
    <>
      {attractionData ? (
        <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
          <div className="flex lg:flex-row flex-col gap-8">
            <div className="w-full lg:w-1/2">
              {attractionData.imageUrl ? (
                <Image
                  src={attractionData.imageUrl}
                  alt={attractionData.title || "Attraction"}
                  width={800}
                  height={500}
                  className="shadow-lg rounded-lg w-full h-auto object-cover"
                  priority
                />
              ) : (
                <div className="flex justify-center items-center bg-gray-200 rounded-lg h-64">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}

              {/* Image Gallery - if available */}
              {attractionData.imageUrl && (
                <div className="gap-2 grid grid-cols-3 mt-4">
                  <Image
                    src={attractionData.imageUrl}
                    alt={`${attractionData.title} gallery image`}
                    fill
                    className="rounded object-cover"
                  />
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2">
              <header className="mb-6">
                <h1>{attractionData.title}</h1>

                {/* Location */}
                {attractionData.location && (
                  <h5 className="flex items-center">
                    <svg
                      className="mr-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
                    <span>{attractionData.location}</span>
                  </h5>
                )}

                {/* Rating */}
                {attractionData.rating && (
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.round(attractionData.rating || 0)
                            ? "★"
                            : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="">{attractionData.rating} out of 5</span>
                  </div>
                )}

                {/* Tags */}
                {attractionData.tags && attractionData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {attractionData.tags.map((tag, idx) => (
                      <Badge key={idx}>{tag}</Badge>
                    ))}
                  </div>
                )}
              </header>

              {/* Description */}
              <div className="mb-6 max-w-none prose prose-lg">
                <h3 className="underline underline-offset-2 capitalize">
                  About this attraction
                </h3>
                <p className="">{attractionData.description}</p>
              </div>

              {/* Details Section */}
              <div className="flex flex-col shadow-md mb-6 p-6 border border-border rounded-lg overflow-hidden">
                <h3>Visitor Information</h3>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  {attractionData.entryFeeCategory && (
                    <div>
                      <h5 className="text-secondary text-sm underline underline-offset-2 decoration-1 decoration-secondary">
                        Entry Fee:
                      </h5>
                      <span className="capitalize">
                        {attractionData.entryFeeCategory}
                      </span>
                    </div>
                  )}

                  {attractionData.priceRange && (
                    <div>
                      <h5 className="text-secondary text-sm underline underline-offset-2 decoration-1 decoration-secondary">
                        Price Range:
                      </h5>
                      <span className="capitalize">
                        {attractionData.priceRange}
                      </span>
                    </div>
                  )}

                  {attractionData.timeOfDay && (
                    <div>
                      <h5 className="text-secondary text-sm underline underline-offset-2 decoration-1 decoration-secondary">
                        Best Time to Visit:
                      </h5>
                      <span className="capitalize">
                        {attractionData.timeOfDay}
                      </span>
                    </div>
                  )}

                  {attractionData.openingHours && (
                    <div>
                      <h5 className="text-secondary text-sm underline underline-offset-2 decoration-1 decoration-secondary">
                        Opening Hours:
                      </h5>
                      <div className="mt-1 text-sm">
                        {Array.isArray(attractionData.openingHours) ? (
                          <ul className="space-y-1">
                            {attractionData.openingHours.map(
                              (daySchedule, idx) => (
                                <li key={idx} className="flex justify-between">
                                  <h5>{daySchedule.day}:</h5>
                                  <span>
                                    {daySchedule.availableHours?.map(
                                      (hour, hourIdx) => (
                                        <span key={hourIdx}>
                                          {hour.from} - {hour.to}
                                          {hourIdx <
                                          daySchedule.availableHours.length - 1
                                            ? ", "
                                            : ""}
                                        </span>
                                      )
                                    )}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        ) : (
                          <span>{String(attractionData.openingHours)}</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <Button
                  onClick={() => {
                    const attractionName = attractionData.title || "";
                    router.push(
                      `/experiences-through-destinations/${formatCamelCaseToKebabCase(city as string)}/tours?attractionFilter=${encodeURIComponent(attractionData.id)}`
                    );
                  }}
                  className="w-full"
                >
                  Find Tours Going to {attractionData.title}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="mb-2 font-bold text-2xl">Attraction Not Found</h2>
            <p className="text-gray-600">
              We couldn't find information about this attraction.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
