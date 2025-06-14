"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockDestinations } from "@/data/destinations";
import { mockTours } from "@/data/tours";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatToSlug } from "@/lib/utils/format";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function TourDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const { dispatch } = useCart();
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [seniors, setSeniors] = useState(0);
  const [students, setStudents] = useState(0);
  const [families, setFamilies] = useState(0);
  const [isBooking, setIsBooking] = useState(false);

  // Find destination and tour by URL params
  const destinationSlug = params.destination as string;
  const tourSlug = params.tour as string;

  const destination = mockDestinations.find(
    (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === destinationSlug
  );

  const tour = mockTours.find((t) => formatToSlug(t.title) === tourSlug);

  if (!destination || !tour) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Tour not found</h1>
            <Button onClick={() => router.push("/destinations")}>
              Browse all destinations
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleBookTour = () => {
    setIsBooking(true);

    const tourItem = {
      id: `${formatToSlug(tour.title)}-${Math.random().toString(36).substr(2, 9)}`,
      type: "tour" as const,
      name: tour.title,
      description: tour.description,
      image: tour.images[0],
      features: tour.features,
      price:
        tour.pricing.adult +
        tour.pricing.child +
        tour.pricing.senior +
        (tour.pricing.student ?? 0) +
        (tour.pricing.family ?? 0),
      dates: {
        startDate: selectedDate || new Date().toISOString().split("T")[0],
        endDate: selectedDate || new Date().toISOString().split("T")[0],
      },
      guests: guests,
      location: `${destination.name}, ${destination.country}`,
      cancellationPolicy:
        tour.cancellationPolicy || "Standard cancellation policy applies",
    };

    cartHelpers.addItem(dispatch, tourItem);
    toast.success(`${tour.title} added to cart!`);
    setIsBooking(false);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.push(`/tours`)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to tours in {destination.name}
        </Button>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Tour Header */}
            <div>
              <div className="relative mb-6 rounded-xl h-96 overflow-hidden">
                <Image
                  src={tour.images[0]}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="bottom-6 left-6 absolute text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white"
                    >
                      {tour.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {displayRatingStars(tour.reviews.rating)}
                      <span className="ml-1">{tour.reviews.rating}</span>
                    </div>
                  </div>
                  <h1 className="mb-2 font-bold text-4xl">{tour.title}</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {destination.name}, {destination.country}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="flex gap-2">
                {tour.images.slice(1, 4).map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg w-32 h-20 overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${tour.title} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-slate-600 dark:text-slate-400">
                  {tour.description}
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
            {tour.reviews.highlights && tour.reviews.highlights.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Tour Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tour.reviews.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="flex-shrink-0 mt-0.5 w-5 h-5 text-green-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Itinerary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tour.itinerary.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex flex-shrink-0 justify-center items-center bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 font-semibold text-blue-600 text-sm dark:text-blue-300">
                          {index + 1}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">
                          <strong>
                            {item.startTime} - {item.endTime}
                          </strong>
                          : {item.activities.join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Meeting Point */}
            {tour.meetingPoint && (
              <Card>
                <CardHeader>
                  <CardTitle>Meeting Point & Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="flex-shrink-0 mt-0.5 w-5 h-5 text-red-500" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-slate-600 text-sm">
                        {tour.meetingPoint.address ||
                          "Meeting point details will be provided after booking"}
                      </p>
                    </div>
                  </div>

                  {tour.meetingPoint.instructions && (
                    <div className="flex items-start gap-2">
                      <Shield className="flex-shrink-0 mt-0.5 w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-semibold">Instructions</p>
                        <p className="text-slate-600 text-sm">
                          {tour.meetingPoint.instructions}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    {tour.meetingPoint.contactNumber && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-green-500" />
                        <a
                          href={`tel:${tour.meetingPoint.contactNumber}`}
                          className="text-blue-600 text-sm hover:underline"
                        >
                          {tour.meetingPoint.contactNumber}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Cancellation Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  {tour.cancellationPolicy ||
                    "Standard cancellation policy applies. Please contact us for specific terms and conditions."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Book This Tour</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="font-bold text-3xl text-blue-600">
                    {tour.pricing.adult}
                  </p>
                  <p className="text-slate-600 text-sm">per adult</p>
                </div>

                <div className="text-center">
                  <p className="font-bold text-3xl text-blue-600">
                    {tour.pricing.child}
                  </p>
                  <p className="text-slate-600 text-sm">per child</p>
                </div>

                <div className="text-center">
                  <p className="font-bold text-3xl text-blue-600">
                    {tour.pricing.senior}
                  </p>
                  <p className="text-slate-600 text-sm">per senior</p>
                </div>

                {tour.pricing.student && (
                  <div className="text-center">
                    <p className="font-bold text-3xl text-blue-600">
                      {tour.pricing.student}
                    </p>
                    <p className="text-slate-600 text-sm">per student</p>
                  </div>
                )}

                {tour.pricing.family && (
                  <div className="text-center">
                    <p className="font-bold text-3xl text-blue-600">
                      {tour.pricing.family}
                    </p>
                    <p className="text-slate-600 text-sm">per family</p>
                  </div>
                )}

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="tour-date">Select Date</Label>
                  <Input
                    id="tour-date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adults">Number of Adults</Label>
                  <Input
                    id="adults"
                    type="number"
                    min="1"
                    max="10"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children">Number of Children</Label>
                  <Input
                    id="children"
                    type="number"
                    min="1"
                    max="10"
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value) || 1)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seniors">Number of Seniors</Label>
                  <Input
                    id="seniors"
                    type="number"
                    min="1"
                    max="10"
                    value={seniors}
                    onChange={(e) => setSeniors(parseInt(e.target.value) || 1)}
                  />
                </div>

                {tour.pricing.student && (
                  <div className="space-y-2">
                    <Label htmlFor="students">Number of Students</Label>
                    <Input
                      id="students"
                      type="number"
                      min="1"
                      max="10"
                      value={students}
                      onChange={(e) =>
                        setStudents(parseInt(e.target.value) || 1)
                      }
                    />
                  </div>
                )}

                {tour.pricing.family && (
                  <div className="space-y-2">
                    <Label htmlFor="families">Number of Families</Label>
                    <Input
                      id="families"
                      type="number"
                      min="1"
                      max="10"
                      value={families}
                      onChange={(e) =>
                        setFamilies(parseInt(e.target.value) || 1)
                      }
                    />
                  </div>
                )}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="inline-flex items-center gap-2">
                      <span>{tour.pricing.adult}</span>
                      <span>/person</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span>×{adults}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="inline-flex items-center gap-2">
                      <span>{tour.pricing.child}</span>
                      <span>/person</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span>×{children}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="inline-flex items-center gap-2">
                      <span>{tour.pricing.senior}</span>
                      <span>/person</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span>×{seniors}</span>
                    </div>
                  </div>
                  {tour.pricing.student && (
                    <div className="flex justify-between items-center">
                      <div className="inline-flex items-center gap-2">
                        <span>{tour.pricing.student}</span>
                        <span>/person</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <span>×{students}</span>
                      </div>
                    </div>
                  )}
                  {tour.pricing.family && (
                    <div className="flex justify-between items-center">
                      <div className="inline-flex items-center gap-2">
                        <span>{tour.pricing.family}</span>
                        <span>/family</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <span>×{families}</span>
                      </div>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-blue-600">
                      {formatPrice(
                        tour.pricing.adult * adults +
                          tour.pricing.child * children +
                          tour.pricing.senior * seniors +
                          (tour.pricing.student
                            ? tour.pricing.student * students
                            : 0) +
                          (tour.pricing.family
                            ? tour.pricing.family * families
                            : 0),
                        tour.pricing.currency
                      )}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleBookTour}
                  disabled={isBooking}
                  className="w-full"
                  size="lg"
                >
                  {isBooking ? "Adding to Cart..." : "Add to Cart"}
                </Button>

                <div className="flex items-center gap-2 pt-2 text-slate-600 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Flexible cancellation available</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tour Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>{tour.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Category</span>
                  <span className="capitalize">{tour.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {tour.reviews.rating}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span>{destination.name}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
