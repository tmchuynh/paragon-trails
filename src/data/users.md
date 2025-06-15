# Users Data Service

## Overview
The Users data service provides functionality to fetch and manage user data for the Paragon Trails application. This service has been migrated from static mock data to use the DummyJSON API via the `UserService` for realistic user profiles and travel-related data.

## Service Architecture
- **Primary Data Source**: DummyJSON API via `UserService`
- **User Management**: Comprehensive user profiles with travel preferences
- **Travel Data Integration**: Budgets, trips, and favorites management
- **Backward Compatibility**: Maintains legacy exports for existing components

## Exports

### Core Services
```typescript
export { UserService } from "@/lib/api/services";
```

### Types
```typescript
export type { User } from "@/lib/interfaces/services/user";
```

### Main Functions

#### `getMockUserData()`
Fetches all users from the DummyJSON API.

**Returns**: `Promise<User[]>`

**Usage**:
```typescript
const users = await getMockUserData();
```

#### `getMockUser(id: string)`
Retrieves a single user by ID.

**Parameters**:
- `id`: User ID

**Returns**: `Promise<User | null>`

**Usage**:
```typescript
const user = await getMockUser("1");
```

#### Travel-Related Data Functions

##### `getBudgetsByUser(userId: string)`
Retrieves budget information for a specific user.

**Parameters**:
- `userId`: User ID

**Returns**: `Promise<Budget[]>`

**Usage**:
```typescript
const budgets = await getBudgetsByUser("1");
```

##### `getTripsByUser(userId: string)`
Retrieves trip history for a specific user.

**Parameters**:
- `userId`: User ID

**Returns**: `Promise<Trip[]>`

**Usage**:
```typescript
const trips = await getTripsByUser("1");
```

##### `getUserFavorites(userId: string)`
Retrieves user's favorite destinations, hotels, activities, etc.

**Parameters**:
- `userId`: User ID

**Returns**: `Promise<Favorites>`

**Usage**:
```typescript
const favorites = await getUserFavorites("1");
```

### Legacy Exports
```typescript
export const mockUserData = []; // Empty array for backward compatibility
export { getMockUserData as mockUserData_async };
```

## User Data Structure

### Core User Information
Based on DummyJSON user structure, enhanced for travel applications:

```typescript
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string; // Typically hashed in real applications
  image: string;
  
  // Personal Information
  age: number;
  gender: string;
  birthDate: string;
  
  // Address Information
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
  
  // Authentication & Security
  token: string;
  refreshToken: string;
  
  // Additional DummyJSON fields
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
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
```

## Travel-Specific Data Extensions

### Budget Management
```typescript
interface Budget {
  id: string;
  userId: string;
  name: string;
  totalAmount: number;
  spentAmount: number;
  currency: string;
  category: "vacation" | "business" | "weekend" | "adventure";
  startDate: string;
  endDate: string;
  destinations: string[];
  breakdown: {
    flights: number;
    accommodation: number;
    activities: number;
    meals: number;
    transportation: number;
    miscellaneous: number;
  };
}
```

### Trip History
```typescript
interface UserTrip {
  id: string;
  userId: string;
  name: string;
  status: "planned" | "booked" | "completed" | "cancelled";
  startDate: string;
  endDate: string;
  destinations: string[];
  totalCost: number;
  travelers: number;
  rating?: number;
  review?: string;
}
```

### User Favorites
```typescript
interface Favorites {
  userId: string;
  destinations: string[];
  hotels: string[];
  activities: string[];
  tours: string[];
  airlines: string[];
  preferences: {
    travelStyle: string[];
    accommodation: string[];
    activities: string[];
    cuisines: string[];
    budgetRange: {
      min: number;
      max: number;
    };
  };
}
```

## Service Integration

### UserService Methods
The service provides comprehensive user management functionality:

```typescript
// Core user operations
await UserService.getAllUsers();
await UserService.getUserById(id);
await UserService.createUser(userData);
await UserService.updateUser(id, updates);
await UserService.deleteUser(id);

// Authentication
await UserService.authenticateUser(credentials);
await UserService.refreshToken(refreshToken);

// Travel-specific operations
await UserService.getBudgetsByUser(userId);
await UserService.getTripsByUser(userId);
await UserService.getUserFavorites(userId);
await UserService.updateUserPreferences(userId, preferences);
```

### Authentication Integration
```typescript
// Login flow
const loginUser = async (email: string, password: string) => {
  try {
    const user = await UserService.authenticateUser({ email, password });
    // Store authentication tokens
    localStorage.setItem('authToken', user.token);
    localStorage.setItem('refreshToken', user.refreshToken);
    return user;
  } catch (error) {
    throw new Error('Authentication failed');
  }
};

// Token refresh
const refreshAuthToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (refreshToken) {
    const newTokens = await UserService.refreshToken(refreshToken);
    localStorage.setItem('authToken', newTokens.token);
    return newTokens;
  }
};
```

## Data Features

### Rich User Profiles
- **Complete Demographics**: Age, gender, location, occupation
- **Contact Information**: Email, phone, physical address
- **Financial Data**: Banking information, payment methods
- **Professional Info**: Company, job title, department
- **Personal Details**: Physical characteristics, preferences

### Travel Preferences
- **Budget Ranges**: Preferred spending levels
- **Travel Styles**: Adventure, luxury, budget, cultural
- **Accommodation Preferences**: Hotel types, amenities
- **Activity Interests**: Adventure, culture, relaxation
- **Destination Wishlist**: Saved destinations and experiences

### Security Features
- **Token-Based Authentication**: JWT tokens for secure access
- **Refresh Tokens**: Automatic session renewal
- **Role-Based Access**: User permission levels
- **Encrypted Data**: Sensitive information protection

## Error Handling

### API Error Management
```typescript
try {
  const users = await getMockUserData();
  return users;
} catch (error) {
  console.error('Error fetching users:', error);
  // Handle specific error types
  if (error.status === 401) {
    // Handle authentication error
  } else if (error.status === 404) {
    // Handle not found error
  }
  return [];
}
```

### Data Validation
- Type checking on API responses
- Validation of required user fields
- Sanitization of user input data
- Error logging for debugging

## Performance Considerations

### Caching Strategy
```typescript
// User data caching
const userCache = new Map();

const getCachedUser = async (userId: string) => {
  if (userCache.has(userId)) {
    return userCache.get(userId);
  }
  
  const user = await UserService.getUserById(userId);
  userCache.set(userId, user);
  return user;
};
```

### Data Loading Optimization
- Lazy loading of user details
- Pagination for user lists
- Selective field loading
- Background data synchronization

## Usage Examples

### User Authentication
```typescript
import { getMockUser } from '@/data/users';

const AuthComponent = () => {
  const [user, setUser] = useState(null);
  
  const handleLogin = async (userId: string) => {
    try {
      const userData = await getMockUser(userId);
      setUser(userData);
      // Store authentication state
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <div>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};
```

### User Profile Management
```typescript
import { getUserFavorites, getBudgetsByUser } from '@/data/users';

const UserDashboard = ({ userId }) => {
  const [favorites, setFavorites] = useState(null);
  const [budgets, setBudgets] = useState([]);
  
  useEffect(() => {
    Promise.all([
      getUserFavorites(userId),
      getBudgetsByUser(userId)
    ]).then(([favData, budgetData]) => {
      setFavorites(favData);
      setBudgets(budgetData);
    });
  }, [userId]);
  
  return (
    <div>
      <FavoritesSection favorites={favorites} />
      <BudgetSection budgets={budgets} />
    </div>
  );
};
```

### Search and Filtering
```typescript
// Filter users by location
const getUsersByCity = async (city: string) => {
  const users = await getMockUserData();
  return users.filter(user => user.address.city === city);
};

// Filter by age range
const getUsersByAgeRange = async (minAge: number, maxAge: number) => {
  const users = await getMockUserData();
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
};

// Search by name
const searchUsersByName = async (searchTerm: string) => {
  const users = await getMockUserData();
  return users.filter(user => 
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
```

## Migration Notes

### From Static to Dynamic
- Previously used static mock user arrays
- Now fetches real user data from DummyJSON API
- Enhanced with travel-specific features
- Maintains same interface for consuming components

### Authentication Improvements
- Added token-based authentication
- Implemented refresh token mechanism
- Enhanced security with proper error handling
- Added role-based access control

## Security Considerations

### Data Protection
- **Sensitive Data**: Banking and personal information handled securely
- **Password Security**: Passwords should be hashed (DummyJSON provides plain text for demo)
- **Token Management**: Secure storage and transmission of authentication tokens
- **Privacy Compliance**: GDPR and privacy regulation compliance

### Best Practices
```typescript
// Sanitize user data before storage
const sanitizeUserData = (user: User) => ({
  ...user,
  password: '[REDACTED]', // Never expose passwords
  ssn: user.ssn.replace(/\d(?=\d{4})/g, '*'), // Mask sensitive data
  bank: {
    ...user.bank,
    cardNumber: user.bank.cardNumber.replace(/\d(?=\d{4})/g, '*')
  }
});
```

## Dependencies
- `@/lib/api/services` - UserService
- `@/lib/interfaces/services/user` - User type definitions
- DummyJSON API - External user data source

## Future Enhancements

### Advanced User Features
- **Social Profiles**: Integration with social media accounts
- **Travel History Analytics**: Detailed travel pattern analysis
- **Recommendation Engine**: Personalized travel suggestions
- **Group Travel**: Family and group account management

### Enhanced Security
- **Two-Factor Authentication**: 2FA implementation
- **Biometric Authentication**: Fingerprint and face recognition
- **Device Management**: Trusted device registration
- **Activity Monitoring**: Suspicious activity detection

### Integration Improvements
- **CRM Integration**: Customer relationship management
- **Marketing Automation**: Personalized marketing campaigns
- **Analytics Platform**: User behavior tracking
- **Support System**: Customer service integration

## Testing Strategy
- Unit tests for user data functions
- Integration tests with DummyJSON API
- Authentication flow testing
- Security vulnerability testing
- Performance testing with large user datasets
