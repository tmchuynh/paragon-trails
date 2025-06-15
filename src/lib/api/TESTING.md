# API Testing Guide

This document provides comprehensive testing guidelines and examples for all API services in the Paragon Trails application.

## Overview

The API services include both external integrations and internal data transformation logic. This guide covers unit testing, integration testing, and end-to-end testing strategies.

## Testing Setup

### Prerequisites

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/jest-dom
npm install --save-dev @testing-library/react @testing-library/user-event
npm install --save-dev jest-environment-jsdom
npm install --save-dev fetch-mock-jest
```

### Jest Configuration

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/lib/api/**/*.{js,ts}',
    '!src/lib/api/**/*.d.ts',
    '!src/lib/api/**/index.{js,ts}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

### Test Setup

```javascript
// src/test/setup.js
import '@testing-library/jest-dom';
import fetchMock from 'fetch-mock-jest';

// Mock fetch globally
global.fetch = fetchMock;

// Setup environment variables for tests
process.env.GEOAPIFY_API_BASE_URL = 'https://api.geoapify.com';
process.env.GEOAPIFY_PLACE_DETAILS_ENDPOINT = '/v2/place-details';
process.env.GEOAPIFY_API_KEY = 'test-api-key';

// Clean up after each test
afterEach(() => {
  fetchMock.restore();
  jest.clearAllMocks();
});
```

## Core Services Testing

### API Cache Testing

```javascript
// src/lib/api/__tests__/services.test.js
import { APICache, apiCache } from '../services';

describe('APICache', () => {
  let cache;

  beforeEach(() => {
    cache = new APICache();
  });

  afterEach(() => {
    cache.clear();
  });

  it('should store and retrieve data', () => {
    const testData = { id: 1, name: 'test' };
    cache.set('test-key', testData);

    const retrieved = cache.get('test-key');
    expect(retrieved).toEqual(testData);
  });

  it('should return null for expired data', (done) => {
    const testData = { id: 1, name: 'test' };
    cache.set('test-key', testData, 100); // 100ms TTL

    setTimeout(() => {
      const retrieved = cache.get('test-key');
      expect(retrieved).toBeNull();
      done();
    }, 150);
  });

  it('should return null for non-existent keys', () => {
    const retrieved = cache.get('non-existent');
    expect(retrieved).toBeNull();
  });

  it('should clear all cached data', () => {
    cache.set('key1', 'data1');
    cache.set('key2', 'data2');
    
    cache.clear();
    
    expect(cache.get('key1')).toBeNull();
    expect(cache.get('key2')).toBeNull();
  });
});
```

### Fetch API Testing

```javascript
// src/lib/api/__tests__/fetchAPI.test.js
import { fetchAPI } from '../services';
import fetchMock from 'fetch-mock-jest';

describe('fetchAPI', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should successfully fetch JSON data', async () => {
    const mockData = { id: 1, name: 'test' };
    fetchMock.get('https://api.example.com/test', {
      status: 200,
      body: mockData,
    });

    const result = await fetchAPI('https://api.example.com/test');
    expect(result).toEqual(mockData);
  });

  it('should handle HTTP errors', async () => {
    fetchMock.get('https://api.example.com/error', {
      status: 404,
      statusText: 'Not Found',
    });

    await expect(fetchAPI('https://api.example.com/error')).rejects.toThrow(
      'API call failed: 404 Not Found'
    );
  });

  it('should handle network errors', async () => {
    fetchMock.get('https://api.example.com/network-error', {
      throws: new Error('Network error'),
    });

    await expect(fetchAPI('https://api.example.com/network-error')).rejects.toThrow(
      'Network error'
    );
  });

  it('should include correct headers', async () => {
    fetchMock.get('https://api.example.com/headers', { status: 200, body: {} });

    await fetchAPI('https://api.example.com/headers');

    const [url, options] = fetchMock.lastCall();
    expect(options.headers).toEqual(
      expect.objectContaining({
        'Content-Type': 'application/json',
      })
    );
  });
});
```

## User Service Testing

```javascript
// src/lib/api/__tests__/users.test.js
import { fetchUsers, fetchUserById, searchUsers, authenticateUser } from '../users';
import fetchMock from 'fetch-mock-jest';
import { apiCache } from '../services';

describe('User Service', () => {
  beforeEach(() => {
    apiCache.clear();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  describe('fetchUsers', () => {
    it('should fetch users with default parameters', async () => {
      const mockResponse = {
        users: [
          {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            username: 'johndoe',
            phone: '123-456-7890',
            image: 'https://example.com/avatar.jpg',
          },
        ],
        total: 1,
        skip: 0,
        limit: 30,
      };

      fetchMock.get('https://dummyjson.com/users?limit=30&skip=0', {
        status: 200,
        body: mockResponse,
      });

      const users = await fetchUsers();
      
      expect(users).toHaveLength(1);
      expect(users[0]).toMatchObject({
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        username: 'johndoe',
      });
    });

    it('should handle custom limit and skip parameters', async () => {
      fetchMock.get('https://dummyjson.com/users?limit=10&skip=5', {
        status: 200,
        body: { users: [], total: 0, skip: 5, limit: 10 },
      });

      await fetchUsers(10, 5);
      
      expect(fetchMock.called('https://dummyjson.com/users?limit=10&skip=5')).toBe(true);
    });

    it('should return cached results', async () => {
      const mockUsers = [{ id: '1', firstName: 'Cached', lastName: 'User' }];
      apiCache.set('users_30_0', mockUsers);

      const users = await fetchUsers();
      
      expect(users).toEqual(mockUsers);
      expect(fetchMock.called()).toBe(false); // No API call should be made
    });

    it('should handle API errors gracefully', async () => {
      fetchMock.get('https://dummyjson.com/users?limit=30&skip=0', {
        status: 500,
        statusText: 'Internal Server Error',
      });

      const users = await fetchUsers();
      
      expect(users).toEqual([]);
    });
  });

  describe('fetchUserById', () => {
    it('should fetch user by ID', async () => {
      const mockUser = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        username: 'johndoe',
        phone: '123-456-7890',
        image: 'https://example.com/avatar.jpg',
      };

      fetchMock.get('https://dummyjson.com/users/1', {
        status: 200,
        body: mockUser,
      });

      const user = await fetchUserById('1');
      
      expect(user).toMatchObject({
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
      });
    });

    it('should return null for non-existent user', async () => {
      fetchMock.get('https://dummyjson.com/users/999', {
        status: 404,
        statusText: 'Not Found',
      });

      const user = await fetchUserById('999');
      
      expect(user).toBeNull();
    });
  });

  describe('authenticateUser', () => {
    it('should authenticate valid credentials', async () => {
      const mockAuthResponse = {
        id: 1,
        username: 'kminchelle',
        email: 'kminchelle@qq.com',
        firstName: 'Jeanne',
        lastName: 'Halvorson',
        gender: 'female',
        image: 'https://robohash.org/Jeanne.png?set=set4',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      };

      const mockUser = {
        id: 1,
        firstName: 'Jeanne',
        lastName: 'Halvorson',
        email: 'kminchelle@qq.com',
        username: 'kminchelle',
        phone: '123-456-7890',
        image: 'https://robohash.org/Jeanne.png?set=set4',
      };

      fetchMock.post('https://dummyjson.com/auth/login', {
        status: 200,
        body: mockAuthResponse,
      });

      fetchMock.get('https://dummyjson.com/users/1', {
        status: 200,
        body: mockUser,
      });

      const user = await authenticateUser('kminchelle', '0lelplR');
      
      expect(user).toMatchObject({
        id: '1',
        username: 'kminchelle',
        firstName: 'Jeanne',
      });
    });

    it('should return null for invalid credentials', async () => {
      fetchMock.post('https://dummyjson.com/auth/login', {
        status: 400,
        statusText: 'Bad Request',
      });

      const user = await authenticateUser('invalid', 'password');
      
      expect(user).toBeNull();
    });
  });
});
```

## Content Service Testing

```javascript
// src/lib/api/__tests__/content.test.js
import { 
  fetchTravelPosts, 
  fetchReviews, 
  fetchDestinationGalleries, 
  fetchUserItineraries 
} from '../content';
import fetchMock from 'fetch-mock-jest';

describe('Content Service', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('fetchTravelPosts', () => {
    it('should transform posts to travel content', async () => {
      const mockPosts = [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita',
        },
      ];

      fetchMock.get('https://jsonplaceholder.typicode.com/posts', {
        status: 200,
        body: mockPosts,
      });

      const posts = await fetchTravelPosts();
      
      expect(posts).toHaveLength(1);
      expect(posts[0]).toMatchObject({
        id: 1,
        userId: 1,
        category: expect.any(String),
        tags: expect.any(Array),
        readTime: expect.any(Number),
        publishedAt: expect.any(String),
        featured: expect.any(Boolean),
        image: expect.any(String),
        author: expect.objectContaining({
          id: 1,
          name: expect.any(String),
          avatar: expect.any(String),
        }),
      });
    });

    it('should respect limit parameter', async () => {
      fetchMock.get('https://jsonplaceholder.typicode.com/posts?_limit=5', {
        status: 200,
        body: Array(5).fill().map((_, i) => ({
          userId: 1,
          id: i + 1,
          title: `Post ${i + 1}`,
          body: 'Body content',
        })),
      });

      const posts = await fetchTravelPosts(5);
      
      expect(posts).toHaveLength(5);
    });
  });

  describe('fetchReviews', () => {
    it('should transform comments to reviews', async () => {
      const mockComments = [
        {
          postId: 1,
          id: 1,
          name: 'id labore ex et quam laborum',
          email: 'Eliseo@gardner.biz',
          body: 'laudantium enim quasi est quidem magnam voluptate',
        },
      ];

      fetchMock.get('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        body: mockComments,
      });

      const reviews = await fetchReviews();
      
      expect(reviews).toHaveLength(1);
      expect(reviews[0]).toMatchObject({
        id: 1,
        reviewableId: 1,
        reviewableType: expect.any(String),
        rating: expect.any(Number),
        title: 'id labore ex et quam laborum',
        content: 'laudantium enim quasi est quidem magnam voluptate',
        helpful: expect.any(Number),
        verifiedPurchase: expect.any(Boolean),
        reviewer: expect.objectContaining({
          name: expect.any(String),
          email: 'Eliseo@gardner.biz',
        }),
      });
    });
  });
});
```

## External Services Testing

### ADSB Service Testing

```javascript
// src/lib/api/services/__tests__/adsbService.test.js
import { adsbService } from '../adsbService';
import fetchMock from 'fetch-mock-jest';

describe('ADSB Service', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('getAircraft', () => {
    it('should fetch aircraft data successfully', async () => {
      const mockResponse = {
        response: {
          aircraft: {
            type: 'Boeing 737-800',
            registration: 'N12345',
            manufacturer: 'Boeing',
            registered_owner: 'Test Airline',
          },
        },
      };

      fetchMock.get('https://api.adsbdb.com/v0/aircraft/N12345', {
        status: 200,
        body: mockResponse,
      });

      const aircraft = await adsbService.getAircraft('N12345');
      
      expect(aircraft).toEqual(mockResponse.response.aircraft);
    });

    it('should return null for invalid aircraft', async () => {
      fetchMock.get('https://api.adsbdb.com/v0/aircraft/INVALID', {
        status: 404,
      });

      const aircraft = await adsbService.getAircraft('INVALID');
      
      expect(aircraft).toBeNull();
    });

    it('should use cache for repeated requests', async () => {
      const mockResponse = {
        response: {
          aircraft: { type: 'Boeing 737-800' },
        },
      };

      fetchMock.get('https://api.adsbdb.com/v0/aircraft/N12345', {
        status: 200,
        body: mockResponse,
      });

      // First call
      await adsbService.getAircraft('N12345');
      // Second call (should use cache)
      await adsbService.getAircraft('N12345');
      
      expect(fetchMock.calls()).toHaveLength(1);
    });
  });

  describe('generateRandomFlights', () => {
    it('should generate specified number of flights', async () => {
      // Mock all possible API calls
      fetchMock.get('begin:https://api.adsbdb.com/v0/', {
        status: 200,
        body: { response: null },
      });

      const flights = await adsbService.generateRandomFlights(5);
      
      expect(flights).toHaveLength(5);
      flights.forEach(flight => {
        expect(flight).toMatchObject({
          id: expect.any(String),
          airline: expect.any(String),
          flightNumber: expect.any(String),
          aircraft: expect.any(String),
          origin: expect.objectContaining({
            code: expect.any(String),
            city: expect.any(String),
          }),
          destination: expect.objectContaining({
            code: expect.any(String),
            city: expect.any(String),
          }),
          pricing: expect.objectContaining({
            economy: expect.any(Number),
            business: expect.any(Number),
            first: expect.any(Number),
          }),
        });
      });
    });
  });
});
```

### NHTSA Service Testing

```javascript
// src/lib/api/services/__tests__/nhtsa.test.js
import { nHTSAService } from '../nhtsa';
import fetchMock from 'fetch-mock-jest';

describe('NHTSA Service', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('getAllMakes', () => {
    it('should fetch all vehicle makes', async () => {
      const mockResponse = {
        Count: 2,
        Message: 'Response returned successfully',
        Results: [
          { MakeId: 452, MakeName: 'BMW', VehicleTypeName: 'Passenger Car' },
          { MakeId: 448, MakeName: 'Toyota', VehicleTypeName: 'Passenger Car' },
        ],
      };

      fetchMock.get(
        'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
        { status: 200, body: mockResponse }
      );

      const makes = await nHTSAService.getAllMakes();
      
      expect(makes).toHaveLength(2);
      expect(makes[0]).toMatchObject({
        MakeId: 452,
        MakeName: 'BMW',
      });
    });
  });

  describe('transformMakesToVehicles', () => {
    it('should transform makes to vehicle objects', () => {
      const mockMakes = [
        { MakeId: 452, MakeName: 'BMW', VehicleTypeName: 'Passenger Car' },
      ];

      const vehicles = nHTSAService.transformMakesToVehicles(mockMakes, 'car');
      
      expect(vehicles).toHaveLength(1);
      expect(vehicles[0]).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        type: 'car',
        brand: 'BMW',
        year: expect.any(Number),
        specifications: expect.objectContaining({
          engine: expect.any(String),
          transmission: expect.any(String),
          fuelType: expect.any(String),
        }),
        pricing: expect.objectContaining({
          daily: expect.any(Number),
          currency: 'USD',
        }),
      });
    });

    it('should apply luxury pricing for premium brands', () => {
      const mockMakes = [
        { MakeId: 452, MakeName: 'BMW', VehicleTypeName: 'Passenger Car' },
        { MakeId: 448, MakeName: 'Toyota', VehicleTypeName: 'Passenger Car' },
      ];

      const vehicles = nHTSAService.transformMakesToVehicles(mockMakes, 'car');
      
      const bmwVehicle = vehicles.find(v => v.brand === 'BMW');
      const toyotaVehicle = vehicles.find(v => v.brand === 'Toyota');
      
      expect(bmwVehicle.pricing.daily).toBeGreaterThan(toyotaVehicle.pricing.daily);
    });
  });
});
```

## Attractions Service Testing

```javascript
// src/lib/api/__tests__/attractions.test.js
import { 
  fetchAttractionDetailsById, 
  fetchAttractionDetailsByCoords 
} from '../attractions';
import fetchMock from 'fetch-mock-jest';

describe('Attractions Service', () => {
  beforeEach(() => {
    // Set environment variables
    process.env.GEOAPIFY_API_BASE_URL = 'https://api.geoapify.com';
    process.env.GEOAPIFY_PLACE_DETAILS_ENDPOINT = '/v2/place-details';
    process.env.GEOAPIFY_API_KEY = 'test-api-key';
  });

  afterEach(() => {
    fetchMock.restore();
  });

  describe('fetchAttractionDetailsById', () => {
    it('should fetch attraction details by place ID', async () => {
      const mockResponse = {
        properties: {
          name: 'Test Attraction',
          city: 'Test City',
          country: 'Test Country',
          lat: 40.7589,
          lon: -73.9851,
          categories: ['tourism.attraction'],
          details: ['Famous landmark'],
          datasource: { sourcename: 'osm' },
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.9851, 40.7589],
        },
      };

      fetchMock.get(
        'begin:https://api.geoapify.com/v2/place-details',
        { status: 200, body: mockResponse }
      );

      const attraction = await fetchAttractionDetailsById('test-place-id');
      
      expect(attraction).toMatchObject({
        id: expect.any(String),
        name: 'Test Attraction',
        city: 'Test City',
        country: 'Test Country',
        latitude: 40.7589,
        longitude: -73.9851,
        categories: ['tourism.attraction'],
        description: 'Famous landmark',
      });
    });

    it('should return null when API key is missing', async () => {
      delete process.env.GEOAPIFY_API_KEY;

      const attraction = await fetchAttractionDetailsById('test-place-id');
      
      expect(attraction).toBeNull();
    });
  });

  describe('fetchAttractionDetailsByCoords', () => {
    it('should fetch attraction by coordinates', async () => {
      const mockResponse = {
        properties: {
          name: 'Coordinate Attraction',
          city: 'Coord City',
          country: 'Coord Country',
          lat: 40.7589,
          lon: -73.9851,
          categories: ['tourism.sights'],
          details: [],
        },
      };

      fetchMock.get(
        'begin:https://api.geoapify.com/v2/place-details',
        { status: 200, body: mockResponse }
      );

      const attraction = await fetchAttractionDetailsByCoords(40.7589, -73.9851);
      
      expect(attraction).toMatchObject({
        name: 'Coordinate Attraction',
        latitude: 40.7589,
        longitude: -73.9851,
      });
    });
  });
});
```

## Integration Testing

### API Integration Tests

```javascript
// src/lib/api/__tests__/integration.test.js
describe('API Integration Tests', () => {
  // These tests run against real APIs when API keys are available
  // Skip them in CI/CD environments without credentials

  const hasAPIKeys = () => {
    return process.env.GEOAPIFY_API_KEY && 
           process.env.NODE_ENV !== 'test';
  };

  describe('Real API Integration', () => {
    beforeEach(() => {
      if (!hasAPIKeys()) {
        console.log('Skipping integration tests - API keys not available');
      }
    });

    it('should fetch real user data from DummyJSON', async () => {
      if (!hasAPIKeys()) return;

      const users = await fetchUsers(5);
      
      expect(users.length).toBeGreaterThan(0);
      expect(users[0]).toHaveProperty('id');
      expect(users[0]).toHaveProperty('email');
    });

    it('should fetch real vehicle data from NHTSA', async () => {
      if (!hasAPIKeys()) return;

      const makes = await nHTSAService.getAllMakes();
      
      expect(makes.length).toBeGreaterThan(0);
      expect(makes[0]).toHaveProperty('MakeId');
      expect(makes[0]).toHaveProperty('MakeName');
    });
  });
});
```

## Performance Testing

```javascript
// src/lib/api/__tests__/performance.test.js
describe('API Performance Tests', () => {
  describe('Caching Performance', () => {
    it('should improve response time with caching', async () => {
      fetchMock.get('https://dummyjson.com/users?limit=30&skip=0', {
        status: 200,
        body: { users: [], total: 0 },
        delay: 100, // Simulate network delay
      });

      // First call (no cache)
      const start1 = Date.now();
      await fetchUsers();
      const time1 = Date.now() - start1;

      // Second call (with cache)
      const start2 = Date.now();
      await fetchUsers();
      const time2 = Date.now() - start2;

      expect(time2).toBeLessThan(time1);
      expect(fetchMock.calls()).toHaveLength(1); // Only one API call
    });
  });

  describe('Rate Limiting', () => {
    it('should respect rate limits', async () => {
      const rateLimitedFetch = createRateLimitedFetch(100);
      
      fetchMock.get('begin:https://api.example.com/', {
        status: 200,
        body: { data: 'test' },
      });

      const start = Date.now();
      
      // Make multiple rapid calls
      await Promise.all([
        rateLimitedFetch('https://api.example.com/1'),
        rateLimitedFetch('https://api.example.com/2'),
        rateLimitedFetch('https://api.example.com/3'),
      ]);
      
      const duration = Date.now() - start;
      
      // Should take at least 200ms due to rate limiting
      expect(duration).toBeGreaterThanOrEqual(200);
    });
  });
});
```

## End-to-End Testing

```javascript
// src/lib/api/__tests__/e2e.test.js
describe('End-to-End API Workflows', () => {
  it('should complete user authentication workflow', async () => {
    // Mock authentication
    fetchMock.post('https://dummyjson.com/auth/login', {
      status: 200,
      body: {
        id: 1,
        username: 'testuser',
        token: 'mock-token',
      },
    });

    // Mock user details
    fetchMock.get('https://dummyjson.com/users/1', {
      status: 200,
      body: {
        id: 1,
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        username: 'testuser',
      },
    });

    // Complete workflow
    const user = await authenticateUser('testuser', 'password');
    
    expect(user).toBeTruthy();
    expect(user.username).toBe('testuser');
    expect(user.firstName).toBe('Test');
  });

  it('should complete flight booking workflow', async () => {
    // Mock flight generation
    fetchMock.get('begin:https://api.adsbdb.com/v0/', {
      status: 200,
      body: { response: null },
    });

    // Generate flights
    const flights = await adsbService.generateRandomFlights(10);
    
    expect(flights).toHaveLength(10);
    
    // Simulate booking process
    const selectedFlight = flights[0];
    expect(selectedFlight).toHaveProperty('pricing');
    expect(selectedFlight).toHaveProperty('availability');
    expect(selectedFlight.availability.economy).toBeGreaterThan(0);
  });
});
```

## Test Utilities

```javascript
// src/test/utils.js
export const createMockUser = (overrides = {}) => ({
  id: '1',
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  username: 'testuser',
  membershipTier: 'Bronze',
  ...overrides,
});

export const createMockFlight = (overrides = {}) => ({
  id: 'FL001',
  airline: 'Test Airlines',
  flightNumber: 'TA123',
  aircraft: 'Boeing 737-800',
  origin: { code: 'JFK', city: 'New York' },
  destination: { code: 'LAX', city: 'Los Angeles' },
  pricing: { economy: 299, business: 899, first: 1599 },
  ...overrides,
});

export const waitForApiCall = (timeout = 100) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const mockEnvironmentVariables = (vars) => {
  const originalEnv = { ...process.env };
  
  Object.assign(process.env, vars);
  
  return () => {
    process.env = originalEnv;
  };
};
```

## Running Tests

### Command Line Scripts

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:integration": "jest --testPathPattern=integration",
    "test:unit": "jest --testPathPattern=unit",
    "test:api": "jest src/lib/api"
  }
}
```

### Test Execution

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run only API tests
npm run test:api

# Run in watch mode
npm run test:watch

# Run integration tests only
npm run test:integration
```

## Continuous Integration

### GitHub Actions Example

```yaml
# .github/workflows/test.yml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run unit tests
      run: npm run test:unit
    
    - name: Run integration tests
      run: npm run test:integration
      env:
        GEOAPIFY_API_KEY: ${{ secrets.GEOAPIFY_API_KEY }}
    
    - name: Generate coverage report
      run: npm run test:coverage
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v2
```

## Best Practices

1. **Mock External APIs**: Always mock external API calls in unit tests
2. **Test Error Scenarios**: Include tests for network failures, invalid responses
3. **Cache Testing**: Verify caching behavior works correctly
4. **Performance Testing**: Test rate limiting and response times
5. **Integration Testing**: Test real APIs when credentials are available
6. **Environment Variables**: Test both with and without required environment variables
7. **Edge Cases**: Test with empty responses, malformed data, timeout scenarios
8. **Coverage Goals**: Maintain high test coverage (80%+ recommended)
9. **Test Organization**: Group related tests in describe blocks
10. **Clean Up**: Always clean up mocks and cache between tests
