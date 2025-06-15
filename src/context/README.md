# Context Documentation Overview

This directory contains React Context providers for the Paragon Trails application, providing centralized state management for various application concerns.

## Available Contexts

### 🔐 [AuthContext](./AuthContext.md)
**Purpose:** User authentication and session management  
**Key Features:**
- User login/logout functionality
- Session persistence with localStorage
- API authentication with demo fallback
- Loading states and session validation

### 🛒 [CartContext](./CartContext.md)
**Purpose:** Shopping cart management for travel bookings  
**Key Features:**
- Multi-service support (tours, hotels, flights, vehicles, attractions)
- Intelligent duplicate handling per service type
- Automatic price calculations (taxes, fees, discounts)
- Quantity and guest management

### 💱 [CurrencyContext](./CurrencyContext.md)
**Purpose:** Multi-currency support and exchange rate management  
**Key Features:**
- Real-time exchange rate fetching
- 9 supported currencies with automatic fallback
- Price conversion and locale-aware formatting
- Currency preference persistence

### 🔍 [NotFoundContext](./NotFoundContext.md)
**Purpose:** 404 error handling and navigation management  
**Key Features:**
- Not-found state management
- Custom error page rendering
- Navigation suggestions and analytics tracking

## Context Architecture

### Provider Hierarchy
```tsx
function App() {
  return (
    <AuthProvider>
      <CurrencyProvider>
        <CartProvider>
          <NotFoundProvider>
            <AppContent />
          </NotFoundProvider>
        </CartProvider>
      </CurrencyProvider>
    </AuthProvider>
  );
}
```

### Hook Usage Pattern
```tsx
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';

function MyComponent() {
  const { user, isAuthenticated } = useAuth();
  const { state: cartState, dispatch } = useCart();
  const { formatPrice, currentCurrency } = useCurrency();
  
  // Component logic...
}
```

## Common Integration Patterns

### Authentication-Protected Cart
```tsx
function BookingComponent() {
  const { isAuthenticated, user } = useAuth();
  const { state: cartState } = useCart();
  
  if (!isAuthenticated) {
    return <LoginPrompt />;
  }
  
  return (
    <div>
      <h2>Welcome {user?.firstName}</h2>
      <CartSummary items={cartState.items} />
    </div>
  );
}
```

### Currency-Aware Price Display
```tsx
function PriceTag({ price, originalCurrency = "USD" }) {
  const { formatPrice } = useCurrency();
  
  return (
    <span className="price">
      {formatPrice(price, originalCurrency)}
    </span>
  );
}
```

### Context-Aware Error Handling
```tsx
function ProtectedPage({ children }) {
  const { isAuthenticated } = useAuth();
  const { setNotFound } = useNotFound();
  
  useEffect(() => {
    if (!isAuthenticated) {
      setNotFound(location.pathname, 'permission');
    }
  }, [isAuthenticated]);
  
  return isAuthenticated ? children : <NotFoundPage />;
}
```

## State Management Philosophy

### Separation of Concerns
- **Auth:** User identity and permissions
- **Cart:** Business logic and transactions
- **Currency:** Internationalization and pricing
- **NotFound:** Error states and navigation

### Data Flow
1. **Authentication** determines user access levels
2. **Currency** affects price display throughout the app
3. **Cart** manages user selections and purchases
4. **NotFound** handles navigation errors and recovery

## Performance Considerations

### Context Optimization
- Each context is isolated to prevent unnecessary re-renders
- Heavy calculations (like price conversions) are memoized
- Loading states prevent UI inconsistencies

### Memory Management
- localStorage is used judiciously for persistence
- Exchange rates are cached with automatic refresh
- Cart state is cleaned up on logout

## Testing Strategies

### Mock Providers
```tsx
// Test utility for mocking contexts
function createMockProvider(initialState) {
  return ({ children }) => (
    <AuthContext.Provider value={mockAuthValue}>
      <CartContext.Provider value={mockCartValue}>
        {children}
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}
```

### Integration Testing
```tsx
// Test context interactions
test('user can add items to cart after login', async () => {
  const { getByText, getByTestId } = render(
    <TestProviders>
      <LoginPage />
      <ProductPage />
    </TestProviders>
  );
  
  // Test login flow
  await userEvent.click(getByText('Login'));
  
  // Test cart interaction
  await userEvent.click(getByTestId('add-to-cart'));
  
  expect(getByText('1 item in cart')).toBeInTheDocument();
});
```

## Environment Setup

### Required Environment Variables
```env
# Currency API (optional - has fallback)
NEXT_PUBLIC_EXCHANGE_RATE_API_KEY=your_api_key

# Authentication API endpoints
NEXT_PUBLIC_API_BASE_URL=https://api.paragon-trails.com
```

### Local Storage Keys
- `auth_user` - User session data
- `preferred-currency` - Currency preference

## Error Boundaries

### Context Error Handling
```tsx
function ContextErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      fallback={<div>Something went wrong with app state.</div>}
      onError={(error) => console.error('Context error:', error)}
    >
      {children}
    </ErrorBoundary>
  );
}
```

## Migration Guide

### Adding New Contexts
1. Create context file following existing patterns
2. Add TypeScript interfaces for state and context type
3. Implement provider component with useReducer or useState
4. Create custom hook for consuming context
5. Add to provider hierarchy in correct order
6. Update documentation

### Breaking Changes
- Always maintain backward compatibility in context APIs
- Use deprecation warnings before removing features
- Provide migration utilities for major version changes

## Dependencies

### Shared Dependencies
- `react` - Core React hooks and components
- `typescript` - Type safety and interfaces

### Context-Specific Dependencies
- **Auth:** `@/lib/api/services`, `@/lib/utils/storage`
- **Currency:** External exchange rate API
- **Cart:** Price calculation utilities
- **NotFound:** Navigation and analytics libraries

## Contributing

### Code Style
- Use TypeScript for all context files
- Follow React hooks best practices
- Implement proper error boundaries
- Add comprehensive JSDoc comments

### Testing Requirements
- Unit tests for all reducers and helpers
- Integration tests for context interactions
- Mock external API dependencies
- Test error scenarios and edge cases
