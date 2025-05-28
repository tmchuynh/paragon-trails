import { vehicleSelectionGuide } from "@/lib/constants/services/transportation/vehicles";

export default function RentAVehicle() {
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
          rent, ensuring you travel in style and comfort. Whether you're
          exploring scenic routes or navigating urban landscapes, our vehicles
          are designed to enhance your journey.
        </p>
      </header>

      {/* Vehicle Categories */}
      {vehicleSelectionGuide.map((category, categoryIndex) => (
        <section key={categoryIndex} className="mb-16">
          <h2 className="mb-6 pb-2 border-gray-700 border-b">
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
                          per hour
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
