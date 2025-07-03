"use client";

import { useState } from "react";
import Link from "next/link";
import { sampleshirt } from "@/public/assets";
import ProductModal from "./ProductModal";

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<null | {
    id: number;
    name: string;
    price: number;
    image: string;
  }>(null);

  const products = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: 19.99 + i * 10,
    image: sampleshirt.src,
  }));

  return (
    <section className="w-full md:w-3/4 min-w-0">
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold">All Products</h2>
        <select className="border rounded px-3 py-1 text-xs md:text-sm">
          <option>Sort by</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {products.map((product, i) => (
          // <div
          //   key={product.id}
          //   className="bg-white shadow-sm md:shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
          //   onClick={() => setSelectedProduct(product)}
          // >
          //   <img
          //     src={sampleshirt.src}
          //     alt={product.name}
          //     className="w-full object-cover select-none"
          //     draggable="false"
          //   />
          //   <div className="p-2 md:p-4">
          //     <h4 className="font-medium text-base md:text-lg">
          //       {product.name}
          //     </h4>
          //     <p className="text-sm md:text-base text-gray-500">
          //       ₱{product.price.toFixed(2)}
          //     </p>
          //   </div>
          // </div>
          <Link href={`/productItem/${i + 1}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img
                src={sampleshirt.src}
                alt={`Product ${i + 1}`}
                className="w-full object-cover"
              />
              <div className="p-2 md:p-4">
                <h4 className="font-medium text-base md:text-lg">
                  Product {i + 1}
                </h4>
                <p className="text-sm md:text-base text-gray-500">
                  ₱{(19.99 + i * 10).toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={
          selectedProduct || {
            id: 0,
            name: "",
            price: 0,
            image: "",
          }
        }
      />
    </section>
  );
}
