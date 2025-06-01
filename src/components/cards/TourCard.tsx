"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tour } from "@/lib/interfaces/services/tours";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatToSlug } from "@/lib/utils/format";
import { DialogDescription } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdInformationCircle } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function TourCard({
  tour,
  tourGuides,
  city,
  country,
}: {
  tour: Tour;
  tourGuides: { [key: string]: string };
  city: string;
  country: string;
}) {
  const router = useRouter();
  return (
    <div className="bg-card shadow-lg hover:shadow-xl border border-border rounded-lg h-full transition-shadow overflow-hidden">
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
          <div className="relative px-6 pt-5">
            <div className="flex flex-col justify-between items-start mb-2">
              <h2>{tour.title}</h2>
              {displayRatingStars(tour.rating)}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"icon"}
                  size={"icon"}
                  onClick={() => console.log("Open tour details")}
                  className="top-10 right-5 absolute size-5"
                >
                  <IoMdInformationCircle />
                </Button>
              </DialogTrigger>
              <DialogContent className="mx-auto max-w-11/12">
                <DialogHeader>
                  <DialogTitle>
                    {tour.icon && <tour.icon />}
                    {tour.title}
                  </DialogTitle>
                  <DialogDescription>{tour.description}</DialogDescription>
                  {tour.tags?.length && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tour.tags.map((tag, i) => (
                        <Badge size={"lg"} variant={"secondary"} key={i}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <section>
                    <h3 className="font-semibold text-lg">Tour Details</h3>
                    <h5>Itinerary:</h5>
                    {tour.itinerary?.length ? (
                      <ul className="pl-5 list-disc">
                        {tour.itinerary.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>To be determined</p>
                    )}
                  </section>
                  <section>
                    <h5 className="mt-2">Highlights:</h5>
                    {tour.highlights?.length ? (
                      <ul className="pl-5 list-disc">
                        {tour.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>Will be posted at a later date.</p>
                    )}
                    <h5 className="mt-2">Inclusions:</h5>
                    {tour.inclusions?.length ? (
                      <ul className="pl-5 list-disc">
                        {tour.inclusions.map((inclusion, index) => (
                          <li key={index}>{inclusion}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>Will be posted at a later date.</p>
                    )}
                    <h5 className="mt-2">Exclusions:</h5>
                    {tour.exclusions?.length ? (
                      <ul className="pl-5 list-disc">
                        {tour.exclusions.map((exclusion, index) => (
                          <li key={index}>{exclusion}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>Will be posted at a later date.</p>
                    )}
                  </section>
                  <section>
                    <h5 className="mt-2">Meeting Point:</h5>
                    <p>{tour.meetingPoint || "To be determined."}</p>
                    <h5 className="mt-2">Cancellation Policy:</h5>
                    <p>{tour.cancellationPolicy || "Not specified"}</p>
                  </section>
                </div>
                <Button
                  onClick={() =>
                    router.push(
                      "/book-your-trip-today?tour=" + formatToSlug(tour.title)
                    )
                  }
                >
                  Book Now
                </Button>
              </DialogContent>
            </Dialog>
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
                {tourGuides[tour.title] || "Loading guide..."}
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
                tourGuide: tourGuides[tour.title] || "Unknown Guide",
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
  );
}
