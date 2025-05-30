"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { aircraftSelectionGuide } from "@/lib/constants/services/transportation/aircrafts";
import { capitalize } from "@/lib/utils/format";
import { useState } from "react";

export default function Aircrafts() {
  // Filter states
  const [passengerFilter, setPassengerFilter] = useState<number | null>(null);
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedInteriorFeatures, setSelectedInteriorFeatures] = useState<
    string[]
  >([]);

  // Get all unique features and interior features
  const allFeatures = new Set<string>();
  const allInteriorFeatures = new Set<string>();

  aircraftSelectionGuide.forEach((category) => {
    category.models.forEach((aircraft) => {
      Object.entries(aircraft.features)
        .filter(([_, value]) => value === true)
        .forEach(([key, _]) => allFeatures.add(key));

      aircraft.interiorFeatures.forEach((feature) =>
        allInteriorFeatures.add(feature)
      );
    });
  });

  // Find max price and max passengers
  const maxPrice = Math.max(
    ...aircraftSelectionGuide.flatMap((category) =>
      category.models.map((aircraft) => aircraft.pricePerHourUSD)
    )
  );

  const maxPassengers = Math.max(
    ...aircraftSelectionGuide.flatMap((category) =>
      category.models.map((aircraft) => aircraft.maxPassengers)
    )
  );

  // Filter the aircrafts
  const filteredCategories = aircraftSelectionGuide
    .map((category) => ({
      ...category,
      models: category.models.filter((aircraft) => {
        // Filter by passengers
        if (
          passengerFilter !== null &&
          aircraft.maxPassengers < passengerFilter
        ) {
          return false;
        }

        // Filter by price
        if (priceFilter !== null && aircraft.pricePerHourUSD > priceFilter) {
          return false;
        }

        // Filter by key features
        if (selectedFeatures.length > 0) {
          const aircraftFeatures = Object.entries(aircraft.features)
            .filter(([_, value]) => value === true)
            .map(([key, _]) => key);

          if (
            !selectedFeatures.every((feature) =>
              aircraftFeatures.includes(feature)
            )
          ) {
            return false;
          }
        }

        // Filter by interior features
        if (selectedInteriorFeatures.length > 0) {
          if (
            !selectedInteriorFeatures.every((feature) =>
              aircraft.interiorFeatures.includes(feature)
            )
          ) {
            return false;
          }
        }

        return true;
      }),
    }))
    .filter((category) => category.models.length > 0);

  // Handle filter changes
  const handlePassengerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    setPassengerFilter(value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    setPriceFilter(value);
  };

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleInteriorFeatureChange = (feature: string) => {
    setSelectedInteriorFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const resetFilters = () => {
    setPassengerFilter(null);
    setPriceFilter(null);
    setSelectedFeatures([]);
    setSelectedInteriorFeatures([]);
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Explore Our Fleet</h1>
        <h5>World-class aircraft, tailored to every journey</h5>
        <blockquote>
          "Flying with Paragon Trails was an experience like no other. The
          aircraft was luxurious, and the service was impeccable." – Sarah L.,
          Frequent Flyer
        </blockquote>
        <p>
          Explore our fleet of private aircrafts, designed for comfort and
          luxury. Whether you're looking for a small jet for a quick trip or a
          larger aircraft for a long-haul journey, we have options to suit your
          needs. Our aircrafts are equipped with the latest technology and
          amenities to ensure a smooth and enjoyable flight experience.
        </p>
      </header>

      {/* Filter Section */}
      <div className="bg-gray-50 dark:bg-gray-800 shadow mb-8 p-6 rounded-lg">
        <h2 className="mb-4">Filter Aircraft</h2>

        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
                { length: Math.ceil(maxPassengers / 5) },
                (_, i) => (i + 1) * 5
              )
                .filter((num) => num <= maxPassengers)
                .concat(maxPassengers % 5 !== 0 ? [maxPassengers] : [])
                .sort((a, b) => a - b)
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
              <strong>Maximum Price per Hour (USD)</strong>
            </Label>
            <input
              type="range"
              min="0"
              max={maxPrice}
              step="1000"
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

          {/* Feature Filter */}
          <div>
            <Label className="block mb-2">
              <strong>Key Features</strong>
            </Label>
            <div className="p-2 border rounded max-h-40 overflow-y-auto">
              {Array.from(allFeatures).map((feature, i) => (
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

          {/* Interior Feature Filter */}
          <div>
            <Label className="block mb-2">
              <strong>Interior Features</strong>
            </Label>
            <div className="p-2 border rounded max-h-40 overflow-y-auto">
              {Array.from(allInteriorFeatures).map((feature, i) => (
                <div key={i} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    id={`interior-${i}`}
                    checked={selectedInteriorFeatures.includes(feature)}
                    onChange={() => handleInteriorFeatureChange(feature)}
                    className="mr-2"
                  />
                  <Label htmlFor={`interior-${i}`} className="text-sm">
                    {capitalize(feature)}
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

      {/* Aircraft Categories */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="mb-6 pb-2 border-gray-700 border-b">
              {category.category}
            </h2>

            {/* Aircraft Grid */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {category.models.map((aircraft, aircraftIndex) => (
                <div
                  key={aircraftIndex}
                  className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
                >
                  {/* Aircraft Header */}
                  <div className="p-5 border-tertiary border-b-2">
                    <h3 className="font-bold text-xl">{aircraft.name}</h3>
                  </div>

                  {/* Aircraft Details */}
                  <div className="p-6">
                    <div className="gap-4 grid grid-cols-2 mb-6">
                      <div>
                        <h5>Capacity</h5>
                        <p className="font-semibold text-lg">
                          {aircraft.maxPassengers} Passengers
                        </p>
                      </div>
                      <div>
                        <h5>Range</h5>
                        <p className="font-semibold text-lg">
                          {aircraft.rangeMiles} Miles
                        </p>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4>Key Features</h4>
                      <div className="gap-y-1 grid grid-cols-1">
                        {Object.entries(aircraft.features)
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

                    {/* Interior Features */}
                    <div className="mb-6">
                      <h4>Interior Features</h4>
                      <ul className="space-y-1 text-sm list-disc list-inside">
                        {aircraft.interiorFeatures.map((feature, i) => (
                          <li
                            key={i}
                            className="ml-2 text-sm capitalize list-disc list-inside"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price */}
                    <div>
                      <h5>Starting from</h5>
                      <p className="font-bold text-fancy text-xl">
                        ${aircraft.pricePerHourUSD.toLocaleString()}{" "}
                        <span className="font-normal text-foreground text-sm">
                          per hour
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="py-12 text-center">
          <h2>No aircraft match your filter criteria</h2>
          <Button variant={"accent"} onClick={resetFilters}>
            Reset All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
