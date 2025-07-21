"use client";

import { useState } from "react";
import Link from "next/link";
import {
  pinkHoodie,
  brownSweatshirt,
  wjeans2,
  pinkBlazer,
  pinkBag,
  beigeSweatshirt,
  blackHoodie,
  yellowJacket,
} from "@/public/assets";
import ProductModal from "./ProductModal";

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<null | {
    id: number;
    name: string;
    price: number;
    image: string;
  }>(null);

  const images = [
    brownSweatshirt,
    wjeans2,
    pinkHoodie,
    pinkBlazer,
    pinkBag,
    beigeSweatshirt,
    yellowJacket,
    blackHoodie,
  ];

  const products = images.map((img, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: 19.99 + i * 10,
    image: img.src,
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
          <Link href={`/productItem/${product.id}`} key={product.id}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
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
