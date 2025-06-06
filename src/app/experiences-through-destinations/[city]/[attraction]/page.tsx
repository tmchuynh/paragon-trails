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

  useEffect(() => {
    if (city && attraction) {
      const fetchAttractions = async () => {
        try {
          const attractions = await getCityAttractionByName(city, attraction);
          if (attractions && attractions.length > 0) {
            setAttractionData((prevData) => ({
              ...prevData!,
              attractions: attractions,
            }));
          }
        } catch (error) {
          console.error(`Failed to load attractions for ${city}:`, error);
        }
      };

      fetchAttractions();
    }
  }, [city]);

  return (
    <>
      {attractionData && (
        <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
          <div className="flex gap-7">
            <Image
              src={attractionData.imageUrl}
              alt={attractionData.title}
              width={500}
              height={300}
              className="shadow-lg rounded-lg w-full md:w-1/2"
              priority
            />
            <header>
              <h1>{attractionData.title}</h1>
              <p>{attractionData.description}</p>
            </header>
          </div>
        </div>
      )}
    </>
  );
}
