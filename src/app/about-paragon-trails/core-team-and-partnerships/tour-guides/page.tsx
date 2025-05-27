import { tourGuides } from "@/lib/constants/staff/tourGuides";
import { groupAndSortByProperties } from "@/lib/utils/sort";

export default function TourGuides() {
  const sortedTourGuides = groupAndSortByProperties(
    tourGuides,
    "country",
    "name"
  );
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1>Tour Guides</h1>
          <h2 className="mb-6 font-medium text-gray-700 text-xl">
            Passionate Locals. Expert Storytellers. Your Gateway to Authentic
            Experiences.
          </h2>
          <p>
            At the heart of every unforgettable journey is a guide who brings it
            all to life. Our tour guides are more than just navigators—they are
            cultural ambassadors, expert historians, culinary enthusiasts, and
            friendly faces who turn every moment into a memory. Whether you're
            exploring ancient ruins, hidden street markets, or modern
            cityscapes, our guides ensure you experience it all through a
            uniquely local lens.
          </p>
        </div>
      </div>
      <div className="gap-8 grid md:grid-cols-2">
        {sortedTourGuides.map(({ name, city, country, description }, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col items-center md:items-start gap-4"
          >
            <div className="flex-shrink-0 bg-gray-200 rounded-full w-32 h-32"></div>
            <div>
              <h3 className="font-bold text-xl">
                {name} – {city}, {country}
              </h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
