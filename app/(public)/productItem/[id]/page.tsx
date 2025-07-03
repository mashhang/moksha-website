"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import sampleshirt from "@/public/assets/sampleshirt.png";

const product = {
  id: 1,
  name: "Dice Lo Bee Bird Sneaker",
  description:
    "Premium low-top sneaker made from Italian leather and suede with embroidered bee bird patch. Rubber sole. Handmade in Portugal.",
  price: 1299,
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Black", "White", "Beige"],
  images: [sampleshirt.src, sampleshirt.src, sampleshirt.src],
};

const recommendedProducts = [
  {
    id: 2,
    name: "Cloud Runner",
    price: 999,
    image: sampleshirt.src,
  },
  {
    id: 3,
    name: "Urban Trek Lo",
    price: 1099,
    image: sampleshirt.src,
  },
  {
    id: 4,
    name: "Canvas Classic",
    price: 899,
    image: sampleshirt.src,
  },
  {
    id: 5,
    name: "Zen Flex Leather",
    price: 1199,
    image: sampleshirt.src,
  },
  {
    id: 6,
    name: "Bag Louis Vuitton",
    price: 1999,
    image: sampleshirt.src,
  },
];

// Reusable Accordion Item
const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex justify-between items-center font-medium text-gray-900"
      >
        <span>{title}</span>
        <span className="text-xl transition-transform">{open ? "−" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-700">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ProductPage() {
  // Item Variables
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Image Zoom Variables
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Favorite
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    alert("Added to cart!");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      imageRef.current!.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleMouseEnter = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setImageSize({ width: rect.width, height: rect.height });
      setShowZoom(true);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="w-full px-4 md:px-10 mt-20 md:mt-24 text-xs md:text-sm text-gray-600">
        <ul className="flex items-center space-x-2">
          <li>
            <a href="/" className="hover:underline text-gray-500">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/products" className="hover:underline text-gray-500">
              Products
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium ">{product.name} </li>
        </ul>
      </nav>

      {/* Main */}
      <main className="flex flex-col md:flex-row w-full mx-auto px-4 md:px-10 py-4 mt-2 md:mt-0 md:py-8 gap-4 md:gap-8 relative">
        {/* Thumbnails */}
        <div className="flex flex-row md:flex-col order-2 md:order-1 gap-4 md:gap-8 items-center justify-center md:justify-start">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={`w-[50px] md:w-[150px] h-auto border rounded-md overflow-hidden cursor-pointer ${
                activeImage === img ? "border-black" : "border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`Thumb ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>

        {/* Main Image Wrapper */}
        <div
          className="oder-1 md:order-2 relative flex-shrink-0"
          ref={imageRef}
        >
          <div
            className="w-full md:w-[800px] h-auto flex items-center justify-center rounded-xl bg-white overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setShowZoom(false)}
          >
            <Image
              src={activeImage}
              alt={product.name}
              width={800}
              height={800}
              className="w-full h-[300px] md:h-full object-contain md:object-cover cursor-zoom-in"
              priority
            />
          </div>

          {/* Zoom Preview */}
          {showZoom && (
            <div
              className="absolute top-0 left-full ml-6 z-50 border rounded-xl overflow-hidden shadow-lg bg-white"
              style={{
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
              }}
            >
              <div
                className="w-full h-full bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url(${activeImage})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  backgroundSize: "150%",
                }}
              />
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="order-3 md:order-3 flex flex-col sticky top-24 self-start space-y-4 md:space-y-6">
          {/* <span className="uppercase tracking-wider text-xs text-gray-500">
            Lifestyle / Sneakers
          </span> */}

          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 flex items-center justify-between pr-2">
            {product.name}
            <button
              onClick={() => {
                setIsFavorited(!isFavorited);
                toast.success(
                  !isFavorited ? "Added to favorites" : "Removed from favorites"
                );
              }}
              className="ml-4"
              aria-label="Toggle favorite"
            >
              <Heart
                className={`w-4 h-4 md:w-6 md:h-6 transition-colors ${
                  isFavorited ? "fill-black text-black" : "text-gray-400"
                }`}
              />
            </button>
          </h1>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <p className="text-xl md:text-2xl font-semibold text-black">
            ₱{product.price.toFixed(2)}
          </p>

          <div>
            <p className="text-sm md:text-base font-medium mb-2">
              Select Color
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-md text-sm md:text-base capitalize transition ${
                    selectedColor === color
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm md:text-base font-medium mb-2">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md text-sm md:text-base transition ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex border-y border-y-gray-300 flex-row items-center justify-between py-4">
            <p className="text-sm md:text-base font-medium">Select Quantity</p>
            <div className="flex items-center rounded-md w-max">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-10 h-10 flex items-center justify-center text-base md:text-lg font-semibold text-gray-600 hover:text-black"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                className="w-12 text-sm md:text-base text-center focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
              />

              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-10 h-10 flex items-center justify-center text-base md:text-lg font-semibold text-gray-600 hover:text-black"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-900 transition text-sm md:text-base tracking-wide cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </main>

      <section className="w-full px-4 md:px-80 py-8 md:py-12 border-y border-y-gray-300 md:mt-10 mx-auto space-y-2 md:space-y-4">
        <AccordionItem title="Product Description">
          <p className="mb-2 text-sm md:text-base">
            Top off your outfit with this essential low-top sneaker. It's
            designed with premium materials and handmade craftsmanship for
            all-day wear.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Premium leather and suede construction</li>
            <li>Embroidered bee bird patch</li>
            <li>Handmade in Portugal</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Style Info">
          <ul className="space-y-1 text-xs md:text-sm">
            <li>
              <strong>Style:</strong> D7589
            </li>
            <li>
              <strong>PC9 #:</strong> D75890026
            </li>
            <li>
              <strong>Color:</strong> Beige
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem title="How it Fits">
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Low-top design</li>
            <li>Rubber sole for comfort</li>
            <li>Fits true to size</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Composition & Care">
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>100% Italian Leather & Suede</li>
            <li>Rubber Outsole</li>
            <li>Handmade – spot clean only</li>
          </ul>
        </AccordionItem>
      </section>

      {/* Recommended Products */}
      <section className="w-full px-4 md:px-10 py-12 mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          RECOMMENDED FOR YOU
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 w-full">
          {/* <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between w-full"> */}
          {recommendedProducts.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="rounded-lg overflow-hidden bg-white cursor-pointer will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d]"
            >
              <div className="w-full h-[180px] md:h-[420px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-4 pt-2 md:p-4">
                <h3 className="text-base md:text-lg font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600 md:mt-1 text-sm md:text-base">
                  ₱{item.price.toFixed(2)}
                </p>
                <button className="mt-2 w-full text-sm md:text-base bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                  View Product
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
