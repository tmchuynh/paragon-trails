# CurrencyContext Documentation

## Overview

The `CurrencyContext` provides multi-currency support for the Paragon Trails application, handling currency conversion, formatting, and exchange rate management with automatic fallback mechanisms.

## Features

- Real-time exchange rate fetching
- Multiple currency support (USD, EUR, GBP, JPY, AUD, CAD, CNY, INR, RUB)
- Automatic fallback rates when API is unavailable
- Currency preference persistence
- Price conversion and formatting
- Automatic rate refresh (hourly)
- Error handling with graceful degradation

## Types

### CurrencyData Interface
```typescript
interface CurrencyData {
  code: string;    // ISO currency code (e.g., "USD")
  name: string;    // Full currency name (e.g., "US Dollar")
  symbol: string;  // Currency symbol (e.g., "$")
}
```

### CurrencyRates Interface
```typescript
interface CurrencyRates {
  [key: string]: number;  // Currency code to exchange rate mapping
}
```

### CurrencyContextType Interface
```typescript
interface CurrencyContextType {
  currentCurrency: CurrencyData;
  rates: CurrencyRates;
  isLoading: boolean;
  error: string | null;
  setCurrency: (currency: CurrencyData) => void;
  convertPrice: (price: number, fromCurrency?: string) => number;
  formatPrice: (price: number, fromCurrency?: string) => string;
  refreshRates: () => Promise<void>;
}
```

## Supported Currencies

| Code | Name | Symbol |
|------|------|--------|
| USD | US Dollar | $ |
| EUR | Euro | € |
| GBP | British Pound | £ |
| JPY | Japanese Yen | ¥ |
| AUD | Australian Dollar | A$ |
| CAD | Canadian Dollar | C$ |
| CNY | Chinese Yuan | ¥ |
| INR | Indian Rupee | ₹ |
| RUB | Russian Ruble | ₽ |

## Components

### CurrencyProvider

The main context provider component that manages currency state and operations.

**Props:**
- `children: React.ReactNode` - Child components to wrap

**State:**
- `currentCurrency` - Currently selected currency
- `rates` - Exchange rates relative to USD
- `isLoading` - Loading state for rate fetching
- `error` - Error message if rate fetching fails

## Methods

### setCurrency(currency: CurrencyData): void

Changes the current currency and persists the preference.

**Parameters:**
- `currency` - The currency data object to set as current

**Behavior:**
- Updates current currency state
- Saves preference to localStorage
- Validates currency against supported list

### convertPrice(price: number, fromCurrency?: string): number

Converts a price from one currency to the current currency.

**Parameters:**
- `price` - The price amount to convert
- `fromCurrency` - Source currency code (defaults to "USD")

**Returns:**
- `number` - Converted price in current currency

**Conversion Logic:**
1. Convert source price to USD (if not already USD)
2. Convert USD price to target currency using exchange rates

### formatPrice(price: number, fromCurrency?: string): string

Converts and formats a price according to the current currency's locale.

**Parameters:**
- `price` - The price amount to format
- `fromCurrency` - Source currency code (defaults to "USD")

**Returns:**
- `string` - Formatted price string with currency symbol

**Features:**
- Uses `Intl.NumberFormat` for proper locale formatting
- Handles special cases (e.g., JPY with no decimals)
- Includes currency symbols and proper formatting

### refreshRates(): Promise<void>

Manually refreshes exchange rates from the API.

**Behavior:**
- Fetches latest rates from exchange rate API
- Falls back to static rates if API fails
- Updates loading and error states

## Exchange Rate Management

### API Integration

The context uses the ExchangeRate-API service:
- **Endpoint:** `https://v6.exchangerate-api.com/v6/{API_KEY}/latest/USD`
- **Base Currency:** USD
- **Refresh Interval:** Every hour (3,600,000ms)
- **API Key:** Set via `NEXT_PUBLIC_EXCHANGE_RATE_API_KEY` environment variable

### Fallback Mechanism

When the API is unavailable, the context uses static fallback rates:

```typescript
const fallbackRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.5,
  AUD: 1.52,
  CAD: 1.36,
  CNY: 7.23,
  INR: 83.1,
  RUB: 92.5,
};
```

## Usage

### Setup

Wrap your application with the CurrencyProvider:

```tsx
import { CurrencyProvider } from '@/context/CurrencyContext';

function App() {
  return (
    <CurrencyProvider>
      <YourAppContent />
    </CurrencyProvider>
  );
}
```

### Using the Hook

```tsx
import { useCurrency, currencies } from '@/context/CurrencyContext';

function PriceComponent() {
  const { 
    currentCurrency, 
    formatPrice, 
    convertPrice, 
    setCurrency,
    isLoading 
  } = useCurrency();

  const originalPrice = 299; // USD

  const handleCurrencyChange = (currencyCode: string) => {
    const currency = currencies.find(c => c.code === currencyCode);
    if (currency) {
      setCurrency(currency);
    }
  };

  if (isLoading) {
    return <div>Loading exchange rates...</div>;
  }

  return (
    <div>
      <p>Price: {formatPrice(originalPrice)}</p>
      <p>Converted: {convertPrice(originalPrice)} {currentCurrency.code}</p>
      
      <select 
        value={currentCurrency.code}
        onChange={(e) => handleCurrencyChange(e.target.value)}
      >
        {currencies.map(currency => (
          <option key={currency.code} value={currency.code}>
            {currency.name} ({currency.symbol})
          </option>
        ))}
      </select>
    </div>
  );
}
```

### Currency Selector Component

```tsx
import { useCurrency, currencies } from '@/context/CurrencyContext';

function CurrencySelector() {
  const { currentCurrency, setCurrency } = useCurrency();

  return (
    <div className="currency-selector">
      <label>Currency:</label>
      <select 
        value={currentCurrency.code}
        onChange={(e) => {
          const currency = currencies.find(c => c.code === e.target.value);
          if (currency) setCurrency(currency);
        }}
      >
        {currencies.map(currency => (
          <option key={currency.code} value={currency.code}>
            {currency.symbol} {currency.code} - {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
}
```

### Price Display Component

```tsx
function PriceDisplay({ price, originalCurrency = "USD" }) {
  const { formatPrice } = useCurrency();

  return (
    <span className="price">
      {formatPrice(price, originalCurrency)}
    </span>
  );
}
```

## Error Handling

The context implements robust error handling:

1. **API Failures:** Automatically falls back to static rates
2. **Invalid Currencies:** Validates against supported currency list
3. **Network Issues:** Graceful degradation without breaking the UI
4. **Rate Fetch Errors:** Uses last known rates or fallback rates

## Persistence

- **Currency Preference:** Saved to `localStorage` as `"preferred-currency"`
- **Automatic Loading:** Preference restored on app initialization
- **Validation:** Ensures loaded currency is in supported list

## Performance Considerations

- **Caching:** Exchange rates cached until next refresh
- **Batching:** Rate updates don't trigger excessive re-renders
- **Lazy Loading:** Rates fetched only when needed
- **Debouncing:** Automatic refresh prevents excessive API calls

## Environment Configuration

Set up your environment variables:

```env
NEXT_PUBLIC_EXCHANGE_RATE_API_KEY=your_api_key_here
```

**Note:** If no API key is provided, the context automatically uses fallback rates without errors.

## Integration Examples

### E-commerce Price Display
```tsx
function ProductPrice({ basePrice }) {
  const { formatPrice, currentCurrency } = useCurrency();
  
  return (
    <div>
      <span className="price">{formatPrice(basePrice)}</span>
      <span className="currency">({currentCurrency.code})</span>
    </div>
  );
}
```

### Multi-Currency Cart Total
```tsx
function CartTotal({ items }) {
  const { formatPrice } = useCurrency();
  
  const total = items.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
  );
  
  return (
    <div className="cart-total">
      Total: {formatPrice(total)}
    </div>
  );
}
```

### Currency Conversion Utility
```tsx
function useConvertedPrice(price: number, fromCurrency = "USD") {
  const { convertPrice } = useCurrency();
  return convertPrice(price, fromCurrency);
}
```
