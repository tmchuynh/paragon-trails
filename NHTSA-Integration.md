# NHTSA Vehicle API Integration

This project now integrates with the NHTSA (National Highway Traffic Safety Administration) Vehicle Product Information Catalog (VPIC) API to provide real vehicle data for the rental service.

## API Overview

The NHTSA VPIC API provides access to vehicle information including:

- Vehicle manufacturers (makes)
- Vehicle types
- Vehicle models
- Vehicle specifications

**Base URL:** `https://vpic.nhtsa.dot.gov/api`

## Implemented Endpoints

### 1. Get All Makes

```
GET /vehicles/GetAllMakes?format=json
```

Returns all vehicle manufacturers in the database.

### 2. Get Makes for Vehicle Type

```
GET /vehicles/GetMakesForVehicleType/{vehicleType}?format=json
```

Returns manufacturers for a specific vehicle type (car, truck, motorcycle, etc.).

**Example:**

- `/vehicles/GetMakesForVehicleType/car`
- `/vehicles/GetMakesForVehicleType/truck`
- `/vehicles/GetMakesForVehicleType/motorcycle`

### 3. Get Vehicle Variables List

```
GET /vehicles/GetVehicleVariableList?format=json
```

Returns all available vehicle variables that can be used for queries.

## Implementation

### Service Layer

The integration is implemented in `/src/lib/api/services/nhtsa.ts`:

- `NHTSAService` class handles all API interactions
- `getAllMakes()` - Fetches all vehicle manufacturers
- `getMakesForVehicleType(type)` - Fetches manufacturers for specific vehicle types
- `getVehicleVariableList()` - Fetches available vehicle variables
- `transformMakesToVehicles()` - Transforms NHTSA data to our vehicle format

### Data Integration

The vehicle data is integrated in `/src/data/vehicles.ts`:

- `getMockVehicles()` function now fetches real data from NHTSA API
- Falls back to mock data if API is unavailable
- Transforms NHTSA manufacturer data into our vehicle rental format

### Features Added

- Real vehicle manufacturer data
- Support for different vehicle types (car, truck, motorcycle, SUV)
- Automatic pricing based on manufacturer (luxury brands cost more)
- Vehicle specifications generation based on type
- Proper error handling and fallbacks

## Testing

Visit `/nhtsa-test` in the application to see the NHTSA API integration in action:

- Browse real vehicle manufacturers by type
- See live data from the NHTSA API
- Test different vehicle categories

## Data Transformation

The service transforms NHTSA manufacturer data into our vehicle rental format:

```typescript
// NHTSA API Response
{
  Make_ID: 440,
  Make_Name: "TOYOTA"
}

// Transformed to our format
{
  id: "440-car",
  name: "Toyota Sedan",
  type: "car",
  brand: "Toyota",
  model: "Sedan",
  year: 2024,
  // ... additional rental-specific properties
}
```

## Benefits

1. **Real Data**: Uses actual vehicle manufacturer data from official government source
2. **Comprehensive**: Covers cars, trucks, motorcycles, and more
3. **Reliable**: Government-maintained API with high uptime
4. **Free**: No API key required, public access
5. **Accurate**: Official manufacturer names and IDs

## Error Handling

- Network errors are caught and logged
- Fallback to mock data if API is unavailable
- Safe property access prevents runtime errors
- Loading states for better user experience

## Future Enhancements

The NHTSA API offers additional endpoints that could be integrated:

- Vehicle models by make and year
- Vehicle specifications and safety ratings
- Recall information
- Fuel economy data

## Usage in Components

```typescript
import { nHTSAService } from "@/lib/api/services/nhtsa";

// Get all car manufacturers
const carMakes = await nHTSAService.getMakesForVehicleType("car");

// Transform to rental vehicles
const vehicles = nHTSAService.transformMakesToVehicles(carMakes, "car");
```
