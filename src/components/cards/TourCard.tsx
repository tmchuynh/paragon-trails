import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useCurrency } from "@/context/CurrencyContext";
import { Tour } from "@/lib/interfaces/services/tours";
import { Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TourCard({ tour }: { tour: Tour }) {
  const router = useRouter();
  const { formatPrice } = useCurrency();

  return (
    <Card
      className="group hover:shadow-xl p-0 transition-all cursor-pointer overflow-hidden"
      onClick={() =>
        router.push(`/tours/${tour.id.toLowerCase().replace(/\s+/g, "-")}`)
      }
    >
      <div className="relative h-64">
        <Image
          src={tour.images[0]}
          alt={tour.title}
          fill
          className="transition-transform group-hover:scale-105 object-cover"
        />
        <div className="top-4 right-4 absolute bg-white px-3 py-1 rounded-full font-semibold text-black">
          {formatPrice(tour.pricing.adult)}
        </div>
        <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full font-medium text-sm text-white">
          <MapPin className="inline mr-1 w-3 h-3" />
          {tour.location.city}, {tour.location.country}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-slate-900 text-xl dark:group-hover:text-blue-400 dark:text-white group-hover:text-blue-600 transition-colors">
            {tour.title}
          </h3>
        </div>

        <p className="mb-4 text-slate-600 text-sm dark:text-slate-400 line-clamp-2">
          {tour.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="text-xs">
            {tour.type}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {tour.category}
          </Badge>
        </div>

        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
              <Clock className="w-4 h-4" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>
                {tour.reviews.rating} ({tour.reviews.totalReviews})
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900 text-xl dark:text-white">
              {formatPrice(tour.pricing.adult)}
            </div>
            <div className="text-slate-500 text-sm">per adult</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
