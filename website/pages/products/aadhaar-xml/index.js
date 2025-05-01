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
const InlineItemAndParagrah = dynamic(() =>
  import(
    "../../../components/inline-item-and-paragraph/inline-item-and-paragraph"
  )
);
const TestimonialsCarousel = dynamic(() =>
  import("../../../components/testimonials-carousel/testimonials-carousel")
);
const ClientLogoCarousel = dynamic(() =>
  import("../../../components/client-logo-carousel/client-logo-carousel")
);
import styles from "../../../styles/page-styles/aadhaarxml.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";

const AadhaarXML = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Verify users via Aadhaar <span class='highlighted-heading'>Paperless Offline e-kyc</span>",
    subHeading: "",
    tagline:
      "Identify and onboard users with data fetched from UIDAI, without requesting document upload",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/aadhaar-xml-video.mp4",
    altText: "Collect Funds Seamlessly via Virtual Accounts",
    titleText: "VA Collections",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/payouts/banner-bg.svg",
  };

  const buildFintechFutureData = {
    heading:
      "Build the <span class='highlighted-subsection-header'>Future of Fintech</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/faster-goto-market.svg",
        title: "Faster Go-to-Market",
        description:
          "Go live within hours via simple plug-and-play APIs or SDKs and worry less about integration.",
      },
      {
        imageSrc: "/images/icons/reduced-dropoffs.svg",
        title: "Reduced Drop-offs",
        description:
          "Lower customer drop-offs by cutting down the verification process to a single Aadhaar-based OTP verification.",
      },
      {
        imageSrc: "/images/icons/onboard.svg",
        title: "Quick Onboarding",
        description:
          "Extract data from users’ Aadhaar XML files automatically in an accelerated onboarding process.",
      },
      {
        imageSrc: "/images/icons/scale-quickly.svg",
        title: "Scale Quickly",
        description:
          "Focus on growing your core business while our team works to maintain your integrations.",
      },
      {
        imageSrc: "/images/icons/low-acq-cost.svg",
        title: "Lower Customer Acquisition Costs",
        description:
          "Cut down on your expenditure cost towards onboarding a customer significantly.",
      },
      {
        imageSrc: "/images/icons/compliance.svg",
        title: "Improved Compliance",
        description:
          "Drive compliance w.r.t KYC master directions by regulators via Aadhaar offline KYC",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/invest.svg",
        title: "Investment platforms",
        description:
          "Verify user identity before customers access your platform, with their necessary background information.",
      },
      {
        imageSrc: "/images/icons/insurance-premium.svg",
        title: "Insurance providers",
        description:
          "Verify customers before onboarding through KYC verification guidelines laid by IRDAI and SEBI.",
      },
      {
        imageSrc: "/images/icons/gaming.svg",
        title: "Trading &<br/>Gaming",
        description:
          "Confirm end users’ details and understand potential customers’ activities while verifying their legality.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Seamless User Authentication",
        description:
          "Search and easily download KYC records and access them after authentication",
      },
      {
        title: "Reduced Time for Verification",
        description:
          "Reduce turnaround time on KYC by avoiding the need to conduct various KYC checks by centralising the process",
      },
      {
        title: "Single Point Verification",
        description:
          "Access KYC records via a single KIN (KYC Identification Number) issued by CERSAI to users who have completed their CKYC formalities",
      },
      {
        title: "Multi-factor Verification",
        description:
          "Download CKYC and let Decentro scan and extract the data from documents to check the veracity of documents",
      },
      {
        title: "Fraud Protection",
        description:
          "Verify users/merchants towards the first level of user onboarding, helping prevent fraud",
      },
      {
        title: "CKYC Upload",
        description:
          "Help users update their government documents in the CKYC repository through a simple dashboard",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription: "",
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

  const initialData = [
    {
      headingLight: "Seamless User Authentication",
      headingBold: "",
      text: "Search and download KYC records and access them after authentication easily.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/aadhaar-xml/Seamless+User+Authentication.json",
    },
    {
      headingLight: "Single Point Verification",
      headingBold: "",
      text: "Access KYC records via a single KIN (KYC Identification Number) issued by CERSAI to users who have completed their CKYC formalities.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/aadhaar-xml/Single+Point+Verification.json",
    },
    {
      headingLight: "Multi-factor Verification",
      headingBold: "",
      text: "Download CKYC and let the API scan and extract the data from the documents to check their veracity.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/aadhaar-xml/Multi-factor+Verification.json",
    },
    {
      headingLight: "Fraud Protection",
      headingBold: "",
      text: "Verify users/merchants at the first level of user onboarding to eliminate fraud right at source",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/aadhaar-xml/Fraud+Protection.json",
    },
    {
      headingLight: "CKYC Upload",
      headingBold: "",
      text: "Help users update their government documents in the CKYC repository through a simple dashboard.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/aadhaar-xml/CKYC+Upload.json",
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
    <div className={styles["digilocker-container"]}>
      <Head>
        <title>Aadhaar XML | Verify Users via UIDAI Data | Decentro</title>
        <meta
          property="og:title"
          content="Aadhaar XML | Verify Users via UIDAI Data | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/aadhaar-xml"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/products/aadhaar-xml"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Enable user verification and onboarding with data fetched from UIDAI. Speed up onboarding by a huge margin and scale up quickly using Decentro's Aadhaar XML APIs. Get started today."
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["digilocker"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        {/* <InlineItemAndParagrah data={possibilitiesData} /> */}
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
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
    </div>
  );
};

export default AadhaarXML;
