import React, { useState } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import urls from "../../sgUrls";
import styles from "../../styles/components-styles/our-products/our-products.module.scss";

const OurProducts = () => {
  const [currentProductDisplay, setCurrentProductDisplay] = useState("flow");
  const [flowActive, setFlowActive] = useState("active");

  const openItem = (link) => {
    window.open(link);
  };

  return (
    <div className={styles["our-products"]}>
      <h2>
        Build the{" "}
        <span className={styles["header-section-highlighted"]}>
          Future of Fintech
        </span>
      </h2>
      <p className={styles["tagline"]}>
        The Simplest Fintech Infrastructure Platform
      </p>

      {/* Started here */}
      <div className={styles["our-products-content-section"]}>
        <div className={styles["header-toogle-section"]}>
          <div
            className={
              styles["product-header"] +
              " " +
              styles["product-header-left"] +
              " " +
              styles["product-sg-header"]
            }
          >
            <div className={styles["product-header-image"]}>
              <img
                src="/images/icons/flow-active.svg"
                className={styles["current-product active"]}
                alt="flow active"
              />
            </div>
            <p className={styles["tagline"] + " " + styles[`${flowActive}`]}>
              White-label payments infrastructure
            </p>
          </div>
        </div>

        {currentProductDisplay === "flow" ? (
          <div className={styles["products-content"]}>
            <div className={styles["product-grid"]}>
              <div
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.PAYMENT_COLLECTION);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/va-home-active.svg"
                        alt="VA active icon"
                      />
                    </div>
                    <p className={styles["point-title"]}>
                      Global Payment Collection
                    </p>
                  </div>
                  <p className={styles["point-content"]}>
                    Generate branded QR codes to accept payments via multiple
                    payment methods.
                  </p>
                  <Link
                    href={urls.PAYMENT_COLLECTION}
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
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.INSTANT_PAYOUTS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/payouts-active.svg"
                        alt="payouts active icon"
                      />
                    </div>
                    <p className={styles["point-title"]}>Global Payouts</p>
                  </div>
                  <p className={styles["point-content"]}>
                    Disburse payments to consumers and users directly from your
                    dashboard via your choice of method
                  </p>
                  <Link
                    href={urls.INSTANT_PAYOUTS}
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

            <div className={styles["product-grid"]}>
              <div
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.LEDGERS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/ledgers-active.svg"
                        alt="ledgers active icon"
                      />
                    </div>
                    <p className={styles["point-title"]}>Ledgers</p>
                  </div>
                  <p className={styles["point-content"]}>
                    A single and scalable system of record for all transactions
                    and balances on your platform
                  </p>
                  <Link
                    href={urls.LEDGERS}
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
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.MULTI_CURRENCY_ACCOUNTS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/multi-currency-global.svg"
                        alt="ledgers active icon"
                      />
                    </div>
                    <p className={styles["point-title"]}>
                      Multi Currency Accounts
                    </p>
                  </div>
                  <p className={styles["point-content"]}>
                    Easily transact, hold, and reconcile in multiple currencies,
                    all within one account.
                  </p>
                  <Link
                    href={urls.MULTI_CURRENCY_ACCOUNTS}
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
        ) : (
          <div className={styles["products-content"]}></div>
        )}
      </div>

      {/* Completed here  */}
    </div>
  );
};

export default OurProducts;
