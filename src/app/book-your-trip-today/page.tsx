"use client";
import TourCard from "@/components/cards/TourCard";
import Loading from "@/components/Loading";
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
import { capitalize, formatToSlug } from "@/lib/utils/format";
import {
  findGuideBySpecialty,
  getAllTours,
  getTourData,
  getToursByCategory,
} from "@/lib/utils/get";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookYourTripToday() {
  const router = useRouter();
  const [tour, setTour] = useState<Tour | null>(null);
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "Not provided";
  const tourName = searchParams.get("tourName") || "Not specified";
  const tourGuide = searchParams.get("tourGuide") || "To Be Determined";
  const tourCategoryId = searchParams.get("tourCategoryId") || "Not specified";
  const [date, setDate] = useState<Date>();
  const [participants, setParticipants] = useState(2);
  const [loading, setLoading] = useState(true);
  const [allTours, setAllTours] = useState<Tour[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [tourGuides, setTourGuides] = useState<{ [key: string]: string }>({});

  const cityInfo = cityattractions.find(
    (attraction) => attraction.city.toLowerCase() === city.toLowerCase()
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!city || !tourName || city.trim() === "" || tourName.trim() === "") {
        console.warn("City or tourName is invalid. Skipping fetchData.");
        setLoading(false);
        return;
      }
      if (city && tourName) {
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
        } catch (error) {
          console.error("Failed to load tour data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [city, tourName, tourCategoryId]);

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

  const dateClass = !date ? "text-muted-foreground" : "";

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Book Your Trip Today</h1>
        <h5>Your Dream Adventure Awaits</h5>
        <p>
          Ready to embark on your next adventure? Book your trip today and
          explore the world with us. Whether you're looking for a relaxing
          getaway or an exciting journey, we have the perfect options for you.
        </p>
      </header>

      {tour && (
        <>
          <div className="gap-6 grid md:grid-cols-5 lg:grid-cols-9 2xl:grid-cols-12">
            <section className="md:col-span-3 lg:col-span-6 2xl:col-span-8">
              <h2>
                {capitalize(tour.title.replace("@", "&") || "Not specified") ||
                  "Not specified"}
              </h2>
              <h5>
                <span>Duration: {tour.duration}</span>
                {tour.rating ? (
                  <span className="inline-flex items-center gap-4 ml-2">
                    | Rating:{" "}
                    <span className="mb-1">
                      {displayRatingStars(tour.rating)}
                    </span>
                  </span>
                ) : (
                  "No rating available"
                )}
              </h5>
              {(tour.itinerary ||
                tour.meetingPoint ||
                tour.highlights ||
                tour.inclusions ||
                tour.exclusions) && (
                <section>
                {tour.itinerary && (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">Itinerary:</h3>
                    <ul className="pl-6 list-disc">
                      {tour.itinerary?.length > 0 ? (
                        tour.itinerary.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>To Be Determined</li>
                      )}
                    </ul>
                  </div>
                )}

                {tour.meetingPoint && (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">Meeting Point:</h3>
                    <p>{tour.meetingPoint}</p>
                  </div>
                )}

                {tour.highlights && (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">Highlights:</h3>
                    <ul className="pl-6 list-disc">
                      {tour.highlights?.length > 0 ? (
                        tour.highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>To Be Determined</li>
                      )}
                    </ul>
                  </div>
                )}

                {tour.inclusions && (
                  <div>
                    <h3>Includes:</h3>
                    <ul className="pl-6 list-disc">
                      {tour.inclusions?.length > 0 ? (
                        tour.inclusions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>To Be Determined</li>
                      )}
                    </ul>
                  </div>
                )}

                {tour.exclusions && (
                  <div className="mt-4">
                    <h3>Excludes:</h3>
                    <ul className="pl-6 list-disc">
                      {tour.exclusions?.length > 0 ? (
                        tour.exclusions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>To Be Determined</li>
                      )}
                    </ul>
                  </div>
                )}
                </section>
              )}

              <div className="mt-6">
                <h5>Tour Guide:</h5>
                <p>{tourGuides[tour.title] || "Local Expert"}</p>
              </div>
              <div className="mt-6">
                <h5>Tour Category:</h5>
                <p>{capitalize(tour.tourCategoryId) || "Not specified"}</p>
              </div>
              <div className="mt-6">
                <h5>Tags:</h5>
                <p>
                  {tour.tags && tour.tags.length > 0
                    ? tour.tags.join(", ")
                    : "No tags available"}
                </p>
              </div>
              <div className="mt-6">
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  {tour.images && tour.images.length > 0 ? (
                    tour.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`Tour image ${index + 1}`}
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    ))
                  ) : (
                    <p>No images available</p>
                  )}
                  </div>
              </div>

              {tour.cancellationPolicy && (
                <div className="mt-6">
                  <h5>Cancellation Policy:</h5>
                  <p className="text-muted">{tour.cancellationPolicy}</p>
                </div>
              )}
            </section>
            <section className="md:col-span-2 lg:col-span-3 2xl:col-span-4">
              <div className="shadow-lg p-6 border border-border rounded-lg">
                <h2 className="mb-2 font-bold text-2xl">Book This Tour</h2>
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
                          dateClass
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
                  onClick={() => {
                    const params = new URLSearchParams({
                        city: formatToSlug(city),
                        tourName: formatToSlug(tour.title),
                        tourGuide: formatToSlug(tourGuide),
                        tourCategoryId: formatToSlug(tourCategoryId),
                      date: date ? format(date, "yyyy-MM-dd") : "",
                      participants: participants.toString(),
                    });

                    router.push(`/book-your-trip-today?${params.toString()}`);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </section>
          </div>
          <section>
            <h2>Similar Tours</h2>

            {cityInfo && (
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                {filteredTours.slice(0, 3).map((tour, index) => {
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
        </>
      )}
    </div>
  );
}
