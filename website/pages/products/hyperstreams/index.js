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
import styles from "../../../styles/page-styles/hyperstreams.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import HyperstreamsInteractions from "../../../components/interactions/hyperstreams";

const HyperStreams = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "The Fastest <span class='highlighted-heading'>Identity Verification</span> Experience Ever",
    subHeading: "",
    tagline:
      "Significantly speed up user verification and reduce drop-offs during onboarding with HyperStreams.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/hyperstreams.mp4",
    altText:
      "Significantly speed up user verification and reduce drop-offs during onboarding with HyperStreams.",
    titleText: "Hyperstreams",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/enach/banner-bg.svg",
    metrics: true,
    metricList: [
      {
        textBold: "+ HyperStreams",
        textLight: "executed per hour",
        numberElement: "1000",
      },
      {
        textBold: "+ Data points",
        textLight: "fetched per hour",
        numberElement: "2000",
      },
    ],
  };

  const buildFintechFutureData = {
    heading:
      "<span class='highlighted-subsection-header'>Validate Users</span> like you want",
    tagline: "",
    items: [
      {
        imageSrc: "/images/better-conversions.svg",
        title: "Reduced<br/>Manual Errors",
        description:
          "Automate complex processes such as onboarding and KYC while minimising errors.",
      },
      {
        imageSrc: "/images/reduced-operational-costs.svg",
        title: "Flow<br/>Configuration",
        description:
          "Manage repetitive tasks and processes using custom-defined flows as per your requirements.",
      },
      {
        imageSrc: "/images/save-limitlessly.svg",
        title: "Better Customer<br/>Experience",
        description:
          "Streamline the onboarding process via Hyperstream for an elevated user experience.",
      },
      {
        imageSrc: "/images/icons/faster-goto-market.svg",
        title: "Faster<br/>go-to-market",
        description:
          "Go live within hours using our simple plug-and-play APIs or SDKs and worry less about integrations.",
      },
      {
        imageSrc: "/images/icons/reduced-dropoffs.svg",
        title: "Reduced<br/>Drop-offs",
        description:
          "Ensure a better and smoother user experience with minimal customer intervention.",
      },
      {
        imageSrc: "/images/icons/compliance.svg",
        title: "Fraud<br/>Protection",
        description:
          "Verify users towards the first level of user onboarding via Hyperstreams, helping prevent fraud.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/customer.svg",
        title: "Customer/Business<br/>Onboarding",
        description:
          "Fetch and verify the complete details of any company or individual from national IDs like Aadhaar, PAN, etc.",
      },
      {
        imageSrc: "/images/icons/gaming.svg",
        title: "Trading & Gaming<br/>Platforms",
        description:
          "Perform user identity checks and verify their legality to avoid malicious activities.",
      },
      {
        imageSrc: "/images/icons/marketplace-payouts.svg",
        title: "Marketplaces",
        description:
          "Run comprehensive background checks on customers or partners with a fully automated onboarding process.",
      },
      {
        imageSrc: "/images/icons/rent.svg",
        title: "Rental Platforms",
        description:
          "Authenticate the users' credentials while renting out cars, hotels, flats, or office spaces to prevent malpractices.",
      },
      {
        imageSrc: "/images/icons/logistics.svg",
        title: "Logistics &<br/>Ecommerce",
        description:
          "Verify merchants before onboarding to avoid malpractice or vulnerable activities on your platform.",
      },
      {
        imageSrc: "/images/icons/secure.svg",
        title: "Insurance<br/>Industry",
        description:
          "Verify customers before onboarding through KYC verification guidelines laid by IRDAI and SEBI.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Pre-Fill User Data",
        description:
          "Reduce friction by pre-filling all customer details with mobile and name access data from trusted sources",
      },
      {
        title: "Seamless User Authentication",
        description:
          "Verify customers using tools like image match and their data across multiple channels like name, address, etc",
      },
      {
        title: "Parallel Processing",
        description:
          "Execute multiple APIs in parallel, improving performance and reducing processing time",
      },
      {
        title: "Low-code Environment",
        description:
          "Integrate complex workflows while helping in configuring and maintaining flexibility through APIs or SDKs",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription:
      "Reduce drop-offs with better and quick user verification checks",
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
    ctaButtonLink: requests.DOC_HYPERSTREAMS,
    newTab: true,
  };

  const accordionData = [
    {
      query: "What is identity verification used for?",
      solution:
        "API-based ID and face checks are now flooding the Indian market allowing almost every business, across industries rmaging from digital finance, insurance, logistics, marketplaces, rentals and many other industries to scale and secure their user onboarding journey seamlessly.",
    },
    {
      query: "What is the best way to verify identity?",
      solution:
        "Identity Verification APIs verify user identity through a very long list of identifiable IDs, primarily PAN and Aadhaar cards issued by the government.",
    },
    {
      query: "What are identity verification documents?",
      solution:
        "Below is the list of all documents that can verified using Decentro's Document Verification API -",
      bulletPoints: [
        {
          text: "PAN Card - PAN Stands for Permanent Account Number and it is a ten digit alphanumeric number issued by the Income Tax Department of India.",
        },
        {
          text: "RC Card - RC stands for Registration Certificate and is commonly known as RC in India.",
        },
        {
          text: "GSTIN Card - GSTIN stands for Goods and Services Tax identification Number. It is a unique 15 digit number assigned to businesses entities like dealer, supplier, etc and is registered under the GST regime.",
        },
        { text: "CIN Card - CIN stands for Corporate Identification Number." },
        { text: "Driving License" },
        { text: "Voter ID" },
        {
          text: "FSSAI Card - FSSAI stands for Food Safety and Standards Authority of India.",
        },
        { text: "Udyog Aadhaar" },
        {
          text: "Udyam Aadhaar - It is a unique registration mechanism for Micro, Small and Medium Enterprises (MSMEs). It is mandatory for MSMEs to get their Udyam Aadhaar number.",
        },
        { text: "FLLPIN Card" },
        { text: "DIN Card - DIN stands for Directors Identification Number." },
        {
          text: "LLPIN Card - LLPIN stands for Limited Liability Partnership Identification Number.",
        },
        {
          text: "FCRN Card - FCRN stands for Foreign Company Registration Number and is a 6 digit number.",
        },
      ],
    },
    {
      query: "What is the difference between IDV and KYC?",
      solution:
        "While the terms identity verification and Know Your Customer (KYC) are sometimes used interchangeably, they are in fact separate concepts related to anti-money laundering (AML) regulations. A more accurate way of describing the relationship between identity verification and KYC is that identity verification is just one part of the KYC umbrella.",
    },
    {
      query: "Why is identity verification important?",
      solution:
        "A financial institution requires a method to ensure that the individual or entities they are transacting with doesn’t deal with black money, finances terrorism, or aren’t caught up in any fraudulent schemes, making identity verifcation a very important part of a onboarding porcesss.",
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
      title: "KYC & Onboarding",
      description:
        "Digitally onboard users by conducting instant background verifications with real-time KYC checks. Reduce customer drop-offs significantly.",
      pageLink: "/products/kyc-onboarding",
      imageSrc: "/images/resources/kyc-onboarding.svg",
    },
    {
      title: "UIStreams",
      description:
        "Seamlessly integrate UI-based plugins for a fully-native user verification & KYC experience with UIStreams",
      pageLink: "/products/uistreams",
      imageSrc: "/images/ui-stream/ui-stream-hero.svg",
    },
    {
      title: "DigiLocker",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/digilocker-apis/",
      imageSrc: "/images/resources/digilocker-new.svg",
    },
  ];

  const initialData = [
    {
      headingLight: "Pre-Fill User Data",
      headingBold: "",
      text: "Enable efficiency by pre-filling all customer details with mobile and name access data from trusted sources.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/hyperstreams/pre-fill-user-data.json",
    },
    {
      headingLight: "Seamless User Authentication",
      headingBold: "",
      text: "Verify customers using tools like image match and their data across multiple channels like name, address, etc.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/hyperstreams/seamless-user-authentication.json",
    },
    {
      headingLight: "Parallel Processing",
      headingBold: "",
      text: "Execute multiple APIs in parallel, improving performance and reducing processing time.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/hyperstreams/parallel-processing.json",
    },
    {
      headingLight: "Low-code Environment",
      headingBold: "",
      text: "Integrate complex workflows while helping in configuring and maintaining flexibility through APIs or SDKs.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/hyperstreams/low-code-environment.json",
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
        <title>
          HyperStreams | End to End User Identity Verification | Decentro
        </title>
        <meta
          property="og:title"
          content="HyperStreams | End to End User Identity Verification | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/hyperstreams"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/products/hyperstreams"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Enable complete user verification and build seamless onboarding experiences with our pre-built SDKs & APIs. Get started with HyperStreams today. "
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className={styles["hyperstreams"]}>
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
        <HyperstreamsInteractions />
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

export default HyperStreams;
