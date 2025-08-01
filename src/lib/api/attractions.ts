import {
  City,
  Country,
  fetchAllCitiesByCountry,
  fetchCountryByISO2,
} from "./geography";
import { apiCache, fetchAPI } from "./services";

/**
 * Geoapify Attractions API Integration
 *
 * This module integrates with Geoapify's Places API and Place Details API
 * to fetch attraction data.
 *
 * API Documentation:
 * - Places API: https://apidocs.geoapify.com/docs/places/#api
 * - Place Details API: https://apidocs.geoapify.com/docs/place-details/
 *
 * The attractions page has been moved to the destinations route since
 * fetching attractions requires a city first. Cities are fetched from
 * countries using the GeographQL API.
 */

const NEXT_PUBLIC_GEOAPIFY_API_BASE_URL =
  process.env.NEXT_PUBLIC_GEOAPIFY_API_BASE_URL;
const NEXT_PUBLIC_GEOAPIFY_GEOCODE_SEARCH_ENDPOINT =
  process.env.NEXT_PUBLIC_GEOAPIFY_GEOCODE_SEARCH_ENDPOINT;
const NEXT_PUBLIC_GEOAPIFY_PLACES_ENDPOINT =
  process.env.NEXT_PUBLIC_GEOAPIFY_PLACES_ENDPOINT; // Default to /v2/places if not set
const NEXT_PUBLIC_GEOAPIFY_PLACE_DETAILS_ENDPOINT =
  process.env.NEXT_PUBLIC_GEOAPIFY_PLACE_DETAILS_ENDPOINT; // Used by fetchAttractionDetailsById/Coords
const NEXT_PUBLIC_GEOAPIFY_API_KEY = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;

// --- INTERFACES ---
export interface GeoapifyGeometry {
  type: string;
  coordinates: number[] | number[][];
}

export interface GeoapifyPlaceDatasource {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
}

export interface GeoapifyPlaceDetailsProperties {
  // Common properties from Geoapify
  name?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  county?: string; // Can sometimes be used if city is missing
  state?: string;
  country?: string;
  postcode?: string;
  lat: number;
  lon: number;
  formatted?: string;
  categories: string[];
  details?: string[]; // Typically from place-details endpoint
  datasource?: GeoapifyPlaceDatasource;
  place_id: string; // place_id is crucial

  // Properties more common in Places API (list view) or detailed views
  distance?: number; // From proximity searches
  website?: string;
  opening_hours?: string;
  phone?: string;
  wheelchair?: string; // Example condition
  // Add any other relevant properties you expect
}

export interface GeoapifyFeature {
  type: "Feature";
  properties: GeoapifyPlaceDetailsProperties;
  geometry: GeoapifyGeometry;
}

// For the place-details endpoint, the response might be a single feature or its properties directly
export interface GeoapifyPlaceDetailsResponse {
  type?: "Feature"; // Optional, as sometimes it's just properties
  properties: GeoapifyPlaceDetailsProperties;
  geometry?: GeoapifyGeometry; // Optional, as sometimes it's just properties
}

export interface Attraction {
  id: string; // Will be place_id
  name: string;
  address: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  categories: string[];
  description?: string;
  images?: string[]; // Placeholder, Geoapify doesn't usually provide these directly in Places/Details API
  rawDataSource?: GeoapifyFeature | GeoapifyPlaceDetailsResponse; // Store original source
  distance?: number;
  website?: string;
  opening_hours?: string;
  phone?: string;
  wheelchair?: string;
}

// --- HELPER FUNCTIONS ---

// Helper to transform Geoapify Feature or Details object to our Attraction interface
function transformGeoapifyToAttraction(
  source: GeoapifyFeature | GeoapifyPlaceDetailsResponse
): Attraction {
  const properties = source.properties;
  // Ensure geometry is available or provide a default/fallback if necessary
  const geometry =
    "geometry" in source && source.geometry
      ? source.geometry
      : { type: "Point", coordinates: [properties.lon, properties.lat] };

  return {
    id: properties.place_id, // place_id is the primary identifier
    name: properties.name || "Unknown Attraction",
    address:
      properties.formatted ||
      `${properties.address_line1 || ""}${properties.address_line2 ? ", " + properties.address_line2 : ""}`.trim() ||
      "Address not available",
    city: properties.city || properties.county || "Unknown City",
    country: properties.country || "Unknown Country",
    latitude: properties.lat,
    longitude: properties.lon,
    categories: properties.categories || [],
    description:
      properties.details?.join(", ") ||
      properties.formatted || // Fallback to formatted address if no details
      "No description available.",
    images: [], // Geoapify typically doesn't provide images in these APIs
    rawDataSource: source,
    // Optional fields from Geoapify
    distance: properties.distance,
    website: properties.website,
    opening_hours: properties.opening_hours,
    phone: properties.phone,
    wheelchair: properties.wheelchair,
  };
}

// Helper function to get place_id for a city using Geoapify Geocoding API
async function getCityPlaceId(cityName: string): Promise<string | null> {
  if (!NEXT_PUBLIC_GEOAPIFY_API_KEY || !NEXT_PUBLIC_GEOAPIFY_API_BASE_URL) {
    console.error(
      "Geoapify API environment variables are not set for geocoding."
    );
    return null;
  }
  const params = new URLSearchParams({
    text: cityName,
    format: "json",
    apiKey: NEXT_PUBLIC_GEOAPIFY_API_KEY,
    type: "city", // Bias towards city-level results
  });
  const url = `${NEXT_PUBLIC_GEOAPIFY_API_BASE_URL}${NEXT_PUBLIC_GEOAPIFY_GEOCODE_SEARCH_ENDPOINT}?${params.toString()}`;
  const cacheKey = `geoapify_geocode_${cityName.replace(/\\s+/g, "_").toLowerCase()}`;
  const cachedData = apiCache.get(cacheKey) as string | undefined;
  if (cachedData) return cachedData;

  try {
    const data = await fetchAPI<{ results: { place_id: string }[] }>(url);
    if (data && data.results && data.results.length > 0) {
      const placeId = data.results[0].place_id;
      apiCache.set(cacheKey, placeId);
      return placeId;
    }
    console.warn(`No geocoding results for city: ${cityName}`);
    return null;
  } catch (error) {
    console.error(`Error fetching place_id for city "${cityName}":`, error);
    return null;
  }
}

// --- API FUNCTIONS ---

// Fetch a list of attractions using Geoapify Places API
export async function fetchAttractionsList({
  categories = "tourism.sights,tourism.attraction", // Default categories for attractions
  city = "Paris",
  placeId = "514954cdaa718f024059852f0219f06d4840f00101f901141d000000000000c00205", // Default place_id for Paris
  latitude,
  longitude,
  conditions,
  limit = 20,
  offset = 0,
  lang,
}: {
  categories?: string[] | string; // Allow string or array of strings
  city?: string; // City name for geocoding
  placeId?: string; // Direct Geoapify place_id for the area
  latitude?: number; // For proximity bias
  longitude?: number; // For proximity bias
  conditions?: string; // e.g., "wheelchair" or "wheelchair.yes"
  limit?: number;
  offset?: number;
  lang?: string;
}): Promise<Attraction[]> {
  if (!NEXT_PUBLIC_GEOAPIFY_API_KEY || !NEXT_PUBLIC_GEOAPIFY_API_BASE_URL) {
    console.error(
      "Geoapify API environment variables are not set for fetching attractions list."
    );
    return [];
  }

  let effectivePlaceId: string | undefined | null = placeId;
  if (city && !effectivePlaceId) {
    effectivePlaceId = await getCityPlaceId(city);
    if (!effectivePlaceId) {
      console.warn(
        `Could not find place_id for city: ${city}. Proceeding without city/place filter if coordinates are available.`
      );
      // Do not return yet, proximity might still be used
    }
  }

  // Ensure categories parameter is a non-empty string for the API call
  let resolvedCategoriesString = "tourism.sights,tourism.attraction"; // Default

  if (typeof categories === "string" && categories.trim() !== "") {
    resolvedCategoriesString = categories.trim();
  } else if (Array.isArray(categories) && categories.length > 0) {
    resolvedCategoriesString = categories.join(",");
  } else if (
    categories &&
    ((typeof categories === "string" && categories.trim() === "") ||
      (Array.isArray(categories) && categories.length === 0))
  ) {
    // Warn if an explicitly empty categories value was provided
    console.warn(
      `Provided 'categories' was empty or invalid. Using default: ${resolvedCategoriesString}`
    );
  }
  // If categories was undefined, or an unhandled type, resolvedCategoriesString remains the default.

  const params = new URLSearchParams({
    categories: resolvedCategoriesString,
    limit: limit.toString(),
    offset: offset.toString(),
    apiKey: NEXT_PUBLIC_GEOAPIFY_API_KEY,
  });

  let locationFilterApplied = false;
  if (effectivePlaceId) {
    params.append("filter", `place:${effectivePlaceId}`);
    locationFilterApplied = true;
  } else if (latitude !== undefined && longitude !== undefined) {
    // Geoapify uses lon,lat for proximity
    params.append("bias", `proximity:${longitude},${latitude}`);
    locationFilterApplied = true;
  }

  // Geoapify Places API requires either 'filter' or 'bias'
  if (!locationFilterApplied) {
    console.error(
      "Geoapify API Error: No location filter (placeId, city, or lat/lon) provided for fetching attractions list. At least one location parameter is required."
    );
    return []; // Return empty if no location context can be used for filtering
  }

  if (conditions) params.append("conditions", conditions);
  if (lang) params.append("lang", lang);

  const url = `${NEXT_PUBLIC_GEOAPIFY_API_BASE_URL}${NEXT_PUBLIC_GEOAPIFY_PLACES_ENDPOINT}?${params.toString()}`;
  console.log("Fetching attractions list from Geoapify:", url);
  const cacheKey = `geoapify_places_list_${url}`; // Simple cache key based on full URL

  const cachedData = apiCache.get(cacheKey) as Attraction[] | undefined;
  if (cachedData) {
    return cachedData;
  }

  try {
    const data = await fetchAPI<{ features: GeoapifyFeature[] }>(url);
    if (data && data.features) {
      const attractions = data.features.map(transformGeoapifyToAttraction);
      apiCache.set(cacheKey, attractions, 3600); // Cache for 1 hour
      return attractions;
    }
    return [];
  } catch (error) {
    console.error("Error fetching attractions list from Geoapify:", error);
    return [];
  }
}

// Function to fetch attraction details by its Geoapify place_id
export async function fetchAttractionDetailsById(
  placeId: string,
  // "features" param for place-details is usually for more detailed geometry or specific linked features,
  // but the core details are generally returned by default.
  // Example: features=radius_500 (not standard, check Geoapify docs for valid values if needed)
  // For simplicity, we assume the default details are sufficient or controlled by API key permissions.
  lang?: string
): Promise<Attraction | null> {
  if (
    !NEXT_PUBLIC_GEOAPIFY_API_KEY ||
    !NEXT_PUBLIC_GEOAPIFY_API_BASE_URL ||
    !NEXT_PUBLIC_GEOAPIFY_PLACE_DETAILS_ENDPOINT // Check the specific endpoint for details
  ) {
    console.error(
      "Geoapify API environment variables for place details are not set."
    );
    return null;
  }

  const cacheKey = `geoapify_place_detail_id_${placeId}_lang_${lang || "default"}`;
  const cachedData = apiCache.get(cacheKey) as Attraction | undefined;
  if (cachedData) {
    return cachedData;
  }

  const params = new URLSearchParams({
    id: placeId,
    apiKey: NEXT_PUBLIC_GEOAPIFY_API_KEY,
  });

  if (lang) {
    params.append("lang", lang);
  }

  const url = `${NEXT_PUBLIC_GEOAPIFY_API_BASE_URL}${NEXT_PUBLIC_GEOAPIFY_PLACE_DETAILS_ENDPOINT}?${params.toString()}`;

  try {
    // The place-details endpoint returns an array of features, usually with one item.
    const dataArray = await fetchAPI<GeoapifyPlaceDetailsResponse[]>(url);
    if (dataArray && dataArray.length > 0 && dataArray[0].properties) {
      const attraction = transformGeoapifyToAttraction(dataArray[0]);
      apiCache.set(cacheKey, attraction, 86400); // Cache for 24 hours
      return attraction;
    }
    console.warn(
      "No properties found in Geoapify place details response for ID:",
      placeId
    );
    return null;
  } catch (error) {
    console.error(
      `Error fetching attraction details by ID "${placeId}" from Geoapify:`,
      error
    );
    return null;
  }
}

// Function to fetch attraction details by latitude and longitude
// This is less common if you already have place_ids.
// It might be used for a "what's here?" type query if place_id is unknown.
// The Geoapify 'place-details' endpoint primarily works with 'id'.
// To find places by coords, 'reverse geocoding' or 'places' API with proximity is better.
// This function might be deprecated or re-evaluated based on actual use case.
// For now, it's a placeholder demonstrating a conceptual fetch, but Geoapify's
// place-details endpoint might not directly support lat/lon lookup without an ID.
// A more robust way would be to first reverse-geocode lat/lon to get a place_id.
export async function fetchAttractionDetailsByCoords(
  lat: number,
  lon: number,
  lang?: string
): Promise<Attraction | null> {
  console.warn(
    "fetchAttractionDetailsByCoords using place-details endpoint with lat/lon is not standard. " +
      "Consider using reverse geocoding to get a place_id first, or use fetchAttractionsList with proximity."
  );
  // This is a simplified example. Geoapify's place-details might not work well this way.
  // You'd typically get a place_id from a reverse geocode or a /v2/places query first.
  // However, if the API *did* support it for some reason:
  if (
    !NEXT_PUBLIC_GEOAPIFY_API_KEY ||
    !NEXT_PUBLIC_GEOAPIFY_API_BASE_URL ||
    !NEXT_PUBLIC_GEOAPIFY_PLACE_DETAILS_ENDPOINT
  ) {
    console.error(
      "Geoapify API environment variables for place details by coords are not set."
    );
    return null;
  }

  // Attempting a nearby search to find the closest place and then get its details
  // This is a workaround as place-details usually needs an ID.
  const nearbyPlaces = await fetchAttractionsList({
    latitude: lat,
    longitude: lon,
    limit: 10, // Limit to a few nearby places
    conditions: "wheelchair.yes", // Example condition, can be adjusted
    lang,
    categories: ["tourism"],
  });
  if (nearbyPlaces.length > 0 && nearbyPlaces[0].id) {
    return fetchAttractionDetailsById(nearbyPlaces[0].id, lang);
  }

  console.warn(
    `Could not find a nearby place to fetch details for coords: ${lat}, ${lon}`
  );
  return null;
}

// --- ACCOMMODATION FUNCTIONS ---

// Fetch a list of accommodations (places to stay) using Geoapify Places API
export async function fetchAccommodationList({
  city = "Paris",
  placeId = "514954cdaa718f024059852f0219f06d4840f00101f901141d000000000000c00205", // Default place_id for Paris
  latitude,
  longitude,
  conditions,
  limit = 60,
  offset = 0,
  lang,
}: {
  city?: string; // City name for geocoding
  placeId?: string; // Direct Geoapify place_id for the area
  latitude?: number; // For proximity bias
  longitude?: number; // For proximity bias
  conditions?: string; // e.g., "wheelchair" or "wheelchair.yes"
  limit?: number;
  offset?: number;
  lang?: string;
}): Promise<Attraction[]> {
  if (!NEXT_PUBLIC_GEOAPIFY_API_KEY || !NEXT_PUBLIC_GEOAPIFY_API_BASE_URL) {
    console.error("Geoapify API configuration missing");
    return [];
  }

  let effectivePlaceId: string | undefined | null = placeId;
  if (city && !effectivePlaceId) {
    effectivePlaceId = await getCityPlaceId(city);
    if (!effectivePlaceId) {
      console.warn(`Could not get place_id for city "${city}"`);
      return [];
    }
  }

  const params = new URLSearchParams({
    categories: "accommodation", // Specific category for places to stay
    limit: limit.toString(),
    offset: offset.toString(),
    apiKey: NEXT_PUBLIC_GEOAPIFY_API_KEY,
  });

  let locationFilterApplied = false;
  if (effectivePlaceId) {
    params.append("filter", `place:${effectivePlaceId}`);
    locationFilterApplied = true;
  } else if (latitude !== undefined && longitude !== undefined) {
    params.append("bias", `proximity:${longitude},${latitude}`);
    locationFilterApplied = true;
  }

  // Geoapify Places API requires either 'filter' or 'bias'
  if (!locationFilterApplied) {
    console.warn("No location filter or bias applied for accommodation search");
    return [];
  }

  if (conditions) params.append("conditions", conditions);
  if (lang) params.append("lang", lang);

  const url = `${NEXT_PUBLIC_GEOAPIFY_API_BASE_URL}${NEXT_PUBLIC_GEOAPIFY_PLACES_ENDPOINT}?${params.toString()}`;
  console.log("Fetching accommodation list from Geoapify:", url);
  const cacheKey = `geoapify_accommodation_list_${url}`; // Simple cache key based on full URL

  const cachedData = apiCache.get(cacheKey) as Attraction[] | undefined;
  if (cachedData) {
    console.log("Returning cached accommodation data");
    return cachedData;
  }

  try {
    const response = await fetchAPI<{ features: GeoapifyFeature[] }>(url);

    if (!response.features || response.features.length === 0) {
      console.warn("No accommodation features returned from Geoapify");
      return [];
    }

    const accommodations = response.features.map(transformGeoapifyToAttraction);

    // Cache for 2 hours (accommodation data changes less frequently than attractions)
    apiCache.set(cacheKey, accommodations, 7200);

    console.log(`Successfully fetched ${accommodations.length} accommodations`);
    return accommodations;
  } catch (error) {
    console.error("Error fetching accommodation list:", error);
    return [];
  }
}

// --- GEOGRAPHY INTEGRATION FUNCTIONS ---

/**
 * Fetch attractions for a specific country using its ISO2 code
 * This function first gets cities from the country, then fetches attractions for each city
 */
export async function fetchAttractionsByCountry({
  countryISO2,
  categories = "tourism.sights,tourism.attraction",
  maxCities = 50,
  attractionsPerCity = 15,
  conditions,
  lang,
}: {
  countryISO2: string;
  categories?: string[] | string;
  maxCities?: number;
  attractionsPerCity?: number;
  conditions?: string;
  lang?: string;
}): Promise<{
  country: Country;
  cities: Array<{ city: City; attractions: Attraction[] }>;
}> {
  // First, get the country information
  const country = await fetchCountryByISO2(countryISO2);
  if (!country) {
    throw new Error(`Country with ISO2 code "${countryISO2}" not found`);
  }

  // Get cities for this country
  const cities = await fetchAllCitiesByCountry({
    countryCode: countryISO2,
    limit: maxCities,
  });

  if (cities.length === 0) {
    console.warn(`No cities found for country: ${country.name}`);
    return { country, cities: [] };
  }

  // Fetch attractions for each city
  const cityAttractions = await Promise.all(
    cities.map(async (city) => {
      try {
        const attractions = await fetchAttractionsList({
          categories,
          city: city.name,
          latitude: city.latitude,
          longitude: city.longitude,
          limit: attractionsPerCity,
          conditions,
          lang,
        });
        return { city, attractions };
      } catch (error) {
        console.error(
          `Error fetching attractions for city ${city.name}:`,
          error
        );
        return { city, attractions: [] };
      }
    })
  );

  return { country, cities: cityAttractions };
}

/**
 * Fetch attractions for a specific city by name and country
 */
export async function fetchAttractionsByCity({
  cityName,
  countryISO2,
  categories = "tourism.sights,tourism.attraction",
  limit = 20,
  conditions,
  lang,
}: {
  cityName: string;
  countryISO2: string;
  categories?: string[] | string;
  limit?: number;
  conditions?: string;
  lang?: string;
}): Promise<{ city: City | null; attractions: Attraction[] }> {
  // Get the specific city information
  const cities = await fetchAllCitiesByCountry({
    countryCode: countryISO2,
    limit: 100, // Get more cities to search through
  });

  const city = cities.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );

  if (!city) {
    console.warn(`City "${cityName}" not found in country ${countryISO2}`);
    return { city: null, attractions: [] };
  }

  // Fetch attractions for this specific city
  const attractions = await fetchAttractionsList({
    categories,
    city: city.name,
    latitude: city.latitude,
    longitude: city.longitude,
    limit,
    conditions,
    lang,
  });

  return { city, attractions };
}

/**
 * Get popular destination cities with their attractions
 * This function returns cities that are likely to have many attractions
 */
export async function fetchPopularDestinations({
  regions = ["Europe", "Asia", "North America"],
  citiesPerRegion = 5,
  attractionsPerCity = 10,
  categories = "tourism.sights,tourism.attraction",
}: {
  regions?: string[];
  citiesPerRegion?: number;
  attractionsPerCity?: number;
  categories?: string[] | string;
} = {}): Promise<
  Array<{
    country: Country;
    city: City;
    attractions: Attraction[];
  }>
> {
  const destinations: Array<{
    country: Country;
    city: City;
    attractions: Attraction[];
  }> = [];

  // Define popular countries for each region
  const popularCountries: Record<string, string[]> = {
    Europe: [
      "FR",
      "IT",
      "ES",
      "GB",
      "DE",
      "NL",
      "CH",
      "AT",
      "BE",
      "SE",
      "NO",
      "DK",
      "FI",
      "IE",
      "PT",
      "GR",
      "PL",
      "CZ",
      "HU",
      "RO",
    ],
    Asia: [
      "JP",
      "TH",
      "SG",
      "CN",
      "KR",
      "IN",
      "MY",
      "VN",
      "ID",
      "PH",
      "HK",
      "TW",
      "AE",
      "SA",
      "IL",
      "KR",
      "PK",
      "BD",
      "LK",
      "NP",
      "MM",
      "KH",
      "LA",
    ],
    "North America": [
      "US",
      "CA",
      "MX",
      "CU",
      "JM",
      "DO",
      "PR",
      "GT",
      "HN",
      "SV",
      "NI",
      "CR",
      "PA",
    ],
    "South America": [
      "BR",
      "AR",
      "PE",
      "CL",
      "CO",
      "VE",
      "EC",
      "UY",
      "PY",
      "BO",
      "GY",
      "SR",
    ],
    Africa: [
      "ZA",
      "MA",
      "EG",
      "KE",
      "NG",
      "TZ",
      "GH",
      "UG",
      "DZ",
      "TN",
      "SN",
      "ZM",
      "ZW",
      "AO",
      "CI",
      "CM",
      "MG",
    ],
    Oceania: [
      "AU",
      "NZ",
      "FJ",
      "PG",
      "SB",
      "VU",
      "WS",
      "TO",
      "KI",
      "TV",
      "NR",
      "FM",
      "MH",
      "PW",
    ],
  };

  for (const region of regions) {
    const countryCodes = popularCountries[region] || [];
    let citiesAdded = 0;

    for (const countryCode of countryCodes) {
      if (citiesAdded >= citiesPerRegion) break;

      try {
        const country = await fetchCountryByISO2(countryCode);
        if (!country) continue;

        // Get major cities (capital + other large cities)
        const cities = await fetchAllCitiesByCountry({
          countryCode,
          limit: 5, // Get top 5 cities per country
        });

        // Prioritize capital city if available
        const orderedCities = cities.sort((a, b) => {
          if (a.name.toLowerCase() === country.capital.toLowerCase()) return -1;
          if (b.name.toLowerCase() === country.capital.toLowerCase()) return 1;
          return 0;
        });

        for (const city of orderedCities) {
          if (citiesAdded >= citiesPerRegion) break;

          try {
            const attractions = await fetchAttractionsList({
              categories,
              city: city.name,
              latitude: city.latitude,
              longitude: city.longitude,
              limit: attractionsPerCity,
            });

            if (attractions.length > 0) {
              destinations.push({ country, city, attractions });
              citiesAdded++;
            }
          } catch (error) {
            console.error(
              `Error fetching attractions for ${city.name}, ${country.name}:`,
              error
            );
          }
        }
      } catch (error) {
        console.error(`Error processing country ${countryCode}:`, error);
      }
    }
  }

  return destinations;
}
