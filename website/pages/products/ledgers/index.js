import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import requests from "../../../requests";

import ProductBanner from "../../../components/product-banner/product-banner";

const TextAndButtonBanner = dynamic(
  () =>
    import("../../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DescriptiveItemList = dynamic(() =>
  import("../../../components/descriptive-item-list/descriptive-item-list")
);
const InlineItemAndParagrah = dynamic(() =>
  import(
    "../../../components/inline-item-and-paragraph/inline-item-and-paragraph"
  )
);
const TestimonialsCarousel = dynamic(() =>
  import("../../../components/testimonials-carousel/testimonials-carousel")
);
const ClientLogoCarousel = dynamic(() =>
  import("../../../components/client-logo-carousel/client-logo-carousel")
);
const FaqAccordion = dynamic(() =>
  import("../../../components/faq-accordion/faq-accordion")
);
const RecommendedPages = dynamic(() =>
  import("../../../components/recommended-pages/recommended-pages")
);
import styles from "../../../styles/page-styles/ledgers.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";

const Ledgers = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "<span class='highlighted-heading'>Record & Maintain</span> All Your Transactions On A Single <span class='highlighted-heading'>Ledger Platform</span>",
    subHeading: "",
    tagline:
      "A single and scalable system of record for all transactions and balances on your platform",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/ledgers-video.mp4",
    altText:
      "A single and scalable system of record for all transactions and balances on your platform.",
    titleText: "Ledgers",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/ledgers/banner-bg.svg",
  };

  const buildFintechFutureData = {
    heading:
      "<span class='highlighted-subsection-header'>Record</span> and <span class='highlighted-subsection-header'>Reconcile Data</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/faster-goto-market.svg",
        title: "Faster<br/>Go-to-Market",
        description:
          "Go live within hours via simple plug-and-play APIs or SDKs and worry less about integrations.",
      },
      {
        imageSrc: "/images/icons/save-limitlessly.svg",
        title: "Save<br/>Limitlessly",
        description:
          "Cut down on expenditure towards constant updates and changes in the backend stack.",
      },
      {
        imageSrc: "/images/icons/scale-quickly.svg",
        title: "Scale<br/>Quickly",
        description:
          "Reliable backend maintenance that allows you to focus on business growth while saving operational costs.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/cashback.svg",
        title: "Cashbacks",
        description:
          "Give cashback to your clients using ledgers and have it directly deposited into your clients’ accounts or wallets.",
      },
      {
        imageSrc: "/images/icons/loyalty.svg",
        title: "Loyalty",
        description:
          "Segregate loyalty points or 'coins' using ledgers, enabling access to other services within the platform.",
      },
      {
        imageSrc: "/images/icons/save-limitlessly.svg",
        title: "Pods",
        description:
          "Track monetary transactions in specific use cases like Savings, Investments, etc., within the ecosystem.",
      },
      {
        imageSrc: "/images/icons/reconciliation.svg",
        title: "Reconciliation",
        description:
          "Reconcile the flow and balances of spends automatically for the purchases made by your customers.",
      },
      {
        imageSrc: "/images/icons/fees.svg",
        title: "Fees",
        description:
          "Levy fees or charges for specific transactions, including items like forex or transfer fees.",
      },
      {
        imageSrc: "/images/icons/payouts-to-beneficiaries.svg",
        title: "Repayment",
        description:
          "Keep track of payments, repayments, and other activities related to loans and BNPLs.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Support various Ledgers",
        description:
          "Access to various ledger systems, including fiat, cashback, coins, etc., via our framework",
      },
      {
        title: "Real-Time Updates",
        description:
          "Enable real-time updates on a transaction with the least effort",
      },
      {
        title: "Mapping Transactions",
        description:
          "Monitor money flows in your sales ledger, which helps maintain latest records of transactions",
      },
      {
        title: "Set Reminders",
        description:
          "Set reminders for recurring ledger entries from customers hassle-free",
      },
      {
        title: "Easy Reconciliation",
        description:
          "Leverage Decentro’s payments stack for easy reconciliation and funds management",
      },
      {
        title: "Support across Currencies",
        description:
          "Accept international or custom currency options like USD, INR, EUR, JPY, etc",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription:
      "Record all your transactions on a single platform",
    contentImage: true,
    contentImageSrc: "/images/virtual-accounts/banner-features.svg",
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const textAndButtonBannerDataDoc = {
    ctaTitle:
      "<span className='header-section-highlighted'>Discover More, Learn More</span>",
    ctaDescription: "Access Our Product Guide Now",
    ctaButtonText: "View Documentation",
    ctaButtonLink: requests.DOC_LEDGERS,
    newTab: true,
  };

  const accordionData = [
    {
      query: "What are Ledgers?",
      solution:
        "Ledgers are closed-loop data repository which helps businesses reconcile transactions, balances, and movement of transactions across multiple sources.",
    },
    {
      query: "Are there any specific types of Ledgers supported?",
      solution:
        "Decentro offers a versatile closed-loop ledger module i,e; the platform can choose to create journals and ledgers as per their requirements for any use-case as per their business logic.",
    },
    {
      query: "Does a journal or a ledger need to be an individual only?",
      solution:
        "Not at all! Decentro's ledger module is flexible, and the platform can create ledgers for individuals, self, businesses, and any other entity deemed relevant to their use case. The platform can decide the specific use cases of a journal.",
    },
    {
      query:
        "Does the ledger module have any constraints in terms of currency?",
      solution:
        "The ledger module allows the platform the flexibility to pass entries in any currency like fiat (INR, USD, EUR, etc.) or digital currencies, or even virtual currencies like cashback, etc.",
    },
    {
      query: "What is a Ledger API?",
      solution:
        "Ledger APIs allow you to get details of the financial transaction on a given virtual bank accountWith a ledger API you can track financial data such as user balances, incoming and outgoing payments, balances owed to partners, and transactions made in different currencies.",
    },
    {
      query: "What is the use of ledger?",
      solution:
        "A bookkeeping system led by an integrated Ledger API can benefit your organization, in the following ways",
      bulletPoints: [
        {
          text: "Aggregate multiple accounts in one place",
        },
        {
          text: "Collect and analyze real-time information",
        },
        {
          text: "Bypassing untimely or missed reconciliations",
        },
        { text: "No Oversights" },
        { text: "Elimination of Errors of Reversal" },
      ],
    },
    {
      query: "What is a transaction management platform?",
      solution:
        "Used primarily in the context of ecommerce sector, transaction management is a way for an eCommerce business to ensure that the transaction-related operations of their online business are functioning in the way they intend it to, and in a way that will facilitate sales.",
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

  const recommendedPagesData = [
    {
      title: "Instant Payouts",
      description:
        "Send money to any bank account or UPI ID automatically via APIs or file upload. Available for use 24x7 on the go",
      pageLink: "/products/instant-payouts",
      imageSrc: "/images/resources/instant-payout.svg",
    },
    {
      title: "Escrow Accounts",
      description: "Manage All Your Escrow Needs In One Place",
      pageLink: "/products/escrow-accounts",
      imageSrc: "/images/escrow-accounts/banner.svg",
    },
    {
      title: "Multi-Collect",
      description:
        "Collect funds from individuals or businesses and reconcile them directly through your virtual accounts",
      pageLink: "/products/virtual-accounts",
      imageSrc: "/images/resources/multi-collect.svg",
    },
  ];

  const initialData = [
    {
      headingLight: "Customisable Ledgers",
      headingBold: "",
      text: "Access a number of fully-customisable ledger systems, including fiat, cashback, coins, etc., via our framework.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/customisable-ledgers.json",
    },
    {
      headingLight: "Transaction Monitoring",
      headingBold: "",
      text: "Monitor money flows in your ledger system, and maintain the latest records of transactions.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/transaction-monitoring.json",
    },
    {
      headingLight: "Real-time Updates",
      headingBold: "",
      text: "Stay informed with instant payment-related reports, insights, and notifications delivered directly to your dashboard in real time.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/real-time-updates.json",
    },
    {
      headingLight: "Multi-Currency Support",
      headingBold: "",
      text: "Support entries in various currencies, including fiat currencies (such as INR, USD, EUR), digital currencies, and even virtual currencies like cashback rewards.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/multi-currency-support.json",
    },
    {
      headingLight: "Set Reminders",
      headingBold: "",
      text: "Never miss a ledger entry from your customers again with our seamless reminder setup.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/set-reminders.json",
    },
    {
      headingLight: "24x7 Priority Support",
      headingBold: "",
      text: "Get 24x7x365 human-centric customer support across multiple channels including phone, email, Slack, etc.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/MultiCollect+24X7+Priority+Support.json",
    },
  ];

  let animationData = useAnimationData(initialData);

  return (
    <div className={styles["enach-container"]}>
      <Head>
        <title>Ledger as a Service | Ledger APIs | Decentro</title>
        <meta
          property="og:title"
          content="Ledger APIs | Platform to Record & Maintain Transactions"
        />
        <link rel="canonical" href="https://decentro.tech/products/ledgers" />
        <meta
          name="description"
          content="Make transaction management easy for your business using Ledger APIs. Simplify reconciliation, map transactions and get real time updates with Decentro's Ledger APIs."
        />
        <meta
          name="keywords"
          content=" Ledgers, System of Record, Accounting Transactions, Digital record keeping, Gaming ledger, Crypto Ledger, Source of truth transactions"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className={styles["ledgers"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        {/* <InlineItemAndParagrah data={possibilitiesData} /> */}
        <div className={styles["endless-possibilities"]}>
          <h2>
            Endless <span>Possibilities</span>
          </h2>
          <p>Collect Funds with Reduced Manual Efforts and Costs</p>
          <div className={styles["penny-verification-methods-content"]}>
            {animationData &&
              animationData.length > 0 &&
              animationData.map((item, index) => (
                <InlineImageAndParagraph
                  key={index}
                  data={item}
                  animatedVideo={true}
                  reverse={index % 2 != 0} // Alternate reverse
                  boldBlack
                />
              ))}
          </div>
        </div>
        <DescriptiveItemList data={betterUseCasesData} />
        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
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
    </div>
  );
};

export default Ledgers;
