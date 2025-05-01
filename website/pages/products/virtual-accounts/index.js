import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import requests from "../../../requests";

import ProductBanner from "../../../components/product-banner/product-banner";
const TextAndButtonBanner = dynamic(
  () =>
    import("../../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DescriptiveItemList = dynamic(() =>
  import("../../../components/descriptive-item-list/descriptive-item-list")
);
const InlineItemAndParagraph = dynamic(() =>
  import(
    "../../../components/inline-item-and-paragraph/inline-item-and-paragraph"
  )
);
const TestimonialsCarousel = dynamic(() =>
  import("../../../components/testimonials-carousel/testimonials-carousel")
);
const VACollectionsInteractions = dynamic(() =>
  import("../../../components/interactions/va-collections")
);
const ClientLogoCarousel = dynamic(() =>
  import("../../../components/client-logo-carousel/client-logo-carousel")
);
const RecommendedPages = dynamic(() =>
  import("../../../components/recommended-pages/recommended-pages")
);

import styles from "../../../styles/page-styles/va-collections.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import { transactions_processed_annually } from "../../../utilities/variables";

const VaCollections = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Automate collections and reconciliation via <span class='highlighted-heading'>Multi-Collect</span>",
    subHeading: "",
    tagline:
      "Collect funds from individuals or businesses and reconcile them directly through your virtual accounts",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/va-collections-video.mp4",
    altText: "Empower Seamless Fund Collections via Virtual Accounts",
    titleText: "VA Collections",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/virtual-accounts/banner-bg.svg",
    metrics: true,
    metricList: [
      {
        textBold: " BN+",
        textLight: "Processed Annually",
        numberElement: `$${transactions_processed_annually}`,
      },
      {
        textBold: " Cr+ INR",
        textLight: "reconciled per hour",
        numberElement: "2",
      },
      {
        textBold: "+ Virtual Accounts",
        textLight: "created per hour",
        numberElement: "100",
      },
    ],
  };

  const buildFintechFutureData = {
    heading:
      "Collect and Map <span class='highlighted-subsection-header'>Payments</span> Seamlessly",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/collect.svg",
        title: "Seamless Fund Collection",
        description:
          "Collect funds from businesses or individuals directly in your virtual account.",
      },
      {
        imageSrc: "/images/icons/operations.svg",
        title: "Lower Operational<br/>Overheads",
        description:
          "Reduce manual efforts of reconciliation of funds by automating processes using virtual accounts.",
      },
      {
        imageSrc: "/images/icons/secure.svg",
        title: "Highly Secure",
        description:
          "Enhance safety and prevent fraud by making sure your real account number is never exposed.",
      },
      {
        imageSrc: "/images/icons/compliance1.svg",
        title: "Fully Compliant",
        description:
          "End-to-end compliance with the collection flows as an RBI-certified payment aggregator.",
      },
      {
        imageSrc: "/images/icons/visibility.svg",
        title: "Complete Visibility",
        description:
          "Access a self-serve dashboard and get insight into the transactions and fees.",
      },
      {
        imageSrc: "/images/icons/lightning-fast.svg",
        title: "Lightning-fast Onboarding",
        description:
          "Get onboarded quickly onto our platform with minimal go-live times and start accepting payments.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/collections.svg",
        title: "Collections",
        description: "Accept money via NEFT/IMPS/RTGS/UPI (Push).",
      },
      {
        imageSrc: "/images/icons/payouts-to-beneficiaries.svg",
        title: "Payout to Beneficiaries",
        description:
          "Collect and settle funds via VAs directly to beneficiaries.",
      },
      {
        imageSrc: "/images/icons/escrow-locking.svg",
        title: "Escrow Locking",
        description: "Provide VAs to platforms to route funds to lenders.",
      },

      {
        imageSrc: "/images/icons/investments.svg",
        title: "Investments",
        description:
          "Collect funds for equity, AIF-based, or alternative investments.",
      },
      {
        imageSrc: "/images/icons/white-label.svg",
        title: "White Label Repayments",
        description:
          "Enable repayments for your Loan Management System via our white-labelled virtual accounts.",
      },
      {
        imageSrc: "/images/icons/supply-chain.svg",
        title: "Supply Chain Financing",
        description:
          "Capture and monitor the movement of funds end to end, as they flow through your supply chain.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Custom Virtual Accounts",
        description: "Create custom VAs for all your customers",
      },
      {
        title: "Cost-Effectiveness",
        description:
          "Reduce variable costs spent during follow-ups, invoicing, operations, etc.",
      },
      {
        title: "Tracking Payments",
        description:
          "Sort payments based on VA, banks, transaction id, etc., and map the flow",
      },
      {
        title: "Quick Settlements",
        description:
          "Collect customers’ payment settlement directly in your bank account",
      },
      {
        title: "Auto Reconciliation",
        description:
          "Eliminate manual reconciliations of debits seamlessly via our VAs",
      },
      {
        title: "Real-time Updates",
        description:
          "Get instant payment-related reports, insights, and notifications on your dashboard in real time",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription:
      "Collect funds with minimal manual effort and cost",
    contentImage: true,
    contentImageSrc: "/images/virtual-accounts/banner-features.svg",
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const textAndButtonBannerDataDoc = {
    ctaTitle:
      "<span className='header-section-highlighted'>Discover More, Learn More</span>",
    ctaDescription: "Access Our Product Guide Now",
    ctaButtonText: "View Documentation",
    ctaButtonLink: requests.DOC_VA,
    newTab: true,
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const recommendedPagesData = [
    {
      title: "Instant Payouts",
      description:
        "Send money to any bank account or UPI ID automatically via APIs or file upload.",
      pageLink: "/products/instant-payouts",
      imageSrc: "/images/resources/instant-payout.svg",
    },
    {
      title: "UPI Payment Gateway",
      description:
        "Supercharge your platform by enabling payment collection through UPI with real-time confirmations.",
      pageLink: "/products/upi-payment-gateway/",
      imageSrc: "/images/resources/upi-collections.svg",
    },
    {
      title: "Escrow Accounts",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/products/escrow-accounts/",
      imageSrc: "/images/escrow-accounts/banner.svg",
    },
  ];

  const initialData = [
    {
      headingLight: "Auto-Reconciliation",
      headingBold: "",
      text: "Eliminate manual reconciliations with instant automated reconciliation using Decentro Multi-Collect.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/multi-collect/auto-reconciliation.json",
    },
    {
      headingLight: "Tracking Payments",
      headingBold: "",
      text: "Match each payment to a customer or an order with automated reconciliation.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/multi-collect/tracking-payments.json",
    },
    {
      headingLight: "Quick Settlements",
      headingBold: "",
      text: "Drive quick settlements for collecting payments and settle transactions for multiple vendors according to predefined settlement cycles.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/multi-collect/quick-settlements.json",
    },
    {
      headingLight: "Real-time Updates",
      headingBold: "",
      text: "Get instant payment-related reports, insights, and notifications on your dashboard.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/multi-collect/real-time-updates.json",
    },
    {
      headingLight: "Cost-Effectiveness",
      headingBold: "",
      text: "Eliminate operational costs spent during follow-ups, invoicing, etc.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/multi-collect/cost-effectiveness.json",
    },
    {
      headingLight: "24x7 Priority Support",
      headingBold: "",
      text: "Get 24x7x365 human-centric customer support across multiple channels including phone, email, Slack, etc.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/MultiCollect+24X7+Priority+Support.json",
    },
  ];

  let animationData = useAnimationData(initialData);

  return (
    <div className={styles["va-collections-container"]}>
      <Head>
        <title>
          Multi-Collect | Automate Fund Collections & Reconciliation | Decentro
        </title>
        <meta
          property="og:title"
          content="Multi-Collect | Automate Fund Collections & Reconciliation | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/virtual-accounts"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/products/virtual-accounts"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Collect funds seamlessly, automate your reconciliation process, and reduce operational costs with Decentro's Multi-Collect. Get started today!"
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["va-collections"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        {/* <InlineItemAndParagraph data={possibilitiesData} /> */}
        <div className={styles["endless-possibilities"]}>
          <h2>
            Endless <span>Possibilities</span>
          </h2>
          <p>Collect Funds with Reduced Manual Efforts and Costs</p>
          <div className={styles["penny-verification-methods-content"]}>
            {animationData &&
              animationData.length > 0 &&
              animationData.map((item, index) => (
                <InlineImageAndParagraph
                  key={index}
                  data={item}
                  animatedVideo={true}
                  reverse={index % 2 != 0} // Alternate reverse
                  boldBlack
                />
              ))}
          </div>
        </div>
        <DescriptiveItemList data={betterUseCasesData} />
        <VACollectionsInteractions />
        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
      <RecommendedPages data={recommendedPagesData} />
    </div>
  );
};

export default VaCollections;
