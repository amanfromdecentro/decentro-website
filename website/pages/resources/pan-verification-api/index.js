import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/enach-apis.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../../components/use-cases/use-cases";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import utmtags from "../../../utmTags";
import InlineImageTextMap from "../../../components/inline-image-text-map/inline-image-text-map";

const PanVerification = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>PAN Verification API</span>",
    tagline:
      "Initiate swift and reliable PAN verification to validate the identity of an individual or business in real time",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/pan-verification/banner.svg",
    altText: "PAN Verificationn API",
    DBackground: true,
  };

  const inlineImageTextMapData = {
    heading: "<span>Methodology</span>",
    tagline:
      "Validate and Verify the identities of entities and individuals in Three Easy Steps",
    items: [
      {
        imageSrc: "/images/resources/pan-verification/upload-window-image.svg",
        altText: "Upload Image",
        itemTitle: "",
        itemDescription: "Share the PAN Number or Upload the PAN Image",
      },
      {
        imageSrc: "/images/resources/pan-verification/database-image.svg",
        altText: "Real time database hit",
        itemTitle: "",
        itemDescription: "A real-time hit on the database",
      },
      {
        imageSrc: "/images/resources/pan-verification/verification-image.svg",
        altText: "verified",
        itemTitle: "",
        itemDescription:
          "Instant PAN Verification, and you’re ready with the response",
      },
    ],
  };

  const inlineImageTextMapData2 = {
    heading: "Where You Can <span>Use</span> It",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/pan-verification/identity-proof.svg",
        altText: "As identity proof for individuals",
        itemTitle: "As identity proof for individuals",
        itemDescription:
          "As a verified proof of identity for bank account opening, lending journeys, employee onboarding, insurance journeys and many more",
      },
      {
        imageSrc: "/images/resources/pan-verification/establishment.svg",
        altText: "Establishment proof for merchants/entities",
        itemTitle: "Establishment proof for merchants/entities",
        itemDescription:
          "As a verified proof of establishment for account opening, lending and insurance journeys, store onboarding, and much more",
      },
    ],
  };

  const useCasesData = {
    headingLight: "Key features of",
    headingBold: " PAN Verification API",
    tagline: "",
    block1: [
      {
        heading: "Real-Time<br/>Verification",
        paragraph:
          "Operate in real-time against the latest updated PAN database to know validity, 24x7",
        imageSrc: "/images/resources/pan-verification/shield.svg",
      },
      {
        heading: "Bulk PAN<br/>Verification",
        paragraph:
          "Do a single PAN verification or bulk PAN verifications in one go, via APIs",
        imageSrc: "/images/resources/pan-verification/bulk-pan-validation.svg",
      },
      {
        heading: "Fraud Detection",
        paragraph:
          "Secure and transparent access to data, eliminating the risk of identity fraud while onboarding",
        imageSrc: "/images/resources/pan-verification/fraud.svg",
      },
    ],
    block1extra: [
      {
        heading: "Instant Checks",
        paragraph:
          "Validate merchant/customer authenticity via selective credentials ",
        imageSrc: "/images/resources/pan-verification/instant-checks.svg",
      },
      {
        heading: "Multi-Level<br/>Validation",
        paragraph:
          "Validate the nature of the card holder between - Individual, HUF, Company, Firm, Partnership, Trust, Society, Business, Government, etc",
        imageSrc:
          "/images/resources/pan-verification/multi-level-validation.svg",
      },
      {
        heading: "Automated<br/>Workflows",
        paragraph: "Easy-to-integrate APIs for your existing workflows",
        imageSrc: "/images/resources/pan-verification/automated.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const tableOfContentsData = [
    { text: "Methodology", id: "methodology" },
    { text: "The Need For PAN Verification", id: "needForPANVerfication" },
    { text: "Key Features Of PAN Verification API", id: "KeyFeatures" },
    { text: "Where You Can Use It", id: "whereUse" },
    {
      text: "PAN verification For Your Business - How Can Decentro Help?",
      id: "howCanDecentroHelp",
    },
    { text: "PAN Verification - FAQs", id: "commonlyAskedQuestions" },
  ];

  const learnMoreData1 = {
    text: "",
    ctaButtonText: "View Product Guide",
    newTab: true,
    ctaButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities#-id-converters",
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };
  const textAndButtonBannerData2 = {
    text: "Robust and efficient APIs to <span>prevent fraud</span> before it strikes",
    ctaButtonText: "Get Started",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const howCanDecentroHelpData = {
    headingLight: "PAN verification For Your Business",
    headingBold: "- How Can Decentro Help",
    tagline: "",
    bulletPointsHeader: "Why Decentro’s APIs PAN verification?",
    bulletPoints: [
      {
        text: "Single API for validating nature of the card holder instantly.",
      },
      {
        text: "Inbuilt approval flow and beneficiary name verification.",
      },
      {
        text: "Flexible API-based flow that can be embedded easily in your existing workflows.",
      },
      {
        text: "Verify accounts on the fly while maintaining the accuracy and speed of onboarding and transactions.",
      },
      {
        text: "Leverage multi-bank architecture in the backend so that any unexpected downtimes, black swan events, or volume spikes will not impact your business.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link: "https://docs.decentro.tech/docs/",
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Real-time Payments. 5X Reduced Collection Costs. eNach APIs For Your Business<br/><span>Sign-up Today, Go Live Tomorrow!</span>",
    ctaButtonText: "Get Started",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const recommendedPagesData = [
    {
      title: "CKYC",
      description:
        "Learn the essentials of Central KYC, or CKYC, and find out how your business can leverage CKYC APIs for financial simplicity, better customer experience, and better workflows.",
      pageLink: "/resources/ckyc-apis/",
      imageSrc: "/images/resources/ckyc.svg",
    },
    {
      title: "GST",
      description:
        "Enrich & augment your data for vendor financing, bill discounting, and more seamlessly while serving your SME customers and partners using our GST APIs.",
      pageLink: "/resources/goods-and-services-tax-gst-api/",
      imageSrc: "/images/resources/gst.svg",
    },
  ];

  const accordionData = [
    {
      query: "What is PAN Card verification?",
      solution:
        "PAN Card verification refers to the process of confirming the authenticity and validity of a Permanent Account Number (PAN) issued by the Income Tax Department of India. PAN is a unique 10-character alphanumeric identifier assigned to individuals, companies, and entities conducting financial transactions in India.",
    },
    {
      query: "Are there any charges applicable for PAN Card Verification?",
      solution:
        "To know more about the transaction charges, drop us at hello@decentro.tech, and we’ll gladly assist you.",
    },
    {
      query: "Why is it necessary to do PAN Verification?",
      solution:
        "PAN verification is essential for various financial activities, including opening bank accounts, filing income tax returns, conducting high-value transactions, applying for loans, and participating in the stock market.",
    },
    {
      query:
        "What are the details that I will be able to see on verifying a PAN?",
      solution:
        "PAN verification solution will return whether the PAN is valid or not along with the following details (if valid):",
      bulletPoints: [
        { text: "PAN number" },
        { text: "Name provided" },
        { text: "Verification ID" },
        { text: "PAN type" },
        { text: "Name registered" },
      ],
    },
    {
      query:
        "Is there any limit to the number of PAN cards that can be verified in a day?",
      solution:
        "No, there is no limit to the number of PAN cards that can be verified in a day.",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>PAN Verification API for Identity Validation | Decentro</title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/pan-verification-api/"
        />
        <meta
          name="description"
          content="Validate individual or business identity with our PAN Verification APIs. With Decentro’s APIs, integrate PAN Verification into your onboarding process within weeks!"
        />
        <meta name="keywords" content="PAN Validation APIs" />
        <meta
          property="og:title"
          content="PAN Verification API for Identity Validation | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["enach-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <InlineImageTextMap data={inlineImageTextMapData} id="methodology" />

        <div
          className={styles["special-info-section"]}
          id="needForPANVerfication"
        >
          <div className={styles["special-info-wrapper"]}>
            <h2>
              The Need For <span>PAN Verification</span>
            </h2>
            <p className={styles["special-info-description"]}>
              All businesses operating in India must obtain a PAN and
              accompanying PAN card. All individuals in India must obtain a PAN
              and accompanying PAN card.
              <br />
              <br />
              The demand for enabling businesses/ vendors/ marketplaces to
              verify the authenticity of the customers has paved the way for PAN
              Verification API Solution – a reliable and efficient tool designed
              to verify the authenticity of PAN Cards. This serves as an
              identification factor and a repository of business/customer
              information that can be used for verification and onboarding.
              <br />
              <br />
              Deploying such a process would make client verification faster,
              more cost-effective, and more secure, owing to the inherent
              security of digital verification. Couple it with the KYC stack to
              make your identity verification and onboarding process seamless
              and instant.
            </p>
            <TextAndButtonBannerTransparent data={learnMoreData1} />
          </div>
        </div>
        <UseCases id="KeyFeatures" data={useCasesData} />
        <InlineImageTextMap data={inlineImageTextMapData2} id="whereUse" />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={howCanDecentroHelpData}
        />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData2} />
        <div
          className={styles["commonly-asked-questions"]}
          id="commonlyAskedQuestions"
        >
          <h2>
            Frequently Asked&nbsp;<span>Questions</span>
          </h2>
          <div className={styles["accordion-list"]}>
            {accordionData.map(function (object, i) {
              return <FaqAccordion key={i} data={object} />;
            })}
          </div>
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </React.Fragment>
  );
};

export default PanVerification;
