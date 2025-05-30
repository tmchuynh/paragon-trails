import { cityattractions } from "@/lib/constants/info/city";
import { homestayHeritageLocations } from "@/lib/constants/services/homestay/families";
import { capitalize } from "@/lib/utils/format";
import { findOriginalCityName } from "@/lib/utils/get";
import { filterArrayByProperty } from "@/lib/utils/sort";

export default async function HomestayLocationPage({
  params,
}: {
  params: { location: string };
}) {
  // Await params before destructuring
  const { location } = await params;

  // Find the original city name with accents from the data
  const originalCityName = findOriginalCityName(location);
  const displayName = originalCityName || capitalize(location);

  const filteredLocations = filterArrayByProperty(
    homestayHeritageLocations,
    "city",
    displayName
  )[0];

  const cityInfo = cityattractions.find((item) => item.city === displayName);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Homestay Location: {displayName}</h1>
        <h5>{cityInfo?.subtitle}</h5>
        <p>{filteredLocations.description}</p>
      </header>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {filteredLocations.hosts.map((host, index) => (
          <div
            key={`${host.name}-${index}`}
            className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-5 border-tertiary border-b-2">
              <h3 className="font-bold text-xl">{host.name}</h3>
            </div>

            <div className="p-6">
              <div className="gap-4 grid grid-cols-2 mb-6">
                <div>
                  <h5>Limit</h5>
                  <p className="font-semibold text-lg">
                    {host.maxGuests} Guests
                  </p>
                </div>
                <div>
                  <h5>Curfew</h5>
                  <p className="font-semibold text-lg">{host.curfew}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4>House Rules</h4>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  {host.houseRules.map((feature, i) => (
                    <li
                      key={i}
                      className="ml-2 text-sm capitalize list-disc list-inside"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4>Languages Spoken:</h4>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  {host.languages.map((feature, i) => (
                    <li
                      key={i}
                      className="ml-2 text-sm capitalize list-disc list-inside"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
