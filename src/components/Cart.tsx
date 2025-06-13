"use client";

import { cartHelpers, useCart } from "@/context/CartContext";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Minus,
  Plus,
  Shield,
  ShoppingCart,
  Star,
  Tag,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export default function Cart() {
  const router = useRouter();
  const { state, dispatch } = useCart();
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
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
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
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
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

        <div className="gap-8 grid lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-6 lg:col-span-2">
            {state.items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex md:flex-row flex-col">
                    {/* Image */}
                    <div className="md:w-1/3">
                      <div
                        className="relative bg-cover bg-center h-48 md:h-full"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="absolute inset-0 bg-black/20" />
                        <Badge className="top-4 left-4 absolute bg-white/90 text-slate-900">
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="mb-2 font-semibold text-slate-900 text-xl dark:text-white">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-4 mb-3 text-slate-600 text-sm dark:text-slate-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {item.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(
                                item.dates.startDate
                              ).toLocaleDateString()}{" "}
                              -{" "}
                              {new Date(
                                item.dates.endDate
                              ).toLocaleDateString()}
                            </div>
                          </div>
                          <p className="mb-4 text-slate-600 dark:text-slate-400">
                            {item.description}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                          className="hover:bg-red-50 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.features.slice(0, 3).map((feature, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {item.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{item.features.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Quantity and Guests */}
                      <div className="flex sm:flex-row flex-col gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <label className="font-medium text-slate-700 text-sm dark:text-slate-300">
                            Quantity:
                          </label>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 font-medium text-center text-sm">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <label className="font-medium text-slate-700 text-sm dark:text-slate-300">
                            Guests:
                          </label>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleGuestsChange(item.id, item.guests - 1)
                              }
                              disabled={item.guests <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 font-medium text-center text-sm">
                              {item.guests}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleGuestsChange(item.id, item.guests + 1)
                              }
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {item.originalPrice &&
                            item.originalPrice > item.price && (
                              <span className="text-slate-500 text-sm line-through">
                                {cartHelpers.formatPrice(item.originalPrice)}
                              </span>
                            )}
                          <span className="font-semibold text-lg text-slate-900 dark:text-white">
                            {cartHelpers.formatPrice(item.price)}
                          </span>
                          <span className="text-slate-600 text-sm dark:text-slate-400">
                            per person
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-slate-600 text-sm dark:text-slate-400">
                            Subtotal:{" "}
                            {cartHelpers.formatPrice(
                              item.price * item.quantity * item.guests
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Cancellation Policy */}
                      <div className="bg-slate-50 dark:bg-slate-800 mt-4 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-400">
                          <Shield className="w-4 h-4" />
                          <span className="font-medium">Cancellation:</span>
                          <span>{item.cancellationPolicy}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                {/* Discount Code */}
                <div>
                  <label className="block mb-2 font-medium text-slate-700 text-sm dark:text-slate-300">
                    Discount Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      onClick={handleApplyDiscount}
                      disabled={!discountCode.trim() || isApplyingDiscount}
                      className="px-4"
                    >
                      {isApplyingDiscount ? (
                        <div className="border-2 border-slate-300 border-t-slate-600 rounded-full w-4 h-4 animate-spin" />
                      ) : (
                        <Tag className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <p className="mt-1 text-slate-500 text-xs">
                    Try: WELCOME10 for 10% off
                  </p>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Subtotal
                    </span>
                    <span>{cartHelpers.formatPrice(state.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Service Fee
                    </span>
                    <span>{cartHelpers.formatPrice(state.fees)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Taxes
                    </span>
                    <span>{cartHelpers.formatPrice(state.taxes)}</span>
                  </div>
                  {state.discounts > 0 && (
                    <div className="flex justify-between text-green-600 text-sm">
                      <span>Discount</span>
                      <span>-{cartHelpers.formatPrice(state.discounts)}</span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{cartHelpers.formatPrice(state.total)}</span>
                  </div>
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
