import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronDown } from "react-icons/fa";
import urls from "../../urls";
import Image from "next/image";
import requests from "../../requests";
import { motion, useAnimation } from "framer-motion";

function Header(props) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  const offset = 100;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && lastScrollY > 700) {
        // Scrolling down
        controls.start({ y: "-100%", transition: { duration: 0 } });
      } else {
        // Scrolling up
        controls.start({ y: 0, transition: { duration: 0 } });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        document.querySelector("#dropdown-company").classList.remove("show");
        document.querySelector("#dropdown-banking").classList.remove("show");
        document.querySelector("#dropdown-payments").classList.remove("show");
        document.querySelector("#dropdown-resources").classList.remove("show");
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  let location = useRouter();
  let headerSubHeading = "";

  headerSubHeading =
    location.pathname == "/customer-stories/" ? "Customer Stories" : "";

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("menu").classList.remove("dark");
      if (JSON.parse(sessionStorage.getItem("visited")))
        document.getElementById("header").classList.remove("with-banner");
      else document.getElementById("header").classList.add("with-banner");
    } else {
      document.getElementById("menu").classList.add("dark");
      document.getElementById("header").classList.remove("with-banner");
    }
  }, [location]);

  useEffect(() => {
    if (!menuOpen) {
      document
        .getElementsByClassName("dropdown-menu")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("dropdown-menu")[1]
        .classList.remove("active");
      document
        .getElementsByClassName("dropdown-menu")[2]
        .classList.remove("active");
      document
        .getElementsByClassName("dropdown-menu")[3]
        .classList.remove("active");
    }
  }, [menuOpen]);

  // On the first fold (fresh load) white bg behind the top nav shouldn't be visible.
  // On scroll from the first fold, the white bg behind the top-nav should appear.
  // On continuous scroll after the first fold, top-nav should slide out of the screen and disappear until user scrolls back up (like the usual experience)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    transition: "background-color 0.3s",
    backgroundColor: isScrolled ? "white" : "transparent",
  };

  return (
    <motion.header
      id="header"
      className={router.asPath.includes("/help/faqs") ? "fixed-header" : null}
      initial={{ y: 0 }}
      animate={controls}
    >
      <div className="menu-full" ref={menuRef} style={navStyle}>
        <div className="left">
          {headerSubHeading == "" ? (
            <Link href="/" id="decentroIndiaContext">
              <Image
                src="/images/home/decentro-logo.svg"
                alt="Decentro Logo"
                width={250}
                height={48}
                layout="responsive"
              />
              {/* <img src="/images/home/decentro-logo.svg" alt="Decentro Logo" /> */}
            </Link>
          ) : (
            <div className="header-logo-subheader">
              <Link href="/">
                <img src="/images/home/decentro-logo.svg" alt="Decentro Logo" />
              </Link>
            </div>
          )}
        </div>
        <div className="right">
          <ul id="menu">
            <li
              className="dropdown-menu"
              onClick={(event) => {
                setMenuOpen(true);
                event.stopPropagation();
                if (!event.currentTarget.classList.contains("active")) {
                  event.currentTarget.classList.add("active");
                  document
                    .getElementsByClassName("dropdown-menu")[1]
                    .classList.remove("active");
                  document
                    .getElementsByClassName("dropdown-menu")[2]
                    .classList.remove("active");
                  document
                    .getElementsByClassName("dropdown-menu")[3]
                    .classList.remove("active");
                } else event.currentTarget.classList.remove("active");
                document
                  .querySelector("#dropdown-company")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-banking")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-payments")
                  .classList.toggle("show");
                document
                  .querySelector("#dropdown-resources")
                  .classList.remove("show");
              }}
              activeclassname="active"
            >
              <span>
                Payments
                <FaChevronDown />
              </span>
              <ul
                className="dropdown left-aligned-dropdown"
                id="dropdown-payments"
              >
                <li>
                  <div className="product-menu-header-main">
                    <div className="product-header-image">
                      <Image
                        src="/images/icons/flow-active.svg"
                        alt="Flow"
                        width={130}
                        height={40}
                      />
                      {/* <img src="/images/icons/flow-active.svg" alt="Flow" /> */}
                    </div>
                    <p className="product-header-description">
                      Payment Collections & Settlements
                    </p>
                  </div>
                </li>
                <li>
                  <Link href={urls.VIRTUAL_ACCOUNTS}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/va-home-active.svg"
                        alt="Virtual Accounts"
                        width={20}
                        height={20}
                      />
                      Multi-Collect
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>

                    <p className="menu-title-description">
                      Collect and reconcile funds via virtual accounts
                    </p>
                  </Link>
                  <Link href={urls.UPI_COLLECTIONS}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/upi-collect-active.svg"
                        alt="UPI Payment Gateway"
                        width={20}
                        height={20}
                      />
                      UPI Payment Gateway
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                    <p className="menu-title-description">
                      Accepting payments made simpler for your website/app
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href={urls.RECURRING_PAYMENTS}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/recurring-payments-active.svg"
                        alt="recurring payments"
                        width={20}
                        height={20}
                      />
                      Recurring Payments
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                    <p className="menu-title-description">
                      Collect recurring subscription payments easily
                    </p>
                  </Link>
                  <Link href={urls.INSTANT_PAYOUTS}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/payouts-active.svg"
                        alt="Payouts"
                        width={20}
                        height={20}
                      />
                      Instant Payouts
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                    <p className="menu-title-description">
                      24x7 instant, automated payouts to any bank account/UPI ID
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href={urls.ESCROW_ACCOUNTS}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/escrow-active.svg"
                        alt="Virtual Accounts"
                        width={20}
                        height={20}
                      />
                      Escrow Accounts
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                    <p className="menu-title-description">
                      All in one escrow accounts for businesses
                    </p>
                  </Link>

                  <Link className="arrow-right" href={`${urls.LEDGERS}`}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/ledgers-active.svg"
                        alt="Ledgers"
                        width={20}
                        height={20}
                      />
                      Ledgers
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                    <p className="menu-title-description">
                      Single, unified ledger for seamless transaction management
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href={urls.SETTLR}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/split-settlements/settlr-icon.svg"
                        alt="Virtual Accounts"
                        width={20}
                        height={20}
                      />
                      Settlr
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                    <p className="menu-title-description">
                      Collect & split settlements for incoming funds
                    </p>
                  </Link>
                </li>
                {/* <li>
                  <Link href={urls.LENDING}>
                    <Image
                      className="src-img"
                      src="/images/icons/bnpl-active.svg"
                      alt="Lending"
                      width={20}
                      height={20}
                    />
                    Lending
                    <label class="badge">New</label>
                    <Image
                      className="arrow-right"
                      src="/images/icons/arrow-right-full.svg"
                      alt="arrow-right"
                      width={20}
                      height={14}
                    />
                  </Link>
                </li> */}
              </ul>
            </li>

            <li
              className="dropdown-menu"
              onClick={(event) => {
                setMenuOpen(true);
                event.stopPropagation();
                if (!event.currentTarget.classList.contains("active")) {
                  event.currentTarget.classList.add("active");
                  document
                    .getElementsByClassName("dropdown-menu")[0]
                    .classList.remove("active");
                  document
                    .getElementsByClassName("dropdown-menu")[2]
                    .classList.remove("active");
                  document
                    .getElementsByClassName("dropdown-menu")[3]
                    .classList.remove("active");
                } else event.currentTarget.classList.remove("active");
                document
                  .querySelector("#dropdown-company")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-payments")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-banking")
                  .classList.toggle("show");
                document
                  .querySelector("#dropdown-resources")
                  .classList.remove("show");
              }}
            >
              <span>
                Banking
                <FaChevronDown />
              </span>
              <ul
                className="dropdown left-aligned-dropdown"
                id="dropdown-banking"
              >
                <li>
                  <div className="product-menu-header-main">
                    <div className="product-header-image">
                      <Image
                        src="/images/icons/fabric-active.svg"
                        alt="Fabric"
                        width={130}
                        height={35}
                      />
                      {/* <img src="/images/icons/fabric-active.svg" alt="Fabric" /> */}
                    </div>
                    <p className="product-header-description">
                      Banking-as-a-Service Platform
                    </p>
                  </div>
                </li>
                <li>
                  <Link href={urls.KYC_AND_ONBOARDING}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/kyc-active.svg"
                        alt="Kyc & Onboarding"
                        width={20}
                        height={20}
                      />
                      KYC & Onboarding
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                    <p className="menu-title-description">
                      Automated KYC onboarding for customers
                    </p>
                  </Link>

                  <Link href={urls.HYPERSTREAMS}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/hyperstreams-active.svg"
                        alt="Hyperstreams"
                        width={20}
                        height={20}
                      />
                      Hyperstreams
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                    <p className="menu-title-description">
                      Fastest Identity Verification Experience Ever
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href={urls.FINANCIAL_SERVICES}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/financial-services-active.svg"
                        alt="Financial Services"
                        width={20}
                        height={20}
                      />
                      {/* <img
                      className="src-img"
                      src="/images/icons/financial-services-active.svg"
                      alt="Financial Services"
                    /> */}
                      Bytes
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                      {/* <img
                      className="arrow-right"
                      src="/images/icons/arrow-right-full.svg"
                      alt="arrow-right"
                    /> */}
                    </div>
                    <p className="menu-title-description">
                      Pulling customer financial data, made simple
                    </p>
                  </Link>
                  <Link href={urls.UI_STREAM}>
                    <div className="menu-title">
                      <Image
                        className="src-img"
                        src="/images/icons/ui-stream-active.svg"
                        alt="UIStreams"
                        width={20}
                        height={20}
                      />
                      UIStreams
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                    <p className="menu-title-description">
                      Build a fully-native user verification & KYC experience
                    </p>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Resource Page Headers Here */}
            <li
              className="dropdown-menu"
              onClick={(event) => {
                setMenuOpen(true);
                event.stopPropagation();
                if (!event.currentTarget.classList.contains("active")) {
                  event.currentTarget.classList.add("active");
                  document
                    .getElementsByClassName("dropdown-menu")[0]
                    .classList.remove("active");
                  document
                    .getElementsByClassName("dropdown-menu")[1]
                    .classList.remove("active");
                  document
                    .getElementsByClassName("dropdown-menu")[3]
                    .classList.remove("active");
                } else event.currentTarget.classList.remove("active");
                document
                  .querySelector("#dropdown-payments")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-banking")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-company")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-resources")
                  .classList.toggle("show");
              }}
            >
              <span>
                Resources
                <FaChevronDown />
              </span>
              <ul className="dropdown" id="dropdown-resources">
                <li>
                  <Link href={urls.RESOURCES_VENDOR_ONBOARDING}>
                    <div className="menu-title">
                      <div className="badge-container">
                        <div>Vendor Onboarding</div>
                        <label class="badge">New</label>
                      </div>
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href={urls.RESOURCES_PREFILL_APIS}>
                    <div className="menu-title">
                      <div className="badge-container">
                        <div>Prefill APIs</div>
                        <label class="badge">New</label>
                      </div>
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={urls.RESOURCES_MSME_VERIFICATION}>
                    <div className="menu-title">
                      <div className="badge-container">
                        <div>MSME Verification</div>
                        <label class="badge">New</label>
                      </div>
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href={urls.RESOURCES_BBPS}>
                    <div className="menu-title">
                      <div className="badge-container">
                        <div>BBPS APIs</div>
                      </div>
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={urls.RESOURCES_PROFESSIONAL_VERIFICATION}>
                    <div className="menu-title">
                      <div className="badge-container">
                        <div>Professional Verification</div>
                      </div>
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href={urls.RESOURCES_PENNY_DROP_VERIFICATION}>
                    <div className="menu-title">
                      <div className="badge-container">
                        <div>Penny Drop Verification</div>
                      </div>

                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/upi-apis/">
                    <div className="menu-title">
                      UPI APIs
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href="/resources/upi-autopay-apis/">
                    <div className="menu-title">
                      UPI Autopay
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/credit-bureau-api/">
                    <div className="menu-title">
                      Credit Bureau API
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href="/resources/bulk-payouts">
                    <div className="menu-title">
                      Bulk Payouts
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="view-all-resources-container">
                    <Link href="/resources">
                      <div className="menu-title">
                        View All
                        <Image
                          className="arrow-right"
                          src="/images/icons/arrow-right-full.svg"
                          alt="arrow-right"
                          width={20}
                          height={14}
                        />
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            {/* Resource Section Ends */}

            <li
              className="dropdown-menu"
              onClick={(event) => {
                setMenuOpen(true);
                event.stopPropagation();
                if (!event.currentTarget.classList.contains("active")) {
                  event.currentTarget.classList.add("active");
                  document
                    .getElementsByClassName("dropdown-menu")[0]
                    .classList.remove("active");
                  document
                    .getElementsByClassName("dropdown-menu")[1]
                    .classList.remove("active");
                  document
                    .getElementsByClassName("dropdown-menu")[2]
                    .classList.remove("active");
                } else event.currentTarget.classList.remove("active");
                document
                  .querySelector("#dropdown-payments")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-banking")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-company")
                  .classList.toggle("show");
                document
                  .querySelector("#dropdown-resources")
                  .classList.remove("show");
              }}
            >
              <span>
                Company
                <FaChevronDown />
              </span>
              <ul className="dropdown" id="dropdown-company">
                <li>
                  <Link href="/about/">
                    <div className="menu-title">
                      About Us
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href="/why-decentro/">
                    <div className="menu-title">
                      Why Decentro
                      <label class="badge">New</label>
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href={urls.PARTNERS}>
                    <div className="menu-title">
                      Partners
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href="/customer-stories/">
                    <div className="menu-title">
                      Customer Stories
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="https://decentro.tech/blog/" target="_blank">
                    <div className="menu-title">
                      Blog
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href="/press-buzz/">
                    <div className="menu-title">
                      Press &amp; Buzz
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/careers/">
                    <div className="menu-title">
                      Careers
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href="/compliance/">
                    <div className="menu-title">
                      Compliance
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={urls.PAYMENT_AGGREGATOR}>
                    <div className="menu-title">
                      Payment Aggregator
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href={urls.FOUNDERS_FORGE}>
                    <div className="menu-title">
                      Founders&apos; Forge
                      <Image
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                        width={20}
                        height={14}
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Developers Option  */}
            <li
              className="dropdown-menu isolated-link signup-header secondary-prv-btn"
              onClick={(event) => {
                window.open(requests.SIGNUP, "_blank");
              }}
            >
              Sign Up
              {/* Span added for animation purposes */}
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </motion.header>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
