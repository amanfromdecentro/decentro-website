import React from "react";
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
const TestimonialsCarousel = dynamic(() =>
  import("../../../components/testimonials-carousel/testimonials-carousel")
);
// const FinancialServicesInteractions = dynamic(() =>
//   import("../../../components/interactions/financial-services")
// );
const DataPullAPIs = dynamic(() =>
  import("../../../components/datapull-apis/datapull-apis")
);
const ClientLogoCarousel = dynamic(() =>
  import("../../../components/client-logo-carousel/client-logo-carousel")
);
const RecommendedPages = dynamic(() =>
  import("../../../components/recommended-pages/recommended-pages")
);
import styles from "../../../styles/page-styles/financial-services.module.scss";
import { clientLogos } from "../../../components/client-logos";
import FinancialServicesInteractions from "../../../components/interactions/financial-services";

const FinancialServices = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Pull Secure Financial Data, with <span class='highlighted-heading'>Bytes</span>",
    subHeading: "",
    tagline:
      " Fetch credit reports and secure customer data from various data sources to serve your customers' financial needs",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/financial-services-video.mp4",
    altText: "Pull Secure Data, with a single API hit.",
    titleText: "Pull Secure Data, with a single API hit.",
    video: true,
    metrics: true,
    metricList: [
      {
        textBold: "+ Credit Reports",
        textLight: "fetched per hour",
        numberElement: "100",
      },
      {
        textBold: "10000+ Customers'",
        textLight: "data fetched daily",
      },
    ],
  };

  const buildFintechFutureData = {
    heading:
      "Aggregate <span class='highlighted-subsection-header'>Financial Data</span> Instantly",
    tagline: "",
    items: [
      {
        imageSrc: "/images/fast-forward.svg",
        title: "Faster<br/>go-to-market",
        description:
          "Go live within hours and worry less about integrations using our plug-and-play APIs & SDKs.",
      },
      {
        imageSrc: "/images/reduce-fraud.svg",
        title: "Reduce<br/>Frauds",
        description:
          "Authenticate User Identity and reduce financial fraud using information pulled from Credit Bureau.",
      },
      {
        imageSrc: "/images/icons/onboard.svg",
        title: "Quick<br/>Onboarding",
        description:
          "Automatically extracting data from user’s KYC documents help in an accelerated and faster onboarding process.",
      },
    ],
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
    ctaButtonLink: requests.DOC_BYTES,
    newTab: true,
  };

  const recommendedPagesData = [
    {
      title: "Credit Bureau",
      description:
        "Evaluate the creditworthiness of your customers before lending & minimize the risk of default using our Credit Bureau APIs.",
      pageLink: "/resources/credit-bureau-api",

      imageSrc: "/images/resources/credit-bureau.svg",
    },
    {
      title: "KYC & Onboarding",
      description:
        "Digitally onboard users by conducting instant background verifications with real-time KYC checks.",
      pageLink: "/products/kyc-onboarding",
      imageSrc: "/images/resources/kyc-onboarding.svg",
    },
    {
      title: "Phone Number Intelligence",
      description:
        "Find, verify, and fetch multiple data points associated with a mobile number, including the Full Name, UPI ID, IFSC code, and more.",
      pageLink: "/resources/phone-number-intelligence",
      imageSrc:
        "/images/resources/phone-number-intelligence/phone-number-intelligence.svg",
    },
  ];

  return (
    <div className={styles["enach-container"]}>
      <Head>
        <title>Bytes | Pull Secure Credit & Customer Data | Decentro</title>
        <meta
          property="og:title"
          content="Bytes | Pull Secure Credit & Customer Data | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/financial-services"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/products/financial-services"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Pull Secure Credit and Customer data of an organization from various data sources and aggregate financial data quickly. Use Decentro's Bytes and get started today."
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["enach"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <DataPullAPIs />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        <FinancialServicesInteractions />
        {/* <FinancialServicesInteractions header={"Credit Report"} /> */}
        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
      <RecommendedPages data={recommendedPagesData} />
    </div>
  );
};

export default FinancialServices;
