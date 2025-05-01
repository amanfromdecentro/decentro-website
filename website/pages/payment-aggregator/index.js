import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../requests.js";

import ProductBanner from "../../components/product-banner/product-banner.js";
import { transactions_processed_annually } from "../../utilities/variables/index.js";
import ClientLogoCarousel from "../../components/client-logo-carousel/client-logo-carousel.js";
import { clientLogos } from "../../components/client-logos/index.js";
import InlineImageAndParagraph from "../../components/inline-image-and-paragraph/inline-image-and-paragraph.js";
import styles from "../../styles/page-styles/why-decentro.module.scss";
import TestimonialsCarousel from "../../components/testimonials-carousel/testimonials-carousel.js";
import FaqAccordion from "../../components/faq-accordion/faq-accordion.js";
import DescriptiveItemList from "../../components/descriptive-item-list/descriptive-item-list.js";
import MultiCards from "../../components/multi-cards/multi-cards.js";
import useAnimationData from "../../hooks/useAnimationData.js";

const TextAndButtonBanner = dynamic(
  () =>
    import("../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);

function PaymentAggregator() {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Simpler Payments via <span class='highlighted-heading'>Payment Aggregator</span>",
    // "<div style='font-size: 1.8rem; line-height: 35px;'>Looking for a <br/>Better Payments Partner?</div><div style='margin-top: 12px;'>Meet <span class='highlighted-heading'>DECENTRO</span></div>",
    subHeading: "",
    tagline:
      "Simplest integration, lightning-fast GTM, and unmatched performance.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    metrics: true,
    metricList: [
      {
        textBold: " BN+",
        textLight: "Processed Annually",
        numberElement: `$${transactions_processed_annually}`,
      },
      {
        textBold: "1,000,000+ ",
        textLight: "API Hits Processed Per Day",
      },
    ],
    subscriptionBox: true,
    subscriptionBoxClassName: "banner-subscribe",
    DBackground: true,
    video: true,
    imageSrc:
      "https://decpay-website-production.s3.ap-south-1.amazonaws.com/images/PA-header.mp4",
    // requests.ASSETS_BASE_URL_S3 + "/upi-collections-video.mp4",
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const helpBusiness = {
    heading:
      "<span class='highlighted-subsection-header'>Collect Payments,</span> The Smarter Way",
    tagline: "",
    items: [
      {
        imageSrc: "/images/payment-aggregator/reduce-transaction-cost.svg",
        title: "Reduce <br/>Transaction Costs",
        description:
          "Save on every transaction via payment gateways or PSPs by utilizing UPI collections for your business.",
      },
      {
        imageSrc: "/images/payment-aggregator/elevate-customer-journey.svg",
        title: "Elevate <br/>Customer Journey",
        description:
          "Elevate the customer experience with one-click payments via UPI with security and finesse on the go.",
      },
      {
        imageSrc: "/images/payment-aggregator/payement-success-rate.svg",
        title: "Increase Payment <br/>Success Rates",
        description:
          "Reduce payment failure via PG and cards network and secure success rates of 98% with UPI.",
      },
      {
        imageSrc: "/images/payment-aggregator/flexible-settlements.svg",
        title: "Flexible <br/>Settlements",
        description:
          "No waiting T+2 days for amount settlement, get funds settled to partner’s account instantly and securely.",
      },
      {
        imageSrc: "/images/payment-aggregator/lower-operational.svg",
        title: "Lower <br/>Operational Costs",
        description:
          "Cut your expenditure towards heavy integrations and maintaining relationships.",
      },
      {
        imageSrc: "/images/payment-aggregator/launch-in-days.svg",
        title: "Launch <br/>In Days",
        description:
          "Integrate our stack and go live within a matter of days as compared to legacy banking integration.",
      },
    ],
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const successRate = {
    headingLight: "Highest Success Rates",
    headingBold: "",
    text: `Achieve unparalleled success rates with effortless checkout flows designed to optimise your transaction success.`,
    imageSrc: "/images/why-decentro/go-to-live.svg",
    altText: "Highest Success Rates",
  };

  const paymentModes = {
    headingLight: "Multiple Payment Modes",
    headingBold: "",
    text: `Accept payments seamlessly from all major UPI and bank apps, including Google Pay, PhonePe, and bank transfers, and offer a wide range of payment options.`,
    imageSrc: "/images/why-decentro/support.svg",
    altText: "Multiple Payment Modes",
  };

  const dashboard = {
    headingLight: "Powerful Dashboard",
    headingBold: "",
    text: `Streamline your operations with easy access to comprehensive reports and statistics for key metrics.`,
    imageSrc: "/images/why-decentro/tech-stack.svg",
    altText: "Powerful Dashboard",
  };

  const updates = {
    headingLight: "Real-time Updates",
    headingBold: "",
    text: `Stay informed with instant payment-related reports, insights, and notifications delivered directly to your dashboard in real time.`,
    imageSrc: "/images/why-decentro/customization.svg",
    altText: "Real-time Updates",
  };

  const integration = {
    headingLight: "Seamless Integration",
    headingBold: "",
    text: `Seamlessly integrate with no-code setup, and developer-friendly APIs, creating exceptional user experiences.`,
    imageSrc: "/images/why-decentro/customization.svg",
    altText: "Seamless Integration",
  };

  const textAndButtonBannerData2 = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const accordionData = [
    {
      query: "What is a Payment Aggregator?",
      solution:
        "Payment aggregators are third-party software or platform providers that enable businesses to process customer payments. They allow clients to accept customer payments via numerous online payment options like debit cards, credit cards, net banking, UPI, e-mandates, e-wallets, etc. Additionally, they enable businesses to pay various stakeholders like partners, suppliers, employees, and more.",
      bulletPoints: [],
    },
    {
      query: "What payment modes are supported by Decentro PA?",
      solution:
        "Using Decentro, you can accept payments seamlessly from all major UPI and bank apps, including Google Pay, PhonePe, and bank transfers, and offer a wide range of payment options.",
      bulletPoints: [],
    },
    {
      query: "What platforms does Decentro payment aggregator support?",
      solution:
        "Decentro helps businesses collect payments from customers across Desktop, mobile, Android and iOS devices. Using our payment links product, you can collect funds across multiple channels like SMS, Email, Whatsapp, Chatbots, and Messenger.",
      bulletPoints: [],
    },
  ];

  const recommendedPagesData = [
    {
      title: "UPI Payment Gateway",
      description:
        "Boost your platform by accepting UPI payments from apps like BHIM, PhonePe, and Google Pay.",
      pageLink: "/products/upi-payment-gateway/",
      imageSrc: "/images/resources/upi-collections.svg",
    },
    {
      title: "Multi-Collect",
      description:
        "Collect funds from individuals or businesses and reconcile them directly through your virtual accounts.",
      pageLink: "/products/virtual-accounts",
      imageSrc: "/images/resources/multi-collect.svg",
    },
    {
      title: "Recurring Payments",
      description:
        "Collect recurring payments from users via UPI Autopay & eNACH without manual follow-ups.",
      pageLink: "/products/recurring-payments",
      imageSrc: "/images/recurring-payments.svg",
    },
  ];

  const textAndButtonBannerData3 = {
    ctaTitle:
      'Payments Made <span className="header-section-highlighted">Powerful</span>',
    ctaDescription: "Best in-class performance | 24x7 Support | 99.99% Uptime",
    ctaButtonText: "Get Started Today",
    ctaButtonLink: requests.SIGNUP,
  };

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

  const title = "Payment Aggregator for Businesses | Decentro";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="canonical"
          href={`https://decentro.tech/payment-aggregator`}
        />
        <link
          rel="alternate"
          href={`https://decentro.tech/payment-aggregator`}
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Accept UPI payments, use virtual accounts, and enable recurring payments for your business via Decentro’s Payment Aggregator. Get started today."
        />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className="press-and-buzz">
        <ProductBanner data={bannerData} />
        <ClientLogoCarousel data={clientLogoData} />
        {/* <MiddleHighlight data={whyDecentroData} /> */}
        <DescriptiveItemList data={helpBusiness} />
        <TextAndButtonBanner data={textAndButtonBannerData} />

        <div
          className={styles["why-decentro-container"]}
          id="leverageDebtCollection"
        >
          <h2>
            Endless <span>Possibilities</span>
          </h2>
          <p>Collect Funds with Reduced Manual Efforts and Costs</p>
          <div className={"leverage-debt-collection-content"}>
            {animationData &&
              animationData?.length > 0 &&
              animationData?.map((item, index) => (
                <InlineImageAndParagraph
                  key={index}
                  data={item}
                  animatedVideo={true}
                  reverse={index % 2 != 0} // Alternate reverse
                  boldBlack
                />
              ))}
            {/* <InlineImageAndParagraph
                            data={successRate}
                            reverse={false}
                            boldBlack
                        />
                        <InlineImageAndParagraph
                            data={paymentModes}
                            reverse={true}
                            boldBlack
                        />
                        <InlineImageAndParagraph
                            data={dashboard}
                            reverse={false}
                            boldBlack
                        />
                        <InlineImageAndParagraph
                            data={updates}
                            reverse={true}
                            boldBlack
                        />
                        <InlineImageAndParagraph
                            data={integration}
                            reverse={false}
                            boldBlack
                        /> */}
          </div>
        </div>
        <TextAndButtonBanner data={textAndButtonBannerData3} />
        <MultiCards data={recommendedPagesData} />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData2} />

        <div
          className={styles["commonly-asked-questions"]}
          id="commonlyAskedQuestions"
        >
          <h2 className={styles["faq-heading"]}>
            Frequently Asked&nbsp;<span>Questions</span>
          </h2>
          <div className={styles["accordion-list"]}>
            {accordionData.map(function (object, i) {
              return <FaqAccordion key={i} data={object} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentAggregator;
