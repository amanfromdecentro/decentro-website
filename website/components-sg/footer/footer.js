import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  FaAngellist,
  FaProductHunt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import urls from "../../sgUrls";
import utmtags from "../../sgUtmTags";
import SubscribeInput from "../../components-sg/subscribe-input/subscribe-input";
import Image from "next/image";

const FooterSG = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const currentURL = router.asPath;
    if (currentURL.includes("global".toLowerCase())) {
      setCurrentCountry("GLOBAL");
    } else {
      setCurrentCountry("INDIA");
    }
  }, [router]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChangeCountry = (country) => {
    const url =
      country === "INDIA"
        ? "https://www.decentro.tech"
        : "https://decentro.tech/global";
    window.open(url, "_blank");
    setIsDropdownOpen(false);
  };
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-left-section res-footer-items">
          <div className="footer-logo">
            <Link href="/global">
              <Image
                className="decentro-d"
                src="/images/icons/decentro-black-logo.svg"
                alt="decentro-black"
                width={250}
                height={48}
              />
            </Link>
            <div className="backing-and-certificate">
              <div className="iso-seals">
                <Image
                  className="iso-certificate"
                  src="/images/footer/iso-cert.svg"
                  alt="iso-certificate"
                  width={60}
                  height={60}
                />
                <img
                  className="pa-license"
                  src="/images/footer/pa-license.svg"
                  alt="pa-license"
                />
              </div>
              <Image
                className="sfa"
                src="/images/footer/sfa_corporate.svg"
                alt="sfa"
                width={100}
                height={60}
              />
              <p>
                BACKED BY{" "}
                <Image
                  src="/images/footer/yc-logo.svg"
                  alt="y-combinator"
                  width={150}
                  height={30}
                />
              </p>
            </div>
          </div>
          <div className="footer-text">
            <div>
              Decentro is a one-stop platform to help solve your payment
              collections, payouts & reconciliation related challenges. We
              provide you with simplified tools & APIs to collect payments, make
              payouts & manage your entire back office.
            </div>
            <br />
            <div>
              With 40+ payout currencies, and 12+ collection currencies
              supported across the globe already, along with end to end ledger
              based reconciliation, you won't need to integrate with anyone else
              ever.
            </div>
            <br />
            <div>Built from India, for the world.</div>
          </div>
        </div>
        {/* <div className="footer-right-section"> */}
        <div className="footer-links w-25">
          {/* <Link href="/products/" className="mt-0"> */}
          <div className="footer-header-container mb-10">
            <h3 className="mb-0">Products</h3>
            <img src="/images/icons/back.svg" className="rotate-90" />
          </div>
          {/* </Link> */}
          <Link href={urls.MULTI_CURRENCY_ACCOUNTS}>
            <div>Multi Currency Accounts</div>
            <label className="badge">New</label>
          </Link>
          <Link href={urls.PAYMENT_COLLECTION}>Global Payment Collection</Link>
          <Link href={urls.INSTANT_PAYOUTS}>Global Payouts</Link>
          <Link href={urls.LEDGERS}>
            Ledgers
            <label className="badge">New</label>
          </Link>
        </div>

        <div className="footer-links w-25">
          {/* <Link href="/products/" className="mt-0"> */}
          <div className="footer-header-container mb-10 c-pointer">
            <h3 className="mb-0">Company</h3>
            <img src="/images/icons/back.svg" className="rotate-90" />
          </div>
          {/* </Link> */}
          <Link href={urls.ABOUT}>About Us</Link>
          <Link href={urls.CAREER}>Careers</Link>
          <Link href="https://decentro.tech/blog/global/">Blog</Link>
          <Link href={urls.PRESS}>Press & Buzz</Link>
          <Link href={urls.CUSTOMER_STORIES}>Customer Stories</Link>
        </div>

        <div className="footer-links w-25">
          {/* <Link href="/products/" className="mt-0"> */}
          <div className="footer-header-container mb-10 c-pointer">
            <h3 className="mb-0">Quick Links</h3>
            <img src="/images/icons/back.svg" className="rotate-90" />
          </div>
          {/* </Link> */}
          <Link href={"https://global.docs.decentro.tech/"} target="_blank">
            Developers
          </Link>
          <Link href={urls.TERMS}>Terms & Conditions</Link>
          <Link href={urls.PRIVACY}>Privacy Policy</Link>
          <Link href={urls.GRIEVANCE}>Grievances</Link>
          <Link href={urls.AGREEMENT}>Master Services Agreement</Link>
        </div>
        {/* </div> */}
      </div>
      <hr />
      <div className="footer-mid-section">
        <div className="country-dropdown-sg" ref={dropdownRef}>
          <div className="current-country" onClick={toggleDropdown}>
            <Image
              src="/images/footer/global.svg"
              alt="Global"
              width={15}
              height={15}
            />
            <span>{currentCountry}</span>
            <Image
              className="dropdown-icon"
              src="/images/footer/dropdown-icon.svg"
              alt="dropdown"
              width={12}
              height={7}
            />
          </div>
          {isDropdownOpen && (
            <ul className="country-options">
              {currentCountry !== "INDIA" && (
                <div>
                  <Image
                    src="/images/footer/india-flag.svg"
                    alt="India"
                    width={15}
                    height={15}
                  />
                  <li onClick={() => handleChangeCountry("INDIA")}>INDIA</li>
                </div>
              )}
              {currentCountry !== "GLOBAL" && (
                <div>
                  <Image
                    src="/images/footer/global.svg"
                    alt="Global"
                    width={15}
                    height={15}
                  />
                  <li onClick={() => handleChangeCountry("GLOBAL")}>GLOBAL</li>
                </div>
              )}
            </ul>
          )}
        </div>
        <div>
          <div className="social-links-section">
            <div>
              <a
                href="https://wellfound.com/company/decentro"
                target="_blank"
                aria-label="angel list"
                className="wellfound-logo-link"
              >
                {/* <FaAngellist /> */}
                <img src="/images/wellfound-black.svg" alt="wellfound" />
              </a>

              <a
                href="https://x.com/DecentroTech"
                target="_blank"
                aria-label="twitter"
              >
                <img src="/images/twitterx.svg" alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/decentro/"
                target="_blank"
                aria-label="linkedin"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.youtube.com/channel/UCpgo1uTF8sByehHfjIqDhYA"
                target="_blank"
                aria-label="youtube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.producthunt.com/products/decentro"
                target="_blank"
                aria-label="Product Hunt"
              >
                <FaProductHunt />
              </a>
            </div>
          </div>
          <Link
            href="https://www.producthunt.com/products/decentro"
            target="_blank"
          >
            <div className="social-links-section">
              <div className="fx-col-sm">
                <div className="rating-title">Review us on Product Hunt!</div>
                <img src="/images/icons/product-hunt.svg" alt="product-hunt" />
              </div>
            </div>
          </Link>
        </div>

        {/* <div className="subscription-box">
          <div className="subscription-text">
            <h2 className="subscription-title">
              Get all the latest from fintech to your inbox!
            </h2>
            <p className="tagline">Delivered Fortnightly. No Spam. Our Word!</p>
          </div>
          <div className="subscribe-box-input">
            <SubscribeInput />
          </div>
        </div> */}
      </div>
      <div className="copyright">
        <div className="contact-emails">
          <div className="contact-email-business email-block">
            <p className="email-label">
              Inbound Business & Partnership Queries
            </p>
            <label className="email">
              <a href="mailto:hello@decentro.tech" target="_blank">
                hello@decentro.tech
              </a>
            </label>
          </div>
          <div className="contact-email-support email-block">
            <p className="email-label">Support & Payment-related Queries</p>
            <label className="email support-email">
              <a href="mailto:support@decentro.tech" target="_blank">
                support@decentro.tech
              </a>
            </label>
          </div>
        </div>
        <div className="loc-copyright-wrapper">
          <p>
            Copyright © {new Date().getFullYear()} Decentro. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

FooterSG.propTypes = {};

FooterSG.defaultProps = {};

export default FooterSG;
