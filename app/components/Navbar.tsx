"use client";

import { useState } from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "@/public/assets";
import Image from "next/image";
import { CiMenuFries, CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full overflow-hidden top-0 left-0 flex py-4 sm:px-10 md:px-20 lg:px-40 justify-between items-center navbar fixed border-b-gray-200 border-solid border-b-[1px] bg-white">
      <a href="/">
        <Image src={logo} alt="moksha" className="w-[124px] h-[32px]" />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[12px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-black`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="text-3xl text-black"
          aria-label="Toggle Menu"
        >
          {toggle ? <CiMenuBurger /> : <CiMenuFries />}
        </button>

        {toggle && (
          <div className="absolute top-20 right-4 bg-black text-white z-50 p-6 rounded-xl shadow-lg min-w-[160px]">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((nav) => (
                <li key={nav.id} className="text-sm">
                  <a href={`#${nav.id}`} className="hover:underline">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
