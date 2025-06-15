# Destinations Route Structure

The destinations feature now uses the new Geography and Attractions APIs with the following route structure:

## Routes

### 1. `/destinations` 
**Main Destinations Page**
- Shows all countries grouped by region (Europe, Asia, North America, etc.)
- Includes search functionality for countries and cities
- Uses: `getDestinationCountriesByRegion()` from destinations API

### 2. `/destinations/[countryISO2]`
**Country Cities Page** 
- Shows all cities within a specific country
- Example: `/destinations/US` shows cities in United States
- Includes search functionality for cities within the country
- Shows country information (capital, currency, phone code)
- Uses: `getDestinationCities({ countryISO2 })` from destinations API

### 3. `/destinations/[countryISO2]/[cityName]`
**City Attractions Page**
- Shows all attractions within a specific city
- Example: `/destinations/US/New York` shows attractions in New York
- Includes search and category filtering for attractions
- Shows detailed attraction information with contact details
- Uses: `getCityAttractions({ cityName, countryISO2 })` from destinations API

## Data Sources

- **Countries & Cities**: GeographQL API via `/src/lib/api/geography.ts`
- **Attractions**: Geoapify Places API via `/src/lib/api/attractions.ts`
- **Combined Data**: Destinations API via `/src/lib/api/destinations.ts`

## Navigation Flow

1. User starts at `/destinations` and sees all countries by region
2. User clicks on a country (e.g., "France") → goes to `/destinations/FR`
3. User sees all cities in France and clicks on a city (e.g., "Paris") → goes to `/destinations/FR/Paris`
4. User sees all attractions in Paris with detailed information

## Features

### Main Destinations Page
- ✅ Countries grouped by region
- ✅ Search across countries and cities
- ✅ Country cards with flag, capital, currency info
- ✅ Responsive grid layout

### Country Page
- ✅ Country header with flag and basic info
- ✅ Search cities within country
- ✅ City cards with state/province info
- ✅ Breadcrumb navigation

### City Page  
- ✅ City header with location info
- ✅ Search and filter attractions
- ✅ Category-based filtering
- ✅ Detailed attraction cards with:
  - Name and description
  - Address and contact info
  - Website links
  - Google Maps integration
  - Opening hours
  - Categories/tags

## Environment Variables Required

```env
NEXT_PUBLIC_GEOAPIFY_API_KEY=your_geoapify_api_key
NEXT_PUBLIC_GEOAPIFY_API_BASE_URL=https://api.geoapify.com
NEXT_PUBLIC_GEOAPIFY_PLACES_ENDPOINT=/v2/places
NEXT_PUBLIC_GEOAPIFY_PLACE_DETAILS_ENDPOINT=/v2/place-details
NEXT_PUBLIC_GEOAPIFY_GEOCODE_SEARCH_ENDPOINT=/v1/geocode/search
```

## Performance Optimizations

- ✅ API response caching (24h for countries, 6h for attractions)
- ✅ Debounced search (300ms delay)
- ✅ Loading skeletons
- ✅ Error boundaries and fallbacks
- ✅ Pagination support for large datasets

## Deprecated Routes

The old route structure has been replaced:
- ❌ `/destinations/[destination]/attractions` → Now `/destinations/[countryISO2]/[cityName]`

## Example URLs

- `/destinations` - All countries
- `/destinations/US` - Cities in United States  
- `/destinations/FR` - Cities in France
- `/destinations/FR/Paris` - Attractions in Paris
- `/destinations/JP/Tokyo` - Attractions in Tokyo
- `/destinations/GB/London` - Attractions in London
