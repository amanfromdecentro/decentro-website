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
const BNPLInteractions = dynamic(() =>
  import("../../../components/interactions/bnpl")
);
const ClientLogoCarousel = dynamic(() =>
  import("../../../components/client-logo-carousel/client-logo-carousel")
);
const RecommendedPages = dynamic(() =>
  import("../../../components/recommended-pages/recommended-pages")
);
import styles from "../../../styles/page-styles/bnpl.module.scss";
import { clientLogos } from "../../../components/client-logos";

const Lending = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Launch Your<span class='highlighted-heading'> Lending </span> Product",
    subHeading: "",
    tagline: " Automate Lending Decisions without Increasing the Risk",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/bnpl-video.mp4",
    altText: "Lending Decisions",
    titleText: "Ledgers",
    video: true,
  };

  const buildFintechFutureData = {
    heading:
      "<span class='highlighted-subsection-header'>Offer Credit</span> to your Customers",
    tagline: "",
    items: [
      {
        imageSrc: "/images/emi.svg",
        title: "Customized<br/>Credit",
        description:
          "Simplify SME or consumer lending by launching BNPL and personal loans on your platform directly.",
      },
      {
        imageSrc: "/images/better-conversions.svg",
        title: "Better<br/>Conversions",
        description:
          "Offer your customers simple-to-use financing methods, helping them provide a better user experience.",
      },
      {
        imageSrc: "/images/reduced-operational-costs.svg",
        title: "Low-code<br/>Development",
        description:
          "Embed Decentro’s APIs or SDKs directly into your platform and launch your BNPL product.",
      },
      {
        imageSrc: "/images/icons/scale-quickly.svg",
        title: "Business<br/>Growth",
        description:
          "Monetize your customer base better leaving the hassles of lending technology to Decentro",
      },
      {
        imageSrc: "/images/icons/quick-support.svg",
        title: "Quick Support",
        description:
          "Fast solutions to all your queries, right from integration to go-live, that helps you focus on growing your business.",
      },
      {
        imageSrc: "/images/icons/faster-goto-market.svg",
        title: "Faster<br/>Go-to-Market",
        description:
          "Go live within hours using our simple plug-and-play APIs or SDKs and worry less about integrations.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/emi.svg",
        title: "Buy Now<br/>Pay Later",
        description:
          "Launch your white-labelled BNPL product while streamlining credit, reconciliations, and collections.",
      },
      {
        imageSrc: "/images/reduced-operational-costs.svg",
        title: "Offline Credit",
        description:
          "Leverage Decentro's lending stack for offline merchants who want to launch their own credit products.",
      },
      {
        imageSrc: "/images/save-limitlessly.svg",
        title: "Credit Line<br/>Products",
        description:
          "Roll out a revolving line of credit to consumers with Decentro-handled disbursements and repayments.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Managed Stack",
        description:
          "Leverage our fully packaged lending module right from onboarding, underwriting, and disbursements to collections",
      },
      {
        title: "Disbursement Updates",
        description:
          "Track disbursements via the Decentro customer dashboard in real-time",
      },
      {
        title: "Seamless Reconciliation",
        description:
          "Take charge of all the reconciliation between the platform & lenders using our lending stack",
      },
      {
        title: "Facilitate Swift Disbursement",
        description:
          "Disburse loans to customers’ bank accounts, helping reduce fraud instances",
      },
      {
        title: "Single Platform",
        description:
          "One-stop platform catering to both a merchant looking for a checkout financing solution or a digital lender looking to integrate with multiple providers",
      },
      {
        title: "Multiple Providers",
        description:
          "Ensure high success rates due to multiple lending partners integrated at the backend",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription: "Empower Lending with Confident Decisions",
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
    header: "Empowering hundreds of Lending players like You",
    clientLogos: clientLogos,
  };

  const textAndButtonBannerDataDoc = {
    ctaTitle:
      "<span className='header-section-highlighted'>Discover More, Learn More</span>",
    ctaDescription: "Access Our Product Guide Now",
    ctaButtonText: "View Documentation",
    ctaButtonLink: requests.DOC_LENDING,
    newTab: true,
  };

  const recommendedPagesData = [
    {
      title: "Digital Lending Solution",
      description:
        "A complete lending solution inclusive of easy loan disbursement, re-payments, KYC verification and much more.",
      pageLink: "/resources/digital-lending-solution",
      imageSrc: "/images/resources/digital-lending.svg",
    },
    {
      title: "Employment Verification",
      description:
        "Real-time UAN Verification API to extract employment details of employees and verify EPFO details.",
      pageLink: "/resources/employment-verification-api",
      imageSrc: "/images/resources/employement-verification.svg",
    },
    {
      title: "Debt Collection",
      description:
        "Automate payout disbursal in bulk for vendors, franchisees, employees, and more.",
      pageLink: "/resources/bulk-payouts",
      imageSrc: "/images/resources/bulk-payouts.svg",
    },
  ];

  return (
    <div className={styles["enach-container"]}>
      <Head>
        <title>Lending API Module | Simplify Loan Lifecycle | Decentro</title>
        <meta
          property="og:title"
          content="Lending API Module | Simplify Loan Lifecycle | Decentro"
        />
        <link rel="canonical" href="https://decentro.tech/products/lending" />
        <meta
          name="description"
          content="Simplify disbursals, manage loan applications with ease, and reduce collection costs by 5x. Plug into Decentro’s Lending stack & plug-n-play APIs, now!"
        />
        <meta
          name="keywords"
          content="lending, capital disbursement, fintech, infrastructure, APIs, banking, platform, APAC, Asia, open banking, neo-bank, AWS, SDKs, account aggregator, account information, account linking, financial services, lending APIs, credit score"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["enach"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        <InlineItemAndParagrah data={possibilitiesData} />
        <DescriptiveItemList data={betterUseCasesData} />
        <BNPLInteractions header={"Buy Now Pay Later"} />
        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
      <RecommendedPages data={recommendedPagesData} />
    </div>
  );
};

export default Lending;
