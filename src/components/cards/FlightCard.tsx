"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCurrency } from "@/context/CurrencyContext";
import { Flight } from "@/lib/interfaces/services/flights";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { convertTo12HourFormat } from "@/lib/utils/format";
import { Plane, Wifi } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FlightCard({
  flight,
  flightPrice,
  handleAddToCart,
  classType,
  dataSource,
}: {
  flight: Flight;
  flightPrice: number;
  handleAddToCart: (flight: any) => void;
  classType: string;
  dataSource?: "adsb" | "fallback";
}) {
  const router = useRouter();
  const { formatPrice } = useCurrency();

  return (
    <Card
      key={flight.id}
      className="hover:shadow-lg px-2 py-4 transition-shadow cursor-pointer"
      onClick={() => router.push(`/flights/${flight.id}`)}
    >
      <CardContent className="-mt-5 p-6">
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-4">
          {/* Flight Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8">
                <Plane className="w-4 h-4 text-blue-600 dark:text-blue-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{flight.airline}</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  {flight.flightNumber} • {flight.aircraft}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="font-bold text-xl">
                  {convertTo12HourFormat(flight.departure.time)}
                </p>
                <p className="font-medium text-sm">{flight.origin.code}</p>
                <p className="text-slate-600 text-xs">{flight.origin.city}</p>
              </div>

              <div className="relative flex-1">
                <div className="border-slate-300 border-t-2"></div>
                <div className="top-[-8px] left-1/2 absolute bg-slate-300 rounded-full w-4 h-4 transform -translate-x-1/2"></div>
                <p className="mt-1 font-medium text-center text-slate-600 text-sm">
                  {flight.duration}
                </p>
                {flight.stops > 0 && (
                  <p className="text-center text-slate-500 text-xs">
                    {flight.stops} stop
                    {flight.stops > 1 ? "s" : ""}
                  </p>
                )}
              </div>

              <div className="text-center">
                <p className="font-bold text-xl">
                  {convertTo12HourFormat(flight.arrival.time)}
                </p>
                <p className="font-medium text-sm">{flight.destination.code}</p>
                <p className="text-slate-600 text-xs">
                  {flight.destination.city}
                </p>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="mb-3 font-semibold text-sm">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {flight.amenities.slice(0, 3).map((amenity, index) => (
                <Badge key={index} variant="softPrimary" className="text-xs">
                  {amenity === "In-flight Wi-Fi" && (
                    <Wifi className="mr-1 w-3 h-3" />
                  )}
                  {amenity}
                </Badge>
              ))}
              {flight.amenities.length > 3 && (
                <Badge variant="softInfo" className="text-xs">
                  +{flight.amenities.length - 3} more
                </Badge>
              )}
            </div>

            <div className="flex items-end gap-1 mt-3">
              {displayRatingStars(flight.rating, 5, {
                size: "sm",
                showRatingNumber: true,
                align: "left",
              })}
              <span className="mb-0.25 text-slate-500 text-xs">
                ({flight.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Price and Book */}
          <div className="text-right flex flex-row-reverse lg:flex-col justify-between lg:justify-center items-end lg:items-end">
            <div>
              <p className="text-sm capitalize">{classType}</p>
              <p className="-mt-2 font-bold text-2xl text-blue-600">
                {formatPrice(flightPrice)}
                <span className="text-foreground text-sm">/per person</span>
              </p>
              <div className="mt-2">
                {flight.availability[
                  classType as keyof typeof flight.availability
                ] > 0 ? (
                  <Badge variant="outlineSuccess">
                    {
                      flight.availability[
                        classType as keyof typeof flight.availability
                      ]
                    }{" "}
                    seats left
                  </Badge>
                ) : (
                  <Badge variant="softDanger">Sold out</Badge>
                )}
              </div>
            </div>

            <Button
              onClick={() => handleAddToCart(flight)}
              disabled={
                flight.availability[
                  classType as keyof typeof flight.availability
                ] === 0
              }
              className="mt-4 lg:mt-6"
            >
              {flight.availability[
                classType as keyof typeof flight.availability
              ] === 0
                ? "Sold Out"
                : "Add to Cart"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
