# User Service Documentation

This file documents the user management API service provided in `users.ts`.

## Overview

The User Service handles all user-related operations including authentication, profile management, and user data retrieval. It integrates with the DummyJSON API to provide realistic user data for the Paragon Trails application.

## Data Sources

- **Primary API**: [DummyJSON Users API](https://dummyjson.com/docs/users)
- **Authentication**: DummyJSON Auth API
- **Caching**: 5-minute TTL for all operations

## Interfaces

### DummyJSONUser (External API Response)

```typescript
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
  hair: { color: string; type: string; };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: { lat: number; lng: number; };
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
    address: { /* same as address above */ };
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
```

### User (Internal Application Interface)

```typescript
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  emailVerified: boolean;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  memberSince: string; // ISO date string
  lastLogin: string; // ISO date string
  membershipStatus: "Active" | "Inactive";
  membershipTier: "Bronze" | "Silver" | "Gold" | "Platinum";
  membershipExpiry: string; // ISO date string
  favorites: {
    hotels: string[];
    vehicles: string[];
    attractions: string[];
    destinations: string[];
    flights: string[];
    tours: string[];
    activities: string[];
  };
  rewards: Array<{
    rewardId: number;
    points: number;
    title: string;
  }>;
  rewardsPoints: {
    current: number;
    tier: string;
    expiry: string;
  };
  totalBookings: {
    thisMonth: number;
    thisYear: number;
    growth: string;
  };
  totalSpent: {
    thisYear: number;
    lastYear: number;
  };
  favoriteDestinations: number;
  upcomingTrips: number;
  recentActivities: Array<{
    id: number;
    type: string;
    title: string;
    date: string;
    status: string;
    amount: string;
    icon: any;
    color: string;
  }>;
  avatarUrl: string;
}
```

## API Functions

### fetchUsers

```typescript
async function fetchUsers(limit: number = 30, skip: number = 0): Promise<User[]>
```

**Purpose**: Retrieves a list of users with pagination support.

**Parameters**:
- `limit` (optional): Maximum number of users to return (default: 30)
- `skip` (optional): Number of users to skip for pagination (default: 0)

**Returns**: Array of `User` objects

**Caching**: Results cached with key `users_{limit}_{skip}`

**Example**:
```typescript
// Get first 20 users
const users = await fetchUsers(20);

// Get users 21-40 (pagination)
const nextUsers = await fetchUsers(20, 20);
```

### fetchUserById

```typescript
async function fetchUserById(id: string): Promise<User | null>
```

**Purpose**: Retrieves a specific user by their ID.

**Parameters**:
- `id`: User ID as string

**Returns**: `User` object or `null` if not found

**Caching**: Results cached with key `user_{id}`

**Example**:
```typescript
const user = await fetchUserById('1');
if (user) {
  console.log(`Found user: ${user.firstName} ${user.lastName}`);
}
```

### searchUsers

```typescript
async function searchUsers(query: string): Promise<User[]>
```

**Purpose**: Searches users by query string (searches across all user fields).

**Parameters**:
- `query`: Search query string

**Returns**: Array of matching `User` objects

**Caching**: Results cached with key `search_users_{query}`

**Example**:
```typescript
// Search for users with "john" in any field
const results = await searchUsers('john');

// Search by email domain
const gmailUsers = await searchUsers('@gmail.com');
```

### authenticateUser

```typescript
async function authenticateUser(username: string, password: string): Promise<User | null>
```

**Purpose**: Authenticates a user with username and password.

**Parameters**:
- `username`: User's username
- `password`: User's password

**Returns**: Authenticated `User` object or `null` if authentication fails

**Authentication Flow**:
1. Calls DummyJSON auth endpoint
2. Receives authentication token (30-minute expiry)
3. Fetches full user details
4. Returns complete user object

**Example**:
```typescript
const user = await authenticateUser('kminchelle', '0lelplR');
if (user) {
  console.log('Authentication successful');
  // Store user session
} else {
  console.log('Authentication failed');
}
```

## Data Transformation

The service transforms external DummyJSON data into the internal User format:

### Enhanced Fields

The transformation adds travel-specific fields not present in the original API:

- **Membership Information**: Status, tier, expiry dates
- **Travel Data**: Bookings, spending, favorite destinations
- **Rewards System**: Points, tiers, rewards history
- **Recent Activities**: Booking history, search activities
- **Verification Status**: Email and phone verification flags

### Generated Data

Some fields are generated with realistic random values:

```typescript
// Membership tier assignment
membershipTier: ["Bronze", "Silver", "Gold", "Platinum"][Math.floor(Math.random() * 4)]

// Recent activities generation
recentActivities: [
  {
    id: 1,
    type: "booking",
    title: "Hotel Booking Confirmed",
    date: randomRecentDate(),
    status: "completed",
    amount: "$" + randomAmount(),
    color: "green",
  },
  // ... more activities
]

// Rewards points
rewardsPoints: {
  current: Math.floor(Math.random() * 3000) + 1000,
  tier: randomTier(),
  expiry: futureDate(),
}
```

## Caching Strategy

### Cache Keys
- Users list: `users_{limit}_{skip}`
- Single user: `user_{id}`
- Search results: `search_users_{query}`

### Cache TTL
- Default: 5 minutes for all operations
- No cache for authentication (security)

### Cache Management
```typescript
// Check cache manually
const cached = apiCache.get('users_30_0');

// Clear user-related cache
apiCache.clear(); // Clears all cache
```

## Error Handling

All functions implement comprehensive error handling:

```typescript
try {
  const response = await fetchAPI<DummyJSONResponse>(url);
  const users = response.users.map(mapDummyJSONUser);
  apiCache.set(cacheKey, users);
  return users;
} catch (error) {
  console.error("Failed to fetch users from DummyJSON:", error);
  return []; // Return empty array on error
}
```

### Common Error Scenarios
- **Network failures**: Returns empty array or null
- **Invalid user ID**: Returns null
- **Authentication failure**: Returns null
- **API rate limiting**: Handled by base service rate limiting

## Usage Examples

### Basic User Operations

```typescript
import { fetchUsers, fetchUserById, searchUsers, authenticateUser } from './users';

// Get users for display
const users = await fetchUsers(10);
console.log(`Loaded ${users.length} users`);

// Get specific user
const user = await fetchUserById('5');
if (user) {
  console.log(`User: ${user.firstName} ${user.lastName}`);
  console.log(`Member since: ${user.memberSince}`);
  console.log(`Tier: ${user.membershipTier}`);
}

// Search functionality
const searchResults = await searchUsers('emily');
console.log(`Found ${searchResults.length} users matching 'emily'`);
```

### Authentication Flow

```typescript
// Login component
const handleLogin = async (username: string, password: string) => {
  try {
    const user = await authenticateUser(username, password);
    if (user) {
      // Store user in state/context
      setCurrentUser(user);
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  } catch (error) {
    setError('Login failed. Please try again.');
  }
};
```

### User Profile Display

```typescript
// Profile component
const UserProfile = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUserById(userId);
      setUser(userData);
      setLoading(false);
    };
    loadUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <img src={user.avatarUrl} alt={`${user.firstName}'s avatar`} />
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Member since: {user.memberSince}</p>
      <p>Tier: {user.membershipTier}</p>
      <p>Total bookings this year: {user.totalBookings.thisYear}</p>
      <p>Rewards points: {user.rewardsPoints.current}</p>
    </div>
  );
};
```

### Search Implementation

```typescript
// Search component
const UserSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<User[]>([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setSearching(true);
    try {
      const searchResults = await searchUsers(searchQuery);
      setResults(searchResults);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setSearching(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder="Search users..."
      />
      {searching && <div>Searching...</div>}
      <div>
        {results.map(user => (
          <div key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </div>
        ))}
      </div>
    </div>
  );
};
```

## Performance Considerations

### Pagination
```typescript
// Efficient pagination
const USERS_PER_PAGE = 20;
const page = 1; // Current page
const skip = (page - 1) * USERS_PER_PAGE;
const users = await fetchUsers(USERS_PER_PAGE, skip);
```

### Search Optimization
```typescript
// Debounced search to avoid excessive API calls
import { debounce } from 'lodash';

const debouncedSearch = debounce(async (query: string) => {
  const results = await searchUsers(query);
  setSearchResults(results);
}, 300);
```

### Memory Management
```typescript
// Clear cache when memory is a concern
const clearUserCache = () => {
  // Clear specific user-related cache entries
  apiCache.clear();
};
```

## Security Considerations

- **Password Storage**: Passwords are handled by DummyJSON (development only)
- **Authentication Tokens**: 30-minute expiry, should be stored securely
- **Personal Data**: Avoid logging sensitive user information
- **Input Validation**: Validate all user inputs before API calls

## Testing

### Sample Test Users (DummyJSON)
```typescript
// Test users available in DummyJSON
const testUsers = [
  { username: 'kminchelle', password: '0lelplR' },
  { username: 'dferrara', password: 'mmmmmmm' },
  { username: 'jhixon', password: 'leontina' },
  // ... more test users
];
```

### Unit Test Examples
```typescript
describe('User Service', () => {
  it('should fetch users with correct limit', async () => {
    const users = await fetchUsers(5);
    expect(users).toHaveLength(5);
  });

  it('should return null for invalid user ID', async () => {
    const user = await fetchUserById('invalid');
    expect(user).toBeNull();
  });

  it('should authenticate valid user', async () => {
    const user = await authenticateUser('kminchelle', '0lelplR');
    expect(user).toBeTruthy();
    expect(user?.username).toBe('kminchelle');
  });
});
```

## Best Practices

1. **Always handle null returns** from user fetch operations
2. **Implement proper loading states** for async operations
3. **Cache search results** to improve user experience
4. **Validate user input** before making API calls
5. **Use pagination** for large user lists
6. **Implement proper error boundaries** in React components
7. **Store authentication state** in secure, persistent storage
8. **Clear sensitive data** on logout
