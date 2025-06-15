import {
  Attraction,
  fetchAccommodationList,
  fetchAttractionsByCity,
  fetchAttractionsByCountry,
  fetchPopularDestinations,
} from "./attractions";
import {
  City,
  Country,
  fetchAllCitiesByCountry,
  fetchAllCountries,
  fetchCountriesByRegion,
  fetchCountryByISO2,
} from "./geography";
import { apiCache } from "./services";

// Extended destination interface that combines geographic and attraction data
export interface DestinationWithAttractions {
  country: Country;
  cities: Array<{
    city: City;
    attractions: Attraction[];
  }>;
}

export interface PopularDestination {
  country: Country;
  city: City;
  attractions: Attraction[];
}

// --- DESTINATION API FUNCTIONS ---

/**
 * Get all countries available for destinations
 */
export async function getDestinationCountries({
  region,
  subregion,
}: {
  region?: string;
  subregion?: string;
} = {}): Promise<Country[]> {
  const cacheKey = `destination_countries_${region || "all"}_${subregion || "all"}`;
  const cachedData = apiCache.get(cacheKey) as Country[] | undefined;

  if (cachedData) {
    return cachedData;
  }

  const countries = await fetchAllCountries({ region, subregion });

  // Cache for 24 hours
  apiCache.set(cacheKey, countries, 86400);
  return countries;
}

/**
 * Get countries grouped by region for the destinations page
 */
export async function getDestinationCountriesByRegion(): Promise<
  Record<string, Country[]>
> {
  const cacheKey = "destination_countries_by_region";
  const cachedData = apiCache.get(cacheKey) as
    | Record<string, Country[]>
    | undefined;

  if (cachedData) {
    return cachedData;
  }

  const groupedCountries = await fetchCountriesByRegion();

  // Cache for 24 hours
  apiCache.set(cacheKey, groupedCountries, 86400);
  return groupedCountries;
}

/**
 * Get cities for a specific country (for destinations page)
 */
export async function getDestinationCities({
  countryISO2,
  limit = 200,
}: {
  countryISO2: string;
  limit?: number;
}): Promise<{ country: Country; cities: City[] }> {
  const cacheKey = `destination_cities_${countryISO2}_${limit}`;
  const cachedData = apiCache.get(cacheKey) as
    | { country: Country; cities: City[] }
    | undefined;

  if (cachedData) {
    return cachedData;
  }

  const [country, cities] = await Promise.all([
    fetchCountryByISO2(countryISO2),
    fetchAllCitiesByCountry({ countryCode: countryISO2, limit }),
  ]);

  if (!country) {
    throw new Error(`Country with ISO2 code "${countryISO2}" not found`);
  }

  const result = { country, cities };

  // Cache for 12 hours
  apiCache.set(cacheKey, result, 43200);
  return result;
}

/**
 * Get a complete destination with cities and attractions
 */
export async function getDestinationWithAttractions({
  countryISO2,
  maxCities = 10,
  attractionsPerCity = 5,
  categories = "tourism.sights,tourism.attraction",
}: {
  countryISO2: string;
  maxCities?: number;
  attractionsPerCity?: number;
  categories?: string[] | string;
}): Promise<DestinationWithAttractions> {
  const cacheKey = `destination_with_attractions_${countryISO2}_${maxCities}_${attractionsPerCity}`;
  const cachedData = apiCache.get(cacheKey) as
    | DestinationWithAttractions
    | undefined;

  if (cachedData) {
    return cachedData;
  }

  const result = await fetchAttractionsByCountry({
    countryISO2,
    maxCities,
    attractionsPerCity,
    categories,
  });

  // Cache for 6 hours (attractions data changes less frequently)
  apiCache.set(cacheKey, result, 21600);
  return result;
}

/**
 * Get attractions for a specific city (when user clicks on a city)
 */
export async function getCityAttractions({
  cityName,
  countryISO2,
  limit = 20,
  categories = "tourism.sights,tourism.attraction",
}: {
  cityName: string;
  countryISO2: string;
  limit?: number;
  categories?: string[] | string;
}): Promise<{ city: City | null; attractions: Attraction[] }> {
  const cacheKey = `city_attractions_${cityName}_${countryISO2}_${limit}`;
  const cachedData = apiCache.get(cacheKey) as
    | { city: City | null; attractions: Attraction[] }
    | undefined;

  if (cachedData) {
    return cachedData;
  }

  const result = await fetchAttractionsByCity({
    cityName,
    countryISO2,
    limit,
    categories,
  });

  // Cache for 6 hours
  apiCache.set(cacheKey, result, 21600);
  return result;
}

/**
 * Get popular destinations for the homepage or featured sections
 */
export async function getPopularDestinations({
  regions = ["Europe", "Asia", "North America"],
  citiesPerRegion = 3,
  attractionsPerCity = 5,
}: {
  regions?: string[];
  citiesPerRegion?: number;
  attractionsPerCity?: number;
} = {}): Promise<PopularDestination[]> {
  const cacheKey = `popular_destinations_${regions.join(",")}_${citiesPerRegion}_${attractionsPerCity}`;
  const cachedData = apiCache.get(cacheKey) as PopularDestination[] | undefined;

  if (cachedData) {
    return cachedData;
  }

  const destinations = await fetchPopularDestinations({
    regions,
    citiesPerRegion,
    attractionsPerCity,
  });

  // Cache for 12 hours (popular destinations don't change frequently)
  apiCache.set(cacheKey, destinations, 43200);
  return destinations;
}

/**
 * Search for destinations (countries and cities) by name
 */
export async function searchDestinations({
  query,
  type = "both", // "countries", "cities", or "both"
  limit = 50,
}: {
  query: string;
  type?: "countries" | "cities" | "both";
  limit?: number;
}): Promise<{
  countries: Country[];
  cities: Array<{ city: City; country: Country }>;
}> {
  const searchTerm = query.toLowerCase().trim();
  const results: {
    countries: Country[];
    cities: Array<{ city: City; country: Country }>;
  } = {
    countries: [],
    cities: [],
  };

  if (!searchTerm) {
    return results;
  }

  // Search countries
  if (type === "countries" || type === "both") {
    const allCountries = await fetchAllCountries();
    results.countries = allCountries
      .filter(
        (country) =>
          country.name.toLowerCase().includes(searchTerm) ||
          country.capital.toLowerCase().includes(searchTerm) ||
          country.iso2.toLowerCase() === searchTerm ||
          country.iso3.toLowerCase() === searchTerm
      )
      .slice(0, limit);
  }

  // Search cities (this is more complex as we'd need to search across all countries)
  // For now, we'll implement a basic version that searches within popular countries
  if (type === "cities" || type === "both") {
    const popularCountryCodes = [
      "US",
      "GB",
      "FR",
      "DE",
      "IT",
      "ES",
      "JP",
      "AU",
      "CA",
      "NL",
      "BR",
      "IN",
      "CN",
      "RU",
      "ZA",
      "KR",
      "MX",
      "AR",
      "SE",
      "NO",
      "FI",
      "DK",
      "PL",
      "TR",
      "CH",
      "BE",
      "AT",
      "IE",
      "PT",
    ];
    const citySearchPromises = popularCountryCodes.map(async (countryCode) => {
      try {
        const [country, cities] = await Promise.all([
          fetchCountryByISO2(countryCode),
          fetchAllCitiesByCountry({ countryCode, limit: 150 }),
        ]);

        if (!country) return [];

        return cities
          .filter((city) => city.name.toLowerCase().includes(searchTerm))
          .map((city) => ({ city, country }))
          .slice(0, Math.ceil(limit / popularCountryCodes.length));
      } catch (error) {
        console.error(`Error searching cities in ${countryCode}:`, error);
        return [];
      }
    });

    const cityResults = await Promise.all(citySearchPromises);
    results.cities = cityResults.flat().slice(0, limit);
  }

  return results;
}

/**
 * Get accommodation (places to stay) for a specific city
 */
export async function getCityAccommodation({
  cityName,
  countryISO2,
  limit = 60,
}: {
  cityName: string;
  countryISO2: string;
  limit?: number;
}): Promise<{ city: City | null; accommodations: Attraction[] }> {
  const cacheKey = `city_accommodation_${cityName}_${countryISO2}_${limit}`;
  const cachedData = apiCache.get(cacheKey) as
    | { city: City | null; accommodations: Attraction[] }
    | undefined;

  if (cachedData) {
    return cachedData;
  }

  // Get the specific city information
  const cities = await fetchAllCitiesByCountry({
    countryCode: countryISO2,
    limit: 100,
  });

  const city = cities.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );

  if (!city) {
    const result = { city: null, accommodations: [] };
    // Cache for 1 hour even if city not found
    apiCache.set(cacheKey, result, 3600);
    return result;
  }

  // Fetch accommodations for this specific city
  const accommodations = await fetchAccommodationList({
    city: city.name,
    latitude: city.latitude,
    longitude: city.longitude,
    limit,
  });

  const result = { city, accommodations };

  // Cache for 6 hours
  apiCache.set(cacheKey, result, 21600);
  return result;
}

// Export types for use in components
export type { Attraction, City, Country };
