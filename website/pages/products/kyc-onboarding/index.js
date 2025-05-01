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
const ProductSuite = dynamic(() =>
  import("../../../components/product-suite/product-suite")
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
import styles from "../../../styles/page-styles/kyc-and-onboarding.module.scss";
import { clientLogos } from "../../../components/client-logos";

const KycAndOnboarding = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "KYC Verification APIs for Faster <span class='highlighted-heading'>User Onboarding</span>",
    subHeading: "",
    tagline:
      " Digitally onboard users by conducting instant background verifications with real-time KYC checks. Reduce customer drop-offs significantly.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/kyc-and-onboarding-video.mp4",
    altText:
      " Digitally onboard users by conducting instant background verifications with real-time KYC checks. Reduce customer drop-offs significantly.",
    titleText: "KYC & Onboarding",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/kyc-and-onboarding/banner-bg.svg",
    metrics: true,
    metricList: [
      {
        textBold: "+ ID",
        textLight: "validations per hour",
        numberElement: "2000",
      },
      {
        textBold: "+ OCR & extractions",
        textLight: "per hour",
        numberElement: "1000",
      },
    ],
  };

  const buildFintechFutureData = {
    heading:
      "<span class='highlighted-subsection-header'>Verify Documents</span> and <span class='highlighted-subsection-header'>Identities</span> in Real Time",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/reduce-workload.svg",
        title: "Reduced<br/>Manual Workload",
        description:
          "Enable better user experience & reduce manual workload significantly via digital onboarding.",
      },
      {
        imageSrc: "/images/icons/faster-goto-market.svg",
        title: "Faster<br/>Go-to-Market",
        description:
          "Go live within hours via simple plug-and-play APIs or SDKs and worry less about integrations.",
      },
      {
        imageSrc: "/images/icons/low-acq-cost.svg",
        title: "Lower Customer<br/>Acquisition Costs",
        description:
          "Save significantly on acquiring a customer with up to 80% cost reduction.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/onboard.svg",
        title: "Customer/Business<br/>Onboarding",
        description:
          "Fetch and verify the complete details of any company or individual from national IDs like Aadhaar, PAN, etc., and onboard them instantly.",
      },
      {
        imageSrc: "/images/icons/ckyc-checks.svg",
        title: "CKYC Checks",
        description:
          "Access all critical customer documents, after consent, using a single CKYC API hit. Avoid the hassle of mandating offline KYC with OSV-ready CKYC.",
      },
      {
        imageSrc: "/images/icons/data-augmentation.svg",
        title: "Data<br/>Augmentation",
        description:
          "Strengthen your existing KYC flow with additional validations such as vehicle registration, driving license, voter ID, and more.",
      },
      {
        imageSrc: "/images/icons/gaming.svg",
        title: "Trading &<br/>Gaming Platforms",
        description:
          "Perform user identity checks and verify their legality to avoid malicious activities using our dynamic & compliant onboarding platform.",
      },
      {
        imageSrc: "/images/icons/marketplace.svg",
        title: "Marketplaces",
        description:
          "Run comprehensive background checks on your customers, merchants, or partners with a fully automated user onboarding process.",
      },
      {
        imageSrc: "/images/icons/rent.svg",
        title: "Rental<br/>Platforms",
        description:
          "Authenticate user credentials while renting out cars, hotels, flats, or office spaces to prevent fraud and other malpractices.",
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
    ctaButtonLink: requests.DOC_KYC_ONBOARDING,
    newTab: true,
  };

  const accordionData = [
    {
      query: "What is Digital KYC?",
      solution:
        "Digital KYC is an online customer verification process required for businesses operating in regulated sectors such as banking, insurance, and financial securities. The Digital KYC is crucial to Customer Due Diligence (CDD) requirements. It directs businesses to identify their customers to prevent money laundering, identity theft, and illicit financing activities.",
    },
    {
      query: "Which documents does Decentro support for KYC verification?",
      solution:
        "Decentro supports all photo-based national IDs, including Driver's Licence (DL), PAN, Voter ID, Passport & Aadhaar card. Decentro also enables bank account verification and GSTIN verification and offers configurations for ID verification upon request.",
    },
    {
      query:
        "Can you fetch Aadhaar data directly from the government database?",
      solution:
        "Private entities don’t have direct access to Aadhaar databases per the new government regulations. Hence, we request that your customers download their Aadhaar XML files offline (i.e., on their devices) and then upload them to your website/app.",
    },
    {
      query: "How to download the Aadhaar XML file?",
      solution:
        "The Aadhaar file can be downloaded in PDF as well as XML format from the below-given websites:",
      bulletPoints: [
        {
          text: "PDF: <a href='https://eaadhaar.uidai.gov.in/#/' target='_blank'>https://eaadhaar.uidai.gov.in/#/</a>",
        },
        {
          text: "XML: <a href='https://myaadhaar.uidai.gov.in/' target='_blank'>https://myaadhaar.uidai.gov.in/</a>",
        },
      ],
    },

    {
      query: "Do we also provide/a link to the CKYC APIs?",
      solution:
        "Yes. We provide 2 types of integrations - aggregator & native. If you are a registered entity with CKYC credentials, you can integrate through Decentro and use your credentials to access CKYC information. Alternatively, you can access CKYC data using Decentro’s credentials.",
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
      title: "DigiLocker",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/digilocker-apis/",
      imageSrc: "/images/resources/digilocker-new.svg",
    },
    {
      title: "HyperStreams",
      description:
        "Significantly speed up user verification and reduce drop-offs during onboarding with HyperStreams.",
      pageLink: "/products/hyperstreams",
      imageSrc: "/images/resources/hyperstreams.svg",
    },
    {
      title: "UIStreams",
      description:
        "Seamlessly integrate UI-based plugins for a fully-native user verification & KYC experience with UIStreams",
      pageLink: "/products/uistreams",
      imageSrc: "/images/ui-stream/ui-stream-hero.svg",
    },
  ];

  return (
    <div className={styles["enach-container"]}>
      <Head>
        <title>KYC & Onboarding | User Verification APIs | Decentro</title>
        <meta
          property="og:title"
          content="KYC & Onboarding | User Verification APIs | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/kyc-onboarding"
        />
        <meta
          name="description"
          content="Run comprehensive background checks on users and onboard them in real-time. Onboard your customers 95% faster with Decentro’s KYC & CKYC APIs."
        />
        <meta
          name="keywords"
          content="Onboarding, fintech, infrastructure, APIs, banking, platform, APAC, Asia, open banking, neo-banks, ID validation, KYC database, financial services, KYC and AML"
        />
        <meta name="image" property="og:image" content={bannerData.imageSrc} />
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className={styles["kyc-onboarding"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        <ProductSuite />

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
      </div>
      <RecommendedPages data={recommendedPagesData} />
    </div>
  );
};

export default KycAndOnboarding;
