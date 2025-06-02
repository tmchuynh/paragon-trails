"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CartContext from "@/context/cartContext";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";

export default function BookYourTripToday() {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const [discountCodeInput, setDiscountCodeInput] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const {
    cart,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
    applyDiscount,
    getDiscountedTotal,
    discountCode,
    discountError,
    clearCart,
  } = cartContext;

  const handleCheckout = () => {
    // Validate form
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerInfo.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // In a real application, this would submit to a payment processor
    toast.success("Order submitted successfully! We will contact you shortly.");
    clearCart();

    // Optional: redirect to a thank you page
    // router.push("/thank-you");
  };

  const handleApplyDiscount = () => {
    if (applyDiscount(discountCodeInput)) {
      toast.success("Discount applied successfully!");
    } else {
      toast.error(discountError || "Invalid discount code.");
    }
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 pb-16 w-10/12 md:w-11/12">
      <header className="mb-8">
        <h1>Book Your Trip Today</h1>
        <h5>Your Dream Adventure Awaits</h5>
        <p>
          Ready to embark on your next adventure? Book your trip today and
          explore the world with us. Whether you're looking for a relaxing
          getaway or an exciting journey, we have the perfect options for you.
        </p>
      </header>

      {cart.length === 0 ? (
        <div className="py-16 border border-dashed rounded-lg text-center">
          <ShoppingCart className="mx-auto mb-4 text-muted-foreground size-16" />
          <h3>Your cart is empty</h3>
          <p className="mb-6 text-muted-foreground">
            Add some tours to get started on your adventure!
          </p>
          <Button onClick={() => router.push("/tours")}>Browse Tours</Button>
        </div>
      ) : (
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4">Your Cart ({getTotalItems()} items)</h2>
            <div className="space-y-4">
              {cart.map((item: any) => (
                <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                  {item.image && (
                    <div className="relative flex-shrink-0 w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4>{item.title}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="hover:bg-destructive/10 text-destructive"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    <div className="text-muted-foreground text-sm">
                      <p>
                        {item.duration} | {item.category}
                      </p>
                      <p>
                        {item.city}, {item.country}
                      </p>
                      {item.tourGuide && <p>Guide: {item.tourGuide}</p>}
                    </div>
                    <p className="mt-2 font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button variant="outline" onClick={() => router.push("/tours")}>
                Continue Shopping
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="top-24 sticky p-6 border rounded-lg">
              <h3 className="mb-4">Order Summary</h3>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>

                {discountCode && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discountCode})</span>
                    <span>
                      -${(getTotalPrice() - getDiscountedTotal()).toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between mt-2 pt-2 border-t font-bold">
                  <span>Total</span>
                  <span>${getDiscountedTotal().toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="discount">Discount Code</Label>
                <div className="flex gap-2 mt-1.5">
                  <Input
                    id="discount"
                    value={discountCodeInput}
                    onChange={(e) => setDiscountCodeInput(e.target.value)}
                    placeholder="Enter code"
                  />
                  <Button onClick={handleApplyDiscount}>Apply</Button>
                </div>
                {discountError && (
                  <p className="mt-1 text-destructive text-sm">
                    {discountError}
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handleCheckout}>
                Complete Booking
              </Button>
              <p className="mt-2 text-center text-muted-foreground text-xs">
                You will be contacted to arrange payment details
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
