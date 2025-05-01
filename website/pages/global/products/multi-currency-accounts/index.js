import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
// Components
import ProductBanner from "../../../../components-sg/product-banner/product-banner";
import InlineImageAndParagraph from "../../../../components-sg/inline-image-and-paragraph/inline-image-and-paragraph";
// Styles
import styles from "../../../../styles/page-styles-sg/multi-currency.module.scss";
// utils
import { clientLogos } from "../../../../components-sg/client-logos";
import urls from "../../../../sgUrls";
import requests from "../../../../sgRequests";

const ClientLogoCarousel = dynamic(() =>
  import("../../../../components-sg/client-logo-carousel/client-logo-carousel")
);
const DescriptiveItemList = dynamic(() =>
  import(
    "../../../../components-sg/descriptive-item-list/descriptive-item-list"
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

const PaymentsCollection = () => {
  const currenciesIcons = [
    {
      imageSrc: "/images/sg/multi-currency/INR.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/USD.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/SGD.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/GBP.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/EUR.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/AUD.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/CAD.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/NZD.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/HKD.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/JPY.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/CNY.svg",
    },
    {
      imageSrc: "/images/sg/multi-currency/IDR.svg",
    },
  ];

  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "<span class='highlighted-heading'>Multi-Currency Accounts</span> for Seamless Global Business Operations",
    subHeading: "",
    tagline:
      "Easily transact, hold, and reconcile in multiple currencies, all within one account.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/multi-currency-header.mp4",
    altText:
      "Easily transact, hold, and reconcile in multiple currencies, all within one account.",
    titleText: "Payments Collection",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/sg/multi-currency/multi-currency-bg.svg",
    isMultiIcons: true,
    multiIcons: {
      heading: "Supported Currencies",
      currenciesIcons: currenciesIcons,
    },
  };

  const buildFintechFutureData = {
    heading:
      "Simplify <span class='highlighted-subsection-header'>Global Operations</span> with Ease",
    tagline: "",
    items: [
      {
        imageSrc: "/images/sg/multi-currency/currency-management.svg",
        title: "Seamless Currency Management",
        description:
          "Transact, hold and reconcile multiple currencies in a single account.",
      },
      {
        imageSrc: "/images/sg/multi-currency/fx-rates.svg",
        title: "Competitive FX Rates",
        description:
          "Access cost-effective foreign exchange rates for all transactions.",
      },
      {
        imageSrc: "/images/sg/multi-currency/reconciliation.svg",
        title: "Streamlined Reconciliation",
        description:
          "Reduce manual efforts with real-time, automated reconciliation.",
      },
      {
        imageSrc: "/images/icons/faster-goto-market.svg",
        title: "Quicker Go-Live",
        description:
          "Integrate with our multi-currency account stack and go-live in less than a day!",
      },
      {
        imageSrc: "/images/sg/multi-currency/compliance.svg",
        title: "Secure & Compliant",
        description:
          "Ensure safety and adherence to global regulatory standards.",
      },
      {
        imageSrc: "/images/sg/multi-currency/fast-integration.svg",
        title: "Fast Integration",
        description: "Onboard and start managing global operations.",
      },
    ],
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to simplify your <span className="header-section-highlighted">cross-border </span> operations?',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const featuresData = [
    {
      headingLight: "Local Collection, Low-Cost Disbursement",
      text: "Collect funds in local currencies and disburse at competitive exchange rates to minimise costs.",
      videoSrc:
        requests.ASSETS_BASE_URL_S3 +
        "/1.+Local+Collection%2C+Low-Cost+Disbursement.mp4",
      altText: "Local Collection, Low-Cost Disbursement",
      reverse: false,
    },
    {
      headingLight: "Custom Multi-Currency Accounts",
      text: "Create dedicated virtual accounts for customers to transact globally in their preferred currencies.",
      videoSrc:
        requests.ASSETS_BASE_URL_S3 + "/2.+Custom+Multi-Currency+Accounts.mp4",
      altText: "Custom Multi-Currency Accounts",
      reverse: true,
    },
    {
      headingLight: "Instant Fund Transfers",
      text: "Enable real-time settlements for cross-border and multi-currency transactions.",
      videoSrc: requests.ASSETS_BASE_URL_S3 + "/3.+Instant+Fund+Transfers.mp4",
      altText: "Instant Fund Transfers",
      reverse: false,
    },
    {
      headingLight: "Tracking Payments",
      text: "Organise transactions effortlessly by sorting based on account, currency, bank, or transaction ID.",
      videoSrc: requests.ASSETS_BASE_URL_S3 + "/4.+Tracking+Payments.mp4",
      altText: "Tracking Payments",
      reverse: true,
    },
    {
      headingLight: "Real-Time Updates",
      text: "Receive instant notifications, detailed reports, and actionable insights directly on your dashboard.",
      videoSrc: requests.ASSETS_BASE_URL_S3 + "/5.+Real-Time+Updates.mp4",
      altText: "Real-Time Updates",
      reverse: false,
    },
    {
      headingLight: "Expand to New Markets",
      text: "Enable cross-border payments for your business with Decentro across 12+ countries and currencies.",
      videoSrc: requests.ASSETS_BASE_URL_S3 + "/6.+Expand+to+New+Markets.mp4",
      altText: "Expand to New Markets",
      reverse: true,
    },
    {
      headingLight: "Cost-Effectiveness",
      text: "Streamline operations and reduce expenses like manual reconciliations, follow-ups, and invoicing costs.",
      videoSrc: requests.ASSETS_BASE_URL_S3 + "/7.+Cost-Effectiveness.mp4",
      altText: "Cost-Effectiveness",
      reverse: false,
    },
    {
      headingLight: "Auto Reconciliation",
      text: "Simplify global fund flows with automated reconciliation for seamless, error-free transactions.",
      videoSrc: requests.ASSETS_BASE_URL_S3 + "/8.+Auto+Reconciliation.mp4",
      altText: "Auto Reconciliation",
      reverse: true,
    },
  ];

  const useCasesData = {
    heading:
      "Prevalent <span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/sg/multi-currency/ecommerce.svg",
        title: "eCommerce",
        description:
          "Enable global customers to pay in their local currencies.",
      },
      {
        imageSrc: "/images/sg/multi-currency/global-payroll.svg",
        title: "Global Payroll",
        description: "Pay employees and freelancers across borders with ease.",
      },
      {
        imageSrc: "/images/sg/multi-currency/vendor-payments.svg",
        title: "Vendor Payments",
        description: "Streamline payments to international suppliers.",
      },
      {
        imageSrc: "/images/sg/multi-currency/investor-management.svg",
        title: "Investor Management",
        description:
          "Simplify fund transfers and holdings in different currencies.",
      },
      {
        imageSrc: "/images/sg/multi-currency/treasury-operations.svg",
        title: "Treasury Operations",
        description:
          "Manage funds across currencies to optimise global cash flow.",
      },
      {
        imageSrc: "/images/sg/multi-currency/travel-hospitality.svg",
        title: "Travel & Hospitality",
        description:
          "Support global transactions for bookings and refunds effortlessly.",
      },
    ],
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
        <title>Multi Currency Accounts for Global Businesses | Decentro</title>
        <link
          rel="canonical"
          href={`${urls.BASE_URL + urls.MULTI_CURRENCY_ACCOUNTS}`}
        />
        <link
          rel="alternate"
          href={`${urls.BASE_URL + urls.MULTI_CURRENCY_ACCOUNTS}`}
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Easily manage 12+ currencies in one account. Simplify global transactions, reduce costs, and expand your business with Decentro’s Multi-Currency Accounts."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Multi Currency Accounts for Global Businesses | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["upi-collections"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        <div
          className={styles["employee-verification-methods"]}
          id="whereToUse"
        >
          <h2>
            Powerful List of <span>WHYs</span>
          </h2>
          <div className={styles["employee-verification-methods-content"]}>
            {featuresData.map((feature, index) => (
              <InlineImageAndParagraph
                key={index}
                zoom={true}
                data={{
                  headingLight: feature.headingLight,
                  headingBold: "", // Keeping this empty as in original code
                  text: feature.text,
                  isVideo: true,
                  videoSrc: feature.videoSrc,
                  altText: feature.altText,
                }}
                isVideo={true}
                reverse={feature.reverse}
                boldBlack
              />
            ))}
          </div>
        </div>
        <DescriptiveItemList data={useCasesData} />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />
      </div>
    </div>
  );
};

export default PaymentsCollection;
