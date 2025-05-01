import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/penny-drop-verification.module.scss";
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
import ResourcesMethodologyMultipleRows from "../../../components/resources-methodology-multiple-rows/resources-methodology-multiple-rows";
import InlineImageTextMap from "../../../components/inline-image-text-map/inline-image-text-map";
import DescriptiveItemListFour from "../../../components/descriptive-item-list-four/descriptive-item-list-four";

function PennyVerification() {
  const bannerData = {
    heading:
      "<span class='highlighted-heading'>Penny Drop Verification</span><br/>for Businesses",
    tagline:
      "Initiate bank account verification to validate your customer's identity instantly",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/penny-drop-verification/banner.svg",
    altText: "Penny Drop Verification",
    buttonDescription: "Penny Drop | Penny Pull | Penny Less",
    DBackground: true,
  };

  const useCasesData = {
    heading: "Key Features Of <span>Penny Drop Verification API</span>",
    tagline: "",
    block1: [
      {
        heading: "Fraud<br/>Detection",
        paragraph:
          "With secure and transparent access to data, the risk of identity fraud is eliminated right at the onboarding process.",
        imageSrc: "/images/resources/aadhaar-verification/fraud.svg",
      },
      {
        heading: "Instant<br/>Checks",
        paragraph:
          "Validate merchant/customer authenticity via selective credentials such as the IFSC code and account number.",
        imageSrc: "/images/resources/pan-verification/instant-checks.svg",
      },
      {
        heading: "Bulk Account<br/>Verification",
        paragraph:
          "Do a single account verification or bulk verifications in one go via APIs.",
        imageSrc:
          "/images/resources/penny-drop-verification/bulk-verification.svg",
      },
    ],
    block1extra: [
      {
        heading: "Enhanced<br/>Accuracy",
        paragraph:
          "Ensure accuracy by verifying the customer’s bank account information directly with the bank, thereby eliminating the risk of human error.",
        imageSrc: "/images/resources/aadhaar-verification/shield.svg",
      },
      {
        heading: "Accelerated<br/>Onboarding",
        paragraph:
          "Retrieve and authenticate information via powerful APIs without exposing data to a third party, thereby eliminating delays in onboarding new vendors/ merchants/clients.",
        imageSrc: "/images/resources/digital-lending/fast.svg",
      },
      {
        heading: "Automated<br/>Workflows",
        paragraph: "Easy-to-integrate APIs for your existing workflows.",
        imageSrc: "/images/resources/pan-verification/automated.svg",
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
    headingLight: "Penny Drop verification for your business ",
    headingBold: "- The Decentro Edge",
    tagline: "",
    bulletPointsHeader: "How Can Decentro Help?",
    bulletPoints: [
      {
        text: "Single API for instantly validating a user’s bank account via penny drop/pull/less verification.",
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
        text: "Leverage multi-bank architecture in the backend so that unexpected downtimes, black swan events, or volume spikes will not impact your business.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link: "https://docs.decentro.tech/reference/payments_api-validate-bank-account",
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Robust and efficient APIs to <span>prevent fraud before it strikes</span>",
    ctaButtonText: "Sign Up",
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
      title: "Bank Account Validation API",
      description:
        "Initiate instant bank account verification through account numbers validation (and other details)",
      pageLink: "/resources/bank-account-validation-api/",
      imageSrc: "/images/resources/bank-account-validation.svg",
    },
  ];

  const accordionData = [
    {
      query: "What is Penny Drop Verification?",
      solution:
        "Penny drop is an account verification method that involves depositing a small amount in a subscriber's bank account for authentication before crediting funds to the beneficiary.",
      bulletPoints: [],
    },
    {
      query: "What is Penny Less verification?",
      solution:
        "Penny Less bank account verification helps you check the legitimacy of onboarding users by using their bank account number and IFSC code. No amount is sent to the end user’s account for verification.",
      bulletPoints: [],
    },
    {
      query: "What is Penny Pull Verification?",
      solution:
        "Penny Pull is an account verification method that involves retrieving a small amount from the subscriber's bank account for authentication before crediting funds to the beneficiary.",
    },
    {
      query: "Is Penny Drop safe?",
      solution:
        "Yes. Penny Drop Verification adds an extra layer of security to the onboarding process. It ensures that the bank account belongs to the user and reduces the risk of fraudulent activities.",
    },
    {
      query: "What are the benefits of Penny Drop?",
      solution:
        "Penny drop verification offers several benefits over traditional methods of account verification, such as manual bank transfers or credit card authorizations. Some of these benefits include:",
      bulletPoints: [
        {
          text: "Increased security: Penny drop verification is a highly secure method of account verification, as it ensures that the account belongs to the intended recipient and cannot be used for fraudulent purposes.",
        },
        {
          text: "Reduced fraud: By verifying the account before completing the transaction, penny drop verification helps reduce instances of payment fraud and unauthorized transactions.",
        },
        {
          text: "Faster processing: Penny drop verification is a quick and easy process that can be completed in real-time, thus reducing transaction processing times.",
        },
        {
          text: "Lower costs: Compared to traditional methods of account verification, penny drop verification is a cost-effective option that can help businesses save money on transaction processing fees.",
        },
        {
          text: "Improved customer experience: By reducing instances of payment fraud and unauthorized transactions, penny drop verification can help improve the overall customer experience and build trust with customers.",
        },
      ],
    },
    {
      query:
        "How can I get started using Penny Drop Verification for my business?",
      solution:
        "Drop us a message at <a href='mailto:hello@decentro.tech'>hello@decentro.tech</a>, and we will enable the Penny Drop Verification for your business use case.",
    },
    {
      query: "Is Penny Drop Verification needed for my business?",
      solution:
        "Yes. If your business deals with online transactions, such as E-commerce purchases, Bill payments and Money transfers, Penny Drop verification is an effective method to enable bank account validation for your use case.",
    },
  ];

  const inlineImageAndParagraphData = {
    headingLight: "What is",
    headingBold: " Aadhaar &",
    extraHeadingText: "Why Use <span>Aadhaar Verification?</span>",
    text: "Aadhaar number is a unique 12-digit number based on an individual’s biometric and demographic data and can be used to verify their identity. Aadhaar Verification is a crucial part of the customer onboarding process for a number of sectors like NBFCs, banks, lending companies, and insurance companies for fraud prevention.",
    imageSrc: "/images/resources/penny-drop-verification/what-is-aadhaar.svg",
    altText: "Aadhaar Verification API",
    titleText: "Aadhaar Verification API",
  };
  const inlineImageAndParagraphData1 = {
    headingLight: "What is ",
    headingBold: "Aadhaar Verification API?",
    extraHeadingText: "",
    text: "The Aadhaar Verification API is a powerful tool designed to confirm the authenticity of an Aadhaar card without having to ask the customer for the document or having to verify the same using an offline process. All that is required is the Aadhaar number of the individual to take the verification forward.",
    imageSrc:
      "/images/resources/penny-drop-verification/aadhaar-verification-api.svg",
    altText: "Aadhaar Verification API",
    titleText: "Aadhaar Verification API",
  };
  const typesData = {
    heading:
      "Where You Can <span class='highlighted-subsection-header'>Use It</span>",
    tagline: "",
    headingStyleThemeBlue: true,
    items: [
      {
        imageSrc: "/images/resources/penny-drop-verification/bank.svg",
        title: "Financial<br/>Services",
        description:
          "Adhere to regulatory compliance by accurately verifying customers’ account details",
      },
      {
        imageSrc: "/images/icons/payouts-to-beneficiaries.svg",
        title: "Money<br/>transfers",
        description:
          "Verify the bank accounts of both the sender and the recipient during online money transfers",
      },
      {
        imageSrc: "/images/resources/penny-drop-verification/ecom.svg",
        title: "E-Commerce<br/>Purchases",
        description:
          "Verify the bank accounts of buyers and sellers during online transactions",
      },
      {
        imageSrc: "/images/icons/in-app-payments.svg",
        title: "Bill<br/>Payments",
        description:
          "Verify the bank accounts of billers and payers during online bill payments",
      },
    ],
  };

  const methodDataPennyDrop = [
    {
      imageSrc: "/images/resources/penny-drop-verification/step1.svg",
      header: "Step 1",
      description: "Enter bank account number and IFSC code",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/step2.svg",
      header: "Step 2",
      description: "Hit the API to send a penny into customers account",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/step3.svg",
      header: "Step 3",
      description:
        "Receive verified account status and beneficiary name upon successful verification",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/step4.svg",
      header: "Step 4",
      description:
        "If verification fails, the bank account is closed or invalid",
    },
    // {
    //   imageSrc: "/images/resources/penny-drop-verification/step5.svg",
    //   header: "Step 5",
    //   description: "The process fails if the bank account is closed or invalid",
    // },
    // {
    //   imageSrc: "/images/resources/penny-drop-verification/step6.svg",
    //   header: "Step 6",
    //   description: "The token amount (INR 1) is returned to the account",
    // },
  ];

  const methodDataReversePenny = [
    {
      imageSrc: "/images/resources/penny-drop-verification/step1.svg",
      header: "Step 1",
      description: "Customer enters UPI ID",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/step2.svg",
      header: "Step 2",
      description: "Customer initiates an INR 1 transaction via UPI ID",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/step3.svg",
      header: "Step 3",
      description:
        "Receive verified account status and beneficiary name upon successful verification",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/step4.svg",
      header: "Step 4",
      description:
        "If verification fails, the bank account is closed or invalid",
    },
    // {
    //   imageSrc: "/images/resources/penny-drop-verification/step5.svg",
    //   header: "Step 5",
    //   description: "The process fails if the bank account is closed or invalid",
    // },
    // {
    //   imageSrc: "/images/resources/penny-drop-verification/step6.svg",
    //   header: "Step 6",
    //   description: "The token amount (INR 1) is returned to the account",
    // },
  ];

  const sectorData = [
    {
      imageSrc: "/images/resources/penny-drop-verification/bank.svg",
      title: "Banks / NBFCs",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/insurance.svg",
      title: "Insurance companies",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/lending.svg",
      title: "Lending platforms",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/investment.svg",
      title: "Investment platforms",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/telecom.svg",
      title: "Telecom service providers",
    },
    {
      imageSrc: "/images/resources/penny-drop-verification/travel.svg",
      title: "Travel service providers",
    },
  ];

  const inlineImageTextMapData = {
    heading: "The Need for <span>Penny Drop Verification</span>",
    tagline:
      "The primary purpose of a business carrying out a penny drop bank account verification of its customers is to ensure that:",
    items: [
      {
        imageSrc:
          "/images/resources/penny-drop-verification/fraud-detection.svg",
        altText: "Fraud Detection",
        itemTitle: "",
        itemDescription: "The beneficiary bank account exists",
      },
      {
        imageSrc: "/images/resources/aadhaar-verification/bank.svg",
        altText: "Back account",
        itemTitle: "",
        itemDescription: "The bank account is active",
      },
      {
        imageSrc: "/images/resources/penny-drop-verification/verification.svg",
        altText: "Verification",
        itemTitle: "",
        itemDescription: "Validate the account holder’s name",
      },
    ],
    itemsType: "iconDescription",
  };

  const pennyDropVerification1 = {
    headingLight: "Penny Drop",
    headingBold: "",
    text: "Verify the legitimacy of the user’s bank account by making a modest deposit of INR 1. This yields verified bank information and the beneficiary and is very effective in determining whether the associated account is active.",
    imageSrc: "/images/resources/penny-drop-verification/penny-drop.svg",
    altText: "Penny Drop",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/payments-validate-bank-account-penny-drop",
    CTAButtonText: "View Product Guide",
  };
  const pennyDropVerification2 = {
    headingLight: "Penny Pull",
    headingBold: "",
    text: "Verify bank account details by initiating a small transaction (penny pull) and confirming it with the account holder. The user can also verify the bank account details by launching the UPI app to initiate the transaction. After successful verification, the amount gets reversed, i.e., credited to the beneficiary account.",
    imageSrc: "/images/resources/penny-drop-verification/penny-pull.svg",
    altText: "Penny Pull",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/payments-userverification-pennypull-intent",
    CTAButtonText: "View Product Guide",
  };
  const pennyDropVerification3 = {
    headingLight: "Penny Less",
    headingBold: "",
    text: "Verify bank accounts before sending any money with just a few clicks. The Penny-Less Bank Account verification method helps you check the legitimacy of onboarding users by verifying the account holder’s name and/or status of the bank account via account number and/or IFSC code. No amount is sent to the end user’s account for verification.",
    imageSrc: "/images/resources/penny-drop-verification/penny-less.svg",
    altText: "Penny Less",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/payments-validate-bank-account-penny-less",
    CTAButtonText: "View Product Guide",
  };

  // Generate the FAQ schema with structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: accordionData.map((item, index) => {
      const answer = {
        "@type": "Answer",
        text: item.solution,
      };

      if (item.bulletPoints && item.bulletPoints.length > 0) {
        const bulletPointsList = item.bulletPoints.map((point) => {
          return point.text;
        });

        answer.text += "<ul>";
        bulletPointsList.forEach((point) => {
          answer.text += `<li>${point}</li>`;
        });
        answer.text += "</ul>";
      }

      return {
        "@type": "Question",
        name: item.query,
        acceptedAnswer: answer,
      };
    }),
  };

  return (
    <React.Fragment>
      <Head>
        <title>
          Penny Drop Verification APIs | Account Verification for Businesses
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/penny-drop-verification-api"
        />
        <meta
          name="description"
          content="Check out our guide on Penny Drop Verification and enable bank account verification seamlessly. Dive into Penny Drop & Penny Pull verification methods and start with Decentro."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Penny Drop Verification APIs | Account Verification for Businesses"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className={styles["penny-drop-verification"]}>
        <ProductBanner data={bannerData} />
        {/* <TableOfContents data={tableOfContentsData} /> */}
        <div className={styles["methodology-content"]} id="methodSection">
          <h2>
            <span>Methodology</span>
          </h2>
          <p>
            Validate the bank account details of individuals in the following
            steps
          </p>
          <div className={styles["penny-drop-methods-container"]}>
            <div className={styles["leverage-penny-drop-content"]}>
              <h2 className="header-black-bold">
                <span>Penny Drop</span> Verification
              </h2>
              <ResourcesMethodologyMultipleRows
                data={methodDataPennyDrop}
                itemCount={6}
              />
            </div>
            <div className={styles["leverage-penny-drop-content"]}>
              <h2 className="header-black-bold">
                <span>Reverse Penny Drop</span> Verification
              </h2>
              <ResourcesMethodologyMultipleRows
                data={methodDataReversePenny}
                itemCount={6}
              />
            </div>
          </div>
        </div>
        <InlineImageTextMap data={inlineImageTextMapData} id="methodology" />
        <div
          className={styles["penny-verification-methods"]}
          id="pennyVerificationMethods"
        >
          <h2>
            Multiple Methods for <span>Account Verification</span>
          </h2>
          <p>
            Provide users with the flexibility of deploying any of the following
            methods for the validation of bank accounts
          </p>
          <div className={styles["penny-verification-methods-content"]}>
            <InlineImageAndParagraph
              zoom={true}
              data={pennyDropVerification1}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={pennyDropVerification3}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={pennyDropVerification2}
              reverse={false}
              boldBlack
            />
          </div>
        </div>
        <DescriptiveItemListFour data={typesData} id="typesSection" />
        <UseCases id="keyFeatures" data={useCasesData} />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
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

export default PennyVerification;
