"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockHotels } from "@/data/hotels";
import { formatToSlug } from "@/lib/utils/format";
import {
  ArrowLeft,
  Bed,
  CheckCircle,
  Clock,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function HotelDetailPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const { state: cartState, dispatch } = useCart();
  const { formatPrice } = useCurrency();

  // Find the hotel based on the slug
  const hotelSlug = params.hotel as string;
  const hotel =
    mockHotels.find((h) => formatToSlug(h.name) === hotelSlug) || mockHotels[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [checkInDate, setCheckInDate] = useState(
    searchParams.get("checkin") || ""
  );
  const [checkOutDate, setCheckOutDate] = useState(
    searchParams.get("checkout") || ""
  );
  const [guests, setGuests] = useState({
    adults: parseInt(searchParams.get("adults") || "2"),
    children: parseInt(searchParams.get("children") || "0"),
  });
  const [selectedRoom, setSelectedRoom] = useState(hotel.rooms.types[0]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 1;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
  };

  const nights = calculateNights();
  const totalPrice = selectedRoom.pricing.baseRate * nights;

  const handleAddToCart = async () => {
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }

    setIsAddingToCart(true);

    const hotelBooking = {
      id: `hotel-${formatToSlug(hotel.name)}-${formatToSlug(selectedRoom.name)}-${checkInDate}-${checkOutDate}`,
      type: "hotel" as const,
      name: `${hotel.name} - ${selectedRoom.name}`,
      description: `${hotel.starRating}-star ${hotel.type} in ${hotel.location.city} • ${selectedRoom.name}`,
      image: hotel.images[0],
      price: selectedRoom.pricing.baseRate,
      dates: {
        startDate: checkInDate,
        endDate: checkOutDate,
      },
      guests: guests.adults + guests.children,
      location: `${hotel.location.city}, ${hotel.location.country}`,
      features: selectedRoom.amenities.slice(0, 3),
      cancellationPolicy: hotel.policies.cancellation,
    };

    // Check if this exact hotel booking already exists
    if (cartHelpers.checkIfDuplicate(cartState.items, hotelBooking)) {
      toast.error(
        `${hotel.name} - ${selectedRoom.name} for these dates is already in your cart`
      );
      setIsAddingToCart(false);
      return;
    }

    cartHelpers.addItem(dispatch, hotelBooking);
    toast.success(`${hotel.name} booking added to cart!`);
    setIsAddingToCart(false);
  };

  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.push("/hotels")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Hotels
        </Button>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative mb-4 rounded-lg h-96 overflow-hidden">
                <Image
                  src={hotel.images[selectedImage]}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <div className="top-4 left-4 absolute">
                  <Badge variant="secondary" className="bg-white text-black">
                    {hotel.type.charAt(0).toUpperCase() + hotel.type.slice(1)}
                  </Badge>
                </div>
                <div className="top-4 right-4 absolute flex items-center">
                  {renderStarRating(hotel.starRating)}
                </div>
              </div>

              <div className="gap-2 grid grid-cols-4">
                {hotel.images.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${hotel.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Hotel Information */}
            <div className="mb-8">
              <div className="mb-4">
                <h1 className="mb-2 font-bold text-3xl text-slate-900 dark:text-white">
                  {hotel.name}
                </h1>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600">
                      {hotel.location.address}, {hotel.location.city},{" "}
                      {hotel.location.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{hotel.rating}</span>
                    <span className="text-slate-500">
                      ({hotel.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="mb-6 text-slate-600 dark:text-slate-400">
                {hotel.description}
              </p>

              {/* Awards */}
              {hotel.awards && hotel.awards.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 font-semibold text-lg">
                    Awards & Recognition
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {hotel.awards.map((award, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-amber-200 text-amber-600"
                      >
                        <Shield className="mr-1 w-3 h-3" />
                        {award}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Nearby Attractions */}
              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-lg">
                  Nearby Attractions
                </h3>
                <div className="gap-2 grid grid-cols-2">
                  {hotel.location.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-green-500" />
                      <span className="text-sm">{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Room Types */}
            <div className="mb-8">
              <h2 className="mb-6 font-bold text-2xl text-slate-900 dark:text-white">
                Available Rooms
              </h2>
              <div className="space-y-4">
                {hotel.rooms.types.map((room) => (
                  <Card
                    key={room.id}
                    className={`cursor-pointer transition-colors ${
                      selectedRoom.id === room.id
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                        : "hover:bg-gray-50 dark:hover:bg-gray-900"
                    }`}
                    onClick={() => setSelectedRoom(room)}
                  >
                    <CardContent className="p-6">
                      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                        <div className="relative rounded-lg h-32 overflow-hidden">
                          <Image
                            src={room.images[0]}
                            alt={room.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-bold text-lg">{room.name}</h3>
                          <p className="text-slate-600 text-sm">
                            {room.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {room.capacity.adults} adults,{" "}
                              {room.capacity.children} children
                            </span>
                            <span className="flex items-center gap-1">
                              <Bed className="w-3 h-3" />
                              {room.capacity.beds
                                .map((bed) => `${bed.count} ${bed.type}`)
                                .join(", ")}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between">
                          <div className="text-right">
                            <p className="font-bold text-xl">
                              {formatPrice(room.pricing.baseRate)}
                            </p>
                            <p className="text-slate-500 text-sm">per night</p>
                          </div>
                          {selectedRoom.id === room.id && (
                            <Badge className="self-end">Selected</Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="mb-6 font-bold text-2xl text-slate-900 dark:text-white">
                Hotel Amenities
              </h2>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-semibold">General</h3>
                  <div className="space-y-2">
                    {hotel.amenities.general.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold">Recreation</h3>
                  <div className="space-y-2">
                    {hotel.amenities.recreation.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div>
              <h2 className="mb-6 font-bold text-2xl text-slate-900 dark:text-white">
                Hotel Policies
              </h2>
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">Check-in:</span>
                    <span>{hotel.policies.checkIn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">Check-out:</span>
                    <span>{hotel.policies.checkOut}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="mt-0.5 w-4 h-4 text-green-500" />
                    <div>
                      <span className="font-medium">Cancellation:</span>
                      <p className="text-slate-600 text-sm">
                        {hotel.policies.cancellation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Users className="mt-0.5 w-4 h-4 text-purple-500" />
                    <div>
                      <span className="font-medium">Pet Policy:</span>
                      <p className="text-slate-600 text-sm">
                        {hotel.policies.petPolicy}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5 w-4 h-4 text-red-500" />
                    <div>
                      <span className="font-medium">Smoking Policy:</span>
                      <p className="text-slate-600 text-sm">
                        {hotel.policies.smokingPolicy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="top-6 sticky">
              <CardHeader>
                <CardTitle>Book Your Stay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="checkin">Check-in Date</Label>
                  <Input
                    id="checkin"
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div>
                  <Label htmlFor="checkout">Check-out Date</Label>
                  <Input
                    id="checkout"
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    min={checkInDate || new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="gap-2 grid grid-cols-2">
                  <div>
                    <Label htmlFor="adults">Adults</Label>
                    <Input
                      id="adults"
                      type="number"
                      min="1"
                      max="10"
                      value={guests.adults}
                      onChange={(e) =>
                        setGuests({
                          ...guests,
                          adults: parseInt(e.target.value) || 1,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="children">Children</Label>
                    <Input
                      id="children"
                      type="number"
                      min="0"
                      max="10"
                      value={guests.children}
                      onChange={(e) =>
                        setGuests({
                          ...guests,
                          children: parseInt(e.target.value) || 0,
                        })
                      }
                    />
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-semibold">Selected Room</h3>
                  <p className="font-medium">{selectedRoom.name}</p>
                  <p className="text-slate-600 text-sm">
                    {selectedRoom.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Room Rate:</span>
                    <span className="font-medium">
                      {formatPrice(selectedRoom.pricing.baseRate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">
                      {nights} night{nights !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || !checkInDate || !checkOutDate}
                  className="w-full"
                >
                  {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
