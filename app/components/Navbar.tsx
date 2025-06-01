"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { navLinks } from "../constants";
import { logo } from "@/public/assets";
import Image from "next/image";
import { CiMenuFries, CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import { CartDrawer } from "../(public)/cart/CartDrawer"; // adjust the import path accordingly
import { useCart } from "../(public)/cart";

export default function Navbar() {
  const router = useRouter();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { items: cartItems, subtotal, removeItem } = useCart();

  // Remove item handler for CartDrawer
  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  return (
    <nav className="z-50 w-full overflow-hidden top-0 left-0 flex py-4 sm:px-10 md:px-20 lg:px-40 justify-between items-center navbar fixed border-b-gray-200 border-solid border-b-[1px] bg-white">
      <a href="/">
        <Image src={logo} alt="moksha" className="w-[124px] h-[32px]" />
      </a>

      {/* Desktop nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          if (nav.id === "cart") {
            // Render a cart button instead of a link
            return (
              <li key={nav.id} className="mr-6 cursor-pointer relative">
                <button
                  onClick={() => setCartOpen(true)}
                  aria-label="Open Cart"
                  className="flex items-center text-black text-xl mr-4"
                >
                  <CiShoppingCart className="text-black " />
                  {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex justify-center items-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </li>
            );
          } else {
            return (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[12px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                } text-black`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            );
          }
        })}
      </ul>

      {/* Mobile nav toggle */}
      <div className="sm:hidden flex items-center relative mr-6">
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className="text-3xl text-black z-50"
          aria-label="Toggle Menu"
        >
          {toggleMenu ? <CiMenuBurger /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggleMenu && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-10 z-40"
            onClick={() => setToggleMenu(false)}
          />
          <div className="fixed top-[64px] left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg px-6 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`${nav.id}`}
                    onClick={() => setToggleMenu(false)}
                    className="text-black text-sm hover:text-blue-600"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <CartDrawer
          items={cartItems}
          subtotal={subtotal}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemoveItem}
          onViewCart={() => {
            setCartOpen(false);
            router.push("/cart");
          }}
          onCheckout={() => {
            setCartOpen(false);
            // Implement checkout logic here
            alert("Proceed to Checkout (implement navigation here)");
          }}
        />
      )}
    </nav>
  );
}
