# NHTSA Service Documentation

This file documents the NHTSA (National Highway Traffic Safety Administration) service provided in `services/nhtsa.ts`.

## Overview

The NHTSA Service integrates with the NHTSA Vehicle Product Information Catalog (vPIC) API to provide vehicle information and specifications. It transforms real vehicle data into comprehensive rental vehicle listings for the Paragon Trails application.

## Data Source

- **API**: [NHTSA vPIC API](https://vpic.nhtsa.dot.gov/api/)
- **Base URL**: `https://vpic.nhtsa.dot.gov/api`
- **Authentication**: No API key required (public API)
- **Data Format**: JSON responses
- **Rate Limiting**: No explicit limits, but built-in error handling

## Interfaces

### NHTSA API Response Types

#### NHTSAMake

```typescript
interface NHTSAMake {
  MakeId: number;                    // Unique manufacturer ID
  MakeName: string;                  // Manufacturer name (e.g., "BMW", "Toyota")
  VehicleTypeName: string;          // Vehicle type category
}
```

#### NHTSAModel

```typescript
interface NHTSAModel {
  Make_ID: number;                  // Manufacturer ID
  Make_Name: string;                // Manufacturer name
  Model_ID: number;                 // Model ID
  Model_Name: string;               // Model name (e.g., "Camry", "F-150")
}
```

#### NHTSAVariable

```typescript
interface NHTSAVariable {
  ID: number;                       // Variable ID
  Name: string;                     // Variable name
  Description: string;              // Variable description
  DataType: string;                 // Data type (text, number, etc.)
}
```

### API Response Wrappers

```typescript
interface NHTSAMakeResponse {
  Count: number;                    // Number of results
  Message: string;                  // Response message
  SearchCriteria: string;           // Search criteria used
  Results: NHTSAMake[];            // Array of makes
}

interface NHTSAModelResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: NHTSAModel[];           // Array of models
}

interface NHTSAVariableResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: NHTSAVariable[];        // Array of variables
}
```

## Core Methods

### getAllMakes

```typescript
async getAllMakes(): Promise<NHTSAMake[]>
```

**Purpose**: Retrieves all vehicle manufacturers from the NHTSA database.

**Returns**: Array of vehicle makes/manufacturers

**API Endpoint**: `/vehicles/GetMakesForVehicleType/car?format=json`

**Example**:
```typescript
const makes = await nHTSAService.getAllMakes();
console.log(`Found ${makes.length} manufacturers`);

makes.slice(0, 5).forEach(make => {
  console.log(`${make.MakeName} (ID: ${make.MakeId})`);
});

// Output:
// BMW (ID: 452)
// Toyota (ID: 448)
// Ford (ID: 460)
// Honda (ID: 474)
// Chevrolet (ID: 441)
```

### getMakesForVehicleType

```typescript
async getMakesForVehicleType(vehicleType: string): Promise<NHTSAMake[]>
```

**Purpose**: Retrieves manufacturers for a specific vehicle type.

**Parameters**:
- `vehicleType`: Type of vehicle (e.g., 'car', 'truck', 'motorcycle')

**Returns**: Array of makes for the specified vehicle type

**Supported Vehicle Types**:
- `car` - Passenger cars
- `truck` - Trucks and commercial vehicles  
- `motorcycle` - Motorcycles and scooters
- `trailer` - Trailers
- `bus` - Buses

**Example**:
```typescript
// Get motorcycle manufacturers
const motorcycleMakes = await nHTSAService.getMakesForVehicleType('motorcycle');
console.log('Motorcycle manufacturers:');
motorcycleMakes.forEach(make => {
  console.log(`- ${make.MakeName}`);
});

// Get truck manufacturers
const truckMakes = await nHTSAService.getMakesForVehicleType('truck');
console.log(`Found ${truckMakes.length} truck manufacturers`);
```

### getModelsForMake

```typescript
async getModelsForMake(make: string): Promise<NHTSAModel[]>
```

**Purpose**: Retrieves all models for a specific manufacturer.

**Parameters**:
- `make`: Manufacturer name (e.g., "BMW", "Toyota")

**Returns**: Array of vehicle models for the specified make

**Example**:
```typescript
// Get all BMW models
const bmwModels = await nHTSAService.getModelsForMake('BMW');
console.log('BMW Models:');
bmwModels.forEach(model => {
  console.log(`- ${model.Model_Name}`);
});

// Get Toyota models
const toyotaModels = await nHTSAService.getModelsForMake('Toyota');
console.log(`Toyota has ${toyotaModels.length} models available`);
```

### getVehicleVariableList

```typescript
async getVehicleVariableList(): Promise<NHTSAVariable[]>
```

**Purpose**: Retrieves the list of all available vehicle variables/specifications.

**Returns**: Array of available vehicle data variables

**Example**:
```typescript
const variables = await nHTSAService.getVehicleVariableList();
console.log('Available vehicle variables:');
variables.slice(0, 10).forEach(variable => {
  console.log(`${variable.Name}: ${variable.Description}`);
});

// Find specific variables
const engineVariables = variables.filter(v => 
  v.Name.toLowerCase().includes('engine')
);
console.log(`Found ${engineVariables.length} engine-related variables`);
```

### getVehicleTypes

```typescript
async getVehicleTypes(): Promise<string[]>
```

**Purpose**: Retrieves all available vehicle types from the API.

**Returns**: Array of vehicle type strings

**Example**:
```typescript
const types = await nHTSAService.getVehicleTypes();
console.log('Available vehicle types:');
types.forEach(type => {
  console.log(`- ${type}`);
});
```

## Vehicle Transformation

### transformMakesToVehicles

```typescript
transformMakesToVehicles(makes: NHTSAMake[], vehicleType: string = "car"): any[]
```

**Purpose**: Transforms NHTSA manufacturer data into comprehensive rental vehicle listings.

**Parameters**:
- `makes`: Array of NHTSA makes
- `vehicleType`: Type of vehicle to generate ("car", "truck", "motorcycle", "suv")

**Returns**: Array of enhanced vehicle rental objects (limited to 50 items)

**Generated Vehicle Object Structure**:
```typescript
{
  id: string;                          // Unique vehicle ID
  name: string;                        // Vehicle display name
  type: string;                        // Vehicle category
  brand: string;                       // Manufacturer name
  model: string;                       // Vehicle model name
  year: number;                        // Model year (2020-2024)
  images: string[];                    // Array of vehicle images
  description: string;                 // Marketing description
  specifications: {
    engine: string;                    // Engine specification
    transmission: string;              // Transmission type
    fuelType: string;                  // Fuel type
    seatingCapacity: number;           // Number of seats
    doors: number;                     // Number of doors
    luggage: number;                   // Luggage capacity
    topSpeed: string;                  // Maximum speed
    acceleration: string;              // 0-60 mph time
    fuelEconomy: string;              // Fuel efficiency
  };
  features: string[];                  // Vehicle features
  pricing: {
    daily: number;                     // Daily rental rate
    weekly: number;                    // Weekly rental rate
    monthly: number;                   // Monthly rental rate
    currency: string;                  // Currency code
    deposit: number;                   // Security deposit
    insurance: number;                 // Insurance cost
  };
  availability: {
    locations: string[];               // Available locations
    isAvailable: boolean;              // Availability status
    minimumAge: number;                // Minimum rental age
    licenseRequired: string[];         // Required licenses
  };
  insurance: {
    included: string[];                // Included coverage
    optional: string[];                // Optional coverage
  };
  rating: number;                      // Customer rating (3.5-5.0)
  reviews: number;                     // Number of reviews
  category: string;                    // Rental category
  tags: string[];                      // Search tags
}
```

**Example**:
```typescript
// Transform BMW cars for rental
const bmwMakes = await nHTSAService.getMakesForVehicleType('car');
const bmwVehicles = nHTSAService.transformMakesToVehicles(
  bmwMakes.filter(make => make.MakeName === 'BMW'),
  'car'
);

console.log('BMW Rental Vehicles:');
bmwVehicles.forEach(vehicle => {
  console.log(`${vehicle.name} - $${vehicle.pricing.daily}/day`);
  console.log(`  Engine: ${vehicle.specifications.engine}`);
  console.log(`  Category: ${vehicle.category}`);
  console.log(`  Rating: ${vehicle.rating}⭐ (${vehicle.reviews} reviews)`);
});
```

## Vehicle Categories and Specifications

### Vehicle Type Mapping

```typescript
// Engine types by vehicle category
const engines = {
  car: ["1.8L I4", "2.0L I4 Turbo", "2.5L I4", "3.0L V6", "Electric"],
  truck: ["3.5L V6", "5.0L V8", "6.2L V8", "3.0L Diesel V6"],
  motorcycle: ["250cc", "500cc", "750cc", "1000cc", "1200cc"],
  suv: ["2.0L I4 Turbo", "2.5L I4", "3.5L V6", "5.7L V8", "Hybrid"]
};

// Seating capacity by type
const seatingCapacities = {
  car: [2, 4, 5],
  truck: [2, 3, 5, 6],
  motorcycle: [1, 2],
  suv: [5, 7, 8]
};
```

### Pricing Structure

Pricing is calculated based on vehicle type and manufacturer prestige:

```typescript
// Base daily rates by vehicle type
const basePrices = {
  car: 45,        // $45/day base
  truck: 65,      // $65/day base
  motorcycle: 35, // $35/day base
  suv: 75        // $75/day base
};

// Luxury manufacturer multiplier (2.5x)
const luxuryMakes = [
  "BMW", "Mercedes-Benz", "Audi", "Lexus", 
  "Porsche", "Ferrari", "Lamborghini"
];
```

### Feature Sets by Vehicle Type

```typescript
const vehicleFeatures = {
  car: [
    "Power Windows", "Central Locking", 
    "Backup Camera", "Cruise Control"
  ],
  truck: [
    "Towing Package", "Bed Liner", 
    "4WD", "Heavy Duty Suspension"
  ],
  motorcycle: [
    "Anti-lock Brakes", "Traction Control",
    "Quick Shifter", "Wind Protection"
  ],
  suv: [
    "All-Wheel Drive", "Roof Rails",
    "Third Row Seating", "Power Liftgate"
  ]
};
```

## Usage Examples

### Vehicle Rental Catalog

```typescript
import { nHTSAService } from './services/nhtsa';

const VehicleCatalog = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('car');

  const loadVehicles = async (vehicleType) => {
    setLoading(true);
    try {
      // Get manufacturers for vehicle type
      const makes = await nHTSAService.getMakesForVehicleType(vehicleType);
      
      // Transform to rental vehicles
      const rentalVehicles = nHTSAService.transformMakesToVehicles(makes, vehicleType);
      
      setVehicles(rentalVehicles);
    } catch (error) {
      console.error('Failed to load vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVehicles(selectedType);
  }, [selectedType]);

  const vehicleTypes = ['car', 'truck', 'motorcycle', 'suv'];

  return (
    <div className="vehicle-catalog">
      <div className="catalog-header">
        <h1>Vehicle Rental Catalog</h1>
        <div className="type-selector">
          {vehicleTypes.map(type => (
            <button
              key={type}
              className={selectedType === type ? 'active' : ''}
              onClick={() => setSelectedType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading && <div>Loading vehicles...</div>}

      <div className="vehicle-grid">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className="vehicle-card">
            <img src={vehicle.images[0]} alt={vehicle.name} />
            
            <div className="vehicle-info">
              <h3>{vehicle.name}</h3>
              <p className="brand">{vehicle.brand} • {vehicle.year}</p>
              
              <div className="specifications">
                <span>🚗 {vehicle.specifications.seatingCapacity} seats</span>
                <span>⛽ {vehicle.specifications.fuelType}</span>
                <span>⚙️ {vehicle.specifications.transmission}</span>
              </div>

              <div className="features">
                {vehicle.features.slice(0, 3).map(feature => (
                  <span key={feature} className="feature-tag">{feature}</span>
                ))}
              </div>

              <div className="pricing">
                <div className="daily-rate">
                  <strong>${vehicle.pricing.daily}/day</strong>
                </div>
                <div className="other-rates">
                  Weekly: ${vehicle.pricing.weekly} | Monthly: ${vehicle.pricing.monthly}
                </div>
              </div>

              <div className="rating">
                <span className="stars">{'⭐'.repeat(Math.floor(vehicle.rating))}</span>
                <span className="rating-text">{vehicle.rating} ({vehicle.reviews} reviews)</span>
              </div>

              <div className="availability">
                <span className={`status ${vehicle.availability.isAvailable ? 'available' : 'unavailable'}`}>
                  {vehicle.availability.isAvailable ? 'Available' : 'Not Available'}
                </span>
                <span className="locations">
                  {vehicle.availability.locations.length} locations
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Vehicle Comparison Tool

```typescript
import { nHTSAService } from './services/nhtsa';

const VehicleComparison = () => {
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);

  const loadAllVehicles = async () => {
    try {
      const carMakes = await nHTSAService.getMakesForVehicleType('car');
      const cars = nHTSAService.transformMakesToVehicles(carMakes, 'car');
      setAllVehicles(cars);
    } catch (error) {
      console.error('Failed to load vehicles:', error);
    }
  };

  useEffect(() => {
    loadAllVehicles();
  }, []);

  const addToComparison = (vehicle) => {
    if (selectedVehicles.length < 3 && !selectedVehicles.find(v => v.id === vehicle.id)) {
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
  };

  const removeFromComparison = (vehicleId) => {
    setSelectedVehicles(selectedVehicles.filter(v => v.id !== vehicleId));
  };

  return (
    <div className="vehicle-comparison">
      <h2>Vehicle Comparison Tool</h2>
      
      {/* Vehicle Selection */}
      <div className="vehicle-selection">
        <h3>Select Vehicles to Compare (Max 3)</h3>
        <div className="vehicle-list">
          {allVehicles.slice(0, 20).map(vehicle => (
            <div key={vehicle.id} className="vehicle-item">
              <span>{vehicle.name}</span>
              <button 
                onClick={() => addToComparison(vehicle)}
                disabled={selectedVehicles.length >= 3}
              >
                Add to Compare
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedVehicles.length > 0 && (
        <div className="comparison-table">
          <h3>Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                {selectedVehicles.map(vehicle => (
                  <th key={vehicle.id}>
                    {vehicle.name}
                    <button 
                      onClick={() => removeFromComparison(vehicle.id)}
                      className="remove-btn"
                    >
                      ×
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Brand</strong></td>
                {selectedVehicles.map(v => <td key={v.id}>{v.brand}</td>)}
              </tr>
              <tr>
                <td><strong>Year</strong></td>
                {selectedVehicles.map(v => <td key={v.id}>{v.year}</td>)}
              </tr>
              <tr>
                <td><strong>Engine</strong></td>
                {selectedVehicles.map(v => <td key={v.id}>{v.specifications.engine}</td>)}
              </tr>
              <tr>
                <td><strong>Seats</strong></td>
                {selectedVehicles.map(v => <td key={v.id}>{v.specifications.seatingCapacity}</td>)}
              </tr>
              <tr>
                <td><strong>Fuel Type</strong></td>
                {selectedVehicles.map(v => <td key={v.id}>{v.specifications.fuelType}</td>)}
              </tr>
              <tr>
                <td><strong>Daily Rate</strong></td>
                {selectedVehicles.map(v => <td key={v.id}>${v.pricing.daily}</td>)}
              </tr>
              <tr>
                <td><strong>Rating</strong></td>
                {selectedVehicles.map(v => <td key={v.id}>{v.rating}⭐</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
```

### Manufacturer Browser

```typescript
import { nHTSAService } from './services/nhtsa';

const ManufacturerBrowser = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState(null);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMakes = async () => {
    try {
      const allMakes = await nHTSAService.getAllMakes();
      setMakes(allMakes.slice(0, 50)); // Limit for display
    } catch (error) {
      console.error('Failed to load makes:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadModels = async (makeName) => {
    try {
      const makeModels = await nHTSAService.getModelsForMake(makeName);
      setModels(makeModels);
      setSelectedMake(makeName);
    } catch (error) {
      console.error('Failed to load models:', error);
    }
  };

  useEffect(() => {
    loadMakes();
  }, []);

  return (
    <div className="manufacturer-browser">
      <h2>Vehicle Manufacturer Browser</h2>
      
      {loading && <div>Loading manufacturers...</div>}
      
      <div className="browser-layout">
        <div className="makes-panel">
          <h3>Manufacturers ({makes.length})</h3>
          <div className="makes-list">
            {makes.map(make => (
              <div 
                key={make.MakeId}
                className={`make-item ${selectedMake === make.MakeName ? 'selected' : ''}`}
                onClick={() => loadModels(make.MakeName)}
              >
                <strong>{make.MakeName}</strong>
                <span className="make-id">ID: {make.MakeId}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="models-panel">
          {selectedMake ? (
            <>
              <h3>{selectedMake} Models ({models.length})</h3>
              <div className="models-grid">
                {models.map(model => (
                  <div key={model.Model_ID} className="model-card">
                    <h4>{model.Model_Name}</h4>
                    <p>Model ID: {model.Model_ID}</p>
                    <p>Make: {model.Make_Name}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-selection">
              <p>Select a manufacturer to view models</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
```

### Vehicle Search and Filter

```typescript
import { nHTSAService } from './services/nhtsa';

const VehicleSearch = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: [0, 200],
    fuelType: 'all',
    brand: 'all'
  });

  const loadVehicles = async () => {
    try {
      // Load multiple vehicle types
      const [cars, trucks, motorcycles] = await Promise.all([
        nHTSAService.getMakesForVehicleType('car'),
        nHTSAService.getMakesForVehicleType('truck'),
        nHTSAService.getMakesForVehicleType('motorcycle')
      ]);

      const allVehicleData = [
        ...nHTSAService.transformMakesToVehicles(cars.slice(0, 20), 'car'),
        ...nHTSAService.transformMakesToVehicles(trucks.slice(0, 10), 'truck'),
        ...nHTSAService.transformMakesToVehicles(motorcycles.slice(0, 10), 'motorcycle')
      ];

      setAllVehicles(allVehicleData);
      setFilteredVehicles(allVehicleData);
    } catch (error) {
      console.error('Failed to load vehicles:', error);
    }
  };

  const applyFilters = () => {
    let filtered = allVehicles;

    // Filter by type
    if (filters.type !== 'all') {
      filtered = filtered.filter(v => v.type === filters.type);
    }

    // Filter by price range
    filtered = filtered.filter(v => 
      v.pricing.daily >= filters.priceRange[0] && 
      v.pricing.daily <= filters.priceRange[1]
    );

    // Filter by fuel type
    if (filters.fuelType !== 'all') {
      filtered = filtered.filter(v => v.specifications.fuelType === filters.fuelType);
    }

    // Filter by brand
    if (filters.brand !== 'all') {
      filtered = filtered.filter(v => v.brand === filters.brand);
    }

    setFilteredVehicles(filtered);
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, allVehicles]);

  const uniqueBrands = [...new Set(allVehicles.map(v => v.brand))].sort();
  const uniqueFuelTypes = [...new Set(allVehicles.map(v => v.specifications.fuelType))].sort();

  return (
    <div className="vehicle-search">
      <div className="search-filters">
        <h3>Filters</h3>
        
        <div className="filter-group">
          <label>Vehicle Type:</label>
          <select 
            value={filters.type} 
            onChange={(e) => setFilters({...filters, type: e.target.value})}
          >
            <option value="all">All Types</option>
            <option value="car">Cars</option>
            <option value="truck">Trucks</option>
            <option value="motorcycle">Motorcycles</option>
            <option value="suv">SUVs</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="200"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({
              ...filters, 
              priceRange: [filters.priceRange[0], parseInt(e.target.value)]
            })}
          />
        </div>

        <div className="filter-group">
          <label>Fuel Type:</label>
          <select 
            value={filters.fuelType} 
            onChange={(e) => setFilters({...filters, fuelType: e.target.value})}
          >
            <option value="all">All Fuel Types</option>
            {uniqueFuelTypes.map(fuel => (
              <option key={fuel} value={fuel}>{fuel}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Brand:</label>
          <select 
            value={filters.brand} 
            onChange={(e) => setFilters({...filters, brand: e.target.value})}
          >
            <option value="all">All Brands</option>
            {uniqueBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="search-results">
        <h3>Results ({filteredVehicles.length} vehicles)</h3>
        <div className="vehicle-grid">
          {filteredVehicles.map(vehicle => (
            <div key={vehicle.id} className="vehicle-result">
              <h4>{vehicle.name}</h4>
              <p>{vehicle.brand} • {vehicle.type}</p>
              <p>${vehicle.pricing.daily}/day</p>
              <p>{vehicle.specifications.fuelType} • {vehicle.specifications.seatingCapacity} seats</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
```

## Error Handling

All NHTSA service methods implement comprehensive error handling:

```typescript
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data.Results || [];
} catch (error) {
  console.error(`NHTSA API error for ${url}:`, error);
  return []; // Return empty array on error
}
```

## Performance Considerations

- **Data Limiting**: Vehicle transformation limits results to 50 items to prevent UI performance issues
- **Error Recovery**: Graceful degradation when API is unavailable
- **Caching**: Consider implementing caching for frequently accessed data
- **Batch Operations**: Multiple API calls are handled efficiently with Promise.all

## Best Practices

1. **Handle empty results** gracefully in UI components
2. **Implement loading states** for all async operations
3. **Limit result sets** to manageable sizes for performance
4. **Provide fallback data** when API is unavailable
5. **Use TypeScript strictly** for type safety
6. **Cache results** when appropriate to reduce API calls
7. **Validate vehicle types** before making API calls
8. **Handle network timeouts** appropriately

## API Limitations

- **Data Completeness**: Not all manufacturers may have complete model data
- **Real-time Updates**: Vehicle data is not updated in real-time
- **Limited Specifications**: Basic information only, detailed specs require additional APIs
- **No Pricing**: Real pricing data not available (generated algorithmically)
- **No Images**: Vehicle photos not provided by NHTSA API

## Future Enhancements

1. **Image Integration**: Add vehicle photo services (Unsplash, manufacturer APIs)
2. **Detailed Specifications**: Integrate additional APIs for complete vehicle specs
3. **Real Pricing**: Connect with rental car APIs for actual pricing
4. **Availability Tracking**: Real-time inventory management
5. **Review System**: Customer reviews and ratings
6. **Advanced Search**: More sophisticated filtering and search capabilities
