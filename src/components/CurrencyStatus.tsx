import { Button } from "@/components/ui/button";
import { useCurrency } from "@/context/CurrencyContext";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function CurrencyStatus() {
  const { isLoading, error, refreshRates } = useCurrency();

  if (!isLoading && !error) return null;

  return (
    <div className="flex items-center gap-2">
      {isLoading && (
        <div className="flex items-center gap-1 text-yellow-600">
          <RefreshCw className="w-3 h-3 animate-spin" />
          <span className="text-xs">Loading rates...</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-1">
          <AlertCircle className="w-3 h-3 text-red-500" />
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshRates}
            className="p-0 h-auto text-red-500 text-xs hover:text-red-700"
          >
            Retry
          </Button>
        </div>
      )}
    </div>
  );
}
