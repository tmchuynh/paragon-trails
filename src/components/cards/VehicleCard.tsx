"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Vehicle } from "@/lib/interfaces/services/vehicles";
import { formatToSlug } from "@/lib/utils/format";
import { Fuel, Info, MapPin, Settings, Star, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

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
  const { state: cartState, dispatch } = useCart();
  const { formatPrice } = useCurrency();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

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

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    const startDate = pickupDate || new Date().toISOString().split("T")[0];
    const endDate =
      returnDate ||
      new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const locationStr =
      location === "all" ? "Multiple Locations" : location || "Location TBD";

    const rentalItem = {
      id: `vehicle-${formatToSlug(vehicle.name)}-${startDate}-${endDate}-${formatToSlug(locationStr)}`,
      type: "vehicle" as const,
      name: vehicle.name,
      description: `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${vehicle.description}`,
      image: vehicle.images[0],
      price: vehicle.pricing.daily,
      dates: {
        startDate,
        endDate,
      },
      guests: vehicle.specifications.seatingCapacity || 1,
      location: locationStr,
      features: vehicle.features,
      cancellationPolicy: "Flexible cancellation up to 24 hours before pickup",
    };

    // Check if this exact vehicle rental already exists
    if (cartHelpers.checkIfDuplicate(cartState.items, rentalItem)) {
      // For vehicles, we increase quantity instead of creating duplicates
      const existingItem = cartState.items.find(
        (item) =>
          item.name === rentalItem.name &&
          item.dates.startDate === rentalItem.dates.startDate &&
          item.dates.endDate === rentalItem.dates.endDate &&
          item.location === rentalItem.location
      );

      if (existingItem) {
        cartHelpers.updateQuantity(
          dispatch,
          existingItem.id,
          existingItem.quantity + 1
        );
        toast.success(
          `Added another ${vehicle.name} to cart! (${existingItem.quantity + 1} total)`
        );
        setIsAddingToCart(false);
        return;
      }
    }

    cartHelpers.addItem(dispatch, rentalItem);
    toast.success(`${vehicle.name} added to cart!`);
    setIsAddingToCart(false);
  };

  return (
    <Card className="hover:shadow-xl p-0 transition-shadow overflow-hidden">
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
                <h3 className="mb-1 font-bold text-lg text-slate-900 dark:text-white">
                  {vehicle.name}
                </h3>
                <p className="">
                  {vehicle.brand} • {vehicle.year}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-medium text-sm">{vehicle.rating}</span>
                <span className="text-slate-500 text-sm">
                  ({vehicle.reviews})
                </span>
              </div>
            </div>
            <p className="mb-4 line-clamp-3">{vehicle.description}</p>
            {/* Key Specifications */}
            <div className="gap-4 grid grid-cols-2 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>
                  {vehicle.specifications.seatingCapacity || "N/A"} seats
                </span>
              </div>
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
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-bold text-2xl text-slate-900 dark:text-white">
                  {formatPrice(vehicle.pricing.daily)}
                  <span className="font-normal text-base text-slate-600 dark:text-slate-400">
                    /day
                  </span>
                </p>
                {days > 1 && (
                  <p className="">
                    {formatPrice(totalPrice)} for {days} days
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="">Weekly</p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {formatPrice(vehicle.pricing.weekly)}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="gap-2 grid grid-cols-2">
              <Button
                variant="outline"
                className="w-full"
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
                <Info className="mr-2 w-4 h-4" />
                Details
              </Button>

              <Button onClick={handleAddToCart} disabled={isAddingToCart}>
                {isAddingToCart ? "Adding..." : "Add to Cart"}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
