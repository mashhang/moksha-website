"use client";

import React from "react";
import { CartDrawer, useCart } from "./cart";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CartDrawerWrapper />
      {children}
    </>
  );
}

function CartDrawerWrapper() {
  const { items, subtotal, isDrawerOpen, closeDrawer, removeItem } = useCart();

  const handleViewCart = () => {
    window.location.href = "/cart";
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return isDrawerOpen ? (
    <CartDrawer
      items={items}
      subtotal={subtotal}
      onClose={closeDrawer}
      onRemove={removeItem}
      onViewCart={handleViewCart}
      onCheckout={handleCheckout}
    />
  ) : null;
}
