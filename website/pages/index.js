import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";

import Banner from "../components/banner/banner";
// Lazy load AwardsRecognition component
const AwardsRecognition = dynamic(
  () => import("../components/awards-recognition/awards-recognition"),
  {
    ssr: false, // Disable server-side rendering if you want to
  }
);

// Lazy load GetStarted component
const GetStarted = dynamic(
  () => import("../components/get-started/get-started"),
  {
    ssr: false, // Disable server-side rendering if you want to
  }
);

// Lazy load OurProductsMobile component
const OurProductsMobile = dynamic(
  () => import("../components/our-products-mobile/our-products-mobile"),
  {
    ssr: false, // Disable server-side rendering if you want to
  }
);

// Lazy load OurProducts component
const OurProducts = dynamic(
  () => import("../components/our-products/our-products"),
  {
    ssr: false, // Disable server-side rendering if you want to
  }
);

// Lazy load TestimonialsCarousel component
const TestimonialsCarousel = dynamic(
  () => import("../components/testimonials-carousel/testimonials-carousel"),
  {
    ssr: false, // Disable server-side rendering if you want to
  }
);

// Lazy load WhyDecentro component
const WhyDecentro = dynamic(
  () => import("../components/why-decentro/why-decentro"),
  {
    ssr: false, // Disable server-side rendering if you want to
  }
);
import requests from "../requests";
import styles from "../styles/Home.module.scss";
const TextAndButtonBannerGray = dynamic(
  () =>
    import(
      "../components/text-and-button-banner-gray/text-and-button-banner-gray"
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);
import ClientLogoCarousel from "../components/client-logo-carousel/client-logo-carousel";
import BookDemoBanner from "../components/book-demo-banner/book-demo-banner";
import { clientLogos } from "../components/client-logos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // Just chill chill, just chill
  const [viewType, setViewType] = useState("");

  const handleResize = () => {
    if (window.innerWidth < 1024) setViewType("mobile");
    else setViewType("desktop");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const bannerData = {
    heroImg: "/images/home/banner.svg",
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const [bannerActive, setBannerActive] = useState(false);
  const bannerClose = (e) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem("visited", true);
    sessionStorage.setItem("banner", true);
    setBannerActive(false);
  };
  React.useEffect(() => {
    // Initially when loaded we check if it has a visited key or not, if not we put a key with value false initially
    if (
      JSON.parse(sessionStorage.getItem("visited")) == undefined ||
      JSON.parse(sessionStorage.getItem("visited")) == ""
    ) {
      sessionStorage.setItem("visited", false);
      setBannerActive(true);
    } else {
      bannerUpdate();
    }
  }, []);

  React.useEffect(() => {
    if (viewType != "mobile") bannerUpdate();
  }, [bannerActive]);

  // React.useEffect(() => {
  //   if (window?.location?.search?.length > 0) {
  //     scrollToSection("signupComponent");
  //   }
  // }, []);

  const bannerUpdate = () => {
    if (JSON.parse(sessionStorage.getItem("visited"))) {
      document.getElementsByClassName("banner-announcements")[0].style.display =
        "none";
      if (
        document.getElementById("header") &&
        document.getElementById("header").classList.contains("with-banner")
      ) {
        document.getElementById("header").classList.remove("with-banner");
        document.getElementById("header").style.padding = "0px !important";
      }
      if (
        document.getElementsByClassName("banner")[0] &&
        document
          .getElementsByClassName("banner")[0]
          .classList.contains("with-banner")
      ) {
        document
          .getElementsByClassName("banner")[0]
          .classList.remove("with-banner");
      }
    } else {
      document.getElementsByClassName("banner-announcements")[0].style.display =
        "flex";
      if (
        document.getElementById("header") &&
        !document.getElementById("header").classList.contains("with-banner")
      ) {
        document.getElementById("header").classList.add("with-banner");
      }
      if (
        document.getElementsByClassName("banner")[0] &&
        !document
          .getElementsByClassName("banner")[0]
          .classList.contains("with-banner")
      ) {
        document
          .getElementsByClassName("banner")[0]
          .classList.add("with-banner");
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Decentro - Payments, KYC & Banking APIs and SDKs</title>
        <link rel="alternate" href="https://decentro.tech" hreflang="en-IN" />
        <meta
          name="description"
          content="Simple & automated APIs for Payments and Banking Integrations in India. Open banking APIs to launch your products 10X faster."
        />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div className={styles["homepage"]}>
        {viewType != "mobile" && (
          // * If entire banner need to redirect user, use Link tag and update href.
          //   <Link
          //   href={"https://cxotoday.com/press-release/neowise-launches-indias-first-ai-driven-debt-collection-saas-tools/"}
          //   target="_blank"
          //   className="banner-announcements"
          //   rel="noopener noreferrer"
          // >
          <div
            href={
              "https://cxotoday.com/press-release/neowise-launches-indias-first-ai-driven-debt-collection-saas-tools/"
            }
            target="_blank"
            className="banner-announcements"
            rel="noopener noreferrer"
          >
            <div className="banner-content-wrapper">
              <div className="banner-head">
                <img
                  src="/images/banner-rocket.png"
                  alt="Self-Hosted CKYC Solution"
                />
              </div>
              <div className="banner-text">
                {/* <strong>Mega May Deal</strong> | First{" "}
              <strong>50 Merchants </strong>get&nbsp;
              <strong>40% Off* </strong>on UPI Payment Collections */}
                <strong>
                  India’s First Self-Hosted CKYC Solution is Here!
                </strong>
                {" | "} Stay <strong>100% compliant</strong> with CERSAI’s new
                mandate.
                {/* Check out our collection of key <strong>resource</strong> pages! */}
                {/* <div className="banner-extra-images-contaner">
                <img className="ph-logo" src="/images/ph-logo.svg" />
                <img
                  className="arrow-right"
                  src="/images/right-link-arrow.svg"
                />
              </div> */}
              </div>
            </div>
            <div className="banner-actions">
              <Link
                href={
                  "https://bfsi.eletsonline.com/decentro-unveils-indias-first-self-hosted-ckyc-solution-to-align-with-cersais-new-compliance-mandate/"
                }
                target="_blank"
                className="banner-button"
                rel="noopener noreferrer"
              >
                Learn More
              </Link>
              {/* <div
                href={"https://cxotoday.com/press-release/neowise-launches-indias-first-ai-driven-debt-collection-saas-tools/"}
                target="_blank"
                className="banner-button"
                rel="noopener noreferrer"
              >
                Discover More in Our Press Release!
              </div> */}
              {/* <img
                className="arrow-right"
                src="/images/right-link-arrow.svg"
                alt="arrow right"
              /> */}
            </div>
            {/* <FontAwesomeIcon
              icon={faTimes}
              className="cancel-banner"
              onClick={(e) => {
                bannerClose(e);
              }}
              width={10}
            /> */}
            <img
              className="cancel-banner"
              src="/images/close-rollover.svg"
              alt="Cancel"
              onClick={(e) => {
                bannerClose(e);
              }}
              width={10}
            />
            {/* <p className="tnc-text">* T&C Apply</p> */}
            {/* <div className="extra-info-pill">
            <strong>RBI-Licensed</strong> Payment Aggregator
          </div> */}
          </div>
        )}

        <Banner data={bannerData} />
        <ClientLogoCarousel data={clientLogoData} />
        <WhyDecentro />
        <GetStarted />
        {viewType === "desktop" ? <OurProducts /> : <OurProductsMobile />}
        <AwardsRecognition />
        <TestimonialsCarousel />
        <div className={styles["book-demo-banner"]}>
          <BookDemoBanner />
        </div>
        <TextAndButtonBannerGray data={textAndButtonBannerData} />
      </div>
    </div>
  );
}
