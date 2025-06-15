# Activities Data Service

*Last Updated: June 15, 2025*

## 🎯 Overview
The Activities data service provides functionality to fetch and transform activity data for the Paragon Trails application. This service has been fully migrated from static mock data to dynamic API-driven data using the DummyJSON products API, providing real-time activity information with rich metadata.

## 🏗️ Service Architecture
- **Primary Data Source**: DummyJSON Products API via `ProductService`
- **Data Transformation**: Products are intelligently transformed into activity objects with travel-specific properties
- **Category Mapping**: Product categories mapped to travel activity types
- **Pricing Integration**: Dynamic pricing with currency conversion support
- **Backward Compatibility**: Maintains legacy exports for existing components

## 📦 Exports

### Core Services
```typescript
export { ProductService } from "@/lib/api/services";
```

### Types & Interfaces
```typescript
export type { Activity } from "@/lib/interfaces/services/activities";
```

### Main Functions

#### `getMockActivities()`
Fetches and transforms product data into comprehensive activity objects.

**Returns**: `Promise<Activity[]>`

**Features**:
- Real-time data from DummyJSON API
- Intelligent category mapping (Electronics → Adventure, etc.)
- Price transformation and currency support
- Image optimization and gallery creation
- Location assignment based on product metadata

**Usage**:
```typescript
const activities = await getMockActivities();
```

#### `getMockActivity(id: string)`
Retrieves a single activity by ID.

**Parameters**:
- `id`: Activity ID (format: "ACT###")

**Returns**: `Promise<Activity | null>`

**Usage**:
```typescript
const activity = await getMockActivity("ACT001");
```

### Legacy Exports
```typescript
export const mockActivities = []; // Empty array for backward compatibility
export { getMockActivities as mockActivities_async };
```

## Data Transformation

### Product to Activity Mapping
Each DummyJSON product is transformed into an activity with the following structure:

- **ID**: `ACT` + zero-padded product ID
- **Name**: Product title
- **Category**: Product category
- **Description**: Product description
- **Images**: Product thumbnail + additional images
- **Duration**: Random 1-8 hours
- **Difficulty**: Random Easy/Medium/Hard
- **Group Size**: Random min/max capacity
- **Pricing**: Adult, child, senior rates in USD
- **Location**: Generic location data
- **Schedule**: Daily frequency with multiple time slots
- **Inclusions/Exclusions**: Standard activity items
- **Rating**: Product rating or random 4-5 stars
- **Highlights**: Standard activity highlights

### Example Activity Object
```typescript
{
  id: "ACT001",
  name: "Mountain Hiking Adventure",
  category: "outdoor",
  description: "Experience breathtaking mountain trails...",
  duration: "6 hours",
  difficulty: "Medium",
  pricing: {
    adult: 150,
    child: 120,
    senior: 135,
    currency: "USD"
  },
  // ... additional properties
}
```

## Migration Notes

### From Static to Dynamic Data
- Previously used static mock data arrays
- Now fetches real product data from DummyJSON API
- Maintains same interface for consuming components
- Added error handling and fallback mechanisms

### Backward Compatibility
- Components using `mockActivities` will get empty array
- Components using `getMockActivities()` will get API data
- New async export `mockActivities_async` available

## Error Handling
- API failures are logged but don't crash the application
- Transformation errors are handled gracefully
- Fallback to empty arrays when necessary

## Performance Considerations
- Data is fetched on-demand
- No caching implemented (consider adding for production)
- Transformation happens in memory

## Dependencies
- `@/lib/api/services` - ProductService
- `@/lib/interfaces/services/activities` - Activity type definitions

## Future Enhancements
- Add caching layer for API responses
- Implement activity-specific API endpoints
- Add search and filtering capabilities
- Include real activity booking systems
