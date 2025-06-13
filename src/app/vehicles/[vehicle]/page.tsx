"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockVehicles } from "@/data/vehicles";
import { formatToSlug } from "@/lib/utils/format";
import {
  ArrowLeft,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  Fuel,
  MapPin,
  Phone,
  Settings,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";



export default function VehicleDetailPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const { dispatch } = useCart();
  const { formatPrice } = useCurrency();

  // Find the vehicle based on the slug
  const vehicleSlug = params.vehicle as string;
  const vehicle = mockVehicles.find(v => formatToSlug(v.name) === vehicleSlug) || mockVehicles[0];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [pickupDate, setPickupDate] = useState(
    searchParams.get("pickup") || ""
  );
  const [returnDate, setReturnDate] = useState(
    searchParams.get("return") || ""
  );
  const [pickupLocation, setPickupLocation] = useState(
    searchParams.get("location") || "new-york"
  );
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
        pickupLocation === "all"
          ? "Multiple Locations"
          : pickupLocation || "Location TBD",
      features: vehicle.features,
      cancellationPolicy: "Flexible cancellation up to 24 hours before pickup",
    };

    cartHelpers.addItem(dispatch, rentalItem);
    toast.success(`${vehicle.name} added to cart!`);
    setIsAddingToCart(false);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Vehicles
        </Button>

        <div className="gap-8 grid lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-lg h-96 overflow-hidden">
              <Image
                src={vehicle.images[selectedImage]}
                alt={vehicle.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="gap-4 grid grid-cols-3">
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-slate-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${vehicle.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <Badge variant="secondary" className="mb-2 capitalize">
                    {vehicle.type.replace("-", " ")}
                  </Badge>
                  <h1 className="mb-2 font-bold text-3xl text-slate-900 dark:text-white">
                    {vehicle.name}
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400">
                    {vehicle.brand} {vehicle.model} • {vehicle.year}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{vehicle.rating}</span>
                  <span className="text-slate-500">
                    ({vehicle.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                {vehicle.description}
              </p>
            </div>

            {/* Key Specs */}
            <div className="gap-4 grid grid-cols-2">
              <div className="flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">
                    {vehicle.specifications.seatingCapacity} Seats
                  </p>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    Seating Capacity
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                <Fuel className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">
                    {vehicle.specifications.fuelType}
                  </p>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    Fuel Type
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                <Settings className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">
                    {vehicle.specifications.transmission}
                  </p>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    Transmission
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                <Car className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">
                    {vehicle.specifications.topSpeed}
                  </p>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    Top Speed
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book This Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="gap-4 grid grid-cols-2">
                  <div>
                    <Label htmlFor="pickup-date">Pickup Date</Label>
                    <Input
                      id="pickup-date"
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="return-date">Return Date</Label>
                    <Input
                      id="return-date"
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="pickup-location">Pickup Location</Label>
                  <select
                    id="pickup-location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="flex bg-background file:bg-transparent disabled:opacity-50 px-3 py-2 border border-input file:border-0 rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full file:font-medium text-sm placeholder:text-muted-foreground file:text-foreground file:text-sm disabled:cursor-not-allowed focus-visible:outline-none"
                  >
                    {vehicle.availability.locations.map((location) => (
                      <option
                        key={location.toLowerCase().replace(" ", "-")}
                        value={location.toLowerCase().replace(" ", "-")}
                      >
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Daily Rate:</span>
                    <span className="font-medium">
                      {formatPrice(vehicle.pricing.daily)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">
                      {days} day{days !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || !pickupDate || !returnDate}
                  className="w-full"
                >
                  {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="gap-8 grid lg:grid-cols-3 mt-12">
          {/* Specifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Specifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {vehicle.specifications.engine && (
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    Engine:
                  </span>
                  <span className="font-medium">
                    {vehicle.specifications.engine}
                  </span>
                </div>
              )}
              {vehicle.specifications.acceleration && (
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    Acceleration:
                  </span>
                  <span className="font-medium">
                    {vehicle.specifications.acceleration}
                  </span>
                </div>
              )}
              {vehicle.specifications.fuelEconomy && (
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    Fuel Economy:
                  </span>
                  <span className="font-medium">
                    {vehicle.specifications.fuelEconomy}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="gap-2 grid grid-cols-1">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Insurance & Policies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Insurance & Policies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium">Included Insurance:</h4>
                <ul className="space-y-1">
                  {vehicle.insurance.included.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Optional Insurance:</h4>
                <ul className="space-y-1">
                  {vehicle.insurance.optional.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-slate-200 dark:border-slate-700 border-t">
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  Minimum age: {vehicle.availability.minimumAge} years
                </p>
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  License required:{" "}
                  {vehicle.availability.licenseRequired.join(", ")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex justify-center items-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Need Help?</p>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    +1 (310) 477-8845
                  </p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Available Locations</p>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    {vehicle.availability.locations.length} cities nationwide
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
