import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../requests.js";

import ProductBanner from "../../components/product-banner/product-banner.js";
import { transactions_processed_annually } from "../../utilities/variables/index.js";
import ClientLogoCarousel from "../../components/client-logo-carousel/client-logo-carousel.js";
import { clientLogos } from "../../components/client-logos/index.js";
import WhyDecentroComparison from "../../components/why-decentro-comparison/why-decentro-comparison.js";
import InlineImageAndParagraph from "../../components/inline-image-and-paragraph/inline-image-and-paragraph.js";
import styles from "../../styles/page-styles/why-decentro.module.scss";
import DescriptiveItemListFour from "../../components/descriptive-item-list-four/descriptive-item-list-four.js";
import AwardsRecognition from "../../components/awards-recognition/awards-recognition.js";
import TestimonialsCarousel from "../../components/testimonials-carousel/testimonials-carousel.js";
import FaqAccordion from "../../components/faq-accordion/faq-accordion.js";
import ItemList from "../../components/item-list/item-list.js";
import MiddleHighlight from "../../components/middle-highlight-comparison/middle-highlight-comparison.js";

const TextAndButtonBanner = dynamic(
  () =>
    import("../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const PressAndBuzzAffiliations = dynamic(() =>
  import("../../components/press-buzz-affiliations/press-buzz-affiliations.js")
);
const PodcastsAndVideos = dynamic(() =>
  import("../../components/podcasts-and-videos/podcasts-and-videos.js")
);

function WhyDecentro() {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "<div style='font-size: 1.8rem; line-height: 35px;'>Looking for a <br/>Better Payments Partner?</div><div style='margin-top: 12px;'>Meet <span class='highlighted-heading'>DECENTRO</span></div>",
    subHeading: "",
    tagline: "10X Faster, Human-Centric, and Built for Modern Businesses.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/why-decentro-header.svg",
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
      {
        textBold: "",
        textLight: "Processed Per Hour",
        numberElement: "15000+ Transactions",
      },
    ],
    subscriptionBox: true,
    subscriptionBoxClassName: "banner-subscribe",
    DBackground: true,
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const whyDecentroData = [
    { "Go-Live Time": ["6 hours (Payments), Instant (KYC)", "1-2 weeks"] },
    {
      Support: ["Personalized human support", "Generic bot-based interactions"],
    },
    {
      "Tech Expertise": [
        "Built by ex-payU, Razorpay, & PayPal experts",
        "Outdated systems from web 1.0",
      ],
    },
    {
      "Response Times": ["< 2 working hours", "7-28 working days"],
    },
    {
      "Success Rates": ["95%+ success on UPI at scale", "Inconsistent"],
    },
    {
      Latency: [
        "Direct server-to-server API calls for minimal latency",
        "Browser hops increase delays",
      ],
    },
    {
      Compliance: [
        "RBI Compliant APIs, Fully Secure",
        "Limited to specific use cases",
      ],
    },
    {
      Customization: [
        "Tailored APIs for Payments, KYC and Banking Flows",
        "One-size-fits-all-solutions",
      ],
    },
    {
      "Fraud Detection": [
        "Built-in risk scoring",
        "Basic or external integrations required",
      ],
    },
  ];

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time, resources, & launch <span className="header-section-highlighted">10x faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const goToLive = {
    headingLight: "Fastest Go-Live in the Industry",
    headingBold: "",
    text: `Start accepting payments within <span className="header-section-highlighted">6 hours</span>, compared to the 7-10 days wait with traditional payment gateways.`,
    imageSrc: "/images/why-decentro/go-to-live.svg",
    altText: "Fastest Go-Live in the Industry",
  };

  const support = {
    headingLight: "Human-Centric Support You Can Rely On",
    headingBold: "",
    text: ``,
    bulletPointsText: [
      "Dedicated account managers and real-time support—no bots, no delays.",
      "Ensure a smooth onboarding and operations experience, at every step.",
    ],
    imageSrc: "/images/why-decentro/support.svg",
    altText: "Human-Centric Support You Can Rely On",
  };

  const compliance = {
    headingLight: "Comprehensive Compliance",
    headingBold: "",
    text: `Simplify onboarding and transactions with APIs that meet regulatory standards.`,
    imageSrc: "/images/why-decentro/tech-stack.svg",
    altText: "Comprehensive Compliance",
  };

  const customization = {
    headingLight: "Unparalleled Customization",
    headingBold: "",
    text: ``,
    bulletPointsText: [
      "Tailored solutions for your business needs, from payment flows to settlement cycles.",
      "A platform that grows with you, adapting to your unique requirements.",
    ],
    imageSrc: "/images/why-decentro/customization.svg",
    altText: "Unparalleled Customization",
  };

  const industryList = {
    heading:
      "Designed for Every <span class='highlighted-subsection-header'>Industry</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/why-decentro/ecommerce-industry.svg",
        title: "E-commerce",
      },
      {
        imageSrc: "/images/why-decentro/saas -industry.svg",
        title: "SaaS",
      },
      {
        imageSrc: "/images/why-decentro/lending-industry.svg",
        title: "Lending",
      },
      {
        imageSrc: "/images/why-decentro/gaming-industry.svg",
        title: "Gaming",
      },
      {
        imageSrc: "/images/why-decentro/investment-industry.svg",
        title: "Investments",
      },
      {
        imageSrc: "/images/why-decentro/logistics-industry.svg",
        title: "Logistics",
      },
      {
        imageSrc: "/images/why-decentro/education-industry.svg",
        title: "Education",
      },
      {
        imageSrc: "/images/why-decentro/healthcare-industry.svg",
        title: "Healthcare",
      },
    ],
  };

  const textAndButtonBannerData1 = {
    ctaTitle:
      '<span className="header-section-highlighted">Go beyond traditional.</span>',
    ctaDescription: "Unlock the future of payments, KYC, and banking with Decentro.",
    ctaButtonText: "Sign Up Today",
    ctaButtonLink: requests.SIGNUP,
  };

  const features = {
    heading:
      "<span class='highlighted-subsection-header'>Features </span> That Set Us Apart",
    tagline: "",
    items: [
      {
        imageSrc: "/images/why-decentro/upi-v3.svg",
        title: "UPI V3 Ready",
        description:
          "Clients onboarded in just <span>2 days</span> for seamless UPI collections.",
      },
      {
        imageSrc: "/images/why-decentro/kyc.svg",
        title: "Real-Time <br/>KYC Verifications",
        description:
          "Verify customers with <span>instant verifications</span> and reduce drop-offs.",
      },
      {
        imageSrc: "/images/why-decentro/lightning-fast.svg",
        title: "Lightning-Fast <br/>Transactions",
        description:
          "<span>80%</span> of payments processed in under <span>10 seconds.</span>",
      },
      {
        imageSrc: "/images/why-decentro/rapid-go-live.svg",
        title: "Rapid <br/>Go-Live",
        description:
          "Clients operational within <span>24 hours</span> via digital onboarding.",
      },
      {
        imageSrc: "/images/why-decentro/multibank.svg",
        title: "Multi-Bank<br/>Redundancy",
        description:
          "<span>Zero downtime</span> with a robust, fail-safe architecture.",
      },
      {
        imageSrc: "/images/why-decentro/developer-friendly.svg",
        title: "Dev-Friendly",
        description:
          "Comprehensive, easy-to-use resources for <span>seamless integration.</span>",
      },
      {
        imageSrc: "/images/why-decentro/priority-support.svg",
        title: "Priority <br/>Support",
        description:
          "Dedicated <span>account managers</span> to ensure smooth operations.",
      },
      {
        imageSrc: "/images/why-decentro/transparent-pricing.svg",
        title: "Transparent  <br/>Pricing",
        description:
          "<span>No hidden fees,</span> just clear and competitive rates.",
      },
    ],
  };

  const textAndButtonBannerData2 = {
    ctaTitle:
      'Ready to Make the <span className="header-section-highlighted">Switch</span>?',
    ctaDescription: "Seamless Payments, Smarter Onboarding, Superior Support.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const accordionData = [
    {
      query:
        "How much time is required to start collecting payments with Decentro?",
      solution:
        "With Decentro, you can start collecting payments in as little as 4 hours. Our streamlined onboarding process, modern APIs, and dedicated human support ensure a seamless and rapid setup experience, eliminating the typical delays associated with traditional payment gateways.",
      bulletPoints: [],
    },
    {
      query: "How do I integrate Decentro’s Payment Gateway with my business?",
      solution: "Integrating Decentro’s Payment Gateway is quick and seamless:",
      bulletPoints: [
        {
          text: "Sign Up & Dashboard Access: Create an account and access our intuitive dashboard.",
        },
        {
          text: "API & Sandbox Testing: Explore our documentation and test payment flows in the sandbox.",
        },
        {
          text: "Easy Integration: Use SDKs, plugins, or server-to-server API calls for setup.",
        },
        {
          text: "Go Live in 4 Hours: Complete KYC, and start accepting payments within hours.",
        },
        {
          text: "Our dedicated support team is here to guide you every step of the way!",
        },
      ],
    },
    {
      query: "Is it safe to use Decentro?",
      solution: "Absolutely! Decentro prioritizes security at every step:",
      bulletPoints: [
        {
          text: "Advanced Encryption: All transactions are secured with industry-standard encryption protocols.",
        },
        {
          text: "Robust Fraud Detection: Our systems actively monitor and prevent unauthorized activities.",
        },
        {
          text: "Regulatory Compliance: Fully compliant with PCI DSS and RBI guidelines.",
        },
        {
          text: "99%+ Uptime: Reliable infrastructure ensures seamless operations without disruptions.",
        },
      ],
    },
    {
      query: "Is Decentro approved by the RBI?",
      solution:
        "Yes, Decentro operates in full compliance with RBI regulations.",
    },
  ];

  const title = "Decentro vs Traditional Payment Gateways | Why Decentro";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={`https://decentro.tech/why-decentro`} />
        <link
          rel="alternate"
          href={`https://decentro.tech/why-decentro`}
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Dive into the differences between Decentro and traditional PGs. Get faster go-lives, better support, lesser response times and higher success rates. Switch to Decentro today!"
        />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className="press-and-buzz">
        <ProductBanner data={bannerData} />
        <ClientLogoCarousel data={clientLogoData} />
        <MiddleHighlight data={whyDecentroData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />

        <div
          className={styles["why-decentro-container"]}
          id="leverageDebtCollection"
        >
          <h2>
            Why choose <span>Decentro</span>
          </h2>
          <div className={"leverage-debt-collection-content"}>
            <InlineImageAndParagraph
              data={goToLive}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph data={support} reverse={true} boldBlack />
            <InlineImageAndParagraph
              data={compliance}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              data={customization}
              reverse={true}
              boldBlack
            />
          </div>
        </div>
        <ItemList data={industryList} id={"whyVendorOnboardingisImportant"} />

        <TextAndButtonBanner data={textAndButtonBannerData1} />

        <div
          id="features"
          style={{
            background: "#FAFAFA",
          }}
        >
          <DescriptiveItemListFour data={features} />
        </div>

        <AwardsRecognition />
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

        {/* <div className="our-affiliations">
                    <h2>
                        Our <span>Affiliations</span>
                    </h2>
                    <div className="affiliations">
                        <PressAndBuzzAffiliations data={affiliationsData1} />
                        <PressAndBuzzAffiliations data={affiliationsData2} />
                    </div>
                </div> */}
        {/* <PodcastsAndVideos /> */}
        {/* <div className="images-list clients">
                    <h2
                        dangerouslySetInnerHTML={{ __html: imageListData.inlineHeading }}
                    ></h2>
                    <div className="content-list row1">
                        {imageListData.imagesList1.map(function (object, i) {
                            return (
                                <div className="image-content" key={i}>
                                    {object.imageLink ? (
                                        <a href={object.imageLink} target="_blank" rel="noreferrer">
                                            <img
                                                src={object.src}
                                                alt={object.alt ? object.alt : "image"}
                                                className={object.name}
                                            />
                                        </a>
                                    ) : (
                                        <img
                                            src={object.src}
                                            alt={object.alt ? object.alt : "image"}
                                            className={object.name}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className="content-list row2">
                        {imageListData.imagesList2.map(function (object, i) {
                            return (
                                <div className="image-content" key={i}>
                                    {object.imageLink ? (
                                        <a href={object.imageLink} target="_blank" rel="noreferrer">
                                            <img
                                                src={object.src}
                                                alt={object.alt ? object.alt : "image"}
                                                className={object.name}
                                            />
                                        </a>
                                    ) : (
                                        <img
                                            src={object.src}
                                            alt={object.alt ? object.alt : "image"}
                                            className={object.name}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div> */}
      </div>
    </>
  );
}

export default WhyDecentro;
