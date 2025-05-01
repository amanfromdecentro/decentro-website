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
const DescriptiveItemListFour = dynamic(() =>
  import(
    "../../../components/descriptive-item-list-four/descriptive-item-list-four"
  )
);
const RecommendedPages = dynamic(() =>
  import("../../../components/recommended-pages/recommended-pages")
);

import styles from "../../../styles/page-styles/va-collections.module.scss";
import { clientLogos } from "../../../components/client-logos";
import useAnimationData from "../../../hooks/useAnimationData";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";

const EscrowAccounts = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Carry Out Secure Transactions via <span class='highlighted-heading'>InstaEscrow</span>",
    subHeading: "",
    tagline: "Manage All Your Escrow Needs In One Place",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/escrow-accounts-video.mp4",
    video: true,
    altText: "Manage All Your Escrow Needs In One Place",
    titleText: "InstaEscrow",
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/escrow-accounts/banner-bg.svg",
    metrics: false,
    metricList: [
      {
        textBold: "100+ Virtual Accounts",
        textLight: "created per hour",
      },
      {
        textBold: "2 Cr+ INR",
        textLight: "reconciled per hour",
      },
    ],
  };

  const buildFintechFutureData = {
    heading:
      "Simplify and automate  <span class='highlighted-subsection-header'>escrow processes</span> securely and effortlessly",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/payouts-to-beneficiaries.svg",
        title: "Seamless Payouts",
        description:
          "Collect funds from businesses or individuals in the Escrow Account and automate fund transfers.",
      },
      {
        imageSrc: "/images/icons/operations.svg",
        title: "Lower Operational<br/>Overheads",
        description:
          "Reduce manual efforts and costs by deploying pre-approved money flow.",
      },
      {
        imageSrc: "/images/icons/secure.svg",
        title: "Highly Secure<br/>& Compliant",
        description:
          "Enhance safety and stay compliant by integrating with our stack.",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/escrow-accounts/marketplace.svg",
        title: "Marketplaces",
        description:
          "Leverage Escrow capabilities with the merchant/vendor to reduce fraud during fund transfer.",
      },
      {
        imageSrc: "/images/escrow-accounts/invoice.svg",
        title: "Invoice<br/>Financing",
        description:
          "Optimise cash flow via a secure and transparent mechanism for holding the invoices with funds released once the invoice is paid.",
      },
      {
        imageSrc: "/images/escrow-accounts/rent.svg",
        title: "Rentals",
        description:
          "Manage rental services, ensuring that payments are made as agreed, and services are provided accordingly.",
      },
      {
        imageSrc: "/images/escrow-accounts/p2p.svg",
        title: "P2P<br/>Lending",
        description:
          "Hold and Release Funds according to the loan terms and streamline the lending process.",
      },
      {
        imageSrc: "/images/escrow-accounts/alt-invest.svg",
        title: "Alternate<br/>Investments",
        description:
          "Strike a balance between asset ownership, transfer and fund release in a secure and compliant manner.",
      },
      {
        imageSrc: "/images/escrow-accounts/startup-invest.svg",
        title: "Startup<br/>Investments",
        description:
          "Leverage the capabilities of escrow services for a secure and transparent mechanism for fund disbursement.",
      },
      {
        imageSrc: "/images/escrow-accounts/payroll-process.svg",
        title: "Payroll<br/>Processing",
        description:
          "Ensure salaries are disbursed accurately and on time while reducing the administrative burden on employers.",
      },
      {
        imageSrc: "/images/icons/wide-coverage.svg",
        title: "Cross-Border<br/>Transactions",
        description:
          "Facilitate secure cross-border transactions by holding funds until both parties fulfil their obligations.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Open and Issue Digital Escrow Accounts",
        description:
          "Set up digital escrow accounts (with account numbers) for your customers & vendors via Restful APIs in seconds",
      },
      {
        title: "Deposit Money Seamlessly",
        description:
          "Share the account details with your customer, vendor or partner to deposit money digitally",
      },
      {
        title: "Make Direct Payouts via APIs",
        description:
          "Automate money transfers to bank accounts using common payment methods such as UPI, IMPS, NEFT, and RTGS across India",
      },
      {
        title: "Reconcile Transactions Automatically",
        description:
          "Disburse & reconcile payouts to your partners or vendors automatically using our payment APIs. Maintain your own ledgers as needed",
      },
      {
        title: "Secure Escrow Verification",
        description:
          "Ensure secure transactions via PAN and bank account checks of all escrow parties to prevent financial fraud and ensure compliance",
      },
      {
        title: "Real-time Updates",
        description:
          "Get payment reports, insights, and notifications directly on your dashboard instantly",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription:
      "Plug-and-Play Escrow tailor-made for your business",
    contentImage: true,
    contentImageSrc: "/images/virtual-accounts/banner-features.svg",
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Talk to our Experts",
    ctaButtonLink: requests.SIGNUP,
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  const accordionData = [
    {
      query: "What is a Digital Escrow Account?",
      solution:
        "A Digital Escrow Account is a secure online platform that holds funds, assets, or documents for parties involved in a transaction. It acts as a trusted intermediary, ensuring that both parties fulfil their obligations before the funds or assets are released",
    },
    {
      query: "What Are the Benefits of Using Digital Escrow Accounts?",
      solution: "Digital Escrow Accounts offer several benefits, including:",
      bulletPoints: [
        {
          text: "Security: Funds/assets are held securely, reducing the risk of fraud or non-performance.q",
        },
        {
          text: "Trust: Parties can confidently transact, knowing that the escrow agent ensures fairness.",
        },
        {
          text: "Dispute Resolution: Escrow agents can help resolve disputes by impartially evaluating whether conditions have been met.",
        },
        {
          text: "Efficiency: Transactions can be completed more efficiently and with less risk.",
        },
        {
          text: "Cross-Border Transactions: Facilitates international transactions by providing a trusted mechanism.",
        },
      ],
    },
    {
      query:
        "What are the prerequisite documents required to get started with Escrow?",
      solution:
        "To open an Escrow account, you need the following documents after your use case is validated:",
      bulletPoints: [
        { text: "Escrow agreement" },
        { text: "PAN & Bank account - KYC verification" },
        { text: "Company details" },
      ],
    },
    {
      query: "Is there a limit to the amount I can put into escrow?",
      solution: "As of now, there is no limit on the amount.",
    },
    {
      query: "How Secure Are Digital Escrow Accounts?",
      solution:
        "We at Decentro prioritise security. We employ encryption, multi-factor authentication, and stringent identity verification procedures to protect users' funds and data. Compliance with industry regulations also contributes to security.",
    },
  ];

  // FAQ Schema data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: accordionData.map((item, index) => ({
      "@type": "Question",
      name: item.query,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.solution,
      },
    })),
  };

  const recommendedPagesData = [
    {
      title: "Instant Payouts",
      description:
        "Send money to any bank account or UPI ID automatically via APIs or file upload.",
      pageLink: "/products/instant-payouts",
      imageSrc: "/images/resources/instant-payout.svg",
    },
    {
      title: "Ledgers",
      description:
        "A single and scalable system of record for all transactions and balances on your platform.",
      pageLink: "/products/ledgers",
      imageSrc: "/images/resources/ledgers.svg",
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
      headingLight: "Quick Start Escrow",
      headingBold: "",
      text: "Set up digital escrow accounts (with account numbers) for your customers & vendors via Restful APIs in seconds.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/escrow-accounts/quick-start-escrow.json",
    },
    {
      headingLight: "Enhanced Security",
      headingBold: "",
      text: "Enhance security and compliance by conducting PAN and bank account verifications for all escrow parties to prevent financial fraud.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/escrow-accounts/enhanced-security.json",
    },
    {
      headingLight: "Unified Dashboard",
      headingBold: "",
      text: "Track every credit and debit related to an escrow agreement on a single dashboard, ensuring visibility, trust, and reliability for all parties.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/escrow-accounts/unified-dashboard.json",
    },
    {
      headingLight: "Drive Direct Payouts",
      headingBold: "",
      text: "Automate money transfers to bank accounts using common payment methods such as UPI, IMPS, NEFT, and RTGS across India.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/escrow-accounts/drive-direct-payouts.json",
    },
    {
      headingLight: "Real-time Updates",
      headingBold: "",
      text: "Stay informed with instant payment-related reports, insights, and notifications delivered directly to your dashboard in real time.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/escrow-accounts/real-time-updates.json",
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
    <div className={styles["va-collections-container"]}>
      <Head>
        <title>Digital Escrow Accounts as a Service in India | Decentro</title>
        <meta
          property="og:title"
          content="Digital Escrow Accounts as a Service in India | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/escrow-accounts"
        />
        <meta
          name="description"
          content=" Open and run fully digital escrow accounts for any use case in India via Decentro’s InstaEscrow. Trusted transactions with third parties via escrow."
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script defer type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Head>
      <div className={styles["va-collections"]}>
        <ProductBanner data={bannerData} clientData={clientLogoData} />
        <ClientLogoCarousel data={clientLogoData} />
        <DescriptiveItemList data={buildFintechFutureData} />
        <div className={styles["banking-partners-images-section"]}>
          <h2>
            Banking <span>Partners</span>
          </h2>
          <div className={styles["banking-partners-images"]}>
            <div className={styles["image"]}>
              <img src="/images/banking-partners/YesBank.svg" />
            </div>
            <div className={styles["image"]}>
              <img src="/images/banking-partners/IciciBank.svg" />
            </div>
            <div className={styles["image"]}>
              <img src="/images/banking-partners/DBSBank.svg" />
            </div>
            <div className={styles["image"]}>
              <img src="/images/banking-partners/IDFC-Bank.svg" />
            </div>
            <div className={styles["image"]}>
              <img src="/images/banking-partners/Axis-Bank.svg" />
            </div>
          </div>
        </div>
        <div className={styles["trustee-partners-images-section"]}>
          <h2>
            Trusteeship <span>Services</span> (SEBI Backed)
          </h2>
          <div className={styles["banking-partners-images"]}>
            <div className={styles["image"]}>
              <img src="/images/banking-partners/AxisTrustee.svg" />
            </div>
            <div className={styles["image"]}>
              <img src="/images/banking-partners/Mitcon-Credentia.svg" />
            </div>
          </div>
        </div>

        <TextAndButtonBanner data={textAndButtonBannerData} />
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
        {/* <InlineItemAndParagrah data={possibilitiesData} /> */}
        {/* <div className={styles["sectors-section"]}>
          <h2>
            Better <span>Use Cases</span>
          </h2>
          <ResourcesSectorsOrganized data={sectorData} />
        </div> */}
        <DescriptiveItemListFour data={betterUseCasesData} />
        {/* <VACollectionsInteractions /> */}
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

export default EscrowAccounts;
