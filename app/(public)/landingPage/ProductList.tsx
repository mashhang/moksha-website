"use client";

import Image from "next/image";
import { sampleshirt } from "@/public/assets";
import styles from "../../styles";

export default function ProductList() {
  return (
    <div className="w-full px-5 py-16 md:py-24">
      <div className="flex mb-4 md:mb-8 justify-between">
        <h1 className="font-normal text-black text-base md:text-lg leading-[30.8px]">
          New Releases
        </h1>
        <a
          href="/"
          className="font-normal text-base md:text-lg leading-[30.8px] text-orange-600 hover:underline"
        >
          View More
        </a>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-36">
        {[1, 2, 3].map((_, index) => (
          <li key={index}>
            <a href="#">
              <div className="font-normal text-black text-xs md:text-sm leading-[30.8px]">
                <div className="bg-gray-50 w-full rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <Image
                    className="object-cover object-center inset-0 overflow-hidden p-2 md:p-4 self-center"
                    loading="lazy"
                    sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                    src={sampleshirt}
                    alt="shirt"
                  />
                </div>
                <div className="flex mt-2 md:mt-4 justify-between">
                  <p>Graphic Shirt 1</p>
                  <p className="text-gray-500">$19.99</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
