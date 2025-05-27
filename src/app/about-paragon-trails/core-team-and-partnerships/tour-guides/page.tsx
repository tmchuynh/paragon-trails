import { tourGuides } from "@/lib/constants/staff/tourGuides";
import { groupAndSortByProperties } from "@/lib/utils/sort";

export default function TourGuides() {
  const sortedTourGuides = groupAndSortByProperties(tourGuides, "city", "name");
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>The Ones Who Lead The Way</h1>
        <h5>
          Passionate Locals. Expert Storytellers. Your Gateway to Authentic
          Experiences.
        </h5>
      </header>

      <div className="gap-8 grid md:grid-cols-2">
        {sortedTourGuides.map(({ name, city, description }, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col items-center md:items-start gap-4"
          >
            <div>
              <h3>
                <span className="text-fancy">{name}</span> – {city}
              </h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
