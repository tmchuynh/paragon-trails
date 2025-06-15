# Paragon Trails - Travel Booking Platform

A modern, full-featured travel booking platform built with Next.js, featuring real-time data from external APIs, comprehensive cart functionality, and a beautiful, responsive interface.

## 🌟 Features

### Core Functionality
- **Complete Booking System**: Book flights, hotels, activities, attractions, and vehicles
- **Shopping Cart**: Full cart functionality with quantity management, guest selection, and checkout
- **User Authentication**: Secure authentication system with session management
- **Multi-Currency Support**: Real-time currency conversion with 9+ supported currencies
- **Real-time Search**: Advanced search and filtering across all services

### API Integrations
- **DummyJSON API**: Users, products, and authentication
- **GeographQL API**: Country and city data for destinations
- **Geoapify Places API**: Real-time attractions and points of interest
- **ADSB Exchange**: Live flight tracking data
- **NHTSA API**: Vehicle specifications and safety data

### Technical Features
- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Beautiful UI that works on all devices
- **Performance Optimized**: API caching, debounced search, loading skeletons
- **Error Handling**: Comprehensive error boundaries and fallbacks

## 🚀 API Services

The application integrates with multiple external APIs for dynamic, real-time data:

### Core APIs

#### **GeographQL API** 
- **Purpose**: Country and city data for destinations
- **Usage**: Powers the destinations routing system
- **Features**: Complete country/city hierarchy with metadata

#### **Geoapify Places API** 
- **Purpose**: Real-time attractions and points of interest
- **Usage**: City attractions with detailed information
- **Features**: Search, filtering, contact details, opening hours

#### **DummyJSON API** (https://dummyjson.com)
- **Purpose**: Users, products, and authentication
- **Usage**: User profiles, travel services data
- **Features**: Hotels, activities, vehicles sourced from products API

### Specialized APIs

#### **ADSB Exchange API**
- **Purpose**: Real-time aircraft and flight tracking
- **Usage**: Live flight data and aircraft information
- **Features**: Flight tracking, aircraft specifications

#### **NHTSA API**
- **Purpose**: Vehicle safety and specification data
- **Usage**: Detailed vehicle information
- **Features**: Safety ratings, specifications, recall data

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Environment Variables
Create a `.env.local` file with the following variables:

```env
# Geoapify API (Required for attractions)
NEXT_PUBLIC_GEOAPIFY_API_KEY=your_geoapify_api_key
NEXT_PUBLIC_GEOAPIFY_API_BASE_URL=https://api.geoapify.com
NEXT_PUBLIC_GEOAPIFY_PLACES_ENDPOINT=/v2/places
NEXT_PUBLIC_GEOAPIFY_PLACE_DETAILS_ENDPOINT=/v2/place-details
NEXT_PUBLIC_GEOAPIFY_GEOCODE_SEARCH_ENDPOINT=/v1/geocode/search

# ADSB Exchange API (Optional - for flight tracking)
NEXT_PUBLIC_ADSB_API_KEY=your_adsb_api_key
NEXT_PUBLIC_ADSB_API_BASE_URL=https://api.adsbexchange.com

# Other API endpoints (most have free tiers)
NEXT_PUBLIC_DUMMYJSON_API_URL=https://dummyjson.com
```

### Development Server

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

### Key Directories

- **`/src/app/`** - Next.js App Router pages and layouts
- **`/src/components/`** - Reusable React components
- **`/src/context/`** - React Context providers for state management
- **`/src/lib/api/`** - API service modules and external integrations
- **`/src/data/`** - Data transformation and service modules
- **`/src/hooks/`** - Custom React hooks
- **`/public/`** - Static assets, fonts, icons, and images

### Context Architecture

The application uses React Context for state management:

- **AuthContext** - User authentication and session management
- **CartContext** - Shopping cart functionality across all services
- **CurrencyContext** - Multi-currency support and exchange rates
- **NotFoundContext** - 404 error handling and navigation

## 🎯 Key Features Implemented

### ✅ Complete Cart System
- Add to cart functionality for all service types
- Quantity and guest management
- Automatic price calculations with taxes and fees
- Checkout process with booking confirmations

### ✅ Destinations System
- Three-tier navigation: Countries → Cities → Attractions
- Real-time attraction data with detailed information
- Search and filtering capabilities
- Geographic data integration

### ✅ User Experience
- Responsive design for all screen sizes
- Loading skeletons and error boundaries
- Toast notifications for user feedback
- Breadcrumb navigation and search

### ✅ Performance Optimizations
- API response caching (5-minute TTL)
- Debounced search (300ms delay)
- Rate limiting for API calls
- Lazy loading and code splitting

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: React Context API
- **Data Fetching**: Native fetch with caching
- **Icons**: Lucide React + Heroicons
- **Notifications**: Sonner (Toast system)
- **Forms**: React Hook Form + Zod validation

## 🔐 Authentication

Demo authentication system that:
1. Attempts real authentication with DummyJSON API
2. Falls back to demo mode with actual user data
3. Maintains session persistence with localStorage
4. Provides role-based access control

## 📱 Responsive Design

Fully responsive design with:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interfaces
- Accessible navigation patterns

## Development

The project follows modern development practices:
- TypeScript for type safety
- Component-based architecture
- API service layer for data management
- Responsive design principles
- Accessible UI components

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
