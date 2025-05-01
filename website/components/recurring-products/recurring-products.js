import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import styles from "../../styles/components-styles/product-suite/product-suite.module.scss";

const RecurringProducts = () => {
  const [currentProductDisplay, setCurrentProductDisplay] = useState("flow");
  const [flowActive, setFlowActive] = useState("active");
  const [fabricActive, setFabricActive] = useState("");
  const handleProductClick = (event, currentProduct, currentTab) => {
    if (currentProduct === "flow") {
      if (currentProductDisplay === "fabric") {
        setCurrentProductDisplay("flow");
        setFlowActive("active");
        setFabricActive("");
      }
    } else {
      if (currentProductDisplay === "flow") {
        setCurrentProductDisplay("fabric");
        setFlowActive("");
        setFabricActive("active");
      }
    }
  };

  const openItem = (link) => {
    window.open(link, "_self");
  };
  const [isHovered, setIsHovered] = useState({
    upi: false,
    eNach: false
  });

  return (
    <div className={styles["our-products"]}>
      <h2>
        Our{" "}
        <span className={styles["header-section-highlighted"]}>Products</span>
      </h2>
      <p className={styles["tagline"]}>
        Available in the form of simple, automated, plug-n-play APIs & SDKs
      </p>
      <div className={styles["our-products-content"]}>
        <div className={`${styles["virtual-accounts"]} ${styles["product"]}`}>
          {/* The below block of code is conditionally rendered based on the product selected, this is a mismatch handler */}

          <div className={styles["virtual-accounts-pointers"]}>
            <div
              className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["payments-req"]}`}
              onClick={() => {
                openItem("/resources/upi-autopay-apis");
              }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, upi: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, upi: false }))}
            >
              <div className={styles["products-pointer-content"]}>
                <div className={styles["heading-section"]}>
                  <div className={styles["step-icon"]}>
                    <img
                      className={styles["step-icon-img"]}
                      src={isHovered?.upi ? "/images/icons/upi-autopay-active.svg" : "/images/icons/upi-autopay-home.svg"}
                      alt="upi autopay active icon"
                    />
                  </div>
                  <p className={styles["point-title"]}>UPI Autopay</p>
                </div>
                <p className={styles["point-content"]}>
                  Get recurring E-Mandate enabled on your platform via UPI for
                  payments such as bills, EMIs, OTT subscriptions, insurance,
                  mutual funds, etc
                </p>
                <Link href="/resources/upi-autopay-apis">
                  Learn More
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div
          className={`${styles["payments-collections"]} ${styles["product"]}`}
        >
          {/* The below block of code is conditionally rendered based on the product selected, this is a mismatch handler */}

          <div className={styles["payment-collections-pointers"]}>
            <div
              className={`${styles["payment-collections-content"]} ${styles["products-pointer"]} ${styles["collections-reconciliation"]}`}
              onClick={() => {
                openItem("/resources/enach-apis");
              }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, eNach: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, eNach: false }))}
            >
              <div className={styles["products-pointer-content"]}>
                <div className={styles["heading-section"]}>
                  <div className={styles["step-icon"]}>
                    <img
                      className={styles["step-icon-img"]}
                      src={isHovered?.eNach ? "/images/icons/enach-active.svg" : "/images/icons/enach-home.svg"}
                      alt="e-NACH active icon"
                    />
                  </div>
                  <p className={styles["point-title"]}>e-NACH</p>
                </div>
                <p className={styles["point-content"]}>
                  Streamline high-value recurring payments and subscriptions
                  through a mandate generation for customers via e-NACH
                </p>
                <Link href="/resources/enach-apis">
                  Learn More
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringProducts;
