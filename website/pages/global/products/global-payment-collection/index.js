import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../../../sgRequests";
// Animations
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import useGraphics from "../../../../utilities/custom-hooks/useGraphics";

import ProductBanner from "../../../../components-sg/product-banner/product-banner";
const ClientLogoCarousel = dynamic(() =>
  import("../../../../components-sg/client-logo-carousel/client-logo-carousel")
);
const DescriptiveItemList = dynamic(() =>
  import(
    "../../../../components-sg/descriptive-item-list/descriptive-item-list"
  )
);
const InlineItemAndParagrah = dynamic(() =>
  import(
    "../../../../components-sg/inline-item-and-paragraph/inline-item-and-paragraph"
  )
);
const TestimonialsCarousel = dynamic(() =>
  import(
    "../../../../components-sg/testimonials-carousel/testimonials-carousel"
  )
);
const TextAndButtonBanner = dynamic(() =>
  import(
    "../../../../components-sg/text-and-button-banner/text-and-button-banner"
  )
);
import styles from "../../../../styles/page-styles-sg/upi-collections.module.scss";
// utils
import { clientLogos } from "../../../../components-sg/client-logos";

const PaymentsCollection = () => {
  const controls = useAnimation();

  const animationURL = 'https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/2.+SEA+Maps+Collect+From+Final.json'
  const { data, loading, error } = useGraphics(animationURL);

  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Collect <span class='highlighted-heading'>Global & Local Payments</span> Seamlessly",
    subHeading: "",
    tagline: "Accept payments via 12+ currencies and payment methods",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/upi-collections-video.mp4",
    altText: "Collect Global and Local Payments Seamlessly",
    titleText: "Payments Collection",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/upi-collect/banner-bg.svg",
  };

  const buildFintechFutureData = {
    heading:
      "Quick & Seamless <span class='highlighted-subsection-header'>Payment Collection</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/reduce-txn-cost.svg",
        title: "Reduce Transaction Costs",
        description: "Save on transactions via payment gateways or PSPs.",
      },
      {
        imageSrc: "/images/icons/customer-journey.svg",
        title: "Elevate Customer Journey",
        description: "Elevate customer experience with one-click payments.",
      },
      {
        imageSrc: "/images/icons/increase-success-rate.svg",
        title: "Increase Success Rates",
        description: "Reduce payment failures and secure success rates of 98%.",
      },
      {
        imageSrc: "/images/icons/flexible-settlements.svg",
        title: "Flexible Settlements",
        description:
          "Get funds settled to partner’s account instantly, without waiting T+2 days.",
      },
      {
        imageSrc: "/images/icons/low-costs.svg",
        title: "Lower Operational Costs",
        description:
          "Cut your expenditure towards heavy integrations and relationships.",
      },
      {
        imageSrc: "/images/icons/go-live.svg",
        title: "Quicker Go-live",
        description: "Integrate our stack and go live within a matter of days.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/conversational-banking.svg",
        title: "Cross-Border Payments",
        description:
          "Use specialized software to overcome international payment challenges, enabling global commerce.",
      },
      {
        imageSrc: "/images/icons/in-app-payments.svg",
        title: "Marketplaces",
        description:
          "Facilitate secure and efficient transactions between buyers and sellers, enhancing user trust.",
      },
      {
        imageSrc: "/images/icons/scan.svg",
        title: "Financial Institutions",
        description:
          "Offer clients seamless payment experiences, improving overall banking services.",
      },
      {
        imageSrc: "/images/icons/repay.svg",
        title: "Consumer Platforms",
        description:
          "Simplify payment flows, ensuring convenience and satisfaction for end consumers.",
      },
      {
        imageSrc: "/images/icons/insurance-premium.svg",
        title: "Offline Payment Processors",
        description:
          "Embrace digital tools to transition traditional cash-based transactions into efficient, trackable processes.",
      },
      {
        imageSrc: "/images/icons/invest.svg",
        title: "Payment Aggregators",
        description:
          "Aggregate various payment methods into a single interface, simplifying financial management for businesses.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Instant Fund Transfer",
        description:
          "Get immediate settlement for your customers' incoming & outgoing payments",
      },
      {
        title: "Tracking Payments",
        description:
          "Sort payments based on VA, banks, transaction ID, etc., and map the flow",
      },
      {
        title: "Real-time Updates",
        description:
          "Get instant payment-related reports, insights, and notifications on your dashboard in real-time",
      },
      {
        title: "Expand to new markets",
        description:
          "Enable cross-border payments for your business with Decentro across 12+ countries and currencies",
      },
      {
        title: "Custom Virtual Accounts",
        description: "Create custom Virtual Accounts for all your customers",
      },
      {
        title: "Cost-Effectiveness",
        description:
          "Reduce variable costs spent during follow-ups, invoicing, operations, etc",
      },
      {
        title: "Auto Reconciliation",
        description:
          "Eliminate manual reconciliations of debits seamlessly via our Virtual Accounts",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription:
      "Simplify the complexity with multi-currency management and flexible cross-border payment options",
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

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const textAndButtonBannerDataDoc = {
    ctaTitle:
      "<span className='header-section-highlighted'>Discover More, Learn More</span>",
    ctaDescription: "Access Our Product Guide Now",
    ctaButtonText: "View Documentation",
    ctaButtonLink: requests.DOC_SG_PAYMENT_COLLECTION,
    newTab: true,
  };

  return (
    <div className={styles["upi-collections-container"]}>
      <Head>
        <title>Collect Payments Seamlessly | Decentro</title>
        <link
          rel="canonical"
          href="https://decentro.tech/global/products/global-payment-collection"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/global/products/global-payment-collection"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Collect funds seamlessly with Payment Collection APIs. Collect payments globally, and improve your customer journey. Get started today"
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Collect Payments Seamlessly | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["upi-collections"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        <InlineItemAndParagrah data={possibilitiesData} />
        <DescriptiveItemList data={betterUseCasesData} />

        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />

        {/* Displaying animation only when all three are truthy. */}
        {data && !loading && !error &&
          <div className={styles["lottie-animation-container"]}>
            <h2>
              Expand Your <span className="header-section-highlighted">Global Footprint</span>
            </h2>
            <motion.div
              animate={controls}
              initial="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 500 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Lottie animationData={data} />
            </motion.div>
          </div>
        }
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
    </div>
  );
};

export default PaymentsCollection;
