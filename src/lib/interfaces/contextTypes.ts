export interface CartContextType {
  cart: any[];
  addToCart: (item: any) => void;
  removeFromCart: (itemId: string) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  isItemInCart: (itemId: string) => boolean;
  clearCart: () => void;
  applyDiscount: (code: string) => boolean;
  getDiscountedTotal: () => number;
  setCart: (cart: any[]) => void;
  checkDiscountCode: (code: string) => boolean;
  setDiscountCode: (code: string) => void;
  setDiscountAmount: (amount: number) => void;
  discountCode: string | null;
  discountAmount: number;
  discountError: string | null;
}
