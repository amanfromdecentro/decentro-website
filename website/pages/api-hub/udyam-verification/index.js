import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import ProductBanner from "../../../components/product-banner/product-banner";
import dynamic from "next/dynamic";

const UseCases = dynamic(
  () => import("../../../components/use-cases/use-cases"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const BulletPointsAndTextBlock = dynamic(
  () =>
    import(
      "../../../components/bullet-points-text-block/bullet-points-text-block"
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);

const RecommendedPages = dynamic(
  () => import("../../../components/recommended-pages/recommended-pages"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const TextAndButtonBannerTransparent = dynamic(
  () =>
    import(
      "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent"
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);

const InlineImageTextMap = dynamic(
  () =>
    import("../../../components/inline-image-text-map/inline-image-text-map"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const ResourcesMethodology = dynamic(
  () =>
    import("../../../components/resources-methodology/resources-methodology"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const TableOfContents = dynamic(
  () => import("../../../components/table-of-contents/table-of-contents"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const InlineImageAndParagraph = dynamic(
  () =>
    import(
      "../../../components/inline-image-and-paragraph/inline-image-and-paragraph"
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);

import requests from "../../../requests";
import styles from "../../../styles/page-styles/phone-number-intelligence.module.scss";

import { useRouter } from "next/router";
import Head from "next/head";
import DescriptiveItemListFour from "../../../components/descriptive-item-list-four/descriptive-item-list-four";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import urls from "../../../urls";
import APISuite from "../../../components/api-suite/api-suite";

const ProfessionalVerification = () => {
  const [loading, setLoading] = useState(true);

  const [metaData, setMetaData] = useState({
    metaTitle:
      "Udyam Verification API | Real-Time MSME Verification for Businesses",
    canonical: urls.RESOURCES_UDYAM_APIS,
    metaDescription:
      "Verify MSMEs instantly with Decentro’s Udyam Verification API. Ensure compliance, streamline onboarding, and reduce fraud with real-time Udyam validation.",
    metaKeywords: "",
    ogTitle:
      "Udyam Verification API | Real-Time MSME Verification for Businesses",
    ogImage: "",
  });

  const [bannerData, setBannerData] = useState({
    heading: "<span class='highlighted-heading'>Udyam Verification APIs</span>",
    tagline: "Verify MSMEs Efficiently for Streamlined Business Operations",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/udyam-verification/banner.svg",
    altText: "Udyam Verification APIs",
    DBackground: true,
  });
  const [tableOfContentsData, setTableOfContentsData] = useState([
    { text: "What is Udyam Verification?", id: "introduction" },
    { text: "Decentro’s Udyam Suite", id: "apiSuite" },
    {
      text: "How Udyam Verification Can Help Your Business?",
      id: "howUdyamHelps",
    },
    { text: "Key Features of Udyam Verification API", id: "keyFeatures" },
    {
      text: "Where You Can Use It?",
      id: "whereToUse",
    },
    {
      text: "How Can Decentro Help?",
      id: "howCanDecentroHelp",
    },
    {
      text: "FAQs",
      id: "howCanDecentroHelp",
    },
  ]);
  const [useCasesData, setUseCasesData] = useState({
    headingLight: "Key Features Of ",
    headingBold: "Udyam Verification API",
    tagline: "",
    block1: [
      {
        heading: "Real-Time<br/>Verification",
        paragraph: "Instantly verify MSME registration and classification.",
        imageSrc:
          "/images/resources/udyam-verification/realtime-verification.svg",
      },
      {
        heading: "Accurate<br/>Data",
        paragraph:
          "Direct access to Udyam database ensures up-to-date information.",
        imageSrc: "/images/resources/udyam-verification/accuracy.svg",
      },
      {
        heading: "Secure &<br/>Compliant",
        paragraph:
          "Encrypted API transactions ensure data security and compliance.",
        imageSrc: "/images/resources/udyam-verification/secure.svg",
      },
      {
        heading: "Easy<br/>Integration",
        paragraph:
          "Comprehensive documentation for seamless system integration.",
        imageSrc: "/images/resources/udyam-verification/integration.svg",
      },
    ],
    block1extra: [],
    showOthers: false,
    tagline2: "",
    block2: [],
  });
  const [inlineImageAndParagraphData, setInlineImageAndParagraphData] =
    useState([
      {
        headingLight: "Financial Services",
        headingBold: "",
        text: "Verify professional memberships for loan or insurance applicants to ensure qualifications and adherence to industry standards. This reduces fraud risk and improves the reliability of your financial services.",
        imageSrc:
          "/images/resources/professional-verification/financial-services.svg",
        altText: "Financial Services",
      },
      {
        headingLight: "Recruitment",
        headingBold: "",
        text: "Streamline recruitment by verifying candidates’ qualifications and memberships. Confirm professional credentials to ensure only the most qualified and trustworthy individuals join your organisation, enhancing workforce quality.",
        imageSrc:
          "/images/resources/professional-verification/hiring-automation.svg",
        altText: "Recruitment",
      },
      {
        headingLight: "Regulatory Compliance",
        headingBold: "",
        text: "Verify the professional credentials of individuals in regulated activities to ensure compliance with regulatory requirements. This maintains industry standards and legal adherence and safeguards your organisation against penalties and reputational damage.",
        imageSrc: "/images/resources/professional-verification/regulatory.svg",
        altText: "Regulatory Compliance",
      },
      {
        headingLight: "Healthcare Providers",
        headingBold: "",
        text: "Verify medical professionals’ credentials before granting hospital privileges or network admission. This ensures adherence to patient care standards, safeguards the institution’s reputation, and ensures high-quality medical services.",
        imageSrc: "/images/resources/professional-verification/healthcare.svg",
        altText: "Healthcare Providers",
      },
      {
        headingLight: "Corporate Governance",
        headingBold: "",
        text: "Verify the professional memberships of board members, executives, or consultants to ensure they have the necessary qualifications. This helps make informed decisions, reduces the risk of mismanagement, and ensures capable strategic direction for the company.",
        imageSrc:
          "/images/resources/professional-verification/corporate-governance.svg",
        altText: "Corporate Governance",
      },
      {
        headingLight: "Professional Associations",
        headingBold: "",
        text: "Authenticate the membership status of individuals applying for conferences or professional events. Confirming memberships ensures a credible platform for networking, learning, and development, attracting esteemed participants and speakers.",
        imageSrc:
          "/images/resources/professional-verification/professional-associations.svg",
        altText: "Professional Associations",
      },
    ]);

  const [howCanDecentroHelpDataState, setHowCanDecentroHelpDataState] =
    useState({
      headingLight: "Udyam Verification ",
      headingBold: "For Your Business",
      tagline: "",
      bulletPointsHeader: "How Can Decentro Help?",
      bulletPoints: [
        {
          text: "Provides accurate and verified data with essential details such as business identity, Udyam registration number, and enterprise classification.",
        },
        {
          text: "Flexible API-based integration that seamlessly fits into existing workflows and systems.",
        },
        {
          text: "Access up-to-date information directly from reliable, government-authorised sources.",
        },
        {
          text: "Real-time verification enables swift decision-making, enhancing operational efficiency.",
        },
        {
          text: "Built on a resilient multi-bank architecture, ensuring your business remains unaffected during downtimes or unexpected traffic spikes.",
        },
      ],
      textInBoxList: [
        {
          textInBox: "For Developers",
          linkText: "API Documentation",
          link: "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-business-verification",
        },
      ],
    });

  const [recommendedPagesData, setRecommendedPagesData] = useState([
    {
      title: "PAN Verification",
      description:
        "Initiate swift and reliable PAN verification to validate the identity of an individual or business in real time.",
      pageLink: "/resources/pan-verification-api",
      imageSrc: "/images/resources/pan-verification/banner.svg",
    },
    {
      title: "DigiLocker",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/digilocker-apis/",
      imageSrc: "/images/resources/digilocker.svg",
    },
  ]);

  const [needSectionData, setNeedSectionData] = useState({
    id: 0,
    headingLight: "The Need for ",
    headingBold: "Professional Verification",
    tagline:
      "Ensuring the authenticity of professional credentials is crucial for various reasons",
    bulletPoints: [
      {
        text: "Verify Background Information of an Employee.",
      },
      {
        text: "Maintain Regulatory Compliance.",
      },
      {
        text: "Enhance Trust and Credibility.",
      },
      {
        text: "Verify Background Information of an Employee.",
      },
    ],
  });

  const [typesSectionData, setTypesSectionData] = useState({
    heading: "<span>Types of</span> Professional Verification",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/professional-verification/doc.svg",
        altText: "Medical Doctors",
        itemTitle: "Medical Doctors",
        itemDescription:
          "Ensure the Doctors with the National Medical Council (NMC) membership is valid and up-to-date with our NMC Verification API.",
      },
      {
        imageSrc: "/images/resources/professional-verification/ca.svg",
        altText: "CAs",
        itemTitle: "Chartered Accountants (CAs)",
        itemDescription:
          "Verify the membership status of Chartered Accountants with the Institute of Chartered Accountants of India (ICAI) with our ICAI Verification API.",
      },
      {
        imageSrc: "/images/resources/professional-verification/cs.svg",
        altText: "Company Secretaries",
        itemTitle: "Company Secretaries",
        itemDescription:
          "Confirm the membership of Company Secretaries with the Institute of Company Secretaries of India (ICSI) with our ICSI Verification API.",
      },
    ],
  });

  const [methodData, setMethodData] = useState([
    {
      imageSrc:
        "/images/resources/professional-verification/req-verification.svg",
      header: "Request Verification",
      description:
        "Submit a verification request using the necessary parameters such as professional details.",
    },
    {
      imageSrc:
        "/images/resources/professional-verification/data-retrieval.svg",
      header: "Data Retrieval",
      description:
        "Retrieve relevant information from the respective professional councils or organizations to process the request.",
    },
    {
      imageSrc: "/images/resources/professional-verification/verification.svg",
      header: "Receive Verification Results",
      description:
        "Retrieve detailed verification results, including membership details, qualifications, and additional certifications.",
    },
    {
      imageSrc: "/images/resources/professional-verification/message.svg",
      header: "Confirmation Message",
      description:
        "Receive a confirmation message indicating successful verification of professional membership.",
    },
  ]);

  const [introductorySectionData, setIntroductorySectionData] = useState([
    {
      headingLight: "What is ",
      headingBold: "Udyam Verification?",
      text: "The Udyam Verification API enables businesses to authenticate the Udyam Registration of MSMEs (Micro, Small, and Medium Enterprises) in real-time. By accessing key details such as the Udyam registration number, business identity, and enterprise classification, this API ensures that only legitimate enterprises are onboarded, enhancing operational efficiency and compliance. This real-time verification streamlines the onboarding process and mitigates fraud risk by validating genuine MSMEs, ensuring smoother business operations and adherence to regulatory requirements.",
      imageSrc: "/images/resources/udyam-verification/introduction.svg",
      altText: "Introduction",
    },
  ]);

  const howUdyamHelps = {
    heading:
      "How <span class='highlighted-subsection-header'>Udyam Verification</span> Can Help Your Business",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/udyam-verification/verified-sme.svg",
        title: "Verify MSME<br/>Status",
        description:
          "Authenticate enterprises to ensure eligibility for MSME benefits.",
      },
      {
        imageSrc:
          "/images/resources/udyam-verification/streamline-onboarding.svg",
        title: "Streamline<br/>Onboarding",
        description:
          "Automate MSME verification for faster, accurate business validation.",
      },
      {
        imageSrc: "/images/resources/udyam-verification/compliance.svg",
        title: "Ensure<br/>Compliance",
        description:
          "Verify data from government-backed sources to stay compliant.",
      },
      {
        imageSrc: "/images/resources/udyam-verification/fraud-risk.svg",
        title: "Mitigate<br/>Fraud Risk",
        description: "Confirm legitimate MSME registration to reduce fraud.",
      },
    ],
  };
  const whereToUse = {
    heading:
      "Where You Can <span class='highlighted-subsection-header'>Use It</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/udyam-verification/banks.svg",
        title: "Financial<br/>Institutions",
        description:
          "Verify MSME status during loan processing or partnerships",
      },
      {
        imageSrc: "/images/resources/udyam-verification/lending-platforms.svg",
        title: "Lending<br/>Platforms",
        description: "Assess MSME applicants for faster lending decisions.",
      },
      {
        imageSrc:
          "/images/resources/udyam-verification/regulatory-compliance.svg",
        title: "Regulatory<br/>Compliance",
        description: "Ensure adherence to MSME-related regulations",
      },
      {
        imageSrc: "/images/resources/udyam-verification/fraud-prevention.svg",
        title: "Fraud<br/>Prevention",
        description: "Authenticate MSME registration to reduce fraud risk.",
      },
    ],
  };

  // const [ctaBannerStart, setCtaBannerStart] = useState({
  //   text: "",
  //   newTab: true,
  //   CTAButtonLink:
  //     "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-business-verification",
  //   CTAButtonText: "View Documentation",
  // });
  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "View Documentation",
    newTab: true,
    ctaButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-business-verification",
  };

  const router = useRouter();
  const canonicalUrl = `https://decentro.tech${router.asPath}`;
  const accordionData = [
    {
      query: "What other Verification APIs might be helpful for my business?",
      solution:
        "Here are some useful Verification APIs for businesses in India. These APIs streamline onboarding, enhance security, and ensure regulatory compliance in India.",
      bulletPoints: [
        {
          text: "<strong>PAN & Aadhaar Verification</strong> – Ensures KYC compliance by verifying PAN and Aadhaar details.",
        },
        {
          text: "<strong>GST Verification</strong>  – Validates GST numbers for B2B transactions and tax compliance.",
        },
        {
          text: "<strong>Bank Account Verification</strong> – Confirms bank account ownership and details.",
        },
        {
          text: "<strong>Phone Number Verification</strong> – Verifies user phone numbers via OTP.",
        },
        {
          text: "<strong>Submit Application</strong> – Review, declare, and submit the form. Authenticate with the final OTP.",
        },
        {
          text: "<strong>Address Verification</strong> – Validates postal addresses for accurate deliveries.",
        },
      ],
    },
    {
      query: "Are Udyam and MSME the same?",
      solution:
        "Udyam and MSME are not the same. MSME is the category, while Udyam is the registration system.",
      bulletPoints: [
        {
          text: "<strong>MSME (Micro, Small, and Medium Enterprises):</strong>&nbsp;Refers to the classification of businesses based on investment and turnover.",
        },
        {
          text: "<strong>Udyam:</strong>&nbsp;The online registration process for MSMEs introduced by the Indian government to recognize these businesses and provide benefits.",
        },
      ],
    },
    {
      query: "Can a business have more than one Udyam Registration?",
      solution:
        "No, a business cannot have more than one Udyam Registration. Each MSME should have a unique Udyam registration number. If a business operates multiple units, each unit must register separately, but the same entity cannot have numerous registrations for the same unit.",
    },

    {
      query: "What is the turnover limit for Udyam?",
      solution:
        "As of the latest guidelines, the turnover limits for Udyam Registration are given below. These limits are based on the business's annual turnover.",
      bulletPoints: [
        {
          text: "<strong>Micro Enterprises:</strong>&nbsp;Upto ₹5 crore",
        },
        {
          text: "<strong>Small Enterprises:</strong>&nbsp;Up to ₹50 crore",
        },
        {
          text: "<strong>Medium Enterprises:</strong>&nbsp;Upto ₹250 crore",
        },
      ],
    },
  ];
  const apiSuiteData = {
    title: "Decentro’s <strong>Udyam Suite</strong>",
    tagline:
      "Decentro offers a full suite of Udyam-related APIs that handle everything from Udyam search to registration, ensuring seamless integration and operation.",
    apiSuiteList: [
      {
        title:
          "<strong>Udyam Number Validation</strong> via <strong>Mobile</strong>",
        tagline:
          "This API validates Udyam numbers linked to a mobile number, providing a quick and reliable check for businesses.",
        subtitle: "Key <strong>Features</strong>",
        list: [
          {
            imageSrc: "/images/resources/udyam-verification/card.svg",
            title: "Validate Linking",
            description: "Links Udyam to registered mobile for verification.",
          },
          {
            imageSrc: "/images/resources/udyam-verification/no-otp.svg",
            title: "No OTP Required",
            description: "Ensuring a smooth and convenient process.",
          },
          {
            imageSrc: "/images/resources/udyam-verification/fraud-risk.svg",
            title: "Quick Verification",
            description: "Validate Udyam numbers in few seconds.",
          },
        ],
      },
      {
        title: "Udyam Certificate Fetch",
        tagline:
          "Retrieve official Udyam registration numbers and certificates using OTP authentication, offering authorized access to essential business data.",
        subtitle: "Key <strong>Features</strong>",
        list: [
          {
            imageSrc: "/images/resources/udyam-verification/card.svg",
            title: "Secure Access",
            description: "Secure OTP-based access for certificate download.",
          },
          {
            imageSrc: "/images/resources/udyam-verification/fraud-risk.svg",
            title: "Quick Validation",
            description: "Provides instant, reliable Udyam validation.",
          },
        ],
      },
      {
        title: "Udyam HyperStream",
        tagline:
          "The HyperStream API combines Udyam search and validation into one call, allowing businesses to efficiently confirm MSME status and retrieve certification in a single step.",
        subtitle: "Key <strong>Features</strong>",
        list: [
          {
            imageSrc: "/images/resources/udyam-verification/api.svg",
            title: "One Stop API",
            description: "Combine search and validation in one API.",
          },
          {
            imageSrc: "/images/resources/udyam-verification/download.svg",
            title: "Download PDF",
            description: "Download Udyam certificate PDF.",
          },
          {
            imageSrc: "/images/resources/udyam-verification/handling.svg",
            title: "Robust Handling",
            description: "Handles up to 5 Udyam numbers at once.",
          },
        ],
      },
    ],
  };
  return (
    <React.Fragment>
      <Head>
        <title>{metaData.metaTitle}</title>
        <link rel="canonical" href={metaData.canonical} />
        <meta name="description" content={metaData.metaDescription} />
        <meta name="keywords" content={metaData.metaKeywords} />
        <meta property="og:title" content={metaData.ogTitle} />
        <meta property="og:image" content={metaData.ogImage} />
      </Head>
      {/* {bannerData && ( */}
      <div className={styles["phone-number-intelligence"]}>
        {bannerData && <ProductBanner data={bannerData} />}

        {tableOfContentsData && (
          <Suspense fallback={<div>Loading Table of Contents...</div>}>
            <TableOfContents data={tableOfContentsData} />
          </Suspense>
        )}

        <div>
          <div id="introduction">
            {introductorySectionData.map((item, index) => (
              <Suspense
                key={index}
                fallback={<div>Loading Table of Contents...</div>}
              >
                <InlineImageAndParagraph
                  // key={index}
                  id={`introductorySection-${index}`} // Ensure unique id
                  data={item}
                  reverse={index % 2 !== 0}
                  fromServer
                />
              </Suspense>
            ))}
          </div>
          <APISuite id="apiSuite" data={apiSuiteData} />

          {textAndButtonBannerData && (
            <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
          )}
          <div id="howUdyamHelps">
            <DescriptiveItemListFour data={howUdyamHelps} />
          </div>
          {useCasesData && (
            <Suspense fallback={<div>Loading Key Features...</div>}>
              <UseCases id="keyFeatures" data={useCasesData} />
            </Suspense>
          )}
          <div id="whereToUse">
            <DescriptiveItemListFour data={whereToUse} />
          </div>
        </div>

        {howCanDecentroHelpDataState && (
          <BulletPointsAndTextBlock
            id="howCanDecentroHelp"
            data={howCanDecentroHelpDataState}
          />
        )}

        {accordionData.length > 0 && (
          <Suspense fallback={<div>Loading FAQs...</div>}>
            <div
              className={styles["commonly-asked-questions"]}
              id="commonlyAskedQuestions"
            >
              <h2>
                Frequently Asked&nbsp;<span>Questions</span>
              </h2>
              <div className={styles["accordion-list"]}>
                {accordionData.map(function (object, i) {
                  return <FaqAccordion key={i} data={object} markdown />;
                })}
              </div>
            </div>
          </Suspense>
        )}
        {recommendedPagesData && (
          <Suspense fallback={<div>Loading Recommended Section...</div>}>
            <RecommendedPages data={recommendedPagesData} />
          </Suspense>
        )}
      </div>
      {/* )} */}
    </React.Fragment>
  );
};

export default ProfessionalVerification;
