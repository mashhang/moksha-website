"use client";

import Navbar from "./components/Navbar";
import styles from "../app/styles";
import Banner from "./(public)/landingPage/Banner";
import ProductList from "./(public)/landingPage/ProductList";
import Footer from "./(public)/landingPage/Footer";

export default function Landing() {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* BANNER */}
      <div className={`${styles.heading2}`}>
        <Banner />
      </div>

      {/* PRODUCT */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductList />
        </div>
      </div>
    </div>
  );
}
