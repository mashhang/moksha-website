"use client";

import Image from "next/image";
import styles from "../../styles";
import { logo } from "@/public/assets";
import { footerLinks } from "../../constants";

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <div className="flex justify-start items-start">
            <Image src={logo} alt="logo" height={100} width={170} />
          </div>
          <div className="flex flex-row justify-end">
            {footerLinks.map((footerLink) => (
              <div
                key={footerLink.title}
                className="flex flex-col ss:my-0 min-w-[150px] pr-10"
              >
                <h4 className="font-poppins font-medium text-[15px] leading-[27px] text-gray-700">
                  {footerLink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-[13px] leading-[24px] text-gray-500 hover:text-gray-600 ${
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
      </div>
      <div className="text-[13px] text-gray-400 mt-[100px]">
        <p>© 2024 Moksha. All rights reserved.</p>
      </div>
    </section>
  );
}
