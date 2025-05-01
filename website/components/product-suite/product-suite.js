import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import styles from "../../styles/components-styles/product-suite/product-suite.module.scss";
import urls from "../../urls";

const ProductSuite = () => {
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
    window.open(link, "_blank");
  };

  const [isHovered, setIsHovered] = useState({
    ckyc: false,
    scanAndExtract: false,
    aadhaarXML: false,
    digilocker: false
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
                openItem("/resources/ckyc-apis");
              }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, ckyc: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, ckyc: false }))}
            >
              <div className={styles["products-pointer-content"]}>
                <div className={styles["heading-section"]}>
                  <div className={styles["step-icon"]}>
                    <img
                      className={styles["step-icon-img"]}
                      src={isHovered?.ckyc ? "/images/icons/kyc-ckyc-active.svg" : "/images/icons/kyc-ckyc.svg"}
                      alt="ckyc"
                    />
                  </div>
                  <p className={styles["point-title"]}>CKYC</p>
                </div>
                <p className={styles["point-content"]}>
                  Reduce the expense when a user deals with a financial entity
                  for the first time using CKYC
                </p>
                <Link
                  href="/resources/ckyc-apis"
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
                  Learn More
                  <FaChevronRight />
                </Link>
              </div>
            </div>
            <div
              className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["payments-req"]}`}
              onClick={() => {
                openItem(urls.AADHAAR_XML);
              }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, aadhaarXML: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, aadhaarXML: false }))}
            >
              <div className={styles["products-pointer-content"]}>
                <div className={styles["heading-section"]}>
                  <div className={styles["step-icon"]}>
                    <img
                      className={styles["step-icon-img"]}
                      src={isHovered?.aadhaarXML ? "/images/icons/kyc-aadhaar-active.svg" : "/images/icons/kyc-aadhaar.svg"}
                      alt="aadhaar xml"
                    />
                  </div>
                  <p className={styles["point-title"]}>Aadhaar XML</p>
                </div>
                <p className={styles["point-content"]}>
                  Identify and onboard users with data fetched from UIDAI,
                  without requesting document upload
                </p>
                <Link
                  href={urls.AADHAAR_XML}
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
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
                openItem(urls.SCAN_AND_EXTRACT);
              }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, scanAndExtract: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, scanAndExtract: false }))}
            >
              <div className={styles["products-pointer-content"]}>
                <div className={styles["heading-section"]}>
                  <div className={styles["step-icon"]}>
                    <img
                      className={styles["step-icon-img"]}
                      src={isHovered?.scanAndExtract ? "/images/icons/kyc-scan-active.svg" : "/images/icons/kyc-scan.svg"}
                      alt="scan and extract"
                    />
                  </div>
                  <p className={styles["point-title"]}>Scan & Extract</p>
                </div>
                <p className={styles["point-content"]}>
                  Automatically extract KYC ID from customers’ official
                  documents to reduce manual form filling errors
                </p>
                <Link
                  href={urls.SCAN_AND_EXTRACT}
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
                  Learn More
                  <FaChevronRight />
                </Link>
              </div>
            </div>
            <div
              className={`${styles["payment-collections-content"]} ${styles["products-pointer"]} ${styles["notiffy-webhooks"]}`}
              onClick={() => {
                openItem("/resources/digilocker-apis");
              }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, digilocker: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, digilocker: false }))}
            >
              <div className={styles["products-pointer-content"]}>
                <div className={styles["heading-section"]}>
                  <div className={styles["step-icon"]}>
                    <img
                      className={styles["step-icon-img"]}
                      src={isHovered?.digilocker ? "/images/icons/kyc-digilocker-active.svg" : "/images/icons/kyc-digilocker.svg"}
                      alt="digilocker"
                    />
                  </div>
                  <p className={styles["point-title"]}>DigiLocker</p>
                </div>
                <p className={styles["point-content"]}>
                  Verify customer identity via DigiLocker that can be
                  authenticated by the users
                </p>
                <Link
                  href="/resources/digilocker-apis"
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
                  Learn More <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSuite;
