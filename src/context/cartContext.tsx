"use client";

import { CartContextType } from "@/lib/interfaces/contextTypes";
import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<any[]>([]);
  const discountCodes: Record<string, number> = {
    FIRSTTOUR15: 0.15, // 15% off for first-time customers
    SUMMER20: 0.2, // 20% off summer tours
    GROUP10: 0.1, // 10% off for group bookings
    EARLYBIRD25: 0.25, // 25% off for early bookings
    LASTMINUTE15: 0.15, // 15% off last-minute bookings
    VIP30: 0.3, // 30% off for VIP clients
    FAMILY20: 0.2, // 20% off family tours
    RETURNING15: 0.15, // 15% off returning customers
  };

  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [discountError, setDiscountError] = useState<string | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: any) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const getTotalPrice = (): number => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const getTotalItems = (): number => {
    return cart.length;
  };

  const isItemInCart = (itemId: string): boolean => {
    return cart.some((item) => item.id === itemId);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    setDiscountCode(null);
    setDiscountAmount(0);
    setDiscountError(null);
  };

  // Check if the discount code exists in the discountCodes object
  const checkDiscountCode = (code: string): boolean => {
    const normalizedCode = code.trim().toUpperCase();
    return !!discountCodes[normalizedCode];
  };

  // Try to apply discount code, return true if valid, false otherwise
  const applyDiscount = (code: string): boolean => {
    const normalizedCode = code.trim().toUpperCase();

    if (discountCodes[normalizedCode]) {
      setDiscountCode(normalizedCode);
      setDiscountAmount(discountCodes[normalizedCode]);
      setDiscountError(null);
      return true;
    } else {
      setDiscountCode(null);
      setDiscountAmount(0);
      setDiscountError("Invalid discount code.");
      return false;
    }
  };

  // Calculate total after discount, fallback to subtotal if no discount applied
  const getDiscountedTotal = (): number => {
    const subtotal = getTotalPrice();
    return discountAmount > 0 ? subtotal * (1 - discountAmount) : subtotal;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        getTotalPrice,
        getTotalItems,
        isItemInCart,
        clearCart,
        checkDiscountCode,
        applyDiscount,
        getDiscountedTotal,
        setDiscountCode,
        setDiscountAmount,
        discountCode,
        discountAmount,
        discountError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
