# Attractions Data Service

## Overview
The Attractions data service provides functionality to fetch and transform attraction data for the Paragon Trails application. This service transforms product data from the DummyJSON API into detailed attraction information suitable for tourism and travel applications.

## Service Architecture
- **Primary Data Source**: DummyJSON Products API via `ProductService`
- **Data Transformation**: Products are enhanced with attraction-specific metadata
- **Backward Compatibility**: Maintains legacy exports for existing components

## Exports

### Core Services
```typescript
export { ProductService } from "@/lib/api/services";
```

### Types
```typescript
export type { Attraction } from "@/lib/interfaces/services/attractions";
```

### Main Functions

#### `getMockAttractions()`
Fetches and transforms product data into comprehensive attraction objects.

**Returns**: `Promise<Attraction[]>`

**Usage**:
```typescript
const attractions = await getMockAttractions();
```

#### `getMockAttraction(id: string)`
Retrieves a single attraction by ID.

**Parameters**:
- `id`: Attraction ID (format: "ATT###")

**Returns**: `Promise<Attraction | null>`

**Usage**:
```typescript
const attraction = await getMockAttraction("ATT001");
```

### Legacy Exports
```typescript
export const mockAttractions = []; // Empty array for backward compatibility
export { getMockAttractions as mockAttractions_async };
```

## Data Transformation

### Product to Attraction Mapping
Each DummyJSON product is transformed into a detailed attraction with the following structure:

#### Basic Information
- **ID**: `ATT` + zero-padded product ID
- **Name**: Product title + " Attraction"
- **Type**: Random selection (Museum, Monument, Park, Gallery, Temple, Castle)
- **Category**: Product category
- **Description**: Enhanced with attraction-specific text

#### Location Details
```typescript
location: {
  address: "Central Location",
  city: "Tourist City", 
  country: "Various Countries",
  coordinates: { latitude, longitude },
  nearbyLandmarks: ["City Center", "Main Square", ...]
}
```

#### Operating Hours
Full week schedule with different weekend hours:
```typescript
operatingHours: {
  monday: { open: "09:00", close: "18:00" },
  tuesday: { open: "09:00", close: "18:00" },
  // ... rest of week
  saturday: { open: "10:00", close: "19:00" },
  sunday: { open: "10:00", close: "17:00" },
  holidays: "Closed on major holidays"
}
```

#### Pricing Structure
```typescript
pricing: {
  adult: number,
  child: number,
  senior: number,
  student: number,
  family: number,
  currency: "USD",
  freeEntry: boolean
}
```

#### Comprehensive Features
- **Features**: Audio guide, gift shop, café, accessibility, photography
- **Facilities**: Restrooms, parking, information desk, storage, first aid
- **Ratings**: Overall, accessibility, value, facilities (4-5 stars each)
- **Accessibility**: Wheelchair access, audio guide, braille signage, guide dogs

#### Visitor Information
```typescript
{
  estimatedDuration: "2-4 hours",
  bestTimeToVisit: "Year-round", 
  crowdLevel: "Low" | "Medium" | "High",
  languages: ["English", "Spanish", "French", "German"]
}
```

#### Policies
```typescript
policies: {
  photography: "Allowed" | "Restricted areas",
  food: "Not allowed inside",
  smoking: "Prohibited", 
  pets: "Service animals only"
}
```

### Example Attraction Object
```typescript
{
  id: "ATT001",
  name: "Ancient History Museum Attraction",
  type: "Museum",
  category: "cultural",
  description: "Discover ancient artifacts and historical treasures...",
  pricing: {
    adult: 25,
    child: 15,
    senior: 20,
    currency: "USD"
  },
  operatingHours: {
    monday: { open: "09:00", close: "18:00" }
    // ... full week schedule
  },
  features: ["Audio guide available", "Gift shop", "Café/Restaurant"],
  accessibility: {
    wheelchairAccessible: true,
    audioGuide: true,
    brailleSignage: false,
    guideDogs: true
  }
  // ... additional properties
}
```

## Key Features

### Rich Metadata
- Detailed operating hours for each day
- Comprehensive pricing tiers
- Accessibility information
- Visitor policies and guidelines

### Location Intelligence
- Geographic coordinates
- Nearby landmarks and attractions
- Transportation options
- Distance from city center

### Visitor Experience
- Estimated visit duration
- Best visiting times
- Crowd level indicators
- Available languages

### Practical Information
- Photography policies
- Food and beverage rules
- Pet policies
- Cancellation terms

## Migration Notes

### Enhanced Data Structure
- Significantly more detailed than basic product data
- Tourism-specific metadata added
- Realistic operating hours and pricing
- Comprehensive accessibility information

### API Integration
- Real product data as foundation
- Enhanced with tourism industry standards
- Maintains data consistency across refreshes

## Error Handling
- Graceful fallback for API failures
- Data validation during transformation
- Logging for debugging purposes

## Performance Considerations
- Transformation occurs in memory
- No persistence layer currently implemented
- Consider caching for production use

## Dependencies
- `@/lib/api/services` - ProductService
- `@/lib/interfaces/services/attractions` - Attraction type definitions

## Future Enhancements
- Integration with real attraction APIs (TripAdvisor, Google Places)
- Real-time availability and pricing
- User review integration
- Booking system integration
- Multi-language support
- Photo gallery management
