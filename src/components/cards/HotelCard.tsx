"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Hotel } from "@/lib/interfaces/services/hotels";
import { formatToSlug } from "@/lib/utils/format";
import {
  Bath,
  Bed,
  Calendar,
  Car,
  Coffee,
  Dumbbell,
  MapPin,
  Star,
  Users,
  Utensils,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface HotelCardProps {
  hotel: Hotel;
  checkInDate?: string;
  checkOutDate?: string;
  guests?: {
    adults: number;
    children: number;
  };
}

export default function HotelCard({
  hotel,
  checkInDate,
  checkOutDate,
  guests = { adults: 2, children: 0 },
}: HotelCardProps) {
  const router = useRouter();
  const { dispatch } = useCart();
  const { formatPrice } = useCurrency();
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
  const totalPrice = hotel.pricing.priceRange.min * nights;

  const handleAddToCart = async () => {
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }

    setIsAddingToCart(true);

    const hotelItem = {
      id: `${formatToSlug(hotel.name)}-${Math.random().toString(36).substr(2, 9)}`,
      type: "hotel" as const,
      name: hotel.name,
      description: `${hotel.starRating}-star ${hotel.type} in ${hotel.location.city}`,
      image: hotel.images[0],
      price: hotel.pricing.priceRange.min,
      dates: {
        startDate: checkInDate,
        endDate: checkOutDate,
      },
      guests: guests.adults + guests.children,
      location: `${hotel.location.city}, ${hotel.location.country}`,
      features: hotel.amenities.general.slice(0, 3),
      cancellationPolicy: hotel.policies.cancellation,
    };

    cartHelpers.addItem(dispatch, hotelItem);
    toast.success(`${hotel.name} added to cart!`);
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

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();

    if (amenityLower.includes("wi-fi") || amenityLower.includes("wifi"))
      return Wifi;
    if (amenityLower.includes("fitness") || amenityLower.includes("gym"))
      return Dumbbell;
    if (amenityLower.includes("restaurant") || amenityLower.includes("dining"))
      return Utensils;
    if (amenityLower.includes("parking") || amenityLower.includes("valet"))
      return Car;
    if (amenityLower.includes("coffee") || amenityLower.includes("breakfast"))
      return Coffee;
    if (amenityLower.includes("bathroom") || amenityLower.includes("bath"))
      return Bath;
    if (amenityLower.includes("bed") || amenityLower.includes("room"))
      return Bed;
    if (
      amenityLower.includes("concierge") ||
      amenityLower.includes("front desk")
    )
      return Users;

    return Calendar; // Default icon
  };

  return (
    <Card className="hover:shadow-xl transition-shadow overflow-hidden">
      <div className="relative h-64">
        <Image
          src={hotel.images[0]}
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
        {hotel.awards && hotel.awards.length > 0 && (
          <div className="bottom-4 left-4 absolute">
            <Badge
              variant="outline"
              className="bg-white/90 border-amber-200 text-amber-600"
            >
              Award Winner
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="mb-2 font-bold text-slate-900 text-xl dark:text-white">
            {hotel.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-slate-500" />
            <span className="text-slate-600 text-sm">
              {hotel.location.city}, {hotel.location.country}
            </span>
          </div>
          <p className="text-slate-600 text-sm dark:text-slate-400 line-clamp-2">
            {hotel.description}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium text-slate-900 text-sm dark:text-white">
              {hotel.rating}
            </span>
            <span className="text-slate-500 text-sm">
              ({hotel.reviews} reviews)
            </span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <h4 className="mb-2 font-semibold text-sm">Popular Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.general.slice(0, 4).map((amenity, index) => {
              const IconComponent = getAmenityIcon(amenity);
              return (
                <div
                  key={index}
                  className="flex items-center gap-1 text-slate-600 text-xs"
                >
                  <IconComponent className="w-3 h-3" />
                  <span>{amenity}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Room info */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600">
              {hotel.rooms.totalRooms} rooms available
            </span>
            <span className="text-slate-600">
              From {hotel.rooms.types[0]?.capacity.adults || 2} guests
            </span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-slate-600 text-sm">From</p>
            <p className="font-bold text-2xl text-slate-900 dark:text-white">
              {formatPrice(hotel.pricing.priceRange.min)}
            </p>
            <p className="text-slate-500 text-xs">per night</p>
            {checkInDate && checkOutDate && nights > 1 && (
              <p className="text-slate-600 text-xs">
                {formatPrice(totalPrice)} for {nights} nights
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const hotelSlug = formatToSlug(hotel.name);
                const searchParams = new URLSearchParams();
                if (checkInDate) searchParams.set("checkin", checkInDate);
                if (checkOutDate) searchParams.set("checkout", checkOutDate);
                if (guests.adults)
                  searchParams.set("adults", guests.adults.toString());
                if (guests.children)
                  searchParams.set("children", guests.children.toString());

                const url = `/hotels/${hotelSlug}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
                router.push(url);
              }}
            >
              View Details
            </Button>
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={isAddingToCart || !checkInDate || !checkOutDate}
            >
              {isAddingToCart ? "Adding..." : "Book Now"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
