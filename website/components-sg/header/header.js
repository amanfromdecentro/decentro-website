import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronDown } from "react-icons/fa";
import urls from "../../sgUrls";
import { motion, useAnimation } from "framer-motion";
import requests from "../../sgRequests";

function HeaderSG(props) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

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
        // document.querySelector("#dropdown-banking").classList.remove("show");
        document.querySelector("#dropdown-payments").classList.remove("show");
        // document.querySelector("#dropdown-resources").classList.remove("show");
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
    } else {
      document.getElementById("menu").classList.add("dark");
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
            <Link href="/global" id="decentroSgContext">
              <img src="/images/home/decentro-logo.svg" alt="Decentro Logo" />
            </Link>
          ) : (
            <div className="header-logo-subheader">
              <Link href="/global">
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
                } else event.currentTarget.classList.remove("active");
                document
                  .querySelector("#dropdown-company")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-payments")
                  .classList.toggle("show");
              }}
              activeclassname="active"
            >
              <span>
                Products
                <FaChevronDown />
              </span>
              <ul className="dropdown" id="dropdown-payments">
                <li>
                  <div className="product-menu-header-main">
                    <div className="product-header-image">
                      <img src="/images/icons/flow-active.svg" alt="Flow" />
                    </div>
                    <p className="product-header-description">
                      Payment Collections & Settlements
                    </p>
                  </div>
                </li>
                <li>
                  <Link href={urls.PAYMENT_COLLECTION}>
                    <div className="menu-title">
                      <img
                        className="src-img"
                        src="/images/icons/va-home-active.svg"
                        alt="Global Payment Collection"
                      />
                      Global Payment Collection
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                    <p className="menu-title-description">
                      Accept, process, settle payments globally with a scalable
                      solution
                    </p>
                  </Link>
                  <Link href={urls.INSTANT_PAYOUTS}>
                    <div className="menu-title">
                      <img
                        className="src-img"
                        src="/images/icons/payouts-active.svg"
                        alt="Payouts"
                      />
                      Global Payouts
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                    <p className="menu-title-description">
                      Disburse funds to your sellers, vendors, and partners in
                      real time
                    </p>
                  </Link>
                </li>
                <li>
                  <Link className="arrow-right" href={urls.LEDGERS}>
                    <div className="menu-title">
                      <img
                        className="src-img"
                        src="/images/icons/ledgers-active.svg"
                        alt="Ledgers"
                      />
                      Ledgers
                      <label class="badge">New</label>
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                    <p className="menu-title-description">
                      Single, unified ledger for seamless transaction management
                    </p>
                  </Link>
                  <Link href={urls.MULTI_CURRENCY_ACCOUNTS}>
                    <div className="menu-title">
                      <img
                        className="src-img"
                        src="/images/icons/multi-currency-global.svg"
                        alt="Multi Currency Accounts"
                      />
                      Multi Currency Accounts
                      <label class="badge">New</label>
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                    <p className="menu-title-description">
                      Send, spend, and convert money globally with one account
                    </p>
                  </Link>
                </li>
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
                    .getElementsByClassName("dropdown-menu")[1]
                    .classList.remove("active");
                } else event.currentTarget.classList.remove("active");
                document
                  .querySelector("#dropdown-payments")
                  .classList.remove("show");
                document
                  .querySelector("#dropdown-company")
                  .classList.toggle("show");
              }}
            >
              <span>
                Company
                <FaChevronDown />
              </span>
              <ul className="dropdown" id="dropdown-company">
                <li>
                  <Link href={urls.ABOUT}>
                    <div className="menu-title">
                      About Us
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                  </Link>
                  <Link href={urls.CUSTOMER_STORIES}>
                    <div className="menu-title">
                      Customer Stories
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                  </Link>
                  {/* <Link href={urls.RESOURCES}>
                    <div className="menu-title">
                      Resources
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                  </Link> */}
                </li>
                <li>
                  <Link href={urls.CAREER}>
                    <div className="menu-title">
                      Careers
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                  </Link>
                  <Link
                    href="https://decentro.tech/blog/global/"
                    target="_blank"
                  >
                    <div className="menu-title">
                      Blog
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={urls.PRESS}>
                    <div className="menu-title">
                      Press &amp; Buzz
                      <img
                        className="arrow-right"
                        src="/images/icons/arrow-right-full.svg"
                        alt="arrow-right"
                      />
                    </div>
                  </Link>
                  <div></div>
                </li>
              </ul>
            </li>
            {/* Developers Option  */}
            <li
              className="dropdown-menu isolated-link"
              onClick={(event) => {
                window.open("https://global.docs.decentro.tech/", "_blank");
              }}
            >
              <span
                style={{
                  color: "#0a192c",
                  // fontSize: "1.375rem",
                  // lineHeight: "28px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
                target="_blank"
              >
                Developers
              </span>
            </li>
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

HeaderSG.propTypes = {};

HeaderSG.defaultProps = {};

export default HeaderSG;
