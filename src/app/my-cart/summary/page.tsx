"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cartHelpers, useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Check,
  CreditCard,
  Lock,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartSummaryPage() {
  const { state } = useCart();
  const { formatPrice } = useCurrency();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  // Redirect if cart is empty
  useEffect(() => {
    if (state.items.length === 0 && !bookingComplete) {
      router.push("/my-cart");
    }
  }, [state.items.length, bookingComplete, router]);

  // Don't render anything if cart is empty and booking not complete
  if (state.items.length === 0 && !bookingComplete) {
    return null;
  }

  const handleCompleteBooking = async () => {
    if (!termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setBookingComplete(true);
    setIsProcessing(false);
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} ${diffDays === 1 ? "day" : "days"}`;
  };

  if (bookingComplete) {
    return (
      <div className="flex justify-center items-center bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="mx-auto p-8 max-w-md text-center">
          <div className="flex justify-center items-center bg-green-100 dark:bg-green-950 mx-auto mb-6 rounded-full w-16 h-16">
            <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="mb-4 font-bold text-2xl text-slate-900 dark:text-white">
            Booking Confirmed!
          </h1>
          <p className="mb-8 text-slate-600 dark:text-slate-400">
            Your travel experiences have been successfully booked. You'll
            receive a confirmation email shortly.
          </p>
          <div className="space-y-3">
            <Button
              onClick={() => router.push("/account/dashboard")}
              className="w-full"
            >
              View My Bookings
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/")}
              className="w-full"
            >
              Continue Exploring
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Cart
          </Button>
          <h1 className="mb-2 font-bold text-3xl text-slate-900 dark:text-white">
            Complete Your Booking
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Review your order and provide payment details
          </p>
        </div>

        <div className="gap-8 grid lg:grid-cols-2">
          {/* Booking Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Your Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-slate-600 text-sm dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {item.guests} guests
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </Badge>
                    </div>

                    <div className="space-y-1 text-slate-600 text-sm dark:text-slate-400">
                      <div className="flex justify-between">
                        <span>Start Date:</span>
                        <span>{item.dates.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>End Date:</span>
                        <span>{item.dates.endDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>
                          {calculateDuration(
                            item.dates.startDate,
                            item.dates.endDate
                          )}
                        </span>
                      </div>
                    </div>

                    <Separator className="my-3" />

                    <div className="flex justify-between items-center font-semibold">
                      <span>Total for this item:</span>
                      <span>
                        {formatPrice(
                          item.price * item.quantity * item.guests
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div
                    className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary/5"
                        : "border-slate-200 dark:border-slate-700"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "card"
                          ? "border-primary"
                          : "border-slate-300"
                      }`}
                    >
                      {paymentMethod === "card" && (
                        <div className="bg-primary rounded-full w-2 h-2" />
                      )}
                    </div>
                    <Label className="flex-1 cursor-pointer">
                      Credit/Debit Card
                    </Label>
                    <div className="flex gap-2">
                      <div className="flex justify-center items-center bg-blue-600 rounded w-8 h-5 font-bold text-white text-xs">
                        VISA
                      </div>
                      <div className="flex justify-center items-center bg-red-600 rounded w-8 h-5 font-bold text-white text-xs">
                        MC
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "paypal"
                        ? "border-primary bg-primary/5"
                        : "border-slate-200 dark:border-slate-700"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "paypal"
                          ? "border-primary"
                          : "border-slate-300"
                      }`}
                    >
                      {paymentMethod === "paypal" && (
                        <div className="bg-primary rounded-full w-2 h-2" />
                      )}
                    </div>
                    <Label className="flex-1 cursor-pointer">PayPal</Label>
                    <div className="flex justify-center items-center bg-blue-500 rounded w-16 h-5 font-bold text-white text-xs">
                      PayPal
                    </div>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4">
                    <div className="gap-4 grid grid-cols-2">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="gap-4 grid grid-cols-3">
                      <div className="col-span-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Billing Address</Label>
                      <Input id="address" placeholder="123 Main Street" />
                    </div>

                    <div className="gap-4 grid grid-cols-2">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="10001" />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) =>
                      setTermsAccepted(checked === true)
                    }
                  />
                  <div className="text-slate-600 text-sm dark:text-slate-400">
                    <Label
                      htmlFor="terms"
                      className="font-medium text-slate-900 dark:text-white"
                    >
                      I agree to the Terms and Conditions
                    </Label>
                    <p className="mt-1">
                      By proceeding with this booking, you agree to our{" "}
                      <a href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:top-6 lg:sticky">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>
                      Subtotal ({state.items.length}{" "}
                      {state.items.length === 1 ? "item" : "items"})
                    </span>
                    <span>{formatPrice(state.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Service Fees</span>
                    <span>{formatPrice(state.fees)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Taxes</span>
                    <span>{formatPrice(state.taxes)}</span>
                  </div>
                  {state.discounts > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount</span>
                      <span>-{formatPrice(state.discounts)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-slate-900 text-xl dark:text-white">
                    <span>Total</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 dark:bg-green-950/20 p-4 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2 text-green-700 dark:text-green-400">
                    <Lock className="w-4 h-4" />
                    <span className="font-medium text-sm">Secure Payment</span>
                  </div>
                  <p className="text-green-600 text-xs dark:text-green-500">
                    Your payment information is encrypted and secure. We use
                    industry-standard SSL encryption.
                  </p>
                </div>

                {/* Cancellation Policy */}
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400">
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-medium text-sm">
                      Cancellation Policy
                    </span>
                  </div>
                  <p className="text-blue-600 text-xs dark:text-blue-500">
                    Free cancellation up to 24 hours before your experience. See
                    individual booking terms for details.
                  </p>
                </div>

                {/* Complete Booking Button */}
                <Button
                  onClick={handleCompleteBooking}
                  disabled={!termsAccepted || isProcessing}
                  className="bg-primary hover:bg-primary/90 w-full h-12 font-medium text-base text-white"
                >
                  {isProcessing ? (
                    <>
                      <div className="mr-2 border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Booking - {formatPrice(state.total)}
                      <Lock className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

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
