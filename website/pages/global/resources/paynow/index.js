import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../../../sgRequests";
import urls from "../../../../sgUrls";

import ProductBanner from "../../../../components-sg/product-banner/product-banner";

const TableOfContents = dynamic(() =>
  import("../../../../components-sg/table-of-contents/table-of-contents")
);
const InlineImageAndParagraph = dynamic(() =>
  import(
    "../../../../components-sg/inline-image-and-paragraph/inline-image-and-paragraph"
  )
);
const UseCases = dynamic(() =>
  import("../../../../components-sg/use-cases/use-cases")
);
const BulletPointsAndTextBlock = dynamic(() =>
  import(
    "../../../../components-sg/bullet-points-text-block/bullet-points-text-block"
  )
);
const RecommendedPages = dynamic(() =>
  import("../../../../components/recommended-pages/recommended-pages")
);
const TextAndButtonBannerTransparent = dynamic(() =>
  import(
    "../../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent"
  )
);
const FaqAccordion = dynamic(() =>
  import("../../../../components/faq-accordion/faq-accordion")
);
import styles from "../../../../styles/page-styles/upi-verification.module.scss";

const PayNow = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>PayNow APIs</span>",
    tagline:
      "Enable seamless fund transfer for your customers, partners and merchants with PayNow APIs. Set up real time payments & collections for your business",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/sg/paynow/banner.svg",
    altText: "PayNow",
  };

  const inlineImageAndParagraphData = {
    headingLight: "What is",
    headingBold: "PayNow?",
    text:
      "PayNow is a peer-to-peer fund transfer service that enables all users of the participating banks and NFIs to settle funds via their bank accounts or e-wallets to another via Virtual Payment Address, mobile number, or Singapore NRIC/FIN instantly." +
      "<br/><br/>The underlying technology behind PayNow is FAST, which enables 24X7 near real-time transactions. This enables the sender to simply load money into another’s wallet/bank account without knowing the provider of their wallet or issuing bank." +
      "<br></br>PayNow can also be used by corporate businesses, government agencies, societies, and others, that are termed “entities.” This enables entities in Singapore to instantly pay and get paid in Singapore Dollar funds by simply linking their Unique Entity Number (UEN) to their Singapore bank account. The best part, this service is available 365 days a year without any limitations.",
    imageSrc: "/images/sg/paynow/what-is-enach.svg",
    altText: "What is PayNow?",
  };

  const useCasesData = {
    headingLight: "Key",
    headingBold: "Features",
    tagline: "PayNow enables almost immediate receipt of money",
    block1: [
      {
        heading: "Ease of<br/>payment",
        paragraph:
          "Make payments via mobile number or VPA rather than complex account details to undertake a transaction",
        imageSrc: "/images/sg/paynow/single-time-authentication.svg",
      },
      {
        heading: "Merchant<br/>acceptance",
        paragraph:
          "Access the flexibility of the payee or the payer being a merchant or consumer while making transactions",
        imageSrc: "/images/sg/paynow/data-augmentation-icon.svg",
      },
      {
        heading: "Transaction<br/>reconciliation",
        paragraph:
          "Generate a unique QR code for each transaction to ensure seamless reconciliation at the transaction level and reduce operational overheads",
        imageSrc: "/images/sg/paynow/mandate-registration.svg",
      },
    ],
    block1extra: [
      {
        heading: "Convenience of<br/>payment",
        paragraph:
          "Access multiple payment options, including offline QR and online QR codes across static or dynamic, and pay to a mobile, VPA, UEN, or NRIC linked to PayNow",
        imageSrc: "/images/sg/paynow/settlement-delays-icon.svg",
      },
      {
        heading: "Large transaction<br/>limits",
        paragraph:
          "Ensure lower rejection of transactions due to limits at a transaction or account level that cater to most consumer and even business use cases",
        imageSrc: "/images/sg/paynow/near-real-time-transfer-icon.svg",
      },
      {
        heading: "Network<br/>Interoperability",
        paragraph:
          "Extended access to networks like UPI to ensure coverage outside Singapore",
        imageSrc: "/images/sg/paynow/customer-experience.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const tableOfContentsData = [
    { text: "What is PayNow?", id: "whatIsPayNow" },
    { text: "Key Features", id: "KeyFeatures" },
    { text: "How Can You Leverage PayNow APIs?", id: "payNowLeverage" },
    { text: "Why Decentro’s APIs for PayNow?", id: "howCanDecentroHelp" },
  ];

  const posTransactions = {
    headingLight: "POS Transactions",
    headingBold: "",
    text: "Access static or dynamic PayNow QR codes in offline stores to help merchants accept transactions through PayNow with minimal hassles.",
    imageSrc: "/images/sg/paynow/pos-transaction.svg",
    altText: "POS Transactions",
  };

  const onlineCommerce = {
    headingLight: "Online Commerce",
    headingBold: "",
    text: "Conduct online transactions, especially those catering to business purchases via PayNow, due to the higher limits offered by PayNow.",
    imageSrc: "/images/sg/paynow/online-commerce.svg",
    altText: "Online Commerce",
  };

  const loanRepayment = {
    headingLight: "Loan Repayments",
    headingBold: "",
    text: "As a lender, accept payments through PayNow as a means for the borrowers due to its widespread usage.",
    imageSrc: "/images/sg/paynow/loan-repayments.svg",
    altText: "Loan Repayments",
  };

  const crossBorder = {
    headingLight: "Cross-Border Usage",
    headingBold: "",
    text: "Facilitate transactions from other geographies with minimal hassles using PayNow.",
    imageSrc: "/images/sg/paynow/cross-border-usage.svg",
    altText: "Cross-Border Usage",
  };
  const payouts = {
    headingLight: "Pay-Outs & Settlements",
    headingBold: "",
    text: "Avoid transaction errors by using PayNow through mobile number, VPA to pay vendors, partners, agents, etc",
    imageSrc: "/images/sg/paynow/payouts.svg",
    altText: "Pay-Outs & Settlements",
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const howCanDecentroHelpData = {
    headingLight: "PayNow for Businesses ",
    headingBold: "- How Can Decentro Help",
    tagline: "",
    bulletPointsHeader: "Why Decentro’s APIs for PayNow?",
    bulletPoints: [
      {
        text: "Fully flexible API or dashboard based flow for collections and payments.",
      },
      {
        text: "Improved Reconciliation by letting Debits and Credits flow into a customer's Virtual account.",
      },
      {
        text: "Instantaneous intimation through callbacks for every transaction including collections and payments",
      },
      {
        text: "Create dynamic QR codes for each transaction for customer to pay to you or your partner",
      },
      {
        text: "Unlimited rollover of unused API hits with multiple banking partners",
      },
      { text: "Real-time monitoring of transactions on Decentro’s dashboard" },
    ],
  };

  const recommendedPagesData = [
    {
      title: "Fast and Secure Transfers (FAST)",
      description:
        "Transfer funds instantly and securely in Singapore, from one participating bank to another with FAST",
      pageLink: "/sg/resources/fast-transfer",
      imageSrc: "/images/sg/fast/banner.svg",
    },
    {
      title: "Payment Collection",
      description:
        "Make faster and cost effective payouts to customers on the go.",
      pageLink: "/sg/products/instant-payouts",
      imageSrc: "/images/sg/recommended-pages/upi-autopay-banner.png",
    },
  ];

  const accordionData = [
    {
      query: "What is PayNow in Singapore?",
      solution:
        "PayNow offers an enhanced funds transfer experience that enables retail customers of the participating banks and NFIs to send and receive Singapore Dollar funds from one bank or e-wallet account to another in Singapore through FAST by using just their mobile number, Singapore NRIC/FIN or Virtual Payment Address (VPA), instantly. The sender no longer needs to know the recipient’s bank/e-wallet provider and account number when transferring money via PayNow.",
      bulletPoints: [],
    },
    {
      query: "How do I set up PayNow?",
      solution:
        "To set up PayNow, you will need an eligible bank account from any supported provider. You’ll then need to register for PayNow by linking your mobile number, National Registration Identity Card (NRIC) number and Foreign Identification Number (FIN) to your account. Once you’re registered, you can make a payment by logging into your banking system online or on your smartphone. The exact steps may vary a little depending on who you bank with, but the process will be broadly the same :",
      bulletPoints: [
        { text: "Log into online or mobile banking and select PayNow" },
        {
          text: "Look for Transfer and then tap the type of payment - to a mobile, NRIC, for example",
        },
        {
          text: "Tap Start transfer and follow the prompts to enter the recipient details - like a phone number or NRIC/FIN number",
        },
        {
          text: "Add the amount you want to transfer - you may also need to confirm the payment method by clicking the correct linked account",
        },
        { text: "Enter a reference or message to the recipient" },
        ,
        {
          text: "Check over confirm, and your money will be transferred instantly",
        },
      ],
    },
    {
      query: "Is PayNow only for Singapore?",
      solution:
        "PayNow is only available for participating banks in Singapore.",
    },
    {
      query: "Are UPI and PayNow linked?",
      solution:
        "India and Singapore have linked their respective digital payment systems, Unifies Payments Interface[UPI] and PayNow, respectively. This linkage will enable those living in India to send money to people living in Singapore quickly. Currently, Indians can transfer up to SDG 1,000 (around Rs 62,000) a day, as per RBI.",
      bulletPoints: [],
    },
    {
      query: "Which banks are supported with PayNow?",
      solution:
        "PayNow is supported by most of the major banks operating in Singapore, including:",
      bulletPoints: [
        { text: "Bank of China" },
        {
          text: "Citibank Singapore",
        },
        {
          text: "DBS Bank/POSB",
        },
        {
          text: "HSBC",
        },
        { text: "ICBC" },
        ,
        {
          text: "Maybank",
        },
        {
          text: "OCBC Bank",
        },
        {
          text: "Standard Chartered",
        },
        {
          text: "United Overseas Bank",
        },
      ],
    },
  ];

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
          PayNow APIs | Enable PayNow Transfer in Singapore | Decentro
        </title>
        <link rel="canonical" href={`${urls.ROOT_URL}resources/paynow`} />
        <link
          rel="alternate"
          href="https://decentro.tech/global/resources/paynow"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Enable seamless fund transfer across Singapore. Enable PayNow Transfer with Decentro's Singapore PayNow APIs and get started within minutes."
        />
        <meta
          name="keywords"
          content="paynow , stripe paynow, paynow qr code, pay now, paynow singapore , paynow payment , paynow app, paynow qr, how to paynow using qr code , how to activate paynow , how to use paynow , paynow limit , how to check paynow transactions , qr code payment "
        />
        <meta
          property="og:title"
          content="PayNow APIs | Enable PayNow Transfer in Singapore | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className={styles["upi-id-verification-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["upi-id-verification-details"]}>
          <InlineImageAndParagraph
            id="whatIsPayNow"
            data={inlineImageAndParagraphData}
          />
        </div>
        <UseCases id="KeyFeatures" data={useCasesData} />
        <div
          className={styles["upi-id-verification-apis-applications"]}
          id="payNowLeverage"
        >
          <h2>
            How Can You Leverage <span>PayNow APIs?</span>
          </h2>
          <div
            className={styles["upi-id-verification-apis-applications-content"]}
          >
            <InlineImageAndParagraph
              zoom={true}
              data={posTransactions}
              reverse={false}
              boldBlack
            />

            <InlineImageAndParagraph
              zoom={true}
              data={onlineCommerce}
              reverse={true}
              boldBlack
            />

            <InlineImageAndParagraph
              zoom={true}
              data={loanRepayment}
              reverse={false}
              boldBlack
            />

            <InlineImageAndParagraph
              zoom={true}
              data={crossBorder}
              reverse={true}
              boldBlack
            />

            <InlineImageAndParagraph
              zoom={true}
              data={payouts}
              reverse={false}
              boldBlack
            />
          </div>
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={howCanDecentroHelpData}
        />
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
};

export default PayNow;
