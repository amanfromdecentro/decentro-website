import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/digilocker-apis.module.scss";
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
import ResourcesMethodology from "../../../components/resources-methodology/resources-methodology";
import DigilockerServicesStack from "../../../components/digilocker-services-stack/digilocker-services-stack";

const Digilocker = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>DigiLocker</span>",
    tagline:
      "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/Digilocker+(1).mp4",
    video: true,
    altText: "DigiLocker",
    DBackground: true,
  };

  const inlineImageAndParagraphData = {
    headingLight: "What is",
    headingBold: "DigiLocker?",
    text:
      "DigiLocker, part of the Digital India Program, offers Aadhaar holders cloud storage for authentic documents like driving licences, vehicle registrations, and academic mark sheets. Users get 1GB to upload legacy documents, with all files legally equivalent to originals and accepted by the Indian government." +
      "<br/><br/>The new “Meri Pehchaan” flow and improved SSO DigiLocker Suite APIs enhance user experience, minimising drop-offs and streamlining the entire process, from sign-in to document linking and downloading.",
    imageSrc: "/images/resources/digilocker/what-is-digilocker.svg",
    altText: "What is DigiLocker?",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-digilocker-services-sso-digilocker-suite",
    CTAButtonText: "View Product Guide",
  };

  const useCasesData = {
    headingLight: "Key Features Of ",
    headingBold: "DigiLocker API",
    tagline:
      "Get DigiLocker document verification enabled on your platform, Now!",
    block1: [
      {
        heading: "Reduces<br/>Operational Cost",
        paragraph:
          "Helps in paperless verification as it reduces the administrative overhead by curtailing the verification process.",
        imageSrc: "/images/resources/digilocker/cost.svg",
      },
      {
        heading: "Customer Experience",
        paragraph:
          "Create dynamic DigiLocker workflows that are optimised for customised user experiences.",
        imageSrc: "/images/resources/digilocker/experience.svg",
      },
      {
        heading: "Secure<br/>Document Gateway",
        paragraph:
          "Acts as a gateway between the trusted issuer and trusted requester with the consent of the citizen.",
        imageSrc: "/images/resources/digilocker/SecuredDoc.svg",
      },
    ],
    block1extra: [
      {
        heading: "Real-Time<br/>Verification",
        paragraph:
          "Provides a verification module enabling government agencies to verify data from issuers after obtaining user consent.",
        imageSrc: "/images/resources/digilocker/verification.svg",
      },
      {
        heading: "Fully<br/>Compliant",
        paragraph:
          "The Digilocker API is fully compliant with the RBI regulations, ensuring the highest standards for data security and privacy.",
        imageSrc: "/images/resources/digilocker/compliant.svg",
      },
      {
        heading: "Reduce<br/>Fraud",
        paragraph:
          "Verify customers securely with direct authentication by Digilocker using Aadhaar.",
        imageSrc: "/images/resources/digilocker/reduce-fraud.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };
  const digiLockerApplicationsLenders = {
    headingLight: "Lenders",
    headingBold: "",
    text: "Streamline customer verification and risk management by ensuring KYC compliance with SEBI and RBI guidelines",
    imageSrc: "/images/resources/digilocker/lenders.svg",
    altText: "Insurance Industry",
  };

  const digiLockerApplications1 = {
    headingLight: "Insurance Industry",
    headingBold: "",
    text: "Verify customers pre-onboarding using KYC guidelines set by IRDAI (Insurance Regulatory and Development Authority India) and SEBI (Securities and Exchange Board of India).",
    imageSrc: "/images/resources/digilocker/insurance.svg",
    altText: "Insurance Industry",
  };

  const digiLockerApplications3 = {
    headingLight: "Healthcare",
    headingBold: "",
    text: "Verify medical records, consultation proofs, and test results with DigiLocker, and protect against identity theft in healthcare.",
    imageSrc: "/images/resources/digilocker/healthcare.svg",
    altText: "Healthcare",
  };

  const digiLockerApplications5 = {
    headingLight: "Trading & Gaming",
    headingBold: "",
    text: "Confirm end users’ and customers’ details, understand potential customers’ activities, and verify their legality.",
    imageSrc: "/images/resources/digilocker/gaming.svg",
    altText: "Crypto",
  };
  const digiLockerApplications4 = {
    headingLight: "Logistics & Ecommerce",
    headingBold: "",
    text: "Verify merchants and users before onboarding to prevent malpractice and vulnerable activities on the platform.",
    imageSrc: "/images/resources/digilocker/logistics.png",
    altText: "Logistics & Ecommerce",
  };

  const digiLockerApplications2 = {
    headingLight: "Financial Services",
    headingBold: "",
    text: "Accelerate onboarding with DigiLocker, ensuring regulatory compliance and a seamless, secure customer experience from the start.",
    imageSrc: "/images/resources/digilocker/financial.svg",
    altText: "Financial Services",
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const howCanDecentroHelpData = {
    headingLight: "DigiLocker For Your Business ",
    headingBold: "- How Can Decentro Help",
    tagline: "",
    bulletPointsHeader: "Why Decentro’s APIs for DigiLocker?",
    bulletPoints: [
      {
        text: "<strong>Dynamic UI:</strong>&nbsp;UI elements adjust in real time, creating a personalised experience that keeps users engaged throughout their journey.",
      },
      {
        text: "<strong>A/B Testing Capabilities:</strong>&nbsp;Easily test different customer flows to optimise user experiences and prevent drop-offs during crucial steps.",
      },
      {
        text: "<strong>Seamless Document Access:</strong>&nbsp;Users can download documents directly from DigiLocker and other sources within the interface, eliminating the need for external navigation.",
      },
      {
        text: "<strong>Unified Data Integration:</strong>&nbsp;Effortlessly combine internal data and external APIs, providing a comprehensive view for crafting complete workflows.",
      },
      {
        text: "<strong>Enhanced User Experience:</strong>&nbsp;Transform complex processes into smooth, frictionless experiences that boost engagement and adoption.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link:
          "https://docs.decentro.tech/docs/kyc-digilocker" +
          encodeURI(utmtags.DIGILOCKER_DOCS_BTN),
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Access Verified Electronic Documents anytime.<br/><span>Sign-up Today, Go Live Tomorrow!</span>",
    ctaButtonText: "Get Started",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const tableOfContentsData = [
    { text: "What is DigiLocker?", id: "whatIsDigilocker" },
    { text: "Methodology", id: "methodology" },
    { text: "Key Features", id: "KeyFeatures" },
    { text: "Decentro’s Digilocker Services Stack", id: "briefExplanation" },
    { text: "Leveraging DigiLocker APIs", id: "digilockerLeverage" },
    { text: "Why Decentro APIs?", id: "howCanDecentroHelp" },
    // { text: "Frequently Asked Questions", id: "commonlyAskedQuestions" },
  ];

  const recommendedPagesData = [
    {
      title: "PAN Verification",
      description:
        "Initiate swift and reliable PAN verification to validate the identity of an individual or business in real time.",
      pageLink: "/resources/pan-verification-api",
      imageSrc: "/images/resources/pan-verification/banner.svg",
    },
    {
      title: "Professional Verification",
      description:
        "Authenticate membership of Medical Doctors, Chartered Accountants, and Company Secretaries in NMC, ICAI and ICSI associations",
      pageLink: "/resources/professional-verification/",
      imageSrc:
        "/images/resources/professional-verification/professional-verification-banner.svg",
    },
  ];

  const accordionData = [
    {
      query: "What is the maximum allowed file size that can be uploaded?",
      solution: "The maximum allowed file size is 10MB.",
    },
    {
      query: "What type of files can be uploaded?",
      solution: "File types that can be uploaded - pdf, jpeg & png.",
    },
    {
      query: "What types of documents are supported by Digilocker?",
      solution:
        "DigiLocker supports any legal and government-issued documents. Here’s a list:",
      bulletPoints: [
        { text: "PAN card" },
        { text: "Voter ID card" },
        { text: "Aadhaar card" },
        { text: "Driver’s license" },
        { text: "Vehicle registration certificates" },
        { text: "Policy documents" },
        { text: "Student’s mark sheets" },
      ],
    },
    {
      query: "How many documents can I pull from Digilocker?",
      solution:
        "There is no limit to the number of documents you can fetch using the Digilocker API.",
    },
  ];

  const learnMoreData = {
    text: "",
    ctaButtonText: "View Product Guide",
    newTab: true,
    ctaButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-digilocker-services",
  };

  const methodData = [
    {
      imageSrc: "/images/resources/digilocker/session.svg",
      header: "Initiate a session",
      description: "",
    },
    {
      imageSrc: "/images/resources/digilocker/data-retrieval.svg",
      header: "View Documents",
      description: "",
    },
    {
      imageSrc: "/images/resources/digilocker/xml.svg",
      header: "Generate Aadhaar XML<br/><br/>(Optional)",
      description: "",
    },
    {
      imageSrc: "/images/resources/digilocker/download-doc.svg",
      header: "Download Documents",
      description: "",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          Digilocker Integration APIs | What is Digilocker | Explore More
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/digilocker-apis"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/digilocker-apis"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Decentro's DigiLocker APIs enable document verification across various industries. Fully flexible API-based flow for registration and verification."
        />
        <meta name="keywords" content="Digilocker APIs" />
        <meta
          property="og:title"
          content="Digilocker Integration APIs | What is Digilocker | Explore More"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script defer type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the maximum allowed file size that can be uploaded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The maximum allowed file size is 10MB.",
                },
              },
              {
                "@type": "Question",
                name: "What type of files can be uploaded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "File types that can be uploaded - pdf, jpeg & png.",
                },
              },
              {
                "@type": "Question",
                name: "What types of documents are supported by Digilocker?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "DigiLocker supports any legal and government-issued documents. Here’s a list: PAN card, Voter ID card, Aadhaar card, Driver’s license, Vehicle registration certificates, Policy documents, Student’s mark sheets.",
                },
              },
              {
                "@type": "Question",
                name: "How many documents can I pull from Digilocker?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no limit to the number of documents you can fetch using the Digilocker API.",
                },
              },
              {
                "@type": "Question",
                name: "Can DigiLocker be used for KYC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "DigiLocker can also be used by regulated financial institutions (FIs) to conduct KYC verification before customer onboarding. DigiLocker KYC, as this process is known, involves integrating with DigiLocker to retrieve and verify KYC documents after obtaining the customer's consent.",
                },
              },
            ],
          })}
        </script>
      </Head>
      <div className={styles["digilocker-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["digilocker-details"]}>
          <InlineImageAndParagraph
            id="whatIsDigilocker"
            data={inlineImageAndParagraphData}
          />
        </div>
        <div className={styles["leverage-verifiction-api"]} id="methodology">
          <h2>
            <span>Methodology</span>
          </h2>
          <p>
            Verify KYC details effortlessly with DigiLocker APIs—secure,
            consent-driven, and instant!
          </p>
          <div className={styles["leverage-verifiction-api-content"]}>
            <ResourcesMethodology data={methodData} itemCount={4} noDesc />
          </div>
        </div>
        <UseCases id="KeyFeatures" data={useCasesData} />
        <DigilockerServicesStack id="briefExplanation" />
        <TextAndButtonBannerTransparent data={learnMoreData} />
        <div
          className={styles["digilocker-apis-applications"]}
          id="digilockerLeverage"
        >
          <h2>
            How Can Your Business Leverage <span>DigiLocker APIs</span>
          </h2>
          <div className={styles["digilocker-apis-applications-content"]}>
            <InlineImageAndParagraph
              zoom={true}
              data={digiLockerApplicationsLenders}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={digiLockerApplications1}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={digiLockerApplications3}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={digiLockerApplications5}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={digiLockerApplications4}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={digiLockerApplications2}
              reverse={true}
              boldBlack
            />
          </div>
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={howCanDecentroHelpData}
        />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />
        {/* <div
          className={styles["commonly-asked-questions"]}
          id="commonlyAskedQuestions"
        >
          <h2>
            Frequently Asked&nbsp;<span>Questions</span>
          </h2>
          <div className={styles["accordion-list"]}>
            {accordionData.map(function (object, i) {
              return <FaqAccordion key={i} data={object} page="digilocker" />;
            })}
          </div>
        </div> */}
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </React.Fragment>
  );
};

export default Digilocker;
