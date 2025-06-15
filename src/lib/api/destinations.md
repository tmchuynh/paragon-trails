# Destinations API Documentation

*Last Updated: June 15, 2025*

The destinations feature provides a comprehensive three-tier navigation system using real external APIs for dynamic travel data.

## 🗺️ Route Architecture

### 1. `/destinations` 
**Main Destinations Page**
- Displays all countries grouped by region (Europe, Asia, North America, etc.)
- Includes global search functionality for countries and cities
- Features responsive country cards with flags, capitals, and currency information
- **API**: `getDestinationCountriesByRegion()` from destinations API

### 2. `/destinations/[countryISO2]`
**Country Cities Page** 
- Shows all cities within a specific country using ISO2 country codes
- Example: `/destinations/US` displays cities in United States
- Includes city search functionality within the selected country
- Displays country metadata (capital, currency, phone code, region)
- **API**: `getDestinationCities({ countryISO2 })` from destinations API

### 3. `/destinations/[countryISO2]/[cityName]`
**City Attractions Page**
- Shows real-time attractions within a specific city
- Example: `/destinations/US/New York` displays attractions in New York City
- Advanced search and category-based filtering for attractions
- Detailed attraction information with contact details, hours, and websites
- **API**: `getCityAttractions({ cityName, countryISO2 })` from destinations API

## 🔌 Data Sources & APIs

### **Primary APIs**
- **GeographQL API** → Countries & Cities data via `/src/lib/api/geography.ts`
- **Geoapify Places API** → Real-time attractions data via `/src/lib/api/attractions.ts`
- **Destinations API** → Combined data orchestration via `/src/lib/api/destinations.ts`

### **Data Flow**
1. **Geography API** provides structured country/city hierarchy
2. **Attractions API** fetches real-time POI data with detailed metadata
3. **Destinations API** combines and transforms data for optimal UX

## 🚀 Navigation Flow

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   /destinations │───▶│/destinations/FR │───▶│/destinations/   │
│                 │    │                 │    │FR/Paris         │
│ All Countries   │    │ Cities in France│    │ Paris Attractions│
│ by Region       │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

1. **Start**: User browses countries grouped by region
2. **Select Country**: Click "France" → navigate to `/destinations/FR`
3. **Select City**: Click "Paris" → navigate to `/destinations/FR/Paris`
4. **Explore**: View real attractions with full details and booking options

## ✨ Feature Implementation Status

### Main Destinations Page (`/destinations`)
- ✅ **Regional Grouping**: Countries organized by geographic regions
- ✅ **Global Search**: Search across countries and major cities
- ✅ **Country Cards**: Flag, capital, currency, and basic information
- ✅ **Responsive Layout**: Grid system adapts to all screen sizes
- ✅ **Loading States**: Skeleton loaders during data fetch

### Country Page (`/destinations/[countryISO2]`)
- ✅ **Country Header**: Flag, name, and metadata display
- ✅ **City Search**: Filter cities within the selected country
- ✅ **City Cards**: State/province information and city details
- ✅ **Breadcrumb Navigation**: Clear navigation hierarchy
- ✅ **Error Handling**: Graceful fallbacks for invalid country codes

### City Attractions Page (`/destinations/[countryISO2]/[cityName]`)
- ✅ **City Header**: Location context and basic information
- ✅ **Attraction Search**: Real-time search across all attractions
- ✅ **Category Filtering**: Filter by attraction types and categories
- ✅ **Detailed Cards**: Comprehensive attraction information including:
  - Name, description, and categories
  - Complete address and contact information
  - Website links and social media
  - Google Maps integration with coordinates
  - Opening hours and availability
  - Photos and ratings (when available)
- ✅ **Add to Cart**: Direct booking integration with cart system

## Environment Variables Required

```env
NEXT_PUBLIC_GEOAPIFY_API_KEY=your_geoapify_api_key
NEXT_PUBLIC_GEOAPIFY_API_BASE_URL=https://api.geoapify.com
NEXT_PUBLIC_GEOAPIFY_PLACES_ENDPOINT=/v2/places
NEXT_PUBLIC_GEOAPIFY_PLACE_DETAILS_ENDPOINT=/v2/place-details
NEXT_PUBLIC_GEOAPIFY_GEOCODE_SEARCH_ENDPOINT=/v1/geocode/search
```

## ⚡ Performance Optimizations

### **Caching Strategy**
- ✅ **Countries Cache**: 24-hour TTL for country/region data
- ✅ **Cities Cache**: 12-hour TTL for city listings
- ✅ **Attractions Cache**: 6-hour TTL for POI data (more dynamic)
- ✅ **Search Cache**: 30-minute TTL for search results

### **User Experience**
- ✅ **Debounced Search**: 300ms delay to prevent excessive API calls
- ✅ **Loading Skeletons**: Smooth loading states for all components
- ✅ **Error Boundaries**: Graceful error handling with fallback UI
- ✅ **Pagination Support**: Efficient handling of large datasets
- ✅ **Infinite Scroll**: Seamless browsing experience for attractions

### **API Optimization**
- ✅ **Request Batching**: Combine multiple API calls where possible
- ✅ **Rate Limiting**: Respect API limits with built-in throttling
- ✅ **Retry Logic**: Automatic retry with exponential backoff
- ✅ **CDN Integration**: Static assets served from CDN

## 🌍 Example URLs & Use Cases

### Regional Exploration
- **`/destinations`** - Browse all countries by continent
- **`/destinations/US`** - Explore cities across United States
- **`/destinations/FR`** - Discover French cities and regions

### City-Specific Travel Planning
- **`/destinations/FR/Paris`** - Attractions in Paris, France
- **`/destinations/JP/Tokyo`** - Things to do in Tokyo, Japan
- **`/destinations/GB/London`** - London attractions and landmarks
- **`/destinations/IT/Rome`** - Historical sites and attractions in Rome
- **`/destinations/US/New York`** - NYC attractions and experiences

### Search & Discovery
- Search "beach" on `/destinations` → Find coastal destinations
- Search "museum" on `/destinations/US/New York` → NYC museums
- Filter by "Entertainment" → Concerts, shows, and events
