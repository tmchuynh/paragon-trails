"use client";

import Loading from "@/components/Loading";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cities } from "@/lib/constants/info/city";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { cn } from "@/lib/utils";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { capitalize } from "@/lib/utils/format";
import { getCityAttractions } from "@/lib/utils/get";
import { featuredArray } from "@/lib/utils/sort";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

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

  const cityInfo = cities.find(
    (item) =>
      (item.city === formattedCity && item.country === formattedCountry) ||
      item.region === formattedCountry,
  );

  const [attractionData, setAttractionData] = useState<Attraction[]>([]);
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>(
    [],
  );
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [filters, setFilters] = useState({
    isFree: false,
    isWheelchairAccessible: false,
    isPetFriendly: false,
    isFamilyFriendly: false,
    isHistorical: false,
    isAdventure: false,
    isRomantic: false,
    isLuxury: false,
    isCulinary: false,
    isSpiritual: false,
    isWellness: false,
    isArtOrMusic: false,
    isCultural: false,
    isOutdoor: false,
    isIndoor: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isNightlife: false,
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
      if (filters.isFree && !attraction.isFree) return false;
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
      if (filters.isCulinary && !attraction.isCulinary) return false;
      if (filters.isSpiritual && !attraction.isSpiritual) return false;
      if (filters.isWellness && !attraction.isWellness) return false;
      if (filters.isArtOrMusic && !attraction.isArtOrMusic) return false;
      if (filters.isCultural && !attraction.isCultural) return false;
      if (filters.isPetFriendly && !attraction.isPetFriendly) return false;
      if (filters.isFamilyFriendly && !attraction.isFamilyFriendly)
        return false;
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
          const entryFee = attraction.entryFee?.toLowerCase() || "";
          const entryFeeCategory =
            attraction.entryFeeCategory?.toLowerCase() || "";

          switch (filters.priceCategory) {
            case "free":
              if (
                (!priceRange.includes("free") && !attraction.isFree) ||
                !entryFee.includes("free")
              )
                return false;
              break;
            case "budget":
              if (
                priceRange.includes("$") ||
                entryFeeCategory.includes("budget")
              )
                return false;
              break;
            case "moderate":
              if (
                !priceRange.includes("$") ||
                priceRange.includes("$$") ||
                entryFeeCategory.includes("moderate")
              )
                return false;
              break;
            case "expensive":
              if (
                !priceRange.includes("$$") ||
                priceRange.includes("$$$") ||
                entryFeeCategory.includes("expensive")
              )
                return false;
              break;
            case "luxury":
              if (
                !priceRange.includes("$$$") ||
                entryFeeCategory.includes("luxury")
              )
                return false;
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
      isFree: false,
      isWheelchairAccessible: false,
      isPetFriendly: false,
      isFamilyFriendly: false,
      isHistorical: false,
      isAdventure: false,
      isRomantic: false,
      isCulinary: false,
      isSpiritual: false,
      isWellness: false,
      isArtOrMusic: false,
      isOutdoor: false,
      isIndoor: false,
      isCultural: false,
      isLuxury: false,
      isOffTheBeatenPath: false,
      isLocalExperience: false,
      isNightlife: false,
      minRating: 0,
      priceCategory: "all",
      timeOfDay: "all",
    });
  };

  const queryParams = new URLSearchParams({
    city: city,
    country: country,
  });

  if (loading) {
    return <Loading />;
  }

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
                `/luxurious-destinations/${country}/${city}/tours?${queryParams.toString()}`,
              )
            }
          >
            Explore Available Tours in {formattedCity}
          </Button>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
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
                      {[
                        {
                          id: "historical",
                          key: "isHistorical",
                          label: "Historical",
                        },
                        {
                          id: "adventure",
                          key: "isAdventure",
                          label: "Adventure",
                        },
                        {
                          id: "romantic",
                          key: "isRomantic",
                          label: "Romantic",
                        },
                        { id: "luxury", key: "isLuxury", label: "Luxury" },
                        {
                          id: "spiritual",
                          key: "isSpiritual",
                          label: "Spiritual",
                        },
                        {
                          id: "offbeat",
                          key: "isOffTheBeatenPath",
                          label: "Off The Beaten Path",
                        },
                        {
                          id: "local",
                          key: "isLocalExperience",
                          label: "Local Experience",
                        },
                      ].map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={item.id}
                            checked={Boolean(
                              filters[item.key as keyof typeof filters],
                            )}
                            onCheckedChange={(checked) =>
                              handleFilterChange(
                                item.key as keyof typeof filters,
                                checked,
                              )
                            }
                          />
                          <Label htmlFor={item.id}>{item.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3>Features</h3>
                    <div className="space-y-1">
                      {[
                        {
                          id: "pet-friendly",
                          key: "isPetFriendly",
                          label: "Pet-friendly",
                        },
                        {
                          id: "family-friendly",
                          key: "isFamilyFriendly",
                          label: "Family Friendly",
                        },
                        { id: "free", key: "isFree", label: "Free" },
                        {
                          id: "wheelchair",
                          key: "isWheelchairAccessible",
                          label: "Wheelchair Accessible",
                        },
                        { id: "outdoor", key: "isOutdoor", label: "Outdoor" },
                        { id: "indoor", key: "isIndoor", label: "Indoor" },
                      ].map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={item.id}
                            checked={Boolean(
                              filters[item.key as keyof typeof filters],
                            )}
                            onCheckedChange={(checked) =>
                              handleFilterChange(
                                item.key as keyof typeof filters,
                                checked,
                              )
                            }
                          />
                          <Label htmlFor={item.id}>{item.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3>Activities</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="dining"
                          checked={filters.isCultural}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isCultural", checked)
                          }
                        />
                        <Label htmlFor="dining">Cultural</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="outdoor"
                          checked={filters.isCulinary}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isCulinary", checked)
                          }
                        />
                        <Label htmlFor="outdoor">Culinary</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="indoor"
                          checked={filters.isNightlife}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isNightlife", checked)
                          }
                        />
                        <Label htmlFor="indoor">Night Life</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="indoor"
                          checked={filters.isArtOrMusic}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isArtOrMusic", checked)
                          }
                        />
                        <Label htmlFor="indoor">Art/Music</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="indoor"
                          checked={filters.isWellness}
                          onCheckedChange={(checked) =>
                            handleFilterChange("isWellness", checked)
                          }
                        />
                        <Label htmlFor="indoor">Wellness</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
                  {/* Rating filter */}
                  <div className="space-y-2">
                    <Label htmlFor="rating-filter">
                      <strong>Minimum Rating</strong>
                    </Label>
                    <Select
                      value={filters.minRating.toString()}
                      onValueChange={(value) =>
                        handleFilterChange("minRating", Number(value))
                      }
                    >
                      <SelectTrigger id="rating-filter">
                        <SelectValue placeholder="Any rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any rating</SelectItem>
                        <SelectItem value="1">★ and above</SelectItem>
                        <SelectItem value="2">★★ and above</SelectItem>
                        <SelectItem value="3">★★★ and above</SelectItem>
                        <SelectItem value="4">★★★★ and above</SelectItem>
                        <SelectItem value="5">★★★★★ only</SelectItem>
                      </SelectContent>
                    </Select>
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
                <div className="flex flex-col justify-between w-full">
                  <div className="mb-2">
                    <div className="flex md:flex-row flex-col justify-between items-start mt-3">
                      <div>
                        <div className="inline-flex items-center gap-1">
                          <h3>{attraction.title}</h3>
                          {attraction.priceRange && (
                            <span>({attraction.priceRange})</span>
                          )}
                        </div>
                        <h5>{attraction.location}</h5>
                        <div className="w-fit">
                          {displayRatingStars(attraction.rating)}
                        </div>
                      </div>
                      <div>
                        {attraction.tags && (
                          <div className="flex flex-wrap gap-2">
                            {attraction.tags.map((tag, tagIndex) => (
                              <Badge size={"lg"} key={tagIndex}>
                                {capitalize(tag)}
                              </Badge>
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
                      {attraction.entryFee && (
                        <p>
                          <strong>Entry Fee:</strong> {attraction.entryFee}
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
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                    <TooltipProvider>
                      <div className="flex flex-wrap gap-x-3 mt-2">
                        {[
                          {
                            property: "isFamilyFriendly",
                            icon: "/icons/family-friendly.svg",
                            alt: "Family Friendly Icon",
                            tooltip: "Family Friendly",
                          },
                          {
                            property: "isPetFriendly",
                            icon: "/icons/pet-friendly.svg",
                            alt: "Pet Friendly Icon",
                            tooltip: "Pet Friendly",
                          },
                          {
                            property: "isWheelchairAccessible",
                            icon: "/icons/wheelchair.svg",
                            alt: "Wheelchair Accessible Icon",
                            tooltip: "Wheelchair Accessible",
                          },
                          {
                            property: "isPopular",
                            icon: "/icons/popular.svg",
                            alt: "Popular Icon",
                            tooltip: "Popular",
                          },
                          {
                            property: "isFree",
                            icon: "/icons/free.svg",
                            alt: "Free Icon",
                            tooltip: "Free Entry",
                          },
                          {
                            property: "isLuxury",
                            icon: "/icons/luxury.svg",
                            alt: "Luxury Icon",
                            tooltip: "Luxury Experience",
                          },
                          {
                            property: "isHistorical",
                            icon: "/icons/historical.svg",
                            alt: "Historical Icon",
                            tooltip: "Historical Significance",
                          },
                          {
                            property: "isAdventure",
                            icon: "/icons/adventure.svg",
                            alt: "Adventure Icon",
                            tooltip: "Adventure Activities",
                          },
                          {
                            property: "isRomantic",
                            icon: "/icons/romantic.svg",
                            alt: "Romantic Icon",
                            tooltip: "Romantic Experience",
                          },
                          {
                            property: "isOutdoor",
                            icon: "/icons/outdoor.svg",
                            alt: "Outdoor Icon",
                            tooltip: "Outdoor Activities",
                          },
                          {
                            property: "isIndoor",
                            icon: "/icons/indoor.svg",
                            alt: "Indoor Icon",
                            tooltip: "Indoor Activities",
                          },
                          {
                            property: "isOffTheBeatenPath",
                            icon: "/icons/off-the-beaten-path.svg",
                            alt: "Off The Beaten Path Icon",
                            tooltip: "Off The Beaten Path",
                          },
                          {
                            property: "isLocalExperience",
                            icon: "/icons/local-experience.svg",
                            alt: "Local Experience Icon",
                            tooltip: "Local Experience",
                          },
                          {
                            property: "isNightlife",
                            icon: "/icons/nightlife.svg",
                            alt: "Nightlife Icon",
                            tooltip: "Nightlife Experience",
                          },
                        ].map((feature, index) =>
                          attraction[
                            feature.property as keyof typeof attraction
                          ] ? (
                            <Tooltip key={index}>
                              <TooltipTrigger asChild>
                                <Image
                                  src={feature.icon}
                                  alt={feature.alt}
                                  width={40}
                                  height={40}
                                  className="inline-block"
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : null,
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
