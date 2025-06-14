"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockTours } from "@/data/tours";
import {
  convertTo12HourFormat,
  formatCurrency,
  formatToSlug,
} from "@/lib/utils/format";
import {
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Info,
  MapPin,
  Phone,
  Shield,
  Star,
  Ticket,
  User,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";

export default function TourDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const { dispatch } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [seniors, setSeniors] = useState(0);
  const [students, setStudents] = useState(0);
  const [families, setFamilies] = useState(0);
  const [isBooking, setIsBooking] = useState(false);

  // Find tour by URL param
  const tourSlug = params.tour as string;
  const initialTour = mockTours.find(
    (tour) => formatToSlug(tour.title) === tourSlug
  );

  const [currentTour, setCurrentTour] = useState(initialTour);

  // Update current tour when URL param changes
  useEffect(() => {
    const foundTour = mockTours.find(
      (tour) => formatToSlug(tour.title) === tourSlug
    );
    setCurrentTour(foundTour);
    setSelectedImageIndex(0); // Reset image index when tour changes
  }, [tourSlug]);

  // Handle tour change from selector
  const handleTourChange = (newTourId: string) => {
    const newTour = mockTours.find((tour) => tour.id === newTourId);
    if (newTour) {
      const newSlug = formatToSlug(newTour.title);
      // Update URL without reloading the page
      router.replace(`/tours/${newSlug}`, { scroll: false });
    }
  };

  if (!currentTour) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Tour not found</h1>
            <Button onClick={() => router.push("/tours")}>
              Browse all tours
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleBookTour = () => {
    setIsBooking(true);

    const tourItem = {
      id: `${formatToSlug(currentTour.title)}-${Math.random().toString(36).substr(2, 9)}`,
      type: "tour" as const,
      name: currentTour.title,
      description: currentTour.description,
      image: currentTour.images[0],
      features: currentTour.features,
      price:
        currentTour.pricing.adult * adults +
        currentTour.pricing.child * children +
        currentTour.pricing.senior * seniors +
        (currentTour.pricing.student
          ? currentTour.pricing.student * students
          : 0) +
        (currentTour.pricing.family
          ? currentTour.pricing.family * families
          : 0),
      dates: {
        startDate: selectedDate || new Date().toISOString().split("T")[0],
        endDate: selectedDate || new Date().toISOString().split("T")[0],
      },
      guests: adults + children + seniors + students + families,
      location: `${currentTour.location.address}, ${currentTour.location.city}, ${currentTour.location.country}`,
      cancellationPolicy:
        currentTour.cancellationPolicy ||
        "Standard cancellation policy applies",
    };

    cartHelpers.addItem(dispatch, tourItem);
    toast.success(`${currentTour.title} added to cart!`);
    setIsBooking(false);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <FaArrowLeft className="mr-2 w-4 h-4" />
          Back to tours
        </Button>

        {/* Tour Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <Label className="font-medium text-sm">Choose Tour:</Label>
            <Select
              value={currentTour?.id || ""}
              onValueChange={handleTourChange}
            >
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select a tour" />
              </SelectTrigger>
              <SelectContent>
                {mockTours.map((tour) => (
                  <SelectItem key={tour.id} value={tour.id}>
                    {tour.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <div className="relative h-96">
            <Image
              src={currentTour.images[selectedImageIndex]}
              alt={currentTour.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="bottom-6 left-6 absolute text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {currentTour.type}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {currentTour.category}
                </Badge>
              </div>
              <h1 className="mb-2 font-bold text-4xl">{currentTour.title}</h1>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span className="text-lg">
                  {currentTour.location.city}, {currentTour.location.country}
                </span>
                <Separator
                  orientation="vertical"
                  className="bg-white/30 mx-2 h-6"
                />
                <div className="flex items-center gap-1">
                  <FaStar className="w-4 h-4 text-yellow-400" />
                  <span>{currentTour.reviews.rating}</span>
                  <span className="text-sm">
                    ({currentTour.reviews.totalReviews} reviews)
                  </span>
                </div>
                <Separator
                  orientation="vertical"
                  className="bg-white/30 mx-2 h-6"
                />
                <div className="flex items-center gap-1">
                  <FaClock className="w-4 h-4" />
                  <span>{currentTour.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex gap-2 mt-4">
            {currentTour.images
              .slice(0, 4)
              .map((image: string, index: number) => (
                <Button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden ${
                    selectedImageIndex === index ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${currentTour.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </Button>
              ))}
          </div>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="practical">Practical Info</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Info className="w-5 h-5" /> About This Tour
                    </div>
                    <p className="mb-4">{currentTour.description}</p>

                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Duration</h4>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />{" "}
                          <span>{currentTour.duration}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Tour Type</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{currentTour.type}</Badge>
                          <Badge variant="outline">
                            {currentTour.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <MapPin className="w-5 h-5" /> Tour Highlights
                    </div>
                    {currentTour.reviews.highlights &&
                      currentTour.reviews.highlights.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {currentTour.reviews.highlights.map(
                            (highlight, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="flex-shrink-0 mt-0.5 w-5 h-5 text-green-500" />{" "}
                                <span>{highlight}</span>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="mb-4 font-semibold text-lg">Features</div>
                    <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
                      {currentTour.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-2 rounded-lg"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />{" "}
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {currentTour.restrictions.length > 0 && (
                  <Card>
                    <div className="px-6">
                      <div className="mb-4 font-semibold text-lg">
                        Restrictions
                      </div>
                      <ul className="space-y-2 text-sm">
                        {currentTour.restrictions.map((restriction, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <IoClose className="flex-shrink-0 mt-0.5 w-5 h-5 text-red-500" />{" "}
                            {restriction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Calendar className="w-5 h-5" /> Detailed Itinerary
                    </div>
                    <div className="space-y-4">
                      {currentTour.itinerary.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 pb-4 border-slate-200 dark:border-slate-700 border-b last:border-b-0"
                        >
                          <div className="flex flex-shrink-0 justify-center items-center bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 font-semibold text-blue-600 text-sm dark:text-blue-300">
                            {index + 1}
                          </div>
                          <div className="flex-1 mt-1.5">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold text-sm">
                                {convertTo12HourFormat(item.startTime)} -{" "}
                                {convertTo12HourFormat(item.endTime)}
                              </span>
                            </div>
                            <ul className="space-y-1 text-slate-600 text-sm dark:text-slate-400">
                              {item.activities.map((activity, actIndex) => (
                                <li
                                  key={actIndex}
                                  className="flex items-start gap-2"
                                >
                                  <span className="flex-shrink-0 bg-slate-400 mt-2 rounded-full w-1.5 h-1.5"></span>
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="practical" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <User className="w-5 h-5" /> Meeting Point & Contact
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="flex-shrink-0 mt-0.5 w-5 h-5 text-red-500" />{" "}
                        <div>
                          <p className="font-semibold">Address</p>
                          <p className="text-slate-600 text-sm dark:text-slate-400">
                            {currentTour.meetingPoint.address}
                          </p>
                        </div>
                      </div>

                      {currentTour.meetingPoint.instructions && (
                        <div className="flex items-start gap-2">
                          <Shield className="flex-shrink-0 mt-0.5 w-5 h-5 text-blue-500" />{" "}
                          <div>
                            <p className="font-semibold">Instructions</p>
                            <p className="text-slate-600 text-sm dark:text-slate-400">
                              {currentTour.meetingPoint.instructions}
                            </p>
                          </div>
                        </div>
                      )}

                      {currentTour.meetingPoint.contactNumber && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-green-500" />
                          <a
                            href={`tel:${currentTour.meetingPoint.contactNumber}`}
                            className="text-blue-600 text-sm hover:underline"
                          >
                            {currentTour.meetingPoint.contactNumber}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <DollarSign className="w-5 h-5" />
                      Pricing
                    </div>
                    <div className="space-y-3">
                      <div className="gap-4 grid grid-cols-2">
                        <div className="flex justify-between">
                          <span>Adult:</span>
                          <span className="font-semibold">
                            {formatPrice(currentTour.pricing.adult)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Child:</span>
                          <span className="font-semibold">
                            {formatPrice(currentTour.pricing.child)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Senior:</span>
                          <span className="font-semibold">
                            {formatPrice(currentTour.pricing.senior)}
                          </span>
                        </div>
                        {currentTour.pricing.student && (
                          <div className="flex justify-between">
                            <span>Student:</span>
                            <span className="font-semibold">
                              {formatPrice(currentTour.pricing.student)}
                            </span>
                          </div>
                        )}
                        {currentTour.pricing.family && (
                          <div className="flex justify-between col-span-2">
                            <span>Family Package:</span>
                            <span className="font-semibold">
                              {formatPrice(currentTour.pricing.family)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="mb-4 font-semibold text-lg">
                      Ticket Information
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Ticket className="w-4 h-4 text-accent -rotate-40" />
                        <span className="text-sm">
                          {currentTour.tickets.advanceBooking
                            ? "Advance booking recommended"
                            : "Walk-in only"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ticket className="w-4 h-4 text-accent -rotate-40" />
                        <span className="text-sm">
                          {currentTour.tickets.skipTheLine
                            ? "Skip-the-line tickets available"
                            : "Standard queue only"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ticket className="w-4 h-4 text-accent -rotate-40" />
                        <span className="text-sm">
                          {currentTour.tickets.groupDiscounts
                            ? "Group discounts available"
                            : "No group discounts"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="mb-4 font-semibold text-lg">
                      Cancellation Policy
                    </div>
                    <p className="text-sm">
                      {currentTour.cancellationPolicy ||
                        "Standard cancellation policy applies. Please contact us for specific terms and conditions."}
                    </p>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Star className="w-5 h-5" />
                      Reviews & Ratings
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="font-bold text-3xl">
                          {currentTour.reviews.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(currentTour.reviews.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm">
                          {currentTour.reviews.totalReviews} reviews
                        </div>
                      </div>
                    </div>

                    {currentTour.reviews.highlights && (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Review Highlights</h4>
                        <div className="space-y-2">
                          {currentTour.reviews.highlights.map(
                            (highlight, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <FaStar className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 text-yellow-500" />{" "}
                                <span className="text-sm">{highlight}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card>
              <div className="px-6">
                <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <Info className="w-5 h-5" />
                  Quick Info
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{currentTour.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span>{currentTour.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span>{currentTour.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      {currentTour.reviews.rating}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-right">
                      {currentTour.location.city},{" "}
                      {currentTour.location.country}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="px-6">
                <div className="mb-4 font-semibold text-lg">Book This Tour</div>
                <div className="gap-4 grid grid-cols-3 mb-4">
                  <div className="text-center">
                    <p className="font-bold text-2xl text-blue-600">
                      {formatCurrency(currentTour.pricing.adult)}
                    </p>
                    <p className="text-sm">per adult</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-2xl text-blue-600">
                      {formatCurrency(currentTour.pricing.child)}
                    </p>
                    <p className="text-sm">per child</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-2xl text-blue-600">
                      {formatCurrency(currentTour.pricing.senior)}
                    </p>
                    <p className="text-sm">per senior</p>
                  </div>
                  {currentTour.pricing.student && (
                    <div className="text-center">
                      <p className="font-bold text-2xl text-blue-600">
                        {formatCurrency(currentTour.pricing.student)}
                      </p>
                      <p className="text-sm">per student</p>
                    </div>
                  )}
                  {currentTour.pricing.family && (
                    <div className="text-center">
                      <p className="font-bold text-2xl text-blue-600">
                        {formatCurrency(currentTour.pricing.family)}
                      </p>
                      <p className="text-sm">per family</p>
                    </div>
                  )}
                </div>

                <Separator className="mb-4" />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="tour-date">Select Date</Label>
                    <Input
                      id="tour-date"
                      type="date"
                      className="flex flex-col justify-center mt-0.25 border focus:border-muted border-border focus:ring-muted/20"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="gap-4 grid grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="adults">Adults</Label>
                      <Input
                        id="adults"
                        type="number"
                        min="1"
                        max="10"
                        value={adults}
                        className="focus:border-muted border-border focus:ring-muted/20 h-8"
                        onChange={(e) =>
                          setAdults(parseInt(e.target.value) || 1)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children">Children</Label>
                      <Input
                        id="children"
                        type="number"
                        min="0"
                        max="10"
                        value={children}
                        className="focus:border-muted border-border focus:ring-muted/20 h-8"
                        onChange={(e) =>
                          setChildren(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="seniors">Seniors</Label>
                      <Input
                        id="seniors"
                        type="number"
                        min="0"
                        max="10"
                        value={seniors}
                        className="focus:border-muted border-border focus:ring-muted/20 h-8"
                        onChange={(e) =>
                          setSeniors(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                    {currentTour.pricing.student && (
                      <div className="space-y-2">
                        <Label htmlFor="students">Students</Label>
                        <Input
                          id="students"
                          type="number"
                          min="0"
                          max="10"
                          value={students}
                          className="focus:border-muted border-border focus:ring-muted/20 h-8"
                          onChange={(e) =>
                            setStudents(parseInt(e.target.value) || 0)
                          }
                        />
                      </div>
                    )}
                  </div>

                  {currentTour.pricing.family && (
                    <div className="space-y-2">
                      <Label htmlFor="families">Family Packages</Label>
                      <Input
                        id="families"
                        type="number"
                        min="0"
                        max="5"
                        value={families}
                        className="focus:border-muted border-border focus:ring-muted/20 h-8"
                        onChange={(e) =>
                          setFamilies(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                  )}

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Adults × {adults}</span>
                      <span>
                        {formatCurrency(currentTour.pricing.adult * adults)}
                      </span>
                    </div>
                    {children > 0 && (
                      <div className="flex justify-between items-center">
                        <span>Children × {children}</span>
                        <span>
                          {formatCurrency(currentTour.pricing.child * children)}
                        </span>
                      </div>
                    )}
                    {seniors > 0 && (
                      <div className="flex justify-between items-center">
                        <span>Seniors × {seniors}</span>
                        <span>
                          {formatCurrency(currentTour.pricing.senior * seniors)}
                        </span>
                      </div>
                    )}
                    {currentTour.pricing.student && students > 0 && (
                      <div className="flex justify-between items-center">
                        <span>Students × {students}</span>
                        <span>
                          {formatCurrency(
                            currentTour.pricing.student * students
                          )}
                        </span>
                      </div>
                    )}
                    {currentTour.pricing.family && families > 0 && (
                      <div className="flex justify-between items-center">
                        <span>Families × {families}</span>
                        <span>
                          {formatCurrency(
                            currentTour.pricing.family * families
                          )}
                        </span>
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-blue-600">
                        {formatPrice(
                          currentTour.pricing.adult * adults +
                            currentTour.pricing.child * children +
                            currentTour.pricing.senior * seniors +
                            (currentTour.pricing.student
                              ? currentTour.pricing.student * students
                              : 0) +
                            (currentTour.pricing.family
                              ? currentTour.pricing.family * families
                              : 0),
                          currentTour.pricing.currency
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

                  <div className="flex items-center gap-2 pt-2 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Flexible cancellation available</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
