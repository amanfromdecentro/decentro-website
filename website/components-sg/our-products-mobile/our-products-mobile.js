import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import urls from "../../sgUrls";
import styles from "../../styles/components-styles/our-products-mobile/our-products-mobile.module.scss";

const OurProductsMobile = () => {

  const openItem = (link) => {
    window.open(link);
  };

  return (
    <div className={`${styles["our-products"]} ${styles["mobile-products"]}`}>
      <h2>
        Build the{" "}
        <span className={styles["header-section-highlighted"]}>
          Future of Fintech
        </span>
      </h2>
      <p className={styles["tagline"]}>
        The Simplest Fintech Infrastructure Platform
      </p>
      <div className={styles["our-products-content"]}>
        <div className={styles["product-title-container"]}>
          <div
            className={
              styles["product-title"] +
              " " +
              styles["product-title-left"] +
              " " +
              styles["product-sg-header"]
            }
          >
            <div className={styles["product-title-image"]}>
              <img
                src="/images/icons/flow-active.svg"
                className={styles["current-product active"]}
                alt="flow active"
              />
            </div>
          </div>
        </div>
        <div className={styles["virtual-accounts-pointers"]}>
          <div
            className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["payments-req"]}`}
            onClick={() => {
              openItem(urls.PAYMENT_COLLECTION);
            }}
          >
            <div className={styles["step-icon"]}>
              <img
                className={styles["step-icon-img"]}
                src="/images/icons/upi-collect-active.svg"
                alt="upi collect active"
              />
            </div>
            <div className={styles["products-pointer-content"]}>
              <h2 className={styles["point-title"]}>
                Global Payment Collection
              </h2>
              <p className={styles["point-content"]}>
                Generate branded QR codes to accept payments via FAST, PayNow or
                direct transfer
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
            className={`${styles["payment-collections-content"]} ${styles["products-pointer"]} ${styles["notiffy-webhooks"]}`}
            onClick={() => {
              openItem(urls.LEDGERS);
            }}
          >
            <div className={styles["step-icon"]}>
              <img
                className={styles["step-icon-img"]}
                src="/images/icons/enach-active.svg"
                alt="enach active"
              />
            </div>
            <div className={styles["products-pointer-content"]}>
              <h2 className={styles["point-title"]}>Ledgers</h2>
              <p className={styles["point-content"]}>
                A single and scalable system of record for all transactions and
                balances on your platform
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
            className={`${styles["payment-collections-content"]} ${styles["products-pointer"]} ${styles["notiffy-webhooks"]}`}
            onClick={() => {
              openItem(urls.INSTANT_PAYOUTS);
            }}
          >
            <div className={styles["step-icon"]}>
              <img
                className={styles["step-icon-img"]}
                src="/images/icons/payouts-active.svg"
                alt="payouts active"
              />
            </div>
            <div className={styles["products-pointer-content"]}>
              <h2 className={styles["point-title"]}>Global Payouts</h2>
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
          <div
            className={`${styles["payment-collections-content"]} ${styles["products-pointer"]} ${styles["notiffy-webhooks"]}`}
            onClick={() => {
              openItem(urls.MULTI_CURRENCY_ACCOUNTS);
            }}
          >
            <div className={styles["step-icon"]}>
              <img
                className={styles["step-icon-img"]}
                src="/images/icons/multi-currency-global.svg"
                alt="payouts active"
              />
            </div>
            <div className={styles["products-pointer-content"]}>
              <h2 className={styles["point-title"]}>Multi Currency Accounts</h2>
              <p className={styles["point-content"]}>
                Easily transact, hold, and reconcile in multiple currencies, all within one account.
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
    </div>
  );
};

export default OurProductsMobile;
