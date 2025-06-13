import React, { createContext, ReactNode, useContext, useReducer } from 'react';

// Types
export interface CartItem {
  id: string;
  type: 'tour' | 'hotel' | 'flight';
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

export interface CartState {
  items: CartItem[];
  total: number;
  subtotal: number;
  taxes: number;
  fees: number;
  discounts: number;
  isLoading: boolean;
}

// Actions
type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'UPDATE_DATES'; payload: { id: string; dates: CartItem['dates'] } }
  | { type: 'UPDATE_GUESTS'; payload: { id: string; guests: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'APPLY_DISCOUNT'; payload: { code: string; amount: number } };

// Initial state
const initialState: CartState = {
  items: [],
  total: 0,
  subtotal: 0,
  taxes: 0,
  fees: 0,
  discounts: 0,
  isLoading: false,
};

// Reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let newItems;
      
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      
      return calculateTotals({ ...state, items: newItems });
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.id);
      return calculateTotals({ ...state, items: newItems });
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      
      return calculateTotals({ ...state, items: newItems });
    }
    
    case 'UPDATE_DATES': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, dates: action.payload.dates }
          : item
      );
      
      return { ...state, items: newItems };
    }
    
    case 'UPDATE_GUESTS': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, guests: action.payload.guests }
          : item
      );
      
      return calculateTotals({ ...state, items: newItems });
    }
    
    case 'CLEAR_CART': {
      return { ...initialState };
    }
    
    case 'SET_LOADING': {
      return { ...state, isLoading: action.payload };
    }
    
    case 'APPLY_DISCOUNT': {
      return calculateTotals({ 
        ...state, 
        discounts: state.discounts + action.payload.amount 
      });
    }
    
    default:
      return state;
  }
}

// Helper function to calculate totals
function calculateTotals(state: CartState): CartState {
  const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity * item.guests), 0);
  const fees = subtotal * 0.05; // 5% service fee
  const taxes = (subtotal + fees) * 0.08; // 8% tax
  const total = subtotal + fees + taxes - state.discounts;
  
  return {
    ...state,
    subtotal,
    fees,
    taxes,
    total: Math.max(0, total),
  };
}

// Context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

// Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Helper functions
export const cartHelpers = {
  addItem: (dispatch: React.Dispatch<CartAction>, item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  },
  
  removeItem: (dispatch: React.Dispatch<CartAction>, id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  },
  
  updateQuantity: (dispatch: React.Dispatch<CartAction>, id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  },
  
  updateDates: (dispatch: React.Dispatch<CartAction>, id: string, dates: CartItem['dates']) => {
    dispatch({ type: 'UPDATE_DATES', payload: { id, dates } });
  },
  
  updateGuests: (dispatch: React.Dispatch<CartAction>, id: string, guests: number) => {
    dispatch({ type: 'UPDATE_GUESTS', payload: { id, guests } });
  },
  
  clearCart: (dispatch: React.Dispatch<CartAction>) => {
    dispatch({ type: 'CLEAR_CART' });
  },
  
  formatPrice: (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  },
};
