import { cityattractions } from "@/lib/constants/destinations/city";
import { groupAndSortByProperties } from "@/lib/utils/sort";

export default function LuxuriousDestinations() {
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <header>
        <h1>Luxurious Destinations</h1>
        <h5>
          Exclusive retreats crafted for unparalleled comfort and elegance
        </h5>
        <blockquote>
          "Every destination felt like a private paradise—luxury redefined in
          every detail. Paragon Trails transformed our travel dreams into
          unforgettable realities." — Emily Carter, Santorini & Amalfi Coast
        </blockquote>
      </header>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {groupAndSortByProperties(
          cityattractions,
          "country",
          "region",
          true,
          false,
          false,
          true
        ).map((item, index) => (
          <div
            key={index}
            className="bg-white/5 shadow-lg hover:shadow-xl backdrop-blur-sm p-6 rounded-lg transition-all duration-300"
          >
            <h2 className="font-semibold text-2xl">{item.city}</h2>
            <p className="text-gray-400">
              {(() => {
                const locationParts = [];

                // Add state only if it exists
                if (item.state) locationParts.push(item.state);

                // Add region only if it exists AND is different from state
                if (item.region && item.region !== item.state)
                  locationParts.push(item.region);

                // Always add country if it exists
                if (item.country) locationParts.push(item.country);

                return locationParts.join(", ");
              })()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
