# Flights Data Service

## Overview
The Flights data service provides real-time flight data for the Paragon Trails application using the ADSB Database API. This service generates realistic flight information including routes, schedules, pricing, and aircraft details.

## Service Architecture
- **Primary Data Source**: ADSB Database API via `adsbService`
- **Fallback Services**: `ContactService` and `ProductService`
- **Data Generation**: Real flight data with enhanced travel-specific properties
- **Error Handling**: Comprehensive fallback to mock data when API is unavailable

## Exports

### Core Services
```typescript
export {
  adsbService,
  ContactService, 
  ProductService,
} from "@/lib/api/services";
```

### Types
```typescript
export type { Flight } from "@/lib/interfaces/services/flights";
```

### Main Functions

#### `getMockFlights()`
Generates flight data using ADSB Database API or fallback mock data.

**Returns**: `Promise<Flight[]>`

**Usage**:
```typescript
const flights = await getMockFlights();
```

### Legacy Exports
```typescript
export const mockFlights = []; // Empty array for backward compatibility
export { getMockFlights as mockFlights_async };
```

## Flight Data Generation

### ADSB API Integration
The service uses the ADSB Database API to generate realistic flight data:

```typescript
const generateFlightData = async (): Promise<Flight[]> => {
  const { adsbService } = await import("@/lib/api/services");
  
  try {
    console.log("Fetching real flight data from ADSB Database API...");
    return await adsbService.generateRandomFlights(25);
  } catch (error) {
    console.error("Error generating flight data from ADSB API:", error);
    return getFallbackFlights();
  }
};
```

### Flight Data Structure
Each flight object contains comprehensive information:

#### Basic Flight Information
```typescript
{
  id: "FL001",
  airline: "American Airlines",
  flightNumber: "AA1234",
  aircraft: "Boeing 737-800"
}
```

#### Route Information
```typescript
{
  origin: {
    code: "JFK",
    city: "New York", 
    airport: "John F. Kennedy International Airport",
    terminal: "Terminal 4"
  },
  destination: {
    code: "LAX",
    city: "Los Angeles",
    airport: "Los Angeles International Airport", 
    terminal: "Terminal 2"
  }
}
```

#### Schedule Details
```typescript
{
  departure: {
    date: "2025-06-20",
    time: "14:30",
    timezone: "UTC"
  },
  arrival: {
    date: "2025-06-20", 
    time: "17:45",
    timezone: "UTC"
  },
  duration: "6h 15m"
}
```

#### Pricing Structure
```typescript
{
  pricing: {
    economy: 299,
    business: 899,
    first: 1999,
    currency: "USD"
  },
  availability: {
    economy: 150,
    business: 20,
    first: 4
  }
}
```

#### Additional Features
```typescript
{
  amenities: ["WiFi", "Entertainment", "Meals", "Extra Legroom"],
  baggage: {
    carryOn: "1 piece (10kg)",
    checked: "2 pieces (23kg each)"
  },
  meal: "Standard" | "Vegetarian" | "Kosher" | "Halal",
  entertainment: ["Movies", "TV Shows", "Music", "Games"],
  rating: 4.5,
  reviews: 250,
  stops: 0, // 0-2 stops
  layovers: [
    {
      airport: "Denver International",
      duration: "1h 30m"
    }
  ]
}
```

## API Integration Details

### ADSB Service Features
- **Real Flight Data**: Actual flight routes and aircraft information
- **Random Generation**: Creates diverse flight options
- **Error Handling**: Graceful fallback when API is unavailable
- **Batch Processing**: Generates multiple flights efficiently

### Fallback Strategy
When the ADSB API is unavailable, the service provides realistic mock data:

```typescript
const getFallbackFlights = () => [
  {
    id: "FL001",
    airline: "American Airlines",
    flightNumber: "AA1000", 
    aircraft: "Boeing 737",
    origin: { code: "JFK", city: "New York" },
    destination: { code: "LAX", city: "Los Angeles" },
    // ... complete flight structure
  }
];
```

## Error Handling

### API Error Management
```typescript
try {
  return await adsbService.generateRandomFlights(25);
} catch (error) {
  console.error("Error generating flight data from ADSB API:", error);
  return getFallbackFlights();
}
```

### Logging Strategy
- API errors are logged for debugging
- Fallback usage is tracked
- Performance metrics can be collected

## Data Transformation

### ADSB to Flight Mapping
The `adsbService.generateRandomFlights()` method:
1. Fetches real aircraft and route data from ADSB API
2. Enhances with travel-specific properties
3. Generates realistic pricing and availability
4. Adds amenities and service information

### Realistic Data Generation
- **Routes**: Based on actual airport codes and distances
- **Aircraft**: Real aircraft models and specifications
- **Timing**: Realistic flight durations and schedules
- **Pricing**: Market-appropriate fare structures

## Performance Considerations

### API Efficiency
- Batch requests to ADSB API for better performance
- Configurable flight count (default: 25 flights)
- Caching potential for frequently requested routes

### Memory Management
- Flight data generated on-demand
- No persistent storage of flight data
- Consider caching for production use

## Migration Notes

### From Static to Real Data
- Previously used completely static mock data
- Now integrates with real aviation databases
- Maintains same interface for consuming components
- Enhanced realism improves user experience

### Backward Compatibility
- Components using `mockFlights` will get empty array
- Components using `getMockFlights()` will get API data
- Async nature requires proper promise handling

## Usage Examples

### Basic Flight Fetching
```typescript
import { getMockFlights } from '@/data/flights';

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  
  useEffect(() => {
    getMockFlights().then(setFlights);
  }, []);
  
  return (
    <div>
      {flights.map(flight => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
};
```

### Flight Search and Filtering
```typescript
// Filter by route
const getFlightsByRoute = async (origin: string, destination: string) => {
  const flights = await getMockFlights();
  return flights.filter(flight => 
    flight.origin.code === origin && 
    flight.destination.code === destination
  );
};

// Filter by airline
const getFlightsByAirline = async (airline: string) => {
  const flights = await getMockFlights();
  return flights.filter(flight => flight.airline === airline);
};
```

## Dependencies
- `@/lib/api/services` - adsbService, ContactService, ProductService
- `@/lib/interfaces/services/flights` - Flight type definitions
- ADSB Database API - External aviation data source

## Future Enhancements

### Real-time Features
- **Live Flight Status**: Delays, cancellations, gate changes
- **Price Tracking**: Historical pricing and trends
- **Seat Selection**: Real-time seat availability
- **Check-in Integration**: Boarding pass generation

### Advanced Search
- **Multi-city Routes**: Complex itineraries
- **Flexible Dates**: Price comparison across date ranges
- **Airline Preferences**: Loyalty program integration
- **Class Upgrades**: Bid and upgrade opportunities

### Integration Improvements
- **Booking Systems**: Direct airline API integration
- **Payment Processing**: Secure payment handling
- **Travel Documents**: Passport and visa requirements
- **Notifications**: Flight alerts and updates

## Testing Strategy
- Mock ADSB API responses for unit tests
- Integration tests with actual ADSB API
- Fallback scenario testing
- Performance testing with large flight datasets
- Error handling validation
