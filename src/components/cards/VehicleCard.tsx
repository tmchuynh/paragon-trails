"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCurrency } from "@/context/CurrencyContext";
import { Vehicle } from "@/lib/interfaces/services/vehicles";
import { formatToSlug } from "@/lib/utils/format";
import { Fuel, MapPin, Settings, Star, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface VehicleCardProps {
  vehicle: Vehicle;
  pickupDate?: string;
  returnDate?: string;
  location?: string;
}

export default function VehicleCard({
  vehicle,
  pickupDate,
  returnDate,
  location,
}: VehicleCardProps) {
  const router = useRouter();
  const { formatPrice } = useCurrency();

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 1;
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);
    const diffTime = Math.abs(returnD.getTime() - pickup.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
  };

  const days = calculateDays();
  const totalPrice = vehicle.pricing.daily * days;

  return (
    <Card
      className="group hover:shadow-xl p-0 transition-all cursor-pointer overflow-hidden"
      onClick={() => {
        const vehicleSlug = formatToSlug(vehicle.name);
        const searchParams = new URLSearchParams();
        if (pickupDate) searchParams.set("pickup", pickupDate);
        if (returnDate) searchParams.set("return", returnDate);
        if (location && location !== "all")
          searchParams.set("location", location);

        const url = `/vehicles/${vehicleSlug}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
        router.push(url);
      }}
    >
      <CardContent className="flex flex-col p-0 h-full">
        <div className="relative h-48">
          <Image
            src={vehicle.images[0]}
            alt={vehicle.name}
            fill
            className="object-cover"
          />

          <div className="top-4 right-4 absolute">
            <Badge variant={"secondary"}>{vehicle.category}</Badge>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-xl dark:group-hover:text-blue-400 dark:text-white group-hover:text-blue-600 transition-colors">
                  {vehicle.name}
                </h3>
                <p>
                  {vehicle.brand} • {vehicle.year}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-medium text-sm">{vehicle.rating}</span>
                <span className="text-sm">({vehicle.reviews})</span>
              </div>
            </div>
            <p className="mb-4 line-clamp-3">{vehicle.description}</p>
            {/* Key Specifications */}
            <div className="gap-4 grid grid-cols-2 mb-4">
              {vehicle.specifications.seatingCapacity && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{vehicle.specifications.seatingCapacity} seats</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Fuel className="w-4 h-4" />
                <span>{vehicle.specifications.fuelType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span>{vehicle.specifications.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{vehicle.availability.locations.length} locations</span>
              </div>
            </div>
            {/* Features */}
            <div className="mb-4 h-[2em]">
              <div className="flex flex-wrap gap-1">
                {vehicle.features.slice(0, 3).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {vehicle.features.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{vehicle.features.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Pricing */}
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="font-bold text-2xl">
                  {formatPrice(vehicle.pricing.daily)}
                  <span className="font-normal text-base">/day</span>
                </p>
                {days > 1 && (
                  <p>
                    {formatPrice(totalPrice)} for {days} days
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="font-bold text-xl">
                  {formatPrice(vehicle.pricing.weekly)}
                  <span className="font-normal text-base">/week</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
