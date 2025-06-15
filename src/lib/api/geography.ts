import { apiCache, fetchAPI } from "./services";

const GEOGRAPHQL_API_URL = "https://api.geographql.rudio.dev/graphql";

// --- INTERFACES ---
export interface Country {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
  capital: string;
  currency: string;
  currency_symbol: string;
  region: string;
  subregion: string;
  latitude: number;
  longitude: number;
  emoji: string;
  native: string;
  phone_code: string;
}

export interface City {
  id: number;
  name: string;
  state_code?: string;
  country_code: string;
  latitude?: number;
  longitude?: number;
}

export interface CountryConnection {
  totalCount: number;
  edges: {
    cursor: string;
    node: Country;
  }[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string;
    startCursor: string;
  };
}

export interface CityConnection {
  totalCount: number;
  edges: {
    cursor: string;
    node: City;
  }[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string;
    startCursor: string;
  };
}

export interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{
    message: string;
    locations?: Array<{
      line: number;
      column: number;
    }>;
    path?: string[];
  }>;
}

// --- HELPER FUNCTIONS ---

// Generic GraphQL query function
async function executeGraphQLQuery<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const cacheKey = `graphql_${Buffer.from(query + JSON.stringify(variables || {})).toString("base64")}`;
  const cachedData = apiCache.get(cacheKey) as T | undefined;

  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetchAPI<GraphQLResponse<T>>(GEOGRAPHQL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (response.errors && response.errors.length > 0) {
      throw new Error(
        `GraphQL Error: ${response.errors.map((e) => e.message).join(", ")}`
      );
    }

    if (!response.data) {
      throw new Error("No data returned from GraphQL query");
    }

    // Cache for 1 hour
    apiCache.set(cacheKey, response.data, 3600);
    return response.data;
  } catch (error) {
    console.error("GraphQL query error:", error);
    throw error;
  }
}

// --- API FUNCTIONS ---

/**
 * Fetch all countries with pagination support
 */
export async function fetchCountries({
  first = 250,
  after,
  filter,
}: {
  first?: number;
  after?: string;
  filter?: {
    region?: string;
    subregion?: string;
  };
} = {}): Promise<CountryConnection> {
  const query = `
    query GetCountries($first: Int, $after: String, $filter: CountryFilterInput) {
      countries(page: { first: $first, after: $after }, filter: $filter) {
        totalCount
        edges {
          cursor
          node {
            id
            name
            iso2
            iso3
            capital
            currency
            currency_symbol
            region
            subregion
            latitude
            longitude
            emoji
            native
            phone_code
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
      }
    }
  `;

  const variables: any = { first };
  if (after) variables.after = after;
  if (filter) variables.filter = filter;

  const result = await executeGraphQLQuery<{ countries: CountryConnection }>(
    query,
    variables
  );
  return result.countries;
}

/**
 * Fetch all countries as a simple array (handles pagination automatically)
 */
export async function fetchAllCountries(filter?: {
  region?: string;
  subregion?: string;
}): Promise<Country[]> {
  const countries: Country[] = [];
  let after: string | undefined;
  let hasNextPage = true;

  while (hasNextPage) {
    const result = await fetchCountries({
      first: 250, // Fetch larger batches
      after,
      filter,
    });

    countries.push(...result.edges.map((edge) => edge.node));
    hasNextPage = result.pageInfo.hasNextPage;
    after = result.pageInfo.endCursor;
  }

  return countries;
}

/**
 * Fetch cities for a specific country
 */
export async function fetchCitiesByCountry({
  countryCode,
  stateId,
  first = 150,
  after,
}: {
  countryCode: string;
  stateId?: number;
  first?: number;
  after?: string;
}): Promise<CityConnection> {
  const query = `
    query GetCities($first: Int, $after: String, $filter: CityFilterInput) {
      cities(page: { first: $first, after: $after }, filter: $filter) {
        totalCount
        edges {
          cursor
          node {
            id
            name
            state_code
            country_code
            latitude
            longitude
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
      }
    }
  `;

  const filter: any = { ciso2: countryCode };
  if (stateId) filter.sid = stateId;

  const variables: any = { first, filter };
  if (after) variables.after = after;

  const result = await executeGraphQLQuery<{ cities: CityConnection }>(
    query,
    variables
  );
  return result.cities;
}

/**
 * Fetch all cities for a country as a simple array (handles pagination automatically)
 */
export async function fetchAllCitiesByCountry({
  countryCode,
  stateId,
  limit,
}: {
  countryCode: string;
  stateId?: number;
  limit?: number;
}): Promise<City[]> {
  const cities: City[] = [];
  let after: string | undefined;
  let hasNextPage = true;
  let fetched = 0;

  while (hasNextPage && (!limit || fetched < limit)) {
    const batchSize = limit ? Math.min(250, limit - fetched) : 250;

    const result = await fetchCitiesByCountry({
      countryCode,
      stateId,
      first: batchSize,
      after,
    });

    const newCities = result.edges.map((edge) => edge.node);
    cities.push(...newCities);
    fetched += newCities.length;

    hasNextPage = result.pageInfo.hasNextPage && (!limit || fetched < limit);
    after = result.pageInfo.endCursor;
  }

  return cities;
}

/**
 * Fetch a specific country by ISO2 code
 */
export async function fetchCountryByISO2(
  iso2: string
): Promise<Country | null> {
  const query = `
    query GetCountry($iso2: ID!) {
      country(iso2: $iso2) {
        id
        name
        iso2
        iso3
        capital
        currency
        currency_symbol
        region
        subregion
        latitude
        longitude
        emoji
        native
        phone_code
      }
    }
  `;

  try {
    const result = await executeGraphQLQuery<{ country: Country }>(query, {
      iso2,
    });
    return result.country;
  } catch (error) {
    console.error(`Error fetching country with ISO2 code "${iso2}":`, error);
    return null;
  }
}

/**
 * Fetch countries grouped by region
 */
export async function fetchCountriesByRegion(): Promise<
  Record<string, Country[]>
> {
  const countries = await fetchAllCountries();

  return countries.reduce(
    (grouped, country) => {
      const region = country.region || "Unknown";
      if (!grouped[region]) {
        grouped[region] = [];
      }
      grouped[region].push(country);
      return grouped;
    },
    {} as Record<string, Country[]>
  );
}

/**
 * Search cities by name across all countries
 */
export async function searchCities({
  name,
  countryCode,
  limit = 100,
}: {
  name: string;
  countryCode?: string;
  limit?: number;
}): Promise<City[]> {
  // This is a simplified search - in a real implementation you might want
  // to fetch cities from multiple countries and filter by name
  // For now, we'll require a country code for efficiency
  if (!countryCode) {
    throw new Error("Country code is required for city search");
  }

  const cities = await fetchAllCitiesByCountry({
    countryCode,
    limit: limit * 2, // Fetch more to allow for filtering
  });

  // Filter by name (case-insensitive)
  const searchTerm = name.toLowerCase();
  return cities
    .filter((city) => city.name.toLowerCase().includes(searchTerm))
    .slice(0, limit);
}
