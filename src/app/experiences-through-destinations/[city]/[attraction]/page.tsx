"use client";
import { useParams } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { getCityAttractionByName } from "@/lib/utils/get/attractions";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatTitleToCamelCase } from "@/lib/utils/format";

export default function CityAttractionPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const attraction = searchParams.get("attraction");
  const router = useRouter();
  const [attractionData, setAttractionData] = useState<Attraction>();

  console.log(
    `City: ${city}, Attraction: ${attraction}, Search Params: ${searchParams.toString()}`
  );

  useEffect(() => {
    if (city && attraction) {
      const fetchAttractions = async () => {
        try {
          console.log(`Fetching attraction: ${attraction} for city: ${city}`);
          const attractionData = await getCityAttractionByName(
            city,
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
                  alt={
                    attractionData.title || attractionData.name || "Attraction"
                  }
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
              {attractionData.gallery && attractionData.gallery.length > 0 && (
                <div className="gap-2 grid grid-cols-3 mt-4">
                  {attractionData.gallery.slice(0, 6).map((img, idx) => (
                    <div key={idx} className="relative h-24">
                      <Image
                        src={img}
                        alt={`${attractionData.title} gallery image ${idx + 1}`}
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2">
              <header className="mb-6">
                <h1 className="mb-4 font-bold text-3xl md:text-4xl">
                  {attractionData.title || attractionData.name}
                </h1>

                {/* Location */}
                {attractionData.location && (
                  <div className="flex items-center mb-3 text-gray-600">
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
                  </div>
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
                    <span className="text-gray-700">
                      {attractionData.rating} out of 5
                    </span>
                  </div>
                )}

                {/* Tags */}
                {attractionData.tags && attractionData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {attractionData.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 px-3 py-1 rounded-full text-gray-800 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Description */}
              <div className="mb-6 max-w-none prose prose-lg">
                <h2 className="mb-2 font-semibold text-xl">
                  About this attraction
                </h2>
                <p className="text-gray-700">{attractionData.description}</p>
              </div>

              {/* Details Section */}
              <div className="bg-gray-50 mb-6 p-6 rounded-lg">
                <h2 className="mb-4 font-semibold text-xl">
                  Visitor Information
                </h2>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  {attractionData.entryFeeCategory && (
                    <div>
                      <span className="block font-medium text-gray-700">
                        Entry Fee:
                      </span>
                      <span>{attractionData.entryFeeCategory}</span>
                    </div>
                  )}

                  {attractionData.priceRange && (
                    <div>
                      <span className="block font-medium text-gray-700">
                        Price Range:
                      </span>
                      <span>{attractionData.priceRange}</span>
                    </div>
                  )}

                  {attractionData.timeOfDay && (
                    <div>
                      <span className="block font-medium text-gray-700">
                        Best Time to Visit:
                      </span>
                      <span>{attractionData.timeOfDay}</span>
                    </div>
                  )}

                  {attractionData.openingHours && (
                    <div>
                      <span className="block font-medium text-gray-700">
                        Opening Hours:
                      </span>
                      <div className="mt-1 text-sm">
                        {Array.isArray(attractionData.openingHours) ? (
                          <ul className="space-y-1">
                            {attractionData.openingHours.map(
                              (daySchedule, idx) => (
                                <li key={idx} className="flex justify-between">
                                  <span className="font-medium">
                                    {daySchedule.day}:
                                  </span>
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

              {/* Additional Information */}
              {attractionData.tips && (
                <div className="mb-6">
                  <h2 className="mb-2 font-semibold text-xl">Visitor Tips</h2>
                  <ul className="space-y-1 pl-5 list-disc">
                    {Array.isArray(attractionData.tips) ? (
                      attractionData.tips.map((tip, idx) => (
                        <li key={idx} className="text-gray-700">
                          {tip}
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-700">{attractionData.tips}</li>
                    )}
                  </ul>
                </div>
              )}

              {/* Call to Action */}
              <div className="mt-8">
                <button className="bg-primary hover:bg-primary-dark shadow px-6 py-3 rounded-lg text-white transition">
                  Book a Tour
                </button>
              </div>
            </div>
          </div>

          {/* Related Attractions - if available */}
          {attractionData.relatedAttractions &&
            attractionData.relatedAttractions.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-6 font-bold text-2xl">You might also like</h2>
                <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
                  {attractionData.relatedAttractions.map((related, idx) => (
                    <div
                      key={idx}
                      className="shadow-sm border border-gray-200 rounded-lg overflow-hidden"
                    >
                      {related.imageUrl && (
                        <div className="relative h-48">
                          <Image
                            src={related.imageUrl}
                            alt={related.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-medium text-lg">{related.name}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {related.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
