"use client";

import { homestayHeritageLocations } from "@/lib/constants/services/homestay/families";
import { useState } from "react";

export default function TheParagonFamilies() {
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);
  const [expandedHost, setExpandedHost] = useState<string | null>(null);

  const toggleLocation = (locationKey: string) => {
    setExpandedLocation(expandedLocation === locationKey ? null : locationKey);
    setExpandedHost(null);
  };

  const toggleHost = (hostKey: string) => {
    setExpandedHost(expandedHost === hostKey ? null : hostKey);
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <div className="w-full max-w-7xl">
        <header>
          <h1>Meet Our Hosts</h1>
          <h5>
            Discover the families and individuals who make every stay
            unforgettable
          </h5>
          <blockquote>
            “It wasn’t just a place to sleep — it was a family dinner, a local
            tale, and a front-row seat to a way of life I’ll never forget.” –
            Daniel K., Homestay Guest
          </blockquote>
        </header>

        <div className="space-y-8">
          {homestayHeritageLocations.map((location) => (
            <div
              key={`${location.city}-${location.country}`}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div
                className="bg-gradient-to-r from-blue-50 to-white p-6 cursor-pointer"
                onClick={() =>
                  toggleLocation(`${location.city}-${location.country}`)
                }
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-2xl">
                    {location.city},{" "}
                    <span className="text-gray-600">{location.country}</span>
                  </h2>
                  <span className="text-blue-500">
                    {expandedLocation === `${location.city}-${location.country}`
                      ? "↑"
                      : "↓"}
                  </span>
                </div>
                <p className="mt-1 text-gray-600">
                  {location.hosts.length} Host Families
                </p>
              </div>

              {expandedLocation === `${location.city}-${location.country}` && (
                <div className="p-6 border-gray-200 border-t">
                  <p className="mb-6 text-lg leading-relaxed">
                    {location.description}
                  </p>

                  <div className="space-y-8">
                    {location.hosts.map((host) => (
                      <div
                        key={host.name}
                        className="border rounded-lg overflow-hidden"
                      >
                        <div
                          className="flex justify-between items-center bg-gray-50 p-4 cursor-pointer"
                          onClick={() => toggleHost(host.name)}
                        >
                          <h3 className="font-medium text-xl">{host.name}</h3>
                          <span className="text-blue-500">
                            {expandedHost === host.name ? "↑" : "↓"}
                          </span>
                        </div>

                        {expandedHost === host.name && (
                          <div className="p-4">
                            <div className="mb-6">
                              <h4 className="mb-2 font-medium text-lg">
                                About the Family
                              </h4>
                              <p className="text-gray-700">{host.background}</p>
                            </div>

                            <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mb-6">
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="mb-1 font-medium">
                                  Maximum Guests
                                </h4>
                                <p>{host.maxGuests} people</p>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="mb-1 font-medium">Curfew</h4>
                                <p>{host.curfew}</p>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="mb-1 font-medium">
                                  Guest Policy
                                </h4>
                                <p>{host.guestPolicy}</p>
                              </div>
                            </div>

                            <div>
                              <h4 className="mb-2 font-medium">House Rules</h4>
                              <ul className="space-y-1 pl-5 list-disc">
                                {host.houseRules.map((rule, index) => (
                                  <li key={index} className="text-gray-700">
                                    {rule}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
