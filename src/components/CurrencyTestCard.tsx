import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCurrency } from "@/context/CurrencyContext";
import { AlertCircle, DollarSign, RefreshCw } from "lucide-react";

export default function CurrencyTestCard() {
  const {
    currentCurrency,
    formatPrice,
    convertPrice,
    isLoading,
    error,
    refreshRates,
    rates,
  } = useCurrency();

  const testPrices = [
    { label: "Hotel per night", price: 150 },
    { label: "Tour package", price: 500 },
    { label: "Vehicle rental per day", price: 80 },
    { label: "Flight", price: 1200 },
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Currency Test
          <Badge variant="outline">{currentCurrency.code}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Currency Status */}
        <div className="flex justify-between items-center">
          <span className="text-slate-600 text-sm">Current Currency:</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">{currentCurrency.name}</span>
            <span className="text-slate-500">{currentCurrency.symbol}</span>
          </div>
        </div>

        {/* Loading/Error States */}
        {isLoading && (
          <div className="flex items-center gap-2 bg-yellow-50 p-2 rounded text-yellow-600">
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span className="text-sm">Loading exchange rates...</span>
          </div>
        )}

        {error && (
          <div className="flex justify-between items-center bg-red-50 p-2 rounded">
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">Failed to load rates</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={refreshRates}
              className="p-1 h-auto text-red-600 hover:text-red-700"
            >
              <RefreshCw className="w-3 h-3" />
            </Button>
          </div>
        )}

        <Separator />

        {/* Test Prices */}
        <div className="space-y-3">
          <h4 className="font-medium text-slate-700 text-sm">Sample Prices:</h4>
          {testPrices.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-slate-600 text-sm">{item.label}:</span>
              <div className="text-right">
                <div className="font-medium">{formatPrice(item.price)}</div>
                {currentCurrency.code !== "USD" && (
                  <div className="text-slate-500 text-xs">
                    (${item.price} USD)
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Exchange Rate Info */}
        {rates[currentCurrency.code] && currentCurrency.code !== "USD" && (
          <div className="bg-slate-50 p-2 rounded">
            <div className="text-slate-600 text-xs">
              Exchange Rate: 1 USD = {rates[currentCurrency.code].toFixed(4)}{" "}
              {currentCurrency.code}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
