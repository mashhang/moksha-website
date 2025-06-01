import React from "react";

type CartItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
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
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
        ) : (
          items.map(({ id, name, size, price, quantity }) => (
            <div key={id} className="flex items-center gap-4 border-b pb-4">
              <div className="w-24 h-24 bg-gray-100 rounded-xl"></div>
              <div className="flex-1">
                <p className="text-lg font-medium">{name}</p>
                <p className="text-sm text-gray-500">Size: {size}</p>
                <div className="flex items-center gap-2 mt-2">
                  <label className="text-sm text-gray-500">Qty</label>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) =>
                      onQuantityChange(id, parseInt(e.target.value) || 1)
                    }
                    className="w-16 border rounded px-2 py-1"
                  />
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">₱{price.toFixed(2)}</p>
                <button
                  className="text-sm text-red-500 hover:underline mt-1"
                  onClick={() => onRemove(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 border-t pt-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Subtotal</p>
          <p className="text-xl font-bold">₱{subtotal.toFixed(2)}</p>
        </div>
        <div className="space-x-2">
          <button
            onClick={onContinueShopping}
            className="bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200"
          >
            Continue Shopping
          </button>
          <button
            onClick={onCheckout}
            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
