import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import urls from "../../urls";
import { Sidebar } from "primereact/sidebar";
import Image from "next/image";

function HeaderMobile() {
  const [visible, setVisible] = useState(false);
  const [visibleResources, setVisibleResources] = useState(false);
  const [visibleCompany, setVisibleCompany] = useState(false);
  let location = useRouter();
  let headerSubHeading = "";

  // const bannerUpdate = () => {
  //   if (JSON.parse(sessionStorage.getItem("visited"))) {
  //     document.getElementsByClassName("banner-announcements")[0].style.display =
  //       "none";
  //     if (
  //       document.getElementById("header") &&
  //       document.getElementById("header").classList.contains("with-banner")
  //     ) {
  //       document.getElementById("header").classList.remove("with-banner");
  //       document.getElementById("header").style.padding = "0px !important";
  //     }
  //     if (
  //       document.getElementsByClassName("banner")[0] &&
  //       document
  //         .getElementsByClassName("banner")[0]
  //         .classList.contains("with-banner")
  //     ) {
  //       document
  //         .getElementsByClassName("banner")[0]
  //         .classList.remove("with-banner");
  //     }
  //   } else {
  //     document.getElementsByClassName("banner-announcements")[0].style.display =
  //       "flex";
  //     if (
  //       document.getElementById("header") &&
  //       !document.getElementById("header").classList.contains("with-banner")
  //     ) {
  //       document.getElementById("header").classList.add("with-banner");
  //     }
  //     if (
  //       document.getElementsByClassName("banner")[0] &&
  //       !document
  //         .getElementsByClassName("banner")[0]
  //         .classList.contains("with-banner")
  //     ) {
  //       document
  //         .getElementsByClassName("banner")[0]
  //         .classList.add("with-banner");
  //     }
  //   }
  // };

  headerSubHeading =
    location.pathname == "/customer-stories/" ? "Customer Stories" : "";
  const handleClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (visible == true || visibleResources == true || visibleCompany == true) {
      document.getElementsByTagName("body")[0].classList.add("stop-scroll");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("stop-scroll");
    }
  }, [visible, visibleResources, visibleCompany]);

  const [menuBanner, setMenuBanner] = useState(false);

  return (
    <div>
      <div className="dropdown-overlay"></div>
      <header id="header">
        <div className="menu-mobile">
          <div className="head">
            {headerSubHeading == "" ? (
              <Link href="/">
                {/* <img src="/images/home/decentro-logo.svg" alt="Decentro Logo" /> */}
                <Image
                  className="decentro-mobile-logo"
                  src="/images/home/decentro-logo.svg"
                  alt="Decentro Logo"
                  width={50}
                  height={20}
                  layout="responsive"
                />
              </Link>
            ) : (
              <div className="header-logo-subheader">
                <Link href="/">
                  <img
                    src="/images/home/decentro-logo.svg"
                    alt="Decentro Logo"
                  />
                </Link>
                <p>{headerSubHeading}</p>
              </div>
            )}
            {/* To be uncommented when menu items are available */}
            <Link
              className="header-signup"
              href="/signup"
              style={{
                marginLeft: "auto",
                marginRight: "0",
              }}
            >
              Sign Up
            </Link>
            <div
              className="mobile-menu-button"
              style={{
                zIndex: "100",
              }}
              onClick={() => {
                // bannerClose();
                if (visible) {
                  setVisibleResources(false);
                  setVisibleCompany(false);
                  setVisible(false);
                } else {
                  setVisible(!visible);
                }
              }}
            >
              {visible ? (
                <FontAwesomeIcon icon={faTimes} width={18} />
              ) : (
                <FontAwesomeIcon icon={faBars} width={18} />
              )}
            </div>
          </div>

          <div className="sidebar-container">
            {/* To be uncommented when menu items are available */}
            <Sidebar
              blockScroll={true}
              visible={visible}
              position="right"
              onHide={() => setVisible(false)}
              className="sidebar-mobile-menu"
              style={{
                // marginTop: menuBanner == true ? "120px" : "120px",
                width: "80%",
                padding: "25px",
                background: "#FFFFFF",
                height: "100%",
                paddingTop: "18px",
              }}
              maskClassName="mask-sidebar-overlay"
            >
              <div className="menu-wrap">
                <span>Payments</span>
                <ul className="dropdown">
                  <li>
                    <Link
                      onClick={() => setVisible(!visible)}
                      href={urls.VIRTUAL_ACCOUNTS}
                    >
                      <img
                        src="/images/icons/va-home-active.svg"
                        alt="Virtual Accounts"
                      />
                      Multi-Collect
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                    <Link
                      href={urls.UPI_COLLECTIONS}
                      onClick={() => setVisible(!visible)}
                    >
                      <img
                        src="/images/icons/menu/upi-collect-menu.svg"
                        alt="UPI Payment Gateway"
                      />
                      UPI Payment Gateway
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={urls.RECURRING_PAYMENTS}
                      onClick={() => setVisible(!visible)}
                    >
                      <img
                        src="/images/icons/recurring-payments-active.svg"
                        alt="Recurring Payments"
                      />
                      Recurring Payments
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                    <Link
                      href={urls.INSTANT_PAYOUTS}
                      onClick={() => setVisible(!visible)}
                    >
                      <img
                        src="/images/icons/menu/payout-menu.svg"
                        alt="Payouts"
                      />
                      Instant Payouts
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={urls.ESCROW_ACCOUNTS}
                      onClick={() => setVisible(!visible)}
                    >
                      <img
                        className="src-img"
                        src="/images/icons/escrow-active.svg"
                        alt="Virtual Accounts"
                      />
                      Escrow Accounts
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                    <Link
                      href={urls.LEDGERS}
                      onClick={() => setVisible(!visible)}
                    >
                      <img
                        src="/images/icons/ledgers-active.svg"
                        alt="Ledgers"
                      />
                      Ledgers
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                    <Link
                      href={urls.SETTLR}
                      onClick={() => setVisible(!visible)}
                    >
                      <img
                        src="/images/split-settlements/settlr-icon.svg"
                        alt="Ledgers"
                      />
                      Settlr
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href={urls.LENDING}
                      onClick={() => setVisible(!visible)}
                    >
                      <img src="/images/icons/bnpl-active.svg" alt="Lending" />
                      Lending
                      <label class="badge">New</label>
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="menu-wrap">
                <span>Banking</span>
                <ul className="dropdown show" id="dropdown-banking">
                  <li>
                    <Link
                      href={urls.KYC_AND_ONBOARDING}
                      onClick={() => setVisible(!visible)}
                    >
                      <img
                        src="/images/icons/kyc-active.svg"
                        alt="KYC & Onboarding"
                      />
                      KYC & Onboarding
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={urls.FINANCIAL_SERVICES}
                      onClick={() => setVisible(!visible)}
                    >
                      <img
                        src="/images/icons/financial-services-active.svg"
                        alt="Credit Bureau"
                      />
                      Bytes
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                    <Link
                      href={urls.HYPERSTREAMS}
                      onClick={() => setVisible(!visible)}
                    >
                      <img
                        src="/images/icons/hyperstreams-active.svg"
                        alt="Hyperstreams"
                      />
                      Hyperstreams
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                    <Link
                      href={urls.UI_STREAM}
                      onClick={() => setVisible(!visible)}
                    >
                      <Image
                        className="src-img"
                        src="/images/icons/ui-stream-active.svg"
                        alt="UIStreams"
                        width={20}
                        height={20}
                      />
                      UIStreams
                      <img
                        src="/images/menu-right.svg"
                        className="menu-right"
                        alt="Menu Right"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-wrap hierarchy-menu">
                <div className="extended-menu-content">
                  <div
                    onClick={() => {
                      setVisibleResources(!visibleResources);
                    }}
                  >
                    <span>Resources</span>
                    <img
                      src="/images/menu-right.svg"
                      className="menu-right"
                      alt="Menu Right"
                    />
                  </div>

                  <Sidebar
                    blockScroll={true}
                    visible={visibleResources}
                    position="right"
                    onHide={() => setVisibleResources(false)}
                    className="sidebar-mobile-menu"
                    style={{
                      // marginTop: menuBanner == true ? "120px" : "120px",
                      width: "80%",
                      padding: "25px",
                      background: "#FFFFFF",
                      height: "100%",
                      paddingTop: "18px",
                    }}
                    showCloseIcon={false}
                  >
                    <div className="menu-wrap  hierarchy-menu">
                      <div className="back-button-menu">
                        <img
                          src="/images/menu-right.svg"
                          className="menu-right"
                          alt="Menu Right"
                          style={{
                            transform: "rotate(180deg)",
                          }}
                        />
                        <button onClick={() => setVisibleResources(false)}>
                          Back
                        </button>
                      </div>
                      <ul className="dropdown" id="dropdown-resources">
                        <li>
                          <Link
                            href={urls.RESOURCES_VENDOR_ONBOARDING}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Vendor Onboarding
                            <label class="badge">New</label>
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={urls.RESOURCES_MSME_VERIFICATION}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            MSME Verification
                            <label class="badge">New</label>
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={urls.RESOURCES_BBPS}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            BBPS APIs
                            <label class="badge">New</label>
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                          <Link
                            href={urls.RESOURCES_PROFESSIONAL_VERIFICATION}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Professional Verification
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={urls.RESOURCES_PENNY_DROP_VERIFICATION}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Penny Drop Verification
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                          {/* <Link
                            href={urls.RESOURCES_MOBILE_TO_VPA}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Mobile to VPA APIs
                            <label class="badge">New</label>
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link> */}
                        </li>
                        {/* <li>
                          <Link
                            href="/resources/phone-number-intelligence"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Phone Number Intelligence
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li> */}

                        <li>
                          <Link
                            href="/resources/upi-apis/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            UPI APIs
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/upi-autopay-apis/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            UPI Autopay
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/credit-bureau-api/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Credit Bureau API
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/bulk-payouts"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Bulk Payouts
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/bank-account-validation-api/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Bank Account Validation
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/pan-verification-api/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            PAN Verification
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <div className="view-all-resources-container-mobile">
                            <Link
                              href="/resources"
                              onClick={() => {
                                setVisible(false);
                                setVisibleResources(false);
                                setVisibleCompany(false);
                              }}
                            >
                              View All
                              <img
                                src="/images/menu-right.svg"
                                className="menu-right"
                                alt="Menu Right"
                              />
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Sidebar>
                </div>
              </div>
              <div className="menu-wrap  hierarchy-menu">
                <div className="extended-menu-content">
                  <div
                    onClick={() => {
                      setVisibleCompany(!visibleCompany);
                    }}
                  >
                    <span>Company</span>
                    <img
                      src="/images/menu-right.svg"
                      className="menu-right"
                      alt="Menu Right"
                    />
                  </div>

                  <Sidebar
                    blockScroll={true}
                    visible={visibleCompany}
                    position="right"
                    onHide={() => setVisibleCompany(false)}
                    className="sidebar-mobile-menu"
                    style={{
                      // marginTop: menuBanner == true ? "120px" : "120px",
                      width: "80%",
                      padding: "25px",
                      background: "#FFFFFF",
                      height: "100%",
                      paddingTop: "18px",
                    }}
                    showCloseIcon={false}
                  >
                    <div className="menu-wrap">
                      <div className="back-button-menu">
                        <img
                          src="/images/menu-right.svg"
                          className="menu-right"
                          alt="Menu Right"
                          style={{
                            transform: "rotate(180deg)",
                          }}
                        />
                        <button onClick={() => setVisibleCompany(false)}>
                          Back
                        </button>
                      </div>

                      <ul className="dropdown" id="dropdown-company">
                        <li>
                          <Link
                            href="/about/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            About Us
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/careers/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Careers
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://decentro.tech/blog/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Blog
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/press-buzz/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Press &amp; Buzz
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/customer-stories/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Customer Stories
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/compliance/"
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Compliance
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={urls.PARTNERS}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Partner Program
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={urls.FOUNDERS_FORGE}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Founders&apos; Forge
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={urls.WHY_DECENTRO}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Why Decentro
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={urls.PAYMENT_AGGREGATOR}
                            onClick={() => {
                              setVisible(false);
                              setVisibleResources(false);
                              setVisibleCompany(false);
                            }}
                          >
                            Payment Aggregator
                            <img
                              src="/images/menu-right.svg"
                              className="menu-right"
                              alt="Menu Right"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Sidebar>
                </div>
              </div>
              <div className="menu-wrap hierarchy-menu">
                <div className="extended-menu-content">
                  <div
                    onClick={(event) => {
                      setVisible(false);
                      setVisibleResources(false);
                      setVisibleCompany(false);
                      window.open("https://docs.decentro.tech/", "_blank");
                    }}
                  >
                    <span>Developers</span>
                    <img
                      src="/images/menu-right.svg"
                      className="menu-right"
                      alt="Menu Right"
                    />
                  </div>
                </div>
              </div>
            </Sidebar>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderMobile;
