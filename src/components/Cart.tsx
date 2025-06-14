"use client";

import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { ArrowRight, Shield, ShoppingCart, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ExperienceCartItem from "./cart/ExperienceCartItem";
import FlightCartItem from "./cart/FlightCartItem";
import HotelCartItem from "./cart/HotelCartItem";
import VehicleCartItem from "./cart/VehicleCartItem";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Cart() {
  const router = useRouter();
  const { state, dispatch } = useCart();
  const { formatPrice } = useCurrency();
  const [discountCode, setDiscountCode] = useState("");
  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false);

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;

    setIsApplyingDiscount(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock discount logic
    const discountAmount =
      discountCode.toLowerCase() === "welcome10" ? state.subtotal * 0.1 : 0;
    if (discountAmount > 0) {
      dispatch({
        type: "APPLY_DISCOUNT",
        payload: { code: discountCode, amount: discountAmount },
      });
      setDiscountCode("");
    }

    setIsApplyingDiscount(false);
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    cartHelpers.updateQuantity(dispatch, id, newQuantity);
  };

  const handleGuestsChange = (id: string, newGuests: number) => {
    cartHelpers.updateGuests(dispatch, id, Math.max(1, newGuests));
  };

  const handleRemoveItem = (id: string) => {
    cartHelpers.removeItem(dispatch, id);
  };

  const handleProceedToCheckout = () => {
    router.push("/my-cart/summary");
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto px-6 lg:px-8 py-24 max-w-7xl">
          <div className="text-center">
            <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-800 mx-auto mb-8 rounded-full w-24 h-24">
              <ShoppingCart className="w-12 h-12 text-slate-400" />
            </div>
            <h1 className="mb-4 font-bold text-3xl text-slate-900 dark:text-white">
              Your cart is empty
            </h1>
            <p className="mx-auto mb-8 max-w-md text-lg text-slate-600 dark:text-slate-400">
              Start planning your next extraordinary journey by browsing our
              curated experiences.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <Button
                onClick={() => router.push("/tours")}
                className="bg-primary hover:bg-primary/90 px-8 py-3 text-white"
              >
                Browse Tours
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/hotels")}
                className="px-8 py-3"
              >
                Explore Hotels
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/vehicles")}
                className="px-8 py-3"
              >
                Rent Vehicles
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 font-bold text-3xl text-slate-900 dark:text-white">
            Your Travel Cart
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Review your selected experiences and proceed to booking
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-6 lg:col-span-2">
            {state.items.map((item) => {
              // Render different components based on item type
              switch (item.type) {
                case "vehicle":
                  return (
                    <VehicleCartItem
                      key={item.id}
                      item={item}
                      onQuantityChange={handleQuantityChange}
                      onGuestsChange={handleGuestsChange}
                      onRemove={handleRemoveItem}
                    />
                  );
                case "flight":
                  return (
                    <FlightCartItem
                      key={item.id}
                      item={item}
                      onQuantityChange={handleQuantityChange}
                      onGuestsChange={handleGuestsChange}
                      onRemove={handleRemoveItem}
                    />
                  );
                case "hotel":
                  return (
                    <HotelCartItem
                      key={item.id}
                      item={item}
                      onQuantityChange={handleQuantityChange}
                      onGuestsChange={handleGuestsChange}
                      onRemove={handleRemoveItem}
                    />
                  );
                case "tour":
                case "attraction":
                case "activity":
                  return (
                    <ExperienceCartItem
                      key={item.id}
                      item={item}
                      onQuantityChange={handleQuantityChange}
                      onGuestsChange={handleGuestsChange}
                      onRemove={handleRemoveItem}
                    />
                  );
                default:
                  return (
                    <ExperienceCartItem
                      key={item.id}
                      item={item}
                      onQuantityChange={handleQuantityChange}
                      onGuestsChange={handleGuestsChange}
                      onRemove={handleRemoveItem}
                    />
                  );
              }
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="top-6 sticky">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={handleProceedToCheckout}
                    className="bg-primary hover:bg-primary/90 w-full h-12 font-medium text-base text-white"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => router.push("/tours")}
                    className="w-full"
                  >
                    Continue Shopping
                  </Button>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 dark:bg-green-950/20 p-3 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <Shield className="w-4 h-4" />
                    <span className="font-medium text-sm">Secure Booking</span>
                  </div>
                  <p className="mt-1 text-green-600 text-xs dark:text-green-500">
                    Your payment information is protected with enterprise-grade
                    encryption
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="pt-4 border-slate-200 dark:border-slate-700 border-t">
                  <div className="flex justify-center items-center gap-4 text-slate-500 text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>Trusted by 10,000+ travelers</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
