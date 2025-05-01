import React, { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import {
  FaAngellist,
  FaProductHunt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import SubscribeInput from "../subscribe-input/subscribe-input";
import urls from "../../urls";
import utmtags from "../../utmTags";
import Image from "next/image";
import HelpSectionContext from "../../contexts/HelpSectionContext";

const Footer = () => {
  const { entityName } = useContext(HelpSectionContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const router = useRouter();

  const dropdownRef = useRef(null);

  useEffect(() => {
    const currentURL = router.asPath;
    if (currentURL.includes("decentro.tech/global")) {
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

  const decfinPaths = [
    "/payment-aggregator",
    "/products/virtual-accounts",
    "/products/upi-payment-gateway",
    "/products/recurring-payments",
    "/decfin-terms",
  ];

  const isDecfin =
    decfinPaths.includes(router.pathname) || entityName === "decfin";

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-left-section">
          <div className="footer-logo">
            <Image
              className="decentro-d"
              src="/images/icons/decentro-black-logo.svg"
              alt="decentro-black"
              width={250}
              height={48}
            />
            {/* <img
              className="decentro-d"
              src="/images/icons/decentro-black-logo.svg"
              alt="decentro-black"
            /> */}
            <div className="backing-and-certificate">
              <Image
                className="iso-certificate"
                src="/images/footer/iso-cert.svg"
                alt="iso-certificate"
                width={60}
                height={60}
              />
              {/* <img
                className="iso-certificate"
                src="/images/footer/iso-cert.svg"
                alt="iso-certificate"
              /> */}
              <img
                className="pa-license"
                src="/images/footer/pa-license.svg"
                alt="pa-license"
              />
              <p>
                BACKED BY{" "}
                <Image
                  src="/images/footer/yc-logo.svg"
                  alt="y-combinator"
                  width={150}
                  height={30}
                />
                {/* <img src="/images/footer/yc-logo.svg" alt="y-combinator" /> */}
              </p>
            </div>
          </div>
          <div className="footer-text">
            <div>
              Decentro is a one-stop platform where you can integrate with
              desired banking APIs or SDKs and then go live within a few days—no
              need to run around for 5+ months to integrate with multiple
              banking partners for launching your products.
            </div>
            <br />
            <div>
              We are doing the initial hard work of all those legacy
              integrations to customize and make the desired modules available
              in the simplest way with the highest degree of automation.
            </div>
            <br />
            {isDecfin ? (
              <div>
                <b>
                  Payment aggregation services provided by Decfin Tech Pvt. Ltd.
                </b>
                <br />
                An RBI Authorised Online Payment Aggregator.
              </div>
            ) : (
              <div>
                <b>These services are provided by Decentro Tech Pvt. Ltd.</b>
              </div>
            )}

            {/* Decentro is a one-stop platform where you can integrate with desired banking APIs or SDKs and then go live within a few days. No need to run around for 5+ months to integrate with multiple banking partners for launching your products. We are doing the initial hard work of all those legacy integrations to customise and make the desired modules available in the simplest way with the highest degree of automation. Payment aggregation services provided by Decfin Tech Pvt. Ltd. An RBI Authorised Online Payment Aggregator. */}

            {/* Decentro is an RBI-authorised online payment aggregator that powers
            over 800 companies, including Newtap Finance, CashE, Ninjacart,
            MoneyTap, AU Small Finance Bank, and more, helping them optimise
            their digital infrastructure. Decentro was founded by Rohit Taneja
            and Pratik Daudkhane and is backed by investors like Y-Combinator,
            Rapyd Ventures, and Soma Capital, among many others. */}
          </div>
        </div>
        <div className="footer-links">
          <Link href="/products/" className="mt-0">
            <div className="footer-header-container mb-10 c-pointer">
              <h3 className="mb-0">Flow</h3>
              <img src="/images/icons/back.svg" className="rotate-90" alt="back-icon" />
            </div>
          </Link>
          <Link href={urls.VIRTUAL_ACCOUNTS}>Multi-Collect</Link>
          <Link href={urls.UPI_COLLECTIONS}>UPI Payment Gateway</Link>
          <Link href={urls.RECURRING_PAYMENTS}>Recurring Payments</Link>
          <Link href={urls.INSTANT_PAYOUTS}>Instant Payouts</Link>
          <Link href={urls.ESCROW_ACCOUNTS}>Escrow Accounts</Link>
          <Link href={urls.LEDGERS}>Ledgers</Link>
          <Link href={urls.SETTLR}>Split settlements</Link>
          {/* <Link href={urls.LENDING}>
            Lending
            <label class="badge">New</label>
          </Link> */}
          <Link href="/products/" className="mt-30">
            <div className="footer-header-container mb-10 c-pointer">
              <h3 className="mb-0">Fabric</h3>
              <img src="/images/icons/back.svg" className="rotate-90" alt="back-icon" />
            </div>
          </Link>
          <Link href={urls.KYC_AND_ONBOARDING}>KYC & Onboarding</Link>

          <Link href={urls.FINANCIAL_SERVICES}>Bytes</Link>
          <Link href={urls.HYPERSTREAMS}>Hyperstreams</Link>
          <Link href={urls.UI_STREAM}>UIStreams</Link>

          <h3 className="banking">API Hub</h3>
          <Link href={urls.API_HUB_ICAI_VERIFICATION}>
            ICAI Membership Verification API
          </Link>
          <Link href="/resources/upi-verification/">UPI ID Verification</Link>
          {/* <Link href="/resources/mobile-to-vpa">Mobile to VPA APIs</Link> */}
          <Link href={urls.RESOURCES_UDYAM_APIS}>Udyam Verification APIs</Link>
        </div>
        <div className="footer-links">
          <Link href="/resources/" className="mt-0">
            <div className="footer-header-container mb-10">
              <h3
                // onClick={(event) => {
                //   event.stopPropagation();
                //   window.location.assign("/resources/");
                // }}
                style={{
                  cursor: "pointer",
                }}
                className="mb-0"
              >
                Resources
              </h3>
              <img src="/images/icons/back.svg" className="rotate-90" alt="back-icon" />
            </div>
          </Link>
          <Link href={urls.RESOURCES_VENDOR_ONBOARDING}>Vendor Onboarding</Link>
          <Link href="/resources/credit-bureau-api/">Credit Bureau</Link>
          <Link href={urls.RESOURCES_PENNY_DROP_VERIFICATION}>
            Penny Drop Verification
          </Link>
          <Link href="/resources/upi-apis/">UPI</Link>
          <Link href="/resources/bank-account-validation-api/">
            Bank Account Validation
          </Link>
          <Link href="/resources/bulk-payouts">Bulk Payouts APIs</Link>
          <Link href="/resources/digilocker-apis/">DigiLocker</Link>
          <Link href="/resources/pan-verification-api">PAN Verification</Link>
          <Link href="/resources/upi-autopay-apis/">UPI Autopay</Link>
          <Link href="/resources/aadhaar-verification/">
            Aadhaar Verification
          </Link>
          <Link href="/resources/goods-and-services-tax-gst-api/">
            GST APIs
          </Link>
          <Link href="/resources/enach-apis/">eNACH</Link>
          <Link href="/resources/ckyc-apis/">CKYC APIs</Link>
          {/* <Link href="/resources/digital-lending-solution/">
            Digital Lending Solution
          </Link> */}
          <Link href="/resources/debt-collection-software/">
            Debt Collection Software
          </Link>
          <Link href="/resources/employment-verification-api">
            Employment Verification
          </Link>
          <Link href="/resources/phone-number-intelligence">
            Phone Number Intelligence
          </Link>
        </div>

        {/* Company  */}

        <div className="footer-links mt-lg-0">
          {/* <h3></h3> */}
          {/* <br className="line-break-lg" /> */}

          <Link
            href={urls.RESOURCES_PROFESSIONAL_VERIFICATION}
            className="next-line"
          >
            Professional Verification
          </Link>
          <Link href={urls.RESOURCES_BBPS}>BBPS APIs</Link>
          <Link href={urls.RESOURCES_MSME_VERIFICATION}>MSME Verification</Link>
          <Link href={urls.RESOURCES_PREFILL_APIS}>Prefill APIs</Link>

          <h3 className="banking">Company</h3>
          {/* <Link href="/products/">Products</Link> */}
          <Link href="/about/">About Us</Link>
          <Link href={urls.WHY_DECENTRO}>
            Why Decentro
            <label class="badge">Spotlight!</label>
          </Link>
          <Link href="/careers">
            Careers
            <label class="badge pd-side-15">We’re Hiring!</label>
          </Link>
          <Link href="https://decentro.tech/blog/">Blog</Link>
          <Link href="/press-buzz">Press & Buzz</Link>
          <Link href="/customer-stories/">Customer Stories</Link>
          <Link href="/compliance/">Compliance</Link>
          <Link href="/partner-program/">Partner Program</Link>
          <Link href={urls.FOUNDERS_FORGE}>Founders&apos; Forge</Link>
          <Link href={urls.PAYMENT_AGGREGATOR}>Payment Aggregator</Link>
          {/* <h3 className="quick-links">Quick Links</h3>
          <Link
            href={
              "https://docs.decentro.tech/" + utmtags.PRODUCT_GUIDE_FOOTER_BTN
            }
            target="_blank"
          >
            Product Guide
          </Link>
          <Link
            href={
              "https://docs.decentro.tech/" + utmtags.DEVELOPER_DOCS_FOOTER_BTN
            }
            target="_blank"
          >
            Developers
          </Link>
          <Link href="/decfin-terms/">Decentro (PA) T&Cs</Link>
          <Link href="/decentro-terms/">Decentro (TSP) T&Cs</Link>
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/agreement/">Master Services Agreement (PA)</Link>
          <Link href="/report-bug">Report A Bug</Link>
          <Link href="/help/">Help & Support</Link> */}
        </div>
        {/* Company ENDS  */}

        <div className="footer-links last-footer">
          <h3>Quick Links</h3>
          <Link
            href={
              "https://docs.decentro.tech/" + utmtags.PRODUCT_GUIDE_FOOTER_BTN
            }
            target="_blank"
          >
            Product Guide
          </Link>
          <Link
            href={
              "https://docs.decentro.tech/" + utmtags.DEVELOPER_DOCS_FOOTER_BTN
            }
            target="_blank"
          >
            Developers
          </Link>
          <Link href="/decfin-terms/">Decentro (PA) T&Cs</Link>
          <Link href="/decentro-terms/">Decentro (TSP) T&Cs</Link>
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/agreement/">Master Services Agreement (PA)</Link>
          <Link href="/report-bug">Report A Bug</Link>
          <Link href="/help/">Help & Support</Link>
          <div className="lower-footer-container">
            <div className="info-block">
              <p className="info-heading">Registered Address</p>
              <p className="info-description">
                {isDecfin
                  ? "Decfin Tech Pvt. Ltd. 461, 1st Floor, Dongle Desk LLP, Shri Krishna Temple Road, Binnamanagala, Indiranagar, Bengaluru, Bengaluru Urban, Karnataka, 560038"
                  : "Decentro Tech Pvt. Ltd. HD-56 WeWork Vi-John Tower, 393, Phase III, Gurugram, Haryana 122016"}
              </p>
            </div>
            <div className="info-block">
              <p className="info-heading">CIN</p>
              <p className="info-description">
                {isDecfin
                  ? "Decfin Tech Pvt. Ltd. U67120KA2022PTC160075"
                  : "Decentro Tech Pvt. Ltd. U74999HR2020PTC086125"}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="footer-links">
          <h3>Quick Links</h3>
          <Link
            href={
              "https://docs.decentro.tech/" + utmtags.DEVELOPER_DOCS_FOOTER_BTN
            }
          >
            Developers
          </Link>
          <Link href="/terms/">Terms & Conditions</Link>
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/agreement/">Master Services Agreement</Link>
        </div> */}
      </div>
      <hr />

      <div className="footer-mid-section">
        <div className="country-dropdown" ref={dropdownRef}>
          <div className="current-country" onClick={toggleDropdown}>
            <Image
              src="/images/footer/india-flag.svg"
              alt="India"
              width={15}
              height={15}
            />
            {/* <img src="/images/footer/global.svg" alt="Global" />{" "} */}
            {/* Add your actual flag image here */}
            <span>{currentCountry}</span>
            <Image
              className="dropdown-icon"
              src="/images/footer/dropdown-icon.svg"
              alt="dropdown"
              width={12}
              height={7}
            />
            {/* <img
                  className="dropdown-icon"
                  src="/images/footer/dropdown-icon.svg"
                  alt="dropdown"
                /> */}
            {/* Dropdown icon */}
          </div>
          {isDropdownOpen && (
            <ul className="country-options">
              {currentCountry !== "INDIA" && (
                <li onClick={() => handleChangeCountry("INDIA")}>INDIA</li>
              )}
              {currentCountry !== "GLOBAL" && (
                <div>
                  <Image
                    src="/images/footer/global.svg"
                    alt="India"
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
            <p className="email-label">Business & Partnerships</p>
            <label className="email">
              <a href="mailto:hello@decentro.tech" target="_blank">
                hello@decentro.tech
              </a>
            </label>
          </div>
          <div className="contact-email-support email-block">
            <p className="email-label">PA / PG / Collections Support</p>
            <label className="email support-email">
              <a href="mailto:pgsupport@decentro.tech" target="_blank">
                pgsupport@decentro.tech
              </a>
            </label>
          </div>
          <div className="contact-email-support email-block">
            <p className="email-label">All Other Support</p>
            <label className="email support-email">
              <a href="mailto:support@decentro.tech" target="_blank">
                support@decentro.tech
              </a>
            </label>
          </div>
        </div>
        <div className="center-info">
          <div>Payment aggregation services provided by</div>
          <div>
            <b>Decfin Tech Private Limited</b>
          </div>
          <div>An RBI Authorised Online Payment Aggregator</div>
          {/* Payment aggregation services provided by Decfin Tech Private Limited An RBI Authorised Online Payment Aggregator */}
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

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
