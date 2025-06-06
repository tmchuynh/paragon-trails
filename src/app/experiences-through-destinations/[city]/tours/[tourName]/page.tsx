"use client";

import { Tour } from "@/lib/interfaces/services/tours";
import { getTourById } from "@/lib/utils/get/tours";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TourDetailsPage() {
  const searchParams = useSearchParams();

  const tourId = searchParams.get("tourId");
  const guideId = searchParams.get("guideId");
  const city = searchParams.get("city");
  const selectedCurrency = searchParams.get("currency");

  const [tourData, setTourData] = useState<Tour>();

  useEffect(() => {
    if (!tourId || !guideId || !city || !selectedCurrency) {
      console.warn("Missing required parameters for fetching tour details.");
      return;
    }
    async function fetchTourDetails() {
      try {
        const response = await getTourById(city as string, tourId as string);
        if (!response) {
          console.warn(`No tour found with ID: ${tourId}`);
          return;
        }
        setTourData(response);
        console.log("Tour details fetched successfully:", response);
      } catch (error) {
        console.error("Error fetching tour details:", error);
      }
    }
    fetchTourDetails();
  }, [tourId, city, guideId, selectedCurrency]);

  console.log("Tour Data:", tourData);

  if (!tourId || !guideId || !city || !selectedCurrency) {
    return (
      <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
        <h1 className="mb-6 font-bold text-4xl">Tour Details</h1>
        <p className="mb-8 max-w-2xl text-center text-lg">
          Please select a tour to view its details.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      <h1 className="mb-6 font-bold text-4xl">Tour Details</h1>
      <p className="mb-8 max-w-2xl text-center text-lg">
        Explore the details of your selected tour, including itinerary, pricing,
        and booking options.
      </p>

      <header>
        <h1 className="text-start">Explore Tours</h1>
      </header>
    </div>
  );
}
