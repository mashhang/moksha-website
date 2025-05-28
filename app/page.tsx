"use client";

import Navbar from "./components/Navbar";
import styles from "../app/styles";
import Banner from "./(public)/landingPage/Banner";
import ProductList from "./(public)/landingPage/ProductList";
import Footer from "./(public)/landingPage/Footer";

export default function Landing() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>{/* <Navbar /> */}</div>
      </div>

      {/* BANNER */}
      <div className={`${styles.heading2}`}>
        <Banner />
      </div>

      {/* PRODUCT */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ProductList />
          <Footer />
        </div>
      </div>
    </div>
  );
}
