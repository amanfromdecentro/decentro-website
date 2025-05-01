import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../../../sgRequests";

import ProductBanner from "../../../../components-sg/product-banner/product-banner";

const ClientLogoCarousel = dynamic(() =>
  import("../../../../components-sg/client-logo-carousel/client-logo-carousel")
);
const DescriptiveItemList = dynamic(() =>
  import(
    "../../../../components-sg/descriptive-item-list/descriptive-item-list"
  )
);
const InlineItemAndParagrah = dynamic(() =>
  import(
    "../../../../components-sg/inline-item-and-paragraph/inline-item-and-paragraph"
  )
);
const TestimonialsCarousel = dynamic(() =>
  import(
    "../../../../components-sg/testimonials-carousel/testimonials-carousel"
  )
);
const TextAndButtonBanner = dynamic(() =>
  import(
    "../../../../components-sg/text-and-button-banner/text-and-button-banner"
  )
);

import styles from "../../../../styles/page-styles/ledgers.module.scss";
import { clientLogos } from "../../../../components-sg/client-logos";

const Ledgers = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "<span class='highlighted-heading'>Manage</span> all your Transactions on a single platform",
    subHeading: "",
    tagline:
      "A single and scalable system of record for all transactions and balances on your platform",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/ledgers-video.mp4",
    altText:
      "A single and scalable system of record for all transactions and balances on your platform.",
    titleText: "Ledgers",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/ledgers/banner-bg.svg",
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

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/cashback.svg",
        title: "Cashbacks",
        description:
          "Give cashback to your clients using ledgers and have it directly deposited into your clients’ accounts or wallets.",
      },
      {
        imageSrc: "/images/icons/loyalty.svg",
        title: "Loyalty",
        description:
          "Segregate loyalty points or 'coins' using ledgers, enabling access to other services within the platform.",
      },
      {
        imageSrc: "/images/icons/reconciliation.svg",
        title: "Reconciliation",
        description:
          "Reconcile the flow and balances of spends automatically for the purchases made by your customers.",
      },
      {
        imageSrc: "/images/icons/fees.svg",
        title: "Fees",
        description:
          "Levy fees or charges for specific transactions, including items like forex or transfer fees.",
      },
      {
        imageSrc: "/images/icons/save-limitlessly.svg",
        title: "Pods",
        description:
          "Track monetary transactions in specific use cases like Savings, Investments, etc., within the ecosystem.",
      },
      {
        imageSrc: "/images/icons/payouts-to-beneficiaries.svg",
        title: "Repayment",
        description:
          "Keep track of payments, repayments, and other activities related to loans and BNPLs.",
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
    ctaButtonLink: requests.DOC_SG_LEDGERS,
    newTab: true,
  };

  return (
    <div className={styles["enach-container"]}>
      <Head>
        <title>
          Ledger APIs | Platform To Record and Maintain Transactions
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/global/products/ledgers"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/global/products/ledgers"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Make accounting & bookkeeping easy for your business using Ledger APIs. Simplify reconciliation, map transactions and get real time updates with Decentro’s APIs."
        />
        <meta
          name="keywords"
          content=" Ledgers, System of Record, Accounting Transactions, Digital record keeping, Gaming ledger, Crypto Ledger, Source of truth transactions"
        />
        <meta
          property="og:title"
          content="Ledger APIs | Platform To Record and Maintain Transactions"
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
        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
    </div>
  );
};

export default Ledgers;
