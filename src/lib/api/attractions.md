# Attractions Service Documentation

This file documents the attractions API service provided in `attractions.ts`.

## Overview

The Attractions Service handles tourist attractions and points of interest using the Geoapify Places API. It provides functionality to fetch detailed information about attractions, landmarks, and places of interest for travel planning.

## Data Sources

- **Primary API**: [Geoapify Place Details API](https://apidocs.geoapify.com/docs/place-details/)
- **Authentication**: API Key required (stored in environment variables)
- **Caching**: 5-minute TTL for all operations

## Environment Variables

```env
GEOAPIFY_API_BASE_URL=https://api.geoapify.com
GEOAPIFY_PLACE_DETAILS_ENDPOINT=/v2/place-details
GEOAPIFY_API_KEY=your_geoapify_api_key
```

## Interfaces

### GeoapifyPlaceDetails (External API Response)

```typescript
interface GeoapifyPlaceDetails {
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
  };
  geometry: {
    type: string;
    coordinates: number[] | number[][];
  };
}
```

### Attraction (Internal Application Interface)

```typescript
interface Attraction {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  categories: string[];
  description?: string;
  images?: string[];
  rawDataSource?: GeoapifyPlaceDetails;
}
```

## API Functions

### fetchAttractionDetailsById

```typescript
async function fetchAttractionDetailsById(
  placeId: string, 
  features: string = "details", 
  lang?: string
): Promise<Attraction | null>
```

**Purpose**: Retrieves detailed information about an attraction using its place ID.

**Parameters**:
- `placeId`: Unique identifier for the place
- `features` (optional): Type of features to include (default: "details")
- `lang` (optional): Language code for localized content

**Returns**: `Attraction` object or `null` if not found

**Caching**: Results cached with key `geoapify_place_details_id_{placeId}_features_{features}_lang_{lang}`

**Example**:
```typescript
// Get attraction details
const attraction = await fetchAttractionDetailsById('place123', 'details', 'en');

if (attraction) {
  console.log(`Found: ${attraction.name}`);
  console.log(`Location: ${attraction.city}, ${attraction.country}`);
  console.log(`Categories: ${attraction.categories.join(', ')}`);
  console.log(`Description: ${attraction.description}`);
}
```

### fetchAttractionDetailsByCoords

```typescript
async function fetchAttractionDetailsByCoords(
  lat: number, 
  lon: number, 
  features: string = "details", 
  lang?: string
): Promise<Attraction | null>
```

**Purpose**: Retrieves attraction details using geographic coordinates (reverse geocoding).

**Parameters**:
- `lat`: Latitude coordinate
- `lon`: Longitude coordinate  
- `features` (optional): Type of features to include (default: "details")
- `lang` (optional): Language code for localized content

**Returns**: `Attraction` object or `null` if not found

**Caching**: Results cached with key `geoapify_place_details_coords_{lat}_{lon}_features_{features}_lang_{lang}`

**Example**:
```typescript
// Get attraction at specific coordinates
const attraction = await fetchAttractionDetailsByCoords(
  40.7589, // Latitude (Times Square)
  -73.9851, // Longitude
  'details',
  'en'
);

if (attraction) {
  console.log(`Found attraction: ${attraction.name}`);
  console.log(`Address: ${attraction.address}`);
}
```

### fetchAttractionsList (Placeholder)

```typescript
async function fetchAttractionsList(
  categories?: string[], 
  bbox?: [number, number, number, number], 
  limit: number = 20, 
  lang?: string
): Promise<Attraction[]>
```

**Purpose**: Placeholder function for fetching lists of attractions (requires Geoapify Places API).

**Parameters**:
- `categories` (optional): Array of category filters (e.g., ["tourism.attraction"])
- `bbox` (optional): Bounding box [minLon, minLat, maxLon, maxLat]
- `limit` (optional): Maximum number of results (default: 20)
- `lang` (optional): Language code

**Returns**: Currently returns empty array (placeholder implementation)

**Note**: This function is a placeholder. To implement, you would need to:
1. Call Geoapify Places API for discovery
2. Get list of place IDs
3. Optionally call `fetchAttractionDetailsById` for each ID

## Data Transformation

### transformGeoapifyToAttraction

```typescript
function transformGeoapifyToAttraction(geoapifyData: GeoapifyPlaceDetails): Attraction
```

**Purpose**: Converts Geoapify API response to internal Attraction format.

**Transformation Logic**:
- **ID Generation**: Creates unique ID from data source and coordinates
- **Address Formatting**: Combines address lines and formatted address
- **Description**: Joins details array or provides fallback
- **Images**: Placeholder array (images not provided by place-details endpoint)

**ID Format**: `{sourcename}_{lat}_{lon}` or `geoapify_{lat}_{lon}`

**Example Transformation**:
```typescript
// Geoapify Input:
{
  properties: {
    name: "Statue of Liberty",
    formatted: "Liberty Island, New York, NY 10004, United States",
    city: "New York",
    country: "United States",
    lat: 40.6892,
    lon: -74.0445,
    categories: ["tourism.attraction", "tourism.sights"],
    details: ["National Monument", "UNESCO World Heritage Site"]
  }
}

// Transformed Output:
{
  id: "osm_40.6892_-74.0445",
  name: "Statue of Liberty",
  address: "Liberty Island, New York, NY 10004, United States",
  city: "New York",
  country: "United States",
  latitude: 40.6892,
  longitude: -74.0445,
  categories: ["tourism.attraction", "tourism.sights"],
  description: "National Monument, UNESCO World Heritage Site",
  images: [],
  rawDataSource: { /* full Geoapify response */ }
}
```

## Caching Strategy

### Cache Keys
- By ID: `geoapify_place_details_id_{placeId}_features_{features}_lang_{lang || "default"}`
- By Coordinates: `geoapify_place_details_coords_{lat}_{lon}_features_{features}_lang_{lang || "default"}`

### Cache TTL
- Default: 5 minutes for all operations
- Place details rarely change, so longer TTL could be considered

### Cache Management
```typescript
// Check cache manually
const cacheKey = `geoapify_place_details_id_${placeId}_features_details_lang_en`;
const cached = apiCache.get(cacheKey);

// Clear attraction-related cache
apiCache.clear();
```

## Error Handling

All functions implement comprehensive error handling:

```typescript
try {
  const data = await fetchAPI<GeoapifyPlaceDetails>(url);
  if (data && data.properties) {
    const attraction = transformGeoapifyToAttraction(data);
    apiCache.set(cacheKey, attraction);
    return attraction;
  }
  return null;
} catch (error) {
  console.error("Error fetching attraction details:", error);
  return null;
}
```

### Common Error Scenarios
- **Missing API credentials**: Returns null and logs error
- **Invalid place ID**: Returns null
- **Network failures**: Returns null
- **Invalid coordinates**: Returns null
- **API rate limiting**: Handled by base service rate limiting

## Usage Examples

### Single Attraction Lookup

```typescript
import { 
  fetchAttractionDetailsById, 
  fetchAttractionDetailsByCoords 
} from './attractions';

// Attraction detail component
const AttractionDetail = ({ placeId }) => {
  const [attraction, setAttraction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAttraction = async () => {
      const data = await fetchAttractionDetailsById(placeId, 'details', 'en');
      setAttraction(data);
      setLoading(false);
    };
    loadAttraction();
  }, [placeId]);

  if (loading) return <div>Loading attraction...</div>;
  if (!attraction) return <div>Attraction not found</div>;

  return (
    <div className="attraction-detail">
      <h1>{attraction.name}</h1>
      <p><strong>Address:</strong> {attraction.address}</p>
      <p><strong>City:</strong> {attraction.city}, {attraction.country}</p>
      <p><strong>Categories:</strong> {attraction.categories.join(', ')}</p>
      {attraction.description && (
        <p><strong>Description:</strong> {attraction.description}</p>
      )}
      <div className="coordinates">
        <p>Coordinates: {attraction.latitude}, {attraction.longitude}</p>
      </div>
    </div>
  );
};
```

### Map Integration

```typescript
// Map component with attraction details
const AttractionMap = ({ coordinates, onAttractionSelect }) => {
  const handleMapClick = async (lat, lon) => {
    const attraction = await fetchAttractionDetailsByCoords(lat, lon);
    if (attraction) {
      onAttractionSelect(attraction);
    }
  };

  return (
    <MapComponent
      center={coordinates}
      onClick={handleMapClick}
      markers={/* existing markers */}
    />
  );
};

// Usage
const TravelPlanner = () => {
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  return (
    <div className="travel-planner">
      <AttractionMap 
        coordinates={[40.7589, -73.9851]}
        onAttractionSelect={setSelectedAttraction}
      />
      {selectedAttraction && (
        <div className="selected-attraction">
          <h3>{selectedAttraction.name}</h3>
          <p>{selectedAttraction.description}</p>
          <button onClick={() => addToItinerary(selectedAttraction)}>
            Add to Itinerary
          </button>
        </div>
      )}
    </div>
  );
};
```

### Search Nearby Attractions

```typescript
// Custom hook for nearby attractions
const useNearbyAttractions = (userLocation, radius = 1000) => {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchNearby = async () => {
    setLoading(true);
    
    // Note: This would require Geoapify Places API, not place-details
    // This is a conceptual example
    try {
      const bbox = calculateBoundingBox(userLocation, radius);
      const results = await fetchAttractionsList(
        ['tourism.attraction'], 
        bbox, 
        20
      );
      setAttractions(results);
    } catch (error) {
      console.error('Failed to load nearby attractions:', error);
    } finally {
      setLoading(false);
    }
  };

  return { attractions, loading, searchNearby };
};

// Component usage
const NearbyAttractions = ({ userLocation }) => {
  const { attractions, loading, searchNearby } = useNearbyAttractions(userLocation);

  useEffect(() => {
    if (userLocation) {
      searchNearby();
    }
  }, [userLocation]);

  return (
    <div className="nearby-attractions">
      <h2>Nearby Attractions</h2>
      {loading && <div>Finding attractions...</div>}
      <div className="attractions-grid">
        {attractions.map(attraction => (
          <div key={attraction.id} className="attraction-card">
            <h3>{attraction.name}</h3>
            <p>{attraction.city}</p>
            <div className="categories">
              {attraction.categories.map(cat => (
                <span key={cat} className="category-tag">{cat}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Multi-language Support

```typescript
// Language-aware attraction lookup
const useAttractionWithLanguage = (placeId) => {
  const [language, setLanguage] = useState('en');
  const [attraction, setAttraction] = useState(null);

  const loadAttraction = async (lang) => {
    const data = await fetchAttractionDetailsById(placeId, 'details', lang);
    setAttraction(data);
  };

  useEffect(() => {
    loadAttraction(language);
  }, [placeId, language]);

  return { attraction, language, setLanguage };
};

// Component with language selector
const MultiLanguageAttraction = ({ placeId }) => {
  const { attraction, language, setLanguage } = useAttractionWithLanguage(placeId);

  return (
    <div className="multi-language-attraction">
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
      
      {attraction && (
        <div className="attraction-content">
          <h1>{attraction.name}</h1>
          <p>{attraction.description}</p>
        </div>
      )}
    </div>
  );
};
```

## API Limitations

### Current Implementation
- **Place Details Only**: Only supports fetching details for known place IDs or coordinates
- **No Discovery**: Cannot search for attractions by category or area (requires Geoapify Places API)
- **No Images**: Place details API doesn't provide images
- **Limited Language Support**: Depends on available translations in Geoapify

### Recommended Enhancements
1. **Integrate Geoapify Places API** for attraction discovery
2. **Add image service integration** (e.g., Unsplash, Google Places Photos)
3. **Implement full-text search** capabilities
4. **Add attraction ratings and reviews** integration
5. **Include opening hours and contact information**

## Performance Considerations

### Coordinate Precision
```typescript
// Round coordinates to reduce cache fragmentation
const roundCoordinate = (coord, precision = 4) => {
  return Math.round(coord * Math.pow(10, precision)) / Math.pow(10, precision);
};

const lat = roundCoordinate(40.758896, 4); // 40.7589
const lon = roundCoordinate(-73.985130, 4); // -73.9851
```

### Batch Operations
```typescript
// Fetch multiple attractions efficiently
const fetchMultipleAttractions = async (placeIds) => {
  const promises = placeIds.map(id => 
    fetchAttractionDetailsById(id).catch(() => null)
  );
  
  const results = await Promise.allSettled(promises);
  return results
    .filter(result => result.status === 'fulfilled' && result.value)
    .map(result => result.value);
};
```

### Memory Management
```typescript
// Implement cache size limits for long-running applications
class LimitedCache extends APICache {
  constructor(maxSize = 1000) {
    super();
    this.maxSize = maxSize;
    this.accessOrder = new Map();
  }

  set(key, data, ttl) {
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.accessOrder.keys().next().value;
      this.cache.delete(oldestKey);
      this.accessOrder.delete(oldestKey);
    }
    
    super.set(key, data, ttl);
    this.accessOrder.set(key, Date.now());
  }
}
```

## Security Considerations

- **API Key Protection**: Store Geoapify API key in environment variables
- **Rate Limiting**: Implement appropriate rate limiting to avoid API quota exhaustion
- **Input Validation**: Validate coordinates and place IDs before API calls
- **Error Information**: Don't expose API keys or internal error details to users

## Testing

### Unit Test Examples
```typescript
describe('Attractions Service', () => {
  beforeEach(() => {
    // Clear cache before each test
    apiCache.clear();
  });

  it('should fetch attraction by ID', async () => {
    const attraction = await fetchAttractionDetailsById('test-place-id');
    expect(attraction).toBeTruthy();
    expect(attraction.id).toBeDefined();
    expect(attraction.name).toBeDefined();
  });

  it('should return null for invalid ID', async () => {
    const attraction = await fetchAttractionDetailsById('invalid-id');
    expect(attraction).toBeNull();
  });

  it('should cache attraction data', async () => {
    const placeId = 'test-place-id';
    
    // First call
    await fetchAttractionDetailsById(placeId);
    
    // Check cache
    const cacheKey = `geoapify_place_details_id_${placeId}_features_details_lang_default`;
    const cached = apiCache.get(cacheKey);
    expect(cached).toBeTruthy();
  });

  it('should handle coordinate-based lookup', async () => {
    const attraction = await fetchAttractionDetailsByCoords(40.7589, -73.9851);
    expect(attraction?.latitude).toBeCloseTo(40.7589, 4);
    expect(attraction?.longitude).toBeCloseTo(-73.9851, 4);
  });
});
```

### Integration Testing
```typescript
// Test with real API (requires valid API key)
describe('Attractions API Integration', () => {
  it('should fetch real attraction data', async () => {
    if (!process.env.GEOAPIFY_API_KEY) {
      console.log('Skipping integration test - no API key');
      return;
    }

    const attraction = await fetchAttractionDetailsByCoords(
      40.6892, // Statue of Liberty
      -74.0445
    );

    expect(attraction).toBeTruthy();
    expect(attraction.name).toContain('Liberty');
    expect(attraction.categories).toContain('tourism.attraction');
  });
});
```

## Best Practices

1. **Always check for null returns** from attraction fetch operations
2. **Implement proper loading states** for async operations
3. **Use coordinate rounding** to improve cache hit rates
4. **Validate environment variables** on application startup
5. **Handle rate limiting** gracefully with appropriate delays
6. **Implement fallback data** for when APIs are unavailable
7. **Use TypeScript strictly** for type safety
8. **Log errors appropriately** without exposing sensitive information
9. **Consider implementing retry logic** for transient failures
10. **Monitor API usage** to avoid quota exhaustion

## Future Enhancements

1. **Places Search Integration**: Add Geoapify Places API for discovery
2. **Image Integration**: Connect with image services for attraction photos
3. **Reviews Integration**: Add review and rating capabilities
4. **Offline Support**: Cache frequently accessed attractions for offline use
5. **Advanced Filtering**: Support for multiple filters and search criteria
6. **Real-time Data**: Integration with live data for hours, events, etc.
