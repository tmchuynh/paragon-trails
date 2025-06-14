"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { mockVehicles } from "@/data/vehicles";
import { formatToSlug, toTitleCase } from "@/lib/utils/format";
import {
  ArrowLeft,
  CalendarIcon,
  Camera,
  Car,
  CheckCircle,
  Clock,
  DollarSign,
  Fuel,
  Heart,
  Info,
  MapIcon,
  MapPin,
  Phone,
  Plane,
  Settings,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function VehicleDetailPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const { state: cartState, dispatch } = useCart();
  const { formatPrice } = useCurrency();

  // Find the vehicle based on the slug
  const vehicleSlug = params.vehicle as string;
  const initialVehicle = mockVehicles.find(
    (v) => formatToSlug(v.name) === vehicleSlug
  );

  const [vehicle, setCurrentVehicle] = useState(initialVehicle);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [pickupDate, setPickupDate] = useState(
    searchParams.get("pickup") || ""
  );
  const [returnDate, setReturnDate] = useState(
    searchParams.get("return") || ""
  );
  const [pickupLocation, setPickupLocation] = useState(
    searchParams.get("location") || "Select Location"
  );
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showCalendar, setShowCalendar] = useState<"pickup" | "return" | null>(
    null
  );
  const [calendarDate, setCalendarDate] = useState<Date | undefined>();

  // Update current vehicle when URL param changes
  useEffect(() => {
    const foundVehicle = mockVehicles.find(
      (vehicle) => formatToSlug(vehicle.name) === vehicleSlug
    );
    setCurrentVehicle(foundVehicle);
    setSelectedImage(0); // Reset image index when vehicle changes
  }, [vehicleSlug]);

  // Handle vehicle change from selector
  const handleVehicleChange = (newVehicleId: string) => {
    const newVehicle = mockVehicles.find(
      (vehicle) => vehicle.id === newVehicleId
    );
    if (newVehicle) {
      const newSlug = formatToSlug(newVehicle.name);
      // Update URL without reloading the page
      router.replace(`/vehicles/${newSlug}`, { scroll: false });
    }
  };

  if (!vehicle) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Vehicle not found</h1>
            <Button onClick={() => router.push("/vehicles")}>
              Browse all vehicles
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 1;
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);
    const diffTime = Math.abs(returnD.getTime() - pickup.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
  };

  const days = calculateDays();

  // Calculate optimized pricing with cascading rates
  const calculateOptimizedPricing = () => {
    const months = Math.floor(days / 30);
    const remainingDaysAfterMonths = days % 30;
    const weeks = Math.floor(remainingDaysAfterMonths / 7);
    const remainingDays = remainingDaysAfterMonths % 7;

    const monthlyTotal = months * vehicle.pricing.monthly;
    const weeklyTotal = weeks * vehicle.pricing.weekly;
    const dailyTotal = remainingDays * vehicle.pricing.daily;
    const optimizedTotal = monthlyTotal + weeklyTotal + dailyTotal;

    // Calculate what it would cost at daily rate only
    const dailyOnlyTotal = days * vehicle.pricing.daily;
    const savings = dailyOnlyTotal - optimizedTotal;

    return {
      months,
      weeks,
      remainingDays,
      monthlyTotal,
      weeklyTotal,
      dailyTotal,
      optimizedTotal,
      dailyOnlyTotal,
      savings,
      breakdown: {
        monthly:
          months > 0
            ? {
                count: months,
                rate: vehicle.pricing.monthly,
                total: monthlyTotal,
              }
            : null,
        weekly:
          weeks > 0
            ? { count: weeks, rate: vehicle.pricing.weekly, total: weeklyTotal }
            : null,
        daily:
          remainingDays > 0
            ? {
                count: remainingDays,
                rate: vehicle.pricing.daily,
                total: dailyTotal,
              }
            : null,
      },
    };
  };

  const pricingDetails = calculateOptimizedPricing();
  const totalPrice = pricingDetails.optimizedTotal * quantity;

  // Format date to string
  const formatDateToString = (date: Date | undefined) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  // Parse string to date
  const parseStringToDate = (dateString: string) => {
    if (!dateString) return undefined;
    return new Date(dateString);
  };

  // Handle calendar date selection
  const handleCalendarSelect = (date: Date | undefined) => {
    if (!date) return;

    if (showCalendar === "pickup") {
      const newPickupDate = formatDateToString(date);
      setPickupDate(newPickupDate);

      // Clear return date if it's before or equal to the new pickup date
      if (returnDate && newPickupDate && returnDate <= newPickupDate) {
        setReturnDate("");
      }
    } else if (showCalendar === "return") {
      setReturnDate(formatDateToString(date));
    }

    setShowCalendar(null);
  };

  // Check if this vehicle rental is already in cart
  const isInCart = () => {
    const rentalId = `vehicle-${formatToSlug(vehicle.name)}-${pickupDate}-${returnDate}-${formatToSlug(pickupLocation)}`;
    return cartState.items.some((item) => item.id === rentalId);
  };

  // Helper function to get minimum return date (day after pickup)
  const getMinReturnDate = () => {
    if (!pickupDate) {
      return new Date().toISOString().split("T")[0];
    }
    const pickupDateObj = new Date(pickupDate);
    pickupDateObj.setDate(pickupDateObj.getDate() + 1);
    return pickupDateObj.toISOString().split("T")[0];
  };

  const handleAddToCart = async () => {
    if (!pickupDate || !returnDate) {
      toast.error("Please select pickup and return dates");
      return;
    }

    setIsAddingToCart(true);

    const startDate = pickupDate;
    const endDate = returnDate;
    const locationStr =
      pickupLocation === "all"
        ? "Multiple Locations"
        : pickupLocation || "Location TBD";

    const rentalItem = {
      id: `vehicle-${formatToSlug(vehicle.name)}-${startDate}-${endDate}-${formatToSlug(locationStr)}`,
      type: "vehicle" as const,
      name: vehicle.name,
      description: `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${vehicle.description}`,
      image: vehicle.images[0],
      price: pricingDetails.optimizedTotal, // Use optimized pricing instead of daily rate
      dates: {
        startDate,
        endDate,
      },
      guests: vehicle.specifications.seatingCapacity || 1,
      location: locationStr,
      features: vehicle.features.slice(0, 3),
      cancellationPolicy: "Flexible cancellation up to 24 hours before pickup",
    };

    // Add item to cart - the cart context will handle quantity properly
    for (let i = 0; i < quantity; i++) {
      cartHelpers.addItem(dispatch, rentalItem);
    }

    toast.success(
      `${vehicle.name} rental${quantity > 1 ? "s" : ""} added to cart!`
    );

    setIsAddingToCart(false);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.push("/vehicles")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Vehicles
        </Button>

        {/* Vehicle Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <Label className="font-medium text-sm">Choose Vehicle:</Label>
            <Select
              value={vehicle?.id || ""}
              onValueChange={handleVehicleChange}
            >
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select a vehicle" />
              </SelectTrigger>
              <SelectContent>
                {mockVehicles.map((v) => (
                  <SelectItem key={v.id} value={v.id}>
                    {v.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <div className="relative h-96">
            <Image
              src={vehicle.images[selectedImage]}
              alt={vehicle.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="bottom-6 left-6 absolute text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-slate-900 capitalize"
                >
                  {vehicle.type.replace("-", " ")}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white"
                >
                  {vehicle.year}
                </Badge>
              </div>
              <h1 className="mb-2 font-bold text-4xl">{vehicle.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  <span className="text-lg">
                    {vehicle.brand} {vehicle.model}
                  </span>
                </div>
                <Separator orientation="vertical" className="bg-white/30 h-6" />
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="text-lg">
                    {vehicle.specifications.seatingCapacity} Seats
                  </span>
                </div>
                <Separator orientation="vertical" className="bg-white/30 h-6" />
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-lg">
                    {vehicle.rating} ({vehicle.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {vehicle.images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {vehicle.images
                .slice(0, 4)
                .map((image: string, index: number) => (
                  <Button
                    key={index}
                    variant={selectedImage === index ? "default" : "outline"}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-24 h-16 p-0 overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${vehicle.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </Button>
                ))}
              {vehicle.images.length > 4 && (
                <Button
                  variant="outline"
                  className="flex-col w-24 h-16 text-xs"
                  onClick={() => setSelectedImage(4)}
                >
                  <Camera className="mb-1 w-4 h-4" />+
                  {vehicle.images.length - 4} more
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 w-full">
                <TabsTrigger
                  value="overview"
                  className="flex items-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Specs
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="policies"
                  className="flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Policies
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="p-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Info className="w-5 h-5" />
                      About This Vehicle
                    </div>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">
                      {vehicle.description}
                    </p>

                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Vehicle Highlights</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm">
                              {vehicle.rating}/5 Star Rating
                            </span>
                            <Badge variant="warning">Top Rated</Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-green-500" />
                            <span className="text-sm">
                              {vehicle.specifications.seatingCapacity} Passenger
                              Capacity
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Fuel className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">
                              {vehicle.specifications.fuelType} Engine
                            </span>
                            {vehicle.specifications.fuelType === "Electric" && (
                              <Badge variant="success">Eco-Friendly</Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Specifications</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Transmission:</span>
                            <span className="font-medium text-sm">
                              {vehicle.specifications.transmission}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Top Speed:</span>
                            <span className="font-medium text-sm">
                              {vehicle.specifications.topSpeed}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Fuel Economy:</span>
                            <span className="font-medium text-sm">
                              {vehicle.specifications.fuelEconomy || "N/A"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-0">
                  <CardContent className="p-6">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center mb-4 font-semibold text-lg">
                        Quick Facts
                        <Badge
                          variant={
                            vehicle.availability.isAvailable
                              ? "success"
                              : "error"
                          }
                          size="sm"
                        >
                          {vehicle.availability.isAvailable
                            ? "Available"
                            : "Unavailable"}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Vehicle Type</span>
                        <Badge variant="secondary" className="capitalize">
                          {vehicle.type.replace("-", " ")}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Brand</span>
                        <span className="font-medium">{vehicle.brand}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Model Year</span>
                        <span className="font-medium">{vehicle.year}</span>
                      </div>
                      {vehicle.specifications.seatingCapacity && (
                        <div className="flex justify-between">
                          <span>Capacity</span>
                          <span className="font-medium">
                            {vehicle.specifications.seatingCapacity}{" "}
                            {vehicle.specifications.seatingCapacity > 1
                              ? "Seats"
                              : "Seat"}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Rating</span>
                        <div className="flex items-center gap-1">
                          <span className="font-medium">
                            {vehicle.rating}/5
                          </span>
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <MapPin className="w-5 h-5" />
                      Availability & Locations
                    </div>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-semibold">
                          Available Locations
                        </h4>
                        <div className="space-y-2">
                          {vehicle.availability.locations.map(
                            (location: string, index: number) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <MapPin className="w-3 h-3 text-green-500" />
                                <span className="text-sm">{location}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold">
                          Rental Requirements
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Minimum Age:</strong>{" "}
                            {vehicle.availability.minimumAge} years
                          </p>
                          <p>
                            <strong>License Required:</strong>{" "}
                            {vehicle.availability.licenseRequired.join(", ")}
                          </p>
                          <p>
                            <strong>Availability:</strong>{" "}
                            {vehicle.availability.isAvailable
                              ? "Available"
                              : "Currently Unavailable"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="space-y-6">
                <Card className="p-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Settings className="w-5 h-5" />
                      Technical Specifications
                    </div>
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-4">
                        <h3 className="mb-3 font-semibold">
                          Engine & Performance
                        </h3>
                        <div className="space-y-3">
                          {vehicle.specifications.engine && (
                            <div className="flex justify-between">
                              <span className="text-slate-600">Engine:</span>
                              <span className="font-medium">
                                {vehicle.specifications.engine}
                              </span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              Transmission:
                            </span>
                            <span className="font-medium">
                              {vehicle.specifications.transmission}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Fuel Type:</span>
                            <span className="font-medium">
                              {vehicle.specifications.fuelType}
                            </span>
                          </div>
                          {vehicle.specifications.acceleration && (
                            <div className="flex justify-between">
                              <span className="text-slate-600">
                                Acceleration:
                              </span>
                              <span className="font-medium">
                                {vehicle.specifications.acceleration}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="mb-3 font-semibold">
                          Capacity & Dimensions
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              Seating Capacity:
                            </span>
                            <span className="font-medium">
                              {vehicle.specifications.seatingCapacity} persons
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Top Speed:</span>
                            <span className="font-medium">
                              {vehicle.specifications.topSpeed}
                            </span>
                          </div>
                          {vehicle.specifications.fuelEconomy && (
                            <div className="flex justify-between">
                              <span className="text-slate-600">
                                Fuel Economy:
                              </span>
                              <span className="font-medium">
                                {vehicle.specifications.fuelEconomy}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="space-y-6">
                <Card className="p-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <CheckCircle className="w-5 h-5" />
                      Vehicle Features & Amenities
                    </div>
                    <ul className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {vehicle.features.map(
                        (feature: string, index: number) => (
                          <li key={index}>{feature}</li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="policies" className="space-y-6">
                <Card className="p-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Shield className="w-5 h-5" />
                      Rental Policies & Insurance
                    </div>
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-3 font-semibold">
                            Included Insurance:
                          </h4>
                          <ul className="space-y-2">
                            {vehicle.insurance.included.map(
                              (item: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-3 font-semibold">
                            Optional Insurance:
                          </h4>
                          <ul className="space-y-2">
                            {vehicle.insurance.optional.map(
                              (item: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <Clock className="w-3 h-3 text-slate-400" />
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      <div className="md:col-span-2 pt-4 border-t">
                        <h4 className="mb-3 font-semibold">
                          Rental Requirements:
                        </h4>
                        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span>
                              Minimum age: {vehicle.availability.minimumAge}{" "}
                              years
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            <span>
                              License required:{" "}
                              {vehicle.availability.licenseRequired.join(", ")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Contact Information */}
                <Card className="mt-8 p-0">
                  <CardContent className="p-6">
                    <div className="flex justify-around items-center gap-6 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Need Help?</p>
                          <p className="text-sm">+1 (310) 477-8845</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Available Locations</p>
                          <p className="text-sm">
                            {vehicle.availability.locations.length} cities
                            worldwide
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <DollarSign className="w-5 h-5" />
                  Pricing
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Daily Rate:</span>
                    <span className="font-semibold">
                      {formatPrice(vehicle.pricing.daily)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Weekly Rate:</span>
                    <div className="text-right">
                      <span className="font-medium">
                        {formatPrice(vehicle.pricing.weekly)}
                      </span>
                      <div className="text-green-600 text-xs">
                        Save{" "}
                        {formatPrice(
                          vehicle.pricing.daily * 7 - vehicle.pricing.weekly
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Monthly Rate:</span>
                    <div className="text-right">
                      <span className="font-medium">
                        {formatPrice(vehicle.pricing.monthly)}
                      </span>
                      <div className="text-green-600 text-xs">
                        Save{" "}
                        {formatPrice(
                          vehicle.pricing.daily * 30 - vehicle.pricing.monthly
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/30 mt-2 p-2 rounded text-muted-foreground text-xs">
                    💡 Longer rentals automatically use the best rates for
                    maximum savings!
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center text-xl">
                  Book This Vehicle
                  {pricingDetails.savings > 0 && (
                    <Badge variant="success" className="text-xs">
                      💰 Smart Pricing
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Date</Label>
                  <DropdownMenu
                    open={showCalendar === "pickup"}
                    onOpenChange={(open) =>
                      setShowCalendar(open ? "pickup" : null)
                    }
                  >
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="justify-start w-full font-normal text-left"
                      >
                        <CalendarIcon className="mr-2 w-4 h-4" />
                        {pickupDate ? (
                          new Date(pickupDate).toLocaleDateString()
                        ) : (
                          <span className="text-muted-foreground">
                            Pick a date
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-0 w-auto" align="start">
                      <Calendar
                        mode="single"
                        selected={parseStringToDate(pickupDate)}
                        onSelect={handleCalendarSelect}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="return">Return Date</Label>
                  <DropdownMenu
                    open={showCalendar === "return"}
                    onOpenChange={(open) =>
                      setShowCalendar(open ? "return" : null)
                    }
                  >
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="justify-start w-full font-normal text-left"
                        disabled={!pickupDate}
                      >
                        <CalendarIcon className="mr-2 w-4 h-4" />
                        {returnDate ? (
                          new Date(returnDate).toLocaleDateString()
                        ) : (
                          <span className="text-muted-foreground">
                            Pick a date
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-0 w-auto" align="start">
                      <Calendar
                        mode="single"
                        selected={parseStringToDate(returnDate)}
                        onSelect={handleCalendarSelect}
                        disabled={(date) => {
                          if (!pickupDate) return true;
                          const pickup = new Date(pickupDate);
                          pickup.setDate(pickup.getDate() + 1);
                          return date <= new Date(pickupDate);
                        }}
                        initialFocus
                      />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="gap-4 grid grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Pickup Location</Label>
                    <Select
                      value={pickupLocation}
                      onValueChange={setPickupLocation}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="select-location">
                          {toTitleCase(pickupLocation)}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {vehicle.availability.locations.map((location) => (
                          <SelectItem
                            key={location.toLowerCase().replace(" ", "-")}
                            value={location.toLowerCase().replace(" ", "-")}
                          >
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Number of Vehicles</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max="10"
                      value={quantity}
                      className="border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value) || 1)
                      }
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  {/* Pricing Breakdown */}
                  {pricingDetails.breakdown.monthly && (
                    <div className="flex justify-between">
                      <span>
                        Monthly Rate ({pricingDetails.breakdown.monthly.count}{" "}
                        month
                        {pricingDetails.breakdown.monthly.count > 1 ? "s" : ""}
                        ):
                      </span>
                      <span className="font-medium">
                        {formatPrice(pricingDetails.breakdown.monthly.total)}
                      </span>
                    </div>
                  )}
                  {pricingDetails.breakdown.weekly && (
                    <div className="flex justify-between">
                      <span>
                        Weekly Rate ({pricingDetails.breakdown.weekly.count}{" "}
                        week
                        {pricingDetails.breakdown.weekly.count > 1 ? "s" : ""}):
                      </span>
                      <span className="font-medium">
                        {formatPrice(pricingDetails.breakdown.weekly.total)}
                      </span>
                    </div>
                  )}
                  {pricingDetails.breakdown.daily && (
                    <div className="flex justify-between">
                      <span>
                        Daily Rate ({pricingDetails.breakdown.daily.count} day
                        {pricingDetails.breakdown.daily.count > 1 ? "s" : ""}):
                      </span>
                      <span className="font-medium">
                        {formatPrice(pricingDetails.breakdown.daily.total)}
                      </span>
                    </div>
                  )}

                  {/* Show simple daily rate if less than 7 days */}
                  {days < 7 && (
                    <div className="flex justify-between">
                      <span>
                        Daily Rate ({days} day{days !== 1 ? "s" : ""}):
                      </span>
                      <span className="font-medium">
                        {formatPrice(pricingDetails.optimizedTotal)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">
                      {days} day{days !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of Vehicles:</span>
                    <span className="font-medium">{quantity}</span>
                  </div>

                  {/* Show savings if applicable */}
                  {pricingDetails.savings > 0 && (
                    <>
                      <Separator />
                      <div className="flex justify-between text-green-600">
                        <span>Savings (vs daily rate):</span>
                        <span className="font-medium">
                          -{formatPrice(pricingDetails.savings * quantity)}
                        </span>
                      </div>
                      <div className="text-muted-foreground text-xs">
                        You save by renting for longer periods!
                      </div>
                    </>
                  )}

                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                {!isInCart() ? (
                  <div className="space-y-3">
                    <Button
                      onClick={handleAddToCart}
                      disabled={isAddingToCart || !pickupDate || !returnDate}
                      className="w-full"
                      size="lg"
                    >
                      {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Heart className="mr-2 w-4 h-4" />
                      Add to Wishlist
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="gap-2 grid grid-cols-2">
                      <Button
                        variant="secondary"
                        onClick={() => router.push("/activities")}
                        className="flex items-center gap-2"
                        size="sm"
                      >
                        <MapIcon className="w-4 h-4" />
                        Activities
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => router.push("/hotels")}
                        className="flex items-center gap-2"
                        size="sm"
                      >
                        <Users className="w-4 h-4" />
                        Hotels
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => router.push("/attractions")}
                        className="flex items-center gap-2"
                        size="sm"
                      >
                        <Camera className="w-4 h-4" />
                        Attractions
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => router.push("/flights")}
                        className="flex items-center gap-2"
                        size="sm"
                      >
                        <Plane className="w-4 h-4" />
                        Flights
                      </Button>
                    </div>
                    <Badge
                      variant="success"
                      className="justify-center py-2 w-full"
                    >
                      ✅ Vehicle Added to Cart - Safe travels! 🚗
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
