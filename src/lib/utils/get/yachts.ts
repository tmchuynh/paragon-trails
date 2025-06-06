import { formatKebabToCamelCase } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { cityFiles } from "@/lib/constants/info/city";
import { Yacht, YachtAmenity } from "@/lib/interfaces/services/rentals";

export async function getAllYachts(): Promise<Yacht[]> {
  const yachts: Yacht[] = [];
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);
      const yachtId = `${formattedCity}Yachts`;
      const cityModule = await import(
        `@/lib/constants/rentals/yachts/${cityFile}`
      );

      if (cityModule[yachtId]) {
        yachts.push(...(cityModule[yachtId] as Yacht[]));
      } else {
        console.error(`No yachts found for city: ${cityFile}`);
      }
    }
  } catch (error) {
    console.error(`Error loading city yachts: ${error}`);
  } finally {
    return yachts;
  }
}

export async function getCityYachts(city: string): Promise<Yacht[]> {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const yachtId = `${formattedCity}Yachts`;
    const cityModule = await import(
      `@/lib/constants/rentals/yachts/${formattedCity}`
    );

    if (cityModule[yachtId]) {
      return cityModule[yachtId] as Yacht[];
    } else {
      console.error(`No yachts found for city: ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading yachts for city ${city}: ${error}`);
    return [];
  }
}

export async function getYachtByCapacity(
  city: string,
  capacity: {
    guestsDay?: number;
    guestsOvernight?: number;
    cabins?: number;
    crew?: number;
    bathrooms?: number;
  },
): Promise<Yacht[]> {
  try {
    const yachts = await getCityYachts(city);
    return yachts.filter((yacht) => {
      const matchesGuestsDay = capacity.guestsDay
        ? yacht.capacity.guestsDay === capacity.guestsDay
        : true;
      const matchesGuestsOvernight = capacity.guestsOvernight
        ? yacht.capacity.guestsOvernight === capacity.guestsOvernight
        : true;
      const matchesCabins = capacity.cabins
        ? yacht.capacity.cabins === capacity.cabins
        : true;
      const matchesCrew = capacity.crew
        ? yacht.capacity.crew === capacity.crew
        : true;
      const matchesBathrooms = capacity.bathrooms
        ? yacht.capacity.bathrooms === capacity.bathrooms
        : true;

      return (
        matchesGuestsDay &&
        matchesGuestsOvernight &&
        matchesCabins &&
        matchesCrew &&
        matchesBathrooms
      );
    });
  } catch (error) {
    console.error(
      `Error filtering yachts by capacity ${capacity} in city ${city}: ${error}`,
    );
    return [];
  }
}

export async function getYachtByRegion(region: string): Promise<Yacht[]> {
  try {
    const cities = Object.keys(cityToRegionMap).filter(
      (city) =>
        cityToRegionMap[city as keyof typeof cityToRegionMap] === region,
    );
    const yachts: Yacht[] = [];
    for (const city of cities) {
      const cityYachts = await getCityYachts(city);
      yachts.push(...cityYachts);
    }
    return yachts;
  } catch (error) {
    console.error(`Error loading yachts for region ${region}: ${error}`);
    return [];
  }
}

export async function getYachtByFeatures(
  city: string,
  features: YachtAmenity[],
): Promise<Yacht[]> {
  try {
    const yachts = await getCityYachts(city);
    return yachts.filter((yacht) =>
      features.every((feature) => yacht.amenities.includes(feature)),
    );
  } catch (error) {
    console.error(`Error filtering yachts by features: ${error}`);
    return [];
  }
}

export async function getYachtByName(
  city: string,
  yachtName: string,
): Promise<Yacht | null> {
  try {
    const yachts = await getCityYachts(city);
    const yacht = yachts.find(
      (y) => y.name.toLowerCase() === yachtName.toLowerCase(),
    );
    if (yacht) {
      return yacht;
    } else {
      console.error(`Yacht with name ${yachtName} not found in ${city}`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading yacht for ${city}: ${error}`);
    return null;
  }
}

export async function getYachtByPriceRange(
  city: string,
  pricing: {
    perDay?: number;
    perWeek?: number;
  },
): Promise<Yacht[]> {
  try {
    const yachts = await getCityYachts(city);
    return yachts.filter((yacht) => {
      const matchesPerDay = pricing.perDay
        ? yacht.pricing.perDay === pricing.perDay
        : true;
      const matchesPerWeek = pricing.perWeek
        ? yacht.pricing.perWeek === pricing.perWeek
        : true;

      return matchesPerDay && matchesPerWeek;
    });
  } catch (error) {
    console.error(`Error filtering yachts by price range: ${error}`);
    return [];
  }
}

export async function getYachtByCharterType(
  city: string,
  charterType: string,
): Promise<Yacht[]> {
  try {
    const yachts = await getCityYachts(city);
    return yachts.filter((yacht) => yacht.charterType === charterType);
  } catch (error) {
    console.error(`Error filtering yachts by charter type: ${error}`);
    return [];
  }
}

export async function getYachtByYearBuilt(
  city: string,
  yearBuilt: number,
): Promise<Yacht[]> {
  try {
    const yachts = await getCityYachts(city);
    return yachts.filter((yacht) => yacht.yearBuilt === yearBuilt);
  } catch (error) {
    console.error(`Error filtering yachts by year built: ${error}`);
    return [];
  }
}

export async function getYachtByBrand(
  city: string,
  brand: string,
): Promise<Yacht[]> {
  try {
    const yachts = await getCityYachts(city);
    return yachts.filter(
      (yacht) => yacht.brand.toLowerCase() === brand.toLowerCase(),
    );
  } catch (error) {
    console.error(`Error filtering yachts by brand: ${error}`);
    return [];
  }
}

export async function getYachtByBrandAndModel(
  city: string,
  brand: string,
  model: string,
): Promise<Yacht[]> {
  try {
    const yachts = await getCityYachts(city);
    return yachts.filter(
      (yacht) =>
        yacht.brand.toLowerCase() === brand.toLowerCase() &&
        yacht.model.toLowerCase() === model.toLowerCase(),
    );
  } catch (error) {
    console.error(`Error filtering yachts by brand and model: ${error}`);
    return [];
  }
}
