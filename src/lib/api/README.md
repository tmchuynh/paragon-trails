# Paragon Trails API Services

*Last Updated: June 15, 2025*

This directory contains all API service modules for the Paragon Trails application. These services handle external API integrations, data transformation, and provide a unified interface for travel-related functionalities.

## 🌐 Service Overview

The API services are organized into several specialized modules:

- **🔧 Core Services** (`services.ts`) - Base API utilities and common services
- **👤 User Management** (`users.ts`) - Authentication and profile management
- **📝 Travel Content** (`content.ts`) - Blog posts, reviews, and travel content
- **🎯 Attractions** (`attractions.ts`) - Real-time POI and tourist attractions
- **🌍 Geography** (`geography.ts`) - Countries, cities, and geographic data
- **✈️ External Services** (`services/`) - Specialized external API integrations

## 🏗️ Architecture

### Base Services (`services.ts`)
- **🗄️ API Cache**: Intelligent caching system with configurable TTL (5-minute default)
- **⚡ Rate Limiting**: Configurable rate limiting for API calls (200ms default)
- **🔄 Generic Fetch Wrapper**: Standardized error handling and request formatting
- **🎭 Service Classes**: Pre-configured services for all major data types:
  - User, Destination, Post, Product, Contact
  - Vehicle, Payment, Address, Email services

### External Service Integrations
- **✈️ ADSB Service** (`services/adsbService.ts`) - Real-time aircraft and flight tracking data
- **🚗 NHTSA Service** (`services/nhtsa.ts`) - Vehicle information and safety specifications
- **🌍 Geography Service** (`geography.ts`) - Country/city data via GeographQL
- **📍 Attractions Service** (`attractions.ts`) - POI data via Geoapify Places API

## Quick Start

```typescript
import { UserService, apiCache, fetchAPI } from './services';
import { fetchUsers, authenticateUser } from './users';
import { fetchTravelPosts, fetchReviews } from './content';
import { adsbService } from './services/adsbService';
import { nHTSAService } from './services/nhtsa';

// Fetch users
const users = await fetchUsers(10);

// Authenticate user
const user = await authenticateUser('username', 'password');

// Get travel content
const posts = await fetchTravelPosts(20);
const reviews = await fetchReviews();

// Generate flight data
const flights = await adsbService.generateRandomFlights(10);

// Get vehicle data
const vehicles = await nHTSAService.getAllMakes();
```

## Environment Variables

For full functionality, set these environment variables:

```env
GEOAPIFY_API_BASE_URL=https://api.geoapify.com
GEOAPIFY_PLACE_DETAILS_ENDPOINT=/v2/place-details
GEOAPIFY_API_KEY=your_geoapify_key
```

## File Structure

```
api/
├── README.md                 # This file
├── services.md              # Core services documentation
├── users.md                 # User service documentation
├── content.md               # Content service documentation
├── attractions.md           # Attractions service documentation
├── services/
│   ├── adsbService.md       # ADSB service documentation
│   └── nhtsa.md            # NHTSA service documentation
└── TESTING.md              # Testing guidelines and examples
```

## External APIs Used

| Service | API | Purpose | Rate Limits |
|---------|-----|---------|-------------|
| Users | DummyJSON | User management and authentication | None specified |
| Content | JSONPlaceholder | Blog posts, comments, galleries | None specified |
| Flights | ADSB Database | Real aircraft and flight data | Cached 5min |
| Vehicles | NHTSA VPIC | Vehicle specifications | Cached 5min |
| Attractions | Geoapify | Points of interest and place details | API key required |

## Key Features

- **Automatic Caching**: All API responses are cached with configurable TTL
- **Rate Limiting**: Built-in rate limiting to prevent API abuse
- **Error Handling**: Comprehensive error handling with logging
- **Data Transformation**: Converts external API data to internal formats
- **Type Safety**: Full TypeScript support with detailed interfaces
- **Fallback Data**: Generates realistic fallback data when APIs are unavailable

## Performance Considerations

- API responses are cached for 5 minutes by default
- Rate limiting prevents excessive API calls (200ms between requests)
- Batch operations where possible to reduce API calls
- Graceful degradation when external APIs are unavailable

## Security

- API keys are stored in environment variables
- No sensitive data is logged
- Authentication tokens are handled securely
- Input validation on all API parameters

## Contributing

When adding new API services:

1. Follow the existing service pattern
2. Include proper TypeScript interfaces
3. Implement caching and rate limiting
4. Add comprehensive error handling
5. Create corresponding documentation
6. Include unit tests

For detailed information about each service, see the individual documentation files.
