import { aircraftSelectionGuide } from "@/lib/constants/services/transportation/aircrafts";

export default function Aircrafts() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Explore Our Fleet</h1>
        <h5>World-class aircraft, tailored to every journey</h5>
        <blockquote>
          “Flying with Paragon Trails was an experience like no other. The
          aircraft was luxurious, and the service was impeccable.” – Sarah L.,
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

      {/* Aircraft Categories */}
      {aircraftSelectionGuide.map((category, categoryIndex) => (
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
      ))}
    </div>
  );
}
