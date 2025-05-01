import React, { useState } from "react";
// import { Helmet } from 'react-helmet';
import Head from "next/head";

import styles from "../../../styles/page-styles/ckyc-resources.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import UseCases from "../../../components/use-cases/use-cases";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import utmtags from "../../../utmTags";
import ResourcesMethodology from "../../../components/resources-methodology/resources-methodology";
import InlineImageTextMap from "../../../components/inline-image-text-map/inline-image-text-map";
import DescriptiveItemList from "../../../components/descriptive-item-list/descriptive-item-list";

function Ckyc() {
  const bannerData = {
    heading: "<span class='highlighted-heading'>CKYC APIs</span>",
    tagline:
      "Learn the essentials of Central KYC, or CKYC, and find out how your business can leverage CKYC APIs for financial simplicity, better customer experience, and robust workflows.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/ckyc.svg",
    titleText: "Central KYC",
    altText:
      "Learn the essentials of CKYC with Decentro’s API banking platform.",
    DBackground: true,
  };

  const inlineImageAndParagraphData = {
    headingLight: "What Is",
    headingBold: " CKYC?",
    imageSrc: "/images/resources/ckyc/what-is-ckyc.svg",
    text: "Central Know Your Customer (CKYC) is a centralised registry established to store and manage KYC (Know Your Customer) documents for individuals using financial services. The Government of India introduced CKYC as a one-stop point for individuals’ KYC requirements. Further, CKYC falls under the Central Registry of Securitisation Asset Reconstruction and Security Interest; CERSAI manages the entire CKYC registry and can collect, secure, and digitally safeguard a user’s KYC details.",
    altText: "what is ckyc?",
    titleText: "What is CKYC",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-workflows-hyperstreams?_gl=1*wmbxpp*_ga*NDk5MTM2MjQ4LjE3MjQwNDYwMzI.*_ga_6NBW6WWGPQ*MTcyNDIxNzU3My43LjEuMTcyNDIyMjgwOS43LjAuMA",
    CTAButtonText: "View Product Guide",
  };

  const needSectionData = {
    id: 0,
    headingLight: "Features of ",
    headingBold: "CKYC",
    tagline: "",
    bulletPoints: [
      {
        text: "CKYC is a 14-digit number associated with the customer’s identification.",
      },
      {
        text: "The information is securely saved in electronic form. The supplied document is then validated with the issuer.",
      },
      {
        text: "If the KYC information changes, all relevant institutions are notified.",
      },
      {
        text: "Verify Background Information of an Employee.",
      },
    ],
  };

  const typesOfCkycAccounts1 = {
    headingLight: "CKYC Search",
    headingBold: "",
    text: "CKYC Search API can enable financial institutions to search through the Central KYC Registry (CKYCR) records, seamlessly accessing essential customer information. By leveraging this feature, institutions can expedite customer onboarding processes while minimising duplication efforts and enhancing operational efficiency.",
    imageSrc: "/images/resources/ckyc/search.svg",
    altText: "CKYC Search",
    titleText: "CKYC Search",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-ckyc-services-ckyc-search",
    CTAButtonText: "View Product Guide",
  };

  const typesOfCkycAccounts2 = {
    headingLight: "CKYC Download",
    headingBold: "",
    text: "The CKYC Download API allows institutions to quickly access verified customer records for individuals and entities, streamlining risk assessment and compliance. It enables informed decision-making and easy regulatory adherence.",
    imageSrc: "/images/resources/ckyc/download.svg",
    altText: "CKYC Download",
    titleText: "CKYC Download",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-ckyc-services-ckyc-download",
    CTAButtonText: "View Product Guide",
  };

  const typesOfCkycAccounts3 = {
    headingLight: "CKYC Upload for Individuals",
    headingBold: "",
    text: "The CKYC Upload API streamlines KYC onboarding by securely uploading customer data to CKYCR. It automates data submission, boosting efficiency, minimising errors, and allowing institutions to focus on customer experience.",
    imageSrc: "/images/resources/ckyc/upload.svg",
    altText: "CKYC Upload for Individuals",
    titleText: "CKYC Upload for Individuals",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-ckyc-services-ckyc-upload",
    CTAButtonText: "View Product Guide",
  };

  const typesOfCkycAccounts4 = {
    headingLight: "CKYC Upload for Legal Entities",
    headingBold: "",
    text: "Streamline KYC compliance for legal entities with Decentro’s CKYC Upload API. This feature enables seamless submission of corporate KYC data to the CKYCR, ensuring regulatory compliance and expediting onboarding. CKYC Services revolutionise KYC processes, providing a robust solution for financial institutions to manage customer data and compliance efficiently.",
    imageSrc: "/images/resources/ckyc/legal.svg",
    altText: "CKYC Upload for Legal Entities",
    titleText: "CKYC Upload for Legal Entities",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-ckyc-services-ckyc-upload",
    CTAButtonText: "View Product Guide",
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const useCasesData = {
    headingLight: "Key Features Of ",
    headingBold: "CKYC",
    tagline: "",
    block1: [
      {
        heading: "Secure Data<br/>Transmission",
        paragraph: "Ensures that KYC data is transmitted securely to CKYCR.",
        imageSrc: "/images/resources/ckyc/no-more-frauds-icon.svg",
      },
      {
        heading: "Automated<br/>Data Entry",
        paragraph: "Reduces manual data entry and associated errors.",
        imageSrc: "/images/resources/ckyc/automated-data.svg",
      },
      {
        heading: "Real-Time<br/>Processing",
        paragraph: "Updates records quickly and accurately.",
        imageSrc: "/images/resources/ckyc/easy-api.svg",
      },
      {
        heading: "Real-Time<br/>Updates",
        paragraph: "Reflects the most current information available.",
        imageSrc: "/images/resources/ckyc/update-ckyc-on-the-go-icon.svg",
      },
    ],
    block1extra: [
      {
        heading: "Instant<br/>Access",
        paragraph: "Retrieve customer records or data quickly.",
        imageSrc: "/images/resources/ckyc/verified-user.svg",
      },
      {
        heading: "Verified<br/>Data",
        paragraph: "Provides access to up-to-date, verified KYC information.",
        imageSrc: "/images/resources/ckyc/verified-data.svg",
      },
      {
        heading: "Ease of<br/>Integration",
        paragraph:
          "Compatible with existing systems for seamless data handling.",
        imageSrc: "/images/resources/ckyc/integration.svg",
      },
      {
        heading: "Regulatory<br/>Compliance",
        paragraph:
          "Ensures that downloaded data adheres to legal and compliance standards.",
        imageSrc: "/images/resources/ckyc/legal-data.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const ckycNumberData = {
    headingLight: "CKYC",
    headingBold: "Number",
    text:
      "For CKYC registration, a user or entity can visit any financial institution regulated by RBI, SEBI, or IRDA, to name a few. The user must submit documents for identity and address proof, such as PAN, Aadhaar Card, Passport, or Driving Licence, along with a filled-in CKYC form." +
      "Once verified, the user is allotted a 14-digit number known as the CKYC number, which is tied to the user and forms an ID for them. Using this CKYC number, they can access their details and also update them from time to time. This is then checked and verified by financial institutions during key.",
    imageSrc: "/images/resources/ckyc/what-is-ckyc-number.svg",
    altText:
      "CKYC number is a 14-digit identification tied to the user after registration & verification.",
    titleText: "CKYC Number",
  };

  const howCanDecentroHelpData = {
    headingLight: "CKYC For Your Business ",
    headingBold: "- How Can Decentro Help",
    tagline:
      "Decentro's API banking platform has CKYC APIs to help businesses like yours speed up customer onboarding time by 95% and provide a seamless experience to your customers, partners, and vendors!",
    bulletPointsHeader: "Why CKYC for your business?",
    bulletPoints: [
      { text: "Smoothen customer, partner, or vendor onboarding process." },
      {
        text: "With a single CKYC API hit, you can access all critical documents required from your customers after taking their consent.",
      },
      {
        text: "Get seamless access to necessary information. Ergo, you can provide a much better experience for your customers.",
      },
      {
        text: "Avoid the hassle of mandating offline KYC from your customers. CKYC is already OSV.",
      },
      {
        text: "Reduce overhead expenditures significantly for user verification with a minimal cost for each CKYC API hit.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link:
          "https://docs.decentro.tech/reference/kyc-and-onboarding-api-reference-identities-ckyc-services-upload-individuals" +
          encodeURI(utmtags.DEVELOPER_DOCS_CKYC_API_BTN),
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Prevent Fraud Before it strikes & wreaks havoc on your platform!<br/><span>Let us Help!</span>",
    ctaButtonText: "Sign up",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const tableOfContentsData = [
    { text: "What is CKYC?", id: "whatIsCkyc" },
    { text: "Features of CKYC", id: "featuresOfCkyc" },
    { text: "CKYC Number", id: "ckycNumber" },
    { text: "Methodology", id: "methodology" },
    { text: "Types of CKYC Accounts", id: "types" },
    { text: "Decentro’s CKYC Services Stack", id: "serviceStack" },
    { text: "Where You Can Use It", id: "description" },
    { text: "Key Features Of CKYC", id: "ckycGameChanger" },
    { text: "How Can Decentro Help", id: "ckycForBusiness" },

    { text: "FAQs", id: "commonlyAskedQuestions" },
  ];

  const recommendedPagesData = [
    {
      title: "UPI ID Verification",
      description:
        "Ensure a secure digital transaction by validating and verifying the UPI address.",
      pageLink: "/resources/upi-verification/",
      imageSrc: "/images/resources/upi-id-verification.svg",
    },
    {
      title: "Bank Account Validation API",
      description:
        "Initiate instant bank account verification through account numbers validation (and other details)",
      pageLink: "/resources/bank-account-validation-api/",
      imageSrc: "/images/resources/bank-account-validation.svg",
    },
  ];

  const accordionData = [
    {
      query: "What are the benefits of CKYC?",
      solution: "CKYC was introduced to ease the KYC process by,",
      bulletPoints: [
        { text: "Reducing time taken for KYC <verification></verification>." },
        {
          text: "Unifying KYC across Banking, Financial Services, and Insurance (BFSI)",
        },
        { text: "One customer, one KYC verification" },
        { text: "Increased KYC usability" },
        { text: "Single updation" },
        { text: "Optimized costs for Financial Institutions" },
      ],
    },
    {
      query: "What are the critical documents for CKYC?",
      solution: "Here are the documents required for CKYC",
      bulletPoints: [
        { text: "A filled & signed cKYC form" },
        { text: "A self-attested Proof of Identity" },
        { text: "A self-attested proof of Address" },
        { text: "A photograph" },
      ],
    },
    {
      query: "What is the difference between eKYC and CKYC?",
      solution:
        "<strong>eKYC:&nbsp;</strong>Customers’ identities are verified digitally through the use of a process known as ‘Electronic KYC’ or eKYC. The UIDAI database aids in eKYC identification verification. This is possible after the customer confirms the eKYC request they receive via OTP,  offline via XML files, or through the QR code on their Aadhaar card.<br/><br/><strong>CKYC:&nbsp;</strong>CKYC is done to assist investors in conducting their KYC only once. Any RBI, IRDA, SEBI, or PFRDA registered company does not require the investor to complete repetitive KYC procedures. It facilitates investment participation and easy client onboarding.",
    },
    {
      query: "How can I check a CKYC number?",
      solution:
        "The procedure for checking CKYC status online is outlined below",
      bulletPoints: [
        { text: "Login to the CKYC Website using the Portal." },
        { text: "Enter your PAN Card information." },
        { text: "Insert Security Code." },
        {
          text: "Your CKYC Number will be displayed once you’ve completed the procedures above.",
        },
      ],
    },
    {
      query: "Is CKYC Mandatory?",
      solution:
        "While KYC is a required step, CKYC is optional. If you don’t use CKYC, you’ll have to go through the KYC process several times.",
    },
  ];

  const ctaBannerStart = {
    text: "",
    newTab: true,
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-workflows-hyperstreams",
    CTAButtonText: "View Product Guide",
  };

  const methodData = [
    {
      imageSrc: "/images/resources/ckyc/pan.svg",
      header: "Step 1",
      description: "Collect the users’ PAN details for authentication",
    },
    {
      imageSrc: "/images/resources/ckyc/document-search.svg",
      header: "Step 2",
      description: "Lookup in the CKYC database [CERSAI] for a match with PAN",
    },
    {
      imageSrc: "/images/resources/ckyc/userdata.svg",
      header: "Step 3",
      description:
        "If you find a match, you get direct access to a user’s KYC details",
    },
  ];

  const typesSectionData = {
    heading: "<span>Types of</span> CKYC Accounts",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/ckyc/normal-account.svg",
        altText: "Normal Account",
        itemTitle: "Normal<br/>Account",
        itemDescription:
          "Created with PAN, Aadhaar, Voter ID, Passport, Driving License, or NREGA job card as ID proof.",
      },
      {
        imageSrc: "/images/resources/ckyc/simplified-measures.svg",
        altText: "Simplified Measures Account",
        itemTitle: "Simplified<br/>Measures Account",
        itemDescription:
          "Created with any other Officially Valid Document (OVD), prefixed with ‘L’ in the CKYC identifier.",
      },
      {
        imageSrc: "/images/resources/ckyc/small-account.svg",
        altText: "Small Account",
        itemTitle: "Small<br/>Account",
        itemDescription:
          "Created with basic identifying details and a photograph, prefixed with ‘S’ in the CKYC identifier.",
      },
      {
        imageSrc: "/images/resources/ckyc/otp-based.svg",
        altText: "OTP-Based eKYC Account",
        itemTitle: "OTP-Based<br/>eKYC Account",
        itemDescription:
          "Created through OTP-based eKYC and a photograph, prefixed with ‘O’ in the CKYC identifier.",
      },
    ],
  };

  const buildFintechFutureData = {
    heading:
      "Where You Can <span class='highlighted-subsection-header'>Use It</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/ckyc/financial-institution.svg",
        title: "Financial<br/>Institutions",
        description:
          "For onboarding new customers, verifying identities, and ensuring compliance with regulatory requirements.",
      },
      {
        imageSrc: "/images/resources/ckyc/bank.svg",
        title: "Banks",
        description:
          "To update and maintain accurate customer records and streamline KYC processes.",
      },
      {
        imageSrc: "/images/resources/ckyc/insurance.svg",
        title: "Insurance<br/>Companies",
        description:
          "To validate customer information and manage policyholders’ records.",
      },
      {
        imageSrc: "/images/resources/ckyc/lending.svg",
        title: "Lending<br/>Platforms",
        description:
          "These are used to verify the identity of borrowers and assess risk.",
      },
      {
        imageSrc: "/images/resources/ckyc/investment.svg",
        title: "Investment<br/>Firms",
        description:
          "To ensure compliance with Know Your Customer (KYC) regulations and maintain accurate investor records.",
      },
      {
        imageSrc: "/images/resources/ckyc/gov.svg",
        title: "Government<br/>Agencies",
        description:
          "Access and verify personal data for various services and benefits.",
      },
    ],
  };

  return (
    <React.Fragment>
      <Head>
        <title>What is CKYC | CKYC Financial APIs in India | Decentro</title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/ckyc-apis"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/ckyc-apis"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="What is Central KYC? How’s it beneficial for both businesses & users? How can your business leverage CKYC APIs for a better customer experience? Find out!"
        />
        <meta name="keywords" content="CKYC" />
        <meta
          property="og:title"
          content="What is CKYC | CKYC Financial APIs in India | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["ckyc"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <InlineImageAndParagraph
          id="whatIsCkyc"
          data={inlineImageAndParagraphData}
        />
        {needSectionData && (
          <div className={styles["special-info-section"]} id="featuresOfCkyc">
            <div className={styles["special-info-wrapper"]}>
              <h2>
                {needSectionData.headingLight}{" "}
                <span>{needSectionData.headingBold}</span>
              </h2>

              <div className={styles["special-info-description"]}>
                {needSectionData.tagline}
                {needSectionData.bulletPoints.map((point, index) => (
                  <p key={index}>{point.text}</p>
                ))}
              </div>

              {ctaBannerStart && (
                <TextAndButtonBannerTransparent data={ctaBannerStart} />
              )}
            </div>
          </div>
        )}
        <div id="ckycNumber" className="ckyc-number">
          <InlineImageAndParagraph data={ckycNumberData} reverse={true} />
        </div>

        <div className={styles["leverage-ckyc-api"]} id="methodology">
          <h2>
            <span>Methodology</span>
          </h2>

          <div className={styles["leverage-ckyc-api-content"]}>
            <ResourcesMethodology data={methodData} itemCount={4} noDesc />
          </div>
        </div>
        <InlineImageTextMap data={typesSectionData} id="types" />

        <div className={styles["types-of-ckyc-accounts"]} id="serviceStack">
          <h2>
            Decentro’s <span>CKYC Services Stack</span>
          </h2>

          <div className={styles["ckyc-accounts-type"]}>
            <InlineImageAndParagraph
              data={typesOfCkycAccounts1}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              data={typesOfCkycAccounts2}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              data={typesOfCkycAccounts3}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              data={typesOfCkycAccounts4}
              reverse={true}
              boldBlack
            />
          </div>
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <div id="description">
          <DescriptiveItemList data={buildFintechFutureData} />
        </div>
        <UseCases id="ckycGameChanger" data={useCasesData} />

        <BulletPointsAndTextBlock
          id="ckycForBusiness"
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

export default Ckyc;
