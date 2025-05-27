export default function StatePage({
  params,
}: {
  params: { city: string; state: string; region: string; country: string };
}) {
  // In Next.js server components, params are passed directly as props
  const { city, state, region, country } = params;
  const formattedCity = city.replace(/-/g, " ");
  const formattedState = state.replace(/-/g, " ");
  const formattedRegion = region.replace(/-/g, " ");
  const formattedCountry = country.replace(/-/g, " ");

  console.log(
    `City: ${formattedCity}, State: ${state}, Region: ${formattedRegion}, Country: ${formattedCountry}`
  );
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <h1>
        {formattedCity}, {formattedState}, {formattedRegion}, {formattedCountry}
      </h1>
      <p className="max-w-2xl text-center text-lg">
        Explore our exclusive collection of luxurious destinations around the
        world. Each destination offers unique experiences and unparalleled
        comfort.
      </p>
    </div>
  );
}
