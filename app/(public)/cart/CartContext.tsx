// app/context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  items: CartItem[];
  subtotal: number;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;

  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Black T-Shirt",
      size: "M",
      price: 599,
      quantity: 1,
      image: "/assets/sampleshirt.png",
    },
    {
      id: "2",
      name: "White Hoodie",
      size: "L",
      price: 999,
      quantity: 2,
      image: "/assets/sampleshirt.png",
    },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <CartContext.Provider
      value={{
        items,
        subtotal,
        updateQuantity,
        removeItem,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside a CartProvider");
  return context;
};
