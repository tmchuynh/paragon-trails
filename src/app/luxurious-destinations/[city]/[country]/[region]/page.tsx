import { capitalize } from "@/lib/utils/format";

export default function RegionPage({
  params,
}: {
  params: { city: string; country: string; region: string };
}) {
  // In Next.js server components, params are passed directly as props
  const { city, country, region } = params;
  const formattedCity = capitalize(city.replace(/-/g, " "));
  const formattedRegion = capitalize(region.replace(/-/g, " "));
  let formattedCountry = capitalize(country.replace(/-/g, " "));

  if (formattedRegion === "United States") {
    formattedCountry = formattedCountry.toUpperCase();
  }

  console.log(
    `City: ${formattedCity}, Region: ${formattedRegion}, Country: ${formattedCountry}`
  );
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <h1>
        {formattedCity}, {formattedRegion}, {formattedCountry}
      </h1>
      <p className="max-w-2xl text-center text-lg">
        Explore our exclusive collection of luxurious destinations around the
        world. Each destination offers unique experiences and unparalleled
        comfort.
      </p>
    </div>
  );
}
