"use client";

import { Badge } from "@/components/ui/badge";
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
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function DestinationDetailsPage() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getCityAttractions(city, region, country);
        setAttractionData(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, region, country]);

  console.log("Attractions data:", attractionData);

  const popularAttractions = featuredArray(attractionData);

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
          <h2>City Attractions</h2>

          <div>
            {attractionData.map((attraction, index) => (
              <div
                key={index}
                className={cn("py-7 lg:flex gap-7", {
                  "border-b-2 border-tertiary":
                    index < attractionData.length - 1,
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
