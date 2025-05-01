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
const InlineItemAndParagraph = dynamic(() =>
  import(
    "../../../components/inline-item-and-paragraph/inline-item-and-paragraph"
  )
);
const TestimonialsCarousel = dynamic(() =>
  import("../../../components/testimonials-carousel/testimonials-carousel")
);
const UpiCollectionsInteractions = dynamic(() =>
  import("../../../components/interactions/upi-collections")
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

import styles from "../../../styles/page-styles/upi-collections.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import { transactions_processed_annually } from "../../../utilities/variables";

const UpiCollections = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Accept Payments Seamlessly via <span class='highlighted-heading'>UPI</span>",
    subHeading: "",
    tagline:
      "Boost your platform by accepting UPI payments from apps like BHIM, PhonePe, and Google Pay.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    // imageSrc: "/images/upi-collect/upi-collections-video.mp4",
    imageSrc:
      requests.ASSETS_BASE_URL_S3 + "/UPI+Collections+Header+Animation.mp4",
    altText: "Collect Funds Seamlessly via Virtual Accounts",
    titleText: "VA Collections",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/upi-collect/banner-bg.svg",
    metrics: true,
    metricList: [
      {
        textBold: " BN+",
        textLight: "Processed Annually",
        numberElement: `$${transactions_processed_annually}`,
      },
      {
        textBold: "900,000+ API Hits",
        textLight: "processed per day",
      },
      {
        textBold: "15000+ Transactions",
        textLight: "processed per hour",
      },
    ],
  };

  const textAndButtonBannerDataDoc = {
    ctaTitle:
      "<span className='header-section-highlighted'>Discover More, Learn More</span>",
    ctaDescription: "Access Our Product Guide Now",
    ctaButtonText: "View Documentation",
    ctaButtonLink: requests.DOC_UPI_COLLECTIONS,
    newTab: true,
  };

  const buildFintechFutureData = {
    heading:
      "Collect <span class='highlighted-subsection-header'>Payments</span> in a Single Tap",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/reduce-txn-cost.svg",
        title: "Reduce Transaction Costs",
        description:
          "Save on transaction fees typically charged by other payment gateways.",
      },
      {
        imageSrc: "/images/icons/customer-journey.svg",
        title: "Elevate Customer Journey",
        description: "Elevate customer experience with one-click payments.",
      },
      {
        imageSrc: "/images/icons/increase-success-rate.svg",
        title: "Increase Success Rates",
        description: "Reduce payment failures and secure success rates of 98%.",
      },
      {
        imageSrc: "/images/icons/flexible-settlements.svg",
        title: "Flexible Settlements",
        description:
          "Get funds settled to partner’s account instantly, without waiting T+2 days.",
      },
      {
        imageSrc: "/images/icons/low-costs.svg",
        title: "Lower Operational Costs",
        description:
          "Cut your expenditure towards heavy integrations and relationships.",
      },
      {
        imageSrc: "/images/icons/compliance1.svg",
        title: "Fully Compliant",
        description:
          "Enjoy end-to-end compliance with RBI regulations as an authorized UPI Payment Gateway provider.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/in-app-payments.svg",
        title: "In-app Payments",
        description:
          "Get paid by users for your in-app purchases or payment in general, with instant settlements.",
      },
      {
        imageSrc: "/images/icons/last-mile.svg",
        title: "Last Mile Collections",
        description:
          "Enable last-mile scan and pay collections for your logistics or eCommerce business.",
      },
      {
        imageSrc: "/images/icons/conversational-banking.svg",
        title: "Conversational Banking",
        description:
          "Enable digital banking via messaging apps that send automated collect request or payment links to customer.",
      },
      {
        imageSrc: "/images/icons/repay.svg",
        title: "EMI Repayments",
        description:
          "Collect recurring payments from the user’s account toward loans or other services provided by Banks/Lenders.",
      },
      {
        imageSrc: "/images/icons/insurance-premium.svg",
        title: "Insurance Premiums",
        description:
          "Set an autopay feature for Debiting monthly/yearly premiums for health, automobile etc., towards your services.",
      },
      {
        imageSrc: "/images/icons/invest.svg",
        title: "Investment Plans",
        description:
          "Collect all monthly installments using a payment link or a collect request from the customer.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Highest Success Rates",
        description:
          "Achieve unparalleled success rates with effortless checkout flows designed to optimise your transaction success",
      },
      {
        title: "Account Whitelisting",
        description:
          "Whitelist any type of transfer a beneficiary can receive funds from - IMPS/UPI/NEFT/RTGS",
      },
      {
        title: "Easy Authentication",
        description:
          "Leverage one-time UPI PIN of every account detail like account number, CVV, etc",
      },
      {
        title: "Dashboard monitoring",
        description:
          "Minimize tech efforts by monitoring transactions seamlessly via a Dashboard",
      },
      {
        title: "Real-time Updates",
        description:
          "Get instant payment-related reports, insights, and notifications directly on your dashboard in real time",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription:
      "Enable the payment collection ecosystem through UPI",
    contentImage: true,
    contentImageSrc: "/images/virtual-accounts/banner-features.svg",
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Payments Made  <span className="header-section-highlighted">Powerful</span>',
    ctaDescription: "Best in-class performance | 24x7 Support | 99.99% Uptime",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const accordionData = [
    {
      query: "What is the difference between UPI Collect and UPI Intent?",
      solution:
        "This traditional UPI collection flow allows bank account holders to transact using VPAs without entering additional bank information. In intent flow, as soon as the customer selects the UPI payment app on the checkout of the website/app, the app is launched automatically on the mobile device.",
    },

    {
      query: "How do I create a UPI Intent?",
      solution:
        "Here is how Decentro’s UPI intent flow will help you launch your business vertical or new product in no time.",
      bulletPoints: [
        {
          text: "Create UPI intent flow on your platform and provide a seamless payment experience for your customers",
        },
        {
          text: "Enable your customers to opt for their preferred UPI app",
        },
        {
          text: "Pre-populate payment details, and",
        },
        { text: "Complete the transaction on the go in seconds" },
      ],
    },
    {
      query: "What is the issuer and acquirer in UPI?",
      solution:
        "The issuer is the entity that provides UPI credentials and services to the end user (customer) for initiating payments. Meanwhile, the acquirer is the entity that enables merchants to accept UPI payments, facilitating the processing and settlement of payments for the merchants.",
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
      title: "UPI APIs",
      description:
        "Set up real-time payments & collections with UPI Collect or UPI Intent Flow and create a seamless cash flow for your business.",
      pageLink: "/resources/upi-apis",
      imageSrc: "/images/resources/upi.svg",
    },
    {
      title: "UPI Autopay",
      description:
        "Get recurring E-Mandate enabled on your platform via UPI for payments.",
      pageLink: "/resources/upi-autopay-apis",
      imageSrc: "/images/resources/upi-autopay.svg",
    },
    {
      title: "Multi Collect",
      description:
        "Collect funds from individuals or businesses and reconcile them directly through your virtual accounts",
      pageLink: "/products/virtual-accounts",
      imageSrc: "/images/resources/multi-collect.svg",
    },
  ];

  const initialData = [
    {
      headingLight: "Highest Success Rates",
      headingBold: "",
      text: "Achieve unparalleled success rates with effortless checkout flows designed to optimise your transaction success.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/upi-collections/highest-success-rates.json",
    },
    {
      headingLight: "Multiple Payment Modes",
      headingBold: "",
      text: "Accept payments seamlessly from all major UPI and bank apps, including Google Pay, PhonePe, and bank transfers, and offer a wide range of payment options.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/upi-collections/multiple-payment-modes.json",
    },
    {
      headingLight: "Powerful Dashboard",
      headingBold: "",
      text: "Streamline your operations with easy access to comprehensive reports and statistics for key metrics.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/upi-collections/powerful-dashboard.json",
    },
    {
      headingLight: "Real-time Updates",
      headingBold: "",
      text: "Stay informed with instant payment-related reports, insights, and notifications delivered directly to your dashboard in real time.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/upi-collections/real-time-updates.json",
    },
    {
      headingLight: "Seamless Integration",
      headingBold: "",
      text: "Seamlessly integrate with no-code setup, and developer-friendly APIs, creating exceptional user experiences.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/upi-collections/seamless-integration.json",
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
    <div className={styles["upi-collections-container"]}>
      <Head>
        <title>UPI Payment Gateway | Accept Payments Via UPI | Decentro</title>
        <meta
          property="og:title"
          content="UPI Payment Gateway | Accept Payments Via UPI | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/upi-payment-gateway"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/products/upi-payment-gateway"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Accept payments seamlessly with UPI in a single tap. Reduce transaction costs, and improve your customer journey with Decentro's UPI Payment Gateway."
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className={styles["upi-collections"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        {/* <InlineItemAndParagraph data={possibilitiesData} /> */}
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
        <UpiCollectionsInteractions />
        {/* <UpiCollectionsInteractions header={"Collect via UPI"} /> */}
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
      </div>
      <RecommendedPages data={recommendedPagesData} />
    </div>
  );
};

export default UpiCollections;
