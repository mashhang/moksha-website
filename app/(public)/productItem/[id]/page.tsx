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
        className="flex items-center justify-between w-full py-4 font-medium text-left text-gray-900"
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
      <nav className="w-full px-4 mt-20 text-xs text-gray-600 md:px-10 md:mt-24 md:text-sm">
        <ul className="flex items-center space-x-2">
          <li>
            <a href="/" className="text-gray-500 hover:underline">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/products" className="text-gray-500 hover:underline">
              Products
            </a>
          </li>
          <li>/</li>
          <li className="font-medium text-gray-900 ">{product.name} </li>
        </ul>
      </nav>

      {/* Main */}
      <main className="relative flex flex-col w-full gap-4 px-4 py-4 mx-auto mt-2 md:flex-row md:px-10 md:mt-0 md:py-8 md:gap-8">
        {/* Thumbnails */}
        <div className="flex flex-row items-center justify-center order-2 gap-4 md:flex-col md:order-1 md:gap-8 md:justify-start">
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
          className="relative flex-shrink-0 oder-1 md:order-2"
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
              className="absolute top-0 z-50 ml-6 overflow-hidden bg-white border shadow-lg left-full rounded-xl"
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
        <div className="sticky flex flex-col self-start order-3 space-y-4 md:order-3 top-24 md:space-y-6">
          {/* <span className="text-xs tracking-wider text-gray-500 uppercase">
            Lifestyle / Sneakers
          </span> */}

          <h1 className="flex items-center justify-between pr-2 text-2xl font-semibold text-gray-900 md:text-4xl">
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

          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
            {product.description}
          </p>

          <p className="text-xl font-semibold text-black md:text-2xl">
            ₱{product.price.toFixed(2)}
          </p>

          <div>
            <p className="mb-2 text-sm font-medium md:text-base">
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
            <p className="mb-2 text-sm font-medium md:text-base">Select Size</p>
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
          <div className="flex flex-row items-center justify-between py-4 border-y border-y-gray-300">
            <p className="text-sm font-medium md:text-base">Select Quantity</p>
            <div className="flex items-center rounded-md w-max">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="flex items-center justify-center w-10 h-10 text-base font-semibold text-gray-600 md:text-lg hover:text-black"
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
                className="flex items-center justify-center w-10 h-10 text-base font-semibold text-gray-600 md:text-lg hover:text-black"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full py-4 text-sm tracking-wide text-white transition bg-black rounded-md cursor-pointer hover:bg-gray-900 md:text-base"
          >
            Add to Cart
          </button>
        </div>
      </main>

      <section className="w-full px-4 py-8 mx-auto space-y-2 md:px-80 md:py-12 border-y border-y-gray-300 md:mt-10 md:space-y-4">
        <AccordionItem title="Product Description">
          <p className="mb-2 text-sm md:text-base">
            Top off your outfit with this essential low-top sneaker. It's
            designed with premium materials and handmade craftsmanship for
            all-day wear.
          </p>
          <ul className="pl-5 space-y-1 text-xs list-disc md:text-sm">
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
          <ul className="pl-5 space-y-1 text-xs list-disc md:text-sm">
            <li>Low-top design</li>
            <li>Rubber sole for comfort</li>
            <li>Fits true to size</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Composition & Care">
          <ul className="pl-5 space-y-1 text-xs list-disc md:text-sm">
            <li>100% Italian Leather & Suede</li>
            <li>Rubber Outsole</li>
            <li>Handmade – spot clean only</li>
          </ul>
        </AccordionItem>
      </section>

      {/* Recommended Products */}
      <section className="w-full px-4 py-12 mx-auto md:px-10">
        <h2 className="mb-12 text-2xl font-bold text-center text-gray-900 md:text-4xl">
          RECOMMENDED FOR YOU
        </h2>

        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-5 md:gap-8">
          {/* <div className="flex flex-col justify-between w-full gap-4 md:flex-row md:gap-8"> */}
          {recommendedProducts.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="rounded-lg overflow-hidden bg-white cursor-pointer will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d]"
            >
              <div className="w-full h-[185px] md:h-[420px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="px-4 pt-2 md:px-4 md:pt-2">
                <div className="md:flex md:flex-row md:justify-between md:items-start">
                  <h3 className="text-base font-medium text-gray-900 md:text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 md:mt-1 md:text-base">
                    ₱{item.price.toFixed(2)}
                  </p>
                </div>
                {/* <button className="w-full py-2 mt-2 text-sm text-white transition bg-black rounded md:text-base hover:bg-gray-800">
                  View Product
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
