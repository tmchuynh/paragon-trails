"use client";

import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cityattractions } from "@/lib/constants/destinations/city";
import { Tour } from "@/lib/interfaces/services/tours";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
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

  const cityInfo = cityattractions.find(
    (attraction) =>
      attraction.city.toLowerCase() ===
      (Array.isArray(city) ? city[0] : city).toLowerCase()
  );

  console.log("City Info:", cityInfo);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center p-8 min-h-screen">
        <h1 className="mb-4 font-bold text-3xl">No Tours Available</h1>
        <p className="max-w-2xl text-center text-lg">
          We're currently developing tour options for {city}. Please check back
          soon or contact us for custom tour arrangements.
        </p>
        <ContactDepartmentCard department="Custom Tour Arrangements" />
      </div>
    );
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>
          Tours in{" "}
          {city ? decodeURIComponent(Array.isArray(city) ? city[0] : city) : ""}
          : {cityInfo?.subtitle}
        </h1>
        <blockquote>{cityInfo?.quote}</blockquote>
      </header>

      <section>
        <ContactDepartmentCard department="Concierge Services" />
      </section>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-card shadow-lg hover:shadow-xl border border-border rounded-lg h-full transition-shadow overflow-hidden"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="relative h-64">
                  <Image
                    src={tour.images[0]}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  <Badge
                    variant={"outline"}
                    className="top-4 right-4 absolute uppercase"
                  >
                    {tour.tourCategoryId}
                  </Badge>
                </div>
                <div className="px-6">
                  <div className="flex flex-col justify-between items-start mb-2">
                    <h2>{tour.title}</h2>
                    {displayRatingStars(tour.rating)}
                  </div>
                  <p className="mb-4">{tour.description}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between mb-7 px-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.tags?.map((tag, i) => (
                    <Badge size={"lg"} variant={"secondary"} key={i}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center my-4">
                  <div className="space-y-2">
                    <h5 className="text-tertiary">
                      <strong className="text-foreground">Duration:</strong>{" "}
                      {tour.duration}
                    </h5>
                    <h5 className="text-tertiary">
                      <strong className="text-foreground">Guide:</strong>{" "}
                      {tour.tourGuide}
                    </h5>
                  </div>
                  <h2>{tour.price}</h2>
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
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
