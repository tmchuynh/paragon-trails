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
import { mockHotels } from "@/data/hotels";
import { formatToSlug } from "@/lib/utils/format";
import {
  ArrowLeft,
  Bed,
  Camera,
  Car,
  CheckCircle,
  Clock,
  DollarSign,
  Heart,
  Info,
  MapIcon,
  MapPin,
  Plane,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSmoking } from "react-icons/fa";
import { toast } from "sonner";

export default function HotelDetailPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const { state: cartState, dispatch } = useCart();
  const { formatPrice } = useCurrency();

  // Find the hotel based on the slug
  const hotelSlug = params.hotel as string;
  const initialHotel = mockHotels.find(
    (h) => formatToSlug(h.name) === hotelSlug
  );

  const [currentHotel, setCurrentHotel] = useState(initialHotel);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(
    initialHotel?.rooms.types[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [checkInDate, setCheckInDate] = useState(
    searchParams.get("checkin") || ""
  );
  const [checkOutDate, setCheckOutDate] = useState(
    searchParams.get("checkout") || ""
  );
  const [guests, setGuests] = useState(
    parseInt(
      searchParams.get("guests") ||
        (
          parseInt(searchParams.get("adults") || "2") +
          parseInt(searchParams.get("children") || "0")
        ).toString()
    )
  );

  // Update current hotel when URL param changes
  useEffect(() => {
    const foundHotel = mockHotels.find(
      (hotel) => formatToSlug(hotel.name) === hotelSlug
    );
    setCurrentHotel(foundHotel);
    setSelectedImage(0); // Reset image index when hotel changes
    if (foundHotel) {
      setSelectedRoom(foundHotel.rooms.types[0]); // Reset to first room
    }
  }, [hotelSlug]);

  // Handle hotel change from selector
  const handleHotelChange = (newHotelId: string) => {
    const newHotel = mockHotels.find((hotel) => hotel.id === newHotelId);
    if (newHotel) {
      const newSlug = formatToSlug(newHotel.name);
      // Update URL without reloading the page
      router.replace(`/hotels/${newSlug}`, { scroll: false });
    }
  };

  if (!currentHotel) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Hotel not found</h1>
            <Button onClick={() => router.push("/hotels")}>
              Browse all hotels
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedRoom) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
          <div className="py-20 text-center">
            <h1 className="mb-4 font-bold text-2xl">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  // Check if this hotel booking is already in cart
  const isInCart = () => {
    const bookingId = `hotel-${formatToSlug(currentHotel.name)}-${formatToSlug(selectedRoom.name)}-${checkInDate}-${checkOutDate}`;
    return cartState.items.some((item) => item.id === bookingId);
  };

  // Helper function to get minimum checkout date (day after checkin)
  const getMinCheckoutDate = () => {
    if (!checkInDate) {
      return new Date().toISOString().split("T")[0];
    }
    const checkinDate = new Date(checkInDate);
    checkinDate.setDate(checkinDate.getDate() + 1);
    return checkinDate.toISOString().split("T")[0];
  };

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 1;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
  };

  const nights = calculateNights();
  const totalPrice = selectedRoom.pricing.baseRate * nights * quantity;

  // Check if selected rooms can accommodate the number of guests
  const canAccommodateGuests = () => {
    const totalCapacity = selectedRoom.capacity.maxOccupancy * quantity;
    return guests <= totalCapacity;
  };

  const getOccupancyWarning = () => {
    if (!canAccommodateGuests()) {
      const totalCapacity = selectedRoom.capacity.maxOccupancy * quantity;
      if (quantity === 1) {
        return `Selected room can accommodate maximum ${selectedRoom.capacity.maxOccupancy} guests. You have ${guests} guests.`;
      } else {
        return `${quantity} ${selectedRoom.name} rooms can accommodate maximum ${totalCapacity} guests (${selectedRoom.capacity.maxOccupancy} per room). You have ${guests} guests.`;
      }
    }
    return null;
  };

  const handleAddToCart = async () => {
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }

    setIsAddingToCart(true);

    const hotelBooking = {
      id: `hotel-${formatToSlug(currentHotel.name)}-${formatToSlug(selectedRoom.name)}-${checkInDate}-${checkOutDate}`,
      type: "hotel" as const,
      name: `${currentHotel.name} - ${selectedRoom.name}`,
      description: `${currentHotel.starRating}-star ${currentHotel.type} in ${currentHotel.location.city} • ${selectedRoom.name}`,
      image: currentHotel.images[0],
      price: selectedRoom.pricing.baseRate,
      dates: {
        startDate: checkInDate,
        endDate: checkOutDate,
      },
      guests: guests,
      location: `${currentHotel.location.city}, ${currentHotel.location.country}`,
      features: selectedRoom.amenities.slice(0, 3),
      cancellationPolicy: currentHotel.policies.cancellation,
    };

    // Add item to cart - the cart context will handle quantity properly
    for (let i = 0; i < quantity; i++) {
      cartHelpers.addItem(dispatch, hotelBooking);
    }

    toast.success(
      `${currentHotel.name} booking${quantity > 1 ? "s" : ""} added to cart!`
    );

    setIsAddingToCart(false);
  };

  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.push("/hotels")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Hotels
        </Button>

        {/* Hotel Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <Label className="font-medium text-sm">Choose Hotel:</Label>
            <Select
              value={currentHotel?.id || ""}
              onValueChange={handleHotelChange}
            >
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select a hotel" />
              </SelectTrigger>
              <SelectContent>
                {mockHotels.map((hotel) => (
                  <SelectItem key={hotel.id} value={hotel.id} variant="classic">
                    {hotel.name}
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
              src={currentHotel.images[selectedImage]}
              alt={currentHotel.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="bottom-6 left-6 absolute text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-white text-black">
                  {currentHotel.type.charAt(0).toUpperCase() +
                    currentHotel.type.slice(1)}
                </Badge>
                <Badge variant="secondary" className="bg-white text-black">
                  {currentHotel.starRating} Star
                </Badge>
              </div>
              <h1 className="mb-2 font-bold text-4xl">{currentHotel.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">
                    {currentHotel.location.city},{" "}
                    {currentHotel.location.country}
                  </span>
                </div>
                <Separator orientation="vertical" className="bg-white/30 h-6" />
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg">
                    Check-in: {currentHotel.policies.checkIn}
                  </span>
                </div>
                <Separator orientation="vertical" className="bg-white/30 h-6" />
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-lg">
                    {currentHotel.rating} ({currentHotel.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {currentHotel.images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {currentHotel.images
                .slice(0, 4)
                .map((image: string, index: number) => (
                  <Button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${currentHotel.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </Button>
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
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <Info className="w-5 h-5" />
                      About This Hotel
                    </div>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">
                      {currentHotel.description}
                    </p>

                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Hotel Features</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm">
                              {currentHotel.starRating} Star Rating
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-green-500" />
                            <span className="text-sm">
                              {currentHotel.rooms.types.length} Room Types
                              Available
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-purple-500" />
                            <span className="text-sm">
                              Check-in: {currentHotel.policies.checkIn}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Awards</h4>
                        {currentHotel.awards &&
                        currentHotel.awards.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {currentHotel.awards.map(
                              (award: string, index: number) => (
                                <Badge key={index} variant="outline">
                                  <Shield className="mr-1 w-3 h-3" />
                                  {award}
                                </Badge>
                              )
                            )}
                          </div>
                        ) : (
                          <p className="text-slate-500 text-sm">
                            No awards listed
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                      <MapPin className="w-5 h-5" />
                      Location & Nearby Attractions
                    </div>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-semibold">Location</h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Address:</strong>{" "}
                            {currentHotel.location.address}
                          </p>
                          <p>
                            <strong>City:</strong> {currentHotel.location.city}
                          </p>
                          <p>
                            <strong>Country:</strong>{" "}
                            {currentHotel.location.country}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold">
                          Nearby Attractions
                        </h4>
                        <div className="space-y-2">
                          {currentHotel.location.nearbyAttractions.map(
                            (attraction: string, index: number) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <MapPin className="w-3 h-3 text-green-500" />
                                <span className="text-sm">{attraction}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="rooms" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="mb-4 font-semibold text-lg">
                      Available Room Types
                    </div>
                    <div className="space-y-4">
                      {currentHotel.rooms.types.map((room) => (
                        <Card
                          key={room.id}
                          className={`cursor-pointer transition-colors ${
                            selectedRoom.id === room.id
                              ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                              : "hover:bg-gray-50 dark:hover:bg-gray-900"
                          }`}
                          onClick={() => setSelectedRoom(room)}
                        >
                          <CardContent className="p-6">
                            <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                              <div className="relative rounded-lg h-32 overflow-hidden">
                                <Image
                                  src={room.images[0]}
                                  alt={room.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <div className="space-y-2">
                                <h3 className="font-bold text-lg">
                                  {room.name}
                                </h3>
                                <p className="text-slate-600 text-sm">
                                  {room.description}
                                </p>
                                <div className="flex flex-col gap-1 text-sm">
                                  <div className="inline-flex items-start gap-1">
                                    <Users className="mt-1.5 w-3 h-3" />
                                    Max occupancy: {room.capacity.maxOccupancy}
                                  </div>
                                  <div className="inline-flex items-start gap-1">
                                    <Bed className="mt-1.5 w-3 h-3" />
                                    <div className="flex flex-col">
                                      {room.capacity.beds.map((bed, index) => (
                                        <p key={index}>
                                          {bed.count} {bed.type} bed
                                          {bed.count > 1 ? "s" : ""}
                                        </p>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col justify-between">
                                <div className="text-right">
                                  <p className="font-bold text-xl">
                                    {formatPrice(room.pricing.baseRate)}
                                  </p>
                                  <p className="text-slate-500 text-sm">
                                    per night
                                  </p>
                                </div>
                                {selectedRoom.id === room.id && (
                                  <Badge className="self-end">Selected</Badge>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="mb-4 font-semibold text-lg">
                      Hotel Amenities
                    </div>
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h3 className="mb-3 font-semibold">General</h3>
                        <div className="space-y-2">
                          {currentHotel.amenities.general.map(
                            (amenity: string, index: number) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm">{amenity}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-3 font-semibold">Recreation</h3>
                        <div className="space-y-2">
                          {currentHotel.amenities.recreation.map(
                            (amenity: string, index: number) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm">{amenity}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="policies" className="space-y-6">
                <Card>
                  <div className="px-6">
                    <div className="mb-4 font-semibold text-lg">
                      Hotel Policies
                    </div>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">Check-in:</span>
                          <span>{currentHotel.policies.checkIn}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">Check-out:</span>
                          <span>{currentHotel.policies.checkOut}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="mt-0.5 w-4 h-4 text-green-500" />
                          <div>
                            <span className="font-medium">Cancellation:</span>
                            <p className="text-slate-600 text-sm">
                              {currentHotel.policies.cancellation}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Users className="mt-0.5 w-4 h-4 text-purple-500" />
                          <div>
                            <span className="font-medium">Pet Policy:</span>
                            <p className="text-slate-600 text-sm">
                              {currentHotel.policies.petPolicy}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <FaSmoking className="mt-0.5 w-4 h-4 text-red-500" />
                          <div>
                            <span className="font-medium">Smoking Policy:</span>
                            <p className="text-slate-600 text-sm">
                              {currentHotel.policies.smokingPolicy}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <div className="px-6">
                <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <DollarSign className="w-5 h-5" />
                  Room Pricing
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Selected Room:</span>
                    <span className="font-semibold text-sm">
                      {selectedRoom.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Base Rate:</span>
                    <span className="font-semibold">
                      {formatPrice(selectedRoom.pricing.baseRate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Per Night</span>
                    <span className="font-medium">
                      from {formatPrice(selectedRoom.pricing.baseRate)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-2 px-6 text-sm">
                <div className="mb-4 font-semibold text-lg">Quick Facts</div>
                <div className="flex justify-between">
                  <span>Star Rating</span>
                  <span>{currentHotel.starRating} Stars</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel Type</span>
                  <span>{currentHotel.type}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-in</span>
                  <span>{currentHotel.policies.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out</span>
                  <span>{currentHotel.policies.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating</span>
                  <span>{currentHotel.rating}/5</span>
                </div>
              </div>
            </Card>

            {/* Booking Card */}
            <Card>
              <CardHeader>
                <CardTitle>Book Your Stay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="checkin">Check-in Date</Label>
                  <Input
                    id="checkin"
                    type="date"
                    className="flex flex-col justify-center mt-0.25 border focus:border-muted border-border focus:ring-muted/20"
                    value={checkInDate}
                    onChange={(e) => {
                      const newCheckInDate = e.target.value;
                      setCheckInDate(newCheckInDate);

                      // Clear checkout date if it's before or equal to the new checkin date
                      if (
                        checkOutDate &&
                        newCheckInDate &&
                        checkOutDate <= newCheckInDate
                      ) {
                        setCheckOutDate("");
                      }
                    }}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div>
                  <Label htmlFor="checkout">Check-out Date</Label>
                  <Input
                    id="checkout"
                    type="date"
                    className="flex flex-col justify-center mt-0.25 border focus:border-muted border-border focus:ring-muted/20"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    min={getMinCheckoutDate()}
                  />
                </div>

                <div className="gap-4 grid grid-cols-2">
                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="10"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                      className="focus:border-muted border-border focus:ring-muted/20 h-8"
                    />
                    {!canAccommodateGuests() && (
                      <p className="mt-1 text-red-500 text-sm">
                        ⚠️ {getOccupancyWarning()}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="quantity">Number of Rooms</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max="10"
                      value={quantity}
                      className="focus:border-muted border-border focus:ring-muted/20 h-8"
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value) || 1)
                      }
                    />
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-semibold">Selected Room</h3>
                  <p className="font-medium">{selectedRoom.name}</p>
                  <p className="text-slate-600 text-sm">
                    {selectedRoom.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Room Rate:</span>
                    <span className="font-medium">
                      {formatPrice(selectedRoom.pricing.baseRate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">
                      {nights} night{nights !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of Rooms:</span>
                    <span className="font-medium">{quantity}</span>
                  </div>
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
                      disabled={isAddingToCart || !checkInDate || !checkOutDate}
                      className="w-full"
                    >
                      {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Heart className="mr-2 w-4 h-4" />
                      Add to Wishlist
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="gap-2 grid grid-cols-2">
                      <Button
                        variant="outline"
                        onClick={() => router.push("/activities")}
                        className="flex items-center gap-2"
                      >
                        <MapIcon className="w-4 h-4" />
                        Activities
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => router.push("/vehicles")}
                        className="flex items-center gap-2"
                      >
                        <Car className="w-4 h-4" />
                        Vehicles
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => router.push("/attractions")}
                        className="flex items-center gap-2"
                      >
                        <Camera className="w-4 h-4" />
                        Attractions
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => router.push("/flights")}
                        className="flex items-center gap-2"
                      >
                        <Plane className="w-4 h-4" />
                        Flights
                      </Button>
                    </div>
                    <p className="font-medium text-center text-slate-600 text-sm">
                      Safe travels! 🌟
                    </p>
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
