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
        return "gradientPrimary";
      case "museum":
        return "gradientInfo";
      case "park":
        return "gradientSecondary";
      case "tower":
        return "gradient";
      case "temple":
        return "gradientSuccess";
      default:
        return "gradientWarning";
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
            variant={`${getTypeColor(attraction.type)}`}
            className={`text-xs font-medium `}
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
