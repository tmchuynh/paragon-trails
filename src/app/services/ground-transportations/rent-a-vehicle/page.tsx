"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { vehicleSelectionGuide } from "@/lib/constants/services/transportation/vehicles";
import { capitalize } from "@/lib/utils/format";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function RentAVehicle() {
  const [showFilters, setShowFilters] = useState(false);
  // Filter states
  const [passengerFilter, setPassengerFilter] = useState<number | null>(null);
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedInteriorFeatures, setSelectedInteriorFeatures] = useState<
    string[]
  >([]);
  const [soundSystemFilter, setSoundSystemFilter] = useState<string>("");

  // Get all unique features, interior features, and sound systems
  const allFeatures = new Set<string>();
  const allInteriorFeatures = new Set<string>();
  const allSoundSystems = new Set<string>();

  vehicleSelectionGuide.forEach((category) => {
    category.models.forEach((vehicle) => {
      Object.entries(vehicle.features)
        .filter(([_, value]) => value === true)
        .forEach(([key, _]) => allFeatures.add(key));

      vehicle.interiorFeatures.forEach((feature) =>
        allInteriorFeatures.add(feature)
      );

      allSoundSystems.add(vehicle.soundSystem);
    });
  });

  // Find max price and max passengers
  const maxPrice = Math.max(
    ...vehicleSelectionGuide.flatMap((category) =>
      category.models.map((vehicle) => vehicle.pricePerDayUSD)
    )
  );

  const maxPassengers = Math.max(
    ...vehicleSelectionGuide.flatMap((category) =>
      category.models.map((vehicle) => vehicle.maxPassengers)
    )
  );

  // Filter the vehicles
  const filteredCategories = vehicleSelectionGuide
    .map((category) => ({
      ...category,
      models: category.models.filter((vehicle) => {
        // Filter by passengers
        if (
          passengerFilter !== null &&
          vehicle.maxPassengers < passengerFilter
        ) {
          return false;
        }

        // Filter by price
        if (priceFilter !== null && vehicle.pricePerDayUSD > priceFilter) {
          return false;
        }

        // Filter by sound system
        if (soundSystemFilter && vehicle.soundSystem !== soundSystemFilter) {
          return false;
        }

        // Filter by key features
        if (selectedFeatures.length > 0) {
          const vehicleFeatures = Object.entries(vehicle.features)
            .filter(([_, value]) => value === true)
            .map(([key, _]) => key);

          if (
            !selectedFeatures.every((feature) =>
              vehicleFeatures.includes(feature)
            )
          ) {
            return false;
          }
        }

        // Filter by interior features
        if (selectedInteriorFeatures.length > 0) {
          if (
            !selectedInteriorFeatures.every((feature) =>
              vehicle.interiorFeatures.includes(feature)
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
  const handlePassengerChange = (value: string) => {
    setPassengerFilter(value === "any" ? null : parseInt(value, 10));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    setPriceFilter(value);
  };

  const handleSoundSystemChange = (value: string) => {
    setSoundSystemFilter(value === "any" ? "" : value);
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
    setSoundSystemFilter("");
    setSelectedFeatures([]);
    setSelectedInteriorFeatures([]);
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Drive Your Journey</h1>
        <h5>Premium vehicles available for every destination and style.</h5>
        <blockquote>
          "The vehicle rental service was flawless—luxury cars, personalized
          support, and the freedom to explore at my own pace." – John D.,
          Satisfied Customer
        </blockquote>
        <p>
          At Paragon Trails, we offer a curated selection of luxury vehicles for
          rent—each chosen to match the elegance and performance our travelers
          expect. Whether you're embarking on a coastal drive, heading into the
          mountains, or navigating the pulse of a vibrant city, our fleet is
          designed to elevate every mile. From sleek European sedans and
          convertible roadsters to robust SUVs and elite electric models, each
          vehicle combines cutting-edge technology, top-tier comfort, and
          head-turning aesthetics. Every rental is immaculately maintained and
          thoroughly inspected, ensuring a flawless driving experience from
          start to finish.
        </p>
        <p>
          Our team provides personalized recommendations based on your
          itinerary, terrain, and travel preferences. We offer flexible rental
          durations, convenient delivery and pickup options, and 24/7 support
          throughout your journey. With Paragon Trails, renting a vehicle is
          more than securing transportation—it's selecting the right companion
          for the road ahead. Travel at your pace, on your terms, with unmatched
          freedom and refinement.
        </p>
      </header>

      {/* Filter Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2>Filter Vehicles</h2>
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
          <Card>
            <CardContent>
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                <div className="gap-3 grid lg:col-span-2">
                  <div className="lg:gap-9 grid lg:grid-cols-2">
                    {/* Passenger Filter */}
                    <div>
                      <Label className="block mb-2">
                        <strong>Minimum Passengers</strong>
                      </Label>
                      <Select
                        value={passengerFilter?.toString() || "any"}
                        onValueChange={handlePassengerChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>

                          {Array.from(
                            { length: Math.ceil(maxPassengers / 5) },
                            (_, i) => (i + 1) * 5
                          )
                            .filter((num) => num <= maxPassengers)
                            .concat(
                              maxPassengers % 5 !== 0 ? [maxPassengers] : []
                            )
                            .sort((a, b) => a - b)
                            .map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}+ Passengers
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Sound System Filter */}
                    <div>
                      <Label className="block mb-2">
                        <strong>Sound System</strong>
                      </Label>
                      <Select
                        value={soundSystemFilter}
                        onValueChange={handleSoundSystemChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          {Array.from(allSoundSystems)
                            .sort()
                            .map((system) => (
                              <SelectItem key={system} value={system}>
                                {system}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
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
                      step="100"
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
                </div>

                <div className="gap-4 grid lg:grid-cols-2 lg:col-span-2 xl:col-span-3">
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
                                .replace(/([0-9]WD)/g, " $1")
                                .trim()
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
                            onChange={() =>
                              handleInteriorFeatureChange(feature)
                            }
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
              </div>

              <div className="flex justify-between items-end mt-6">
                <div className="flex items-center text-muted-foreground text-sm">
                  Showing{" "}
                  {filteredCategories.reduce(
                    (total, category) => total + category.models.length,
                    0
                  )}{" "}
                  of{" "}
                  {vehicleSelectionGuide.reduce(
                    (total, category) => total + category.models.length,
                    0
                  )}{" "}
                  vehicles
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
      </div>

      {/* Vehicle Categories */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="mb-6 pb-2 border-border border-b">
              {category.category}
            </h2>

            {/* Vehicle Grid */}
            <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {category.models.map((vehicle, vehicleIndex) => (
                <div
                  key={vehicleIndex}
                  className="flex flex-col justify-between shadow-md hover:shadow-lg border border-border rounded-lg h-full transition-shadow duration-300"
                >
                  {/* Vehicle Header */}
                  <div className="p-5 border-tertiary border-b-2">
                    <h3 className="mb-1 font-bold text-xl">{vehicle.name}</h3>
                  </div>

                  {/* Vehicle Details */}
                  <div className="flex flex-col justify-between p-6 h-full">
                    <div className="h-full">
                      <div className="gap-4 grid grid-cols-2 mb-6">
                        <div>
                          <h5>Capacity</h5>
                          <p className="font-semibold text-lg">
                            {vehicle.maxPassengers} passengers
                          </p>
                        </div>
                        <div>
                          <h5>Sound System</h5>
                          <p className="font-semibold text-lg">
                            {vehicle.soundSystem}
                          </p>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-4">
                        <h4>Key Features</h4>
                        <div className="gap-y-1 grid grid-cols-1">
                          {Object.entries(vehicle.features)
                            .filter(([key]) =>
                              [
                                "climateControlledCabin",
                                "executiveSeating",
                                "adaptive4WD",
                                "rearCabinMediaSuite",
                                "panoramicViews",
                                "executiveCaptainSeating",
                                "mediaWalls",
                              ].includes(key)
                            )
                            .map(([key, value]) => (
                              <ul
                                key={key}
                                className="ml-2 text-sm list-disc list-inside"
                              >
                                {value === true && (
                                  <li className="text-sm capitalize">
                                    {key
                                      .replace(/([A-Z])/g, " $1")
                                      .replace(/([0-9]WD)/g, " $1")
                                      .trim()}
                                  </li>
                                )}
                              </ul>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="h-full">
                      {/* Interior Features */}
                      <div className="mb-6">
                        <h4>Interior Features</h4>
                        <ul className="gap-2 grid grid-cols-1">
                          {vehicle.interiorFeatures.map((feature, i) => (
                            <li
                              key={i}
                              className="ml-2 text-sm capitalize list-disc list-inside"
                            >
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Price */}
                      <div>
                        <h5>Starting from</h5>
                        <p className="font-bold text-fancy text-xl">
                          ${vehicle.pricePerDayUSD.toLocaleString()}{" "}
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
          </section>
        ))
      ) : (
        <div className="py-12 text-center">
          <h3 className="mb-4 font-semibold text-xl">
            No vehicles match your filter criteria
          </h3>
          <Button variant={"accent"} onClick={resetFilters}>
            Reset All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
