"use client";

import { Button } from "@/components/ui/button";
import { Tour } from "@/lib/interfaces/services/tours";
import { formatToSlug } from "@/lib/utils/format";
import { getTourData } from "@/lib/utils/get";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TourPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "";
  const country = searchParams.get("country") || "";
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadTours() {
      if (city) {
        const cityName = Array.isArray(city) ? city[0] : city;
        setLoading(true);
        try {
          const tourData = await getTourData(decodeURIComponent(cityName));
          setTours(tourData);
        } catch (error) {
          console.error("Failed to load tour data:", error);
        } finally {
          setLoading(false);
        }
      }
    }

    loadTours();
  }, [city]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-primary border-t-2 border-b-2 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center p-8 min-h-screen">
        <h1 className="mb-4 font-bold text-3xl">No Tours Available</h1>
        <p className="max-w-2xl text-center text-lg">
          We're currently developing tour options for this destination. Please
          check back soon or contact us for custom tour arrangements.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>
          Tours in{" "}
          {city ? decodeURIComponent(Array.isArray(city) ? city[0] : city) : ""}
        </h1>
      </header>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-xl rounded-lg transition-shadow overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={tour.images[0]}
                alt={tour.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold text-xl">{tour.title}</h2>
                <div className="flex items-center">
                  <span className="mr-1 text-amber-500">★</span>
                  <span>{tour.rating}</span>
                </div>
              </div>

              <p className="mb-4 text-gray-600">{tour.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tour.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-2 py-1 rounded text-gray-800 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm">
                  <div className="font-semibold">Duration: {tour.duration}</div>
                  <div>Guide: {tour.tourGuide}</div>
                </div>
                <div className="font-bold text-primary text-xl">
                  {tour.price}
                </div>
              </div>

              <Button
                onClick={() => {
                  const queryParams = new URLSearchParams({
                    city: city,
                    country: country,
                    tour: tour.title,
                    tourCategoryId: tour.tourCategoryId,
                  });

                  router.push(
                    `/luxurious-destinations/${country}/${city}/tours/${formatToSlug(
                      tour.title
                    )}?${queryParams.toString()}`
                  );
                }}
                className="mt-4 w-full"
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
