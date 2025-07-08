"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { navLinks } from "../constants";
import { logo } from "@/public/assets";
import Image from "next/image";
import { CiMenuFries, CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import { CartDrawer } from "../(public)/cart/CartDrawer"; // adjust the import path accordingly
import { useCart } from "../(public)/cart";
import AuthModal from "../components/AuthModal";

export default function Navbar() {
  const router = useRouter();
  const [authOpen, setAuthOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { items: cartItems, subtotal, removeItem } = useCart();

  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn === null) return null;

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  return (
    <nav className="z-50 w-full overflow-hidden top-0 left-0 flex py-4 sm:px-10 md:px-20 lg:px-40 justify-between items-center navbar fixed border-b-gray-200 border-solid border-b-[1px] bg-white">
      <a href="/">
        <Image src={logo} alt="moksha" className="w-[124px] h-[32px]" />
      </a>

      {/* Desktop nav */}
      <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
        {navLinks.map((nav, index) => {
          if (nav.id === "cart") {
            return (
              <li key={nav.id} className="relative mr-6 cursor-pointer ">
                <button
                  onClick={() => setCartOpen(true)}
                  aria-label="Open Cart"
                  className="flex items-center mr-4 text-xl text-black"
                >
                  <CiShoppingCart className="text-black " />
                  {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-600 rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </li>
            );
          } else if (nav.id === "account") {
            return (
              <li key={nav.id} className="mr-8 cursor-pointer ">
                {isLoggedIn ? (
                  <a
                    href="/account"
                    className="text-sm text-black hover:text-blue-600"
                  >
                    Account
                  </a>
                ) : (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-sm hover:text-blue-600 ${
                      index === navLinks.length - 1 ? "mr-0" : "mr-0"
                    } text-black`}
                  >
                    <button
                      onClick={() => setAuthOpen(true)}
                      className="cursor-pointer hover:text-blue-600 text-sm"
                    >
                      Login / Sign Up
                    </button>
                  </li>
                )}
              </li>
            );
          } else {
            return (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-sm hover:text-blue-600 ${
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
      <div className="relative flex items-center mr-6 sm:hidden">
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className="z-50 text-3xl text-black"
          aria-label="Toggle Menu"
        >
          {toggleMenu ? <CiMenuBurger /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggleMenu && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black opacity-10"
            onClick={() => setToggleMenu(false)}
          />
          <div className="fixed w-full top-[64px] z-50 bg-white border-t border-gray-200 left-0 shadow-lg px-6 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  {nav.id === "account" ? (
                    isLoggedIn ? (
                      <a
                        href="/account"
                        className="text-sm text-black hover:text-blue-600"
                      >
                        Account
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          setAuthOpen(true);
                          setToggleMenu(false);
                        }}
                        className="text-sm hover:text-blue-600"
                      >
                        Login / Sign Up
                      </button>
                    )
                  ) : (
                    <a
                      href={`${nav.id}`}
                      onClick={() => setToggleMenu(false)}
                      className="text-sm text-black hover:text-blue-600"
                    >
                      {nav.title}
                    </a>
                  )}
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
            alert("Proceed to Checkout (implement navigation here)");
          }}
        />
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </nav>
  );
}
