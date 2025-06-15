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
  { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
  { code: "BMD", name: "Bermudian Dollar", symbol: "$" },
  { code: "MNT", name: "Mongolian Tögrög", symbol: "₮" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$" },
  { code: "VUV", name: "Vanuatu Vatu", symbol: "VT" },
  { code: "ZWL", name: "Zimbabwean Dollar", symbol: "Z$" },
  { code: "ZAR", name: "South African Rand", symbol: "R" },
  { code: "XOF", name: "West African CFA Franc", symbol: "Fr" },
  { code: "MAD", name: "Moroccan Dirham", symbol: "د.م." },
  { code: "WST", name: "Samoan Tālā", symbol: "T" },
  { code: "TZS", name: "Tanzanian Shilling", symbol: "TSh" },
  { code: "UAH", name: "Ukrainian Hryvnia", symbol: "₴" },
  { code: "VND", name: "Vietnamese Đồng", symbol: "₫" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
  { code: "PLN", name: "Polish Złoty", symbol: "zł" },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
  { code: "MXN", name: "Mexican Peso", symbol: "$" },
  { code: "THB", name: "Thai Baht", symbol: "฿" },
  { code: "KRW", name: "South Korean Won", symbol: "₩" },
  { code: "ISK", name: "Icelandic Króna", symbol: "kr" },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
  { code: "DOP", name: "Dominican Peso", symbol: "RD$" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$" },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
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

      const apiKey = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;

      // If no API key, use fallback rates immediately
      if (!apiKey) {
        console.warn("Exchange rate API key not found. Using fallback rates.");
        setFallbackRates();
        return;
      }

      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      );

      if (!response.ok) {
        console.warn(
          `Exchange rate API error: ${response.status}. Using fallback rates.`
        );
        setFallbackRates();
        return;
      }

      const data = await response.json();

      if (data.result !== "success") {
        console.warn(
          `Exchange rate API error: ${
            data["error-type"] || "Unknown"
          }. Using fallback rates.`
        );
        setFallbackRates();
        return;
      }

      setRates(data.conversion_rates);
    } catch (err) {
      console.warn("Error fetching exchange rates:", err);
      setFallbackRates();
    } finally {
      setIsLoading(false);
    }
  };

  const setFallbackRates = () => {
    // Use static fallback rates (approximate values as of 2024)
    setRates({
      USD: 1,
      EUR: 0.92,
      GBP: 0.79,
      JPY: 149.5,
      AUD: 1.52,
      CAD: 1.36,
      CNY: 7.23,
      INR: 83.1,
      RUB: 92.5,
      AED: 3.67,
      BMD: 1,
      MNT: 3400,
      BRL: 5.25,
      VUV: 118,
      ZWL: 13000,
      ZAR: 18.5,
      XOF: 602,
      MAD: 10.1,
      WST: 2.7,
      TZS: 2550,
      UAH: 38.4,
      VND: 24300,
      SGD: 1.34,
      PLN: 4.06,
      NOK: 10.6,
      MXN: 17.1,
      THB: 36.2,
      KRW: 1380,
      ISK: 138,
      CHF: 0.89,
      DOP: 58.2,
      HKD: 7.83,
      IDR: 16000,
    });
    setError(null); // Don't show error for fallback rates
  };

  useEffect(() => {
    fetchExchangeRates();

    // Refresh rates every hour
    const interval = setInterval(fetchExchangeRates, 3600000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load saved currency preference from localStorage
    const savedCurrency = localStorage.getItem("preferred-currency");
    if (savedCurrency) {
      try {
        const currency = JSON.parse(savedCurrency);
        const validCurrency = currencies.find((c) => c.code === currency.code);
        if (validCurrency) {
          setCurrentCurrency(validCurrency);
        }
      } catch (err) {
        console.error("Error loading saved currency:", err);
      }
    }
  }, []);

  const setCurrency = (currency: CurrencyData) => {
    setCurrentCurrency(currency);
    localStorage.setItem("preferred-currency", JSON.stringify(currency));
  };

  const convertPrice = (
    price: number,
    fromCurrency: string = "USD"
  ): number => {
    if (!rates || Object.keys(rates).length === 0) {
      return price;
    }

    // Convert from source currency to USD first
    const usdPrice =
      fromCurrency === "USD" ? price : price / rates[fromCurrency];

    // Then convert from USD to target currency
    const convertedPrice = usdPrice * rates[currentCurrency.code];

    return convertedPrice;
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
