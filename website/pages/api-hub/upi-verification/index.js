import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/upi-verification.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../../components/use-cases/use-cases";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import LightUseCases from "../../../components/light-use-cases/light-use-cases";
import utmtags from "../../../utmTags";

const Enach = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>UPI ID Verification API</span>",
    tagline:
      "Ensure a secure digital transaction by validating and verifying the UPI address.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/upi-id-verification-header.svg",
    altText: "UPI ID Verification API",
    DBackground: true,
  };

  const inlineImageAndParagraphData = {
    headingLight: "Need for",
    headingBold: " UPI ID verification",
    text:
      "The vision of making India a cashless economy rides on the back of the instant real-time payment system called Unified Payment Interface (UPI), developed by the National Payment Corporation Of India (NPCI). This seamless cash flow journey is facilitated by a unique UPI ID/address [eg. abc@xyzbank], which is created and mapped against your existing bank account, which in turn allows you to send and receive money electronically." +
      "<br/><br/>Touted as the most secure platform for cashless transactions, by NPCI, and with the volume of UPI  transactions crossing the 7 Billion mark in September 2022, the need for UPI validation and verification is at an all-time high.",
    imageSrc:
      "/images/resources/upi-id-verification/need-for-upi-id-verification.svg",
    altText: "Need for UPI ID verification?",
  };

  const lightUseCasesData = {
    headingLight: "Use",
    headingBold: "Cases",
    tagline:
      "The security of your digital transactions via UPI address paves way for the following two use cases",
    contentLeft: {
      heading: "Verification of Ownership",
      descriptionContainBullets: false,
      description:
        "The background verification at the time of onboarding a new vendor/merchant/customer/user.",
    },
    contentRight: {
      heading: "Validation of Existence",
      descriptionContainsBullets: true,
      description: "The need to validate the transactions before:",
      bulletPoints: [
        "Accepting funds from the users. This strengths risk monitoring and ensure funds are flowing from the user’s registered bank account only",
        "Withdrawal/payout is made to the UPI ID of the user",
      ],
    },
  };

  const useCasesData = {
    headingLight: "Key Features of ",
    headingBold: "UPI ID Verification API",
    tagline: "",
    block1: [
      {
        heading: "Real-Time<br/>Data",
        paragraph:
          "Real-time data sourced from partner banks ensuring up to date information on newly created accounts",
        imageSrc: "/images/resources/upi-id-verification/real-time-data.svg",
      },
      {
        heading: "Instant<br/>Checks",
        paragraph:
          "Validate VPA instantly and get access to the UPI ID holder's name, type of the account (Savings/current), and IFSC code of the registered bank account.",
        imageSrc: "/images/resources/upi-id-verification/instant-checks.svg",
      },
      {
        heading: "Seamless<br/>Integration",
        paragraph: "Single  API- to verify user’s UPI ID",
        imageSrc:
          "/images/resources/upi-id-verification/seamless-integration.svg",
      },
      {
        heading: "Two-Step<br/>Validation",
        paragraph:
          "Also obtain and verify powerful additional details such as the kind of underlying account (business/savings), Merchant category code (MCC), IFSC code of the bank account.",
        imageSrc:
          "/images/resources/upi-id-verification/two-step-validation.svg",
      },
    ],
    block1extra: [],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const tableOfContentsData = [
    { text: "Need for UPI ID verification?", id: "needForUpiIdVerification" },
    { text: "Use Cases", id: "lightUseCases" },
    { text: "Key Features of UPI ID Verification API", id: "KeyFeatures" },
    {
      text: "How Can Your Business Leverage UPI ID Verification APIs",
      id: "upiIdAPILeverage",
    },
    { text: "Why Decentro’s APIs for UPI Autopay?", id: "howCanDecentroHelp" },
  ];

  const upiIdVerificaton1 = {
    headingLight: "Early Fraud Detection",
    headingBold: "",
    text: "With secure and transparent access to data, the risk of identity fraud is eliminated right at the onboarding process.",
    imageSrc: "/images/resources/upi-id-verification/fraud-detect.svg",
    altText: "Early Fraud Detection",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/payments-verification#key-features",
    CTAButtonText: "View Product Guide",
  };

  const upiIdVerificaton2 = {
    headingLight: "Accelerated Onboarding",
    headingBold: "",
    text: "A powerful API that integrates with your systems to automate verification, without exposing data to a third party, thereby eliminating any delays in the onboarding of new vendors/ merchants/clients.",
    imageSrc: "/images/resources/upi-id-verification/onboarding.svg",
    altText: "Accelerated Onboarding",
    CTAButtonLink: "https://docs.decentro.tech/docs/validate-vpa",
    CTAButtonText: "View Product Guide",
  };

  const upiIdVerificaton3 = {
    headingLight: "Automated Workflows",
    headingBold: "",
    text: "Flexible and easy-to-integrate APIs for your existing workflows, or set up an automated workflow to elevate the customer experience with a quick and efficient verification journey.",
    imageSrc: "/images/resources/upi-id-verification/workflow.svg",
    altText: "Automated Workflows",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/payments-overview-and-guide",
    CTAButtonText: "View Product Guide",
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const howCanDecentroHelpData = {
    headingLight: "UPI ID Verification For Your Business",
    headingBold: "- How Can Decentro Help",
    tagline: "",
    bulletPointsHeader: "Why Decentro’s APIs for UPI ID Verification?",
    bulletPoints: [
      {
        text: "Single API for validating user’s UPI ID - at a basic or advanced level.",
      },
      {
        text: "Flexible API-based flow that can be embedded easily in your existing workflows.",
      },
      {
        text: "Verify accounts on the fly while maintaining the accuracy and speed of transactions.",
      },
      {
        text: "Sub-merchant onboarding for your end customers/sellers or vendors on their own custom UPI handles.",
      },
      {
        text: "Leverage multi-bank architecture in the backend so that any unexpected downtimes, black swan events, or volume spikes will never affect your business adversely.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link:
          "https://docs.decentro.tech/docs/overview?_gl=1*19nubfq*_ga*NDE4Njc0MjY2LjE3MTM0MjI4Mjc.*_ga_6NBW6WWGPQ*MTcxMzUyMjY1My44LjEuMTcxMzUyNzYyMi40OS4wLjA" +
          encodeURI(utmtags.DEVELOPER_DOCS_ENACH_BTN),
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Robust and efficient APIs, built to ensure secure transactions<br/><span>Sign-up Today, and Go Live Tomorrow! </span>",
    ctaButtonText: "Get Started",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const recommendedPagesData = [
    {
      title: "UPI AutoPay",
      description:
        "Get recurring E-Mandate enabled on your platform via UPI for payments such as bills, EMIs, OTT subscriptions, insurance, mutual funds, and others.",
      pageLink: "/resources/upi-autopay-apis/",
      imageSrc: "/images/resources/upi-autopay.svg",
    },
    {
      title: "UPI Payments APIs",
      description:
        "Set up real-time payments & collections with UPI and create a seamless cash flow for your business. Enable instant settlements for your customers, partners, or merchants/vendors using UPI APIs.",
      pageLink: "/resources/upi-apis/",
      imageSrc: "/images/resources/upi.svg",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          UPI ID Verification API | Verify UPI ID | Explore More | Decentro
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/api-hub/upi-verification"
        />
        <meta
          name="description"
          content="Everything you need to know to start verifying your customers’ UPI IDs with Decentro. Start collecting UPI payments and quickly enable secure transactions."
        />
        <meta
          name="keywords"
          content="verify upi id, check upi id, upi validation"
        />
        <meta
          property="og:title"
          content="UPI ID Verification API | Verify UPI ID | Explore More | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["upi-id-verification-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["upi-id-verification-details"]}>
          <InlineImageAndParagraph
            id="needForUpiIdVerification"
            data={inlineImageAndParagraphData}
          />
        </div>
        <LightUseCases id="lightUseCases" data={lightUseCasesData} />
        <UseCases id="KeyFeatures" data={useCasesData} />
        <div
          className={styles["upi-id-verification-apis-applications"]}
          id="upiIdAPILeverage"
        >
          <h2>
            Benefits of <span>UPI ID Verification</span>
          </h2>
          <p>
            Set up a robust and secure payments stack for your business using
            Decentro’s APIs for UPI ID verification. Pave the way for automated
            workflows, enhanced security within your transactions, and more.
          </p>
          <div
            className={styles["upi-id-verification-apis-applications-content"]}
          >
            <InlineImageAndParagraph
              zoom={true}
              data={upiIdVerificaton1}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={upiIdVerificaton2}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={upiIdVerificaton3}
              reverse={false}
              boldBlack
            />
          </div>
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={howCanDecentroHelpData}
        />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </React.Fragment>
  );
};

export default Enach;
