import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/aadhaar-verification.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../../components/use-cases/use-cases";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import IndustryUseCases from "../../../components/industry-usecases/industry-usecases";
import DescriptiveItemList from "../../../components/descriptive-item-list/descriptive-item-list";
import ResourcesMethodology from "../../../components/resources-methodology/resources-methodology";
import WhyDecentro from "../../../components/why-decentro/why-decentro";
import ResourcesSectors from "../../../components/resources-sectors/resources-sectors";

function AadhaarVerification() {
  const bannerData = {
    heading:
      "<span class='highlighted-heading'>Aadhaar Verification API</span>",
    tagline:
      "Conduct instant Aadhaar Verification for customers and onboard users seamlessly",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/aadhaar-verification/banner.svg",
    altText: "Aadhaar Verification API",
    DBackground: true,
  };

  const useCasesData = {
    heading: "Key Features Of <span>Aadhaar Verification API</span>",
    tagline: "",
    block1: [
      {
        heading: "Real-time<br/>Aadhaar verification",
        paragraph:
          "Verify Aadhaar details like Name, Address, Gender, DOB and photo in a few seconds.",
        imageSrc: "/images/resources/aadhaar-verification/clipboard.svg",
      },
      {
        heading: "Enhanced<br/>Fraud Detection",
        paragraph:
          "Drive better fraud detection by thwarting forged documents using the Aadhaar verification API.",
        imageSrc: "/images/resources/aadhaar-verification/fraud.svg",
      },
      {
        heading: "Accurate<br/>Aadhaar details",
        paragraph:
          "Avoid incomplete/wrong Aadhaar details so as to pose issues to customers who want to avail services from banks or other financial institutions.",
        imageSrc: "/images/resources/aadhaar-verification/accurate-details.svg",
      },
    ],
    block1extra: [
      {
        heading: "Seamless<br/>Integration",
        paragraph:
          "The API offers seamless integration with existing applications and systems, making it easy for businesses to incorporate Aadhaar verification and KYC capabilities into their workflows without disrupting existing processes.",
        imageSrc: "/images/resources/aadhaar-verification/integration.svg",
      },
      {
        heading: "Scalability &<br/>Performance",
        paragraph:
          "The API offers seamless integration with existing applications and systems, making it easy for businesses to incorporate Aadhaar verification and KYC capabilities into their workflows without disrupting existing processes.",
        imageSrc: "/images/resources/aadhaar-verification/line.svg",
      },
      {
        heading: "Compliance &<br/>Security",
        paragraph:
          "The API offers seamless integration with existing applications and systems, making it easy for businesses to incorporate Aadhaar verification and KYC capabilities into their workflows without disrupting existing processes.",
        imageSrc: "/images/resources/aadhaar-verification/shield.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const howCanDecentroHelpData = {
    headingLight: "Aadhaar verification API for your business ",
    headingBold: "- The Decentro Edge",
    tagline: "",
    bulletPointsHeader: "Why Decentro’s APIs for Aadhaar verification?",
    bulletPoints: [
      {
        text: "Verify customers on the fly while driving accuracy and speed for onboarding and transactions.",
      },
      {
        text: "Help businesses increase their operational efficiency and reduce the risk of errors caused by manual processing.",
      },
      {
        text: "Save on the hefty fees you otherwise have to pay payment gateways for each transaction.",
      },
      {
        text: "Seamless integration with existing systems, making it easy for businesses to incorporate Aadhaar verification and KYC capabilities into their existing workflows.",
      },
      {
        text: "Handle high volumes of service requests with our scalable APIs, ensuring reliable performance and quick response times, especially during peak times.",
      },
      {
        text: "Our APIs are fully compliant with all KYC, UIDAI, and other regulatory requirements.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Decentro’s APIs & Product Guides",
        linkText: "API Documentation",
        link: "https://docs.decentro.tech/docs/overview?_gl=1*19nubfq*_ga*NDE4Njc0MjY2LjE3MTM0MjI4Mjc.*_ga_6NBW6WWGPQ*MTcxMzUyMjY1My44LjEuMTcxMzUyNzYyMi40OS4wLjA",
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Robust and efficient solution built to ensure secure transactions.<br/><span>Sign-up Today, and Go Live Tomorrow!</span>",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const tableOfContentsData = [
    {
      text: "What is Aadhaar and Why Use Aadhaar Verification",
      id: "whatIsAadhaar",
    },
    {
      text: "What is Aadhaar Verification API",
      id: "whatIsAadhaarAPI",
    },
    {
      text: "Types of Aadhaar Verification APIs",
      id: "typesSection",
    },
    {
      text: "Methodology",
      id: "methodSection",
    },
    {
      text: "Sectors that can use Aadhaar Verification API",
      id: "sectorsSection",
    },
    {
      text: "Key Features",
      id: "keyFeatures",
    },
    {
      text: "Using Decentro’s APIs for Aadhaar Verification",
      id: "howCanDecentroHelp",
    },
    {
      text: "Aadhaar Verification - FAQs",
      id: "commonlyAskedQuestions",
    },
  ];

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
      query: "How do I verify the authenticity of an Aadhaar card?",
      solution:
        "You can simply enter the Aadhaar details of the individual and verify their details using Decentro’s Aadhaar verification API instantly.",
      bulletPoints: [],
    },
    {
      query: "What are the details needed for Aadhar verification?",
      solution:
        "You just need the 12-digit Aadhaar number of an individual to verify their details and authenticate them for onboarding.",
      bulletPoints: [],
    },
    {
      query: "How much time does it take to verify an Aadhar card?",
      solution:
        "Decentro’s Aadhaar verification API allows you to verify and authenticate Aadhaar cards in a few seconds.",
    },
    {
      query:
        "What are the details that are available after verifying an Aadhaar card?",
      solution:
        "Once successfully validated, the platform will have the below details as available with UIDAI:",
      bulletPoints: [
        { text: "Reference number" },
        { text: "Full name" },
        { text: "Address" },
        { text: "Gender" },
        { text: "Photo" },
        { text: "Date of Birth" },
        { text: "Post Office" },
        { text: "Mobile number (hashed)" },
        { text: "Email (hashed)" },
        {
          text: "Share Code and Aadhaar XML Zip (Base64) if share_code parameter is entered by the customer",
        },
      ],
    },
    {
      query:
        "Is there a limit to the number of Aadhaar cards that can be verified in a day?",
      solution:
        "No, there is no limit to the number of Aadhaar cards that can be authenticated in a day.",
    },
  ];

  const inlineImageAndParagraphData = {
    headingLight: "What is",
    headingBold: " Aadhaar &",
    extraHeadingText: "Why Use <span>Aadhaar Verification?</span>",
    text: "Aadhaar number is a unique 12-digit number based on an individual’s biometric and demographic data and can be used to verify their identity. Aadhaar Verification is a crucial part of the customer onboarding process for a number of sectors like NBFCs, banks, lending companies, and insurance companies for fraud prevention.",
    imageSrc: "/images/resources/aadhaar-verification/what-is-aadhaar.svg",
    altText: "Aadhaar Verification API",
    titleText: "Aadhaar Verification API",
  };
  const inlineImageAndParagraphData1 = {
    headingLight: "What is ",
    headingBold: "Aadhaar Verification API?",
    extraHeadingText: "",
    text: "The Aadhaar Verification API is a powerful tool designed to confirm the authenticity of an Aadhaar card without having to ask the customer for the document or having to verify the same using an offline process. All that is required is the Aadhaar number of the individual to take the verification forward.",
    imageSrc:
      "/images/resources/aadhaar-verification/aadhaar-verification-api.svg",
    altText: "Aadhaar Verification API",
    titleText: "Aadhaar Verification API",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-aadhaar-services",
    CTAButtonText: "View Product Guide",
  };
  const typesData = {
    heading:
      "Types of <span class='highlighted-subsection-header'>Aadhaar Verification APIs</span>",
    tagline: "",
    headingStyleThemeBlue: true,
    items: [
      {
        imageSrc:
          "/images/resources/aadhaar-verification/basic-aadhaar-kyc.svg",
        title: "Basic Aadhaar KYC",
        description:
          "Simple plug-and-play APIs or SDKs help you go live within hours and worry less about integrations.",
      },
      {
        imageSrc: "/images/resources/aadhaar-verification/otp.svg",
        title: "OTP-based Paperless eKYC",
        description:
          "OTP-based verification to fetch details for POI and POA verification.",
      },
      {
        imageSrc: "/images/resources/aadhaar-verification/paperless.svg",
        title: "Aadhaar Paperless Offline eKYC",
        description:
          "Consent-based verification service to fetch e-Aadhaar details using Aadhaar XML file.",
      },
      {
        imageSrc: "/images/resources/aadhaar-verification/verification.svg",
        title: "Aadhaar Verification via DigiLocker",
        description:
          "Verifying documents fetched from DigiLocker using an OTP.",
      },
    ],
  };

  const methodData = [
    {
      imageSrc: "/images/icons/signup.svg",
      header: "Step 1",
      description: "Input the Aadhaar number of the customer",
    },
    {
      imageSrc: "/images/resources/aadhaar-verification/generate.svg",
      header: "Step 2",
      description:
        "Generate and validate Aadhaar number using the specified verification type",
    },
    {
      imageSrc: "/images/resources/aadhaar-verification/response.svg",
      header: "Step 3",
      description:
        "Generate Aadhaar verification response using verification API",
    },
    {
      imageSrc: "/images/resources/aadhaar-verification/extract.svg",
      header: "Step 4",
      description:
        "Extract and verify multiple data points to authenticate customer identity",
    },
  ];

  const sectorData = [
    {
      imageSrc: "/images/resources/aadhaar-verification/bank.svg",
      title: "Banks / NBFCs",
    },
    {
      imageSrc: "/images/resources/aadhaar-verification/insurance.svg",
      title: "Insurance companies",
    },
    {
      imageSrc: "/images/resources/aadhaar-verification/lending.svg",
      title: "Lending platforms",
    },
    {
      imageSrc: "/images/resources/aadhaar-verification/investment.svg",
      title: "Investment platforms",
    },
    {
      imageSrc: "/images/resources/aadhaar-verification/telecom.svg",
      title: "Telecom service providers",
    },
    {
      imageSrc: "/images/resources/aadhaar-verification/travel.svg",
      title: "Travel service providers",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          Aadhaar Verification - Verify Users With Instant Aadhaar Checks |
          Decentro
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/aadhaar-verification"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/aadhaar-verification"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Streamline Customer Onboarding with Decentro’s Aadhaar Verification APIs. Verify details in seconds with 4 simple steps. Get started with our KYC APIs today"
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Aadhaar Verification - Verify Users With Instant Aadhaar Checks | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["bulk-payouts-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["gst-details"]}>
          <InlineImageAndParagraph
            id="whatIsAadhaar"
            data={inlineImageAndParagraphData}
            reverse={false}
          />
          <InlineImageAndParagraph
            id="whatIsAadhaarAPI"
            data={inlineImageAndParagraphData1}
            reverse={true}
          />
        </div>
        <DescriptiveItemList data={typesData} id="typesSection" />
        <div className={styles["leverage-bulk-payouts"]} id="methodSection">
          <h2>
            <span>Methodology</span>
          </h2>
          <p>Execute Aadhaar verification in 4 simple steps</p>
          <div className={styles["leverage-bulk-payouts-content"]}>
            <ResourcesMethodology data={methodData} itemCount={4} />
          </div>
        </div>

        <div className={styles["sectors-section"]} id="sectorsSection">
          <h2>
            Sectors that can use <span>Aadhaar Verification API</span>
          </h2>
          <ResourcesSectors data={sectorData} />
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />

        <UseCases id="keyFeatures" data={useCasesData} />

        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={howCanDecentroHelpData}
        />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />
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
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </React.Fragment>
  );
}

export default AadhaarVerification;
