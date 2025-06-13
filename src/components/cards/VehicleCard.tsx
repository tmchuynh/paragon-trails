"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cartHelpers, useCart } from "@/context/CartContext";
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
  const { dispatch } = useCart();
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

    const rentalItem = {
      id: `${formatToSlug(vehicle.name)}-${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      type: "vehicle" as const,
      name: vehicle.name,
      description: `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${vehicle.description}`,
      image: vehicle.images[0],
      price: vehicle.pricing.daily,
      dates: {
        startDate: pickupDate || new Date().toISOString().split("T")[0],
        endDate:
          returnDate ||
          new Date(Date.now() + 24 * 60 * 60 * 1000)
            .toISOString()
            .split("T")[0],
      },
      guests: vehicle.specifications.seatingCapacity || 1,
      location:
        location === "all" ? "Multiple Locations" : location || "Location TBD",
      features: vehicle.features,
      cancellationPolicy: "Flexible cancellation up to 24 hours before pickup",
    };

    cartHelpers.addItem(dispatch, rentalItem);
    toast.success(`${vehicle.name} added to cart!`);
    setIsAddingToCart(false);
  };

  const handleViewDetails = () => {
    const queryParams = new URLSearchParams({
      pickup: pickupDate || "",
      return: returnDate || "",
      location: location || "",
    });

    router.push(
      `/vehicles/${formatToSlug(vehicle.name)}?${queryParams.toString()}`
    );
  };

  return (
    <Card className="hover:shadow-xl transition-shadow overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-48">
          <Image
            src={vehicle.images[0]}
            alt={vehicle.name}
            fill
            className="object-cover"
          />
          <div className="top-4 left-4 absolute">
            <Badge variant="secondary" className="capitalize">
              {vehicle.type.replace("-", " ")}
            </Badge>
          </div>
          <div className="top-4 right-4 absolute">
            <Badge variant="outline" className="bg-white/90">
              {vehicle.category}
            </Badge>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="mb-1 font-bold text-lg text-slate-900 dark:text-white">
                {vehicle.name}
              </h3>
              <p className="text-slate-600 text-sm dark:text-slate-400">
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

          <p className="mb-4 text-slate-600 text-sm dark:text-slate-400 line-clamp-2">
            {vehicle.description}
          </p>

          {/* Key Specifications */}
          <div className="gap-4 grid grid-cols-2 mb-4">
            <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
              <Users className="w-4 h-4" />
              <span>
                {vehicle.specifications.seatingCapacity || "N/A"} seats
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
              <Fuel className="w-4 h-4" />
              <span>{vehicle.specifications.fuelType}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
              <Settings className="w-4 h-4" />
              <span>{vehicle.specifications.transmission}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
              <MapPin className="w-4 h-4" />
              <span>{vehicle.availability.locations.length} locations</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
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

          <Separator className="my-4" />

          {/* Pricing */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-bold text-2xl text-slate-900 dark:text-white">
                ${vehicle.pricing.daily}
                <span className="font-normal text-base text-slate-600 dark:text-slate-400">
                  /day
                </span>
              </p>
              {days > 1 && (
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  ${totalPrice} for {days} days
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-slate-600 text-sm dark:text-slate-400">
                Weekly
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                ${vehicle.pricing.weekly}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="gap-2 grid grid-cols-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Info className="mr-2 w-4 h-4" />
                  Details
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>{vehicle.name}</SheetTitle>
                  <SheetDescription>
                    {vehicle.brand} {vehicle.model} ({vehicle.year})
                  </SheetDescription>
                </SheetHeader>

                <div className="space-y-6 mt-6">
                  {/* Image Gallery */}
                  <div className="space-y-4">
                    {vehicle.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg h-48 overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${vehicle.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="mb-2 font-semibold">Description</h4>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="mb-3 font-semibold">Specifications</h4>
                    <div className="space-y-2">
                      {vehicle.specifications.engine && (
                        <div className="flex justify-between">
                          <span className="text-slate-600 text-sm dark:text-slate-400">
                            Engine:
                          </span>
                          <span className="font-medium text-sm">
                            {vehicle.specifications.engine}
                          </span>
                        </div>
                      )}
                      {vehicle.specifications.transmission && (
                        <div className="flex justify-between">
                          <span className="text-slate-600 text-sm dark:text-slate-400">
                            Transmission:
                          </span>
                          <span className="font-medium text-sm">
                            {vehicle.specifications.transmission}
                          </span>
                        </div>
                      )}
                      {vehicle.specifications.topSpeed && (
                        <div className="flex justify-between">
                          <span className="text-slate-600 text-sm dark:text-slate-400">
                            Top Speed:
                          </span>
                          <span className="font-medium text-sm">
                            {vehicle.specifications.topSpeed}
                          </span>
                        </div>
                      )}
                      {vehicle.specifications.acceleration && (
                        <div className="flex justify-between">
                          <span className="text-slate-600 text-sm dark:text-slate-400">
                            Acceleration:
                          </span>
                          <span className="font-medium text-sm">
                            {vehicle.specifications.acceleration}
                          </span>
                        </div>
                      )}
                      {vehicle.specifications.fuelEconomy && (
                        <div className="flex justify-between">
                          <span className="text-slate-600 text-sm dark:text-slate-400">
                            Fuel Economy:
                          </span>
                          <span className="font-medium text-sm">
                            {vehicle.specifications.fuelEconomy}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="mb-3 font-semibold">Features</h4>
                    <div className="gap-2 grid grid-cols-2">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="bg-green-100 dark:bg-green-900 rounded-full w-2 h-2"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h4 className="mb-3 font-semibold">Availability</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600 text-sm dark:text-slate-400">
                          Minimum Age:
                        </span>
                        <span className="font-medium text-sm">
                          {vehicle.availability.minimumAge} years
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 text-sm dark:text-slate-400">
                          License Required:
                        </span>
                        <span className="font-medium text-sm">
                          {vehicle.availability.licenseRequired.join(", ")}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-600 text-sm dark:text-slate-400">
                          Locations:
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {vehicle.availability.locations.map(
                            (location, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {location}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h4 className="mb-3 font-semibold">Pricing</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600 text-sm dark:text-slate-400">
                          Daily Rate:
                        </span>
                        <span className="font-medium text-sm">
                          ${vehicle.pricing.daily}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 text-sm dark:text-slate-400">
                          Weekly Rate:
                        </span>
                        <span className="font-medium text-sm">
                          ${vehicle.pricing.weekly}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 text-sm dark:text-slate-400">
                          Monthly Rate:
                        </span>
                        <span className="font-medium text-sm">
                          ${vehicle.pricing.monthly}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                    className="w-full"
                  >
                    {isAddingToCart ? "Adding..." : "Add to Cart"}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <Button onClick={handleAddToCart} disabled={isAddingToCart}>
              {isAddingToCart ? "Adding..." : "Add to Cart"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
