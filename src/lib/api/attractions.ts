import { apiCache, fetchAPI } from "./services";

const GEOAPIFY_API_BASE_URL = process.env.GEOAPIFY_API_BASE_URL;
const GEOAPIFY_PLACE_DETAILS_ENDPOINT =
  process.env.GEOAPIFY_PLACE_DETAILS_ENDPOINT;
const GEOAPIFY_API_KEY = process.env.GEOAPIFY_API_KEY;

export interface GeoapifyPlaceDetails {
  // Define the expected structure based on Geoapify's API response
  // This is a simplified example, expand as needed
  properties: {
    name: string;
    address_line1: string;
    address_line2: string;
    city: string;
    country: string;
    lat: number;
    lon: number;
    formatted: string;
    categories: string[];
    details: string[];
    datasource: {
      sourcename: string;
      attribution: string;
      license: string;
      url: string;
    };
    // Add other properties you expect from the API
  };
  geometry: {
    type: string;
    coordinates: number[] | number[][];
  };
  // Add other top-level properties if any
}

export interface Attraction {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  categories: string[];
  description?: string; // Assuming description might come from details or other sources
  images?: string[]; // Placeholder for images
  rawDataSource?: GeoapifyPlaceDetails; // To store the original API response if needed
}

// Function to fetch attraction details by place ID
export async function fetchAttractionDetailsById(
  placeId: string,
  features: string = "details",
  lang?: string
): Promise<Attraction | null> {
  if (
    !GEOAPIFY_API_KEY ||
    !GEOAPIFY_API_BASE_URL ||
    !GEOAPIFY_PLACE_DETAILS_ENDPOINT
  ) {
    console.error("Geoapify API environment variables are not set.");
    return null;
  }

  const cacheKey = `geoapify_place_details_id_${placeId}_features_${features}_lang_${lang || "default"}`;
  const cachedData = apiCache.get(cacheKey) as Attraction | undefined;
  if (cachedData) {
    return cachedData;
  }

  const params = new URLSearchParams({
    id: placeId,
    features,
    apiKey: GEOAPIFY_API_KEY,
  });

  if (lang) {
    params.append("lang", lang);
  }

  const url = `${GEOAPIFY_API_BASE_URL}${GEOAPIFY_PLACE_DETAILS_ENDPOINT}?${params.toString()}`;

  try {
    const data = await fetchAPI<GeoapifyPlaceDetails>(url);
    if (data && data.properties) {
      const attraction = transformGeoapifyToAttraction(data);
      apiCache.set(cacheKey, attraction);
      return attraction;
    }
    return null;
  } catch (error) {
    console.error(
      "Error fetching attraction details by ID from Geoapify:",
      error
    );
    return null;
  }
}

// Function to fetch attraction details by latitude and longitude
export async function fetchAttractionDetailsByCoords(
  lat: number,
  lon: number,
  features: string = "details",
  lang?: string
): Promise<Attraction | null> {
  if (
    !GEOAPIFY_API_KEY ||
    !GEOAPIFY_API_BASE_URL ||
    !GEOAPIFY_PLACE_DETAILS_ENDPOINT
  ) {
    console.error("Geoapify API environment variables are not set.");
    return null;
  }

  const cacheKey = `geoapify_place_details_coords_${lat}_${lon}_features_${features}_lang_${lang || "default"}`;
  const cachedData = apiCache.get(cacheKey) as Attraction | undefined;
  if (cachedData) {
    return cachedData;
  }

  const params = new URLSearchParams({
    lat: lat.toString(),
    lon: lon.toString(),
    features,
    apiKey: GEOAPIFY_API_KEY,
  });

  if (lang) {
    params.append("lang", lang);
  }

  const url = `${GEOAPIFY_API_BASE_URL}${GEOAPIFY_PLACE_DETAILS_ENDPOINT}?${params.toString()}`;

  try {
    const data = await fetchAPI<GeoapifyPlaceDetails>(url);
    if (data && data.properties) {
      const attraction = transformGeoapifyToAttraction(data);
      apiCache.set(cacheKey, attraction);
      return attraction;
    }
    return null;
  } catch (error) {
    console.error(
      "Error fetching attraction details by Coords from Geoapify:",
      error
    );
    return null;
  }
}

// Helper function to transform Geoapify API response to our Attraction interface
function transformGeoapifyToAttraction(
  geoapifyData: GeoapifyPlaceDetails
): Attraction {
  const { properties, geometry } = geoapifyData;
  // Assuming 'id' might not be directly available or needs a prefix
  // Using a combination of lat/lon for a pseudo-id if no direct ID is suitable
  const id = properties.datasource?.sourcename
    ? `${properties.datasource.sourcename}_${properties.lat}_${properties.lon}`
    : `geoapify_${properties.lat}_${properties.lon}`;

  return {
    id: id,
    name: properties.name || "Unknown Attraction",
    address:
      properties.formatted ||
      `${properties.address_line1 || ""}, ${properties.address_line2 || ""}`.trim(),
    city: properties.city || "Unknown City",
    country: properties.country || "Unknown Country",
    latitude: properties.lat,
    longitude: properties.lon,
    categories: properties.categories || [],
    // Description might need to be sourced from 'details' or constructed
    description: properties.details
      ? properties.details.join(", ")
      : "No description available.",
    // Images are not directly part of the place-details, might need another API or be added later
    images: [],
    rawDataSource: geoapifyData, // Store the original response for more detailed use if needed
  };
}

// Example of how you might fetch a list of attractions if Geoapify Places API is used
// This is a placeholder as the user provided details for 'place-details' endpoint only
// You would typically use Geoapify Places API (nearby, categories, etc.) to get a list of place IDs first.
export async function fetchAttractionsList(
  categories?: string[], // e.g., ["tourism.attraction"]
  bbox?: [number, number, number, number], // minLon, minLat, maxLon, maxLat
  limit: number = 20,
  lang?: string
): Promise<Attraction[]> {
  console.warn(
    "fetchAttractionsList is a placeholder. Geoapify 'place-details' API fetches single items. " +
      "Use Geoapify Places API for discovery and lists."
  );
  // This function would need to:
  // 1. Call Geoapify Places API (e.g., /v2/places) with appropriate filters (categories, bbox, etc.)
  // 2. Get a list of place IDs from the response.
  // 3. Optionally, for each ID, call fetchAttractionDetailsById to get full details.
  //    (Or the Places API might return enough summary data directly)
  // For now, returning an empty array.
  return [];
}
