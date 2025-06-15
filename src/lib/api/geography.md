# Geography and Destinations API Documentation

This document explains how to use the new geography and destinations APIs that integrate with GraphQL for geographic data and Geoapify for attractions.

## Overview

The new API structure consists of three main modules:

1. **Geography API** (`/src/lib/api/geography.ts`) - Fetches countries and cities from GeographQL
2. **Attractions API** (`/src/lib/api/attractions.ts`) - Fetches attractions from Geoapify Places API  
3. **Destinations API** (`/src/lib/api/destinations.ts`) - Combines geography and attractions data

## Data Sources

- **Countries & Cities**: [GeographQL](https://geographql.netlify.app/) - GraphQL API for geographic data
- **Attractions**: [Geoapify Places API](https://apidocs.geoapify.com/docs/places/) - Places and POI data
- **Place Details**: [Geoapify Place Details API](https://apidocs.geoapify.com/docs/place-details/) - Detailed information about specific places

## Geography API

### Key Functions

```typescript
import { 
  fetchCountries, 
  fetchAllCountries, 
  fetchCitiesByCountry,
  fetchAllCitiesByCountry,
  fetchCountryByISO2 
} from '@/lib/api/geography';

// Get all countries
const countries = await fetchAllCountries();

// Get countries by region
const europeanCountries = await fetchAllCountries({ region: "Europe" });

// Get a specific country
const country = await fetchCountryByISO2("US");

// Get cities for a country
const cities = await fetchAllCitiesByCountry({ 
  countryCode: "US", 
  limit: 50 
});
```

### Data Structures

```typescript
interface Country {
  id: number;
  name: string;
  iso2: string; // Two-letter code (US, GB, FR)
  iso3: string; // Three-letter code (USA, GBR, FRA)
  capital: string;
  currency: string;
  region: string; // Europe, Asia, etc.
  subregion: string;
  latitude: number;
  longitude: number;
  emoji: string; // Country flag emoji
}

interface City {
  id: number;
  name: string;
  state_code?: string;
  country_code: string;
  latitude?: number;
  longitude?: number;
}
```

## Attractions API

### Key Functions

```typescript
import { 
  fetchAttractionsList,
  fetchAttractionsByCountry,
  fetchAttractionsByCity
} from '@/lib/api/attractions';

// Get attractions for a city
const attractions = await fetchAttractionsList({
  city: "Paris",
  categories: "tourism.sights,tourism.attraction",
  limit: 20
});

// Get attractions for an entire country
const countryAttractions = await fetchAttractionsByCountry({
  countryISO2: "FR",
  maxCities: 10,
  attractionsPerCity: 5
});

// Get attractions for a specific city
const cityAttractions = await fetchAttractionsByCity({
  cityName: "Paris",
  countryISO2: "FR",
  limit: 20
});
```

### Attraction Categories

Common categories for the Geoapify Places API:
- `tourism.sights` - Tourist sights and landmarks
- `tourism.attraction` - Tourist attractions
- `entertainment` - Entertainment venues
- `catering.restaurant` - Restaurants
- `accommodation.hotel` - Hotels
- `sport.activity` - Sports activities

## Destinations API (Recommended)

The destinations API combines geography and attractions data for easier use in components.

### Key Functions

```typescript
import { 
  getDestinationCountriesByRegion,
  getDestinationCities,
  getCityAttractions,
  getPopularDestinations
} from '@/lib/api/destinations';

// For destinations page - countries grouped by region
const countriesByRegion = await getDestinationCountriesByRegion();

// For country page - cities in a country
const { country, cities } = await getDestinationCities({ 
  countryISO2: "FR" 
});

// For city page - attractions in a city
const { city, attractions } = await getCityAttractions({
  cityName: "Paris",
  countryISO2: "FR"
});

// For homepage - popular destinations with attractions
const featured = await getPopularDestinations({
  regions: ["Europe", "Asia"],
  citiesPerRegion: 3,
  attractionsPerCity: 5
});
```

## Route Structure

The new API supports this route structure for destinations:

```
/destinations                    → Show countries grouped by region
/destinations/[countryISO2]      → Show cities in a country
/destinations/[countryISO2]/[cityName] → Show attractions in a city
```

## Environment Variables

Make sure these environment variables are set:

```env
NEXT_PUBLIC_GEOAPIFY_API_KEY=your_geoapify_api_key
NEXT_PUBLIC_GEOAPIFY_API_BASE_URL=https://api.geoapify.com
NEXT_PUBLIC_GEOAPIFY_PLACES_ENDPOINT=/v2/places
NEXT_PUBLIC_GEOAPIFY_PLACE_DETAILS_ENDPOINT=/v2/place-details
NEXT_PUBLIC_GEOAPIFY_GEOCODE_SEARCH_ENDPOINT=/v1/geocode/search
```

## Usage Examples

### 1. Destinations Page Component

```tsx
'use client';
import { useEffect, useState } from 'react';
import { getDestinationCountriesByRegion } from '@/lib/api/destinations';

export default function DestinationsPage() {
  const [countriesByRegion, setCountriesByRegion] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await getDestinationCountriesByRegion();
      setCountriesByRegion(data);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <div>Loading destinations...</div>;

  return (
    <div>
      <h1>Destinations</h1>
      {Object.entries(countriesByRegion).map(([region, countries]) => (
        <div key={region}>
          <h2>{region}</h2>
          <div className="grid grid-cols-4 gap-4">
            {countries.map(country => (
              <a 
                key={country.iso2} 
                href={`/destinations/${country.iso2}`}
                className="p-4 border rounded hover:shadow-lg"
              >
                <span className="text-2xl">{country.emoji}</span>
                <h3>{country.name}</h3>
                <p>Capital: {country.capital}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### 2. Country Cities Page

```tsx
'use client';
import { useEffect, useState } from 'react';
import { getDestinationCities } from '@/lib/api/destinations';

export default function CountryPage({ params }: { params: { countryISO2: string } }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const result = await getDestinationCities({ countryISO2: params.countryISO2 });
      setData(result);
      setLoading(false);
    }
    loadData();
  }, [params.countryISO2]);

  if (loading) return <div>Loading cities...</div>;
  if (!data) return <div>Country not found</div>;

  return (
    <div>
      <h1>{data.country.name} {data.country.emoji}</h1>
      <h2>Cities</h2>
      <div className="grid grid-cols-3 gap-4">
        {data.cities.map(city => (
          <a 
            key={city.id}
            href={`/destinations/${params.countryISO2}/${city.name}`}
            className="p-4 border rounded hover:shadow-lg"
          >
            <h3>{city.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
```

### 3. City Attractions Page

```tsx
'use client';
import { useEffect, useState } from 'react';
import { getCityAttractions } from '@/lib/api/destinations';

export default function CityPage({ 
  params 
}: { 
  params: { countryISO2: string; cityName: string } 
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const result = await getCityAttractions({
        cityName: decodeURIComponent(params.cityName),
        countryISO2: params.countryISO2
      });
      setData(result);
      setLoading(false);
    }
    loadData();
  }, [params.cityName, params.countryISO2]);

  if (loading) return <div>Loading attractions...</div>;
  if (!data) return <div>City not found</div>;

  return (
    <div>
      <h1>Attractions in {data.city.name}</h1>
      <div className="grid grid-cols-2 gap-6">
        {data.attractions.map(attraction => (
          <div key={attraction.id} className="p-4 border rounded">
            <h3>{attraction.name}</h3>
            <p>{attraction.description}</p>
            <p><strong>Categories:</strong> {attraction.categories.join(', ')}</p>
            <p><strong>Address:</strong> {attraction.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Caching

All API functions include intelligent caching:
- **Geography data**: Cached for 24 hours (countries don't change often)
- **Attractions data**: Cached for 6 hours (attractions are relatively stable)
- **Popular destinations**: Cached for 12 hours

## Error Handling

All functions include proper error handling and will:
- Log errors to console for debugging
- Return empty arrays or null for missing data
- Handle network timeouts and API rate limits

## Migration from Old API

To migrate from the old destinations API:

1. Replace `getMockDestinations()` with `getDestinationCountriesByRegion()`
2. Update component data structures to use the new Country/City interfaces
3. Use the new route structure for navigation
4. Update any hardcoded destination data to use the dynamic APIs

## Performance Notes

- Use `limit` parameters to avoid fetching too much data
- The APIs handle pagination automatically when fetching all results
- Caching reduces API calls and improves performance
- Consider implementing loading states for better UX
