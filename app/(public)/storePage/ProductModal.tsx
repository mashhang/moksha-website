"use client";

import Image from "next/image";
import { useState } from "react";

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};

export default function ProductModal({
  isOpen,
  onClose,
  product,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-3xl rounded-xl overflow-hidden shadow-xl relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          >
            &times;
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Image */}
            <div className="p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <p className="text-lg text-gray-700 mt-1">
                  ₱{product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  A clean and soft premium shirt for everyday comfort and style.
                </p>

                {/* Size Selector */}
                <div className="mt-4">
                  <label className="text-sm font-medium">Size</label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="mt-1 w-full border rounded px-3 py-2"
                  >
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">XL</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="mt-4">
                  <label className="text-sm font-medium">Quantity</label>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="mt-1 w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => alert("Add to cart logic here")}
                className="mt-6 bg-black text-white w-full py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
