import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../../sgRequests";
import urls from "../../../sgUrls";
import ProductBanner from "../../../components-sg/product-banner/product-banner";
const InlineImageAndParagraph = dynamic(() =>
  import(
    "../../../components-sg/inline-image-and-paragraph/inline-image-and-paragraph"
  )
);
const WhyDecentroComparison = dynamic(() =>
  import(
    "../../../components-sg/why-decentro-comparison/why-decentro-comparison"
  )
);
const EmailRegBanner = dynamic(() =>
  import("../../../components-sg/email-reg-banner/email-reg-banner")
);
import styles from "../../../styles/page-styles-sg/resources.module.scss";
import TextAndButtonBanner from "../../../components-sg/text-and-button-banner/text-and-button-banner";

const Resources = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>Resources</span>",
    tagline:
      "Learn in-depth about how various payment APIs can empower your business along with quick info-nuggets on how these function.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/resources.mp4",
    altText:
      "Learn in-depth about how various payment APIs can empower your business along with quick info-nuggets on how these function.",
    titleText: "Resources",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/sg/validate-id/banner-bg.svg",
  };
  const resourcesGuideFast = {
    headingLight: "",
    headingBold: "FAST",
    text: "Fast & Secure Transactions, generally known as FAST is a mode to instantly transfer funds between participating banks in Singapore securely. This electronic funds transfer service makes it easy and convenient for customers to manage their finances in one place.",
    imageSrc: "/images/sg/resources/fast.svg",
    altText: "FAST",
    navigationLinkText: "Explore Now",
    navigationLink: urls.RESOURCES_FAST,
  };
  const resourcesGuidePayNow = {
    headingLight: "",
    headingBold: "PayNow",
    text: "PayNow is a peer-to-peer fund transfer service that enables all users of the participating banks and NFIs to settle funds via their bank accounts or e-wallets to another via Virtual Payment Address, mobile number, or Singapore NRIC/FIN instantly.",
    imageSrc: "/images/sg/resources/paynow.svg",
    altText: "PayNow",
    navigationLinkText: "Explore Now",
    navigationLink: urls.RESOURCES_PAYNOW,
  };

  const whyDecentroData = [
    { "Setup Fees": ["High (2K - 10K USD)", "Completely FREE"] },
    { Timelines: ["3-4 Months", "~ 2 Weeks"] },
    // { "Settlement Times": ["Atleast T-1 to T+2", "Real-time Settlements"] },
    {
      "Service Provider": [
        "High reliance on single service provider and bank",
        "Backend powered by multiple banks with switchability",
      ],
    },
    {
      "Customer Service": [
        "Turnaround time of 1-2 working days atleast",
        "Turnaround within 1-2 hours",
      ],
    },
    {
      "Scalability & Flexibility": [
        "Difficult to scale due to a rigid underlying structure",
        "Customizable APIs and seamless scalability",
      ],
    },
    {
      Advantages: [
        "",
        ["Unlimited rollover of unused API hits", "Global from The Get Go"],
      ],
    },
  ];

  const subscribeBoxText = {
    heading:
      "Wish To Get These Resources Promptly In Your Inbox? Consider It Done!",
    tagline: "Delivered Fortnightly. No Spam, Our Word!",
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  return (
    <React.Fragment>
      <Head>
        <title>Resources - Pocket Guides & API Handbooks | Decentro</title>
        <link rel="canonical" href={`${urls.ROOT_URL}resources/`} />
        <link
          rel="alternate"
          href="https://decentro.tech/global/resources"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Learn in-depth about how various banking & financial APIs can empower your business."
        />
      </Head>
      <div className={styles["resources"]}>
        <ProductBanner data={bannerData} />
        <div className={styles["resources-guide"]}>
          <h2>
            Pocket Guides &{" "}
            <span class={styles["highlighted-subsection-header"]}>
              API-Handbooks
            </span>
          </h2>
          <div className={styles["resources-guide-content"]}>
            <InlineImageAndParagraph
              data={resourcesGuideFast}
              reverse={false}
            />
            <InlineImageAndParagraph
              data={resourcesGuidePayNow}
              reverse={true}
            />
          </div>
        </div>
        <WhyDecentroComparison data={whyDecentroData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        {/* <EmailRegBanner data={subscribeBoxText} /> */}
      </div>
    </React.Fragment>
  );
};

export default Resources;
