"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCurrency } from "@/context/CurrencyContext";
import { getMockDestinations } from "@/data/destinations";
import { getMockFlights } from "@/data/flights";
import { Destination } from "@/lib/interfaces/services/destinations";
import { Flight } from "@/lib/interfaces/services/flights";
import { ArrowRight, PlayCircle, Star, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBed, FaShower } from "react-icons/fa";

export default function HomePage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [destinationsData, flightsData] = await Promise.all([
          getMockDestinations(),
          getMockFlights(),
        ]);

        setDestinations(destinationsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const { formatPrice } = useCurrency();
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center -mt-25 min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="z-0 absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww"
            alt="Hero background image"
            className="opacity-90 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full max-w-7xl">
          {/* Mobile Layout */}
          <div className="lg:hidden text-center">
            <div className="mb-8">
              <h1 className="mb-6 font-bold text-4xl md:text-6xl leading-tight">
                Where You Get Trapped
                <br />
                <span className="text-yellow-300">
                  in the Beauty of the World
                </span>
                <br />
                and Unforgettable
                <br />
                Happiness!
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-gray-200 text-lg md:text-xl">
                At ParagonTrails, we believe that every journey is an
                opportunity for adventure, discovery, and creating unforgettable
                experiences.
              </p>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full font-bold text-black"
                onClick={() => router.push("/destinations")}
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Book Trip Now
              </Button>
            </div>
          </div>

          <div className="lg:items-center lg:gap-12 hidden lg:grid lg:grid-cols-2">
            <div>
              <h1 className="mb-6 font-bold text-5xl xl:text-6xl leading-tight">
                Where You Get Trapped
                <br />
                <span className="text-yellow-300">
                  in the Beauty of the World
                </span>
                <br />
                and Unforgettable
                <br />
                Happiness!
              </h1>
              <p className="mb-8 text-gray-200 text-xl leading-relaxed">
                At ParagonTrails, we believe that every journey is an
                opportunity for adventure, discovery, and creating unforgettable
                experiences.
              </p>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full font-bold text-black"
                onClick={() => router.push("/destinations")}
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Book Trip Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side Content */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-bold text-3xl md:text-4xl">
                Popular Destinations
              </h2>
              <p className="mb-8">
                At ParagonTrails, we believe in curating exceptional experiences
                that turn every journey into an adventure worth remembering.
              </p>

              {/* Destination Cards */}
              <div className="gap-4 grid grid-cols-2 mb-8">
                {destinations.slice(0, 4).map((destination, index) => (
                  <Card
                    key={destination.id}
                    className="hover:shadow-lg p-0 transition-all cursor-pointer"
                  >
                    <div className="relative rounded-t-lg h-32">
                      <Image
                        src={destination.images[0]}
                        alt={destination.name}
                        className="rounded-t-lg w-full h-full object-cover"
                        width={400}
                        height={300}
                      />
                      <div className="top-2 right-2 absolute bg-white px-2 py-1 rounded-lg font-bold text-sm">
                        {formatPrice(
                          destination.pricing?.accommodationRange?.midRange ||
                            destination.pricing?.averageDailyBudget ||
                            100
                        )}
                      </div>
                    </div>
                    <CardContent className="-mt-5 p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <h3 className="mb-1 font-semibold">{destination.name}</h3>
                      <p className="text-sm">{destination.country}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="shadow-md p-0 rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww"
                  alt="Curated travel experience 1"
                  className="rounded-t-lg w-full h-48 object-cover"
                  width={600}
                  height={400}
                />
                <CardContent className="-mt-6 p-4">
                  <p className="text-sm">
                    At ParagonTrails, we believe in curating exceptional
                    experiences that turn every journey into an adventure worth
                    remembering.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md p-0 rounded-lg">
                {/* <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-t-lg w-full h-32"></div> */}
                <Image
                  src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww"
                  alt="Curated travel experience 2"
                  className="rounded-t-lg w-full h-32 object-cover"
                  width={600}
                  height={300}
                />
                <CardContent className="-mt-6 p-4">
                  <p className="text-sm">
                    Cultural immersion, culinary discovery, natural beauty,
                    thrilling adventure, cultural and artistic experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md p-0 rounded-lg">
                {/* <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-t-lg w-full h-32"></div> */}
                <Image
                  src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww"
                  alt="Curated travel experience 3"
                  className="rounded-t-lg w-full h-32 object-cover"
                  width={600}
                  height={300}
                />
                <CardContent className="-mt-6 p-4">
                  <p className="text-sm">
                    History and culture, unique perspectives and remarkable
                    experiences available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Sections */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
            {/* Big Promo */}
            <Card className="bg-muted/50 border border-border">
              <CardHeader>
                <div className="px-3 py-1 rounded-full w-fit font-medium text-sm">
                  Big Promo
                </div>
                <CardTitle className="font-bold text-3xl">
                  Limited Time Offer
                  <br />
                  Book Now and Save
                  <br />
                  Big!
                </CardTitle>
                <CardDescription className="/90">
                  Big Promo About Plan for Journey like Gymnastic activity like
                  cultural background. Planning cultural background our Value
                  City Promo, offering much than before. Let's start our future
                  conversations!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="classic">Book Now</Button>
              </CardContent>
            </Card>

            {/* Let's Explore Together */}
            <div className="space-y-6">
              <Card className="shadow-md p-0 rounded-lg">
                <CardContent className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww"
                    alt="Explore travel 1"
                    className="rounded-lg w-full h-full object-cover"
                    width={400}
                    height={480}
                  />
                  <div className="p-6">
                    <h3 className="mb-2 font-bold text-xl">
                      Let's Explore Together
                    </h3>
                    <p className="mb-4 text-sm">
                      At ParagonTrails, the world is our diama and every journey
                      is an opportunity to discover something new about
                      ourselves and the most interesting cultural of every one
                      that without a shadow.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Ramadhan Promo</span>
                      <Button size="sm" className="rounded-full">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations for 2024 */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Featured Destinations for 2024
            </h2>
            <p className="mx-auto max-w-2xl">
              Discover the most sought-after destinations this year, curated by
              our travel experts for unforgettable experiences.
            </p>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {flights.slice(0, 4).map((flight, index) => (
              <Card
                key={flight.id}
                className="group hover:shadow-xl p-0 transition-all cursor-pointer"
              >
                <div className={`relative h-64 rounded-t-lg overflow-hidden`}>
                  <Image
                    src={
                      destinations.find((dest) =>
                        dest.name
                          .toLowerCase()
                          .includes(flight.destination.city.toLowerCase())
                      )?.images[0] ||
                      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=60"
                    }
                    alt={`${flight.destination.city} destination`}
                    className="rounded-t-lg w-full h-full object-cover"
                    width={500}
                    height={600}
                  />
                  <div className="top-4 right-4 absolute bg-white px-3 py-1 rounded-full font-semibold text-black">
                    {formatPrice(flight.pricing.economy)}
                  </div>
                  <div className="bottom-4 left-4 absolute bg-black/70 px-3 py-1 rounded-full font-medium text-sm">
                    {flight.origin.code} → {flight.destination.code}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <h3 className="mb-1 font-semibold">
                    {flight.destination.city}
                  </h3>
                  <p className="text-sm">
                    {flight.airline} • {flight.duration}
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    From {flight.origin.city}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Experience Section */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-bold text-3xl md:text-4xl">
                <span className="text-tertiary">✱</span> Book Perfect Stay
                <br />
                For Your Vacation
              </h2>
              <p className="mb-8 text-lg">
                We are premier hotel booking service that caters to the
                discerning traveler in search of luxury and sophistication.
              </p>

              {/* Booking Stats */}
              <div className="gap-8 grid grid-cols-2 mb-8">
                <div>
                  <div className="mb-2 font-bold text-2xl text-accent">
                    100% + happy guests
                  </div>
                  <div className="text-sm">Customer satisfaction</div>
                </div>
                <div>
                  <div className="mb-2 font-bold text-2xl text-accent">
                    4.9 ★
                  </div>
                  <div className="text-sm">Guest's Reviews</div>
                </div>
              </div>

              <Button>
                Book your stay
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Booking Confirmation Mockup */}
            <div className="relative">
              <div className="bg-muted/50 shadow-lg p-6 border border-border rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-2xl uppercase">
                    Booking is confirmed!
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Check-In</span>
                    <span className="font-medium">13.07.2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-Out</span>
                    <span className="font-medium">16.07.2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests</span>
                    <span className="font-medium">5 people</span>
                  </div>
                </div>

                <div className="mb-4 p-4 border rounded-lg">
                  <div className="flex gap-3">
                    {/* <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg w-16 h-16"></div> */}
                    <Image
                      src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww"
                      alt="Booking confirmation"
                      className="rounded-lg w-16 h-16 object-cover"
                      width={100}
                      height={100}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">Your stay:</h4>
                      <p className="text-sm">Bali</p>
                      <p className="text-sm">John Hilton Resort</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sophisticated Stays Section */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div className="space-y-6">
              {/* Destination Cards */}
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="mx-auto w-3/5 md:w-4/5"
              >
                <CarouselContent>
                  {[
                    {
                      src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww",
                      alt: "Sophisticated Stay 1",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
                      alt: "Sophisticated Stay 2",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww",
                      alt: "Sophisticated Stay 3",
                    },
                  ].map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                      <Card className="shadow-md p-0 border-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="rounded-lg w-full h-56 object-cover"
                          width={300}
                          height={200}
                        />
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div>
              <h2 className="mb-4 font-bold text-3xl">
                Unlock the Art of
                <br />
                Sophisticated Stays
              </h2>
              <p className="mb-6">
                We understand that accommodations play a pivotal role in shaping
                travel experience, and that's why we are committed to providing
                an innovative collection of exquisite hotels in the world's most
                desirable destinations.
              </p>
              <p className="text-muted-foreground text-sm">From 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
            {/* Main Property */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg p-0 border-0 overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww"
                    alt="Booking confirmation"
                    className="rounded-lg w-full h-full object-cover"
                    width={600}
                    height={400}
                  />
                  <div className="top-4 left-4 absolute">
                    <Badge className="flex items-center gap-2">
                      CABINS & COTTAGES
                    </Badge>
                  </div>
                </div>
                <CardContent className="-mt-5 p-6">
                  <h3 className="mb-2 font-bold text-xl">Mirror House Sud</h3>
                  <p className="mb-2 text-sm">
                    Bolzano, Trentino-Alto Adige/South Tyrol, Italy
                  </p>
                  <p className="mb-4 font-bold text-2xl">
                    $1,600{" "}
                    <span className="font-normal text-base">/ night</span>
                  </p>

                  <div className="flex items-center gap-6 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>4 Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBed className="w-4 h-4" />
                      <span>2 Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaShower className="w-4 h-4" />
                      <span>1 Bathroom</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Property Images */}
            <div className="space-y-4 h-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                orientation="vertical"
                className="w-full max-w-xs"
              >
                <CarouselContent className="-mt-1 h-[40em]">
                  {[
                    {
                      src: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww",
                      alt: "Property Image 1",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww",
                      alt: "Property Image 2",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww",
                      alt: "Sophisticated Stay 1",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
                      alt: "Sophisticated Stay 2",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww",
                      alt: "Sophisticated Stay 3",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww",
                      alt: "Property Image 3",
                    },
                  ].map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="pt-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg w-full aspect-video object-cover"
                        width={300}
                        height={400}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
