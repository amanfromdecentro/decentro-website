import React, { useState } from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronRight } from "react-icons/fa";
import styles from "../../styles/components-styles/our-products-mobile/our-products-mobile.module.scss";
import urls from "../../urls";
import Image from "next/image";

const OurProductsMobile = () => {
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
              styles[`${flowActive}`]
            }
            onClick={() => {
              handleProductClick(event, "flow", "product-title-left");
            }}
          >
            <div className={styles["product-title-image"]}>
              {currentProductDisplay === "flow" ? (
                <Image
                  src="/images/icons/flow-active.svg"
                  className={styles["current-product active"]}
                  alt="flow active"
                  // layout="responsive"
                  width={111}
                  height={36}
                />
              ) : (
                // <img
                //   src="/images/icons/flow-active.svg"
                //   className={styles["current-product active"]}
                //   alt="flow active"
                // />
                <Image
                  src="/images/icons/flow-inactive.svg"
                  className={styles["current-product active"]}
                  alt="flow inactive"
                  // layout="responsive"
                  width={111}
                  height={36}
                />
                // <img
                //   src="/images/icons/flow-inactive.svg"
                //   className={styles["current-product active"]}
                //   alt="flow inactive"
                // />
              )}
            </div>
          </div>
          <div
            className={
              styles["product-title"] +
              " " +
              styles["product-title-right"] +
              " " +
              styles[`${fabricActive}`]
            }
            onClick={() => {
              handleProductClick(event, "fabric", "product-title-right");
            }}
          >
            <div className={styles["product-title-image"]}>
              {currentProductDisplay === "fabric" ? (
                <Image
                  src="/images/icons/fabric-active.svg"
                  className={styles["current-product active"]}
                  alt="fabric active"
                  width={130}
                  height={36}
                />
              ) : (
                // <img
                //   src="/images/icons/fabric-active.svg"
                //   className={styles["current-product active"]}
                //   alt="fabric active"
                // />
                <Image
                  src="/images/icons/fabric-inactive.svg"
                  className={styles["current-product active"]}
                  alt="fabric inactive"
                  width={130}
                  height={36}
                />
                // <img
                //   src="/images/icons/fabric-inactive.svg"
                //   className={styles["current-product active"]}
                //   alt="fabric inactive"
                // />
              )}
            </div>
          </div>
        </div>

        {/* The below block of code is conditionally rendered based on the product selected, this is a mismatch handler */}
        {currentProductDisplay === "fabric" ? (
          <div className={styles["virtual-accounts-pointers"]}>
            <div
              className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
            >
              <div className={styles["step-icon"]}>
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/kyc-active.svg"
                  alt="kyc active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/kyc-active.svg"
                  alt="kyc active"
                /> */}
              </div>
              <div
                className={styles["products-pointer-content"]}
                onClick={() => {
                  openItem(urls.KYC_AND_ONBOARDING);
                }}
              >
                <h2 className={styles["point-title"]}>KYC & Onboarding</h2>
                <p className={styles["point-content"]}>
                  Confirm and validate individuals or businesses by accessing
                  government-approved documents
                </p>
                <Link
                  href={urls.KYC_AND_ONBOARDING}
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
                openItem(urls.FINANCIAL_SERVICES);
              }}
            >
              <div className={styles["step-icon"]}>
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/financial-services-active.svg"
                  alt="financial-services active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/financial-services-active.svg"
                  alt="financial-services active"
                /> */}
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>Bytes</h2>
                <p className={styles["point-content"]}>
                  Pull secure data of user or entity with a single API hit
                </p>
                <Link
                  href={urls.FINANCIAL_SERVICES}
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
                openItem(urls.HYPERSTREAMS);
              }}
            >
              <div className={styles["step-icon"]}>
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/hyperstreams-active.svg"
                  alt="hyperstreams active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/hyperstreams-active.svg"
                  alt="hyperstreams active"
                /> */}
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>Hyperstreams</h2>
                <p className={styles["point-content"]}>
                  Build your Financial product using a pre-built sequence of
                  APIs and SDKs
                </p>
                <Link
                  href={urls.HYPERSTREAMS}
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
                openItem(urls.UI_STREAM);
              }}
            >
              <div className={styles["step-icon"]}>
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/ui-stream-active.svg"
                  alt="UIStreams active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/hyperstreams-active.svg"
                  alt="hyperstreams active"
                /> */}
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>UIStreams</h2>
                <p className={styles["point-content"]}>
                  Seamlessly integrate UI-based plugins for a fully-native user verification & KYC experience
                </p>
                <Link
                  href={urls.UI_STREAM}
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
        ) : (
          <div className={styles["virtual-accounts-pointers"]}>
            <div
              className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
              onClick={() => {
                openItem(urls.VIRTUAL_ACCOUNTS);
              }}
            >
              <div className={styles["step-icon"]}>
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/va-home-active.svg"
                  alt="virtual accounts active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/va-home-active.svg"
                  alt="virtual accounts active"
                /> */}
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>Multi-Collect</h2>
                <p className={styles["point-content"]}>
                  Collect funds from individuals or businesses and reconcile
                  them directly from Virtual Accounts
                </p>
                <Link
                  href={urls.VIRTUAL_ACCOUNTS}
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
                openItem(urls.UPI_COLLECTIONS);
              }}
            >
              <div className={styles["step-icon"]}>
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/upi-collect-active.svg"
                  alt="upi collect active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/upi-collect-active.svg"
                  alt="upi collect active"
                /> */}
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>UPI Payment Gateway</h2>
                <p className={styles["point-content"]}>
                  Empower your platform with the power of UPI to collect
                  payments and provide instant confirmation
                </p>
                <Link
                  href={urls.UPI_COLLECTIONS}
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
                openItem(urls.RECURRING_PAYMENTS);
              }}
            >
              <div className={styles["step-icon"]}>
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/enach-active.svg"
                  alt="enach active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/enach-active.svg"
                  alt="enach active"
                /> */}
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>Recurring Payments</h2>
                <p className={styles["point-content"]}>
                  Collect recurring payments from users without manual
                  follow-ups
                </p>
                <Link
                  href={urls.RECURRING_PAYMENTS}
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
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/payouts-active.svg"
                  alt="payouts active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/payouts-active.svg"
                  alt="payouts active"
                /> */}
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>Instant Payouts</h2>
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
                openItem(urls.ESCROW_ACCOUNTS);
              }}
            >
              <div className={styles["step-icon"]}>
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/escrow-active.svg"
                  alt="escrow accounts active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/escrow-active.svg"
                  alt="escrow accounts active"
                /> */}
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>Escrow Accounts</h2>
                <p className={styles["point-content"]}>
                  Manage All Your Escrow Needs In One Place
                </p>
                <Link
                  href={urls.ESCROW_ACCOUNTS}
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
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/ledgers-active.svg"
                  alt="ledgers active"
                  // layout="responsive"
                  width={35}
                  height={35}
                />
                {/* <img
                  className={styles["step-icon-img"]}
                  src="/images/icons/ledgers-active.svg"
                  alt="ledgers active"
                /> */}
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>Ledgers</h2>
                <p className={styles["point-content"]}>
                  Manage all your transactions and balances on a single platform
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
            {/* <div
              className={`${styles["payment-collections-content"]} ${styles["products-pointer"]} ${styles["collections-reconciliation"]}`}
              onClick={() => {
                openItem(urls.LENDING);
              }}
            >
              <div className={styles["step-icon"]}>
                <Image
                  className={styles["step-icon-img"]}
                  src="/images/icons/bnpl-active.svg"
                  alt="lending active"
                  width={35}
                  height={35}
                />
              </div>
              <div className={styles["products-pointer-content"]}>
                <h2 className={styles["point-title"]}>Lending</h2>
                <p className={styles["point-content"]}>
                  Launch your white-labelled lending product on your platform
                  today.
                </p>
                <Link
                  href={urls.LENDING}
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
                  Learn More
                  <FaChevronRight />
                </Link>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProductsMobile;
