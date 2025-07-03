import Image from "next/image";
import React from "react";

type CartItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
};

type CartPageProps = {
  items: CartItem[];
  subtotal: number;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onContinueShopping: () => void;
  onCheckout: () => void;
};

export const CartPage: React.FC<CartPageProps> = ({
  items,
  subtotal,
  onQuantityChange,
  onRemove,
  onContinueShopping,
  onCheckout,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-xl md:text-2xl font-semibold mt-16 md:mt-20 mb-6">
        Your Cart
      </h1>

      <div className="space-y-6">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
        ) : (
          items.map(({ id, name, size, price, quantity, image }) => (
            <div
              key={id}
              className="flex items-center gap-4 border-b-gray-400 border-b pb-4"
            >
              {/* <div className="w-24 h-24 bg-gray-100 rounded-xl"></div> */}
              <Image
                src={image}
                alt={name}
                width={96}
                height={96}
                className="object-cover rounded-lg cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-base md:text-lg font-medium">{name}</p>
                <p className="text-xs md:text-sm text-gray-500">Size: {size}</p>
                <div className="flex items-center gap-2 mt-2">
                  <label className="text-xs md:text-sm text-gray-500">
                    Qty
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) =>
                      onQuantityChange(id, parseInt(e.target.value) || 1)
                    }
                    className="text-xs md:text-sm w-16 border rounded px-2 py-1"
                  />
                </div>
              </div>
              <div className="text-right">
                <p className="text-base md:text-lg font-semibold">
                  ₱{price.toFixed(2)}
                </p>
                <button
                  className="text-sm text-red-500 hover:underline mt-1 cursor-pointer"
                  onClick={() => onRemove(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t pt-4 flex flex-col justify-between items-end">
        <div>
          <p className="text-xs md:text-sm text-gray-500 text-right">
            Subtotal
          </p>
          <p className="text-lg md:text-xl font-bold">₱{subtotal.toFixed(2)}</p>
        </div>
        {/* <div className="flex flex-col-reverse md:flex-row gap-y-2 md:space-x-4 "> */}
        <div className="mt-4 space-x-2">
          <button
            onClick={onContinueShopping}
            className="text-sm md:text-base bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200 cursor-pointer"
          >
            Continue Shopping
          </button>
          <button
            onClick={onCheckout}
            className="text-sm md:text-base bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
