"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useCart } from "@/context/CartContext";
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
  Info,
  Percent,
  TestTube,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const travelDiscounts = [
  // Hotels - General
  {
    code: "htl_gen_4",
    discount: 0.04,
    description: "4% off all hotel bookings",
    qualification: "any",
  },
  {
    code: "htl_last_8",
    discount: 0.08,
    description: "8% off last-minute hotel deals",
    qualification: "any",
  },
  {
    code: "htl_summer_10",
    discount: 0.1,
    description: "10% off summer hotel stays",
    qualification: "any",
  },
  {
    code: "htl_early_30",
    discount: 0.3,
    description: "30% off early bird hotel bookings",
    qualification: "any",
  },
  {
    code: "htl_special_40",
    discount: 0.4,
    description: "40% off special hotel promotions",
    qualification: "any",
  },

  // Hotels - VIP (requires executive/presidential rooms)
  {
    code: "htl_vip_50",
    discount: 0.5,
    description: "50% off VIP hotel suites",
    qualification: "vip_hotel",
  },

  // Car Rentals
  {
    code: "car_budget_35",
    discount: 0.35,
    description: "35% off budget car rentals",
    qualification: "any",
  },
  {
    code: "car_avis_15_175",
    discount: 0.056,
    description: "5.6% off Avis car rentals",
    qualification: "any",
  },

  // Flights - General
  {
    code: "flt_app_15",
    discount: 0.03,
    description: "3% off app-exclusive flight deals",
    qualification: "any",
  },
  {
    code: "flt_fd_30",
    discount: 0.05,
    description: "5% off flexible date flights",
    qualification: "any",
  },
  {
    code: "flt_last_10",
    discount: 0.1,
    description: "10% off last-minute flights",
    qualification: "any",
  },
  {
    code: "flt_special_25",
    discount: 0.25,
    description: "25% off special flight offers",
    qualification: "any",
  },

  // Flights - VIP (requires first class)
  {
    code: "flt_vip_50",
    discount: 0.5,
    description: "50% off VIP first-class flights",
    qualification: "vip_flight",
  },

  // Bundles / Tours
  {
    code: "bndl_prc_15",
    discount: 0.15,
    description: "15% off tour packages",
    qualification: "any",
  },
  {
    code: "bndl_pkg_50",
    discount: 0.1,
    description: "10% off package deals",
    qualification: "any",
  },
  {
    code: "bndl_bkg_20",
    discount: 0.2,
    description: "20% off booking bundles",
    qualification: "any",
  },
];

export default function CartSummaryPage() {
  const { state, dispatch } = useCart();
  const { formatPrice } = useCurrency();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false);
  const [discountError, setDiscountError] = useState("");

  // Form fields state
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: "",
    city: "",
    zip: "",
  });

  // Fill dummy data function
  const fillDummyData = () => {
    setFormFields({
      firstName: "John",
      lastName: "Doe",
      cardNumber: "4532 1234 5678 9012",
      expiry: "12/26",
      cvv: "123",
      address: "123 Main Street",
      city: "New York",
      zip: "10001",
    });
  };

  // Check if items qualify for VIP discounts
  const checkVipQualification = (qualification: string) => {
    if (qualification === "any") return true;

    if (qualification === "vip_hotel") {
      return state.items.some(
        (item) =>
          item.type === "hotel" &&
          (item.name.toLowerCase().includes("executive") ||
            item.name.toLowerCase().includes("presidential") ||
            item.name.toLowerCase().includes("suite"))
      );
    }

    if (qualification === "vip_flight") {
      return state.items.some(
        (item) =>
          item.type === "flight" &&
          (item.name.toLowerCase().includes("first class") ||
            item.description.toLowerCase().includes("first class"))
      );
    }

    return false;
  };

  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;

    setIsApplyingDiscount(true);
    setDiscountError("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Find the discount in our array
    const foundDiscount = travelDiscounts.find(
      (discount) => discount.code.toLowerCase() === discountCode.toLowerCase()
    );

    if (!foundDiscount) {
      setDiscountError(
        "Invalid discount code. Please check the code and try again."
      );
      setIsApplyingDiscount(false);
      return;
    }

    // Check if items qualify for this discount
    if (!checkVipQualification(foundDiscount.qualification)) {
      setDiscountError(
        foundDiscount.qualification === "vip_hotel"
          ? "This VIP discount requires an Executive or Presidential hotel suite in your cart."
          : foundDiscount.qualification === "vip_flight"
            ? "This VIP discount requires a First Class flight ticket in your cart."
            : "Your items don't qualify for this discount."
      );
      setIsApplyingDiscount(false);
      return;
    }

    // Apply the discount
    const discountAmount = state.subtotal * foundDiscount.discount;
    dispatch({
      type: "APPLY_DISCOUNT",
      payload: { code: discountCode, amount: discountAmount },
    });
    setDiscountCode("");
    setIsApplyingDiscount(false);
  };

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

    // Generate confirmation number
    const confirmation = `PT${Date.now().toString().slice(-6).toUpperCase()}${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
    setConfirmationNumber(confirmation);

    // Clear the cart
    dispatch({ type: "CLEAR_CART" });

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
      <div className="flex justify-center items-center min-h-screen">
        <div className="mx-auto p-8 max-w-md text-center">
          <div className="flex justify-center items-center bg-green-100 dark:bg-green-950 mx-auto mb-6 rounded-full w-16 h-16">
            <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="mb-4 font-bold text-2xl">Booking Confirmed!</h1>
          <div className="bg-slate-100 dark:bg-slate-800 mb-6 p-4 rounded-lg">
            <p className="mb-2 font-medium text-slate-700 text-sm dark:text-slate-300">
              Confirmation Number
            </p>
            <p className="font-bold font-mono text-lg">{confirmationNumber}</p>
          </div>
          <p className="mb-8">
            Your travel experiences have been successfully booked. You'll
            receive a confirmation email shortly with all the details.
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
    <div className="min-h-screen">
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
          <h1 className="mb-2 font-bold text-3xl">Complete Your Booking</h1>
          <p className="text-lg">
            Review your order and provide payment details
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
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
                        <h3 className="font-semibold">{item.name}</h3>
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
                        {formatPrice(item.price * item.quantity * item.guests)}
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
                      <div className="flex justify-center items-center bg-blue-600 rounded w-8 h-5 font-bold text-xs">
                        VISA
                      </div>
                      <div className="flex justify-center items-center bg-red-600 rounded w-8 h-5 font-bold text-xs">
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
                    <div className="flex justify-center items-center bg-blue-500 rounded w-16 h-5 font-bold text-xs">
                      PayPal
                    </div>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4">
                    {/* Dummy Data Button */}
                    <div className="flex justify-between items-center bg-amber-50 dark:bg-amber-950/20 p-3 border border-amber-200 dark:border-amber-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TestTube className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <div>
                          <p className="font-medium text-amber-700 text-sm dark:text-amber-300">
                            Demo Mode
                          </p>
                          <p className="text-amber-600 text-xs dark:text-amber-400">
                            No real payment data is collected - for simulation
                            only
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={fillDummyData}
                        className="hover:bg-amber-100 dark:hover:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300"
                      >
                        Fill Test Data
                      </Button>
                    </div>

                    <div className="gap-4 grid grid-cols-2">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="focus:border-muted border-border focus:ring-muted/20 h-8"
                          value={formFields.firstName}
                          onChange={(e) =>
                            setFormFields({
                              ...formFields,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="focus:border-muted border-border focus:ring-muted/20 h-8"
                          value={formFields.lastName}
                          onChange={(e) =>
                            setFormFields({
                              ...formFields,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="focus:border-muted border-border focus:ring-muted/20 h-8"
                        value={formFields.cardNumber}
                        onChange={(e) =>
                          setFormFields({
                            ...formFields,
                            cardNumber: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="gap-4 grid grid-cols-3">
                      <div className="col-span-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="focus:border-muted border-border focus:ring-muted/20 h-8"
                          value={formFields.expiry}
                          onChange={(e) =>
                            setFormFields({
                              ...formFields,
                              expiry: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          className="focus:border-muted border-border focus:ring-muted/20 h-8"
                          value={formFields.cvv}
                          onChange={(e) =>
                            setFormFields({
                              ...formFields,
                              cvv: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Billing Address</Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street"
                        className="focus:border-muted border-border focus:ring-muted/20 h-8"
                        value={formFields.address}
                        onChange={(e) =>
                          setFormFields({
                            ...formFields,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="gap-4 grid grid-cols-2">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="New York"
                          className="focus:border-muted border-border focus:ring-muted/20 h-8"
                          value={formFields.city}
                          onChange={(e) =>
                            setFormFields({
                              ...formFields,
                              city: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          placeholder="10001"
                          className="focus:border-muted border-border focus:ring-muted/20 h-8"
                          value={formFields.zip}
                          onChange={(e) =>
                            setFormFields({
                              ...formFields,
                              zip: e.target.value,
                            })
                          }
                        />
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
                    className="data-[state=checked]:bg-accentdata-[state=checked]:bg-accent mt-1 border data-[state=checked]:border-accent border-border data-[state=checked]:text-accent-foreground"
                    checked={termsAccepted}
                    onCheckedChange={(checked) =>
                      setTermsAccepted(checked === true)
                    }
                  />
                  <div className="text-sm">
                    <Label htmlFor="terms" className="font-medium">
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
                  <div className="flex justify-between">
                    <span>
                      Subtotal ({state.items.length}{" "}
                      {state.items.length === 1 ? "item" : "items"})
                    </span>
                    <span>{formatPrice(state.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Fees</span>
                    <span>{formatPrice(state.fees)}</span>
                  </div>
                  <div className="flex justify-between">
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
                  <div className="flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                </div>

                {/* Discount Code Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    <Label htmlFor="discountCode">Discount Code</Label>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1 h-auto"
                        >
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-3">
                          <h4 className="font-semibold">
                            Available Discount Codes
                          </h4>
                          <div className="space-y-2 max-h-64 overflow-y-auto">
                            {travelDiscounts.map((discount) => (
                              <div
                                key={discount.code}
                                className="bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 p-2 rounded text-xs transition-colors cursor-pointer"
                                onClick={() => {
                                  setDiscountCode(discount.code);
                                  setDiscountError("");
                                }}
                              >
                                <div className="flex justify-between items-center mb-1">
                                  <code className="font-mono text-primary">
                                    {discount.code}
                                  </code>
                                  <span className="font-semibold text-green-600 dark:text-green-400">
                                    {Math.round(discount.discount * 100)}% off
                                  </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400">
                                  {discount.description}
                                </p>
                                {discount.qualification !== "any" && (
                                  <p className="mt-1 text-amber-600 dark:text-amber-400">
                                    *{" "}
                                    {discount.qualification === "vip_hotel"
                                      ? "Requires Executive/Presidential suite"
                                      : discount.qualification === "vip_flight"
                                        ? "Requires First Class ticket"
                                        : "Special requirements"}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="pt-2 border-t text-muted-foreground text-xs">
                            Click on a code to apply it automatically
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>

                  <div className="flex gap-2">
                    <Input
                      id="discountCode"
                      value={discountCode}
                      onChange={(e) => {
                        setDiscountCode(e.target.value);
                        setDiscountError("");
                      }}
                      placeholder="Enter discount code"
                      className="flex-1"
                    />
                    <Button
                      onClick={handleApplyDiscount}
                      disabled={!discountCode.trim() || isApplyingDiscount}
                      variant="outline"
                    >
                      {isApplyingDiscount ? (
                        <div className="mr-2 border-2 border-current border-t-transparent rounded-full w-4 h-4 animate-spin" />
                      ) : (
                        "Apply"
                      )}
                    </Button>
                  </div>

                  {discountError && (
                    <div className="flex items-center gap-2 bg-red-50 dark:bg-red-950/20 p-2 border border-red-200 dark:border-red-800 rounded text-red-600 text-sm dark:text-red-400">
                      <AlertCircle className="w-4 h-4" />
                      {discountError}
                    </div>
                  )}
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
                  className="bg-primary hover:bg-primary/90 w-full h-12 font-medium text-base"
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
