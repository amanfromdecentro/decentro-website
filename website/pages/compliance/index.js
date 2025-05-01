import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../requests";
import urls from "../../urls";

import ProductBanner from "../../components/product-banner/product-banner";
import { clientLogos } from "../../components/client-logos";

const TextAndButtonBanner = dynamic(
  () =>
    import("../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const ComplianceContent = dynamic(() =>
  import("../../components/compliance-content/compliance-content")
);
const InlineGrey = dynamic(() =>
  import("../../components/inline-grey/inline-grey")
);
const AwardsRecognition = dynamic(() =>
  import("../../components/awards-recognition/awards-recognition")
);
const InlineImageAndParagraph = dynamic(() =>
  import(
    "../../components/inline-image-and-paragraph/inline-image-and-paragraph"
  )
);

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
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/compliance.mp4",
    altText: "Security & Compliance",
    titleText: "Security & Compliance",
    video: true,
    leftImg: "/images/compliance/iso.svg"
  };

  const complianceData = {
    img: "/images/compliance/TGCSB-logo.png",
    text: "Please note that Any form of gaming activity both online and offline wherein money or any stake are involved, is strictly prohibited under the Telangana Gaming (Amendment) Act, 2017, within the region of Telangana. Anyone found violating any provisions under the said act is subjected to prosecution – TGCSB."
  }

  const textAndButtonBannerData = {
    ctaTitle: "Found a Security Issue with Decentro?",
    ctaDescription: "Report the issue and be a part of our Bug Bounty Program",
    ctaButtonText: "Get Started",
    ctaButtonLink: urls.BUG_REPORT_POLICY,
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const behaviorAnalysis = {
    headingLight: "Be Assured!",
    headingBold: "",
    text: "At Decentro, we highly encourage individuals to responsibly disclose any security concerns they come across regarding our products, services, websites, or infrastructure. We are fully dedicated to collaborating with those who report security vulnerabilities in a respectful, constructive, and mutually advantageous way that ensures the safety of our customers. If you have identified a security bug, we kindly request that you reach out to us at <a href='mailto:infosec@decentro.tech'><strong>infosec@decentro.tech</strong></a> for reporting purposes.",
    imageSrc: "/images/compliance/be-assured.svg",
    altText: "Be Assured",
    maxWidth: "250px",
    imageAlignEnd: true,
    textWidth: "60%",
    imageWidth: "30%",
  };

  return (
    <div className="compliance-container">
      <Head>
        <title>Security & Compliance | Decentro</title>
        <link rel="canonical" href="https://decentro.tech/compliance" />
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
        <InlineGrey data={complianceData} />
        <div className="compliance-assured">
          <InlineImageAndParagraph
            data={behaviorAnalysis}
            reverse={true}
            boldBlack
          />
        </div>
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
    </div>
  );
};

export default Compliance;
