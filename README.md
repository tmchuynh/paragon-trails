# Paragon Trails - Travel Booking Platform

A modern travel booking platform built with Next.js, featuring real-time data from external APIs and a beautiful, responsive interface.

## Features

- **Real API Integration**: Uses multiple external APIs for dynamic data
  - [DummyJSON](https://dummyjson.com/) for users, products, and authentication
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for posts and reviews
  - [FakerAPI](https://fakerapi.it/) for destinations and contact information

- **Travel Services**: Book flights, hotels, tours, activities, and vehicles
- **User Authentication**: Demo authentication with API integration
- **Responsive Design**: Beautiful UI that works on all devices
- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS

## API Services

The application integrates with the following external APIs:

### DummyJSON API (https://dummyjson.com)
- **Users**: Fetch user profiles and authentication
- **Products**: Used to generate hotels, activities, tours, and vehicles
- **Categories**: Product categorization for different travel services

### JSONPlaceholder API (https://jsonplaceholder.typicode.com)
- **Posts**: Used for blog content and reviews
- **Comments**: User reviews and feedback
- **General**: Placeholder content for various sections

### FakerAPI (https://fakerapi.it)
- **Destinations**: Generate travel destination data
- **Addresses**: Location information for various services
- **Companies**: Generate service provider information

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data Architecture

The application has been updated to use real API data instead of static mock data:

- **Users**: Fetched from DummyJSON with authentication support
- **Destinations**: Generated from FakerAPI address data
- **Hotels**: Transformed from DummyJSON products
- **Flights**: Generated using multiple API sources
- **Tours**: Created from DummyJSON product data
- **Activities**: Mapped from DummyJSON product categories
- **Vehicles**: Rental cars generated from product data

## Demo Authentication

For demonstration purposes, you can log in with any email and password. The system will:
1. Attempt to authenticate with the DummyJSON API
2. Fall back to demo mode with real user data from the API
3. Provide a working authentication experience

## Caching & Performance

- **API Caching**: 5-minute cache for API responses to improve performance
- **Rate Limiting**: Built-in rate limiting to respect API limits
- **Error Handling**: Graceful fallbacks when APIs are unavailable

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: React Context API
- **Data Fetching**: Native fetch with caching
- **Authentication**: Custom auth context with API integration

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
