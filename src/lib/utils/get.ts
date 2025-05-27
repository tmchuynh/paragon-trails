import { driverQualificationMatrix } from "../constants/services/transportation/staff/drivers";
import { formatTitleToCamelCase } from "./format";

export async function getTourData(
  tourCategory: string,
  tour: string,
  tourID: string
): Promise<any> {
  try {
    const tourModule = await import(
      `@/lib/constants/destinations/tours/${tourCategory}/${tour}`
    );
    // Return the specific named export that matches tourID
    if (tourModule[tourID]) {
      return tourModule[tourID];
    } else {
      console.error(`Export named ${tourID} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}

export const driverLanguages = Array.from(
  new Set(
    driverQualificationMatrix.flatMap((category) =>
      category.profiles.flatMap((driver) => driver.languages)
    )
  )
).sort();

export async function getCityAttractions(
  city: string,
  region: string,
  country: string
): Promise<any> {
  city = formatTitleToCamelCase(city).replace("'", "");
  region = formatTitleToCamelCase(region).replace("'", "");
  country = formatTitleToCamelCase(country).replace("'", "");
  const cityRegionCountry = `${city}${region}${country}`;
  console.log("Fetching attractions for:", cityRegionCountry);
  try {
    const attractionsModule = await import(
      `@/lib/constants/destinations/city/${city}`
    );
    if (attractionsModule[cityRegionCountry]) {
      return attractionsModule[cityRegionCountry];
    } else {
      console.error(`No attractions found for ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}
