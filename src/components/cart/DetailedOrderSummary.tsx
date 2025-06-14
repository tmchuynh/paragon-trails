"use client";

import { CartState } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

interface DetailedOrderSummaryProps {
  state: CartState;
}

export default function DetailedOrderSummary({
  state,
}: DetailedOrderSummaryProps) {
  const { formatPrice } = useCurrency();

  // Calculate detailed breakdown
  const getItemBreakdown = () => {
    return state.items.map((item) => {
      let subtotal = 0;
      let description = "";

      switch (item.type) {
        case "vehicle":
          subtotal = item.price * item.quantity;
          description = `${item.quantity} vehicle${item.quantity > 1 ? "s" : ""} × ${formatPrice(item.price)}`;
          break;
        case "flight":
          subtotal = item.price * item.quantity * item.guests;
          description = `${item.quantity} ticket${item.quantity > 1 ? "s" : ""} × ${item.guests} passenger${item.guests > 1 ? "s" : ""} × ${formatPrice(item.price)}`;
          break;
        case "hotel":
          subtotal = item.price * item.quantity;
          description = `${item.quantity} room${item.quantity > 1 ? "s" : ""} × ${formatPrice(item.price)}`;
          break;
        case "tour":
        case "attraction":
        case "activity":
          subtotal = item.price * item.quantity * item.guests;
          description = `${item.quantity} ticket${item.quantity > 1 ? "s" : ""} × ${item.guests} guest${item.guests > 1 ? "s" : ""} × ${formatPrice(item.price)}`;
          break;
        default:
          subtotal = item.price * item.quantity * item.guests;
          description = `${item.quantity} × ${item.guests} × ${formatPrice(item.price)}`;
      }

      return {
        name: item.name,
        type: item.type,
        description,
        subtotal,
      };
    });
  };

  const itemBreakdown = getItemBreakdown();
  const subtotalBeforeFees = itemBreakdown.reduce(
    (sum, item) => sum + item.subtotal,
    0,
  );

  return (
    <Card className="top-6 sticky">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Detailed Item Breakdown */}
        <div className="space-y-3">
          <h4 className="font-medium text-slate-900 text-sm dark:text-white">
            Items Breakdown
          </h4>
          {itemBreakdown.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-2">
                  <p className="font-medium text-slate-900 text-sm dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-slate-600 text-xs dark:text-slate-400 capitalize">
                    {item.type} • {item.description}
                  </p>
                </div>
                <span className="font-medium text-slate-900 text-sm dark:text-white">
                  {formatPrice(item.subtotal)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Price Calculation */}
        <div className="space-y-3">
          <h4 className="font-medium text-slate-900 text-sm dark:text-white">
            Price Calculation
          </h4>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              Items Subtotal
            </span>
            <span className="font-medium">
              {formatPrice(subtotalBeforeFees)}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              Service Fee (5%)
            </span>
            <span className="font-medium">{formatPrice(state.fees)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              Taxes & Fees (8%)
            </span>
            <span className="font-medium">{formatPrice(state.taxes)}</span>
          </div>

          {state.discounts > 0 && (
            <div className="flex justify-between text-green-600 text-sm">
              <span>Discount Applied</span>
              <span className="font-medium">
                -{formatPrice(state.discounts)}
              </span>
            </div>
          )}

          <Separator />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>{formatPrice(state.total)}</span>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <h4 className="mb-3 font-medium text-slate-900 text-sm dark:text-white">
            Booking Summary
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                Total Items:
              </span>
              <span className="font-medium">{state.items.length}</span>
            </div>

            {/* Count by service type */}
            {[
              "vehicle",
              "flight",
              "hotel",
              "tour",
              "attraction",
              "activity",
            ].map((type) => {
              const count = state.items.filter(
                (item) => item.type === type,
              ).length;
              if (count === 0) return null;

              return (
                <div key={type} className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400 capitalize">
                    {type}
                    {count > 1 ? "s" : ""}:
                  </span>
                  <span className="font-medium">{count}</span>
                </div>
              );
            })}

            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                Total Guests:
              </span>
              <span className="font-medium">
                {state.items.reduce((sum, item) => {
                  // For vehicles, don't count passengers in total guests
                  if (item.type === "vehicle") return sum;
                  return sum + item.guests;
                }, 0)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
