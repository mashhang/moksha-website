"use client";

import Image from "next/image";
import { pinkBlazer, wjeans2, brownSweatshirt } from "@/public/assets";

export default function ProductList() {
  const images = [pinkBlazer, brownSweatshirt, wjeans2];
  const names = ["Pink Blazer", "Brown Sweatshirt", "Wide Leg Jeans"];
  const prices = [2999, 999, 2499];

  const products = images.map((img, i) => ({
    id: i + 1,
    name: names[i],
    price: prices[i],
    image: img.src,
  }));

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
                    width={500}
                    height={500}
                    src={products[index].image}
                    alt="shirt"
                  />
                </div>
                <div className="flex mt-2 md:mt-4 justify-between">
                  <p>{products[index].name}</p>
                  <p className="text-gray-500">
                    ₱ {products[index].price.toFixed(2)}
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
