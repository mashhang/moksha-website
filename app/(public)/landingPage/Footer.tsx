"use client";

import Image from "next/image";
import { logo } from "@/public/assets";
import { footerLinks } from "../../constants";

export default function Footer() {
  return (
    <section className="flex flex-col bg-gray-100 pt-12 w-[100%]">
      {/* Main Footer Container */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:w-[1440px] mx-4 md:mx-auto gap-8 md:gap-0">
        {/* Logo */}
        <div className="flex justify-start w-[120px] md:w-auto">
          <Image src={logo} alt="logo" height={100} width={170} />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-16 md:gap-40 w-full justify-center md:justify-end text-left md:text-left">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="flex flex-col">
              <h4 className="font-poppins font-medium text-sm md:text-base leading-[16px] md:leading-[28px] text-gray-700">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-xs md:text-sm leading-[24px] text-gray-500 hover:text-gray-600 ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-[13px] text-gray-400 text-center mt-12 pb-4 md:mt-24">
        <p>© 2024 Moksha. All rights reserved.</p>
      </div>
    </section>
  );
}
