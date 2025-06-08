"use client";

import { useState, useEffect, use } from "react";
import { cities } from "@/lib/constants/info/city-information";
import {
  formatKebabToTitle,
  capitalize,
  formatTitleToCamelCase,
  formatTitleCaseToKebabCase,
} from "@/lib/utils/format";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Clock,
  Users,
  Banknote,
  Languages,
  Landmark,
  Tag,
  Check,
  X,
  Globe,
  Sailboat,
  Car,
  Bike,
  Plane,
  Train,
} from "lucide-react";
import Link from "next/link";
import Loading from "@/components/Loading";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { getCityAttractions } from "@/lib/utils/get/attractions";
import useSmallScreen from "@/hooks/useSmallScreen";
import useMediumScreen from "@/hooks/useMediumScreen";
import useLargeScreen from "@/hooks/useLargeScreen";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);
export default function ToursByCityPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const city = searchParams.get("city") || "";
  const [cityInfo, setCityInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [attractions, setAttractions] = useState<Attraction[]>();
  const formattedCity = formatTitleToCamelCase(city);
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();
  const isLargeScreen = useLargeScreen();

  useEffect(() => {
    // Find the city information based on the city param (kebab case)
    const cityData = cities.find((c) => c.id === formattedCity);
    if (cityData) {
      setCityInfo(cityData);
    }
    setLoading(false);
  }, [city]);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const attractionsModule = await getCityAttractions(city);
        if (attractionsModule) {
          setAttractions(attractionsModule);
        } else {
          console.error(`No attractions found for city: ${city}`);
          setAttractions([]);
        }
      } catch (error) {
        console.error(`Error loading attractions for city ${city}:`, error);
        setAttractions([]);
      }
    };
    if (cityInfo) {
      fetchAttractions();
    }
  }, [cityInfo, city]);

  if (loading) {
    return <Loading />;
  }

  console.log("City Information:", cityInfo);
  console.log("Attractions:", attractions);

  if (!cityInfo) {
    return (
      <div className="mx-auto pt-12 w-10/12 md:w-11/12">
        <h1>City Not Found</h1>
        <p>We couldn't find information for the requested city.</p>
        <Link href="/experiences-through-destinations">
          <Button className="mt-4">Return to All Destinations</Button>
        </Link>
      </div>
    );
  }

  // Chart data for rating visualization
  const ratingChartData = {
    labels: ["Rating", "Remaining"],
    datasets: [
      {
        data: [cityInfo.rating, 5 - cityInfo.rating],
        backgroundColor: [
          "rgba(52, 211, 153, 0.8)", // Green for the rating
          "rgba(229, 231, 235, 0.5)", // Gray for remaining
        ],
        borderColor: ["rgba(52, 211, 153, 1)", "rgba(229, 231, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Format coordinates for display
  const formattedCoordinates = `${cityInfo.coordinates.lat.toFixed(4)}, ${cityInfo.coordinates.lng.toFixed(4)}`;

  return (
    <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
      {/* Header with City Name, Country and Top Navigation */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <header className="lg:col-span-2 mb-4 lg:mb-0">
          <h1>
            {cityInfo.city}
            {cityInfo.state && <span>, {cityInfo.state}</span>}
            <span className="ml-2">• {cityInfo.country}</span>
          </h1>
          <h5>{cityInfo.subtitle}</h5>
          <blockquote>"{cityInfo.quote}"</blockquote>
        </header>
        <div className="justify-items-end grid grid-cols-1 lg:col-span-3">
          <Link
            href={`/experiences-through-destinations/${formatTitleCaseToKebabCase(city)}/tours`}
          >
            <Button
              variant={!isLargeScreen ? "link" : "accent"}
              size={!isLargeScreen ? "sm" : "default"}
              className="md:flex flex-row-reverse items-center gap-2 m-0 md:m-1 lg:m-2"
            >
              <Globe size={16} />
              Explore Tours
            </Button>
          </Link>
          <div className="justify-items-end gap-2 grid lg:grid-cols-2">
            <Link href={`/testimonials/${city}?city=${cityInfo.city}`}>
              <Button
                variant={!isLargeScreen ? "link" : "secondary"}
                size={!isLargeScreen ? "sm" : "default"}
                className="md:flex flex-row-reverse items-center gap-2 m-0 md:m-1 lg:m-2"
              >
                <MapPin size={16} />
                Hear What Locals Say
              </Button>
            </Link>
            <Link href={`/testimonials/${city}/tours`}>
              <Button
                variant={!isLargeScreen ? "link" : "tertiary"}
                size={!isLargeScreen ? "sm" : "default"}
                className="md:flex flex-row-reverse items-center gap-2 m-0 md:m-1 lg:m-2"
              >
                <Landmark size={16} />
                Hear What Travelers Say
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 mt-6 h-full">
        {/* Left Column - Main Information */}
        <div className="gap-6 grid lg:col-span-2 h-full">
          {/* City Image */}
          <div className="relative col-span-1 rounded-lg w-full h-full">
            <Image
              src={
                cityInfo.imageUrl ||
                "https://images.unsplash.com/photo-1500835556837-99ac94a94552"
              }
              alt={`${cityInfo.city} landscape`}
              className="rounded-lg lg:w-full object-cover aspect-video"
              width={800}
              height={400}
              priority
            />
          </div>

          {/* Attractions Tab */}
          <Card className="lg:flex hidden w-full h-full">
            <CardHeader>
              <CardTitle>Top Attractions in {cityInfo.city}</CardTitle>
              <h5>Must-see places and experiences</h5>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {attractions?.map((attraction, index) => (
                  <li key={attraction.id} className="flex items-start gap-4">
                    <div className="flex justify-center items-center bg-primary/10 rounded-full w-8 h-8 text-primary shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4>{attraction.title}</h4>
                      <h5>{attraction.description}</h5>
                    </div>
                    <Button
                      variant={"link"}
                      onClick={() =>
                        router.push(
                          `/experiences-through-desintations/${cityInfo.city}/${attraction.title}?city=${cityInfo.city}&attraction=${attraction.title}`
                        )
                      }
                    >
                      Learn More
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tabs for Different Information */}
          <Tabs defaultValue="overview" className="lg:hidden w-full">
            <TabsList className="mb-6 w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="attractions">Attractions</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card className="relative">
                <CardHeader>
                  <CardTitle>About {cityInfo.city}</CardTitle>
                  <h5>Everything you need to know</h5>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{cityInfo.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cityInfo.tags?.map((tag: string) => (
                      <Badge key={tag} variant={"secondaryFaded"}>
                        {capitalize(tag.replace(/-/g, " "))}
                      </Badge>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="mt-4">
                    <h4 className="flex items-center gap-2 mb-2 font-medium">
                      <Languages size={18} /> Languages Spoken
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cityInfo.languagesSpoken?.map((language: string) => (
                        <Badge key={language} variant="secondary">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Climate and Certification */}
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-4">
                    <div>
                      <h4 className="font-medium">Climate</h4>
                      <p>{cityInfo.climate}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Eco-Certified</h4>
                      <p className="flex items-center gap-2">
                        {cityInfo.isEcoCertified ? (
                          <>
                            <Check className="w-5 h-5 text-green-500" />
                            Yes - This destination meets sustainable tourism
                            standards
                          </>
                        ) : (
                          <>
                            <X className="w-5 h-5 text-gray-400" />
                            Not currently certified
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Attractions Tab */}
            <TabsContent value="attractions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Attractions in {cityInfo.city}</CardTitle>
                  <h5>Must-see places and experiences</h5>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {attractions?.map((attraction, index) => (
                      <li
                        key={attraction.id}
                        className="flex items-start gap-4"
                      >
                        <div className="flex justify-center items-center bg-primary/10 rounded-full w-8 h-8 text-primary shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4>{attraction.title}</h4>
                          <h5>{attraction.description}</h5>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Services</CardTitle>
                  <h5>Transportation and travel services in {cityInfo.city}</h5>
                </CardHeader>
                <CardContent>
                  <div className="gap-x-6 gap-y-4 grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <Car
                        className={`h-5 w-5 ${cityInfo.services?.carRentalAvailable ? "text-green-500" : "text-gray-400"}`}
                      />
                      <span className="flex items-center gap-2">
                        Car Rental
                        {cityInfo.services?.carRentalAvailable ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-gray-400" />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bike
                        className={`h-5 w-5 ${cityInfo.services?.motorcycleRentalAvailable ? "text-green-500" : "text-gray-400"}`}
                      />
                      <span className="flex items-center gap-2">
                        Motorcycle Rental
                        {cityInfo.services?.motorcycleRentalAvailable ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-gray-400" />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sailboat
                        className={`h-5 w-5 ${cityInfo.services?.yachtRentalAvailable ? "text-green-500" : "text-gray-400"}`}
                      />
                      <span className="flex items-center gap-2">
                        Yacht/Boat Rental
                        {cityInfo.services?.yachtRentalAvailable ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-gray-400" />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Plane
                        className={`h-5 w-5 ${cityInfo.services?.airportTransfers ? "text-green-500" : "text-gray-400"}`}
                      />
                      <span className="flex items-center gap-2">
                        Airport Transfers
                        {cityInfo.services?.airportTransfers ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-gray-400" />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Train
                        className={`h-5 w-5 ${cityInfo.services?.localTransitPasses ? "text-green-500" : "text-gray-400"}`}
                      />
                      <span className="flex items-center gap-2">
                        Local Transit Passes
                        {cityInfo.services?.localTransitPasses ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-gray-400" />
                        )}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - City Details */}
        <div className="space-y-6">
          {/* Rating Card */}
          <Card>
            <CardHeader>
              <CardTitle>Destination Rating</CardTitle>
              <h5>Based on visitor feedback</h5>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="mb-4 w-40 h-40">
                <Doughnut
                  data={ratingChartData}
                  options={{
                    cutout: "70%",
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        enabled: false,
                      },
                    },
                    elements: {
                      arc: {
                        borderWidth: 0,
                      },
                    },
                  }}
                />
                <div className="relative w-full">
                  <div className="top-[-85px] right-0 left-0 absolute text-center">
                    <span className="font-bold text-3xl">
                      {cityInfo.rating}
                    </span>
                    <span>/5</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                {displayRatingStars(Math.round(cityInfo.rating), 5, {
                  showRatingNumber: false,
                })}
              </div>
            </CardContent>
          </Card>

          {/* Key Information Card */}
          <Card>
            <CardHeader>
              <CardTitle>Key Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Users size={18} />
                  <span>Population</span>
                </div>
                <span className="font-medium">
                  {cityInfo.population.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>Time Zone</span>
                </div>
                <span className="font-medium">{cityInfo.timeZone}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Banknote size={18} />
                  <span>Currency</span>
                </div>
                <span className="font-medium">{cityInfo.currency}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Tag size={18} />
                  <span>Price Category</span>
                </div>
                <Badge
                  variant={
                    cityInfo.priceCategory === "luxury"
                      ? "default"
                      : cityInfo.priceCategory === "moderate"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {cityInfo.priceCategory.charAt(0).toUpperCase() +
                    cityInfo.priceCategory.slice(1)}
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Dialing Code</span>
                </div>
                <span className="font-medium">{cityInfo.localDialingCode}</span>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Ready to Explore {cityInfo.city}?</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Book your adventure with Paragon Trails
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link href={`/experiences-through-destinations/${city}/tours`}>
                  <Button className="w-full" variant="secondary">
                    Browse Available Tours
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button className="w-full" variant="outline">
                    Contact a Travel Expert
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="lg:flex flex-col gap-6 hidden lg:mt-6">
        <div className="gap-4 grid grid-cols-2">
          {/* Overview Tab */}
          <Card>
            <CardHeader>
              <CardTitle>About {cityInfo.city}</CardTitle>
              <h5>Everything you need to know</h5>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{cityInfo.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cityInfo.tags?.map((tag: string) => (
                  <Badge key={tag} variant={"secondaryFaded"}>
                    {capitalize(tag.replace(/-/g, " "))}
                  </Badge>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-4">
                <h4 className="flex items-center gap-2 mb-2 font-medium">
                  <Languages size={18} /> Languages Spoken
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cityInfo.languagesSpoken?.map((language: string) => (
                    <Badge key={language} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Climate and Certification */}
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-4">
                <div>
                  <h4 className="font-medium">Climate</h4>
                  <p>{cityInfo.climate}</p>
                </div>
                <div>
                  <h4 className="font-medium">Eco-Certified</h4>
                  <p className="flex items-center gap-2">
                    {cityInfo.isEcoCertified ? (
                      <>
                        <Check className="w-5 h-5 text-green-500" />
                        Yes - This destination meets sustainable tourism
                        standards
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5 text-gray-400" />
                        Not currently certified
                      </>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Services Tab */}
          <Card>
            <CardHeader>
              <CardTitle>Available Services</CardTitle>
              <h5>Transportation and travel services in {cityInfo.city}</h5>
            </CardHeader>
            <CardContent>
              <div className="gap-x-6 gap-y-4 grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Car
                    className={`h-5 w-5 ${cityInfo.services?.carRentalAvailable ? "text-green-500" : "text-gray-400"}`}
                  />
                  <span className="flex items-center gap-2">
                    Car Rental
                    {cityInfo.services?.carRentalAvailable ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-gray-400" />
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Bike
                    className={`h-5 w-5 ${cityInfo.services?.motorcycleRentalAvailable ? "text-green-500" : "text-gray-400"}`}
                  />
                  <span className="flex items-center gap-2">
                    Motorcycle Rental
                    {cityInfo.services?.motorcycleRentalAvailable ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-gray-400" />
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Sailboat
                    className={`h-5 w-5 ${cityInfo.services?.yachtRentalAvailable ? "text-green-500" : "text-gray-400"}`}
                  />
                  <span className="flex items-center gap-2">
                    Yacht/Boat Rental
                    {cityInfo.services?.yachtRentalAvailable ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-gray-400" />
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Plane
                    className={`h-5 w-5 ${cityInfo.services?.airportTransfers ? "text-green-500" : "text-gray-400"}`}
                  />
                  <span className="flex items-center gap-2">
                    Airport Transfers
                    {cityInfo.services?.airportTransfers ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-gray-400" />
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Train
                    className={`h-5 w-5 ${cityInfo.services?.localTransitPasses ? "text-green-500" : "text-gray-400"}`}
                  />
                  <span className="flex items-center gap-2">
                    Local Transit Passes
                    {cityInfo.services?.localTransitPasses ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-gray-400" />
                    )}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
