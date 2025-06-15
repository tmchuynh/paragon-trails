# CartContext Documentation

## Overview

The `CartContext` provides comprehensive shopping cart functionality for the Paragon Trails application, managing cart items, pricing calculations, and various travel service bookings using React's useReducer hook.

## Features

- Multi-service support (tours, hotels, flights, vehicles, attractions, activities)
- Intelligent duplicate detection and handling
- Automatic price calculations (subtotal, taxes, fees, discounts)
- Quantity and guest management
- Date range handling
- Cancellation policy tracking

## Types

### CartItem Interface
```typescript
interface CartItem {
  id: string;
  type: "tour" | "hotel" | "flight" | "vehicle" | "attraction" | "activity";
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  dates: {
    startDate: string;
    endDate: string;
  };
  guests: number;
  location: string;
  features: string[];
  cancellationPolicy: string;
  quantity: number;
}
```

### CartState Interface
```typescript
interface CartState {
  items: CartItem[];
  total: number;
  subtotal: number;
  taxes: number;
  fees: number;
  discounts: number;
  isLoading: boolean;
}
```

## Actions

The cart supports the following actions:

- `ADD_ITEM` - Add new item to cart
- `REMOVE_ITEM` - Remove item from cart
- `UPDATE_QUANTITY` - Update item quantity
- `UPDATE_DATES` - Update booking dates
- `UPDATE_GUESTS` - Update guest count
- `CLEAR_CART` - Empty the cart
- `SET_LOADING` - Set loading state
- `APPLY_DISCOUNT` - Apply discount code

## Components

### CartProvider

The main context provider component that manages cart state.

**Props:**
- `children: ReactNode` - Child components to wrap

## Duplicate Detection

The cart intelligently handles duplicates based on service type:

### Flight Duplicates
- Same name, dates, and location
- **Behavior:** Increases guest count instead of quantity

### Hotel/Vehicle Duplicates  
- Same name, dates, and location
- **Behavior:** Increases quantity (multiple rooms/vehicles)

### Tour/Activity/Attraction Duplicates
- Same name, dates, and location
- **Behavior:** Prevents duplicate additions

## Price Calculations

The cart automatically calculates:

- **Subtotal:** `price × quantity × guests` for all items
- **Service Fees:** 5% of subtotal
- **Taxes:** 8% of (subtotal + fees)
- **Total:** subtotal + fees + taxes - discounts

## Usage

### Setup

Wrap your application with the CartProvider:

```tsx
import { CartProvider } from '@/context/CartContext';

function App() {
  return (
    <CartProvider>
      <YourAppContent />
    </CartProvider>
  );
}
```

### Using the Hook

```tsx
import { useCart, cartHelpers } from '@/context/CartContext';

function ProductComponent() {
  const { state, dispatch } = useCart();

  const addToCart = () => {
    const item = {
      id: 'tour-1',
      type: 'tour' as const,
      name: 'Mountain Adventure',
      description: 'Amazing mountain tour',
      image: '/tour-image.jpg',
      price: 299,
      dates: {
        startDate: '2025-07-01',
        endDate: '2025-07-03'
      },
      guests: 2,
      location: 'Colorado',
      features: ['Guide included', 'Meals provided'],
      cancellationPolicy: 'Free cancellation up to 24 hours'
    };

    cartHelpers.addItem(dispatch, item);
  };

  return (
    <div>
      <h3>Cart Items: {state.items.length}</h3>
      <p>Total: {cartHelpers.formatPrice(state.total)}</p>
      <button onClick={addToCart}>Add Tour</button>
    </div>
  );
}
```

## Helper Functions

### cartHelpers

The context provides several helper functions:

#### addItem(dispatch, item)
Adds an item to the cart with duplicate handling.

#### removeItem(dispatch, id)
Removes an item from the cart by ID.

#### updateQuantity(dispatch, id, quantity)
Updates the quantity of a cart item.

#### updateDates(dispatch, id, dates)
Updates the booking dates for a cart item.

#### updateGuests(dispatch, id, guests)
Updates the guest count for a cart item.

#### checkIfDuplicate(items, newItem)
Checks if an item would be a duplicate.

#### isInCart(state, id)
Checks if an item is already in the cart.

#### clearCart(dispatch)
Empties the entire cart.

#### formatPrice(price)
Formats a price as USD currency.

## Service Type Behaviors

### Tours, Activities, Attractions
- **Quantity:** Fixed at 1 (no quantity increase)
- **Duplicates:** Prevented
- **Use Case:** One-time bookings per date/location

### Hotels
- **Quantity:** Supports increase (multiple rooms)
- **Duplicates:** Increases quantity
- **Use Case:** Multiple room bookings

### Vehicles
- **Quantity:** Supports increase (multiple vehicles)
- **Duplicates:** Increases quantity  
- **Use Case:** Multiple vehicle rentals

### Flights
- **Quantity:** Uses guest count (passengers)
- **Duplicates:** Increases guest count
- **Use Case:** Multiple passengers on same flight

## State Management

The cart uses React's `useReducer` for predictable state management:

```tsx
const [state, dispatch] = useReducer(cartReducer, initialState);
```

## Error Handling

- Quantity cannot go below 0
- Items with 0 quantity are automatically removed
- Invalid actions are ignored
- Price calculations handle edge cases

## Performance Considerations

- Calculations only run when necessary
- Duplicate detection is optimized per service type
- State updates are batched through reducer

## Integration Examples

### Adding a Hotel
```tsx
const hotel = {
  id: 'hotel-123',
  type: 'hotel',
  name: 'Luxury Resort',
  price: 450,
  dates: { startDate: '2025-08-01', endDate: '2025-08-05' },
  guests: 2,
  location: 'Hawaii',
  // ... other properties
};

cartHelpers.addItem(dispatch, hotel);
```

### Updating Booking Dates
```tsx
cartHelpers.updateDates(dispatch, 'hotel-123', {
  startDate: '2025-08-02',
  endDate: '2025-08-06'
});
```

### Checking Cart Status
```tsx
const isItemInCart = cartHelpers.isInCart(state, 'hotel-123');
const wouldBeDuplicate = cartHelpers.checkIfDuplicate(state.items, newItem);
```
