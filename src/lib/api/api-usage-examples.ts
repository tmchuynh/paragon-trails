/**
 * Example usage of the new geography and destinations API
 * 
 * This file demonstrates how to use the new APIs to:
 * 1. Fetch countries and cities from the GraphQL API
 * 2. Get attractions for destinations using Geoapify
 * 3. Build destination pages with cities and attractions
 * 
 * IMPLEMENTED ROUTES:
 * - /destinations → Countries by region (✅ IMPLEMENTED)
 * - /destinations/[countryISO2] → Cities in country (✅ IMPLEMENTED)
 * - /destinations/[countryISO2]/[cityName] → Attractions in city (✅ IMPLEMENTED)
 */

import {
  getCityAttractions,
  getDestinationCities,
  getDestinationCountriesByRegion,
  getPopularDestinations,
} from "@/lib/api/destinations";

// Example: Get all countries grouped by region for destinations page
export async function getDestinationsPageData() {
  try {
    const countriesByRegion = await getDestinationCountriesByRegion();
    return countriesByRegion;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return {};
  }
}

// Example: Get cities for a specific country (when user clicks on a country)
export async function getCountryPageData(countryISO2: string) {
  try {
    const { country, cities } = await getDestinationCities({
      countryISO2,
      limit: 50,
    });

    return {
      country,
      cities: cities.map((city) => ({
        id: city.id,
        name: city.name,
        state_code: city.state_code,
        latitude: city.latitude,
        longitude: city.longitude,
      })),
    };
  } catch (error) {
    console.error(`Error fetching cities for country ${countryISO2}:`, error);
    return null;
  }
}

// Example: Get attractions for a specific city (when user clicks on a city)
export async function getCityPageData(cityName: string, countryISO2: string) {
  try {
    const { city, attractions } = await getCityAttractions({
      cityName,
      countryISO2,
      limit: 20,
      categories: "tourism.sights,tourism.attraction",
    });

    if (!city) {
      return null;
    }

    return {
      city,
      attractions: attractions.map((attraction) => ({
        id: attraction.id,
        name: attraction.name,
        address: attraction.address,
        categories: attraction.categories,
        description: attraction.description,
        latitude: attraction.latitude,
        longitude: attraction.longitude,
        website: attraction.website,
        phone: attraction.phone,
        opening_hours: attraction.opening_hours,
      })),
    };
  } catch (error) {
    console.error(
      `Error fetching attractions for ${cityName}, ${countryISO2}:`,
      error
    );
    return null;
  }
}

// Example: Get featured destinations for homepage
export async function getFeaturedDestinations() {
  try {
    const destinations = await getPopularDestinations({
      regions: ["Europe", "Asia", "North America"],
      citiesPerRegion: 3,
      attractionsPerCity: 5,
    });

    return destinations.map((destination) => ({
      country: {
        name: destination.country.name,
        iso2: destination.country.iso2,
        emoji: destination.country.emoji,
        region: destination.country.region,
      },
      city: {
        name: destination.city.name,
        latitude: destination.city.latitude,
        longitude: destination.city.longitude,
      },
      attractionsCount: destination.attractions.length,
      topAttractions: destination.attractions.slice(0, 3).map((attr) => ({
        name: attr.name,
        categories: attr.categories,
      })),
    }));
  } catch (error) {
    console.error("Error fetching featured destinations:", error);
    return [];
  }
}

// Route structure for destinations:
// /destinations - Show all countries grouped by region
// /destinations/[countryISO2] - Show cities in a country
// /destinations/[countryISO2]/[cityName] - Show attractions in a city

// Component usage examples:

// 1. Destinations Page Component
/*
'use client';
import { useEffect, useState } from 'react';
import { getDestinationsPageData } from './api-usage-examples';

export default function DestinationsPage() {
  const [countriesByRegion, setCountriesByRegion] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await getDestinationsPageData();
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
*/

// 2. Country Page Component
/*
'use client';
import { useEffect, useState } from 'react';
import { getCountryPageData } from './api-usage-examples';

export default function CountryPage({ params }: { params: { countryISO2: string } }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const result = await getCountryPageData(params.countryISO2);
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
      <p>Capital: {data.country.capital}</p>
      <p>Region: {data.country.region}</p>
      
      <h2>Cities</h2>
      <div className="grid grid-cols-3 gap-4">
        {data.cities.map(city => (
          <a 
            key={city.id}
            href={`/destinations/${params.countryISO2}/${city.name}`}
            className="p-4 border rounded hover:shadow-lg"
          >
            <h3>{city.name}</h3>
            {city.state_code && <p>State: {city.state_code}</p>}
          </a>
        ))}
      </div>
    </div>
  );
}
*/

// 3. City Attractions Page Component
/*
'use client';
import { useEffect, useState } from 'react';
import { getCityPageData } from './api-usage-examples';

export default function CityPage({ 
  params 
}: { 
  params: { countryISO2: string; cityName: string } 
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const result = await getCityPageData(
        decodeURIComponent(params.cityName), 
        params.countryISO2
      );
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
            {attraction.website && (
              <a href={attraction.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            )}
            {attraction.phone && <p><strong>Phone:</strong> {attraction.phone}</p>}
            {attraction.opening_hours && (
              <p><strong>Hours:</strong> {attraction.opening_hours}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
*/
