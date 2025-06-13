"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface CurrencyRates {
  [key: string]: number;
}

export interface CurrencyData {
  code: string;
  name: string;
  symbol: string;
}

export interface CurrencyContextType {
  currentCurrency: CurrencyData;
  rates: CurrencyRates;
  isLoading: boolean;
  error: string | null;
  setCurrency: (currency: CurrencyData) => void;
  convertPrice: (price: number, fromCurrency?: string) => number;
  formatPrice: (price: number, fromCurrency?: string) => string;
  refreshRates: () => Promise<void>;
}

const defaultCurrency: CurrencyData = {
  code: "USD",
  name: "US Dollar",
  symbol: "$",
};

const currencies: CurrencyData[] = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "RUB", name: "Russian Ruble", symbol: "₽" },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
  { code: "SEK", name: "Swedish Krona", symbol: "kr" },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
  { code: "DKK", name: "Danish Krone", symbol: "kr" },
  { code: "MXN", name: "Mexican Peso", symbol: "$" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$" },
  { code: "KRW", name: "South Korean Won", symbol: "₩" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$" },
  { code: "ZAR", name: "South African Rand", symbol: "R" },
];

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentCurrency, setCurrentCurrency] =
    useState<CurrencyData>(defaultCurrency);
  const [rates, setRates] = useState<CurrencyRates>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExchangeRates = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Try multiple API sources for better reliability
      const apiKey = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;

      // First, try the free public API without key (limited but works)
      try {
        const freeResponse = await fetch(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );

        if (freeResponse.ok) {
          const freeData = await freeResponse.json();
          if (freeData.rates) {
            setRates(freeData.rates);

            // Cache the successful rates
            if (typeof window !== "undefined") {
              try {
                localStorage.setItem(
                  "cached-exchange-rates",
                  JSON.stringify(freeData.rates)
                );
                localStorage.setItem(
                  "rates-cache-timestamp",
                  Date.now().toString()
                );
              } catch (cacheErr) {
                console.warn("Could not cache exchange rates:", cacheErr);
              }
            }

            console.log("Exchange rates fetched from free API");
            return;
          }
        }
      } catch (freeApiError) {
        console.log("Free API failed, trying paid API...");
      }

      // If free API fails and we have an API key, try the paid version
      if (apiKey && apiKey !== "0b1c3f2d8c4e4f5a9b6c7d8e9f0a1b2c") {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.result === "success" && data.conversion_rates) {
            setRates(data.conversion_rates);

            // Cache the successful rates
            if (typeof window !== "undefined") {
              try {
                localStorage.setItem(
                  "cached-exchange-rates",
                  JSON.stringify(data.conversion_rates)
                );
                localStorage.setItem(
                  "rates-cache-timestamp",
                  Date.now().toString()
                );
              } catch (cacheErr) {
                console.warn("Could not cache exchange rates:", cacheErr);
              }
            }

            console.log("Exchange rates fetched from paid API");
            return;
          }
        }
      }

      // If all APIs fail, throw error to trigger fallback
      throw new Error("All exchange rate APIs unavailable");
    } catch (err) {
      console.warn(
        "Exchange rate APIs unavailable, using fallback rates:",
        err
      );

      // Use more recent and realistic fallback rates (as of June 2025)
      const fallbackRates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 140,
        AUD: 1.52,
        CAD: 1.36,
        CNY: 7.25,
        INR: 83.2,
        RUB: 85,
        CHF: 0.89,
        SEK: 10.8,
        NOK: 11.2,
        DKK: 6.88,
        MXN: 18.5,
        BRL: 5.45,
        KRW: 1325,
        SGD: 1.35,
        HKD: 7.8,
        NZD: 1.62,
        ZAR: 18.3,
      };

      setRates(fallbackRates);

      // Set a user-friendly error message but don't prevent functionality
      setError("Using approximate exchange rates (live rates unavailable)");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check if we have cached rates that are still fresh (less than 4 hours old)
    if (typeof window !== "undefined") {
      try {
        const cachedRates = localStorage.getItem("cached-exchange-rates");
        const cacheTimestamp = localStorage.getItem("rates-cache-timestamp");

        if (cachedRates && cacheTimestamp) {
          const cacheAge = Date.now() - parseInt(cacheTimestamp);
          const fourHoursInMs = 4 * 60 * 60 * 1000;

          if (cacheAge < fourHoursInMs) {
            const rates = JSON.parse(cachedRates);
            setRates(rates);
            setIsLoading(false);
            console.log("Using cached exchange rates");
            return;
          }
        }
      } catch (err) {
        console.warn("Error loading cached rates:", err);
      }
    }

    // If no valid cache, fetch fresh rates
    fetchExchangeRates();

    // Refresh rates every 4 hours instead of 1 hour to be more API-friendly
    const interval = setInterval(fetchExchangeRates, 4 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load saved currency preference from localStorage
    if (typeof window !== "undefined") {
      try {
        const savedCurrency = localStorage.getItem("preferred-currency");
        if (savedCurrency) {
          const currency = JSON.parse(savedCurrency);
          const validCurrency = currencies.find(
            (c) => c.code === currency.code
          );
          if (validCurrency) {
            setCurrentCurrency(validCurrency);
          }
        }
      } catch (err) {
        console.warn("Error loading saved currency preference:", err);
        // Clear corrupted data
        try {
          localStorage.removeItem("preferred-currency");
        } catch (clearErr) {
          console.warn("Could not clear corrupted currency data:", clearErr);
        }
      }
    }
  }, []);

  const setCurrency = (currency: CurrencyData) => {
    setCurrentCurrency(currency);

    // Save to localStorage with error handling
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("preferred-currency", JSON.stringify(currency));
      } catch (err) {
        console.warn("Could not save currency preference:", err);
      }
    }
  };

  const convertPrice = (
    price: number,
    fromCurrency: string = "USD"
  ): number => {
    if (!rates || Object.keys(rates).length === 0) {
      return price;
    }

    // Handle invalid price inputs
    if (!price || isNaN(price) || price < 0) {
      return 0;
    }

    // If converting to the same currency, return as is
    if (fromCurrency === currentCurrency.code) {
      return price;
    }

    // Check if both currencies exist in our rates
    const fromRate = rates[fromCurrency];
    const toRate = rates[currentCurrency.code];

    if (!fromRate || !toRate) {
      console.warn(
        `Missing exchange rate for ${fromCurrency} or ${currentCurrency.code}`
      );
      return price; // Return original price if rates are missing
    }

    // Convert from source currency to USD first, then to target currency
    const usdPrice = fromCurrency === "USD" ? price : price / fromRate;
    const convertedPrice =
      currentCurrency.code === "USD" ? usdPrice : usdPrice * toRate;

    return Math.round(convertedPrice * 100) / 100; // Round to 2 decimal places
  };

  const formatPrice = (price: number, fromCurrency: string = "USD"): string => {
    const convertedPrice = convertPrice(price, fromCurrency);

    // Format based on currency
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currentCurrency.code,
      minimumFractionDigits: currentCurrency.code === "JPY" ? 0 : 2,
      maximumFractionDigits: currentCurrency.code === "JPY" ? 0 : 2,
    });

    return formatter.format(convertedPrice);
  };

  const refreshRates = async () => {
    await fetchExchangeRates();
  };

  const contextValue: CurrencyContextType = {
    currentCurrency,
    rates,
    isLoading,
    error,
    setCurrency,
    convertPrice,
    formatPrice,
    refreshRates,
  };

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

export { currencies };
export default CurrencyContext;
