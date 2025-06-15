"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
// import { useCurrency } from "@/context/CurrencyContext"; // Removed as pricing is not available
import { Attraction } from "@/lib/api/attractions"; // Updated import path
import { formatToSlug } from "@/lib/utils/format";
import {
  // Accessibility, // Removed as specific accessibility data is not available
  // Calendar, // Removed as bestTimeToVisit is not available
  // Clock, // Removed as duration is not available
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AttractionDisplayCardProps {
  attraction: Attraction;
}

export default function AttractionDisplayCard({
  attraction,
}: AttractionDisplayCardProps) {
  const router = useRouter();
  // const { formatPrice } = useCurrency(); // Removed

  const handleCardClick = () => {
    // Assuming attraction.id can be used for navigation if name is not unique enough
    // Or, if Geoapify provides a slug or a more unique identifier in properties.name
    const slug = formatToSlug(attraction.name);
    router.push(`/attractions/${slug}?id=${attraction.id}`); // Pass ID for fetching details
  };

  const getTypeColor = (category?: string) => {
    if (!category) return "gradientWarning";
    switch (category.toLowerCase()) {
      case "monument":
      case "historic":
        return "gradientPrimary";
      case "museum":
        return "gradientInfo";
      case "park":
      case "nature":
        return "gradientSecondary";
      case "tourism.attraction": // Example category from Geoapify
      case "entertainment":
        return "gradient";
      case "religion": // Example category
        return "gradientSuccess";
      default:
        return "gradientWarning";
    }
  };

  const primaryCategory = attraction.categories?.[0];

  return (
    <Card
      className="group hover:shadow-xl p-0 transition-all cursor-pointer overflow-hidden"
      onClick={handleCardClick}
    >
      <div className="relative h-64">
        {attraction.images && attraction.images.length > 0 ? (
          <Image
            src={attraction.images[0]} // Assuming images might be added later or a placeholder
            alt={attraction.name}
            fill
            className="transition-transform group-hover:scale-105 object-cover"
          />
        ) : (
          <div className="flex justify-center items-center bg-gray-200 w-full h-full">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
        {primaryCategory && (
          <div className="top-4 left-4 absolute">
            <Badge
              variant={`${getTypeColor(primaryCategory)}`}
              className={`text-xs font-medium `}
            >
              {primaryCategory}
            </Badge>
          </div>
        )}
        {/* Pricing removed as it's not in the new Attraction type */}
        {/* <div className="top-4 right-4 absolute bg-white px-3 py-1 rounded-full font-semibold text-black">
          {attraction.pricing.adult > 0
            ? formatPrice(attraction.pricing.adult)
            : "Free"}
        </div> */}
        <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full font-medium text-sm text-white">
          <MapPin className="inline mr-1 w-3 h-3" />
          {attraction.city}, {attraction.country}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-slate-900 text-xl dark:group-hover:text-blue-400 dark:text-white group-hover:text-blue-600 transition-colors">
          {attraction.name}
        </h3>

        {attraction.description && (
          <p className="mb-4 text-slate-600 dark:text-slate-400 line-clamp-2">
            {attraction.description}
          </p>
        )}

        {/* Rating, reviews, and duration removed */}
        {/* <div className="flex items-center gap-4 mb-4">
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
        </div> */}

        {/* Best time to visit, accessibility, skip the line tickets removed */}
        {/* <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="softInfo" className="text-xs">
            <Calendar className="mr-1 w-3 h-3" />
            {attraction.bestTimeToVisit[0]}
          </Badge>
          {attraction.accessibility?.wheelchairAccessible && (
            <Badge variant="softSecondary" className="text-xs">
              <Accessibility className="mr-1 w-3 h-3" />
              Accessible
            </Badge>
          )}
          {attraction.tickets.skipTheLine && (
            <Badge variant="softSuccess" className="text-xs">
              <Ticket className="mr-1 w-3 h-3" />
              Skip Line
            </Badge>
          )}
        </div> */}

        <div className="flex justify-between items-center mt-4">
          <div className="space-y-1">
            {/* Pricing per person removed */}
            {/* <p className="font-semibold text-slate-600 text-sm">
              From {formatPrice(attraction.pricing.adult)}/person
            </p> */}
            {attraction.categories && attraction.categories.length > 0 && (
              <p className="text-slate-500 text-xs">
                Categories: {attraction.categories.join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
