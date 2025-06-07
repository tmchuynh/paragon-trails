import { formatKebabToCamelCase } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { cityFiles } from "@/lib/constants/info/city";
import {
  Motorcycle,
  MotorcycleFeature,
} from "@/lib/interfaces/services/rentals";

export async function getAllMotorcycles(): Promise<Motorcycle[]> {
  const motorcycles: Motorcycle[] = [];
  console.log("Starting to load motorcycles...");

  try {
    for (const cityFile of cityFiles) {
      try {
        const formattedCity = formatKebabToCamelCase(cityFile);
        console.log(`Trying to load motorcycles for city: ${cityFile} `);

        // Get country and region for this city
        const country =
          cityCountryMap[cityFile as keyof typeof cityCountryMap] || "";
        const region =
          cityToRegionMap[cityFile as keyof typeof cityToRegionMap] || "";

        // All possible export variable name patterns
        const possibleVarNames = [
          // Direct matches
          `${formattedCity}Motorcycles`,
          `${cityFile}Motorcycles`,
          // Combined patterns matching the actual exports
          `${formattedCity}${country}${region}Motorcycles`,
          `${formattedCity}${country.toLowerCase()}${region.toLowerCase()}Motorcycles`,
          // Actual observed pattern in files
          `${formattedCity}${country.toLowerCase()}${region}Motorcycles`,
        ];

        console.log(
          `Possible variable names to check: ${possibleVarNames.join(", ")}`
        );

        // Try importing with kebab case first (file paths are kebab case)
        let motorcycleModule;
        try {
          console.log(
            `Trying to import from: @/lib/constants/rentals/motorcycles/${cityFile}`
          );
          motorcycleModule = await import(
            `@/lib/constants/rentals/motorcycles/${cityFile}`
          );
          console.log(`Successfully imported module for ${cityFile}`);
          console.log(
            `Available exports: ${Object.keys(motorcycleModule).join(", ")}`
          );
        } catch (e) {
          // If that fails, try camelCase
          console.log(
            `Kebab case import failed, trying camelCase: @/lib/constants/rentals/motorcycles/${formattedCity}`
          );
          try {
            motorcycleModule = await import(
              `@/lib/constants/rentals/motorcycles/${formattedCity}`
            );
            console.log(
              `Successfully imported camelCase module for ${formattedCity}`
            );
            console.log(
              `Available exports: ${Object.keys(motorcycleModule).join(", ")}`
            );
          } catch (innerError) {
            console.error(
              `Both import attempts failed for ${cityFile}`,
              innerError
            );
            continue; // Skip to next city
          }
        }

        // Check all possible variable names
        let found = false;
        for (const varName of possibleVarNames) {
          if (motorcycleModule[varName]) {
            console.log(
              `Found data with export name: ${varName}, count: ${motorcycleModule[varName].length}`
            );
            motorcycles.push(...motorcycleModule[varName]);
            found = true;
            break;
          }
        }

        // If no predefined pattern matched, try to find any array in the exports
        if (!found) {
          console.log(
            `No predefined pattern matched, searching for any array with motorcycle data...`
          );
          for (const key of Object.keys(motorcycleModule)) {
            if (
              Array.isArray(motorcycleModule[key]) &&
              motorcycleModule[key].length > 0 &&
              motorcycleModule[key][0].make &&
              motorcycleModule[key][0].model
            ) {
              console.log(
                `Found array data with export name: ${key}, count: ${motorcycleModule[key].length}`
              );
              motorcycles.push(...motorcycleModule[key]);
              found = true;
              break;
            }
          }
        }

        if (!found) {
          console.log(`No motorcycle data found for city: ${cityFile}`);
        }
      } catch (cityError) {
        console.error(
          `Error loading motorcycles for city: ${cityFile}`,
          cityError
        );
        // Continue with next city even if one fails
      }
    }

    console.log(`Total motorcycles loaded: ${motorcycles.length}`);
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
      `@/lib/constants/rentals/motorcycles/${city}`
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
