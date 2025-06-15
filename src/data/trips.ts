import { SavedTrip, TripBudget } from "@/lib/interfaces/services/trips";

export const mockTrips: SavedTrip[] = [
  {
    id: "trip-001",
    destination: "1", // Paris
    destinationName: "Paris, France",
    hotel: "HOTEL-001",
    hotelName: "Hotel de Crillon",
    startDate: new Date("2024-03-15"),
    endDate: new Date("2024-03-22"),
    guests: 2,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-15"),
    status: "upcoming",
    totalCost: 4500,
    currency: "USD",
    notes: "Romantic getaway for anniversary",
    isPublic: false,
    bookingConfirmations: {
      flight: "FL001",
      hotel: "HOTEL-001",
      activities: ["TOUR-PAR-001", "ACT001"],
    },
    companions: ["Sarah Johnson"],
    imageUrl: "/images/paris-trip.jpg",
  },
  {
    id: "trip-002",
    destination: "2", // Tokyo
    destinationName: "Tokyo, Japan",
    hotel: "HOTEL-015",
    hotelName: "Park Hyatt Tokyo",
    startDate: new Date("2024-05-10"),
    endDate: new Date("2024-05-18"),
    guests: 4,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-05"),
    status: "upcoming",
    totalCost: 8200,
    currency: "USD",
    notes: "Family trip with kids",
    isPublic: true,
    bookingConfirmations: {
      flight: "FL002",
      hotel: "HOTEL-015",
      activities: ["TOUR-TOK-001", "ACT002"],
    },
    companions: ["Emma Smith", "Lucas Smith", "Sophie Smith"],
    imageUrl: "/images/tokyo-trip.jpg",
  },
  {
    id: "trip-003",
    destination: "5", // Bali
    destinationName: "Bali, Indonesia",
    hotel: "HOTEL-035",
    hotelName: "The Mulia",
    startDate: new Date("2023-12-01"),
    endDate: new Date("2023-12-10"),
    guests: 2,
    createdAt: new Date("2023-10-15"),
    updatedAt: new Date("2023-11-20"),
    status: "completed",
    totalCost: 3200,
    currency: "USD",
    notes: "Relaxing beach vacation",
    isPublic: false,
    companions: ["Mike Chen"],
    imageUrl: "/images/bali-trip.jpg",
  },
  {
    id: "trip-004",
    destination: "3", // New York
    destinationName: "New York City, USA",
    hotel: "HOTEL-025",
    hotelName: "The Plaza",
    startDate: new Date("2023-09-15"),
    endDate: new Date("2023-09-20"),
    guests: 1,
    createdAt: new Date("2023-08-01"),
    updatedAt: new Date("2023-08-15"),
    status: "completed",
    totalCost: 2800,
    currency: "USD",
    notes: "Business trip with some sightseeing",
    isPublic: false,
    imageUrl: "/images/nyc-trip.jpg",
  },
  {
    id: "trip-005",
    destination: "6", // London
    destinationName: "London, England",
    hotel: "HOTEL-020",
    hotelName: "The Savoy",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-07-08"),
    guests: 3,
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-25"),
    status: "upcoming",
    totalCost: 5500,
    currency: "USD",
    notes: "Friends reunion trip",
    isPublic: true,
    companions: ["Alice Brown", "David Wilson"],
    imageUrl: "/images/london-trip.jpg",
  },
];

export const mockBudgets: TripBudget[] = [
  {
    id: "budget-001",
    tripId: "trip-001",
    name: "Paris Anniversary Trip",
    targetAmount: 4500,
    currentAmount: 3200,
    currency: "USD",
    targetDate: new Date("2024-03-01"),
    createdAt: new Date("2023-10-01"),
    updatedAt: new Date("2024-01-20"),
    category: "vacation",
    monthlyContribution: 600,
    isActive: true,
    notes: "Saving for our 5th anniversary trip to Paris",
  },
  {
    id: "budget-002",
    tripId: "trip-002",
    name: "Tokyo Family Adventure",
    targetAmount: 8200,
    currentAmount: 4100,
    currency: "USD",
    targetDate: new Date("2024-04-15"),
    createdAt: new Date("2023-12-01"),
    updatedAt: new Date("2024-01-20"),
    category: "family",
    monthlyContribution: 1200,
    isActive: true,
    notes: "First family trip to Japan",
  },
  {
    id: "budget-003",
    tripId: "trip-005",
    name: "London Friends Reunion",
    targetAmount: 5500,
    currentAmount: 2200,
    currency: "USD",
    targetDate: new Date("2024-06-15"),
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-20"),
    category: "vacation",
    monthlyContribution: 800,
    isActive: true,
    notes: "Meeting up with university friends",
  },
  {
    id: "budget-004",
    name: "Switzerland Ski Trip",
    targetAmount: 6000,
    currentAmount: 1500,
    currency: "USD",
    targetDate: new Date("2024-12-01"),
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-20"),
    category: "adventure",
    monthlyContribution: 500,
    isActive: true,
    notes: "Winter ski vacation in the Alps",
  },
  {
    id: "budget-005",
    name: "Emergency Travel Fund",
    targetAmount: 3000,
    currentAmount: 2800,
    currency: "USD",
    targetDate: new Date("2024-06-01"),
    createdAt: new Date("2023-08-01"),
    updatedAt: new Date("2024-01-20"),
    category: "business",
    monthlyContribution: 200,
    isActive: true,
    notes: "For unexpected business travel or family emergencies",
  },
];

// Helper function to get trips by user ID
export function getTripsByUser(_userId: string): SavedTrip[] {
  // In a real app, this would filter by user ID
  return mockTrips;
}

// Helper function to get budgets by user ID
export function getBudgetsByUser(_userId: string): TripBudget[] {
  // In a real app, this would filter by user ID
  return mockBudgets;
}

// Helper function to get trip statistics
export function getTripStats(userId: string) {
  const trips = getTripsByUser(userId);
  const now = new Date();

  const upcomingTrips = trips.filter(
    (trip) => trip.status === "upcoming" && trip.startDate > now
  );

  const pastTrips = trips.filter(
    (trip) =>
      trip.status === "completed" ||
      (trip.status === "upcoming" && trip.endDate < now)
  );

  const ongoingTrips = trips.filter(
    (trip) =>
      trip.status === "ongoing" ||
      (trip.status === "upcoming" &&
        trip.startDate <= now &&
        trip.endDate >= now)
  );

  const totalSpent = pastTrips.reduce(
    (sum, trip) => sum + (trip.totalCost || 0),
    0
  );
  const avgTripCost = pastTrips.length > 0 ? totalSpent / pastTrips.length : 0;

  return {
    total: trips.length,
    upcoming: upcomingTrips.length,
    past: pastTrips.length,
    ongoing: ongoingTrips.length,
    totalSpent,
    avgTripCost,
    destinations: [...new Set(trips.map((trip) => trip.destinationName))]
      .length,
  };
}

// Helper function to get budget statistics
export function getBudgetStats(userId: string) {
  const budgets = getBudgetsByUser(userId);
  const activebudgets = budgets.filter((budget) => budget.isActive);

  const totalTarget = activebudgets.reduce(
    (sum, budget) => sum + budget.targetAmount,
    0
  );
  const totalSaved = activebudgets.reduce(
    (sum, budget) => sum + budget.currentAmount,
    0
  );
  const monthlyContributions = activebudgets.reduce(
    (sum, budget) => sum + (budget.monthlyContribution || 0),
    0
  );

  const progress = totalTarget > 0 ? (totalSaved / totalTarget) * 100 : 0;

  return {
    total: budgets.length,
    active: activebudgets.length,
    totalTarget,
    totalSaved,
    monthlyContributions,
    progress,
    remaining: totalTarget - totalSaved,
  };
}
