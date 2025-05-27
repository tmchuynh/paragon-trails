"use client";

import { tourGuides } from "@/lib/constants/staff/tourGuides";
import { filterArrayByProperty } from "@/lib/utils/sort";

export default function TourPage({
  params,
}: {
  params: { country: string; city: string; info: string };
}) {
  // Directly destructure the params object
  const { country, city, info } = params;

  const value = info.replace(/-/g, " "); // Replace hyphens with spaces to match the property value
  const filteredTourGuided = filterArrayByProperty(tourGuides, "city", city);

  console.log("Filtered Tour Guides:", filteredTourGuided);
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <h1>Tour Information Details</h1>
      <p className="max-w-2xl text-center text-lg">
        Here you can find detailed information about the selected tour,
        including itinerary, pricing, and booking options.
      </p>
    </div>
  );
}
