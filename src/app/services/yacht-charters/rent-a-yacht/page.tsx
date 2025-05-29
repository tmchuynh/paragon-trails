"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { yachtCharterFleet } from "@/lib/constants/services/transportation/yachts";
import { capitalize } from "@/lib/utils/format";
import { useState } from "react";

export default function RentAYachtPage() {
  // Filter states
  const [cabinsFilter, setCabinsFilter] = useState<number | null>(null);
  const [privacyLevelFilter, setPrivacyLevelFilter] = useState<string>("");
  const [lengthFilter, setLengthFilter] = useState<number | null>(null);
  const [passengerFilter, setPassengerFilter] = useState<number | null>(null);
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Get all unique privacy levels, amenities, and features
  const allPrivacyLevels = new Set<string>();
  const allAmenities = new Set<string>();
  const allFeatures = new Set<string>();

  yachtCharterFleet.forEach((category) => {
    category.vessels.forEach((yacht) => {
      allPrivacyLevels.add(yacht.privacyLevel);

      yacht.amenities.forEach((amenity) => allAmenities.add(amenity));

      Object.entries(yacht.features)
        .filter(([_, value]) => value === true)
        .forEach(([key, _]) => allFeatures.add(key));
    });
  });

  // Find max values for numeric filters
  const maxLength = Math.max(
    ...yachtCharterFleet.flatMap((category) =>
      category.vessels.map((yacht) => yacht.lengthFeet)
    )
  );

  const maxCabins = Math.max(
    ...yachtCharterFleet.flatMap((category) =>
      category.vessels.map((yacht) => yacht.cabins)
    )
  );

  const maxPassengers = Math.max(
    ...yachtCharterFleet.flatMap((category) =>
      category.vessels.map((yacht) => yacht.maxPassengers)
    )
  );

  const maxPrice = Math.max(
    ...yachtCharterFleet.flatMap((category) =>
      category.vessels.map((yacht) => yacht.pricePerDayUSD)
    )
  );

  // Filter the yachts
  const filteredCategories = yachtCharterFleet
    .map((category) => ({
      ...category,
      vessels: category.vessels.filter((yacht) => {
        // Filter by cabins
        if (cabinsFilter !== null && yacht.cabins < cabinsFilter) {
          return false;
        }

        // Filter by privacy level
        if (privacyLevelFilter && yacht.privacyLevel !== privacyLevelFilter) {
          return false;
        }

        // Filter by length
        if (lengthFilter !== null && yacht.lengthFeet < lengthFilter) {
          return false;
        }

        // Filter by passengers
        if (passengerFilter !== null && yacht.maxPassengers < passengerFilter) {
          return false;
        }

        // Filter by price
        if (priceFilter !== null && yacht.pricePerDayUSD > priceFilter) {
          return false;
        }

        // Filter by amenities
        if (selectedAmenities.length > 0) {
          if (
            !selectedAmenities.every((amenity) =>
              yacht.amenities.includes(amenity)
            )
          ) {
            return false;
          }
        }

        // Filter by features
        if (selectedFeatures.length > 0) {
          const yachtFeatures = Object.entries(yacht.features)
            .filter(([_, value]) => value === true)
            .map(([key, _]) => key);

          if (
            !selectedFeatures.every((feature) =>
              yachtFeatures.includes(feature)
            )
          ) {
            return false;
          }
        }

        return true;
      }),
    }))
    .filter((category) => category.vessels.length > 0);

  // Handle filter changes
  const handleCabinsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    setCabinsFilter(value);
  };

  const handlePrivacyLevelChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPrivacyLevelFilter(e.target.value);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    setLengthFilter(value);
  };

  const handlePassengerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    setPassengerFilter(value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    setPriceFilter(value);
  };

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const resetFilters = () => {
    setCabinsFilter(null);
    setPrivacyLevelFilter("");
    setLengthFilter(null);
    setPassengerFilter(null);
    setPriceFilter(null);
    setSelectedAmenities([]);
    setSelectedFeatures([]);
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Your Private Floating Sanctuary</h1>
        <h5>Experience unmatched luxury with our tailored yacht rentals.</h5>
        <blockquote>
          "Chartering a yacht with Paragon Trails was the highlight of our
          vacation. The crew was exceptional, and the yacht was stunning." –
          Emily R., Satisfied Customer
        </blockquote>
        <p>
          Whether you're looking for a relaxing getaway or an adventurous
          sailing experience, we have a variety of options to suit your needs.
          Our yacht charter fleet includes a wide range of vessels, from sleek
          motor yachts to elegant sailing yachts, all equipped with top-notch
          amenities and staffed by experienced crews. Browse through our
          selection to find the ideal yacht for your journey, and let us help
          you create unforgettable memories on the water.
        </p>
      </header>

      {/* Filter Section */}
      <div className="bg-gray-50 dark:bg-gray-800 shadow mb-8 p-6 rounded-lg">
        <h2 className="mb-4">Filter Yachts</h2>

        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Cabins Filter */}
          <div>
            <Label className="block mb-2">
              <strong>Minimum Cabins</strong>
            </Label>
            <select
              className="p-2 border rounded w-full"
              value={cabinsFilter || ""}
              onChange={handleCabinsChange}
            >
              <option value="">Any</option>
              {Array.from({ length: maxCabins }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}+ Cabins
                </option>
              ))}
            </select>
          </div>

          {/* Privacy Level Filter */}
          <div>
            <Label className="block mb-2">
              <strong>Privacy Level</strong>
            </Label>
            <select
              className="p-2 border rounded w-full"
              value={privacyLevelFilter}
              onChange={handlePrivacyLevelChange}
            >
              <option value="">Any</option>
              {Array.from(allPrivacyLevels)
                .sort()
                .map((level) => (
                  <option key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </option>
                ))}
            </select>
          </div>

          {/* Yacht Length Filter */}
          <div>
            <Label className="block mb-2">
              <strong>Minimum Length (feet)</strong>
            </Label>
            <select
              className="p-2 border rounded w-full"
              value={lengthFilter || ""}
              onChange={handleLengthChange}
            >
              <option value="">Any</option>
              {[50, 75, 100, 125, 150, 175, 200]
                .filter((len) => len <= maxLength)
                .map((len) => (
                  <option key={len} value={len}>
                    {len}+ ft
                  </option>
                ))}
            </select>
          </div>

          {/* Passenger Filter */}
          <div>
            <Label className="block mb-2">
              <strong>Minimum Passengers</strong>
            </Label>
            <select
              className="p-2 border rounded w-full"
              value={passengerFilter || ""}
              onChange={handlePassengerChange}
            >
              <option value="">Any</option>
              {Array.from(
                { length: Math.ceil(maxPassengers / 2) },
                (_, i) => (i + 1) * 2
              )
                .filter((num) => num <= maxPassengers)
                .map((num) => (
                  <option key={num} value={num}>
                    {num}+ Passengers
                  </option>
                ))}
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <Label className="block mb-2">
              <strong>Maximum Price per Day (USD)</strong>
            </Label>
            <input
              type="range"
              min="0"
              max={maxPrice}
              step="5000"
              className="w-full"
              value={priceFilter || maxPrice}
              onChange={handlePriceChange}
            />
            <div className="flex justify-between">
              <span>$0</span>
              <span>
                $
                {priceFilter
                  ? priceFilter.toLocaleString()
                  : maxPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Amenities Filter */}
          <div>
            <Label className="block mb-2">
              <strong>Amenities</strong>
            </Label>
            <div className="p-2 border rounded max-h-40 overflow-y-auto">
              {Array.from(allAmenities)
                .sort()
                .map((amenity, i) => (
                  <div key={i} className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      id={`amenity-${i}`}
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                      className="mr-2"
                    />
                    <Label
                      htmlFor={`amenity-${i}`}
                      className="text-sm capitalize"
                    >
                      {capitalize(amenity)}
                    </Label>
                  </div>
                ))}
            </div>
          </div>

          {/* Features Filter */}
          <div>
            <Label className="block mb-2">
              <strong>Interior Features</strong>
            </Label>
            <div className="p-2 border rounded max-h-40 overflow-y-auto">
              {Array.from(allFeatures)
                .sort()
                .map((feature, i) => (
                  <div key={i} className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      id={`feature-${i}`}
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => handleFeatureChange(feature)}
                      className="mr-2"
                    />
                    <Label htmlFor={`feature-${i}`} className="text-sm">
                      {capitalize(
                        feature
                          .replace(/([A-Z])/g, " $1")
                          .replace(/([A-Z][a-z])/g, " $1")
                      )}
                    </Label>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="text-right mt-4">
          <Button variant={"destructive"} onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      </div>

      {/* Yacht Categories */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="mb-6 pb-2 border-gray-700 border-b">
              {category.category}
            </h2>

            {/* Yacht Grid */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {category.vessels.map((yacht, yachtIndex) => (
                <div
                  key={yachtIndex}
                  className="flex flex-col justify-between shadow-md hover:shadow-lg border border-border rounded-lg h-full transition-shadow duration-300"
                >
                  {/* Yacht Header */}
                  <div className="p-5 border-tertiary border-b-2">
                    <h3 className="font-bold text-xl">{yacht.name}</h3>
                    <p>{yacht.model}</p>
                  </div>

                  <div className="flex flex-col justify-between p-6 h-full">
                    {/* Yacht Details */}
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mb-6">
                      <div>
                        <h5>Length</h5>
                        <p className="font-semibold text-lg">
                          {yacht.lengthFeet} ft
                        </p>
                      </div>
                      <div>
                        <h5>Passengers</h5>
                        <p className="font-semibold text-lg">
                          {yacht.maxPassengers}
                        </p>
                      </div>
                      <div>
                        <h5>Cabins</h5>
                        <p className="font-semibold text-lg">{yacht.cabins}</p>
                      </div>
                      <div>
                        <h5>Crew</h5>
                        <p className="font-semibold text-lg">{yacht.crew}</p>
                      </div>
                    </div>
                    <div className="h-full">
                      <div className="mb-6">
                        <strong>Privacy Level</strong>
                        <p className="capitalize">{yacht.privacyLevel}</p>
                      </div>

                      {/* Amenities */}
                      <div className="mb-6">
                        <h4>Key Features</h4>
                        <ul className="gap-1 grid grid-cols-1">
                          {yacht.amenities.map((amenity, i) => (
                            <li
                              key={i}
                              className="ml-2 text-sm capitalize list-disc list-inside"
                            >
                              <span className="text-sm">{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between h-full">
                      {/* Features */}
                      <div className="mb-6 h-full">
                        <h4>Interior Features</h4>
                        <div className="gap-y-1 grid grid-cols-1">
                          {Object.entries(yacht.features)
                            .filter(([_, value]) => value === true)
                            .map(([key, _], i) => (
                              <ul
                                key={i}
                                className="flex items-center list-disc list-inside"
                              >
                                <li className="ml-2 text-sm capitalize list-disc list-inside">
                                  {key
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/([A-Z][a-z])/g, " $1")}
                                </li>
                              </ul>
                            ))}
                        </div>
                      </div>

                      {/* Price */}
                      <div>
                        <h5>Starting from</h5>
                        <p className="font-bold text-fancy text-xl">
                          ${yacht.pricePerDayUSD.toLocaleString()}{" "}
                          <span className="font-normal text-foreground text-sm">
                            per day
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="py-12 text-center">
          <h3 className="mb-4 font-semibold text-xl">
            No yachts match your filter criteria
          </h3>
          <Button variant={"accent"} onClick={resetFilters}>
            Reset All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
