"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrency } from "@/context/CurrencyContext";
import { mockAttractions } from "@/data/attractions";
import { formatToSlug } from "@/lib/utils/format";
import { Label } from "@radix-ui/react-label";
import {
  Accessibility,
  ArrowLeft,
  Camera,
  Car,
  Clock,
  Coffee,
  DollarSign,
  Globe,
  Info,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Star,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBiking,
  FaCheck,
  FaRestroom,
  FaStar,
  FaUtensils,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function AttractionDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { formatPrice } = useCurrency();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find attraction by URL param
  const attractionSlug = params.attraction as string;
  const initialAttraction = mockAttractions.find(
    (attraction) => formatToSlug(attraction.name) === attractionSlug
  );

  const [currentAttraction, setCurrentAttraction] = useState(initialAttraction);

  // Update current attraction when URL param changes
  useEffect(() => {
    const foundAttraction = mockAttractions.find(
      (attraction) => formatToSlug(attraction.name) === attractionSlug
    );
    console.log("Found attraction:", foundAttraction);
    setCurrentAttraction(foundAttraction);
    setSelectedImageIndex(0); // Reset image index when attraction changes
  }, [attractionSlug]);

  // Handle attraction change from selector
  const handleAttractionChange = (newAttractionId: string) => {
    const newAttraction = mockAttractions.find(
      (attraction) => attraction.id === newAttractionId
    );
    if (newAttraction) {
      const newSlug = formatToSlug(newAttraction.name);
      // Update URL without reloading the page
      router.replace(`/attractions/${newSlug}`, { scroll: false });
    }
  };

  if (!currentAttraction) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Attraction not found</h1>
            <Button onClick={() => router.push("/attractions")}>
              Browse all attractions
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to attractions
        </Button>

        {/* Attraction Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <Label className="font-medium text-sm">Choose Attraction:</Label>
            <Select
              value={currentAttraction?.id || ""}
              onValueChange={handleAttractionChange}
            >
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select an attraction" />
              </SelectTrigger>
              <SelectContent>
                {mockAttractions.map((attraction) => (
                  <SelectItem
                    key={attraction.id}
                    value={attraction.id}
                    variant="classic"
                  >
                    {attraction.name}, {attraction.location.city}
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
              src={currentAttraction.images[selectedImageIndex]}
              alt={currentAttraction.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="bottom-6 left-6 absolute text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {currentAttraction.type}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {currentAttraction.category}
                </Badge>
              </div>
              <h1 className="mb-2 font-bold text-4xl">
                {currentAttraction.name}
              </h1>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">
                  {currentAttraction.location.city},{" "}
                  {currentAttraction.location.country}
                </span>
                <Separator
                  orientation="vertical"
                  className="bg-white/30 mx-2 h-6"
                />
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>{currentAttraction.reviews.rating}</span>
                  <span className="text-sm">
                    ({currentAttraction.reviews.totalReviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex gap-2 mt-4">
            {currentAttraction.images
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
                    alt={`${currentAttraction.name} ${index + 1}`}
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
                <TabsTrigger value="visit">Visit Info</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Info className="w-5 h-5" />
                      About {currentAttraction.name}
                    </div>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">
                      {currentAttraction.description}
                    </p>

                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Duration</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Recommended visit:</span>
                            <span>
                              {currentAttraction.duration.recommended}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Minimum visit:</span>
                            <span>{currentAttraction.duration.minimum}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Best Time to Visit</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentAttraction.bestTimeToVisit.map(
                            (time, index) => (
                              <Badge key={index} variant="outline">
                                {time}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <MapPin className="w-5 h-5" />
                      Location & Getting There
                    </div>
                    <div className="mb-4">
                      <p className="text-slate-600 text-sm dark:text-slate-400">
                        {currentAttraction.location.address}
                      </p>
                    </div>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-semibold">Transportation</h4>
                        <ul className="space-y-2 text-sm">
                          {currentAttraction.transportation.publicTransport.map(
                            (transport, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <FaCheck className="w-5 h-5 text-green-500" />
                                {transport}
                              </li>
                            )
                          )}
                        </ul>
                        {currentAttraction.transportation.parking && (
                          <div className="flex items-center gap-2 mt-2 text-sm">
                            <Car className="w-4 h-4" />
                            <span>Parking available</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold">Walking Distance</h4>
                        <div className="space-y-2 text-sm">
                          {currentAttraction.transportation.walkingDistance.map(
                            (distance, index) => (
                              <div key={index}>{distance}</div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="visit" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Clock className="w-5 h-5" />
                      Opening Hours
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="gap-4 grid grid-cols-2">
                        <div className="flex justify-between">
                          <span>Monday:</span>
                          <span>{currentAttraction.openingHours.monday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tuesday:</span>
                          <span>{currentAttraction.openingHours.tuesday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Wednesday:</span>
                          <span>
                            {currentAttraction.openingHours.wednesday}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Thursday:</span>
                          <span>{currentAttraction.openingHours.thursday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday:</span>
                          <span>{currentAttraction.openingHours.friday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>{currentAttraction.openingHours.saturday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>{currentAttraction.openingHours.sunday}</span>
                        </div>
                        {currentAttraction.openingHours.holidays && (
                          <div className="flex justify-between col-span-2">
                            <span>Holidays:</span>
                            <span>
                              {currentAttraction.openingHours.holidays}
                            </span>
                          </div>
                        )}
                      </div>
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
                            {currentAttraction.pricing.adult === 0
                              ? "FREE"
                              : formatPrice(currentAttraction.pricing.adult)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Child:</span>
                          <span className="font-semibold">
                            {currentAttraction.pricing.child === 0
                              ? "FREE"
                              : formatPrice(currentAttraction.pricing.child)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Senior:</span>
                          <span className="font-semibold">
                            {currentAttraction.pricing.senior === 0
                              ? "FREE"
                              : formatPrice(currentAttraction.pricing.senior)}
                          </span>
                        </div>
                        {currentAttraction.pricing.student && (
                          <div className="flex justify-between">
                            <span>Student:</span>
                            <span className="font-semibold">
                              {currentAttraction.pricing.student === 0
                                ? "FREE"
                                : formatPrice(
                                    currentAttraction.pricing.student
                                  )}
                            </span>
                          </div>
                        )}
                        {currentAttraction.pricing.family && (
                          <div className="flex justify-between col-span-2">
                            <span>Family Package:</span>
                            <span className="font-semibold">
                              {currentAttraction.pricing.family === 0
                                ? "FREE"
                                : formatPrice(currentAttraction.pricing.family)}
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
                        {currentAttraction.tickets.advanceBooking ? (
                          <FaCheck className="w-5 h-5 text-green-500" />
                        ) : (
                          <IoClose className="w-5 h-5 text-red-500" />
                        )}
                        <span className="text-sm">
                          {currentAttraction.tickets.advanceBooking
                            ? "Advance booking recommended"
                            : "Walk-in only"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {currentAttraction.tickets.skipTheLine ? (
                          <FaCheck className="w-5 h-5 text-green-500" />
                        ) : (
                          <IoClose className="w-5 h-5 text-red-500" />
                        )}
                        <span className="text-sm">
                          {currentAttraction.tickets.skipTheLine
                            ? "Skip-the-line tickets available"
                            : "Standard queue only"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {currentAttraction.tickets.groupDiscounts ? (
                          <FaCheck className="w-5 h-5 text-green-500" />
                        ) : (
                          <IoClose className="w-5 h-5 text-red-500" />
                        )}
                        <span className="text-sm">
                          {currentAttraction.tickets.groupDiscounts
                            ? "Group discounts available"
                            : "No group discounts"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {currentAttraction.restrictions.length > 0 && (
                  <Card>
                    <div className="px-6">
                      <div className="mb-4 font-semibold text-lg">
                        Restrictions
                      </div>
                      <ul className="space-y-2 text-sm">
                        {currentAttraction.restrictions.map(
                          (restriction, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <IoClose className="w-5 h-5 text-red-500" />
                              {restriction}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="features" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="mb-4 font-semibold text-lg">
                      Features & Highlights
                    </div>
                    <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
                      {currentAttraction.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-muted p-2 rounded-lg"
                        >
                          <Camera className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="mb-4 font-semibold text-lg">Amenities</div>
                    <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
                      {currentAttraction.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {amenity.toLowerCase().includes("wifi") && (
                            <Wifi className="w-4 h-4 text-primary" />
                          )}
                          {amenity.toLowerCase().includes("shop") && (
                            <ShoppingBag className="w-4 h-4 text-primary" />
                          )}
                          {amenity.toLowerCase().includes("cafe") && (
                            <Coffee className="w-4 h-4 text-primary" />
                          )}
                          {amenity.toLowerCase().includes("food") && (
                            <FaUtensils className="w-4 h-4 text-tertiary" />
                          )}
                          {amenity.toLowerCase().includes("restroom") && (
                            <FaRestroom className="w-4 h-4 text-primary" />
                          )}
                          {amenity.toLowerCase().includes("bike") && (
                            <FaBiking className="w-4 h-4 text-secondary" />
                          )}
                          {!amenity.toLowerCase().includes("wifi") &&
                            !amenity.toLowerCase().includes("shop") &&
                            !amenity.toLowerCase().includes("cafe") &&
                            !amenity.toLowerCase().includes("food") &&
                            !amenity.toLowerCase().includes("restroom") &&
                            !amenity.toLowerCase().includes("bike") && (
                              <FaCheck className="w-4 h-4 text-tertiary"></FaCheck>
                            )}
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {currentAttraction.accessibility && (
                  <Card>
                    <div className="px-6">
                      <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                        <Accessibility className="w-5 h-5" />
                        Accessibility
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          {currentAttraction.accessibility ? (
                            <FaCheck className="w-5 h-5 text-green-500" />
                          ) : (
                            <IoClose className="w-5 h-5 text-red-500" />
                          )}
                          <span className="text-sm">
                            {currentAttraction.accessibility
                              .wheelchairAccessible
                              ? "Wheelchair accessible"
                              : "Not wheelchair accessible"}
                          </span>
                        </div>
                        {currentAttraction.accessibility.audioGuides && (
                          <div className="flex items-center gap-2">
                            <FaCheck className="w-5 h-5 text-green-500" />
                            <span className="text-sm">
                              Audio guides available
                            </span>
                          </div>
                        )}
                        {currentAttraction.accessibility.signLanguage && (
                          <div className="flex items-center gap-2">
                            <FaCheck className="w-5 h-5 text-green-500" />
                            <span className="text-sm">
                              Sign language support
                            </span>
                          </div>
                        )}
                        {currentAttraction.accessibility.notes && (
                          <p className="mt-2 text-slate-600 text-sm dark:text-slate-400">
                            {currentAttraction.accessibility.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                )}
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
                          {currentAttraction.reviews.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(currentAttraction.reviews.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-slate-600 text-sm dark:text-slate-400">
                          {currentAttraction.reviews.totalReviews} reviews
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Review Highlights</h4>
                      <div className="space-y-2">
                        {currentAttraction.reviews.highlights.map(
                          (highlight, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <FaStar className="w-5 h-5"></FaStar>
                              <span className="text-sm">{highlight}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <div className="px-6">
                <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <Info className="w-5 h-5" />
                  Quick Info
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span>{currentAttraction.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span>{currentAttraction.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{currentAttraction.duration.recommended}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      {currentAttraction.reviews.rating}
                    </span>
                  </div>
                  {currentAttraction.yearBuilt && (
                    <div className="flex justify-between">
                      <span>Built:</span>
                      <span>{currentAttraction.yearBuilt}</span>
                    </div>
                  )}
                  {currentAttraction.architect && (
                    <div className="flex justify-between">
                      <span>Architect:</span>
                      <span>{currentAttraction.architect}</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {(currentAttraction.contact.phone ||
              currentAttraction.contact.email ||
              currentAttraction.contact.website) && (
              <Card>
                <div className="px-6">
                  <div className="mb-4 font-semibold text-lg">
                    Contact Information
                  </div>
                  <div className="space-y-3 text-sm">
                    {currentAttraction.contact.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{currentAttraction.contact.phone}</span>
                      </div>
                    )}
                    {currentAttraction.contact.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{currentAttraction.contact.email}</span>
                      </div>
                    )}
                    {currentAttraction.contact.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <a
                          href={currentAttraction.contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            )}

            <Card>
              <div className="px-6">
                <div className="mb-4 font-semibold text-lg">Tags</div>
                <div className="flex flex-wrap gap-2">
                  {currentAttraction.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Button className="w-full" size="lg">
              Book Tickets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
