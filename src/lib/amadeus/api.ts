// Amadeus API Integration

// IMPORTANT: Store your API Key and Secret in environment variables
// and access them here (e.g., process.env.AMADEUS_API_KEY)
const AMADEUS_API_KEY =
  process.env.NEXT_PUBLIC_AMADEUS_API_KEY || "YOUR_AMADEUS_API_KEY";
const AMADEUS_API_SECRET =
  process.env.NEXT_PUBLIC_AMADEUS_API_SECRET || "YOUR_AMADEUS_API_SECRET";

const AMADEUS_BASE_URL = "https://test.api.amadeus.com"; // Use https://api.amadeus.com for production

interface AmadeusTokenResponse {
  type: string;
  username: string;
  application_name: string;
  client_id: string;
  token_type: string;
  access_token: string;
  expires_in: number;
  state: string;
  scope: string;
}

/**
 * Fetches an Amadeus API access token.
 * @returns {Promise<string | null>} The access token or null if an error occurs.
 */
export async function getAmadeusAccessToken(): Promise<string | null> {
  const tokenUrl = `${AMADEUS_BASE_URL}/v1/security/oauth2/token`;
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", AMADEUS_API_KEY);
  params.append("client_secret", AMADEUS_API_SECRET);

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching Amadeus access token:", errorData);
      return null;
    }

    const data: AmadeusTokenResponse = await response.json();
    return data.access_token;
  } catch (error) {
    console.error(
      "Network error or other issue fetching Amadeus access token:",
      error
    );
    return null;
  }
}

export interface FlightOfferSearchParameters {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string; // YYYY-MM-DD
  adults: number;
  returnDate?: string; // YYYY-MM-DD
  children?: number;
  infants?: number;
  travelClass?: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
  nonStop?: boolean;
  maxPrice?: number;
  currencyCode?: string; // e.g., USD
  max?: number; // Max number of flight offers to return
}

/**
 * Searches for flight offers using the Amadeus API.
 * (Placeholder implementation)
 * @param {FlightOfferSearchParameters} params - The search parameters for flight offers.
 * @returns {Promise<any>} The flight offers data or null if an error occurs.
 */
export async function searchFlightOffers(
  params: FlightOfferSearchParameters
): Promise<any | null> {
  const accessToken = await getAmadeusAccessToken();
  if (!accessToken) {
    console.error("Failed to get access token. Cannot search for flights.");
    return null;
  }

  const flightOffersUrl = new URL(
    `${AMADEUS_BASE_URL}/v2/shopping/flight-offers`
  );

  // Append parameters to URL
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      flightOffersUrl.searchParams.append(key, String(value));
    }
  });

  try {
    const response = await fetch(flightOffersUrl.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching flight offers:", errorData);
      // Log more details if available
      if (errorData.errors) {
        errorData.errors.forEach((err: any) =>
          console.error(
            `Amadeus API Error: ${err.title} - ${err.detail} (Status: ${err.status}, Code: ${err.code})`
          )
        );
      }
      return null;
    }

    const data = await response.json();
    return data; // This will be the flight offers response
  } catch (error) {
    console.error(
      "Network error or other issue fetching flight offers:",
      error
    );
    return null;
  }
}

// --- Hotel Search ---

export interface HotelSearchParameters {
  cityCode?: string; // IATA code of the city e.g. PAR for Paris
  latitude?: number;
  longitude?: number;
  radius?: number;
  radiusUnit?: "KM" | "MILE";
  hotelName?: string;
  amenities?: string[]; // Comma-separated list e.g. SWIMMING_POOL,SPA
  ratings?: number[]; // Min and Max rating e.g. [3,5] for 3 to 5 stars
  priceRange?: string; // e.g. 100-200
  currency?: string; // e.g. USD
  checkInDate?: string; // YYYY-MM-DD
  checkOutDate?: string; // YYYY-MM-DD
  adults?: number;
  roomQuantity?: number;
  paymentPolicy?: "NONE" | "GUARANTEE" | "DEPOSIT"; // Filter by payment policy
  boardType?:
    | "ROOM_ONLY"
    | "BREAKFAST"
    | "HALF_BOARD"
    | "FULL_BOARD"
    | "ALL_INCLUSIVE"; // Filter by board type
  includeClosed?: boolean; // Include hotels that are temporarily closed
  bestRateOnly?: boolean; // Only return the best rate available for each hotel
  view?: "NONE" | "LIGHT" | "FULL" | "FULL_ALL_IMAGES"; // Level of detail in response
  sort?: string; // e.g. "price", "distance", "rating"
  lang?: string; // e.g. "en-US"
  hotelIds?: string[]; // Comma-separated list of Amadeus hotel IDs
  max?: number; // Max number of hotel offers to return
}

// Minimal response structure, expand as needed based on API docs
export interface HotelOffer {
  hotelId: string;
  name: string;
  cityCode: string;
  latitude: number;
  longitude: number;
  // Add more fields like address, amenities, price, rating etc.
}

export interface HotelSearchResponse {
  data: HotelOffer[];
  meta?: {
    count: number;
    links?: any; // For pagination
  };
  // Include warnings or errors if present in API response
}

/**
 * Searches for hotel offers using the Amadeus API.
 * (Further implementation needed for full parameter support and error handling)
 * @param {HotelSearchParameters} params - The search parameters for hotel offers.
 * @returns {Promise<HotelSearchResponse | null>} The hotel offers data or null if an error occurs.
 */
export async function searchHotelOffers(
  params: HotelSearchParameters
): Promise<HotelSearchResponse | null> {
  const accessToken = await getAmadeusAccessToken();
  if (!accessToken) {
    console.error("Failed to get access token. Cannot search for hotels.");
    return null;
  }

  // Hotel List API (by city, geo-coordinates, or hotel IDs)
  // Or Hotel Search API (more complex, offers by hotel ID for specific dates/criteria)
  // This example targets a simpler "list hotels by criteria" endpoint.
  // Adjust endpoint and parameters based on specific Amadeus API used (e.g., /v3/shopping/hotel-offers)
  const hotelOffersUrl = new URL(
    `${AMADEUS_BASE_URL}/v1/reference-data/locations/hotels/by-city`
  ); // Example, might need /v3/shopping/hotel-offers

  // Append parameters to URL - This needs to be adapted based on the chosen hotel API endpoint
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        hotelOffersUrl.searchParams.append(key, value.join(","));
      } else {
        hotelOffersUrl.searchParams.append(key, String(value));
      }
    }
  });
  // For /v3/shopping/hotel-offers, you'd typically send a POST request with a JSON body.
  // For /v1/reference-data/locations/hotels/by-city, it's GET with query params.
  // For /v2/shopping/hotel-offers (deprecated but example), it's GET.

  console.log("Requesting Hotel Offers URL:", hotelOffersUrl.toString());

  try {
    const response = await fetch(hotelOffersUrl.toString(), {
      // For POST, method would be 'POST' and include body
      method: "GET", // Or "POST" depending on the specific API endpoint
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(params), // If it's a POST request
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching hotel offers:", errorData);
      if (errorData.errors) {
        errorData.errors.forEach((err: any) =>
          console.error(
            `Amadeus API Error: ${err.title} - ${err.detail} (Status: ${err.status}, Code: ${err.code})`
          )
        );
      }
      return null;
    }

    const data = await response.json();
    // Consider adding response validation here (e.g., with Zod)
    return data as HotelSearchResponse;
  } catch (error) {
    console.error("Network error or other issue fetching hotel offers:", error);
    return null;
  }
  // Remember to implement pagination if the API supports it (check response for 'meta.links')
  // Implement robust error handling and rate limit consideration.
}

// --- Points of Interest ---

export interface PointsOfInterestParameters {
  latitude: number;
  longitude: number;
  radius?: number; // In kilometers, default 1, max 20
  pageLimit?: number; // Max number of results per page
  pageOffset?: number; // For pagination
  categories?: string[]; // Comma-separated e.g. SIGHTS,NIGHTLIFE,RESTAURANT
}

// Minimal response structure, expand as needed
export interface PointOfInterest {
  id: string;
  name: string;
  category: string;
  geoCode: {
    latitude: number;
    longitude: number;
  };
  rank?: number;
  tags?: string[];
}

export interface PointsOfInterestResponse {
  data: PointOfInterest[];
  meta?: {
    count: number;
    links?: any; // For pagination
  };
}

/**
 * Fetches points of interest using the Amadeus API.
 * (Further implementation needed for full parameter support and error handling)
 * @param {PointsOfInterestParameters} params - The search parameters for points of interest.
 * @returns {Promise<PointsOfInterestResponse | null>} The points of interest data or null if an error occurs.
 */
export async function getPointsOfInterest(
  params: PointsOfInterestParameters
): Promise<PointsOfInterestResponse | null> {
  const accessToken = await getAmadeusAccessToken();
  if (!accessToken) {
    console.error(
      "Failed to get access token. Cannot fetch points of interest."
    );
    return null;
  }

  const poiUrl = new URL(
    `${AMADEUS_BASE_URL}/v1/reference-data/locations/pois`
  );
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      if (key === "categories" && Array.isArray(value)) {
        poiUrl.searchParams.append(key, value.join(","));
      } else if (key === "pageLimit") {
        // API uses 'page[limit]' and 'page[offset]'
        poiUrl.searchParams.append("page[limit]", String(value));
      } else if (key === "pageOffset") {
        poiUrl.searchParams.append("page[offset]", String(value));
      } else {
        poiUrl.searchParams.append(key, String(value));
      }
    }
  });

  console.log("Requesting Points of Interest URL:", poiUrl.toString());

  try {
    const response = await fetch(poiUrl.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching points of interest:", errorData);
      if (errorData.errors) {
        errorData.errors.forEach((err: any) =>
          console.error(
            `Amadeus API Error: ${err.title} - ${err.detail} (Status: ${err.status}, Code: ${err.code})`
          )
        );
      }
      return null;
    }

    const data = await response.json();
    return data as PointsOfInterestResponse;
  } catch (error) {
    console.error(
      "Network error or other issue fetching points of interest:",
      error
    );
    return null;
  }
  // Remember to implement pagination (using page[offset] and page[limit])
  // Implement robust error handling and rate limit consideration.
}

// --- Tours and Activities (Safe Place API) ---

export interface ToursActivitiesParameters {
  latitude: number;
  longitude: number;
  radius?: number; // Radius in kilometers (default 1, max 20)
  pageLimit?: number; // Max number of results per page
  pageOffset?: number; // For pagination
  // Amadeus's "Activities" API seems to be the "Safe Place" API which gives safety scores
  // and COVID-19 related info. If you need actual tour/activity booking,
  // you might need to check if Amadeus offers a different API or if it's through partners.
  // The parameters here are based on the "Safe Place" API.
}

// Minimal response structure, expand as needed
export interface ActivityLocation {
  id: string;
  subType: string; // e.g., CITY, POINT_OF_INTEREST
  name: string;
  geoCode: {
    latitude: number;
    longitude: number;
  };
  safetyScores: {
    // Example structure, verify with API docs
    lgbtq?: any;
    medical?: any;
    overall?: any;
    physicalHarm?: any;
    politicalFreedom?: any;
    theft?: any;
    women?: any;
  };
  // Add more fields as per Safe Place API response
}

export interface ToursActivitiesResponse {
  data: ActivityLocation[];
  meta?: {
    count: number;
    links?: any; // For pagination
  };
}

/**
 * Fetches tour and activity locations (safety information) using the Amadeus Safe Place API.
 * (Further implementation needed for full parameter support and error handling)
 * @param {ToursActivitiesParameters} params - The search parameters.
 * @returns {Promise<ToursActivitiesResponse | null>} The data or null if an error occurs.
 */
export async function getToursAndActivities(
  params: ToursActivitiesParameters
): Promise<ToursActivitiesResponse | null> {
  const accessToken = await getAmadeusAccessToken();
  if (!accessToken) {
    console.error("Failed to get access token. Cannot fetch tours/activities.");
    return null;
  }

  // This uses the "Safe Place" API endpoint.
  // GET /v1/safety/safety-rated-locations
  const activitiesUrl = new URL(
    `${AMADEUS_BASE_URL}/v1/safety/safety-rated-locations`
  );
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      if (key === "pageLimit") {
        // API uses 'page[limit]' and 'page[offset]'
        activitiesUrl.searchParams.append("page[limit]", String(value));
      } else if (key === "pageOffset") {
        activitiesUrl.searchParams.append("page[offset]", String(value));
      } else {
        activitiesUrl.searchParams.append(key, String(value));
      }
    }
  });
  console.log(
    "Requesting Tours/Activities (Safe Place) URL:",
    activitiesUrl.toString()
  );

  try {
    const response = await fetch(activitiesUrl.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching tours/activities (Safe Place):", errorData);
      if (errorData.errors) {
        errorData.errors.forEach((err: any) =>
          console.error(
            `Amadeus API Error: ${err.title} - ${err.detail} (Status: ${err.status}, Code: ${err.code})`
          )
        );
      }
      return null;
    }

    const data = await response.json();
    return data as ToursActivitiesResponse;
  } catch (error) {
    console.error(
      "Network error or other issue fetching tours/activities (Safe Place):",
      error
    );
    return null;
  }
  // Remember to implement pagination (using page[offset] and page[limit])
  // Implement robust error handling and rate limit consideration.
}

// Example usage (you can remove this or move it to a test file):
/*
async function testApi() {
  console.log("Attempting to fetch Amadeus Access Token...");
  const token = await getAmadeusAccessToken();
  if (token) {
    console.log("Successfully fetched Access Token (first few chars):", token.substring(0, 10));

    // Example flight search
    const flightParams: FlightOfferSearchParameters = {
      originLocationCode: "SYD",
      destinationLocationCode: "BKK",
      departureDate: "2025-10-07", // Ensure this date is in the future and valid for Amadeus test env
      adults: 1,
      max: 5, // Limit results for testing
    };
    console.log("\nSearching for flights with params:", flightParams);
    const flights = await searchFlightOffers(flightParams);
    if (flights && flights.data) {
      console.log(`Successfully fetched ${flights.data.length} flight offers.`);
      // console.log("Flight offers:", JSON.stringify(flights.data, null, 2));
    } else if (flights) {
      console.log("Received response for flights, but no data field:", flights);
    } else {
      console.log("Failed to fetch flight offers.");
    }
  } else {
    console.log("Failed to fetch Access Token.");
  }

  // --- Test Hotel Search ---
  console.log("\nAttempting to search for hotels...");
  const hotelParams: HotelSearchParameters = {
    cityCode: "PAR", // Paris
    radius: 20,
    radiusUnit: "KM",
    max: 5,
  };
  console.log("Searching for hotels with params:", hotelParams);
  const hotels = await searchHotelOffers(hotelParams);
  if (hotels && hotels.data) {
    console.log(`Successfully fetched ${hotels.data.length} hotel offers.`);
    // hotels.data.forEach(hotel => console.log(hotel.name));
  } else if (hotels) {
     console.log("Received response for hotels, but no data field or error in structure:", hotels);
  }
  else {
    console.log("Failed to fetch hotel offers.");
  }

  // --- Test Points of Interest ---
  console.log("\nAttempting to fetch Points of Interest...");
  const poiParams: PointsOfInterestParameters = {
    latitude: 48.8566, // Paris
    longitude: 2.3522,
    radius: 2,
    categories: ["SIGHTS", "NIGHTLIFE"],
    pageLimit: 5,
  };
  console.log("Fetching POIs with params:", poiParams);
  const pois = await getPointsOfInterest(poiParams);
  if (pois && pois.data) {
    console.log(`Successfully fetched ${pois.data.length} Points of Interest.`);
    // pois.data.forEach(poi => console.log(`${poi.name} (${poi.category})`));
  } else if (pois) {
    console.log("Received response for POIs, but no data field or error in structure:", pois);
  }
  else {
    console.log("Failed to fetch Points of Interest.");
  }

  // --- Test Tours and Activities (Safe Place API) ---
  console.log("\nAttempting to fetch Tours/Activities (Safe Place API)...");
  const activityParams: ToursActivitiesParameters = {
    latitude: 48.8566, // Paris
    longitude: 2.3522,
    radius: 5,
    pageLimit: 3,
  };
  console.log("Fetching Activities (Safe Place) with params:", activityParams);
  const activities = await getToursAndActivities(activityParams);
  if (activities && activities.data) {
    console.log(`Successfully fetched ${activities.data.length} Safe Place locations.`);
    // activities.data.forEach(act => console.log(`${act.name} (Overall Safety: ${act.safetyScores?.overall?.score})`));
  } else if (activities) {
    console.log("Received response for Activities, but no data field or error in structure:", activities);
  }
  else {
    console.log("Failed to fetch Activities (Safe Place).");
  }
}

// Call the test function if this file is run directly (e.g., for quick testing)
// Ensure you have a way to run this (e.g. ts-node) or integrate into your app's startup for testing.
// testApi();
*/

// You can add more functions here for other Amadeus APIs like:
// - Car Rentals
// - Airport Information, etc.

// Remember to handle API rate limits, pagination, and more robust error handling for a production application.
// Consider using a dedicated HTTP client library like Axios for more advanced features (interceptors, etc.)
// Add response type validation (e.g. using Zod) for all API calls to ensure data integrity.
