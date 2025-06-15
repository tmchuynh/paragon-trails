# Core API Services Documentation

This file documents the core API services and utilities provided in `services.ts`.

## Overview

The `services.ts` file provides the foundation for all API interactions in the Paragon Trails application. It includes base utilities, caching mechanisms, rate limiting, and service classes for various data sources.

## Core Components

### API Endpoints

```typescript
export const API_ENDPOINTS = {
  DUMMY_JSON: "https://dummyjson.com",
  JSON_PLACEHOLDER: "https://jsonplaceholder.typicode.com",
  FAKER_API: "https://fakerapi.it/api/v1",
  FAKER_API_V2: "https://fakerapi.it/api/v2",
  ADS_DB: "https://www.adsbdb.com/api",
  NHTSA_VPIC: "https://vpic.nhtsa.dot.gov/api",
  MAIL_TM: "https://api.mail.tm",
} as const;
```

Centralized endpoint configuration for all external APIs used throughout the application.

### Generic API Fetch Wrapper

```typescript
export async function fetchAPI<T>(url: string, options?: RequestInit): Promise<T>
```

**Purpose**: Standardized HTTP client with error handling and JSON parsing.

**Features**:
- Automatic JSON content-type headers
- HTTP status error handling
- Comprehensive error logging
- Type-safe response handling

**Usage**:
```typescript
const data = await fetchAPI<UserResponse>('https://api.example.com/users');
```

### Rate Limiting

```typescript
export function createRateLimitedFetch(delay: number = 100)
```

**Purpose**: Creates a rate-limited version of the fetch function to prevent API abuse.

**Parameters**:
- `delay` (optional): Minimum milliseconds between requests (default: 100ms)

**Features**:
- Prevents concurrent API calls
- Configurable delay between requests
- Maintains call history for timing

**Usage**:
```typescript
const rateLimitedFetch = createRateLimitedFetch(200);
const data = await rateLimitedFetch<DataType>(url);
```

### API Cache

```typescript
export class APICache
```

**Purpose**: In-memory caching system for API responses with TTL support.

**Methods**:

#### `set(key: string, data: any, ttl: number = 5 * 60 * 1000)`
Stores data in cache with specified time-to-live.

**Parameters**:
- `key`: Unique cache identifier
- `data`: Data to store
- `ttl`: Time-to-live in milliseconds (default: 5 minutes)

#### `get(key: string): any | null`
Retrieves data from cache if not expired.

#### `clear()`
Clears all cached data.

**Usage**:
```typescript
apiCache.set('users_all', userData, 10 * 60 * 1000); // 10 minutes
const cachedUsers = apiCache.get('users_all');
```

## Service Classes

### UserService

**Purpose**: Handles user-related operations using DummyJSON API.

#### Methods

##### `getAllUsers(limit: number = 30): Promise<User[]>`
Fetches all users with optional limit.

##### `getUserById(id: string): Promise<User | null>`
Retrieves a specific user by ID.

##### `authenticateUser(email: string, password: string): Promise<User | null>`
Authenticates user credentials.

##### `getBudgetsByUser(userId: string): Promise<any[]>`
Gets user-specific budget information.

##### `getUserFavorites(userId: string): Promise<User["favorites"]>`
Retrieves user's favorite items.

##### `getTripsByUser(userId: string): Promise<any[]>`
Gets user's trip history.

### DestinationService

**Purpose**: Manages destination data using FakerAPI.

#### Methods

##### `getAllDestinations(limit: number = 50): Promise<Destination[]>`
Fetches destination listings.

##### `getDestinationById(id: string): Promise<Destination | null>`
Gets specific destination details.

### PostService

**Purpose**: Handles blog posts and content using JSONPlaceholder API.

#### Methods

##### `getAllPosts(limit: number = 100): Promise<any[]>`
Retrieves blog posts with optional limit.

##### `getPostById(id: string): Promise<any | null>`
Gets specific post details.

##### `getCommentsByPostId(postId: string): Promise<any[]>`
Fetches comments for a specific post.

### ProductService

**Purpose**: Manages travel products using DummyJSON API.

#### Methods

##### `getAllProducts(limit: number = 30): Promise<any[]>`
Fetches travel products (hotels, tours, etc.).

##### `getProductById(id: string): Promise<any | null>`
Gets specific product details.

##### `getProductsByCategory(category: string): Promise<any[]>`
Retrieves products by category.

### ContactService

**Purpose**: Generates contact information using FakerAPI.

#### Methods

##### `generateContactInfo(quantity: number = 10): Promise<any[]>`
Creates sample contact data.

### VehicleAPIService

**Purpose**: Handles vehicle data using NHTSA VPIC API.

#### Methods

##### `getVehicleMakes(): Promise<any[]>`
Fetches all vehicle manufacturers.

##### `getVehicleModels(makeId: string): Promise<any[]>`
Gets models for a specific manufacturer.

### PaymentService

**Purpose**: Generates payment data using FakerAPI v2.

#### Methods

##### `generateCreditCards(quantity: number = 10): Promise<any[]>`
Creates sample credit card data.

### AddressService

**Purpose**: Generates address data using FakerAPI v2.

#### Methods

##### `generateAddresses(quantity: number = 10): Promise<any[]>`
Creates sample address data.

### EmailService

**Purpose**: Handles temporary email functionality using Mail.tm API.

#### Methods

##### `getDomains(): Promise<any[]>`
Retrieves available email domains.

## Error Handling

All services implement comprehensive error handling:

```typescript
try {
  const response = await rateLimitedFetch<ResponseType>(url);
  // Process successful response
  apiCache.set(cacheKey, processedData);
  return processedData;
} catch (error) {
  console.error("Service operation failed:", error);
  return fallbackData; // or null/empty array
}
```

## Caching Strategy

Each service implements a consistent caching pattern:

1. **Cache Key Generation**: Unique keys based on operation and parameters
2. **Cache Check**: Always check cache before API calls
3. **TTL Management**: Automatic expiration handling
4. **Cache Population**: Store successful responses

## Performance Optimization

- **Rate Limiting**: Default 200ms delay between API calls
- **Caching**: 5-minute default TTL for most operations
- **Batch Operations**: Where supported by external APIs
- **Error Recovery**: Graceful fallbacks when APIs are unavailable

## Usage Examples

### Basic Service Usage
```typescript
import { UserService, apiCache } from './services';

// Get users with caching
const users = await UserService.getAllUsers(20);

// Check cache manually
const cached = apiCache.get('users_all_20');
if (cached) {
  console.log('Using cached data');
}
```

### Custom Rate Limiting
```typescript
import { createRateLimitedFetch } from './services';

const slowFetch = createRateLimitedFetch(1000); // 1 second delay
const data = await slowFetch<DataType>('https://slow-api.com/data');
```

### Service Integration
```typescript
import { ProductService, DestinationService } from './services';

// Combine multiple services
const [products, destinations] = await Promise.all([
  ProductService.getAllProducts(10),
  DestinationService.getAllDestinations(10)
]);
```

## Configuration

### Environment Variables
No environment variables required for core services.

### Cache Configuration
```typescript
// Custom cache TTL
apiCache.set('custom_data', data, 30 * 60 * 1000); // 30 minutes

// Clear cache when needed
apiCache.clear();
```

### Rate Limiting Configuration
```typescript
// Adjust rate limiting for specific use cases
const customFetch = createRateLimitedFetch(500); // 500ms delay
```

## Best Practices

1. **Always use caching** for repeated API calls
2. **Implement error handling** for all service calls
3. **Use rate limiting** for external API calls
4. **Clear cache** when data freshness is critical
5. **Monitor API usage** to avoid hitting rate limits
6. **Use TypeScript interfaces** for type safety
7. **Log errors appropriately** without exposing sensitive data

## Troubleshooting

### Common Issues

1. **Cache Not Working**: Ensure cache keys are consistent
2. **Rate Limiting Too Aggressive**: Adjust delay in `createRateLimitedFetch`
3. **API Timeouts**: External APIs may be slow or unavailable
4. **Memory Usage**: Clear cache periodically for long-running applications

### Debug Tips

```typescript
// Enable cache debugging
console.log('Cache contents:', apiCache);

// Monitor API calls
const originalFetch = fetchAPI;
fetchAPI = async (url, options) => {
  console.log('API Call:', url);
  return originalFetch(url, options);
};
```
