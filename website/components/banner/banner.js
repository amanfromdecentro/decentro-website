import React, { useEffect, useState } from "react";
import Link from "next/link";
import "animate.css";
import Typewriter from "typewriter-effect";
import styles from "../../styles/components-styles/banner/banner.module.scss";
import ClientLogoCarousel from "../client-logo-carousel/client-logo-carousel";

import requests from "../../requests";
import { animateNumbers } from "../../utilities/numberAnimation";
import Image from "next/image";
import { transactions_processed_annually } from "../../utilities/variables";

const Banner = (props) => {
  const [bannerActive, setBannerActive] = useState(false);
  const [viewType, setViewType] = useState("");

  const handleResize = () => {
    if (window.innerWidth < 1024) setViewType("mobile");
    else setViewType("desktop");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    animateNumbers("#annualProcessing");
    // animateNumbers("#apiTxns");
  }, []);

  React.useEffect(() => {
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

  const bannerUpdate = () => {
    const bannerAnnouncements = document.getElementsByClassName(
      "banner-announcements"
    )[0];
    const header = document.getElementById("header");
    const banner = document.getElementsByClassName("banner")[0];

    if (JSON.parse(sessionStorage.getItem("visited"))) {
      bannerAnnouncements.style.display = "none";
      if (header && header.classList.contains("with-banner")) {
        header.classList.remove("with-banner");
        header.style.padding = "0px !important";
      }
      if (banner && banner.classList.contains("with-banner")) {
        banner.classList.remove("with-banner");
      }
    } else {
      bannerAnnouncements.style.display = "flex";
      if (header && !header.classList.contains("with-banner")) {
        header.classList.add("with-banner");
      }
      if (banner && !banner.classList.contains("with-banner")) {
        banner.classList.add("with-banner");
      }
    }
  };

  return (
    <div
      className={`${styles["banner"]} ${bannerActive ? styles["with-banner"] : ""
        }`}
    >
      <div className={styles["banner-D-container"]}>
        <Image
          className={styles["banner-bg"]}
          src="/images/home/banner-bg-D.svg"
          alt="Decentro banner bg"
          layout="responsive"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>
      <div className={styles["banner-curve-container"]}>
        <Image
          className={`${styles["banner-bg"]} ${styles["bg-curves"]}`}
          src="/images/bg-banners/lines-bg-header.svg"
          alt="bg-curves"
          layout="responsive"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>
      <div className={styles["text-content"]}>
        {/* Scroller effect */}

        {/* <h1>
          Build&nbsp;
          <div className={styles["scroller"]}>
            <span>
              Payments
              <br />
              Onboarding
              <br />
              Lending
            </span>
          </div>
          <br />
          into your platform!
        </h1> */}

        {/* Typewriter Effect  */}
        <h1>
          Build&nbsp;
          <div className={styles["scroller"]}>
            <Typewriter
              options={{
                strings: ["Payments", "Onboarding"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <br />
          into your platform!
        </h1>

        <h3>Plug & Play APIs and SDKs</h3>
        <Link href={requests.SIGNUP} target="_blank"
          rel="noopener noreferrer">
          Get Started Today
          {/* Span added for animation purposes */}
          <span></span>
        </Link>
        <div className={styles["banner-numbers-container"]}>
          <div className={styles["banner-numbers-item"]}>
            <span className={styles["highlighted-heading"]}>
              $<span id="annualProcessing">{transactions_processed_annually}</span>&nbsp;Billion
            </span>
            &nbsp;Processed Annually
          </div>
          <div className={styles["banner-numbers-item"]}>
            <span className={styles["highlighted-heading"]}>
              <span id="apiTxns">200</span> Million+
            </span>
            &nbsp;API Transactions
          </div>
        </div>
      </div>
      <div className={styles["image-content"]}>
        <Image
          src="/images/home/banner.svg"
          alt="Decentro is a full-stack API banking platform for financial integrations."
          layout="responsive"
          width={1418}
          height={896}
          loading="eager"
        />
      </div>
      {/* Preload the last image */}
      <link
        rel="preload"
        href="/images/home/banner.svg"
        as="image"
      // onLoad="this.rel='prefetch'"
      />
    </div>
  );
};

export default Banner;
