"use client";

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
        {/* {homestayHeritageLocations.map((location) => (
          <div
            key={`${location.city}-${location.country}`}
            className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() =>
                toggleLocation(`${location.city}-${location.country}`)
              }
            >
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-2xl">
                  <span className="text-fancy">{location.city}, </span>
                  {location.country}
                </h2>
                <span className="text-primary">
                  {expandedLocation ===
                  `${location.city}-${location.country}` ? (
                    <FaArrowUp className="inline" />
                  ) : (
                    <FaArrowDown className="inline" />
                  )}
                </span>
              </div>
              <h5>{location.hosts.length} Host Families</h5>
            </div>

            {expandedLocation === `${location.city}-${location.country}` && (
              <div className="p-6 border-t-2 border-tertiary">
                <p className="mb-6 text-lg leading-relaxed">
                  {location.description}
                </p>

                <div className="space-y-8">
                  {location.hosts.map((host) => (
                    <div
                      key={host.name}
                      className="shadow border border-border rounded-lg overflow-hidden"
                    >
                      <div
                        className="flex justify-between items-center p-4 cursor-pointer"
                        onClick={() => toggleHost(host.name)}
                      >
                        <h3>{host.name}</h3>
                        <span>
                          {expandedHost === host.name ? (
                            <FaArrowUp className="inline text-tertiary" />
                          ) : (
                            <FaArrowDown className="inline text-tertiary" />
                          )}
                        </span>
                      </div>

                      {expandedHost === host.name && (
                        <div className="p-4 border-primary border-t">
                          <div className="mb-6">
                            <p>{host.background}</p>
                          </div>

                          <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mb-6">
                            <div>
                              <h5>Maximum Guests</h5>
                              <p className="font-semibold text-lg">
                                {host.maxGuests} people
                              </p>
                            </div>
                            <div>
                              <h5>Curfew</h5>
                              <p className="font-semibold text-lg">
                                {host.curfew}
                              </p>
                            </div>
                            <div>
                              <h5>Guest Policy</h5>
                              <p className="w-4/5 font-semibold text-lg">
                                {host.guestPolicy}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4>House Rules</h4>
                            <ul className="space-y-1 text-sm list-disc list-inside">
                              {host.houseRules.map((rule, index) => (
                                <li
                                  key={index}
                                  className="ml-2 text-sm capitalize list-disc list-inside"
                                >
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
        ))} */}
      </div>
    </div>
  );
}
