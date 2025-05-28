import { useState } from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "@/public/assets";
import Image from "next/image";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full overflow-hidden top-0 left-0 flex py-4 px-40 justify-between items-center navbar fixed border-b-gray-200 border-solid border-b-[1px] bg-white">
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
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[12px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
