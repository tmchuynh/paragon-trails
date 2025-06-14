"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { formatToSlug } from "@/lib/utils/format";
import {
  Accessibility,
  Calendar,
  Camera,
  Car,
  Clock,
  MapPin,
  Star,
  Ticket,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface AttractionCardProps {
  attraction: Attraction;
  visitDate?: string;
  visitors?: {
    adults: number;
    children: number;
    seniors: number;
  };
}

export default function AttractionCard({
  attraction,
  visitDate,
  visitors = { adults: 2, children: 0, seniors: 0 },
}: AttractionCardProps) {
  const router = useRouter();
  const { state: cartState, dispatch } = useCart();
  const { formatPrice } = useCurrency();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const calculateTotalPrice = () => {
    const adultPrice = attraction.pricing.adult * visitors.adults;
    const childPrice = attraction.pricing.child * visitors.children;
    const seniorPrice = attraction.pricing.senior * visitors.seniors;
    return adultPrice + childPrice + seniorPrice;
  };

  const isInCart = cartHelpers.isInCart(cartState, attraction.id);

  const handleAddToCart = async () => {
    if (isInCart) {
      toast.info("This attraction is already in your cart");
      return;
    }

    setIsAddingToCart(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      cartHelpers.addItem(dispatch, {
        id: attraction.id,
        name: attraction.name,
        type: "attraction",
        description: attraction.description,
        price: calculateTotalPrice(),
        image: attraction.images[0],
        dates: {
          startDate: visitDate || new Date().toISOString().split("T")[0],
          endDate: visitDate || new Date().toISOString().split("T")[0],
        },
        guests: visitors.adults + visitors.children + visitors.seniors,
        location: `${attraction.location.city}, ${attraction.location.country}`,
        features: attraction.features.slice(0, 3),
        cancellationPolicy: "Flexible cancellation up to 24 hours before",
      });

      toast.success(`${attraction.name} added to cart!`);
    } catch (error) {
      toast.error("Failed to add to cart. Please try again.");
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleViewDetails = () => {
    const slug = formatToSlug(attraction.name);
    router.push(`/attractions/${slug}`);
  };

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes("restaurant") || amenityLower.includes("food")) {
      return <Users className="w-3 h-3" />;
    }
    if (amenityLower.includes("parking") || amenityLower.includes("car")) {
      return <Car className="w-3 h-3" />;
    }
    if (
      amenityLower.includes("wheelchair") ||
      amenityLower.includes("accessible")
    ) {
      return <Accessibility className="w-3 h-3" />;
    }
    if (amenityLower.includes("shop") || amenityLower.includes("gift")) {
      return <Camera className="w-3 h-3" />;
    }
    return <Users className="w-3 h-3" />;
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "monument":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
      case "museum":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "park":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "tower":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "temple":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <Card className="group hover:shadow-xl h-full transition-all cursor-pointer overflow-hidden">
      <div className="relative h-64">
        <Image
          src={attraction.images[0]}
          alt={attraction.name}
          fill
          className="transition-transform group-hover:scale-105 object-cover"
        />
        <div className="top-4 left-4 absolute">
          <Badge
            className={`text-xs font-medium ${getTypeColor(attraction.type)}`}
          >
            {attraction.type}
          </Badge>
        </div>
        <div className="top-4 right-4 absolute bg-white px-3 py-1 rounded-full font-semibold text-black">
          {formatPrice(attraction.pricing.adult)}
        </div>
        <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full font-medium text-sm text-white">
          <MapPin className="inline mr-1 w-3 h-3" />
          {attraction.location.city}, {attraction.location.country}
        </div>
      </div>

      <CardContent className="flex flex-col flex-1 p-6">
        <div className="flex-1">
          <h3 className="mb-2 font-bold text-slate-900 text-xl dark:text-white group-hover:text-blue-600 transition-colors">
            {attraction.name}
          </h3>

          <p className="mb-4 text-slate-600 dark:text-slate-400 line-clamp-2">
            {attraction.description}
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center text-yellow-500">
              <Star className="mr-1 w-4 h-4 fill-current" />
              <span className="font-medium text-slate-900 text-sm dark:text-white">
                {attraction.rating}
              </span>
              <span className="ml-1 text-slate-500 text-xs">
                ({attraction.reviews.totalReviews.toLocaleString()})
              </span>
            </div>
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <Clock className="mr-1 w-4 h-4" />
              <span className="text-sm">{attraction.duration.recommended}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="text-xs">
              <Calendar className="mr-1 w-3 h-3" />
              {attraction.bestTimeToVisit[0]}
            </Badge>
            {attraction.accessibility?.wheelchairAccessible && (
              <Badge variant="secondary" className="text-xs">
                <Accessibility className="mr-1 w-3 h-3" />
                Accessible
              </Badge>
            )}
            {attraction.tickets.skipTheLine && (
              <Badge variant="secondary" className="text-xs">
                <Ticket className="mr-1 w-3 h-3" />
                Skip Line
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {attraction.amenities.slice(0, 3).map((amenity, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-1 text-xs"
              >
                {getAmenityIcon(amenity)}
                {amenity}
              </Badge>
            ))}
            {attraction.amenities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{attraction.amenities.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="font-semibold text-slate-600 text-sm dark:text-slate-400">
                From {formatPrice(attraction.pricing.adult)}/person
              </p>
              <p className="text-slate-500 text-xs">
                Category: {attraction.category}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                handleViewDetails();
              }}
            >
              View Details
            </Button>
            <Button
              size="sm"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              disabled={isAddingToCart || isInCart}
            >
              {isAddingToCart ? (
                <div className="flex items-center gap-2">
                  <div className="border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin" />
                  Adding...
                </div>
              ) : isInCart ? (
                "In Cart"
              ) : (
                "Add to Cart"
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
