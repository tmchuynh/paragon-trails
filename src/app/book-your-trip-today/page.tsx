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
import { capitalize, formatToSlug } from "@/lib/utils/format";
import {
  findGuideBySpecialty,
  getAllTours,
  getTourData,
  getToursByCategory,
} from "@/lib/utils/get";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
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

    const fetchTours = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getAllTours();
        setAllTours(data);
        if (allTours.length > 0) {
          const filteredTours = getToursByCategory(allTours, tourCategoryId);
          setFilteredTours(filteredTours);
        }
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    fetchTours();
  }, [city, tourName, tourGuides, allTours]);

  if (loading) {
    return <Loading />;
  }

  const totalPrice = tour
    ? parseFloat(tour.price.replace(/[^0-9.]/g, "")) * participants
    : 0;

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

      <section>
        <h2 className="mt-8 mb-4 font-bold text-2xl">Booking Details</h2>
        <div className="shadow-md p-6 rounded-lg w-full max-w-2xl">
          <p>
            <strong>Tour:</strong>{" "}
            {capitalize(tour?.title.replace("@", "&") || "Not specified") ||
              "Not specified"}
          </p>
          <p>
            <strong>Participants:</strong>{" "}
            {participants || "Missing information"}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {tour?.availableDates?.map((date, index) => (
              <span key={index}>
                {date
                  ? format(new Date(date), "PPP") + " "
                  : "To Be Determined"}
              </span>
            )) || "To Be Determined"}
          </p>
          <p>
            <strong>Tour Guide:</strong> {tourGuide || "To Be Determined"}
          </p>
          <p>
            <strong>Tour Category:</strong>{" "}
            {capitalize(tourCategoryId || "Not specified") || "Not specified"}
          </p>
        </div>
      </section>

      <section>
        <h2>Similar Tours</h2>
        {/* {featuredArray(filteredTours).map((tour, index) => (
          <TourCard
            key={index}
            tour={tour}
            city={city}
            country={tour.country || "Not specified"}
            tourGuides={tour.tourGuides || {}}
          />
        ))} */}

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {filteredTours.slice(0, 6).map((tour, index) => {
            return (
              <TourCard
                key={index}
                tour={tour}
                city={cityInfo?.city || "Not specified"}
                country={cityInfo?.country || "Not specified"}
                tourGuides={tourGuides}
              />
            );
          })}
        </div>
      </section>

      <section>
        <div className="shadow-lg p-6 border border-border rounded-lg">
          <h2 className="mb-2 font-bold text-2xl">Book This Tour</h2>
          <div className="mb-6">
            <p className="font-bold text-3xl">
              {tour?.price}{" "}
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
                    !date && "text-gray-400"
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
                onClick={() => setParticipants((prev) => Math.max(1, prev - 1))}
              >
                −
              </button>
              <span className="flex-1 text-center">{participants}</span>
              <button
                className="px-3 py-2 text-lg"
                onClick={() => setParticipants((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="mb-6 py-4 border-t border-b">
            <div className="flex justify-between mb-2">
              <span>Price per person</span>
              <span>{tour?.price}</span>
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
                `/book-your-trip-today?tour=${formatToSlug(
                  tour?.title || ""
                ).replace("&", "@")}&participants=${participants}&date=${
                  date ? format(date, "yyyy-MM-dd") : ""
                }&tourGuide=${tourGuide}&tourCategoryId=${tourCategoryId}`
              )
            }
          >
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
}
