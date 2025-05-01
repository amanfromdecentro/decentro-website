import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
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
// const ScanAndExtractInteractions = dynamic(() =>
//   import("../../../components/interactions/scan-and-extract")
// );
const ClientLogoCarousel = dynamic(() =>
  import("../../../components/client-logo-carousel/client-logo-carousel")
);
import styles from "../../../styles/page-styles/validateid.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import ScanAndExtractInteractions from "../../../components/interactions/scan-and-extract";

const ScanAndExtract = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "<span class='highlighted-heading'>Scan and Extract</span><br/> KYC documents instantly",
    subHeading: "",
    tagline:
      "Automatically extract KYC ID from customers, partners or businesses’ official documents to reduce manual form-filling errors",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/scan-and-extract-video.mp4",
    altText: "Collect Funds Seamlessly via Virtual Accounts",
    titleText: "VA Collections",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/scan-and-extract/banner-bg.svg",
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
        imageSrc: "/images/icons/reduce-fraud.svg",
        title: "Reduce Frauds",
        description:
          "Authenticate user identity and reduce financial fraud using scanned Information from KYC documents.",
      },
      {
        imageSrc: "/images/workload.svg",
        title: "Reduced Manual Workload",
        description:
          "Enable better user experience & reduce manual workload significantly by automatic KYC data extraction.",
      },
      {
        imageSrc: "/images/icons/reduced-dropoffs.svg",
        title: "Reduced Drop-offs",
        description:
          "Help reduce user drop-offs by preventing manual errors while entering sensitive information.",
      },
      {
        imageSrc: "/images/icons/onboard.svg",
        title: "Quick Onboarding",
        description:
          " Accelerate your onboarding process by automatically extracting data from your users’ KYC documents.",
      },
      {
        imageSrc: "/images/icons/scale-quickly.svg",
        title: "Scale Quickly",
        description:
          "Focus on growing your core business while our team works to maintain your integrations.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/gaming.svg",
        title: "Trading &<br/>Gaming Platforms",
        description:
          "Perform user identity details check and flag malicious activities while verifying their legality.",
      },
      {
        imageSrc: "/images/icons/marketplace.svg",
        title: "Marketplaces",
        description:
          "Run background checks on your customers or partners with a fully automated onboarding process.",
      },
      {
        imageSrc: "/images/icons/rent.svg",
        title: "Rental Platforms",
        description:
          " Authenticate users’ credentials and prevent malpractices, whether you’re renting out cars, hotels, or flats.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Improved Data Accuracy",
        description:
          "Reduce errors and queries encountered with incorrect information entered as data is automatically picked from government documents",
      },
      {
        title: "Real-Time Verification",
        description:
          "Validate the user KYC ID extracted from the document in real-time from the source",
      },
      {
        title: "Reads all Major Documents",
        description:
          "Pull data from almost every government-approved document like PAN, Aadhaar, Driving License, Voter ID, and Passport, using Scan & Extract",
      },
      {
        title: "Image Quality Checks",
        description:
          "Ensure image quality by using presets for flagging image attributes like quality, blurriness, photocopy that might not be able to give accurate results with OCR API",
      },
      {
        title: "Document Classification",
        description:
          "Enable OCR to perform accurately by knowing the correct document type without having to ask the user to enter the document type or handle the same at your end",
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
      headingLight: "Improved Data Accuracy",
      headingBold: "",
      text: "Retrieve accurate data from government documents to reduce inaccuracies related to manual information entry.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/scan-and-extract/Improved+Data+Accuracy.json",
    },
    {
      headingLight: "Real-Time Verification",
      headingBold: "",
      text: "Validate the user KYC ID extracted from the document from the source in real time.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/scan-and-extract/Real-Time+Verification.json",
    },
    {
      headingLight: "Reads All Major Documents",
      headingBold: "",
      text: "Pull data from almost every government-approved document like PAN, Aadhaar, Driving License, Voter ID, and Passport, using Scan & Extract.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/scan-and-extract/Reads+all+Major+Documents.json",
    },
    {
      headingLight: "Image Quality Checks",
      headingBold: "",
      text: "Ensure image quality by using presets for flagging image attributes like quality, blurriness, and photocopy to enhance the accuracy of OCR API.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/scan-and-extract/Image+Quality+Checks.json",
    },
    {
      headingLight: "Document Classification",
      headingBold: "",
      text: "Enable OCR to categorise and classify documents precisely, enabling organisations to streamline document processing workflows and improve efficiency.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/scan-and-extract/Document+Classification.json",
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
    <div className={styles["scan-and-extract-container"]}>
      <Head>
        <title>Scan and Extract | Get KYC ID from Documents | Decentro</title>
        <meta
          property="og:title"
          content="Scan and Extract | Get KYC ID from Documents | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/scan-and-extract"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/products/scan-and-extract"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Extract KYC ID from customers' and business' documents and reduce manual workload. Achieve faster GTM with Decentro's Scan and Extract KYC APIs. Get started today."
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["scan-and-extract"]}>
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
        <ScanAndExtractInteractions />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
    </div>
  );
};

export default ScanAndExtract;
