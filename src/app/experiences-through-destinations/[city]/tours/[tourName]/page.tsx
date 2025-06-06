"use client";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Currency } from "@/lib/interfaces/general";
import { TourGuide } from "@/lib/interfaces/people/staff";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { Tour } from "@/lib/interfaces/services/tours";
import { convertPrice } from "@/lib/utils/format";
import { getCityAttractionById } from "@/lib/utils/get/attractions";
import { getTourGuideById } from "@/lib/utils/get/guides";
import { getTourById } from "@/lib/utils/get/tours";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function TourDetailsPage() {
  const searchParams = useSearchParams();
  const tourId = searchParams.get("tourId");
  const guideId = searchParams.get("guideId");
  const city = searchParams.get("city")?.replaceAll("/", "");
  const selectedCurrency = searchParams.get("currency");
  console.log("Selected Currency:", selectedCurrency);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const [tourData, setTourData] = useState<Tour>();
  const [tourGuide, setTourGuide] = useState<TourGuide>();
  const [cityAttractions, setCityAttractions] = useState<Attraction[]>([]); // Change to state variable
  useEffect(() => {
    if (!tourId || !guideId || !city || !selectedCurrency) {
      console.warn("Missing required parameters for fetching tour details.");
      return;
    }
    async function fetchTourDetails() {
      try {
        setLoading(true);
        const response = await getTourById(city as string, tourId as string);
        if (!response) {
          console.warn(`No tour found with ID: ${tourId}`);
          return;
        }
        setTourData(response);
        setLoading(false);
        console.log("Tour details fetched successfully:", response);
      } catch (error) {
        console.error("Error fetching tour details:", error);
      }
    }
    fetchTourDetails();
  }, [tourId, city, guideId, selectedCurrency]);
  useEffect(() => {
    if (!tourData) return;
    async function fetchTourGuide() {
      try {
        const guideResponse = await getTourGuideById(
          city as string,
          guideId as string,
        );
        if (!guideResponse) {
          console.warn(`No tour guide found with ID: ${guideId}`);
          return;
        }
        setTourGuide(guideResponse);
        console.log("Tour guide fetched successfully:", guideResponse);
      } catch (error) {
        console.error("Error fetching tour guide:", error);
      }
    }
    fetchTourGuide();
  }, [tourData, city, guideId]);
  useEffect(() => {
    if (!tourData || !tourData.schedule || tourData.schedule.length === 0)
      return;
    async function fetchAttractions() {
      const fetchedAttractions: Attraction[] = [];
      for (const scheduleItem of tourData?.schedule ?? []) {
        try {
          const attractionData = await getCityAttractionById(
            city as string,
            scheduleItem.attractionId,
          );
          if (attractionData) {
            fetchedAttractions.push(attractionData);
          } else {
            console.warn(
              `No attraction found with ID: ${scheduleItem.attractionId} in city: ${city}`,
            );
          }
        } catch (error) {
          console.error(
            `Error fetching attraction with ID: ${scheduleItem.attractionId} in city: ${city}`,
            error,
          );
        }
      }
      setCityAttractions(fetchedAttractions);
      console.log(
        `Fetched ${fetchedAttractions.length} attractions for the tour`,
      );
    }
    fetchAttractions();
  }, [tourData, city]);
  console.log("Tour Data:", tourData);
  console.log("Tour Guide:", tourGuide);
  console.log("City Attractions:", cityAttractions);
  const [updatedCurrency, setUpdatedCurrency] = useState<Currency>(
    (selectedCurrency as Currency) || tourData?.currency || "USD",
  );
  const displayPrice = convertPrice(
    parseFloat(tourData?.price as string),
    tourData?.currency || "USD", // Add fallback if currency is missing
    updatedCurrency,
  );
  if (!tourId || !guideId || !city || !selectedCurrency) {
    return (
      <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
        <h1 className="mb-6 font-bold text-4xl">Tour Details</h1>
        <p className="mb-8 max-w-2xl text-center text-lg">
          Please select a tour to view its details.
        </p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {tourData && (
        <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
          <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
            <header>
              <h1 className="text-start">{tourData.title}</h1>
              <h5 className="text-start">
                {tourData.country} {tourData.region}
              </h5>
              <p>{tourData.description}</p>
            </header>
            <div className="flex sm:flex-row flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                {/* Currency selector */}
                <Select
                  value={selectedCurrency}
                  onValueChange={(value) =>
                    setUpdatedCurrency(value as Currency)
                  }
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="EUR">EUR (€)</SelectItem>
                    <SelectItem value="GBP">GBP (£)</SelectItem>
                    <SelectItem value="JPY">JPY (¥)</SelectItem>
                    <SelectItem value="AUD">AUD (A$)</SelectItem>
                    <SelectItem value="CAD">CAD (C$)</SelectItem>
                    <SelectItem value="CNY">CNY (¥)</SelectItem>
                    <SelectItem value="CHF">CHF (CHF)</SelectItem>
                    <SelectItem value="SEK">SEK (kr)</SelectItem>
                    <SelectItem value="NOK">NOK (kr)</SelectItem>
                    <SelectItem value="DKK">DKK (kr)</SelectItem>
                    <SelectItem value="NZD">NZD (NZ$)</SelectItem>
                    <SelectItem value="INR">INR (₹)</SelectItem>
                    <SelectItem value="MXN">MXN ($)</SelectItem>
                    <SelectItem value="BRL">BRL (R$)</SelectItem>
                    <SelectItem value="ZAR">ZAR (R)</SelectItem>
                    <SelectItem value="KRW">KRW (₩)</SelectItem>
                    <SelectItem value="SGD">SGD (S$)</SelectItem>
                    <SelectItem value="HKD">HKD (HK$)</SelectItem>
                    <SelectItem value="AED">AED (د.إ)</SelectItem>
                    <SelectItem value="THB">THB (฿)</SelectItem>
                    <SelectItem value="TRY">TRY (₺)</SelectItem>
                    <SelectItem value="IDR">IDR (Rp)</SelectItem>
                    <SelectItem value="PHP">PHP (₱)</SelectItem>
                    <SelectItem value="PLN">PLN (zł)</SelectItem>
                    <SelectItem value="HUF">HUF (Ft)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-8">
            {/* Tour Details */}
            <div className="flex flex-col md:col-span-2 lg:col-span-4 shadow-md p-6 border border-border rounded-lg h-full overflow-hidden">
              <h2>Tour Details</h2>
              <div className="mb-4">
                <h3>Overview</h3>
                <p>{tourData.description}</p>
              </div>
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
                <div>
                  <h4>Duration</h4>
                  <p>{tourData.durationInHours} hours</p>
                </div>
                <div>
                  <h4>Price</h4>
                  <p className="font-semibold text-lg">
                    {tourData.pricePerPerson}
                  </p>
                </div>
                <div>
                  <h4>Group Size</h4>
                  <p>
                    {tourData.minGroupSize || 1}-{tourData.maxGroupSize} people
                  </p>
                </div>
                <div>
                  <h4>Languages</h4>
                  <p>{tourData.languagesOffered.join(", ")}</p>
                </div>
              </div>
              <div className="gap-6 grid md:grid-cols-2">
                {" "}
                <div className="mb-4">
                  <h3>What's Included</h3>
                  <ul className="pl-5 list-disc">
                    {tourData.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {tourData.requirements && tourData.requirements.length > 0 && (
                  <div className="mb-4">
                    <h3>Requirements</h3>
                    <ul className="pl-5 list-disc">
                      {tourData.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {tourData.notIncluded && tourData.notIncluded.length > 0 && (
                  <div className="mb-4">
                    <h3>Not Included</h3>
                    <ul className="pl-5 list-disc">
                      {tourData.notIncluded.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {tourData.cancellationPolicy && (
                  <div className="mb-4">
                    <h3>Cancellation Policy</h3>
                    <p>{tourData.cancellationPolicy}</p>
                  </div>
                )}
              </div>
            </div>
            {/* Tour Guide Information */}
            <div className="flex flex-col md:col-span-1 lg:col-span-2 shadow-md p-6 border border-border rounded-lg h-full overflow-hidden">
              <h2>Your Guide</h2>
              {tourGuide ? (
                <div className="flex flex-col items-center">
                  {tourGuide.profileImage && (
                    <div className="mb-4 rounded-full w-32 h-32 overflow-hidden">
                      <Image
                        src={tourGuide.profileImage}
                        alt={`${tourGuide.name} ${tourGuide.licenseNumber}`}
                        className="w-full h-full object-cover"
                        width={128}
                        height={128}
                      />
                    </div>
                  )}
                  <h3>{tourGuide.name}</h3>
                  <h5>{tourGuide.licenseNumber}</h5>
                  {tourGuide.languages && (
                    <p className="mb-2 text-sm">
                      <strong>Speaks:</strong> {tourGuide.languages.join(", ")}
                    </p>
                  )}
                  {tourGuide.bio && <p className="mt-2">{tourGuide.bio}</p>}
                  {tourGuide.specialties &&
                    tourGuide.specialties.length > 0 && (
                      <div className="mt-4">
                        <h4>Specialties</h4>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                          {tourGuide.specialties.map((specialty, i) => (
                            <Badge key={i} variant={"defaultFaded"}>
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              ) : (
                <p>Guide information not available</p>
              )}
            </div>
          </div>
          {/* Tour Schedule with Attractions */}
          <div className="shadow-md mt-6 p-6 border border-border rounded-lg">
            <h2>Tour Itinerary</h2>
            {tourData.schedule && tourData.schedule.length > 0 ? (
              <div className="space-y-6">
                {tourData.schedule.map((scheduleItem, index) => {
                  const attraction = cityAttractions.find(
                    (a) => a.id === scheduleItem.attractionId,
                  );
                  return (
                    <div
                      key={index}
                      className="pb-6 pl-4 border-primary border-l-4"
                    >
                      <div className="flex items-center mb-2">
                        <span className="bg-primary/10 px-2 py-1 rounded text-primary text-sm">
                          {scheduleItem.dayOfWeek || "Flexible"},{" "}
                          {scheduleItem.startTime} - {scheduleItem.endTime}
                        </span>
                      </div>
                      {attraction ? (
                        <div className="gap-4 grid md:grid-cols-3">
                          <div className="md:col-span-1">
                            {attraction.imageUrl && (
                              <div className="rounded-lg overflow-hidden aspect-[4/3]">
                                <Image
                                  width={400}
                                  height={300}
                                  src={attraction.imageUrl}
                                  alt={attraction.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                          <div className="md:col-span-2">
                            <h3>{attraction.title}</h3>
                            <p className="line-clamp-3">
                              {attraction.description}
                            </p>
                            {attraction.tags && attraction.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {attraction.tags.slice(0, 3).map((tag, i) => (
                                  <Badge variant="secondaryFaded" key={i}>
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <p>Attraction information not available</p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>No schedule information available</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
