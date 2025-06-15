# ADSB Database API Integration

This document describes the integration of ADSB Database API for real flight data in the Paragon Trails travel platform.

## Overview

The ADSB Database API (https://www.adsbdb.com/) provides real-time aircraft, flight route, and airline data. This integration enhances the flights section with realistic flight information instead of purely mock data.

## API Endpoints Used

### 1. Aircraft Data

```
GET https://api.adsbdb.com/v0/aircraft/[MODE_S || REGISTRATION]
```

Returns aircraft information including:

- Aircraft type and manufacturer
- Registration details
- Owner country information
- Aircraft photos (when available)

**Example Response:**

```json
{
  "response": {
    "aircraft": {
      "type": "DR.400 R Remo 200",
      "icao_type": "DR40",
      "manufacturer": "Robin",
      "mode_s": "3D325C",
      "registration": "D-ERIA",
      "registered_owner_country_iso_name": "DE",
      "registered_owner_country_name": "Germany",
      "registered_owner": "Private"
    }
  }
}
```

### 2. Flight Route Data

```
GET https://api.adsbdb.com/v0/callsign/[CALLSIGN]
```

Returns flight route information including:

- Origin and destination airports
- Airline information
- Callsign details

**Example Response:**

```json
{
  "response": {
    "flightroute": {
      "callsign": "SAS2168",
      "airline": {
        "name": "Scandinavian Airlines System",
        "icao": "SAS",
        "iata": "SK"
      },
      "origin": {
        "iata_code": "GOT",
        "name": "Gothenburg-Landvetter Airport",
        "municipality": "Gothenburg"
      },
      "destination": {
        "iata_code": "ARN",
        "name": "Stockholm-Arlanda Airport",
        "municipality": "Stockholm"
      }
    }
  }
}
```

### 3. Airline Data

```
GET https://api.adsbdb.com/v0/airline/[AIRLINE_CODE]
```

Returns airline information including:

- Airline name and codes
- Country information
- Callsign details

## Implementation

### Service Layer

The `ADSBService` class (`/src/lib/api/services/adsbService.ts`) handles:

- API requests with caching (5-minute cache)
- Error handling and fallbacks
- Rate limiting to avoid API abuse
- Data transformation for our Flight interface

### Key Features

- **Caching**: 5-minute cache to reduce API calls
- **Error Handling**: Graceful fallbacks to mock data if API fails
- **Rate Limiting**: Small delays between requests to respect API limits
- **Real Data Integration**: Uses actual aircraft registrations and flight routes

### Data Flow

1. `generateRandomFlights()` method creates realistic flight data
2. Fetches aircraft, route, and airline data from ADSB API
3. Combines real data with generated pricing and booking information
4. Falls back to mock data if API calls fail

## Usage

### Basic Flight Generation

```typescript
import { adsbService } from "@/lib/api/services";

// Generate 20 flights with real ADSB data
const flights = await adsbService.generateRandomFlights(20);
```

### In Flight Pages

The main flights page (`/src/app/flights/page.tsx`) automatically uses the ADSB integration through the `getMockFlights()` function in `/src/data/flights.ts`.

### Test Page

Visit `/adsb-test` to see a dedicated test page demonstrating the ADSB integration with real-time data fetching.

## Configuration

### Identifiers Used

The service uses a predefined set of aircraft identifiers and callsigns:

**Aircraft Mode S / Registration:**

- N12345, G-ABCD, D-ERIA, F-GKXY, JA123A
- VH-ABC, C-GABC, PH-ABC, OE-ABC, SE-ABC
- 3D325C, 406B2C, 4B1234, A12345, B23456

**Callsigns:**

- SAS2168, BAW123, DLH456, AFR789, KLM012
- UAE345, QFA678, SWR901, AUA234, LOT567
- AAL890, UAL123, DAL456, SWA789, JBU012

**Airline Codes:**

- SAS, BAW, DLH, AFR, KLM, UAE, QFA, SWR, AUA, LOT
- AAL, UAL, DAL, SWA, JBU

## Error Handling

The integration includes comprehensive error handling:

- API failures fall back to generated mock data
- Network errors are logged but don't break the user experience
- Rate limiting prevents API abuse
- Caching reduces redundant requests

## Benefits

1. **Realistic Data**: Real aircraft types, airlines, and routes
2. **Performance**: Caching and fallbacks ensure good user experience
3. **Reliability**: Graceful degradation when API is unavailable
4. **Cost Effective**: Free API with reasonable rate limits
5. **Educational**: Users see real aviation data

## Future Enhancements

Potential improvements:

- Real-time flight tracking data
- Historical flight data integration
- Airport weather information
- Flight delay predictions
- Live flight status updates

## Testing

Visit these pages to test the integration:

- `/flights` - Main flights page with ADSB data
- `/adsb-test` - Dedicated test page for ADSB integration

The development server shows ADSB API requests in the console for debugging.
