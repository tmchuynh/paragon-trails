import { User } from "@/lib/interfaces/services/user";
import { API_ENDPOINTS, apiCache, fetchAPI } from "./services";

// DummyJSON API Types
interface DummyJSONUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string;
}

interface DummyJSONResponse {
  users: DummyJSONUser[];
  total: number;
  skip: number;
  limit: number;
}

// Convert DummyJSON user to our User interface
function mapDummyJSONUser(dummyUser: DummyJSONUser): User {
  const memberSince = new Date(
    Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
  );
  const lastLogin = new Date(
    Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
  );

  return {
    id: dummyUser.id.toString(),
    email: dummyUser.email,
    firstName: dummyUser.firstName,
    lastName: dummyUser.lastName,
    username: dummyUser.username,
    password: dummyUser.password,
    emailVerified: Math.random() > 0.3,
    phoneNumber: dummyUser.phone,
    phoneNumberVerified: Math.random() > 0.4,
    memberSince: memberSince.toISOString().split("T")[0],
    lastLogin: lastLogin.toISOString().split("T")[0],
    membershipStatus: Math.random() > 0.1 ? "Active" : "Inactive",
    membershipTier: ["Bronze", "Silver", "Gold", "Platinum"][
      Math.floor(Math.random() * 4)
    ],
    membershipExpiry: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    favorites: {
      hotels: [],
      vehicles: [],
      attractions: [],
      destinations: [],
      flights: [],
      tours: [],
      activities: [],
    },
    rewards: [
      {
        rewardId: 1,
        points: Math.floor(Math.random() * 2000) + 500,
        title: "Loyalty Points",
      },
      {
        rewardId: 2,
        points: Math.floor(Math.random() * 500) + 100,
        title: "Referral Bonus",
      },
    ],
    rewardsPoints: {
      current: Math.floor(Math.random() * 3000) + 1000,
      tier: ["Bronze", "Silver", "Gold", "Platinum"][
        Math.floor(Math.random() * 4)
      ],
      expiry: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
    },
    totalBookings: {
      thisMonth: Math.floor(Math.random() * 10) + 1,
      thisYear: Math.floor(Math.random() * 50) + 10,
      growth: `${Math.floor(Math.random() * 30) + 5}%`,
    },
    totalSpent: {
      thisYear: Math.floor(Math.random() * 10000) + 2000,
      growth: `${Math.floor(Math.random() * 25) + 5}%`,
    },
    upcomingTrips: Math.floor(Math.random() * 5) + 1,
    completedTrips: Math.floor(Math.random() * 20) + 5,
    avatar: dummyUser.image,
    address: {
      street: dummyUser.address.address,
      city: dummyUser.address.city,
      state: dummyUser.address.state,
      postalCode: dummyUser.address.postalCode,
      country: dummyUser.address.country,
      coordinates: {
        latitude: dummyUser.address.coordinates.lat,
        longitude: dummyUser.address.coordinates.lng,
      },
    },
  };
}

// Fetch users from DummyJSON API
export async function fetchUsers(
  limit: number = 30,
  skip: number = 0
): Promise<User[]> {
  const cacheKey = `users_${limit}_${skip}`;
  const cached = apiCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetchAPI<DummyJSONResponse>(
      `${API_ENDPOINTS.DUMMY_JSON}/users?limit=${limit}&skip=${skip}`
    );

    const users = response.users.map(mapDummyJSONUser);
    apiCache.set(cacheKey, users);

    return users;
  } catch (error) {
    console.error("Failed to fetch users from DummyJSON:", error);
    return [];
  }
}

// Fetch a single user by ID
export async function fetchUserById(id: string): Promise<User | null> {
  const cacheKey = `user_${id}`;
  const cached = apiCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetchAPI<DummyJSONUser>(
      `${API_ENDPOINTS.DUMMY_JSON}/users/${id}`
    );

    const user = mapDummyJSONUser(response);
    apiCache.set(cacheKey, user);

    return user;
  } catch (error) {
    console.error(`Failed to fetch user ${id} from DummyJSON:`, error);
    return null;
  }
}

// Search users by query
export async function searchUsers(query: string): Promise<User[]> {
  const cacheKey = `search_users_${query}`;
  const cached = apiCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetchAPI<DummyJSONResponse>(
      `${API_ENDPOINTS.DUMMY_JSON}/users/search?q=${encodeURIComponent(query)}`
    );

    const users = response.users.map(mapDummyJSONUser);
    apiCache.set(cacheKey, users);

    return users;
  } catch (error) {
    console.error("Failed to search users from DummyJSON:", error);
    return [];
  }
}

// Authenticate user (simulated with DummyJSON data)
export async function authenticateUser(
  username: string,
  password: string
): Promise<User | null> {
  try {
    const response = await fetchAPI<{
      id: number;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      gender: string;
      image: string;
      token: string;
    }>(`${API_ENDPOINTS.DUMMY_JSON}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });

    // Fetch full user details
    const fullUser = await fetchUserById(response.id.toString());
    return fullUser;
  } catch (error) {
    console.error("Authentication failed:", error);
    return null;
  }
}
