"use client";

import { CartPage, useCart } from "@/app/(public)/cart";

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <CartPage
      items={items}
      subtotal={subtotal}
      onQuantityChange={updateQuantity}
      onRemove={removeItem}
      onContinueShopping={() => window.history.back()}
      onCheckout={() => alert("Go to checkout")}
    />
  );
}
