"use client";

import {
  findAttractionsByCityAndCountry,
  getCityAttractions,
} from "@/lib/utils/get";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DestinationDetailsPage() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const city = searchParams.get("city") || "";
  const country = searchParams.get("country") || "";
  const region = searchParams.get("region") || "";
  const state = searchParams.get("state") || "";

  // Use original values instead of formatting them
  const formattedCity = city;
  const formattedRegion = region;
  const formattedCountry = country;

  // Get attractions data for this destination
  const attractions = findAttractionsByCityAndCountry(
    formattedCity,
    formattedCountry
  );

  const [cardData, setCardData] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getCityAttractions(city, region, country);
        setCardData(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, region, country]);

  return (
    <div className="flex flex-col justify-center items-center mx-auto p-4 max-w-6xl min-h-screen">
      <h1 className="mb-4 font-bold text-3xl text-center">
        {formattedCity}, {formattedRegion}, {formattedCountry}
      </h1>
      <p className="mb-8 max-w-2xl text-center text-lg">
        Explore our exclusive collection of luxurious destinations around the
        world. Each destination offers unique experiences and unparalleled
        comfort.
      </p>

      {attractions.length > 0 && (
        <div className="w-full">
          <h2 className="mb-4 font-semibold text-2xl">Top Attractions</h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="shadow-md hover:shadow-lg p-4 border rounded-lg transition-shadow"
              >
                <h3 className="mb-2 font-medium text-xl">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
