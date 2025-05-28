"use client";

import Image from "next/image";
import { sampleshirt } from "@/public/assets";
import styles from "../../styles";

export default function ProductList() {
  return (
    <div className="w-full pl-5 pr-5 py-24">
      <div className="flex mb-8 justify-between">
        <h1 className={styles.paragraph2}>New Releases</h1>
        <h1 className={styles.paragraph2}>View More</h1>
      </div>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-36">
        {[1, 2, 3].map((_, index) => (
          <li key={index}>
            <a href="#">
              <div className={styles.paragraph}>
                <div className="bg-gray-50 w-full rounded-lg overflow-hidden">
                  <Image
                    className="object-cover object-center inset-0 overflow-hidden p-4 self-center"
                    loading="lazy"
                    sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                    src={sampleshirt}
                    alt="shirt"
                  />
                </div>
                <div className="flex mt-4 justify-between">
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
