import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../../requests";
import urls from "../../../urls";

import ProductBanner from "../../../components/product-banner/product-banner";

const DescriptiveItemList = dynamic(() =>
  import("../../../components/descriptive-item-list/descriptive-item-list")
);
const InlineItemAndParagrah = dynamic(() =>
  import(
    "../../../components/inline-item-and-paragraph/inline-item-and-paragraph"
  )
);
const TextAndButtonBanner = dynamic(() =>
  import("../../../components/text-and-button-banner/text-and-button-banner")
);
const TestimonialsCarousel = dynamic(() =>
  import("../../../components/testimonials-carousel/testimonials-carousel")
);
const ClientLogoCarousel = dynamic(() =>
  import("../../../components/client-logo-carousel/client-logo-carousel")
);
const RecommendedPages = dynamic(() =>
  import("../../../components/recommended-pages/recommended-pages")
);
import styles from "../../../styles/page-styles/ui-streams.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";

const UIStream = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Unleash The <span class='highlighted-heading'>Fastest User Onboarding</span> Flow",
    subHeading: "",
    tagline:
      "Seamlessly integrate UI-based plugins for a fully-native user verification & KYC experience with UIStreams",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/ui-streams-video.mp4",
    video: true,
    altText:
      "Seamlessly integrate UI-based plugins for a fully-native user verification & KYC experience with UIStreams",
    titleText: "UIStreams",
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/ui-stream/ui-streams-bg.svg",
    metrics: true,
    metricList: [
      {
        textBold: "+ UIStreams",
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

  const textAndButtonBannerDataDoc = {
    ctaTitle: "Discover More, Learn More",
    ctaDescription: "Access Our Product Guide Now",
    ctaButtonText: "View Documentation",
    ctaButtonLink: requests.DOC_UI_STREAM,
    newTab: true,
  };

  const buildFintechFutureData = {
    heading:
      "<span class='highlighted-subsection-header'>Craft</span> Fully Compliant & Custom <span class='highlighted-subsection-header'>Workflows Efficiently</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/secure.svg",
        title: "Compliant Workflows",
        description:
          "Achieve full adherence to regulations (across RBI, SEBI, IRDAI, MEITY & more) with continuous monitoring and updates via our DigiLocker toolkit.",
      },
      {
        imageSrc: "/images/icons/reduce-risks.svg",
        title: "Reducing Frauds",
        description:
          "Reduce fraud by seamlessly collecting verified documents from government repositories like DigiLocker and CERSAI.",
      },
      {
        imageSrc: "/images/icons/journey.svg",
        title: "Tailored Experiences",
        description:
          "Customised solutions for your business needs with our adaptable DigiLocker toolkit, tailor-made for experience.",
      },
      {
        imageSrc: "/images/icons/elevate.svg",
        title: "Scale Quickly",
        description:
          "Focus on growing your core business while our platform orchestrates all your complexity with DigiLocker and other repositories.",
      },
      {
        imageSrc: "/images/icons/real-time-analytics.svg",
        title: "Real-Time Analytics",
        description:
          "Get insights on your DigiLocker journey. Monitor where errors come up and where your users are dropping off.",
      },
      {
        imageSrc: "/images/icons/reduced-dropoffs.svg",
        title: "Reduce Drop-offs",
        description:
          "Enhance user experience and adoption with streamlined document retrieval and verification on the fly, minimising user drop-offs.",
      },
    ],
  };

  const betterUseCasesData = {
    heading:
      "Streamlined Verification <span class='highlighted-subsection-header'>Task Automation</span>",
    tagline:
      "Experience the power of pre-configured tasks within UIStreams, enabling developers to address diverse needs effortlessly. <br/>Dive into critical use cases showcasing the versatility of this revolutionary tool",
    items: [
      {
        imageSrc: "/images/icons/verification.svg",
        title: "Aadhaar",
        description:
          "Simplify Aadhaar-related processes like OKYC and Aadhaar XML by effortlessly retrieving the documents from multiple sources and delivering them to specified callback URLs.",
      },
      {
        imageSrc: "/images/icons/digilocker.svg",
        title: "DigiLocker",
        description:
          "Unify the DigiLocker experience with UIStreams’ single API. Seamlessly interact with stored documents, utilising UIStreams as a secure gateway to this trusted repository.",
      },
      {
        imageSrc: "/images/icons/car-insurance.svg",
        title: "Insurance Policy",
        description:
          "Fetch any Insurance Policy documents from DigiLocker in real-time. Access essential insurance policy information instantly, eliminating communication delays.",
      },
      {
        imageSrc: "/images/icons/vehicle-rc.svg",
        title: "Vehicle Registration Certificate",
        description:
          "Retrieve vehicle registration certificate documents from DigiLocker in real time to simplify obtaining vehicle registration details.",
      },
      {
        imageSrc: "/images/icons/education-certificate.svg",
        title: "Education Certificates",
        description:
          "Fetch marksheets from university databases quickly via DigiLocker. Check the relevant qualifications for education loans and reduce fraud.",
      },
      {
        imageSrc: "/images/icons/business-certificate.svg",
        title: "Business Certificates",
        description:
          "Fetch verified documents like Udyam certificate and other Quality certificates natively. Verify businesses and mitigate risks efficiently during user onboarding.",
      },
    ],
  };

  const betterUseCasesData2 = {
    heading:
      "<span class='highlighted-subsection-header'>Use Cases</span> Benefiting from our <span class='highlighted-subsection-header'>UIStreams & DigiLocker Toolkit</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/lending-bnpl.svg",
        title: "Lending",
        description:
          "Streamline your borrower’s verification and application process by natively fetching the required documents via DigiLocker.",
      },
      {
        imageSrc: "/images/icons/secure.svg",
        title: "Insurance Underwriting",
        description:
          "Evaluate the risks of the person or entity during the insurance approval process smoothly and efficiently.",
      },
      {
        imageSrc: "/images/icons/merchant-collection.svg",
        title: "Marketplaces",
        description:
          "Seamlessly conduct comprehensive identity verification, ensuring safety for buyers and sellers on your marketplace.",
      },
      {
        imageSrc: "/images/icons/gaming.svg",
        title: "Trading and Gaming platforms",
        description:
          "Ensure regulatory compliance and prevent malicious activities with seamless user identity checks.",
      },
      {
        imageSrc: "/images/icons/education.svg",
        title: "Edtech",
        description:
          "Simplify the onboarding of your students & vendors, and enable smooth financing for education loans via a native verification flow.",
      },
      {
        imageSrc: "/images/icons/rent.svg",
        title: "Rentals and Real Estate",
        description:
          "Streamline document verification and registration across rentals and purchased properties, greatly enhancing efficiency.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Dynamic UI Morphing",
        description:
          "Enjoy a seamless user interface with dynamic data fields that adjust in real-time to match your evolving workflow.",
      },
      {
        title: "Seamless Document Downloads",
        description:
          "Retrieve documents from DigiLocker and other repositories directly within the UI without going to an external app, reducing drop offs.",
      },
      {
        title: "Exquisite User Experiences",
        description:
          "Enjoy intuitive interfaces, automated document retrieval, and dynamic UI elements for unparalleled satisfaction, all enhanced through our DigiLocker toolkit.",
      },
      {
        title: "Unifying Diverse Sources",
        description:
          "Bridge multiple sources, empowering developers to create workflows spanning various information sources.",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription:
      "Seamlessly integrate custom UI workflows for onboarding into your application",
    contentImage: true,
    contentImageSrc: "/images/virtual-accounts/banner-features.svg",
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to drive the fastest GTMs <span className="header-section-highlighted">with DigiLocker and CERSAI?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const textAndButtonBannerData2 = {
    ctaTitle:
      'Ready to save time, resources, & launch <span className="header-section-highlighted">10x faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const recommendedPagesData = [
    {
      title: "HyperStreams",
      description:
        "Significantly speed up user verification and reduce drop-offs during onboarding with HyperStreams.",
      pageLink: "/products/hyperstreams",
      imageSrc: "/images/resources/hyperstreams.svg",
    },
    {
      title: "KYC Verification APIs",
      description:
        "Digitally onboard users by conducting instant background verifications with real-time KYC checks. Reduce customer drop-offs significantly.",
      pageLink: "/products/kyc-onboarding/",
      imageSrc: "/images/resources/kyc-onboarding.svg",
    },
    {
      title: "DigiLocker",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/digilocker-apis/",
      imageSrc: "/images/resources/digilocker-new.svg",
    },
  ];

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

  const initialData = [
    {
      headingLight: "Dynamic UI Morphing",
      headingBold: "",
      text: "Seamless user interface with dynamic data fields that adjust in real-time to match the evolving workflow.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/UIStreams/dynamic-ui-morphing.json",
    },
    {
      headingLight: "Seamless Document Downloads",
      headingBold: "",
      text: "Reduce drop-offs by retrieving documents from DigiLocker and other repositories directly without going to an external application.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/UIStreams/seamless-document-download.json",
    },
    {
      headingLight: "Exquisite User Experiences",
      headingBold: "",
      text: "Enjoy intuitive interfaces, automated document retrieval, and dynamic UI elements for unparalleled satisfaction, all enhanced through our DigiLocker toolkit.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/UIStreams/exquisite-user-experiences.json",
    },
    {
      headingLight: "Unifying Diverse Sources",
      headingBold: "",
      text: "Bridge multiple sources, empowering developers to create workflows spanning various information sources.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/UIStreams/unifying-diverse-sources.json",
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
    <div className={styles["ui-streams-container"]}>
      <Head>
        <title>
          UIStreams | Flexible Workflows for Seamless User Verification
        </title>
        <meta
          property="og:title"
          content="UIStreams | Flexible Workflows for Seamless User Verification"
        />
        <link rel="canonical" href={`https://decentro.tech${urls.UI_STREAM}`} />
        <link
          rel="alternate"
          href={`https://decentro.tech${urls.UI_STREAM}`}
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Build flawless user verification experiences into your product and go to market faster with custom UI-Based workflows. Sign up for UIStreams today."
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["ui-streams"]}>
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
        <DescriptiveItemList data={betterUseCasesData2} secondSection={true} />
        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData2} />
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </div>
  );
};

export default UIStream;
