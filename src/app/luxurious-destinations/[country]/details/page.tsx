"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cityattractions } from "@/lib/constants/destinations/city";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { cn } from "@/lib/utils";
import { getCityAttractions } from "@/lib/utils/get";
import { featuredArray } from "@/lib/utils/sort";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFilter, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function DestinationDetailsPage() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const city = searchParams.get("city") || "";
  const country = searchParams.get("country") || "";
  const region = searchParams.get("region") || "";

  // Use original values instead of formatting them
  const formattedCity = city;
  const formattedRegion = region;
  const formattedCountry = country;

  const cityInfo = cityattractions.find(
    (item) =>
      (item.city === formattedCity && item.country === formattedCountry) ||
      item.region === formattedCountry
  );

  const [attractionData, setAttractionData] = useState<Attraction[]>([]);
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>(
    []
  );
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [filters, setFilters] = useState({
    isFamilyFriendly: false,
    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: false,
    isAdventure: false,
    isRomantic: false,
    isLuxury: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isNightlife: false,
    isShopping: false,
    isDining: false,
    isOutdoor: false,
    isIndoor: false,
    minRating: 0,
    priceCategory: "all", // "all", "free", "budget", "moderate", "expensive", "luxury"
    timeOfDay: "all", // "all", "morning", "afternoon", "evening", "night", "24hours"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getCityAttractions(city, region, country);
        setAttractionData(data);
        setFilteredAttractions(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, region, country]);

  // Apply filters when filters state changes
  useEffect(() => {
    if (!attractionData.length) return;

    const filtered = attractionData.filter((attraction) => {
      // Check boolean properties
      if (filters.isFamilyFriendly && !attraction.isFamilyFriendly)
        return false;
      if (filters.isFree && !attraction.isFree) return false;
      if (filters.isPetFriendly && !attraction.isPetFriendly) return false;
      if (filters.isWheelchairAccessible && !attraction.isWheelchairAccessible)
        return false;
      if (filters.isHistorical && !attraction.isHistorical) return false;
      if (filters.isAdventure && !attraction.isAdventure) return false;
      if (filters.isRomantic && !attraction.isRomantic) return false;
      if (filters.isLuxury && !attraction.isLuxury) return false;
      if (filters.isOffTheBeatenPath && !attraction.isOffTheBeatenPath)
        return false;
      if (filters.isLocalExperience && !attraction.isLocalExperience)
        return false;
      if (filters.isNightlife && !attraction.isNightlife) return false;
      if (filters.isShopping && !attraction.isShopping) return false;
      if (filters.isDining && !attraction.isDining) return false;
      if (filters.isOutdoor && !attraction.isOutdoor) return false;
      if (filters.isIndoor && !attraction.isIndoor) return false;

      // Check rating filter
      if (attraction.rating < filters.minRating) return false;

      // Check price category using the new property
      if (filters.priceCategory !== "all") {
        // Use the new priceCategory property if available
        if (attraction.priceCategory) {
          if (filters.priceCategory !== attraction.priceCategory) {
            return false;
          }
        } else {
          // Fall back to old string parsing method
          const priceRange = attraction.priceRange?.toLowerCase() || "";

          switch (filters.priceCategory) {
            case "free":
              if (!priceRange.includes("free") && !attraction.isFree)
                return false;
              break;
            case "budget":
              if (!priceRange.includes("$") || priceRange.includes("$$"))
                return false;
              break;
            case "moderate":
              if (!priceRange.includes("$$") || priceRange.includes("$$$"))
                return false;
              break;
            case "expensive":
              if (!priceRange.includes("$$$") || priceRange.includes("$$$$"))
                return false;
              break;
            case "luxury":
              if (!priceRange.includes("$$$$")) return false;
              break;
          }
        }
      }

      // Check time of day using the new property
      if (filters.timeOfDay !== "all") {
        // Use the new timeOfDay property if available
        if (attraction.timeOfDay) {
          // Map the filter values to the property values
          const mappedTimeOfDay = (() => {
            switch (filters.timeOfDay) {
              case "morning":
              case "afternoon":
                return "daytime";
              case "evening":
              case "night":
                return "night";
              case "24hours":
                return "all day";
              default:
                return filters.timeOfDay;
            }
          })();

          if (
            attraction.timeOfDay !== mappedTimeOfDay &&
            !(
              mappedTimeOfDay === "daytime" &&
              attraction.timeOfDay === "all day"
            ) &&
            !(mappedTimeOfDay === "night" && attraction.timeOfDay === "all day")
          ) {
            return false;
          }
        } else if (attraction.openingHours) {
          // Fall back to old string parsing method
          const hours = attraction.openingHours.toLowerCase();

          switch (filters.timeOfDay) {
            case "morning":
              if (!hours.includes("am") && !hours.includes("morning"))
                return false;
              break;
            case "afternoon":
              if (!hours.includes("pm") && !hours.includes("afternoon"))
                return false;
              break;
            case "evening":
              if (!hours.includes("evening") && !hours.includes("pm"))
                return false;
              break;
            case "night":
              if (!hours.includes("night") && !hours.includes("pm"))
                return false;
              break;
            case "24hours":
              if (!hours.includes("24") && !hours.includes("all day"))
                return false;
              break;
          }
        }
      }

      return true;
    });

    setFilteredAttractions(filtered);
  }, [filters, attractionData]);

  const popularAttractions = featuredArray(filteredAttractions);

  // Handle filter change
  const handleFilterChange = (filterName: keyof typeof filters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      isFamilyFriendly: false,
      isFree: false,
      isPetFriendly: false,
      isWheelchairAccessible: false,
      isHistorical: false,
      isAdventure: false,
      isRomantic: false,
      isLuxury: false,
      isOffTheBeatenPath: false,
      isLocalExperience: false,
      isNightlife: false,
      isShopping: false,
      isDining: false,
      isOutdoor: false,
      isIndoor: false,
      minRating: 0,
      priceCategory: "all",
      timeOfDay: "all",
    });
  };

  // Function to display star ratings using React Icons
  const displayRatingStars = (rating: number, maxStars: number = 5) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="inline text-yellow-400" />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="inline text-yellow-400" />
      );
    }

    // Add empty stars
    const emptyStarsCount = maxStars - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} className="inline text-yellow-400" />
      );
    }

    return (
      <div className="flex items-center gap-1 my-2">
        {stars}
        <span className="ml-2 text-gray-400">({rating})</span>
      </div>
    );
  };

  const queryParams = new URLSearchParams({
    city: city,
    country: country,
  });

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>
          {formattedCity}, {formattedRegion}, {formattedCountry}
        </h1>

        {cityInfo && (
          <>
            {cityInfo?.subtitle && <h5>{cityInfo.subtitle}</h5>}

            {cityInfo?.quote && <blockquote>{cityInfo.quote}</blockquote>}
          </>
        )}
      </header>

      <section>
        <div className="w-full">
          <h2>Top Attractions</h2>
          <p>
            Discover the most popular attractions in {formattedCity},{" "}
            {formattedRegion}, {formattedCountry}. From historical landmarks to
            modern marvels, explore the best that this city has to offer.
          </p>
          <Button
            onClick={() =>
              router.push(
                `/luxurious-destinations/${country}/${city}/tours?${queryParams.toString()}`
              )
            }
          >
            Explore Available Tours in {formattedCity}
          </Button>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {popularAttractions.map((attraction, index) => (
              <div
                key={index}
                className="shadow-md hover:shadow-lg p-4 border rounded-lg transition-shadow"
              >
                <h3 className="mb-2 font-medium text-xl">{attraction.title}</h3>
                <p>{attraction.description.split(".")[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {attractionData && (
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2>City Attractions</h2>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="icon"
              size={"sm"}
              className="flex items-center gap-2"
            >
              <FaFilter />
            </Button>
          </div>

          {showFilters && (
            <Card className="mb-6">
              <CardContent>
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
                  <div className="space-y-2">
                    <h3>Experience Type</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="family"
                          checked={filters.isFamilyFriendly}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isFamilyFriendly", checked)
                          }
                        />
                        <Label htmlFor="family">Family-friendly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="pet"
                          checked={filters.isPetFriendly}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isPetFriendly", checked)
                          }
                        />
                        <Label htmlFor="pet">Pet-friendly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="historical"
                          checked={filters.isHistorical}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isHistorical", checked)
                          }
                        />
                        <Label htmlFor="historical">Historical</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="adventure"
                          checked={filters.isAdventure}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isAdventure", checked)
                          }
                        />
                        <Label htmlFor="adventure">Adventure</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="romantic"
                          checked={filters.isRomantic}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isRomantic", checked)
                          }
                        />
                        <Label htmlFor="romantic">Romantic</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="luxury"
                          checked={filters.isLuxury}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isLuxury", checked)
                          }
                        />
                        <Label htmlFor="luxury">Luxury</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3>Features</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="free"
                          checked={filters.isFree}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isFree", checked)
                          }
                        />
                        <Label htmlFor="free">Free</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="wheelchair"
                          checked={filters.isWheelchairAccessible}
                          onCheckedChange={(checked) =>
                            handleFilterChange(
                              "isWheelchairAccessible",
                              checked
                            )
                          }
                        />
                        <Label htmlFor="wheelchair">
                          Wheelchair Accessible
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="offbeat"
                          checked={filters.isOffTheBeatenPath}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isOffTheBeatenPath", checked)
                          }
                        />
                        <Label htmlFor="offbeat">Off The Beaten Path</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="local"
                          checked={filters.isLocalExperience}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isLocalExperience", checked)
                          }
                        />
                        <Label htmlFor="local">Local Experience</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="nightlife"
                          checked={filters.isNightlife}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isNightlife", checked)
                          }
                        />
                        <Label htmlFor="nightlife">Nightlife</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3>Activities</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="shopping"
                          checked={filters.isShopping}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isShopping", checked)
                          }
                        />
                        <Label htmlFor="shopping">Shopping</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="dining"
                          checked={filters.isDining}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isDining", checked)
                          }
                        />
                        <Label htmlFor="dining">Dining</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="outdoor"
                          checked={filters.isOutdoor}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isOutdoor", checked)
                          }
                        />
                        <Label htmlFor="outdoor">Outdoor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="indoor"
                          checked={filters.isIndoor}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isIndoor", checked)
                          }
                        />
                        <Label htmlFor="indoor">Indoor</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="rating">
                        <strong>Minimum Rating</strong>
                      </Label>
                      <span className="text-sm">{filters.minRating}</span>
                    </div>
                    <Slider
                      id="rating"
                      min={0}
                      max={5}
                      step={0.5}
                      value={[filters.minRating]}
                      onValueChange={(value: any[]) =>
                        handleFilterChange("minRating", value[0])
                      }
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">
                      <strong>Price Range</strong>
                    </Label>
                    <Select
                      value={filters.priceCategory}
                      onValueChange={(value) =>
                        handleFilterChange("priceCategory", value)
                      }
                    >
                      <SelectTrigger id="price">
                        <SelectValue placeholder="Select price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All prices</SelectItem>
                        <SelectItem value="free">Free</SelectItem>
                        <SelectItem value="budget">Budget ($)</SelectItem>
                        <SelectItem value="moderate">Moderate ($$)</SelectItem>
                        <SelectItem value="expensive">
                          Expensive ($$$)
                        </SelectItem>
                        <SelectItem value="luxury">Luxury ($$$$)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">
                      <strong>Time of Day</strong>
                    </Label>
                    <Select
                      value={filters.timeOfDay}
                      onValueChange={(value) =>
                        handleFilterChange("timeOfDay", value)
                      }
                    >
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select time of day" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any time</SelectItem>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                        <SelectItem value="night">Night</SelectItem>
                        <SelectItem value="24hours">24 Hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-6">
                  <div className="flex items-center text-muted-foreground text-sm">
                    Showing {filteredAttractions.length} of{" "}
                    {attractionData.length} attractions
                  </div>
                  <Button
                    variant="destructive"
                    onClick={resetFilters}
                    className="mr-2"
                  >
                    Reset Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div>
            {filteredAttractions.map((attraction, index) => (
              <div
                key={index}
                className={cn("py-7 lg:flex gap-7", {
                  "border-b-2 border-tertiary":
                    index < filteredAttractions.length - 1,
                })}
              >
                <Image
                  src={attraction.imageUrl}
                  alt={attraction.title}
                  width={400}
                  height={400}
                  className="mb-4 lg:mb-0 rounded-lg w-full lg:w-1/3 h-auto aspect-video object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div className="mb-2">
                    <div className="flex md:flex-row flex-col justify-between items-start mt-3">
                      <div>
                        <h3>{attraction.title}</h3>
                        <h5>{attraction.location}</h5>
                        {displayRatingStars(attraction.rating)}
                      </div>
                      <div>
                        {attraction.tags && (
                          <div className="flex flex-wrap gap-2">
                            {attraction.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex}>{tag}</Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      {attraction.openingHours && (
                        <p>
                          <strong>Opening Hours:</strong>{" "}
                          {attraction.openingHours}
                        </p>
                      )}
                      {attraction.priceRange && (
                        <p>
                          <strong>Entry Fee:</strong> {attraction.priceRange}
                        </p>
                      )}
                    </div>
                  </div>
                  <p>{attraction.description}</p>
                  <div>
                    {attraction.accessibilityFeatures && (
                      <div className="mt-2">
                        <strong>Accessibility Features:</strong>
                        <ul className="ml-4 list-disc">
                          {attraction.accessibilityFeatures.map(
                            (feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    <TooltipProvider>
                      <div className="flex flex-wrap gap-x-3 mt-2">
                        {attraction.isFamilyFriendly && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/family-friendly.svg"
                                alt="Family Friendly Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Family Friendly</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isPetFriendly && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/pet-friendly.svg"
                                alt="Pet Friendly Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Pet Friendly</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isWheelchairAccessible && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/wheelchair.svg"
                                alt="Wheelchair Accessible Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Wheelchair Accessible</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isPopular && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/popular.svg"
                                alt="Popular Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Popular</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isFree && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/free.svg"
                                alt="Free Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Free Entry</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isLuxury && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/luxury.svg"
                                alt="Luxury Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Luxury Experience</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isHistorical && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/historical.svg"
                                alt="Historical Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Historical Significance</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isAdventure && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/adventure.svg"
                                alt="Adventure Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Adventure Activities</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isRomantic && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/romantic.svg"
                                alt="Romantic Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Romantic Experience</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isOutdoor && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/outdoor.svg"
                                alt="Outdoor Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Outdoor Activities</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isIndoor && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/indoor.svg"
                                alt="Indoor Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Indoor Activities</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isShopping && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/shopping.svg"
                                alt="Shopping Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Shopping Experience</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isDining && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/dining.svg"
                                alt="Dining Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Dining Experience</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isOffTheBeatenPath && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/off-the-beaten-path.svg"
                                alt="Off The Beaten Path Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Off The Beaten Path</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isLocalExperience && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/local-experience.svg"
                                alt="Local Experience Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Local Experience</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {attraction.isNightlife && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Image
                                src="/icons/nightlife.svg"
                                alt="Nightlife Icon"
                                width={40}
                                height={40}
                                className="inline-block"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Nightlife Experience</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
