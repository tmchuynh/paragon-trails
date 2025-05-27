import { yachtCharterFleet } from "@/lib/constants/services/transportation/yachts";

export default function RentAYachtPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Rent a Yacht</h1>
        <h5>
          Explore our luxurious yacht charters and find the perfect yacht for
          your next adventure.
        </h5>
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

      {/* Yacht Categories */}
      {yachtCharterFleet.map((category, categoryIndex) => (
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
                        <span className="font-normal text-sm">per hour</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
