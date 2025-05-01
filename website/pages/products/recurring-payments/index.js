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
const TestimonialsCarousel = dynamic(() =>
  import("../../../components/testimonials-carousel/testimonials-carousel")
);
const RecurringProducts = dynamic(() =>
  import("../../../components/recurring-products/recurring-products")
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

import styles from "../../../styles/page-styles/recurring-payments.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import RecurringPaymentsInteractions from "../../../components/interactions/recurring-payments";
import { transactions_processed_annually } from "../../../utilities/variables";

const RecurringPayments = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Automate <span class='highlighted-heading'>Recurring Payments</span> with <strong>1 click</strong>",
    subHeading: "",
    tagline:
      "Collect recurring payments from users via UPI & eNACH without manual follow-ups.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/recurring-payments-video.mp4",
    altText: "Automate Recurring Payments, at the click of a button",
    titleText: "Recurring Payments",
    video: true,
    metrics: true,
    metricList: [
      {
        textBold: " BN+",
        textLight: "Processed Annually",
        numberElement: `$${transactions_processed_annually}`,
      },
    ],
  };

  const buildFintechFutureData = {
    heading:
      "Make <span class='highlighted-subsection-header'>Recurring Payments</span> Frictionless",
    tagline: "",
    items: [
      {
        imageSrc: "/images/better-conversions.svg",
        title: "Better<br/>Conversions",
        description:
          "Set up mandates with minimal hassles and improve conversion.",
      },
      {
        imageSrc: "/images/reduced-operational-costs.svg",
        title: "Reduced<br/>Operational Costs",
        description:
          "Automate tasks and reduce costs of recurring collections.",
      },
      {
        imageSrc: "/images/icons/compliance1.svg",
        title: "Fully <br/>Compliant",
        description:
          "End-to-end compliance as an RBI-certified Payment Aggregator with Split Settlements.",
      },
      {
        imageSrc: "/images/wider-reach.svg",
        title: "Wider<br/>Reach",
        description: "Automate mandates across any bank in the country.",
      },
      {
        imageSrc: "/images/reduce-risks.svg",
        title: "Reduce<br/>Risks",
        description:
          "Reduce delayed payments and ensure timely payments from customers.",
      },
      {
        imageSrc: "/images/icons/scale-quickly.svg",
        title: "Scale<br/>Quickly",
        description:
          "Focus on growing your business while our team does the work on integrations.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/digital-subscriptions.svg",
        title: "Digital<br/>Subscriptions",
        description:
          "Automate recurring payments for services on digital content from users via setting up mandates.",
      },
      {
        imageSrc: "/images/icons/insurance-premiums.svg",
        title: "Insurance<br/>Premiums",
        description:
          "Enable merchants by debiting their customers' insurance premiums for health, automobile, etc.",
      },
      {
        imageSrc: "/images/icons/emis.svg",
        title: "EMIs",
        description:
          "Set monthly EMI auto-debits from the user’s account toward loans or other services for Fintechs or other platforms.",
      },
      {
        imageSrc: "/images/icons/savings-journey.svg",
        title: "Savings<br/>Journey",
        description:
          "Set up auto-debit plans to enable customers' monthly saving goals on personal finance platforms.",
      },
      {
        imageSrc: "/images/icons/sip.svg",
        title: "SIPs and <br/>Investment Plans",
        description:
          "Set up a UPI Autopay or an eMandate for your customer to collect monthly instalments.",
      },
      {
        imageSrc: "/images/icons/onboard.svg",
        title: "Edtechs &<br/>ERPs",
        description:
          "Provide auto mandates to your students and subscribers to increase subscription via auto debit.",
      },
    ],
  };

  const whitePaperBanner = {
    ctaTitle:
      "Transform <span className='header-section-highlighted'>Loan Repayments<span> with Decentro’s <span className='header-section-highlighted'>eNACH</span>",
    ctaDescription:
      "Boost efficiency, cut costs, and build trust. <strong>Download the exclusive whitepaper NOW!</strong>",
    ctaButtonText: "Download Here",
    ctaButtonLink: "https://mailchi.mp/decentro/q995qwvoi1",
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
    ctaButtonLink: requests.DOC_RECUR_PAYMENTS,
    newTab: true,
  };

  const accordionData = [
    {
      query: "What is an example of a recurring transaction?",
      solution:
        "Recurring payments are repeating payments authorised by customers and taken automatically according to a predetermined schedule. Examples of recurring payments include memberships across streaming services, food delivery boxes, utility bills and more.",
    },
    {
      query: "Is recurring payment the same as autopay?",
      solution:
        "Recurring and auto-pay are not the same thing. You specify the amount and date of the recurring payment. It means the payment time and money can be presented with a fixed term. When you set up your payments through AutoPay, the payment amount is withdrawn from the bank account you designated as of your payment due date, which can differ from month to month (i.e. a minimum payment or total balance amount can differ, and payment due date can differ each month).",
    },
    {
      query: "What is the purpose of a recurring transaction?",
      solution:
        "Recurring payments ensure a prompt and reliable capital inflow, helping to produce a healthier cash flow and lowering your collection costs. Businesses will receive payments from clients more efficiently with recurring transactions. In this case, you don't have to worry about customers forgetting to pay or running out of money in your bank accounts.",
    },
    {
      query: "What happens if a recurring payment fails?",
      solution:
        "If a recurring payment fails, the customer’s credit card/ source of payment will be retried automatically up to 3 times. If all retry attempts fail, the recurring payment will be marked as ‘cancelled’ or ‘unpaid.’",
    },
    {
      query: "What is the maximum amount for eNACH mandate?",
      solution:
        "₹1 lakh is the maximum limit per day for mandates through eNACH. The transfer should be done manually to transfer more than ₹1 lakh in a single day.",
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
      title: "UPI Autopay",
      description:
        "Get recurring E-Mandate enabled on your platform via UPI for payments.",
      pageLink: "/resources/upi-autopay-apis",
      imageSrc: "/images/resources/upi-autopay.svg",
    },
    {
      title: "e-NACH",
      description:
        "A digital mandate platform built by NPCI simplifies high-value and larger-volume recurring online transactions.",
      pageLink: "/resources/enach-apis",
      imageSrc: "/images/resources/enach.svg",
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
      headingLight: "Higher Conversions",
      headingBold: "",
      text: "Boost conversion rates by offering flexible payment plans—daily, weekly, monthly, quarterly, or yearly— for higher accessibility and affordability.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/recurring-payments/higher-conversions.json",
    },
    {
      headingLight: "Enhanced Brand Trust",
      headingBold: "",
      text: "Enhance brand trust by providing complete transparency into upcoming payments with the flexibility to pause subscriptions.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/recurring-payments/enhanced-brand-trust.json",
    },
    {
      headingLight: "Real-time Updates",
      headingBold: "",
      text: "Stay informed with instant payment-related reports, insights, and notifications delivered directly to your dashboard in real time.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/recurring-payments/real-time-updates.json",
    },
    {
      headingLight: "Leverage the UPI Coverage",
      headingBold: "",
      text: "Maximise your payment efficiency with extensive UPI Autopay coverage, ensuring broad compatibility and effortless transactions.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/recurring-payments/leverage-upi-coverage.json",
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
    <div className={styles["recurring-payments-container"]}>
      <Head>
        <title>
          Recurring Payments | Subscription Payments Via UPI & eNACH | Decentro
        </title>
        <meta
          property="og:title"
          content="Recurring Payments | Subscription Payments Via UPI & eNACH | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/recurring-payments"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/products/recurring-payments"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Enable Recurring Payment collection for your users and make it frictionless with Decentro's Recurring Payments APIs. Get started today."
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className={styles["recurring-payments"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <TextAndButtonBanner data={whitePaperBanner} />
        <RecurringProducts />
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
        <RecurringPaymentsInteractions />
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

export default RecurringPayments;
