import React, { useState } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import styles from "../../styles/components-styles/our-products/our-products.module.scss";
import urls from "../../urls";
import Image from "next/image";

const OurProducts = () => {
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
              styles[`${flowActive}`]
            }
            onClick={(event) => {
              handleProductClick(event, "flow", "product-header-left");
            }}
          >
            <div className={styles["product-header-image"]}>
              {currentProductDisplay === "flow" ? (
                // <img
                //   src="/images/icons/flow-active.svg"
                //   className={styles["current-product active"]}
                //   alt="flow active"
                // />
                <Image
                  src="/images/icons/flow-active.svg"
                  className={styles["current-product active"]}
                  alt="flow active"
                  // layout="responsive"
                  width={111}
                  height={36}
                />
              ) : (
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
            <p className={styles["tagline"] + " " + styles[`${flowActive}`]}>
              White-label payments infrastructure
            </p>
          </div>
          <div
            className={
              styles["product-header"] +
              " " +
              styles["product-header-right"] +
              " " +
              styles[`${fabricActive}`]
            }
            onClick={(event) => {
              handleProductClick(event, "fabric", "product-header-right");
            }}
          >
            <div className={styles["product-header-image"]}>
              {currentProductDisplay === "fabric" ? (
                <Image
                  src="/images/icons/fabric-active.svg"
                  className={styles["current-product active"]}
                  alt="fabric active"
                  // layout="responsive"
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
                  // layout="responsive"
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
            <p
              className={`${styles["tagline"]} ${styles[`${fabricActive}`]} ${styles["tagline-left"]
                }`}
            >
              Banking-as-a-Service Platform
            </p>
          </div>
        </div>
        {currentProductDisplay === "flow" ? (
          <div className={styles["products-content"]}>
            <div className={styles["product-grid"]}>
              <div
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.VIRTUAL_ACCOUNTS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/va-home-active.svg"
                        alt="virtual accounts active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/va-home-active.svg"
                        alt="virtual accounts active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>Multi-Collect</p>
                  </div>
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
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.UPI_COLLECTIONS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/upi-collect-active.svg"
                        alt="upi collect active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/upi-collect-active.svg"
                        alt="upi collect active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>UPI Payment Gateway</p>
                  </div>
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
            </div>

            <div className={styles["product-grid"]}>
              <div
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.RECURRING_PAYMENTS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/recurring-payments-active.svg"
                        alt="recurring payments active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/recurring-payments-active.svg"
                        alt="recurring payments active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>Recurring Payments</p>
                  </div>
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
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.INSTANT_PAYOUTS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/payouts-active.svg"
                        alt="payouts active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/payouts-active.svg"
                        alt="payouts active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>Instant Payouts</p>
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
                  openItem(urls.ESCROW_ACCOUNTS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/escrow-active.svg"
                        alt="escrow accounts active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/escrow-active.svg"
                        alt="escrow accounts active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>Escrow Accounts</p>
                  </div>
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
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.LEDGERS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/ledgers-active.svg"
                        alt="ledgers active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/ledgers-active.svg"
                        alt="ledgers active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>Ledgers</p>
                  </div>
                  <p className={styles["point-content"]}>
                    Manage all your transactions and balances on a single
                    platform
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
            </div>

            <div className={styles["product-grid"]}>
              <div
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.SETTLR);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/split-settlements/settlr-icon.svg"
                        alt="lending active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                    </div>
                    <p className={styles["point-title"]}>Settlr</p>
                  </div>
                  <p className={styles["point-content"]}>
                    Collect payments digitally, and seamlessly handle split payments to vendors, partners, and individual bank accounts.
                  </p>
                  <Link
                    href={urls.SETTLR}
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
          <div className={styles["products-content"]}>
            <div className={styles["product-grid"]}>
              <div
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.KYC_AND_ONBOARDING);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/kyc-active.svg"
                        alt="kyc active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/kyc-active.svg"
                        alt="kyc active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>KYC & Onboarding</p>
                  </div>
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
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.FINANCIAL_SERVICES);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/financial-services-active.svg"
                        alt="financial services active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/financial-services-active.svg"
                        alt="financial services active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>Bytes</p>
                  </div>
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
            </div>

            <div className={styles["product-grid"]}>
              <div
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.HYPERSTREAMS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/hyperstreams-active.svg"
                        alt="hyperstreams active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/hyperstreams-active.svg"
                        alt="hyperstreams active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>Hyperstreams</p>
                  </div>
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
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
                onClick={() => {
                  openItem(urls.UI_STREAM);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <Image
                        className={styles["step-icon-img"]}
                        src="/images/icons/ui-stream-active.svg"
                        alt="UIStreams active icon"
                        // layout="responsive"
                        width={35}
                        height={35}
                      />
                      {/* <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/hyperstreams-active.svg"
                        alt="hyperstreams active icon"
                      /> */}
                    </div>
                    <p className={styles["point-title"]}>UIStreams</p>
                  </div>
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
              {/* <div
                className={`${styles["virtual-accounts-content"]} ${styles["products-pointer"]} ${styles["open-va"]}`}
              
                onClick={() => {
                  openItem(urls.ESCROW_ACCOUNTS);
                }}
              >
                <div className={styles["products-pointer-content"]}>
                  <div className={styles["heading-section"]}>
                    <div className={styles["step-icon"]}>
                      <img
                        className={styles["step-icon-img"]}
                        src="/images/icons/va-home-active.svg"
                        alt="escrow accounts active icon"
                      />
                    </div>
                    <p className={styles["point-title"]}>Escrow Accounts</p>
                  </div>
                  <p className={styles["point-content"]}>
                    Manage All Your Escrow Needs In One Place
                  </p>
                  <Link href={urls.ESCROW_ACCOUNTS}>
                    Learn More
                    <FaChevronRight />
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>

      {/* Completed here  */}
    </div>
  );
};

export default OurProducts;
