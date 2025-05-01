import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/debt-collection-software.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../../components/use-cases/use-cases";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import TextAndImageBlocks from "../../../components/text-and-image-blocks/text-and-image-blocks";
import urls from "../../../urls";

function DebtCollection() {
  const bannerData = {
    heading:
      "<span class='highlighted-heading'>Debt Collections Platform</span>",
    tagline:
      "Reduce Non-Performing Assets | Ensure Compliance | Increase Efficiency",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: urls.SIGNUP_DEBT_COLLECTION,
    imageSrc: "/images/resources/debt-collection.svg",
    altText: "Debt Collections Platform",
    DBackground: true,
  };

  const needforCAASData = {
    extraHeadingText: "Need for a Debt Collections Software",
    text: "According to the latest RBI data, the Indian banking system’s credit grew 16.1% year-on-year to a whopping INR 134.17 trillion. The rising demand for credit, greater financial awareness, and expectations for a seamless experience have compelled lenders to adopt digitization.<br/>But with Debt collection complaints rising and affecting bank ratings, there is still a need to create a robust and scalable lending infrastructure, which will depend mainly on the efficacy of the debt collection processes.<br/><br/>This is where Decentro’s Debt Collection product comes useful as an effective collection solution that automates lenders' debt recovery and collection pipeline while allowing lenders to streamline and manage their loan recovery workflow.</br></br>But why should Decentro’s Debt Collection platform be your next pick for Reducing Bad Debts?<br/>Let’s understand below.",
    bulletPointsText: [],
    extraEndingText: "",
    imageSrc: "/images/resources/debt-collection/need-for-caas.svg",
    altText: "Need for CAAS",
    CTAText: "",
  };

  const benefitsData = {
    heading: "Benefits of <span>Debt Collection Platform</span>",
    tagline: "A Better Way to Simplify Collections",
    block1: [
      {
        heading: "Single Platform<br/>for Collection",
        paragraph:
          "Manage all your collection touchpoints across omnichannel communications for increased efficiency and maximized efforts.",
        imageSrc: "/images/resources/debt-collection/dashboard.svg",
      },
      {
        heading: "Better recovery<br>of Debts",
        paragraph:
          "Helps you create rule-based strategies for all communications to the borrowers by avoiding manual touchpoints and automating the entire journey.",
        imageSrc: "/images/resources/debt-collection/recovery.svg",
      },
      {
        heading: "Lower operational<br/>costs",
        paragraph:
          "Increase Automation and reduce everyday expenses by optimizing financial transactions and operational capacity.",
        imageSrc: "/images/resources/debt-collection/reduce-cost.svg",
      },
    ],
    block1extra: [
      {
        heading: "Save<br/>Limitlessly",
        paragraph:
          "Cut down on your expenditure towards heavy integrations and maintaining relationships.",
        imageSrc: "/images/resources/debt-collection/save-limitlessly.svg",
      },
      {
        heading: "Stay<br/>Compliant",
        paragraph:
          "Control, record, and gain one-click access to all collection touch points to ensure your business and teams remain ever-compliant, and you never have any legal issues.",
        imageSrc: "/images/resources/debt-collection/trackability.svg",
      },
      {
        heading: "Reduce<br/>Risks",
        paragraph:
          "Reduce delayed payments for your services by ensuring timely collections from customers.",
        imageSrc: "/images/resources/debt-collection/shield.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const keyFeaturesData = {
    heading: "Key features of our <span>Debt Collection Platform</span>",
    tagline: "Empower Lending with Confident Decisions",
    block1: [
      {
        heading: "Omnichannel<br/>Engagement",
        paragraph:
          "Communicate across channels to your users like Email, SMS, Whatsapp, IVR, Cloud Calling, Voicebots, Chatbot, Speed Post, etc.",
        imageSrc: "/images/resources/debt-collection/omnichannel-new.svg",
      },
      {
        heading: "Automation<br/>Engine",
        paragraph:
          "Helps you create rule-based strategies for all communications to the borrowers, and avoid manual touchpoints by automating the entire journey.",
        imageSrc: "/images/resources/debt-collection/automation-engine-new.svg",
      },
      {
        heading: "Centralized<br/>Legal Module",
        paragraph:
          "Customize legal workflows for sending out timely notices in physical or digital form that can be triggered, and arbitration can be conducted online through empanelled lawyers.",
        imageSrc: "/images/resources/debt-collection/legal-module-new.svg",
      },
      {
        heading: "Payment Link<br/>Generation",
        paragraph:
          "Helps you Generate Payment links for repayment via Debit Card, UPI, etc. This is further integrated for seamless communication with channels like SMS, WhatsApp, Email, Chatbot, etc.",
        imageSrc: "/images/resources/debt-collection/payment-link-new.svg",
      },
      {
        heading: "Boosts Field<br/>Agents’ Productivity",
        paragraph:
          "FieldForce helps you increase your field agents’ performance with real-time data insights, advanced task management capabilities, and comprehensive reporting and geo-tracking functionality.",
        imageSrc: "/images/resources/debt-collection/boosts-new.svg",
      },
      {
        heading: "Automate<br/>Repayments",
        paragraph:
          "Streamline your collections using Auto-pay recurring mandates with zero reminder hassles.",
        imageSrc:
          "/images/resources/debt-collection/automate-repayments-new.svg",
      },
    ],
  };

  const textAndButtonBannerData = {
    text: "<span>Simplify Collections Today</span>",
    ctaButtonText: "Talk to Our Experts!",
    newTab: false,
    ctaButtonLink: requests.SIGNUP_DEBT_COLLECTION,
  };

  const forCommunicationData = {
    headingLight: "For Communication",
    headingBold: "",
    text: "",
    bulletPointsText: [
      "Omnichannel multi-lingual reach out to borrowers.",
      "Accessibility to Digital touchpoints like SMS, IVR, Chatbot, Voicebot, Whatsapp, and Physical Touchpoints like speed post.",
      "End-to-end activity tracker at both loan account and borrower levels across different channels (messages, WhatsApp, chatbot, etc.)",
    ],
    imageSrc: "/images/resources/debt-collection/for-communication.svg",
    altText: "Simplify Loan Collections & Disbursals",
  };

  const forInformedDecisionMaking = {
    headingLight: "For Informed Decision Making",
    headingBold: "",
    text: "",
    bulletPointsText: [
      "Create rule-based strategies for all communications to the borrowers.",
      "AB testing different comms and templates to gauge the effectiveness of each before automating a strategy.",
      "Prioritization of cases as per probability of repayment.",
    ],
    imageSrc: "/images/resources/debt-collection/behaviour.svg",
    altText: "For Informed Decision Making",
  };

  const forLegalAutomation = {
    headingLight: "For Legal Automation",
    headingBold: "",
    text: "",
    bulletPointsText: [
      "Physical and digital legal notice dispatching, digital litigation tracker, and online arbitration.",
      "Integration with e-courts for a digital repository of all case proceedings across different courts.",
      "Sending and Tracking legal notices",
    ],
    imageSrc: "/images/resources/debt-collection/legal-automation.svg",
    altText: "For Legal Automation",
  };

  const forMediationAndArbitration = {
    headingLight: "For Mediation and Arbitration",
    headingBold: "",
    text: "",
    bulletPointsText: [
      "End-to-end proceedings across traditional and digital channels.",
      "Online dispute resolution for arbitration, conciliation, and mediation proceedings via impaneled arbitrators, lawyers and neutrals.    ",
    ],
    imageSrc: "/images/resources/debt-collection/mediation.svg",
    altText: "For Mediation and Arbitration",
  };

  const howCanDecentroHelpData = {
    headingLight: "Debt Collections For Your Business ",
    headingBold: "- How Can Decentro Help",
    tagline:
      "Decentro has partnered with Neowise to help you seamlessly set up debt collection systems & processes, so that you can focus on creating smooth lending experiences for your users.",
    bulletPointsHeader: "Why Decentro’s Neowise for Debt Collection?",
    bulletPoints: [
      {
        text: "The entire debt collection platform is available as a plug-and-play dashboard.",
      },
      {
        text: "Get access to detailed and customised statements, and repayment reports for accounting & compliance.",
      },
      {
        text: "Onboard approved and compliant channels to increase disbursements.",
      },
      {
        text: "Connect with lenders in the ecosystem to co-lend or run partnerships.",
      },
      {
        text: "Dedicated support to facilitate a seamless onboarding experience for the fintechs and the lenders and borrowers.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Kick Start your Debt Collection Journey",
        linkText: "Sign Up",
        link: requests.SIGNUP_DEBT_COLLECTION,
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Ready to Turn Past Due into Revenue?",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP_DEBT_COLLECTION,
  };

  const textAndButtonBannerData3 = {
    text: "<span>Reduce Bad Debts Today</span>",
    ctaButtonText: "Talk to Our Experts!",
    newTab: false,
    ctaButtonLink: requests.SIGNUP_DEBT_COLLECTION,
  };

  const tableOfContentsData = [
    {
      text: "Need for Collection as a Service (CaaS) for Debt Collections",
      id: "needforCAAS",
    },
    {
      text: "Benefits of Debt Collection Platform",
      id: "benefits",
    },
    {
      text: "How can you leverage Collection as a Service (CaaS) for Debt Collection?",
      id: "leverageDebtCollection",
    },
    { text: "Key features of our Debt Collection Platform", id: "keyFeatures" },
    {
      text: "Debt Collection For Your Business - How Can Decentro Help",
      id: "howCanDecentroHelp",
    },
  ];

  const recommendedPagesData = [
    {
      title: "UIStreams",
      description:
        "Seamlessly integrate UI-based plugins for a fully-native user verification & KYC experience with UIStreams",
      pageLink: "/products/uistreams",
      imageSrc: "/images/ui-stream/ui-stream-hero.svg",
    },
    {
      title: "DigiLocker",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/digilocker-apis/",
      imageSrc: "/images/resources/digilocker.svg",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          Debt Collection Software | Loan Collection APIs for Business |
          Decentro
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/debt-collection-software"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/debt-collection-software"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Manage debt collections with our end-to-end software & managed services. Automate communications, track accounts, and optimize collections within minutes!"
        />
        <meta name="keywords" content="Debt Collection, Loan Collection APIs" />
        <meta
          property="og:title"
          content="Debt Collection Software | Loan Collection APIs for Business | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["debt-collection-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["debt-collection-details"]}>
          <InlineImageAndParagraph id="needforCAAS" data={needforCAASData} />
        </div>
        <UseCases id="benefits" data={benefitsData} />
        {/* <UseCases id="keyFeatures" data={useCasesData} /> */}
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <div
          className={styles["leverage-debt-collection"]}
          id="leverageDebtCollection"
        >
          <h2>
            How can you leverage our{" "}
            <span>Collection as a Service (CaaS) </span>platform for{" "}
            <span>Debt Collection</span>?
          </h2>
          <div className={styles["leverage-debt-collection-content"]}>
            <InlineImageAndParagraph
              data={forCommunicationData}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              data={forInformedDecisionMaking}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              data={forLegalAutomation}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              data={forMediationAndArbitration}
              reverse={true}
              boldBlack
            />
          </div>
        </div>
        <TextAndImageBlocks id="keyFeatures" data={keyFeaturesData} />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData3} />
        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={howCanDecentroHelpData}
        />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </React.Fragment>
  );
}

export default DebtCollection;
