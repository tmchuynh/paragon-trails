import { Destination } from "@/lib/interfaces/services/destinations";
import { User } from "@/lib/interfaces/services/user";
import { adsbService } from "./services/adsbService";
import { nHTSAService } from "./services/nhtsa";

// Export new geography and destination services
export * from "./geography";
export * from "./destinations";
export * from "./attractions";

// Export services
export { adsbService, nHTSAService };

// API Services for external data sources
export const API_ENDPOINTS = {
  DUMMY_JSON: "https://dummyjson.com",
  JSON_PLACEHOLDER: "https://jsonplaceholder.typicode.com",
  FAKER_API: "https://fakerapi.it/api/v1",
  FAKER_API_V2: "https://fakerapi.it/api/v2",
  ADS_DB: "https://www.adsbdb.com/api",
  NHTSA_VPIC: "https://vpic.nhtsa.dot.gov/api",
  MAIL_TM: "https://api.mail.tm",
} as const;

// Generic API fetch wrapper
export async function fetchAPI<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `API call failed: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
}

// Rate limiting helper for API calls
export function createRateLimitedFetch(delay: number = 100) {
  let lastCallTime = 0;

  return async function rateLimitedFetch<T>(
    url: string,
    options?: RequestInit
  ): Promise<T> {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;

    if (timeSinceLastCall < delay) {
      await new Promise((resolve) =>
        setTimeout(resolve, delay - timeSinceLastCall)
      );
    }

    lastCallTime = Date.now();
    return fetchAPI<T>(url, options);
  };
}

// Cache wrapper for API responses
export class APICache {
  private cache = new Map<
    string,
    { data: any; timestamp: number; ttl: number }
  >();

  set(key: string, data: any, ttl: number = 5 * 60 * 1000) {
    // 5 minutes default
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  clear() {
    this.cache.clear();
  }
}

export const apiCache = new APICache();

// Rate limited fetch instance
const rateLimitedFetch = createRateLimitedFetch(200);

// User Service - Uses DummyJSON for user data
export class UserService {
  static async getAllUsers(limit: number = 30): Promise<User[]> {
    const cacheKey = `users_all_${limit}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.DUMMY_JSON}/users?limit=${limit}`
      );
      const users: User[] = response.users.map((user: any) => ({
        id: user.id.toString(),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        phoneNumber: user.phone,
        memberSince: new Date(Date.now() - Math.random() * 31536000000)
          .toISOString()
          .split("T")[0], // Random date within last year
        lastLogin: new Date(Date.now() - Math.random() * 2592000000)
          .toISOString()
          .split("T")[0], // Random date within last month
        membershipStatus: Math.random() > 0.1 ? "Active" : "Inactive",
        membershipTier: ["Bronze", "Silver", "Gold", "Platinum"][
          Math.floor(Math.random() * 4)
        ],
        membershipExpiry: new Date(Date.now() + 31536000000)
          .toISOString()
          .split("T")[0], // 1 year from now
        emailVerified: Math.random() > 0.2,
        phoneNumberVerified: Math.random() > 0.3,
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
            points: Math.floor(Math.random() * 2000),
            title: "Loyalty Points",
          },
        ],
        rewardsPoints: {
          current: Math.floor(Math.random() * 5000),
          tier: ["Bronze", "Silver", "Gold", "Platinum"][
            Math.floor(Math.random() * 4)
          ],
          expiry: new Date(Date.now() + 31536000000)
            .toISOString()
            .split("T")[0],
        },
        totalBookings: {
          thisMonth: Math.floor(Math.random() * 10),
          thisYear: Math.floor(Math.random() * 50),
          growth: `${Math.floor(Math.random() * 30)}%`,
        },
        totalSpent: {
          thisYear: Math.floor(Math.random() * 10000),
          thisMonth: Math.floor(Math.random() * 2000),
          growth: `${Math.floor(Math.random() * 25)}%`,
        },
      }));

      apiCache.set(cacheKey, users);
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }

  static async getUserById(id: string): Promise<User | null> {
    const cacheKey = `user_${id}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const user = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.DUMMY_JSON}/users/${id}`
      );
      const transformedUser: User = {
        id: user.id.toString(),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        phoneNumber: user.phone,
        memberSince: new Date(Date.now() - Math.random() * 31536000000)
          .toISOString()
          .split("T")[0],
        lastLogin: new Date(Date.now() - Math.random() * 2592000000)
          .toISOString()
          .split("T")[0],
        membershipStatus: "Active",
        membershipTier: "Gold",
        membershipExpiry: new Date(Date.now() + 31536000000)
          .toISOString()
          .split("T")[0],
        emailVerified: true,
        phoneNumberVerified: true,
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
            points: Math.floor(Math.random() * 2000),
            title: "Loyalty Points",
          },
        ],
        rewardsPoints: {
          current: Math.floor(Math.random() * 5000),
          tier: "Gold",
          expiry: new Date(Date.now() + 31536000000)
            .toISOString()
            .split("T")[0],
        },
        totalBookings: {
          thisMonth: Math.floor(Math.random() * 10),
          thisYear: Math.floor(Math.random() * 50),
          growth: `${Math.floor(Math.random() * 30)}%`,
        },
        totalSpent: {
          thisYear: Math.floor(Math.random() * 10000),
          lastYear: Math.floor(Math.random() * 2000),
        },
        favoriteDestinations: Math.floor(Math.random() * 10),
        upcomingTrips: Math.floor(Math.random() * 10),
        recentActivities: [],
      };

      apiCache.set(cacheKey, transformedUser);
      return transformedUser;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  static async authenticateUser(
    email: string,
    password: string
  ): Promise<User | null> {
    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.DUMMY_JSON}/auth/login`,
        {
          method: "POST",
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      );

      if (response.token) {
        return await this.getUserById(response.id);
      }
      return null;
    } catch (error) {
      console.error("Authentication error:", error);
      return null;
    }
  }

  static async getBudgetsByUser(userId: string): Promise<any[]> {
    const cacheKey = `budgets_user_${userId}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      // Simulate fetching budgets for a user
      const budgets = Array.from({ length: 5 }, (_, index) => ({
        id: (index + 1).toString(),
        name: `Budget ${index + 1}`,
        amount: Math.floor(Math.random() * 5000) + 1000,
        currency: "USD",
        createdAt: new Date(Date.now() - Math.random() * 31536000000)
          .toISOString()
          .split("T")[0],
      }));

      apiCache.set(cacheKey, budgets);
      return budgets;
    } catch (error) {
      console.error("Error fetching budgets:", error);
      return [];
    }
  }

  static async getUserFavorites(userId: string): Promise<User["favorites"]> {
    const cacheKey = `user_favorites_${userId}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      // Simulate fetching user favorites
      const favorites: User["favorites"] = {
        hotels: [],
        vehicles: [],
        attractions: [],
        destinations: [],
        flights: [],
        tours: [],
        activities: [],
      };

      apiCache.set(cacheKey, favorites);
      return favorites;
    } catch (error) {
      console.error("Error fetching user favorites:", error);
      return {
        hotels: [],
        vehicles: [],
        attractions: [],
        destinations: [],
        flights: [],
        tours: [],
        activities: [],
      };
    }
  }

  static async getTripsByUser(userId: string): Promise<any[]> {
    const cacheKey = `trips_user_${userId}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      // Simulate fetching trips for a user
      const trips = Array.from({ length: 3 }, (_, index) => ({
        id: (index + 1).toString(),
        destination: `Destination ${index + 1}`,
        startDate: new Date(
          Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000
        )
          .toISOString()
          .split("T")[0],
        endDate: new Date(Date.now() + Math.random() * 60 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
        budget: Math.floor(Math.random() * 5000) + 1000,
        status: ["Planned", "In Progress", "Completed"][
          Math.floor(Math.random() * 3)
        ],
      }));

      apiCache.set(cacheKey, trips);
      return trips;
    } catch (error) {
      console.error("Error fetching trips:", error);
      return [];
    }
  }
}

// Destination Service - Uses FakerAPI for destination data
export class DestinationService {
  static async getAllDestinations(limit: number = 50): Promise<Destination[]> {
    const cacheKey = `destinations_all_${limit}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const [personsResponse, addressesResponse] = await Promise.all([
        rateLimitedFetch<any>(
          `${API_ENDPOINTS.FAKER_API}/persons?_quantity=${limit}&_locale=en_US`
        ),
        rateLimitedFetch<any>(
          `${API_ENDPOINTS.FAKER_API}/addresses?_quantity=${limit}&_locale=en_US`
        ),
      ]);

      const destinations: Destination[] = personsResponse.data.map(
        (person: any, index: number) => {
          const address =
            addressesResponse.data[index] || addressesResponse.data[0];
          const countries = [
            "France",
            "Japan",
            "USA",
            "Italy",
            "Spain",
            "Greece",
            "Thailand",
            "Egypt",
            "Brazil",
            "Australia",
          ];
          const continents = [
            "Europe",
            "Asia",
            "North America",
            "South America",
            "Africa",
            "Oceania",
          ];

          return {
            id: (index + 1).toString(),
            name: address.city,
            country: countries[Math.floor(Math.random() * countries.length)],
            continent:
              continents[Math.floor(Math.random() * continents.length)],
            region: `${continents[Math.floor(Math.random() * continents.length)]} Region`,
            description: `Discover the beauty and culture of ${address.city}, a captivating destination with rich history and modern attractions.`,
            images: [
              `https://picsum.photos/1200/600?random=${index + 1}`,
              `https://picsum.photos/1200/600?random=${index + 100}`,
              `https://picsum.photos/1200/600?random=${index + 200}`,
            ],
            popularWith: [
              "Couples",
              "Families",
              "Solo travelers",
              "Adventure seekers",
            ].slice(0, Math.floor(Math.random() * 3) + 1),
            population: Math.floor(Math.random() * 10000000) + 100000,
            capital: address.city,
            area: {
              total: Math.floor(Math.random() * 1000) + 50,
              unit: "km²",
            },
            geography: {
              coordinates: {
                latitude:
                  parseFloat(address.latitude) || Math.random() * 180 - 90,
                longitude:
                  parseFloat(address.longitude) || Math.random() * 360 - 180,
              },
              timezone: "UTC+0",
              climate: ["Tropical", "Mediterranean", "Continental", "Oceanic"][
                Math.floor(Math.random() * 4)
              ],
              terrain:
                "Varied terrain with mountains, plains, and coastal areas",
            },
            economy: {
              currency: "USD",
              currencySymbol: "$",
              exchangeRate: Math.random() * 2 + 0.5,
              costOfLiving: ["Low", "Medium", "High"][
                Math.floor(Math.random() * 3)
              ],
            },
            culture: {
              languages: ["English", "Local Language"],
              religion: "Various",
              traditions: "Rich cultural traditions and festivals",
            },
            attractions: [],
            hotels: [],
            flights: [],
            tours: [],
            activities: [],
            vehicles: [],
            rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
            reviews: Math.floor(Math.random() * 1000) + 100,
            priceRange: ["$", "$$", "$$$"][Math.floor(Math.random() * 3)],
            bestTimeToVisit: "Year-round",
            tags: ["Popular", "Adventure", "Culture"].slice(
              0,
              Math.floor(Math.random() * 2) + 1
            ),
          };
        }
      );

      apiCache.set(cacheKey, destinations);
      return destinations;
    } catch (error) {
      console.error("Error fetching destinations:", error);
      return [];
    }
  }

  static async getDestinationById(id: string): Promise<Destination | null> {
    const destinations = await this.getAllDestinations();
    return destinations.find((dest) => dest.id === id) || null;
  }
}

// Post Service - Uses JSONPlaceholder for blog posts, reviews, etc.
export class PostService {
  static async getAllPosts(limit: number = 100): Promise<any[]> {
    const cacheKey = `posts_all_${limit}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const posts = await rateLimitedFetch<any[]>(
        `${API_ENDPOINTS.JSON_PLACEHOLDER}/posts?_limit=${limit}`
      );
      apiCache.set(cacheKey, posts);
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

  static async getPostById(id: string): Promise<any | null> {
    const cacheKey = `post_${id}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const post = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.JSON_PLACEHOLDER}/posts/${id}`
      );
      apiCache.set(cacheKey, post);
      return post;
    } catch (error) {
      console.error("Error fetching post:", error);
      return null;
    }
  }

  static async getCommentsByPostId(postId: string): Promise<any[]> {
    const cacheKey = `comments_${postId}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const comments = await rateLimitedFetch<any[]>(
        `${API_ENDPOINTS.JSON_PLACEHOLDER}/posts/${postId}/comments`
      );
      apiCache.set(cacheKey, comments);
      return comments;
    } catch (error) {
      console.error("Error fetching comments:", error);
      return [];
    }
  }
}

// Product Service - Uses DummyJSON for travel products (hotels, tours, etc.)
export class ProductService {
  static async getAllProducts(limit: number = 30): Promise<any[]> {
    const cacheKey = `products_all_${limit}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.DUMMY_JSON}/products?limit=${limit}`
      );
      apiCache.set(cacheKey, response.products);
      return response.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }

  static async getProductById(id: string): Promise<any | null> {
    const cacheKey = `product_${id}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const product = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.DUMMY_JSON}/products/${id}`
      );
      apiCache.set(cacheKey, product);
      return product;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }

  static async getProductsByCategory(category: string): Promise<any[]> {
    const cacheKey = `products_category_${category}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.DUMMY_JSON}/products/category/${category}`
      );
      apiCache.set(cacheKey, response.products);
      return response.products;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return [];
    }
  }
}

// Contact Service - Uses FakerAPI for contact information
export class ContactService {
  static async generateContactInfo(quantity: number = 10): Promise<any[]> {
    const cacheKey = `contacts_${quantity}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.FAKER_API}/companies?_quantity=${quantity}&_locale=en_US`
      );
      apiCache.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching contact info:", error);
      return [];
    }
  }
}

// Vehicle Service - Uses NHTSA VPIC API for vehicle data
export class VehicleAPIService {
  static async getVehicleMakes(): Promise<any[]> {
    const cacheKey = "vehicle_makes";
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.NHTSA_VPIC}/vehicles/GetMakesForVehicleType/car?format=json`
      );
      const makes = response.Results || [];
      apiCache.set(cacheKey, makes);
      return makes;
    } catch (error) {
      console.error("Error fetching vehicle makes:", error);
      return [];
    }
  }

  static async getVehicleModels(makeId: string): Promise<any[]> {
    const cacheKey = `vehicle_models_${makeId}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.NHTSA_VPIC}/vehicles/GetModelsForMakeId/${makeId}?format=json`
      );
      const models = response.Results || [];
      apiCache.set(cacheKey, models);
      return models;
    } catch (error) {
      console.error("Error fetching vehicle models:", error);
      return [];
    }
  }
}

// Payment Service - Uses FakerAPI v2 for payment data
export class PaymentService {
  static async generateCreditCards(quantity: number = 10): Promise<any[]> {
    const cacheKey = `credit_cards_${quantity}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.FAKER_API_V2}/creditCards?_quantity=${quantity}&_locale=en_US`
      );
      apiCache.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching credit cards:", error);
      return [];
    }
  }
}

// Address Service - Uses FakerAPI v2 for enhanced address data
export class AddressService {
  static async generateAddresses(quantity: number = 10): Promise<any[]> {
    const cacheKey = `addresses_v2_${quantity}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.FAKER_API_V2}/addresses?_quantity=${quantity}&_locale=en_US`
      );
      apiCache.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching addresses:", error);
      return [];
    }
  }
}

// Email Service - Uses Mail.tm for temporary email functionality
export class EmailService {
  static async getDomains(): Promise<any[]> {
    const cacheKey = "mail_domains";
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await rateLimitedFetch<any>(
        `${API_ENDPOINTS.MAIL_TM}/domains`
      );
      apiCache.set(cacheKey, response);
      return response;
    } catch (error) {
      console.error("Error fetching mail domains:", error);
      return [];
    }
  }
}
