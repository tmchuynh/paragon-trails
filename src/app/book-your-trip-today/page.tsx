"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tour } from "@/lib/interfaces/services/tours";
import { cn } from "@/lib/utils";
import { capitalize, formatToSlug } from "@/lib/utils/format";
import { getTourData } from "@/lib/utils/get";
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

  useEffect(() => {
    const fetchData = async () => {
      if (city && tourName) {
        try {
          const data = await getTourData(city);
          console.log("Fetched tour data:", data);
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
      }
    };

    fetchData();
  }, [city, tourName]);

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
