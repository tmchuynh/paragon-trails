import { cityattractions } from "../constants/destinations/city";
import { driverQualificationMatrix } from "../constants/services/transportation/staff/drivers";
import { formatTitleToCamcelCase } from "./format";

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
  city = formatTitleToCamcelCase(city).replace("'", "");
  region = formatTitleToCamcelCase(region).replace("'", "");
  country = formatTitleToCamcelCase(country).replace("'", "");
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

/**
 * Finds attractions for a specific city and country
 * @param city The name of the city
 * @param country The name of the country
 * @returns Array of attractions or empty array if not found
 */
export function findAttractionsByCityAndCountry(
  city: string,
  country: string
): any[] {
  try {
    const cityData = cityattractions.find(
      (item) =>
        (item.city === city && item.country === country) ||
        item.region === country
    );

    return cityData?.attractions || [];
  } catch (error) {
    console.error(
      `Error finding attractions for ${city}, ${country}: ${error}`
    );
    return [];
  }
}
