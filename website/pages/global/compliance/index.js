import Head from "next/head";
import React from "react";
import ProductBanner from "../../../components-sg/product-banner/product-banner";
import AwardsRecognition from "../../../components-sg/awards-recognition/awards-recognition";
import InlineImageAndParagraph from "../../../components-sg/inline-image-and-paragraph/inline-image-and-paragraph";
import ComplianceContent from "../../../components-sg/compliance-content/compliance-content";
import requests from "../../../sgRequests";
import { clientLogos } from "../../../components-sg/client-logos";

const Compliance = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "<span class='highlighted-heading'>Security & Compliance</span> is at the heart of <span class='highlighted-heading'>everything</span> we do!",
    subHeading: "",
    tagline:
      "Fetch data of an organization or individual from various data sources to serve their financial needs",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/compliance-banner.mp4",
    altText: "Security & Compliance",
    titleText: "Security & Compliance",
    video: true,
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
      // {
      //   imageSrc: "/images/workload.svg",
      //   title: "Reduced<br/>Manual Workload",
      //   description:
      //     "A fully digitalized process helps provide the customers with a better experience and reduces the team’s manual eye-balling efforts.",
      // },
      {
        imageSrc: "/images/icons/onboard.svg",
        title: "Quick<br/>Onboarding",
        description:
          "Automatically extracting data from user’s KYC documents help in an accelerated and faster onboarding process.",
      },
      // {
      //   imageSrc: "/images/icons/scale-quickly.svg",
      //   title: "Scale<br/>Quickly",
      //   description:
      //     "Focus on what matters for you to grow your business while our team does the end work of maintaining the integrations.",
      // },
    ],
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
    // ctaSectionBgColor:
    //   "transparent linear-gradient(80deg, #096EF2 0%, #0092FF 100%) 0% 0% no-repeat padding-box;",
    // contentTextColor: "#FFFFFF",
    // ctaBgColor: "#FFFFFF",
    // ctaTextColor: "#096EF2",
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const behaviorAnalysis = {
    headingLight: "Be Assured!",
    headingBold: "",
    text: "At Decentro, we highly encourage individuals to responsibly disclose any security concerns they come across regarding our products, services, websites, or infrastructure. We are fully dedicated to collaborating with those who report security vulnerabilities in a respectful, constructive, and mutually advantageous way that ensures the safety of our customers. If you have identified a security bug, we kindly request that you reach out to us at <a href='mailto:hello@decentro.tech'><strong>hello@decentro.tech</strong></a> for reporting purposes.",
    imageSrc: "/images/compliance/be-assured.svg",
    altText: "Be Assured",
    maxWidth: "250px",
  };

  return (
    <div className="compliance-container">
      <Head>
        <title>Security & Compliance | Decentro</title>
        <link rel="canonical" href="https://decentro.tech/global/compliance" />
        <link
          rel="alternate"
          href="https://decentro.tech/global"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Fetch data of an organization or individual from various data sources to serve their financial needs."
        />
        <meta name="keywords" content="" />
        <meta property="og:title" content=" Security & Compliance | Decentro" />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className="compliance">
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ComplianceContent />
        <AwardsRecognition />
        <InlineImageAndParagraph
          data={behaviorAnalysis}
          reverse={true}
          boldBlack
        />
        {/* <TextAndButtonBanner data={textAndButtonBannerData} /> */}
      </div>
    </div>
  );
};

export default Compliance;
