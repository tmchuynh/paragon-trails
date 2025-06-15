# ADSB Service Documentation

This file documents the ADSB (Automatic Dependent Surveillance-Broadcast) service provided in `services/adsbService.ts`.

## Overview

The ADSB Service integrates with the ADSB Database API to provide real-time aircraft, flight route, and airline data for flight-related features in the Paragon Trails application. It generates realistic flight data by combining real aviation data with fallback information.

## Data Source

- **API**: [ADSB Database API](https://www.adsbdb.com/?ref=public_apis&utm_medium=website)
- **Base URL**: `https://api.adsbdb.com/v0`
- **Caching**: 5-minute TTL for all operations
- **Rate Limiting**: Built-in caching to reduce API calls

## Interfaces

### ADSBAircraft

```typescript
interface ADSBAircraft {
  type: string;                                    // Aircraft type (e.g., "Boeing 737-800")
  icao_type: string;                              // ICAO aircraft type code
  manufacturer: string;                           // Aircraft manufacturer
  mode_s: string;                                 // Mode S transponder code
  registration: string;                           // Aircraft registration (tail number)
  registered_owner_country_iso_name: string;      // Owner country ISO code
  registered_owner_country_name: string;          // Owner country name
  registered_owner_operator_flag_code: string;    // Operator flag code
  registered_owner: string;                       // Owner/operator name
  url_photo: string | null;                       // Aircraft photo URL
  url_photo_thumbnail: string | null;             // Thumbnail photo URL
}
```

### ADSBFlightRoute

```typescript
interface ADSBFlightRoute {
  callsign: string;                               // Flight callsign
  callsign_icao: string;                         // ICAO callsign
  callsign_iata: string;                         // IATA callsign
  airline: {
    name: string;                                // Airline name
    icao: string;                               // ICAO airline code
    iata: string;                               // IATA airline code
    country: string;                            // Airline country
    country_iso: string;                        // Country ISO code
    callsign: string;                           // Airline callsign
  };
  origin: {
    country_iso_name: string;
    country_name: string;
    elevation: number;
    iata_code: string;                          // Airport IATA code
    icao_code: string;                          // Airport ICAO code
    latitude: number;
    longitude: number;
    municipality: string;                       // City name
    name: string;                              // Airport name
  };
  destination: {
    // Same structure as origin
    country_iso_name: string;
    country_name: string;
    elevation: number;
    iata_code: string;
    icao_code: string;
    latitude: number;
    longitude: number;
    municipality: string;
    name: string;
  };
}
```

### ADSBAirline

```typescript
interface ADSBAirline {
  name: string;                                   // Airline name
  icao: string;                                  // ICAO code
  iata: string | null;                           // IATA code (optional)
  country: string;                               // Country name
  country_iso: string;                           // Country ISO code
  callsign: string;                              // Radio callsign
}
```

## Core Methods

### getAircraft

```typescript
async getAircraft(identifier: string): Promise<ADSBAircraft | null>
```

**Purpose**: Fetches aircraft information by Mode S code or registration number.

**Parameters**:
- `identifier`: Aircraft Mode S code (e.g., "3D325C") or registration (e.g., "N12345")

**Returns**: Aircraft details or `null` if not found

**Caching**: 5-minute cache with key `aircraft_{identifier}`

**Example**:
```typescript
// Get aircraft by registration
const aircraft = await adsbService.getAircraft('N12345');
if (aircraft) {
  console.log(`Aircraft: ${aircraft.type}`);
  console.log(`Owner: ${aircraft.registered_owner}`);
  console.log(`Country: ${aircraft.registered_owner_country_name}`);
}

// Get aircraft by Mode S code
const aircraftByModeS = await adsbService.getAircraft('3D325C');
```

### getFlightRoute

```typescript
async getFlightRoute(callsign: string): Promise<ADSBFlightRoute | null>
```

**Purpose**: Fetches flight route information by aircraft callsign.

**Parameters**:
- `callsign`: Flight callsign (e.g., "SAS2168", "BAW123")

**Returns**: Flight route details or `null` if not found

**Caching**: 5-minute cache with key `callsign_{callsign}`

**Example**:
```typescript
// Get flight route
const route = await adsbService.getFlightRoute('SAS2168');
if (route) {
  console.log(`Flight: ${route.callsign}`);
  console.log(`Airline: ${route.airline.name}`);
  console.log(`Route: ${route.origin.iata_code} → ${route.destination.iata_code}`);
  console.log(`Origin: ${route.origin.name}, ${route.origin.municipality}`);
  console.log(`Destination: ${route.destination.name}, ${route.destination.municipality}`);
}
```

### getAirline

```typescript
async getAirline(airlineCode: string): Promise<ADSBAirline | null>
```

**Purpose**: Fetches airline information by airline code.

**Parameters**:
- `airlineCode`: ICAO or IATA airline code (e.g., "SAS", "BAW", "DLH")

**Returns**: Airline details or `null` if not found

**Caching**: 5-minute cache with key `airline_{airlineCode}`

**Example**:
```typescript
// Get airline information
const airline = await adsbService.getAirline('SAS');
if (airline) {
  console.log(`Airline: ${airline.name}`);
  console.log(`Country: ${airline.country}`);
  console.log(`ICAO: ${airline.icao}, IATA: ${airline.iata}`);
  console.log(`Callsign: ${airline.callsign}`);
}
```

## Flight Generation

### generateRandomFlights

```typescript
async generateRandomFlights(count: number = 20): Promise<any[]>
```

**Purpose**: Generates realistic flight data by combining real ADSB data with fallback information.

**Parameters**:
- `count`: Number of flights to generate (default: 20)

**Returns**: Array of comprehensive flight objects with pricing, availability, and amenities

**Process**:
1. Fetches real aircraft data from predefined identifiers
2. Fetches real flight routes from predefined callsigns  
3. Fetches real airline data from predefined codes
4. Combines real data with generated travel booking information
5. Creates fallback data when real data is unavailable

**Generated Flight Object Structure**:
```typescript
{
  id: string;                                     // Flight ID (FL001, FL002, etc.)
  airline: string;                               // Airline name
  flightNumber: string;                          // Flight number
  aircraft: string;                              // Aircraft type
  origin: {
    code: string;                               // Airport IATA code
    city: string;                               // City name
    airport: string;                            // Airport name
    terminal: string;                           // Terminal information
  };
  destination: {
    code: string;
    city: string;
    airport: string;
    terminal: string;
  };
  departure: {
    date: string;                              // ISO date
    time: string;                              // HH:MM format
    timezone: string;                          // Timezone
  };
  arrival: {
    date: string;
    time: string;
    timezone: string;
  };
  duration: string;                            // Flight duration (e.g., "8h 45m")
  pricing: {
    economy: number;                           // Economy class price
    business: number;                          // Business class price
    first: number;                             // First class price
    currency: string;                          // Currency code
  };
  availability: {
    economy: number;                           // Available economy seats
    business: number;                          // Available business seats
    first: number;                             // Available first class seats
  };
  amenities: string[];                         // Flight amenities
  baggage: {
    carryOn: string;                          // Carry-on allowance
    checked: string;                          // Checked baggage allowance
  };
  meal: string;                               // Meal type
  entertainment: string[];                     // Entertainment options
  rating: number;                             // Flight rating (4-5)
  reviews: number;                            // Number of reviews
  stops: number;                              // Number of stops
  layovers?: Array<{                          // Layover information (if any)
    airport: string;
    duration: string;
  }>;
}
```

**Example**:
```typescript
// Generate flights for booking system
const flights = await adsbService.generateRandomFlights(25);

// Display flight options
flights.forEach(flight => {
  console.log(`${flight.flightNumber}: ${flight.origin.code} → ${flight.destination.code}`);
  console.log(`Departure: ${flight.departure.date} ${flight.departure.time}`);
  console.log(`Aircraft: ${flight.aircraft}`);
  console.log(`Economy: $${flight.pricing.economy}`);
  console.log(`Duration: ${flight.duration}`);
  console.log('---');
});
```

## Predefined Data Sets

The service uses curated lists of real aircraft identifiers, callsigns, and airline codes:

### Aircraft Identifiers
```typescript
// Mix of Mode S codes and registrations
[
  "N12345", "G-ABCD", "D-ERIA", "F-GKXY", "JA123A",
  "VH-ABC", "C-GABC", "PH-ABC", "OE-ABC", "SE-ABC",
  "3D325C", "406B2C", "4B1234", "A12345", "B23456"
]
```

### Flight Callsigns
```typescript
// Real airline callsigns
[
  "SAS2168", "BAW123", "DLH456", "AFR789", "KLM012",
  "UAE345", "QFA678", "SWR901", "AUA234", "LOT567",
  "AAL890", "UAL123", "DAL456", "SWA789", "JBU012"
]
```

### Airline Codes
```typescript
// ICAO airline codes
[
  "SAS", "BAW", "DLH", "AFR", "KLM",
  "UAE", "QFA", "SWR", "AUA", "LOT",
  "AAL", "UAL", "DAL", "SWA", "JBU"
]
```

## Caching Implementation

### Cache Strategy
```typescript
private async fetchWithCache<T>(url: string, cacheKey: string): Promise<T | null> {
  // Check cache first
  const cached = this.cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
    return cached.data;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json();
    
    // Store in cache
    this.cache.set(cacheKey, {
      data,
      timestamp: Date.now(),
    });
    
    return data;
  } catch (error) {
    console.error('ADSB API error:', error);
    return null;
  }
}
```

### Cache Management
- **TTL**: 5 minutes (300,000ms)
- **Storage**: In-memory Map
- **Automatic Cleanup**: Expired entries are automatically removed on access

## Usage Examples

### Flight Search Component

```typescript
import { adsbService } from './services/adsbService';

const FlightSearch = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const searchFlights = async () => {
    setLoading(true);
    try {
      // Generate flights (in real app, you'd filter by origin/destination)
      const allFlights = await adsbService.generateRandomFlights(50);
      
      // Filter flights based on search criteria
      const filteredFlights = allFlights.filter(flight => 
        (!origin || flight.origin.code.includes(origin.toUpperCase())) &&
        (!destination || flight.destination.code.includes(destination.toUpperCase()))
      );
      
      setFlights(filteredFlights);
    } catch (error) {
      console.error('Flight search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flight-search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Origin (e.g., JFK)"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination (e.g., LHR)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={searchFlights} disabled={loading}>
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </div>

      <div className="flight-results">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <div className="flight-header">
              <h3>{flight.flightNumber}</h3>
              <span className="airline">{flight.airline}</span>
            </div>
            
            <div className="flight-route">
              <div className="origin">
                <strong>{flight.origin.code}</strong>
                <span>{flight.origin.city}</span>
                <span>{flight.departure.time}</span>
              </div>
              <div className="duration">
                <span>{flight.duration}</span>
                {flight.stops > 0 && <span>{flight.stops} stops</span>}
              </div>
              <div className="destination">
                <strong>{flight.destination.code}</strong>
                <span>{flight.destination.city}</span>
                <span>{flight.arrival.time}</span>
              </div>
            </div>

            <div className="flight-details">
              <span className="aircraft">{flight.aircraft}</span>
              <span className="price">From ${flight.pricing.economy}</span>
              <span className="rating">{flight.rating}★ ({flight.reviews})</span>
            </div>

            <div className="amenities">
              {flight.amenities.map(amenity => (
                <span key={amenity} className="amenity-tag">{amenity}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Real-time Flight Tracker

```typescript
import { adsbService } from './services/adsbService';

const FlightTracker = () => {
  const [aircraft, setAircraft] = useState(null);
  const [route, setRoute] = useState(null);
  const [callsign, setCallsign] = useState('');

  const trackFlight = async (flightCallsign) => {
    try {
      // Get flight route information
      const routeData = await adsbService.getFlightRoute(flightCallsign);
      setRoute(routeData);

      if (routeData) {
        // Try to get aircraft information (if available)
        // Note: You'd need aircraft registration/Mode S from another source
        console.log(`Tracking flight: ${routeData.callsign}`);
        console.log(`Airline: ${routeData.airline.name}`);
        console.log(`Route: ${routeData.origin.name} → ${routeData.destination.name}`);
      }
    } catch (error) {
      console.error('Flight tracking failed:', error);
    }
  };

  return (
    <div className="flight-tracker">
      <div className="tracker-input">
        <input
          type="text"
          placeholder="Enter flight callsign (e.g., SAS2168)"
          value={callsign}
          onChange={(e) => setCallsign(e.target.value)}
        />
        <button onClick={() => trackFlight(callsign)}>
          Track Flight
        </button>
      </div>

      {route && (
        <div className="flight-info">
          <h2>Flight Information</h2>
          <div className="basic-info">
            <p><strong>Callsign:</strong> {route.callsign}</p>
            <p><strong>Airline:</strong> {route.airline.name} ({route.airline.iata})</p>
            <p><strong>Country:</strong> {route.airline.country}</p>
          </div>

          <div className="route-info">
            <h3>Route</h3>
            <div className="airports">
              <div className="origin">
                <h4>Origin</h4>
                <p><strong>{route.origin.iata_code}</strong> - {route.origin.name}</p>
                <p>{route.origin.municipality}, {route.origin.country_name}</p>
                <p>Elevation: {route.origin.elevation}ft</p>
              </div>
              
              <div className="destination">
                <h4>Destination</h4>
                <p><strong>{route.destination.iata_code}</strong> - {route.destination.name}</p>
                <p>{route.destination.municipality}, {route.destination.country_name}</p>
                <p>Elevation: {route.destination.elevation}ft</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
```

### Aircraft Database Browser

```typescript
import { adsbService } from './services/adsbService';

const AircraftBrowser = () => {
  const [aircraft, setAircraft] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const loadAircraftData = async () => {
    setLoading(true);
    try {
      // Get sample of aircraft data
      const identifiers = ['N12345', 'G-ABCD', 'D-ERIA', 'F-GKXY', 'JA123A'];
      const aircraftPromises = identifiers.map(id => 
        adsbService.getAircraft(id).catch(() => null)
      );
      
      const aircraftData = await Promise.all(aircraftPromises);
      const validAircraft = aircraftData.filter(Boolean);
      setAircraft(validAircraft);
    } catch (error) {
      console.error('Failed to load aircraft data:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchAircraft = async () => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    try {
      const result = await adsbService.getAircraft(searchTerm.trim());
      if (result) {
        setAircraft([result]);
      } else {
        setAircraft([]);
      }
    } catch (error) {
      console.error('Aircraft search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAircraftData();
  }, []);

  return (
    <div className="aircraft-browser">
      <div className="search-section">
        <h2>Aircraft Database</h2>
        <div className="search-form">
          <input
            type="text"
            placeholder="Enter registration (N12345) or Mode S code"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={searchAircraft}>Search</button>
          <button onClick={loadAircraftData}>Load Sample Data</button>
        </div>
      </div>

      {loading && <div>Loading aircraft data...</div>}

      <div className="aircraft-grid">
        {aircraft.map((plane, index) => (
          <div key={plane.mode_s || index} className="aircraft-card">
            {plane.url_photo_thumbnail && (
              <img 
                src={plane.url_photo_thumbnail} 
                alt={`${plane.type}`}
                className="aircraft-photo"
              />
            )}
            
            <div className="aircraft-details">
              <h3>{plane.type}</h3>
              <p><strong>Registration:</strong> {plane.registration}</p>
              <p><strong>Mode S:</strong> {plane.mode_s}</p>
              <p><strong>Manufacturer:</strong> {plane.manufacturer}</p>
              <p><strong>Owner:</strong> {plane.registered_owner}</p>
              <p><strong>Country:</strong> {plane.registered_owner_country_name}</p>
              
              {plane.url_photo && (
                <a href={plane.url_photo} target="_blank" rel="noopener noreferrer">
                  View Full Photo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {aircraft.length === 0 && !loading && (
        <div className="no-results">
          No aircraft data found. Try searching for a specific registration or Mode S code.
        </div>
      )}
    </div>
  );
};
```

## Error Handling

### API Error Management
```typescript
// All methods implement comprehensive error handling
try {
  const response = await this.fetchWithCache<any>(url, cacheKey);
  return response?.response?.aircraft || null;
} catch (error) {
  console.error('ADSB API error:', error);
  return null; // Graceful degradation
}
```

### Fallback Data Generation
```typescript
// When real data is unavailable, generate realistic fallbacks
private createFallbackFlight(index: number): any {
  return {
    id: `FL${index.toString().padStart(3, "0")}`,
    airline: `Airline ${index}`,
    flightNumber: `XX${1000 + index}`,
    aircraft: "Boeing 737-800", // Default aircraft type
    // ... other fallback properties
  };
}
```

## Performance Considerations

- **Caching**: 5-minute cache reduces API calls and improves response times
- **Batch Processing**: Flight generation processes multiple API calls efficiently
- **Error Recovery**: Graceful degradation when APIs are unavailable
- **Rate Limiting**: Built-in caching helps respect API rate limits

## Best Practices

1. **Always handle null returns** from API methods
2. **Implement loading states** for user interfaces
3. **Cache results appropriately** to reduce API usage
4. **Use realistic identifiers** when testing
5. **Provide fallback data** for better user experience
6. **Monitor API usage** to avoid rate limiting
7. **Handle network errors** gracefully
8. **Log errors appropriately** without exposing sensitive data

## API Limitations

- **Data Availability**: Not all aircraft/flights have complete data
- **Real-time Updates**: Data may not reflect current flight status
- **Geographic Coverage**: Coverage varies by region
- **Rate Limits**: API may have usage restrictions
- **Photos**: Aircraft photos may not be available for all aircraft

## Future Enhancements

1. **Real-time Tracking**: Integrate live flight tracking data
2. **Flight Status**: Add departure/arrival status information
3. **Airport Data**: Enhanced airport information and services
4. **Weather Integration**: Include weather data for flight routes
5. **Historical Data**: Access to historical flight information
6. **Notifications**: Real-time flight status notifications
