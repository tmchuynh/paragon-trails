"use client";

import TourCard from "@/components/cards/TourCard";
import Loading from "@/components/Loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cityattractions } from "@/lib/constants/info/city";
import { Tour } from "@/lib/interfaces/services/tours";
import { cn } from "@/lib/utils";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatToSlug } from "@/lib/utils/format";
import {
  findGuideBySpecialty,
  getAllTours,
  getTourData,
  getToursByCategory,
} from "@/lib/utils/get";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TourPage() {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Date>();
  const [participants, setParticipants] = useState(2);
  const searchParams = useSearchParams();
  const router = useRouter();
  const city = searchParams.get("city") || "";
  const tourName = searchParams.get("tour") || "";
  const tourGuide = searchParams.get("tourGuide") || "";
  const tourCategoryId = searchParams.get("tourCategoryId") || "";
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [allTours, setAllTours] = useState<Tour[]>([]);
  const [tourGuides, setTourGuides] = useState<{ [key: string]: string }>({});

  const cityInfo = cityattractions.find(
    (attraction) => attraction.city.toLowerCase() === city.toLowerCase()
  );

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

        await fetchTourGuides();

        console.log("Found tour:", tourData);
      } catch (error) {
        console.error("Failed to load tour data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, tourName]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getAllTours();
        setAllTours(data);
        if (data.length > 0) {
          const filteredTours = getToursByCategory(data, tourCategoryId);
          setFilteredTours(filteredTours);
        }
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [tourCategoryId]);

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

  const totalPrice = tour
    ? (() => {
        const priceMatch = tour.price.match(/^\$?(\d+(\.\d{1,2})?)$/);
        if (priceMatch) {
          return parseFloat(priceMatch[1]) * participants;
        } else {
          console.error("Unexpected price format:", tour.price);
          return 0;
        }
      })()
    : 0;

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
      <section className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        {/* Left column - Tour details */}
        <section className="lg:col-span-2">
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
          <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-4 my-2 md:my-3 border w-full h-fit md:h-1/3">
            <div className="relative rounded-lg w-full md:w-1/2 md:h-full aspect-video md:aspect-auto">
              {tour.images && tour.images.length > 0 && (
                <Image
                  src={tour.images[0]}
                  alt={tour.title}
                  fill
                  quality={100}
                  className="rounded-2xl w-full h-full object-cover object-center"
                  priority
                />
              )}
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2 h-full">
              <div className="relative rounded-lg w-full overflow-hidden aspect-video md:aspect-square">
                {tour.images && tour.images.length > 1 && (
                  <Image
                    src={tour.images[1]}
                    alt={`${tour.title} - image 2`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-video md:aspect-square">
                {tour.images && tour.images.length > 2 && (
                  <Image
                    src={tour.images[2]}
                    alt={`${tour.title} - image 3`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          {/* More images */}
          {tour.images && tour.images.length > 1 && (
            <div className="gap-2 grid md:grid-cols-2 mb-6">
              {tour.images.slice(3).map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden aspect-video"
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

          {tour.cancellationPolicy && (
            <div className="my-6">
              <h5>Cancellation Policy:</h5>
              <p>{tour.cancellationPolicy}</p>
            </div>
          )}

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
        </section>

        {/* Right column - Booking */}
        <section className="lg:col-span-1">
          {/* Tour guide */}
          <section className="mb-8">
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
          </section>

          <div className="shadow-lg border border-border rounded-lg">
            <h2 className="px-6 pt-6 pb-2 border-tertiary border-b-2">
              Book This Tour
            </h2>
            <div className="p-6">
              {" "}
              <div className="mb-6">
                <p className="font-bold text-3xl">
                  {tour.price}{" "}
                  <span className="font-normal text-sm">per person</span>
                </p>
              </div>
              {/* Date picker */}
              <div className="mb-6">
                <label className="block mb-2">Select Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        { "text-muted-foreground": !date }
                      )}
                    >
                      <CalendarIcon className="mr-2 w-4 h-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-auto" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date: Date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {/* Number of participants */}
              <div className="mb-6">
                <label className="block mb-2">Participants</label>
                <div className="flex items-center border rounded-md">
                  <button
                    className="px-3 py-2 text-lg"
                    onClick={() =>
                      setParticipants((prev) => Math.max(1, prev - 1))
                    }
                  >
                    −
                  </button>
                  <span className="flex-1 text-center">{participants}</span>
                  <button
                    className="px-3 py-2 text-lg"
                    onClick={() =>
                      setParticipants((prev) => Math.min(prev + 1, 10))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Total */}
              <div className="mb-6 py-4 border-t border-b">
                <div className="flex justify-between mb-2">
                  <span>Price per person</span>
                  <span>{tour.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Participants</span>
                  <span>x{participants}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <Button
                onClick={() =>
                  router.push(
                    `/book-your-trip-today?${new URLSearchParams({
                      city: formatToSlug(city),
                      tourName: formatToSlug(tour.title),
                      tourGuide: formatToSlug(tourGuide),
                      tourCategoryId: formatToSlug(tourCategoryId),
                    }).toString()}&date=${
                      date ? format(date, "yyyy-MM-dd") : ""
                    }&participants=${participants}`
                  )
                }
                className="w-full"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </section>
      </section>

      <section>
        <h2>Similar Tours</h2>
        {cityInfo && (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto w-full">
            {groupAndSortByProperties(filteredTours, "price")
              .slice(0, 2)
              .map((tour, index) => {
                return (
                  <TourCard
                    tour={tour}
                    key={index}
                    city={cityInfo.city || "Not specified"}
                    country={cityInfo.country || "Not specified"}
                    tourGuides={tourGuides}
                  />
                );
              })}
          </div>
        )}
      </section>
    </div>
  );

  async function fetchTourGuides() {
    const tourGuidesData = await getTourData(decodeURIComponent(city));
    const guidePromises = tourGuidesData.map(async (tour: Tour) => {
      try {
        const guide = await findGuideBySpecialty(
          decodeURIComponent(city).toLowerCase(),
          tour.tourCategoryId
        );
        return { tourTitle: tour.title, guideName: guide.name };
      } catch (error) {
        console.error(`Failed to load guide for ${tour.title}:`, error);
        return { tourTitle: tour.title, guideName: "Local Expert" };
      }
    });

    const guides = await Promise.all(guidePromises);
    const guidesMap = guides.reduce((acc, { tourTitle, guideName }) => {
      acc[tourTitle] = guideName;
      return acc;
    }, {} as { [key: string]: string });
    setTourGuides(guidesMap);
  }
}
