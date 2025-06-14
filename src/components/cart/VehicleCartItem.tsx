"use client";

import { CartItem } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import {
  Calendar,
  Car,
  MapPin,
  Minus,
  Plus,
  Shield,
  Trash2,
  Users,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";

interface VehicleCartItemProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onGuestsChange: (id: string, guests: number) => void;
  onRemove: (id: string) => void;
}

export default function VehicleCartItem({
  item,
  onQuantityChange,
  onGuestsChange,
  onRemove,
}: VehicleCartItemProps) {
  const { formatPrice } = useCurrency();

  return (
    <Card className="p-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex md:flex-row flex-col">
          {/* Image */}
          <div className="md:w-1/3">
            <div
              className="relative bg-cover bg-center h-48 md:h-full"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <Badge className="top-4 left-4 absolute bg-white/90 text-slate-900">
                <Car className="mr-1 w-3 h-3" />
                Vehicle Rental
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:w-2/3">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                  {item.name}
                </h3>
                <div className="flex items-center gap-4 mb-3 text-slate-600 text-sm dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(item.dates.startDate).toLocaleDateString()} -{" "}
                    {new Date(item.dates.endDate).toLocaleDateString()}
                  </div>
                </div>
                <p className="mb-4 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemove(item.id)}
                className="hover:bg-red-50 text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.features.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {item.features.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{item.features.length - 3} more
                </Badge>
              )}
            </div>

            {/* Vehicle Quantity and Passengers */}
            <div className="flex sm:flex-row flex-col gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Label className="font-medium text-slate-700 text-sm dark:text-slate-300">
                  Vehicles:
                </Label>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="w-8 font-medium text-center text-sm">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Label className="font-medium text-slate-700 text-sm dark:text-slate-300">
                  <Users className="inline mr-1 w-3 h-3" />
                  Passengers:
                </Label>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onGuestsChange(item.id, item.guests - 1)}
                    disabled={item.guests <= 1}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="w-8 font-medium text-center text-sm">
                    {item.guests}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onGuestsChange(item.id, item.guests + 1)}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* License Notice */}
            {item.quantity > 1 && (
              <div className="bg-amber-50 dark:bg-amber-950/20 mb-4 p-3 border border-amber-200 dark:border-amber-800 rounded-lg">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium text-sm">
                    License Requirement
                  </span>
                </div>
                <p className="mt-1 text-amber-600 text-xs dark:text-amber-500">
                  Each vehicle requires an individual valid driver's license.
                  Multiple vehicles cannot be driven by the same person
                  simultaneously.
                </p>
              </div>
            )}

            {/* Pricing */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {item.originalPrice && item.originalPrice > item.price && (
                  <span className="text-slate-500 text-sm line-through">
                    {formatPrice(item.originalPrice)}
                  </span>
                )}
                <span className="font-semibold text-lg text-slate-900 dark:text-white">
                  {formatPrice(item.price)}
                </span>
                <span className="text-slate-600 text-sm dark:text-slate-400">
                  per vehicle
                </span>
              </div>
              <div className="text-right">
                <div className="text-slate-600 text-sm dark:text-slate-400">
                  Subtotal: {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-slate-50 dark:bg-slate-800 mt-4 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
                <Shield className="w-4 h-4" />
                <span className="font-medium">Cancellation:</span>
                <span>{item.cancellationPolicy}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
