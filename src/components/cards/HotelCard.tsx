"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Hotel } from "@/lib/interfaces/services/hotels";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
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
  checkInDate?: Date;
  checkOutDate?: Date;
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
  const { state: cartState, dispatch } = useCart();
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
      id: `hotel-${formatToSlug(hotel.name)}-${checkInDate}-${checkOutDate}`,
      type: "hotel" as const,
      name: hotel.name,
      description: `${hotel.starRating}-star ${hotel.type} in ${hotel.location.city}`,
      image: hotel.images[0],
      price: hotel.pricing.priceRange.min,
      dates: {
        startDate: checkInDate.toISOString(),
        endDate: checkOutDate.toISOString(),
      },
      guests: guests.adults + guests.children,
      location: `${hotel.location.city}, ${hotel.location.country}`,
      features: hotel.amenities.general.slice(0, 3),
      cancellationPolicy: hotel.policies.cancellation,
    };

    // Check if this exact hotel booking already exists
    if (cartHelpers.checkIfDuplicate(cartState.items, hotelItem)) {
      toast.error(`${hotel.name} for these dates is already in your cart`);
      setIsAddingToCart(false);
      return;
    }

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

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "hotel":
        return "gradientWarning";
      case "resort":
        return "gradientInfo";
      case "boutique":
        return "gradientInfo";
      case "hostel":
        return "gradientSuccess";
      case "apartment":
        return "gradientPrimary";
      case "villa":
        return "gradientWarning";
      case "bed-and-breakfast":
        return "gradientSecondary";
      default:
        return "gradient";
    }
  };

  return (
    <Card
      className="group hover:shadow-xl p-0 transition-all cursor-pointer overflow-hidden"
      onClick={() => router.push(`/hotels/${formatToSlug(hotel.name)}`)}
    >
      <div className="relative h-64">
        <Image
          src={hotel.images[0]}
          alt={hotel.name}
          fill
          className="transition-transform group-hover:scale-105 object-cover"
        />
        <div className="top-4 left-4 absolute">
          <Badge variant={`${getTypeColor(hotel.type)}`}>
            {hotel.type.charAt(0).toUpperCase() + hotel.type.slice(1)}
          </Badge>
        </div>
        <Badge className="top-4 right-4 absolute" variant={"glassSuccess"}>
          {displayRatingStars(hotel.starRating, 5, {
            size: "sm",
          })}
        </Badge>
        {hotel.awards && hotel.awards.length > 0 && (
          <div className="bottom-4 left-4 absolute">
            <Badge variant="platinum">Award Winner</Badge>
          </div>
        )}
      </div>

      <CardContent className="-mt-5 p-6">
        <div className="mb-4">
          <h3 className="mb-2 font-bold text-slate-900 text-xl dark:group-hover:text-blue-400 dark:text-white group-hover:text-blue-600 transition-colors">
            {hotel.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-slate-600 text-sm dark:text-slate-400">
              {hotel.location.city}, {hotel.location.country}
            </span>
          </div>
          <p className="text-slate-600 text-sm dark:text-slate-400 line-clamp-2">
            {hotel.description}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
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
                <div key={index} className="flex items-center gap-1 text-xs">
                  <IconComponent className="w-3 h-3" />
                  <span>{amenity}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing and Actions */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-slate-600 text-sm dark:text-slate-400">From</p>
            <span className="font-bold text-2xl">
              {formatPrice(hotel.pricing.priceRange.min)}
            </span>{" "}
            <span className="text-slate-500 text-xs dark:text-slate-400 uppercase">
              /per night
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
