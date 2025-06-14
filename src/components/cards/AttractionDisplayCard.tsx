"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useCurrency } from "@/context/CurrencyContext";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { formatToSlug } from "@/lib/utils/format";
import {
  Accessibility,
  Calendar,
  Clock,
  MapPin,
  Star,
  Ticket,
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
  const { formatPrice } = useCurrency();

  const handleCardClick = () => {
    const slug = formatToSlug(attraction.name);
    router.push(`/attractions/${slug}`);
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
    <Card
      className="group hover:shadow-xl p-0 transition-all cursor-pointer overflow-hidden"
      onClick={handleCardClick}
    >
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
          {attraction.pricing.adult > 0
            ? formatPrice(attraction.pricing.adult)
            : "Free"}
        </div>
        <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full font-medium text-sm text-white">
          <MapPin className="inline mr-1 w-3 h-3" />
          {attraction.location.city}, {attraction.location.country}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-slate-900 text-xl dark:group-hover:text-blue-400 dark:text-white group-hover:text-blue-600 transition-colors">
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

        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="font-semibold text-slate-600 text-sm">
              From {formatPrice(attraction.pricing.adult)}/person
            </p>
            <p className="text-slate-500 text-xs">
              Category: {attraction.category}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
