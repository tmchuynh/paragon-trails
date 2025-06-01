"use client";

import Loading from "@/components/Loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tour } from "@/lib/interfaces/services/tours";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { getTourData } from "@/lib/utils/get";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TourPage() {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const city = searchParams.get("city") || "";
  const tourName = searchParams.get("tour") || "";
  const tourGuide = searchParams.get("tourGuide") || "";
  const tourCategoryId = searchParams.get("tourCategoryId") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTourData(city);
        const tourData = data.find(
          (t: Tour) =>
            t.title.toLowerCase() === tourName.toLowerCase() &&
            t.tourCategoryId === tourCategoryId
        );
        if (!tourData) {
          console.error("Tour not found for the given parameters");
          return;
        }
        setTour(tourData);
        console.log("Found tour:", tourData);
      } catch (error) {
        console.error("Failed to load tour data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, tourName]);

  if (loading) {
    return <Loading />;
  }

  if (!tour) {
    return (
      <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
        <header>
          <h1>Tour Not Found</h1>

          <h5> Sorry, we couldn't find the tour you're looking for.</h5>
        </header>
        <Button
          onClick={() => window.history.back()}
          className="bg-primary text-white"
        >
          Back to Tours
        </Button>
      </div>
    );
  }

  const queryParams = new URLSearchParams({
    city: city,
    tourName: tourName,
    tourGuide: tourGuide,
    tourCategoryId: tourCategoryId,
  });
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>{tour.title}</h1>
        <h5>
          <span>Duration: {tour.duration}</span>
          {displayRatingStars(tour.rating)}
        </h5>
      </header>

      {/* Main content */}
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        {/* Left column - Tour details */}
        <div className="lg:col-span-2">
          {/* Description */}
          <div className="mb-8">
            <p>{tour.description}</p>

            {/* Tour features */}
            <div className="gap-4 grid grid-cols-2 mt-6">
              {tour.isHistorical && (
                <div className="flex items-center">
                  <div className="flex justify-center items-center bg-blue-100 mr-3 rounded-full w-10 h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <span>Historical</span>
                </div>
              )}

              {tour.isRomantic && (
                <div className="flex items-center">
                  <div className="flex justify-center items-center bg-red-100 mr-3 rounded-full w-10 h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <span>Romantic</span>
                </div>
              )}

              {tour.isOffTheBeatenPath && (
                <div className="flex items-center">
                  <div className="flex justify-center items-center bg-yellow-100 mr-3 rounded-full w-10 h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </div>
                  <span>Off The Beaten Path</span>
                </div>
              )}

              {tour.isLocalExperience && (
                <div className="flex items-center">
                  <div className="flex justify-center items-center bg-purple-100 mr-3 rounded-full w-10 h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <span>Local Experience</span>
                </div>
              )}
            </div>
          </div>

          {/* Gallery */}
          <div className="relative mb-6 rounded-lg overflow-hidden aspect-[16/9]">
            {tour.images && tour.images.length > 0 && (
              <Image
                src={tour.images[0]}
                alt={tour.title}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* More images */}
          {tour.images && tour.images.length > 1 && (
            <div className="gap-2 grid grid-cols-4 mb-6">
              {tour.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden aspect-square"
                >
                  <Image
                    src={image}
                    alt={`${tour.title} - image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tour.tags?.map((tag, i) => (
              <Badge key={i} size={"lg"} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* FAQs */}
          {tour.faqs && tour.faqs.length > 0 && (
            <div className="mb-8">
              <h2>Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {tour.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>
                      <h3>{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>

        {/* Right column - Booking */}
        <div className="lg:col-span-1">
          {/* Tour guide */}
          <div className="mb-8">
            <h2>Your Tour Guide</h2>
            <div className="flex items-center">
              <Image
                src="/images/guides/default-avatar.jpg"
                alt={tourGuide}
                width={64}
                height={64}
                className="shadow mr-4 rounded-full w-16 h-16 object-cover object-center"
              />
              <div>
                <h3 className="font-bold text-lg">{tourGuide}</h3>
              </div>
            </div>
          </div>
          <Button
            onClick={() =>
              router.push(`/book-your-trip-today?${queryParams.toString()}`)
            }
            className="w-full"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
