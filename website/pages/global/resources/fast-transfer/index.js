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

const Fast = () => {
  const bannerData = {
    heading:
      "<span class='highlighted-heading'>Fast and Secure Transfers (FAST)</span>",
    tagline:
      "Transfer funds instantly and securely in Singapore, from one participating bank to another with FAST",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/sg/fast/banner.svg",
    altText: "FAST Transfer",
  };

  const inlineImageAndParagraphData = {
    headingLight: "What is",
    headingBold: " FAST?",
    text:
      "Fast & Secure Transactions, generally known as FAST is a mode to instantly transfer funds between participating banks in Singapore securely. This electronic funds transfer service makes it easy and convenient for customers to manage their finances in one place." +
      "<br/><br/>Prior to FAST, the payment infrastructure in Singapore could take up to 2-3 working days for interbank funds transfer. Instant and seamless mobile transfers were only possible with a new payments infrastructure that connected interbank payment stacks across the country. Soon, a solution by the Monetary Authority of Singapore came up that could be accessed from laptops or mobiles 24X7 enabling 26 participating banks and 7 non-financial institutions to transfer up to $10,000 per transaction." +
      "<br/><br/>FAST can be used to transfer funds between customer savings accounts, current accounts, or e-wallet accounts, the status of which can be accessed by your bank account via internet banking or notification service.",
    imageSrc:
      "/images/sg/resources/upi-id-verification/need-for-upi-id-verification.svg",
    altText: "Need for UPI ID verification?",
  };

  const useCasesData = {
    headingLight: "Key",
    headingBold: "Features",
    tagline: "FAST enables almost immediate receipt of money",
    block1: [
      {
        heading: "Interbank Fund<br/>Transfers",
        paragraph:
          "FAST allows you to transfer Singapore Dollar funds between participating banks and NFIs.",
        imageSrc: "/images/sg/fast/neobanks-icon.svg",
      },
      {
        heading: "Immediate Response<br/>Time",
        paragraph:
          "The transfers can now happen almost instant that usually took time around 3 days to be executed previously.",
        imageSrc: "/images/sg/fast/auto-debit.svg",
      },
      {
        heading: "High Scale<br/>Transfers",
        paragraph:
          "You can transfer any amount upto S$200,000 per transaction via FAST, that covers large use payment use cases.",
        imageSrc: "/images/sg/fast/single-time-authentication.svg",
      },
      {
        heading: "Near Real-Time<br/>Transactions",
        paragraph:
          "Get instant money transfers to any participating bank or NFIs.",
        imageSrc: "/images/sg/fast/near-real-time-transfer-icon.svg",
      },
    ],
    block1extra: [],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const tableOfContentsData = [
    { text: "What is FAST?", id: "whatIsFast" },
    { text: "Key Features", id: "KeyFeatures" },
    { text: "How Can You Leverage FAST?", id: "fastLeverage" },
    {
      text: "Why Decentro’s APIs for Fast and Secure Transfers (FAST)?",
      id: "howCanDecentroHelp",
    },
  ];

  const businessPayouts = {
    headingLight: "Business Payouts",
    headingBold: "",
    text: "Corporate payouts can be processed with ease now. These include Dividends, bonuses, salaries, and other payouts that might come across.",
    imageSrc: "/images/sg/fast/business-payouts.svg",
    altText: "Business Payouts",
  };

  const businessCollections = {
    headingLight: "Business Collections",
    headingBold: "",
    text: "Receive payments from your customers directly, securely, and instantly to your linked account.",
    imageSrc: "/images/sg/fast/merchant-collections.svg",
    altText: "Business Collections",
  };

  const merchantPayments = {
    headingLight: "Merchant Payments",
    headingBold: "",
    text: "Facilitate easy payments to merchants via FAST instantly, round the clock.",
    imageSrc: "/images/sg/fast/insurance-premiums.svg",
    altText: "Merchant Payments",
  };

  const transferFunds = {
    headingLight: "Transfer Funds",
    headingBold: "",
    text: "Save the hassle of waiting days to pay your peers. Send money instantly via bank account transfer.",
    imageSrc: "/images/sg/fast/request.svg",
    altText: "Transfer Funds",
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const howCanDecentroHelpData = {
    headingLight: "FAST Transfer for Businesses ",
    headingBold: "- How Can Decentro Help",
    tagline: "",
    bulletPointsHeader:
      "Why Decentro’s APIs for Fast and Secure Transfers (FAST)?",
    bulletPoints: [
      {
        text: "Fully flexible API-based flow for registration and presentation.",
      },
      {
        text: "Improved Reconciliation by letting Debits flow into a customer's Virtual account.",
      },
      {
        text: "Callbacks for registration as well as debits and credits into the mapped VA.",
      },
      { text: "Sub-merchant onboarding for all clients on their own handles." },
      {
        text: "Unlimited rollover of unused API hits with Multiple banking partners.",
      },
    ],
  };

  const recommendedPagesData = [
    {
      title: "Payment Collection",
      description:
        "Make faster and cost effective payouts to customers on the go.",
      pageLink: "/global/products/instant-payouts",
      imageSrc: "/images/sg/recommended-pages/upi-autopay-banner.png",
    },
    {
      title: "PayNow APIs",
      description:
        "Enable seamless fund transfer for your customers, partners and merchants with PayNow APIs. Set up real time payments & collections for your business",
      pageLink: "/global/resources/paynow",
      imageSrc: "/images/sg/recommended-pages/upi-payment-banner.svg",
    },
  ];

  const accordionData = [
    {
      query: "How long does a FAST transfer take?",
      solution:
        "FAST enables almost immediate receipt of funds. You will know the status of the transfer by accessing your bank or e-wallet account via Internet banking service or via any other notification service offered by your bank or non-bank financial institutions (NFIs), including via mobile application or website.",
      bulletPoints: [],
    },
    {
      query: "Is there a limit for FAST transfer?",
      solution:
        "You can transfer funds up to S$200,000 per transaction subject to the daily, monthly or annual transaction or any maximum allowable limits imposed by your bank or NFI. Please contact your bank or NFI for more information on this limit and the minimum limit.",
      bulletPoints: [],
    },
    {
      query: "How does a FAST payment work in Singapore?",
      solution:
        "For bank customers, you can access FAST via your bank’s internet banking service using devices such as tablets, smartphones or personal computers. For NFI customers, you can access FAST via your e-wallet on the mobile application or website (if applicable). You will need the recipient’s name and bank/e-wallet account number to transfer funds.",
    },
    {
      query: "Which banks in Singapore have FAST transfers?",
      solution:
        "FAST is offered by the following banks - ANZ Bank, Bank of China Limited, BNP Paribas, CIMB Bank, Citibank, DBS Bank / POSB, Deutsche Bank, HL Bank, HSBC, HSBC Bank (Singapore) Limited, ICICI Bank Limited, Industrial and Commercial Bank of China Limited, Maybank Singapore Limited, Malayan Banking Berhad, Singapore Branch, Mizuho Bank Limited, OCBC Bank, RHB Bank, Standard Chartered Bank, Sumitomo Mitsui Banking Corporation, The Bank of Tokyo-Mitsubishi UFJ, Ltd and United Overseas Bank.",
      bulletPoints: [],
    },
    {
      query: "What is the difference between FAST and PayNow?",
      solution:
        "Each method is subject to different limits. PayNow only allows transfers of SGD 5,000 per transaction if recipients are not added, while FAST transfers are subject to limits set by each user’s respective bank. Moreover, between the two methods, PayNow withdrawals are not currently available, so users have to rely on FAST.",
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
          Fast and Secure Transfers | Fund Transfers with FAST | Decentro
        </title>
        <link
          rel="canonical"
          href={`${urls.ROOT_URL}resources/fast-transfer`}
        />
        <link
          rel="alternate"
          href="https://decentro.tech/global/resources/fast-transfer"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Transfer funds instantly and securely in Singapore, 24x7. Enable FAST and leverage Decentro's Fund Transfer APIs. Get started within minutes."
        />
        <meta
          name="keywords"
          content="fast , fast transfer,fast singapore,fast payment singapore, fast payment , fast transfer singapore , fast collection dbs , what is faster payments"
        />
        <meta
          property="og:title"
          content="Fast and Secure Transfers | Fund Transfers with FAST | Decentro"
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
            id="whatIsFast"
            data={inlineImageAndParagraphData}
          />
        </div>
        <UseCases id="KeyFeatures" data={useCasesData} />
        <div
          className={styles["upi-id-verification-apis-applications"]}
          id="fastLeverage"
        >
          <h2>
            How Can You Leverage <span>FAST?</span>
          </h2>
          <div
            className={styles["upi-id-verification-apis-applications-content"]}
          >
            <InlineImageAndParagraph
              zoom={true}
              data={businessPayouts}
              reverse={false}
              boldBlack
            />

            <InlineImageAndParagraph
              zoom={true}
              data={businessCollections}
              reverse={true}
              boldBlack
            />

            <InlineImageAndParagraph
              zoom={true}
              data={merchantPayments}
              reverse={false}
              boldBlack
            />

            <InlineImageAndParagraph
              zoom={true}
              data={transferFunds}
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

export default Fast;
