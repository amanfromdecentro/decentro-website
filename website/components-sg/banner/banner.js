import Link from "next/link";
import "animate.css";
import styles from "../../styles/components-styles/banner/banner.module.scss";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import requests from "../../sgRequests";
import { animateNumbers } from "../../utilities/numberAnimation";
import Image from "next/image";
import { transactions_processed_annually } from "../../utilities/variables";
import CurrencyConverter from "../currency-converter/currency-converter";

const Banner = (props) => {
  useEffect(() => {
    animateNumbers("#annualProcessing");
    // animateNumbers("#apiTxns");
  }, []);

  return (
    <div className={styles["banner"]}>
      <div className={styles["banner-D-container"]}>
        <Image
          className={styles["banner-bg"]}
          src="/images/home/banner-bg-D.svg"
          alt="Decentro banner bg"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
      {/* <img
        className={styles["banner-bg"]}
        src="/images/home/banner-bg-D.svg"
        alt="Decentro banner bg"
      /> */}
      <div className={styles["banner-curve-container"]}>
        <Image
          className={`${styles["banner-bg"]} ${styles["bg-curves"]}`}
          src="/images/bg-banners/lines-bg-header.svg"
          alt="bg-curves"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
      {/* <img
        className={`${styles["banner-bg"]} ${styles["bg-curves"]}`}
        src="/images/bg-banners/lines-bg-header.svg"
        alt="bg-curves"
      /> */}
      <div className={styles["text-content"]}>
        <h1>
          Build&nbsp;
          <div className={styles["scroller"]}>
            <Typewriter
              options={{
                strings: ["Collections", "Payouts", "Reconciliation"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <br />
          into your platform!
        </h1>
        {/* <h1>
          Build&nbsp;
          <div className={styles["scroller"]}>
            <span>
              Collections
              <br />
              Payouts
              <br />
              Reconciliation
            </span>
          </div>
          <br />
          into your platform!
        </h1> */}
        <h3>Plug & Play APIs and SDKs</h3>
        <Link href={requests.SIGNUP} target="_blank"
          rel="noopener noreferrer">Get Started Today</Link>
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
      {/* <div className={styles["image-content"]}>
        <img
          src={props?.data?.heroImg ?? "/images/home/banner.svg"}
          alt="Decentro is a full-stack API banking platform for financial integrations."
        />
      </div> */}
      <div className={styles["interaction-content"]}>
        <CurrencyConverter />
      </div>
    </div>
  );
};

export default Banner;
