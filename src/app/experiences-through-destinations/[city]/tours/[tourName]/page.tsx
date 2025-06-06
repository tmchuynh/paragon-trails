"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Currency } from "@/lib/interfaces/general";
import { Tour } from "@/lib/interfaces/services/tours";
import { getTourById } from "@/lib/utils/get/tours";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Loading from "@/components/Loading";

import { TourGuide } from "@/lib/interfaces/people/staff";
import { convertPrice } from "@/lib/utils/format";
import { getTourGuideById } from "@/lib/utils/get/guides";
import { useRouter } from "next/navigation";

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
          guideId as string
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

  console.log("Tour Data:", tourData);
  console.log("Tour Guide:", tourGuide);

  const [updatedCurrency, setUpdatedCurrency] = useState<Currency>(
    (selectedCurrency as Currency) || tourData?.currency || "USD"
  );

  const displayPrice = convertPrice(
    parseFloat(tourData?.price as string),
    tourData?.currency || "USD", // Add fallback if currency is missing
    updatedCurrency
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

            <div className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
              <div className="flex flex-col md:col-span-2 lg:col-span-4 shadow-md border border-border rounded-lg h-full overflow-hidden"></div>

              <div className="flex flex-col md:col-span-1 lg:col-span-2 shadow-md border border-border rounded-lg h-full overflow-hidden"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
