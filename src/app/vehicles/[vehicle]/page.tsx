"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { formatToSlug } from "@/lib/utils/format";
import {
  ArrowLeft,
  Calendar,
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
  Plane,
  Phone,
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
    searchParams.get("location") || "new-york"
  );
  const [isAddingToCart, setIsAddingToCart] = useState(false);

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
  const totalPrice = vehicle.pricing.daily * days * quantity;

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
      price: vehicle.pricing.daily,
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
            <label className="font-medium text-sm">Choose Vehicle:</label>
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
                <Badge variant="secondary" className="bg-white text-black capitalize">
                  {vehicle.type.replace("-", " ")}
                </Badge>
                <Badge variant="secondary" className="bg-white text-black">
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
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-blue-500" : ""
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
          )}
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="specifications">Specs</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
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
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-green-500" />
                            <span className="text-sm">
                              {vehicle.specifications.seatingCapacity} Passenger Capacity
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Fuel className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">
                              {vehicle.specifications.fuelType} Engine
                            </span>
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

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <MapPin className="w-5 h-5" />
                      Availability & Locations
                    </div>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-semibold">Available Locations</h4>
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
                        <h4 className="mb-3 font-semibold">Rental Requirements</h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Minimum Age:</strong> {vehicle.availability.minimumAge} years
                          </p>
                          <p>
                            <strong>License Required:</strong>{" "}
                            {vehicle.availability.licenseRequired.join(", ")}
                          </p>
                          <p>
                            <strong>Availability:</strong>{" "}
                            {vehicle.availability.isAvailable ? "Available" : "Currently Unavailable"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Settings className="w-5 h-5" />
                      Technical Specifications
                    </div>
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-4">
                        <h3 className="mb-3 font-semibold">Engine & Performance</h3>
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
                            <span className="text-slate-600">Transmission:</span>
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
                              <span className="text-slate-600">Acceleration:</span>
                              <span className="font-medium">
                                {vehicle.specifications.acceleration}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="mb-3 font-semibold">Capacity & Dimensions</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Seating Capacity:</span>
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
                              <span className="text-slate-600">Fuel Economy:</span>
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
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <CheckCircle className="w-5 h-5" />
                      Vehicle Features & Amenities
                    </div>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {vehicle.features.map((feature: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 border rounded-lg"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="policies" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Shield className="w-5 h-5" />
                      Rental Policies & Insurance
                    </div>
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-3 font-semibold">Included Insurance:</h4>
                          <ul className="space-y-2">
                            {vehicle.insurance.included.map((item: string, index: number) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-3 font-semibold">Optional Insurance:</h4>
                          <ul className="space-y-2">
                            {vehicle.insurance.optional.map((item: string, index: number) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <Clock className="w-3 h-3 text-slate-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="md:col-span-2 pt-4 border-t">
                        <h4 className="mb-3 font-semibold">Rental Requirements:</h4>
                        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span>Minimum age: {vehicle.availability.minimumAge} years</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            <span>
                              License required: {vehicle.availability.licenseRequired.join(", ")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex justify-center items-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Need Help?</p>
                  <p className="text-sm">+1 (310) 477-8845</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Available Locations</p>
                  <p className="text-sm">
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
