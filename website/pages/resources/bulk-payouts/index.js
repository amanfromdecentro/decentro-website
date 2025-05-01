import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/bulk-payouts.module.scss";
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

function BulkPayouts() {
  const bannerData = {
    heading: "<span class='highlighted-heading'>Bulk Payouts APIs</span>",
    tagline:
      "Automate payout disbursal in bulk for vendors, franchisees, employees, and more",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/bulk-payouts.svg",
    altText: "Bulk Payouts APIs",
    DBackground: true,
  };

  const useCasesData = {
    heading: "Key Features of&nbsp;<span>Bulk Payouts APIs</span>",
    tagline: "",
    block1: [
      {
        heading: "Instant<br/>Payouts",
        paragraph:
          "Initiate payouts nationwide without settlement delays or beneficiary cooling periods.",
        imageSrc: "/images/resources/bulk-payouts/instant-payouts.svg",
      },
      {
        heading: "Comprehensive<br/>Data Visualization",
        paragraph:
          "Intuitive dashboards for your funds and insightful reports of all your transfers.",
        imageSrc: "/images/resources/bulk-payouts/data-visualization.svg",
      },
      {
        heading: "Split<br/>Payments",
        paragraph:
          "Automatically split payments and pre-define the split of payouts either in percentage or fixed values.",
        imageSrc: "/images/resources/bulk-payouts/split-payments.svg",
      },
    ],
    block1extra: [
      {
        heading: "Real-Time<br/>Data",
        paragraph:
          "Real-time data sourced from partner banks ensuring up to date information on newly created accounts.",
        imageSrc: "/images/resources/bulk-payouts/real-time-data.svg",
      },
      {
        heading: "Manage Vendors<br/>& Beneficiaries",
        paragraph:
          "Organise your vendors and beneficiaries and save all their bank account information in one dashboard.",
        imageSrc: "/images/resources/bulk-payouts/manage-beneficiaries.svg",
      },
      {
        heading: "Additional<br/>Data Validation",
        paragraph:
          "Verify additional details such as account type, Merchant category code (MCC), and IFSC code.",
        imageSrc: "/images/resources/bulk-payouts/data-validation.svg",
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

  const transfertoVA = {
    headingLight: "Transfer funds to the Virtual account",
    headingBold: "",
    text: "Deposit funds into the virtual account created for you via various payment options like NEFT/IMPS, UPI, eWallets, and more.",
    bulletPointsText: [],
    imageSrc: "/images/resources/bulk-payouts/transfer-va.svg",
    altText: "Transfer funds to the Virtual account",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/payments-collections-va-collections",
    CTAButtonText: "View Product Guide",
  };

  const beneficiaryPayouts = {
    headingLight: "Add beneficiaries for payouts",
    headingBold: "",
    text: "Add vendors, franchisees, employees, and more as beneficiaries for payouts. Include payment details for beneficiaries like bank account number, IFSC, UPI ID, etc. Bulk upload beneficiary data with a simple Excel upload.",
    bulletPointsText: [],
    imageSrc: "/images/resources/bulk-payouts/beneficiary.svg",
    altText: "Add beneficiaries for payouts",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/payments-direct-payouts#payouts-flow",
    CTAButtonText: "View Product Guide",
  };

  const initiateBulkPayouts = {
    headingLight: "Initiate bulk payouts with a single click",
    headingBold: "",
    text: "Transfer bulk payouts to your beneficiaries with a simple click and track them in real-time via our dashboards.",
    bulletPointsText: [],
    imageSrc: "/images/resources/bulk-payouts/initiate-bulk-payouts.svg",
    altText: "Initiate bulk payouts with a single click",
    CTAButtonLink: "https://docs.decentro.tech/docs/batch-payouts-json",
    CTAButtonText: "View Product Guide",
  };

  const benefitsFold1 = {
    headingLight: "",
    headingBold: "",
    text: "",
    bulletPointsText: [
      "Make payments to multiple recipients at all times.",
      "Cater to any number of beneficiaries at once.",
      "Real-time Account Validation.",
      "Automate instant refunds, claims, and cashbacks.",
      "Payouts using multiple payment modes like NEFT, IMPS, RTGS, UPI ID, etc.",
      "Validate recipient accounts for safe transfer.",
    ],
    imageSrc: "/images/resources/bulk-payouts/benefits-fold-1.svg",
    altText: "",
  };
  const benefitsFold2 = {
    headingLight: "",
    headingBold: "",
    text: "",
    bulletPointsText: [
      "Single dashboard for all receivables and payouts.",
      "Track and manage funds in real-time.",
      "On-time and easy disbursements.",
      "Fully compliant Bulk Payout flows as an RBI-certified payments aggregator.",
      "Improved employee, partner, or vendor satisfaction.",
      "Payouts can be done instantly 24x7, even on a bank holiday.",
    ],
    imageSrc: "/images/resources/bulk-payouts/benefits-fold-2.svg",
    altText: "",
  };

  const howCanDecentroHelpData = {
    headingLight: "Bulk Payouts For Your Business ",
    headingBold: "- How Can Decentro Help",
    tagline:
      "Decentro’s API banking platform has APIs to help businesses like yours provide a seamless experience to their customers, partners, and vendors!",
    bulletPointsHeader: "Why Decentro’s APIs for Bulk Payouts?",
    bulletPoints: [
      {
        text: "Fully flexible API-based flow for registration and presentation.",
      },
      {
        text: "API-based flow that can be embedded easily in your existing workflows.",
      },
      {
        text: "Improved Reconciliation by letting Debits flow into a customer’s Virtual account.",
      },
      {
        text: "Fully API-based flow compared to SDK flows provided by other players.",
      },
      {
        text: "Callbacks for registration as well as debits and credits into the mapped VA.",
      },
      {
        text: "Track all transaction details in a dedicated dashboard for your business. Visit ledger page with reconciled payments and peruse data.",
      },
      {
        text: "Sub-merchant onboarding for all clients on their handles.",
      },
      {
        text: "Unlimited rollover of unused API hits with Multiple banking partners.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link: "https://docs.decentro.tech/docs/payments-direct-payouts",
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
      text: "Disburse Bulk Payouts in Three Easy Steps",
      id: "leverageBulkPayouts",
    },
    {
      text: "Benefits of choosing Bulk Payouts APIs for your business",
      id: "benefitsBulkPayouts",
    },
    {
      text: "Key Features of Bulk Payouts APIs",
      id: "keyFeatures",
    },
    {
      text: "Industry Use-Cases",
      id: "industryUseCases",
    },
    {
      text: "Bulk Payouts For Your Business - How Can Decentro Help",
      id: "howCanDecentroHelp",
    },
    {
      text: "Commonly Asked Questions",
      id: "commonlyAskedQuestions",
    },
  ];

  const recommendedPagesData = [
    {
      title: "Instant Payouts",
      description:
        "Send money to any bank account or UPI ID automatically via APIs or file upload.",
      pageLink: "/products/instant-payouts",
      imageSrc: "/images/resources/instant-payout.svg",
    },
    {
      title: "DigiLocker",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/digilocker-apis/",
      imageSrc: "/images/resources/digilocker.svg",
    },
  ];

  const accordionData = [
    {
      query: "Are there any charges applicable for making bulk payouts?",
      solution:
        "A transaction fee is applicable on payouts as per the mode of payment and the payment gateway used. To know more about the transaction charges, drop us at hello@decentro.tech, and we’ll gladly assist you.",
      bulletPoints: [],
    },
    {
      query: "What are the modes of payment available for Bulk Payouts?",
      solution:
        "You can initiate payouts via the broadest range of payment options (RTGS, NEFT, bank fund transfers, UPI, Wallet, etc.) for your vendors, franchise, employees, and more, per your requirements.",
      bulletPoints: [],
    },
    {
      query: "Is There Any Transaction Limit On UPI, IMPS, NEFT, or RTGS?",
      solution:
        "There's no per-day limit like in banks. However, there is an INR 1 lakh limit per transaction on UPI, INR 5 lakh on IMPS, and no limit on NEFT and RTGS.",
    },
    {
      query: "What types of payouts can be made using Bulk Payouts API?",
      solution:
        "Bulk Payouts can be used to make the following types of payouts:",
      bulletPoints: [
        { text: "Vendor payouts" },
        { text: "Salary payouts" },
        { text: "Refunds" },
        {
          text: "Cashback payouts",
        },
        {
          text: "Loan disbursements",
        },
        {
          text: "Insurance claims payouts",
        },
        {
          text: "Travel agent commissions",
        },
        {
          text: "Any other type of mass pay",
        },
      ],
    },
    {
      query:
        "Is there any limit on the number of beneficiaries or the payout amount using Bulk Payouts?",
      solution:
        "Bulk Payouts do not have any limit on the number of beneficiaries or the payout amount. However, the payout amount should not exceed the available balance in the merchant’s account.",
    },
  ];

  const industryUseCasesData = [
    {
      imageSrc: "/images/resources/bulk-payouts/local.svg",
      title: "Hyperlocal<br/>Services",
      description: "On-Demand Wage Payouts",
    },
    {
      imageSrc: "/images/resources/bulk-payouts/ecom.svg",
      title: "E-commerce<br/>Platforms",
      description: "Instant Refund Processing",
    },
    {
      imageSrc: "/images/resources/bulk-payouts/loan.svg",
      title: "Loan<br/>Providers",
      description: "Instant Loan Disbursals",
    },
    {
      imageSrc: "/images/resources/bulk-payouts/gaming.svg",
      title: "Gaming",
      description: "Real-Time Cashouts",
    },
    {
      imageSrc: "/images/resources/bulk-payouts/marketplace.svg",
      title: "Marketplace",
      description: "Automated Vendor Payouts",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>Bulk Payouts APIs | Make Bulk Vendor Payments | Decentro</title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/bulk-payouts"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/bulk-payouts"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Simplify Bulk Payout Disbursal with Decentro’s Bulk Payouts APIs. With Decentro’s APIs, integrate Bulk Payouts into your payment workflow within weeks!"
        />
        <meta name="keywords" content="Debt Collection, Loan Collection APIs" />
        <meta
          property="og:title"
          content="Bulk Payouts APIs | Make Bulk Vendor Payments | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["bulk-payouts-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div
          className={styles["leverage-bulk-payouts"]}
          id="leverageBulkPayouts"
        >
          <h2>
            Disburse <span>Bulk Payouts</span> in Three Easy Steps
          </h2>
          <div className={styles["leverage-bulk-payouts-content"]}>
            <InlineImageAndParagraph
              data={transfertoVA}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              data={beneficiaryPayouts}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              data={initiateBulkPayouts}
              reverse={false}
              boldBlack
            />
          </div>
        </div>
        <div
          className={
            styles["leverage-bulk-payouts"] +
            " " +
            styles["benefits-bulk-payouts"]
          }
          id="benefitsBulkPayouts"
        >
          <h2>
            Benefits of choosing <span>Bulk Payouts API</span>
          </h2>
          <div className={styles["leverage-bulk-payouts-content"]}>
            <InlineImageAndParagraph data={benefitsFold1} reverse={true} />
            <InlineImageAndParagraph data={benefitsFold2} reverse={false} />
          </div>
        </div>
        <UseCases id="keyFeatures" data={useCasesData} />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <div
          className={styles["industry-usecases-section"]}
          id="industryUseCases"
        >
          <h2>
            <span>Industry</span> Use-Cases
          </h2>
          <IndustryUseCases data={industryUseCasesData} />
        </div>
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

export default BulkPayouts;
