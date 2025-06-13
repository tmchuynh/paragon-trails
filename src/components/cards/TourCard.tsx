"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tour } from "@/lib/interfaces/services/tours";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatToSlug } from "@/lib/utils/format";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { toast } from "sonner";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cartHelpers, useCart } from "@/context/CartContext";
import { TourGuide } from "@/lib/interfaces/people/staff";

export default function TourCard({
  tour,
  tourGuides,
  city,
  country,
}: {
  tour: Tour;
  tourGuides?: TourGuide[];
  city: string;
  country: string;
}) {
  const router = useRouter();
  const { state, dispatch } = useCart();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    // Create unique ID using title and random number to ensure uniqueness
    const tourItem = {
      id: `${formatToSlug(tour.title)}-${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      type: "tour" as const,
      name: tour.title,
      description: tour.description,
      image: tour.images[0],
      price: parseFloat(tour.price.replace(/[^0-9.]/g, "")),
      dates: {
        startDate: new Date().toISOString().split("T")[0], // Default to today
        endDate: new Date(
          Date.now() + 24 * 60 * 60 * 1000 * parseInt(tour.duration)
        )
          .toISOString()
          .split("T")[0], // Add duration days
      },
      guests: 1,
      location: `${city}, ${country}`,
      features: tour.inclusions || [],
      cancellationPolicy: "Flexible cancellation available",
    };

    cartHelpers.addItem(dispatch, tourItem);
    toast.success(`${tour.title} added to cart!`);
    setIsAddingToCart(false);
  };

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
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant={"icon"}
                  size={"icon"}
                  onClick={() => console.log("Open tour details")}
                  className="top-10 right-5 absolute size-5"
                >
                  <IoMdInformationCircle />
                </Button>
              </SheetTrigger>
              <SheetContent className="mx-auto w-11/12">
                <SheetHeader className="mt-8">
                  <SheetTitle>
                    {tour.icon && <tour.icon />}
                    {tour.title}
                  </SheetTitle>
                  <SheetDescription>{tour.description}</SheetDescription>
                  {tour.tags?.length && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tour.tags.map((tag, i) => (
                        <Badge size={"lg"} variant={"secondary"} key={i}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </SheetHeader>
                <div className="flex flex-col gap-4 mx-auto w-12/14">
                  <section>
                    <h3>Tour Details</h3>
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
                    <h5>Highlights:</h5>
                    {tour.highlights?.length ? (
                      <ul className="pl-5 list-disc">
                        {tour.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>Will be posted at a later date.</p>
                    )}
                    <h5>Inclusions:</h5>
                    {tour.inclusions?.length ? (
                      <ul className="pl-5 list-disc">
                        {tour.inclusions.map((inclusion, index) => (
                          <li key={index}>{inclusion}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>Will be posted at a later date.</p>
                    )}
                    <h5>Exclusions:</h5>
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
                    <h5>Meeting Point:</h5>
                    <div className="flex flex-col gap-3">
                      {" "}
                      <div>
                        <p>
                          {tour.meetingPoint?.address ||
                            "Meeting point not specified."}
                        </p>
                      </div>
                      <div>
                        {tour.meetingPoint?.coordinates && (
                          <p>
                            <strong>Coordinates:</strong>{" "}
                            {tour.meetingPoint.coordinates.latitude},{" "}
                            {tour.meetingPoint.coordinates.longitude}
                          </p>
                        )}
                      </div>
                      <div>
                        {tour.meetingPoint?.instructions && (
                          <p>
                            <strong>Instructions:</strong>{" "}
                            {tour.meetingPoint.instructions}
                          </p>
                        )}
                      </div>
                      <div>
                        {tour.meetingPoint?.contactNumber && (
                          <p>
                            <strong>Contact Number:</strong>{" "}
                            <a
                              href={`tel:${tour.meetingPoint.contactNumber}`}
                              className="text-blue-500 hover:underline"
                            >
                              {tour.meetingPoint.contactNumber}
                            </a>
                          </p>
                        )}
                      </div>
                      <div>
                        {tour.meetingPoint?.contactEmail && (
                          <p>
                            <strong>Contact Email:</strong>{" "}
                            <a
                              href={`mailto:${tour.meetingPoint.contactEmail}`}
                              className="text-blue-500 hover:underline"
                            >
                              {tour.meetingPoint.contactEmail}
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </section>

                  <section>
                    <h5>Cancellation Policy:</h5>
                    <p>{tour.cancellationPolicy || "Not specified"}</p>
                  </section>
                </div>
                <Button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="mx-auto mt-4 w-12/14"
                >
                  {isAddingToCart ? "Adding..." : "Add to Cart"}
                </Button>
              </SheetContent>
            </Sheet>
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
              {tourGuides && tourGuides.length > 0 && (
                <h5 className="text-tertiary">
                  <strong className="text-foreground">Guide:</strong>{" "}
                  {tourGuides.map((guides, index) => (
                    <p key={index}>{guides.name}</p>
                  )) || "Guide not assigned yet"}
                </h5>
              )}
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

              if (tourGuides && tourGuides.length > 0) {
                queryParams.append("tourGuide", tourGuides[0].name);
              }

              router.push(
                `/luxurious-destinations/${country}/${city}/tours/${formatToSlug(
                  tour.title,
                )}?${queryParams.toString()}`,
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
