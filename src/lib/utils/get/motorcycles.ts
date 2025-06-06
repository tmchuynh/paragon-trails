import { formatKebabToCamelCase } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { cityFiles } from "@/lib/constants/info/city";
import {
  Motorcycle,
  MotorcycleFeature,
} from "@/lib/interfaces/services/rentals";

export async function getAllMotorcycles(): Promise<Motorcycle[]> {
  const motorcycles: Motorcycle[] = [];
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);
      const motorcycleId = `${formattedCity}Motorcycles`;
      const cityModule = await import(
        `@/lib/constants/rentals/motorcycles/${cityFile}`
      );

      if (cityModule[motorcycleId]) {
        motorcycles.push(...(cityModule[motorcycleId] as Motorcycle[]));
      } else {
        console.error(`No motorcycles found for city: ${cityFile}`);
      }
    }
  } catch (error) {
    console.error(`Error loading city motorcycles: ${error}`);
  } finally {
    return motorcycles;
  }
}

export async function getCityMotorcycles(city: string): Promise<Motorcycle[]> {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const motorcycleId = `${formattedCity}Motorcycles`;
    const cityModule = await import(
      `@/lib/constants/rentals/motorcycles/${formattedCity}`
    );

    if (cityModule[motorcycleId]) {
      return cityModule[motorcycleId] as Motorcycle[];
    } else {
      console.error(`No motorcycles found for city: ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading motorcycles for city ${city}: ${error}`);
    return [];
  }
}

export async function getMotorcycleBySeatCapacity(
  city: string,
  seatCapacity: number,
): Promise<Motorcycle[]> {
  try {
    const motorcycles = await getCityMotorcycles(city);
    return motorcycles.filter(
      (motorcycle) => motorcycle.seatCapacity === seatCapacity,
    );
  } catch (error) {
    console.error(`Error filtering motorcycles by seat capacity: ${error}`);
    return [];
  }
}

export async function getMotorCycleByFeatures(
  city: string,
  features: MotorcycleFeature[],
): Promise<Motorcycle[]> {
  try {
    const motorcycles = await getCityMotorcycles(city);
    return motorcycles.filter((motorcycle) =>
      features.every((feature) => motorcycle.features.includes(feature)),
    );
  } catch (error) {
    console.error(`Error filtering motorcycles by features: ${error}`);
    return [];
  }
}

export async function getAvailableMotorcycles(
  city: string,
): Promise<Motorcycle[]> {
  try {
    const motorcycles = await getCityMotorcycles(city);
    return motorcycles.filter((motorcycle) => motorcycle.available);
  } catch (error) {
    console.error(`Error filtering available motorcycles: ${error}`);
    return [];
  }
}
