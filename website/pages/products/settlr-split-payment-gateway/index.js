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
import styles from "../../../styles/page-styles/split-settlements.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import { transactions_processed_annually } from "../../../utilities/variables";
import SplitSetttlementsInteractions from "../../../components/interactions/settlr-split-payment-gateway";

const SplitSettlements = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading: "Split settlements for incoming payments with",
    subHeading: "",
    tagline:
      "Collect payments digitally, and seamlessly handle split payments to vendors, partners, and individual bank accounts.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    productLogo: "/images/split-settlements/settlr.svg",

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/split-settlements/1.+Header.mp4",
    altText:
      "A single and scalable system of record for all transactions and balances on your platform.",
    titleText: "Ledgers",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/split-settlements/settlr-header.svg",
    metrics: true,
    metricList: [
      {
        textBold: " BN+",
        textLight: "Processed Annually",
        numberElement: `$${transactions_processed_annually}`,
      },
      {
        textBold: "+",
        textLight: "API Hits Processed Per Day",
        numberElement: `900,000`,
      },
      {
        textBold: "+",
        textLight: "Transactions Processed Per Hour",
        numberElement: `15000`,
      },
    ],
  };

  const betterUseCasesData = {
    heading:
      "Simplify Complex <span class='highlighted-subsection-header'>Payment Outflows</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/split-settlements/faster-refunds.svg",
        title: "Faster Refunds",
        description:
          "Streamline refund processes by directly allocating funds back to customers without delays.",
      },
      {
        imageSrc: "/images/split-settlements/simplify-finance-closures.svg",
        title: "Simplify Closures",
        description:
          "Eliminate manual efforts and streamline month-end or year-end operations for finance teams effortlessly.",
      },
      {
        imageSrc: "/images/split-settlements/automate-reconcilation.svg",
        title: "Automate Reconciliation",
        description:
          "Ensure accurate payment records with automatic reconciliation of all transactions and settlements.",
      },
      {
        imageSrc: "/images/split-settlements/realtime-transfer.svg",
        title: "Real-Time Transfers",
        description:
          "Distribute funds instantly to stakeholders, ensuring quick payouts and improved cash flow management.",
      },
      {
        imageSrc: "/images/split-settlements/boost-transparency.svg",
        title: "Boost Transparency",
        description:
          "Provide clear settlement breakdowns to vendors and partners, fostering trust and better collaboration.",
      },
      {
        imageSrc: "/images/split-settlements/comprehensive-reporting.svg",
        title: "Detailed Reporting",
        description:
          "Access detailed, centralised reports of transactions, refunds, settlements, and vendor payments in one place.",
      },
    ],
  };

  const prevelantUseCases = {
    heading:
      "Prevalent <span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/split-settlements/faster-refunds.svg",
        title: "E-commerce Platforms",
        description:
          "Simplify order payments by instantly splitting payments between sellers, logistics providers, and your business account.",
      },
      {
        imageSrc: "/images/split-settlements/marketplaces.svg",
        title: "Marketplaces",
        description:
          "Manage payouts to multiple vendors or service providers while ensuring accurate commission deductions.",
      },
      {
        imageSrc: "/images/split-settlements/subscription-services.svg",
        title: "Subscription Services",
        description:
          "Distribute recurring payments to content creators, platform partners, and stakeholders without manual intervention.",
      },
      {
        imageSrc: "/images/split-settlements/travel.svg",
        title: "Travel & Hospitality",
        description:
          "Streamline customer payments by managing split payments between hotels, travel agents, and platform fees in real-time.",
      },
      {
        imageSrc: "/images/split-settlements/fintech-apps.svg",
        title: "Fintech Apps",
        description:
          "Enable fund distribution for lending, insurance, or investment products across customers, partners, and internal accounts.",
      },
      {
        imageSrc: "/images/split-settlements/education.svg",
        title: "Education Platforms",
        description:
          "Manage tuition fees or course payments by automatically allocating funds to instructors, institutions, and operational costs.",
      },
    ],
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
      'Payments Made  <span className="header-section-highlighted">Powerful</span>',
    ctaDescription: "Best in-class performance | 24x7 Support | 99.99% Uptime",
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
      query: "What is a Split Settlement?",
      solution:
        "A Split Settlement is a payment process where funds from a single transaction are automatically divided and distributed to multiple parties based on predefined rules. It ensures seamless allocation, reducing manual efforts and errors.",
    },
    {
      query: "Can we have different payment schedules?",
      solution:
        "Yes, Settlr allows businesses to configure custom payment schedules for different vendors or partners, catering to unique agreements or business needs.",
    },
    {
      query: "How long does it take to add a vendor?",
      solution:
        "Adding a vendor is quick and hassle-free. The process is instant, ensuring minimal delays in onboarding.",
    },
    {
      query:
        "How are vendor settlements managed for multi-vendor transactions?",
      solution:
        "Settlr automatically calculates and distributes payments to each vendor based on pre-configured rules defined by the user, ensuring accuracy and transparency even when multiple vendors are linked to a single transaction.",
    },
    {
      query: "Does Settlr provide real-time split settlement insights?",
      solution:
        "Absolutely! Settlr offers a centralised dashboard with live tracking of transaction statuses, settlement breakdowns, and reconciliation data to keep you informed at every step.",
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
      title: "Multi-Collect",
      description:
        "Collect funds from individuals or businesses and reconcile them directly through your virtual accounts",
      pageLink: "/products/virtual-accounts",
      imageSrc: "/images/resources/multi-collect.svg",
    },
    {
      title: "UPI Payment Gateway",
      description:
        "Boost your platform by accepting UPI payments from apps like BHIM, PhonePe, and Google Pay.",
      pageLink: "/products/upi-payment-gateway/",
      imageSrc: "/images/resources/upi-collections.svg",
    },
    {
      title: "Bulk Payouts APIs",
      description:
        "Automate payout disbursal in bulk for vendors, franchisees, employees, and more.",
      pageLink: "/resources/bulk-payouts",
      imageSrc: "/images/resources/bulk-payouts.svg",
    },
  ];
  const initialData = [
    {
      headingLight: "Seamless Multi-Party Splits",
      headingBold: "",
      text: "Distribute payments across multiple vendors, partners, or accounts effortlessly, regardless of complexity or volume.",
      imageWidth: "40%",
      animationUrl:
        //  requests.ASSETS_BASE_URL_S3 + "/split-settlements/2.+Seamless+Multi-Party+Splits.mp4",
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/customisable-ledgers.json",
    },
    {
      headingLight: "Customisable Payment Flows",
      headingBold: "",
      text: "Set up tailored settlement rules to match your business model and partner agreements precisely.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/transaction-monitoring.json",
    },
    {
      headingLight: "Real-Time Insights",
      headingBold: "",
      text: "Gain actionable insights with live tracking of split payments, settlements, balances, and transaction statuses on your dashboard.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/real-time-updates.json",
    },
    {
      headingLight: "Effortless Partner Onboarding",
      headingBold: "",
      text: "Quickly onboard new partners or vendors with predefined templates for settlement configurations and payouts.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/multi-currency-support.json",
    },
    {
      headingLight: "Scalable Solutions",
      headingBold: "",
      text: "Handle high transaction volumes and diverse partner ecosystems with ease, scaling as your business grows.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/set-reminders.json",
    },
    {
      headingLight: "Improved Cash Flow",
      headingBold: "",
      text: "Accelerate fund disbursement timelines to enhance cash flow management and build stronger stakeholder relationships.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/ledgers/set-reminders.json",
    },
  ];

  const endlessPossibilities = [
    {
      headingLight: "Seamless Multi-Party Splits",
      text: "Distribute payments across multiple vendors, partners, or accounts effortlessly, regardless of complexity or volume.",
      videoSrc:
        requests.ASSETS_BASE_URL_S3 +
        "/split-settlements/2.+Seamless+Multi-Party+Splits.mp4",
      altText: "Seamless Multi-Party Splits",
      reverse: false,
    },
    {
      headingLight: "Customisable Payment Flows",
      text: "Set up tailored settlement rules to match your business model and partner agreements precisely.",
      videoSrc:
        requests.ASSETS_BASE_URL_S3 +
        "/split-settlements/3.+Customisable+Payment+Flows.mp4",
      altText: "Customisable Payment Flows",
      reverse: true,
    },
    {
      headingLight: "Real-Time Insights",
      text: "Gain actionable insights with live tracking of split payments, settlements, balances, and transaction statuses on your dashboard.",
      videoSrc:
        requests.ASSETS_BASE_URL_S3 +
        "/split-settlements/4.+Real-Time+Insights.mp4",
      altText: "Real-Time Insights",
      reverse: false,
    },
    {
      headingLight: "Effortless Partner Onboarding",
      text: "Quickly onboard new partners or vendors with predefined templates for settlement configurations and payouts.",
      videoSrc:
        requests.ASSETS_BASE_URL_S3 +
        "/split-settlements/5.+Effortless+Partner+Onboarding.mp4",
      altText: "Effortless Partner Onboarding",
      reverse: true,
    },
    {
      headingLight: "Scalable Solutions",
      text: "Handle high transaction volumes and diverse partner ecosystems with ease, scaling as your business grows.",
      videoSrc:
        requests.ASSETS_BASE_URL_S3 +
        "/split-settlements/6.+Scalable+Solutions.mp4",
      altText: "Scalable Solutions",
      reverse: false,
    },
    {
      headingLight: "Improved Cash Flow",
      text: "Accelerate fund disbursement timelines to enhance cash flow management and build stronger stakeholder relationships.",
      videoSrc:
        requests.ASSETS_BASE_URL_S3 +
        "/split-settlements/7.+Improved+Cash+Flow.mp4",
      altText: "Improved Cash Flow",
      reverse: true,
    },
    {
      headingLight: "24x7 Priority Support",
      headingBold: "",
      text: "Get 24x7x365 human-centric customer support across multiple channels including phone, email, Slack, etc.",
      imageWidth: "40%",
      videoSrc:
        requests.ASSETS_BASE_URL_S3 +
        "/split-settlements/MultiCollect+24X7+Priority+Support+(2).mp4",
      altText: "24x7 Priority Support",
    },
  ];

  let animationData = useAnimationData(initialData);

  return (
    <div className={styles["enach-container"]}>
      <Head>
        <title>
          Settlr | Automate Split Settlements & Payments for Vendors | Decentro
        </title>
        <meta
          property="og:title"
          content="Settlr | Automate Split Settlements & Payments for Vendors | Decentro"
        />
        <link rel="canonical" href="https://decentro.tech/products/ledgers" />
        <meta
          name="description"
          content="Simplify split settlements for your business. Settlr ensures fast, accurate split payments to vendors, partners, and accounts. Get started today."
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
        <DescriptiveItemList data={betterUseCasesData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        {/* <InlineItemAndParagrah data={possibilitiesData} /> */}
        {/* <div className={styles["endless-possibilities"]}>
                    <h2>
                        Endless <span>Possibilities</span>
                    </h2>
                    <p>Unlock Limitless Efficiency with Smarter Payment Splits</p>
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
                </div> */}
        <div
          className={styles["employee-verification-methods"]}
          id="whereToUse"
        >
          <h2>
            Endless <span>Possibilities</span>
          </h2>
          <p>Unlock Limitless Efficiency with Smarter Payment Splits</p>
          {endlessPossibilities.map((feature, index) => (
            <InlineImageAndParagraph
              key={index}
              zoom={true}
              data={{
                headingLight: feature.headingLight,
                headingBold: "", // Keeping this empty as in original code
                text: feature.text,
                isVideo: true,
                videoSrc: feature.videoSrc,
                altText: feature.altText,
              }}
              isVideo={true}
              reverse={feature.reverse}
              boldBlack
            />
          ))}
        </div>
        <DescriptiveItemList data={prevelantUseCases} />
        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />
        <SplitSetttlementsInteractions />
        <TestimonialsCarousel />
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

export default SplitSettlements;
