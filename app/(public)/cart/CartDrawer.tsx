import React from "react";

type CartItem = {
  id: string;
  name: string;
  size: string;
  price: number;
};

type CartDrawerProps = {
  items: CartItem[];
  subtotal: number;
  onClose: () => void;
  onRemove: (id: string) => void;
  onViewCart: () => void;
  onCheckout: () => void;
};

export const CartDrawer: React.FC<CartDrawerProps> = ({
  items,
  subtotal,
  onClose,
  onRemove,
  onViewCart,
  onCheckout,
}) => {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}></div>

      {/* Drawer */}
      <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white z-50 shadow-lg flex flex-col transition-transform duration-300 translate-x-0">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty
            </p>
          ) : (
            items.map(({ id, name, size, price }) => (
              <div key={id} className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                <div className="flex-1">
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-gray-500">Size: {size}</p>
                  <p className="text-sm">₱{price.toFixed(2)}</p>
                </div>
                <div>
                  <button
                    className="text-gray-400 hover:text-black text-sm"
                    onClick={() => onRemove(id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t p-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Subtotal</span>
            <span className="font-semibold">₱{subtotal.toFixed(2)}</span>
          </div>
          <button
            onClick={onViewCart}
            className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
          >
            View Full Cart
          </button>
          <button
            onClick={onCheckout}
            className="w-full bg-gray-100 text-black py-2 rounded-xl hover:bg-gray-200 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
