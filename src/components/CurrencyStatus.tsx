import { Button } from "@/components/ui/button";
import { useCurrency } from "@/context/CurrencyContext";
import { RefreshCw, Wifi, WifiOff } from "lucide-react";

export default function CurrencyStatus() {
  const { isLoading, error, refreshRates } = useCurrency();

  return (
    <div className="flex items-center gap-2">
      {isLoading && (
        <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
          <RefreshCw className="w-3 h-3 animate-spin" />
          <span className="text-xs">Updating rates...</span>
        </div>
      )}

      {!isLoading && error && (
        <div className="flex items-center gap-1">
          <WifiOff className="w-3 h-3 text-orange-500" />
          <span className="text-orange-600 text-xs dark:text-orange-400">
            {error.includes("approximate") ? "Approximate rates" : "Rate error"}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshRates}
            className="p-0 h-auto text-orange-500 text-xs hover:text-orange-700 dark:hover:text-orange-300"
            title="Retry fetching live exchange rates"
          >
            <RefreshCw className="w-3 h-3" />
          </Button>
        </div>
      )}

      {!isLoading && !error && (
        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
          <Wifi className="w-3 h-3" />
          <span className="text-xs">Live rates</span>
        </div>
      )}
    </div>
  );
}
