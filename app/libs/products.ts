import {
  beigeSweatshirt,
  beigeSweatshirt2,
  beigeSweatshirt3,
  blackHoodie,
  brownSweatshirt,
  brownSweatshirt2,
  brownSweatshirt3,
  pinkBag,
  pinkBag2,
  pinkBag3,
  pinkBlazer,
  pinkBlazer2,
  pinkBlazer3,
  pinkHoodie,
  pinkHoodie2,
  pinkHoodie3,
  wjeans,
  wjeans2,
  wjeans3,
  yellowJacket,
  yellowJacket2,
  yellowJacket3,
} from "@/public/assets";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: string[];
  accordion: {
    productDescription: {
      paragraph: string;
      bullets: string[];
    };
    styleInfo: {
      label: string;
      value: string;
    }[];
    howItFits: string[];
    compositionAndCare: string[];
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Brown Sweatshirt",
    description:
      "Redefine casual wear with the Moksha Brown Sweatshirt — a luxurious layer made for comfort and confidence. Crafted with heavyweight fleece and refined ribbed finishes, it's your essential piece for understated elegance.",
    price: 1299,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Brown"],
    images: [brownSweatshirt.src, brownSweatshirt2.src, brownSweatshirt3.src],
    accordion: {
      productDescription: {
        paragraph:
          "The Moksha Brown Sweatshirt redefines laid-back luxury with rich earth tones and premium softness. A modern essential designed to blend comfort with sophisticated minimalism.",
        bullets: [
          "Heavyweight fleece with a smooth finish",
          "Signature Moksha logo embroidery",
          "Built for comfort and durability",
        ],
      },
      styleInfo: [
        { label: "Style", value: "MSH-BRN01" },
        { label: "Collection", value: "Moksha Core" },
        { label: "Color", value: "Brown" },
      ],
      howItFits: [
        "Relaxed fit",
        "Drop shoulders for added flow",
        "True to size",
      ],
      compositionAndCare: [
        "100% Cotton Fleece",
        "Pre-washed to reduce shrinkage",
        "Machine wash cold with like colors",
      ],
    },
  },
  {
    id: 2,
    name: "Wide Leg Jeans",
    description:
      "A timeless silhouette meets modern luxury in the Moksha Wide Leg Jeans. Made from premium washed denim, they offer fluid movement, sculpted fit, and effortless street sophistication.",
    price: 1299,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Denim"],
    images: [wjeans.src, wjeans2.src, wjeans3.src],
    accordion: {
      productDescription: {
        paragraph:
          "Moksha Wide Leg Jeans offer fluid structure with a relaxed silhouette, blending classic denim heritage with modern streetwear energy. Designed to flow with movement while maintaining premium form.",
        bullets: [
          "Midweight premium denim",
          "Soft washed finish with subtle fades",
          "Wide leg cut with high-rise waist",
        ],
      },
      styleInfo: [
        { label: "Style", value: "MJN-WIDE01" },
        { label: "Collection", value: "Moksha Denim" },
        { label: "Color", value: "Washed Denim" },
      ],
      howItFits: [
        "High-rise, wide-leg fit",
        "Relaxed through hip and thigh",
        "Runs slightly large – size down for slim fit",
      ],
      compositionAndCare: [
        "100% Cotton Denim",
        "Machine wash cold, inside out",
        "Line dry to maintain shape",
      ],
    },
  },
  {
    id: 3,
    name: "Serenity Hoodie – Blossom Pink",
    description:
      "Elevate your everyday style with the Moksha Serenity Hoodie in Blossom Pink — a luxurious blend of comfort and elegance. Designed with premium fabric and subtle detailing, it’s the perfect statement of effortless sophistication.",
    price: 1299,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blossom Pink"],
    images: [pinkHoodie.src, pinkHoodie2.src, pinkHoodie3.src],
    accordion: {
      productDescription: {
        paragraph:
          "Indulge in everyday luxury with the Moksha Serenity Hoodie. This Blossom Pink essential blends elevated streetwear with premium comfort for a versatile, refined look.",
        bullets: [
          "Crafted from ultra-soft brushed fleece",
          "Minimalist Moksha logo embroidery",
          "Designed for luxurious daily wear",
        ],
      },
      styleInfo: [
        { label: "Style", value: "MSH-PNK01" },
        { label: "Collection", value: "Moksha Essentials" },
        { label: "Color", value: "Blossom Pink" },
      ],
      howItFits: [
        "Relaxed unisex fit",
        "Ribbed cuffs and hem for structure",
        "True to size – size up for oversized look",
      ],
      compositionAndCare: [
        "80% Organic Cotton, 20% Recycled Polyester",
        "Pre-shrunk for lasting shape",
        "Machine wash cold, inside out",
      ],
    },
  },
  {
    id: 4,
    name: "Pink Blazer",
    description:
      "Turn heads in the Moksha Pink Blazer — a polished essential crafted for power, poise, and luxury. Tailored to perfection, it adds a bold and elegant edge to your modern wardrobe.",
    price: 2999,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink"],
    images: [pinkBlazer.src, pinkBlazer2.src, pinkBlazer3.src],
    accordion: {
      productDescription: {
        paragraph:
          "Tailored for elegance, the Moksha Pink Blazer balances sharp lines with feminine strength. This polished piece brings luxury and versatility to any refined wardrobe.",
        bullets: [
          "Structured fit with clean lapels",
          "Fully lined with satin finish",
          "Front button closure and inner pocket",
        ],
      },
      styleInfo: [
        { label: "Style", value: "MBZ-PNK01" },
        { label: "Collection", value: "Moksha Atelier" },
        { label: "Color", value: "Pink" },
      ],
      howItFits: [
        "Tailored fit with shoulder padding",
        "Falls at hip length",
        "Fits true to size",
      ],
      compositionAndCare: [
        "60% Viscose, 35% Polyester, 5% Spandex",
        "Lining: 100% Satin Polyester",
        "Dry clean only",
      ],
    },
  },
  {
    id: 5,
    name: "Pink Bag",
    description:
      "The Moksha Pink Bag brings sleek minimalism and quiet luxury into every detail. Designed for versatility, it’s the perfect companion from day to night, blending structure and softness effortlessly.",
    price: 1499,
    sizes: ["One Size"],
    colors: ["Pink"],
    images: [pinkBag.src, pinkBag2.src, pinkBag3.src],
    accordion: {
      productDescription: {
        paragraph:
          "The Moksha Pink Bag is a structured carry-all that radiates modern femininity. Designed for daily elegance, it's both a fashion statement and a functional essential.",
        bullets: [
          "Soft vegan leather with suede interior",
          "Magnetic flap closure",
          "Inner zipper and phone compartments",
        ],
      },
      styleInfo: [
        { label: "Style", value: "MBG-PNK01" },
        { label: "Collection", value: "Moksha Objects" },
        { label: "Color", value: "Pink" },
      ],
      howItFits: [
        "Medium size crossbody or shoulder bag",
        "Adjustable strap included",
        "Lightweight yet structured",
      ],
      compositionAndCare: [
        "100% Vegan Leather (PU)",
        "Suede-like polyester lining",
        "Spot clean with damp cloth",
      ],
    },
  },
  {
    id: 6,
    name: "Beige Sweatshirt",
    description:
      "The Moksha Beige Sweatshirt delivers clean lines, a relaxed silhouette, and soft fleece texture for a luxury-meets-leisure feel. Perfect for layering or standing on its own, it’s a refined casual staple.",
    price: 999,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige"],
    images: [beigeSweatshirt.src, beigeSweatshirt2.src, beigeSweatshirt3.src],
    accordion: {
      productDescription: {
        paragraph:
          "Clean, calm, and quietly confident — the Moksha Beige Sweatshirt is an everyday classic elevated through craftsmanship. Its neutral tone and soft fleece deliver luxurious simplicity.",
        bullets: [
          "Midweight cotton fleece",
          "Embroidered tonal logo",
          "Everyday layering staple",
        ],
      },
      styleInfo: [
        { label: "Style", value: "MSH-BGE01" },
        { label: "Collection", value: "Moksha Core" },
        { label: "Color", value: "Beige" },
      ],
      howItFits: [
        "Straight fit, slightly relaxed",
        "Rib-knit cuffs and waistband",
        "True to size",
      ],
      compositionAndCare: [
        "100% Cotton",
        "Machine wash cold",
        "Tumble dry low or hang dry",
      ],
    },
  },
  {
    id: 7,
    name: "Black Hoodie",
    description:
      "Understated and iconic, the Moksha Black Hoodie is your go-to for premium comfort and timeless edge. Its minimalist design, soft fleece interior, and elevated fit redefine everyday essentials.",
    price: 999,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black"],
    images: [blackHoodie.src],
    accordion: {
      productDescription: {
        paragraph:
          "The Moksha Black Hoodie embodies understated luxury with its clean silhouette and refined softness. A must-have piece that balances streetwear roots with elevated essentials.",
        bullets: [
          "Brushed fleece interior",
          "Embroidered tonal branding",
          "Built for cozy all-day wear",
        ],
      },
      styleInfo: [
        { label: "Style", value: "MHD-BLK01" },
        { label: "Collection", value: "Moksha Essentials" },
        { label: "Color", value: "Black" },
      ],
      howItFits: [
        "Relaxed streetwear fit",
        "Adjustable hood and front pocket",
        "Fits true to size",
      ],
      compositionAndCare: [
        "80% Cotton, 20% Polyester",
        "Machine wash cold, inside out",
        "Air dry for best longevity",
      ],
    },
  },
  {
    id: 8,
    name: "Yellow Jacket",
    description:
      "Make a vibrant statement with the Moksha Yellow Jacket — where functionality meets high fashion. With luxe quilting and a bold hue, it's the ultimate outerwear for transitional elegance.",
    price: 2399,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Yellow"],
    images: [yellowJacket.src, yellowJacket2.src, yellowJacket3.src],
    accordion: {
      productDescription: {
        paragraph:
          "Bright, bold, and built for layers — the Moksha Yellow Jacket fuses high-fashion vibrance with cold-weather functionality. A standout piece that makes a statement in every step.",
        bullets: [
          "Lightweight insulated fill",
          "Water-resistant shell",
          "Utility pockets and zip-through collar",
        ],
      },
      styleInfo: [
        { label: "Style", value: "MJKT-YLW01" },
        { label: "Collection", value: "Moksha Outerwear" },
        { label: "Color", value: "Yellow" },
      ],
      howItFits: [
        "Boxy, modern fit",
        "Cinchable waist and cuffs",
        "True to size – size up for layering",
      ],
      compositionAndCare: [
        "Shell: 100% Nylon | Lining: 100% Polyester",
        "Insulated with recycled fill",
        "Machine wash cold, hang dry",
      ],
    },
  },
];
