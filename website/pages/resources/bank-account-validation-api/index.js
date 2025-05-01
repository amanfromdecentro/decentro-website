import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/bank-account-validation-api.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../../components/use-cases/use-cases";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";

function BankAccountValidation() {
  const bannerData = {
    heading:
      "<span class='highlighted-heading'>Bank Account Validation API</span>",
    tagline:
      "Initiate instant bank account verification through account numbers validation (and other details)",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/bank-account-validation.svg",
    altText: "UPI Integration APIs for business",
    DBackground: true,
  };
  const pennyDropData = {
    heading: "",
    headingLight: "",
    headingBold: "",
    extraHeadingText: "<span>Penny Drop</span> Verification",
    text: "The legitimacy of the user’s bank account can be done by making a modest deposit of INR 1. This not only yields verified bank information and the beneficiary but also is very effective in determining whether the associated account is active or not.",
    imageSrc: "/images/resources/bank-account-validation/penny-drop.svg",
    altText: "Penny Drop",
    CTAButtonLink:
      "https://decentro.tech/resources/penny-drop-verification-api",
    CTAButtonText: "View Product Guide",
  };

  const bankAccountData = {
    headingLight: "",
    headingBold: "",
    extraHeadingText: "<span>Bank Account</span> Verification API",
    text: "A simple and reliable API can identify and authenticate a legitimate bank account via an IFSC code and customer bank account number. Right from bulk account verification, and identification of fraudulent accounts, an efficient banking API can also aid in removing manual errors where payouts are made to verified accounts.",
    imageSrc:
      "/images/resources/bank-account-validation/bank-account-verify.svg",
    altText: "Bank Account Verification API",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/payments-validate-bank-account",
    CTAButtonText: "View Product Guide",
  };

  const useCasesData = {
    heading: "Key Features of <span>Bank Account Verification API</span>",
    tagline: "",
    block1: [
      {
        heading: "Fraud Detection",
        paragraph:
          "With secure and transparent access to data, the risk of identity fraud is eliminated right at the onboarding process.",
        imageSrc: "/images/resources/bank-account-validation/fraud.svg",
      },
      {
        heading: "Instant Check",
        paragraph:
          "Validate merchant/ customers authenticity via selective credentials such as the IFSC code and account number.",
        imageSrc: "/images/resources/bank-account-validation/check.svg",
      },
      {
        heading: "Accelerated Onboarding",
        paragraph:
          "Retrieve and authenticate information via powerful APIs, without exposing data to a third party, thereby eliminating any delays in the onboarding of new vendors/ merchants/clients.",
        imageSrc: "/images/resources/bank-account-validation/onboarding.svg",
      },
      {
        heading: "Automated Workflows",
        paragraph:
          "Easy-to-integrate APIs for your existing workflows, or set up an automated workflow to elevate the customer experience with a quick and efficient verification journey.",
        imageSrc: "/images/resources/bank-account-validation/workflow.svg",
      },
    ],
    block1extra: [],
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
    headingLight: "Bank Account Verification For Your Business  ",
    headingBold: "- How Can Decentro Help",
    tagline:
      "Decentro’s API banking platform has Bank Account Verification APIs to help businesses like yours provide a seamless experience to your customers, partners, and vendors!",
    bulletPointsHeader: "Why Decentro’s APIs for Bank Account Verification?",
    bulletPoints: [
      {
        text: "Single API for validating user’s bank account instantly via penny drop verification.",
      },
      {
        text: "Flexible API-based flow that can be embedded easily in your existing workflows.",
      },
      {
        text: "Verify accounts on the fly while maintaining the accuracy and speed of onboarding as well as transactions.",
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
    text: "Robust and efficient APIs, to prevent fraud before it strikes.",
    ctaButtonText: "Get Started",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const tableOfContentsData = [
    { text: "Methodology", id: "methodology" },
    { text: "The Need for Bank Account Verification", id: "needForVerify" },
    {
      text: "Key Features of Bank Account Verification API",
      id: "keyFeatures",
    },
    {
      text: "Why Decentro’s APIs for Bank Account Verification?",
      id: "howCanDecentroHelp",
    },
  ];

  const recommendedPagesData = [
    {
      title: "DigiLocker",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/digilocker-apis/",
      imageSrc: "/images/resources/digilocker.svg",
    },
    {
      title: "GST",
      description:
        "Enrich & augment your data for vendor financing, bill discounting, and more seamlessly while serving your SME customers and partners using our GST APIs.",
      pageLink: "/resources/goods-and-services-tax-gst-api/",
      imageSrc: "/images/resources/gst.svg",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          Bank Account Validation APIs | Bank Account Validation APIs For
          Business
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/bank-account-validation-api"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/bank-account-validation-api"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Check out our guide on bank account validation API and start enabling bank account verification for your customers. Learn about its methodology and get started."
        />
        <meta name="keywords" content=">Bank Account Validation APIs" />
        <meta
          property="og:title"
          content="Bank Account Validation APIs | Bank Account Validation APIs For Business"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["bank-validation-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div
          className={styles["bank-validation-apis-applications"]}
          id="methodology"
        >
          <h2>
            <span>Methodology</span>
          </h2>
          <p>
            There are two systems in place to ensure an efficient bank account
            verification
          </p>
          <div className={styles["bank-validation-apis-applications-content"]}>
            <InlineImageAndParagraph
              zoom={true}
              data={pennyDropData}
              reverse={false}
            />
            <InlineImageAndParagraph
              zoom={true}
              data={bankAccountData}
              reverse={true}
            />
          </div>
        </div>
        <div className={styles["special-info-section"]} id="needForVerify">
          <div className={styles["special-info-wrapper"]}>
            <h2>
              The Need for<span> Bank Account Verification</span>
            </h2>
            <p className={styles["special-info-description"]}>
              The demand for enabling businesses/ vendors/ marketplaces to
              cross-check proprietary bank accounts stems from the need for risk
              mitigation. As a business your dependence on the customers to
              verify the account details of every transaction paves way for
              fraud and financial crimes such as money laundering.
              <br /> With bank account verification there is also the added
              advantage of streamlining the KYC data management. This it turn
              also reduces manual labour, and documentation errors.
              <br /> The common thread is that verifying bank accounts is
              essential for banks and other financial institutions (FIs).
            </p>
          </div>
        </div>
        <UseCases id="keyFeatures" data={useCasesData} />

        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
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

export default BankAccountValidation;
