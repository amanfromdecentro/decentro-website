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
// const PayoutsInteractions = dynamic(() =>
//   import("../../../components/interactions/payouts")
// );
const ClientLogoCarousel = dynamic(() =>
  import("../../../components/client-logo-carousel/client-logo-carousel")
);
const RecommendedPages = dynamic(() =>
  import("../../../components/recommended-pages/recommended-pages")
);
import styles from "../../../styles/page-styles/instant-payouts.module.scss";
import { clientLogos } from "../../../components/client-logos";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import useAnimationData from "../../../hooks/useAnimationData";
import PayoutsInteractions from "../../../components/interactions/payouts";
import { transactions_processed_annually } from "../../../utilities/variables";

const InstantPayouts = () => {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Send <span class='highlighted-heading'>Instant Payouts</span> to Anyone, Anytime",
    subHeading: "",
    tagline:
      "Send money to any bank account or UPI ID automatically via APIs or file upload. Available for use 24x7 on the go",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/payouts-video.mp4",
    altText: "Collect Funds Seamlessly via Virtual Accounts",
    titleText: "VA Collections",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/payouts/banner-bg.svg",
    metrics: true,
    metricList: [
      {
        textBold: " BN+",
        textLight: "Processed Annually",
        numberElement: `$${transactions_processed_annually}`,
      },
      {
        textBold: "200,000+ Transactions",
        textLight: "per day",
      },
      {
        textBold: "+ TPS",
        textLight: "handled daily",
        numberElement: "50",
      },
    ],
  };

  const buildFintechFutureData = {
    heading:
      "Send <span class='highlighted-subsection-header'>Payments</span> In Real Time",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/faster-goto-market.svg",
        title: "Faster Go-to-Market",
        description:
          "Disburse from your platform or our dashboard across multiple bank partners with a single integration.",
      },
      {
        imageSrc: "/images/icons/visibility.svg",
        title: "Complete Visibility",
        description:
          "Get insights into your payouts and transactions with a self-serve dashboard.",
      },
      {
        imageSrc: "/images/icons/scale-quickly.svg",
        title: "Scale Quickly",
        description:
          "Focus on growing your business by 10X while we do the end work of maintaining integrations.",
      },
      {
        imageSrc: "/images/icons/low-costs.svg",
        title: "Lower Operational Overheads",
        description:
          "Reduce manual operational efforts of reconciliation of funds by automating processes.",
      },
      {
        imageSrc: "/images/icons/invest.svg",
        title: "High Volume",
        description:
          "Stop worrying about transaction volumes, and let us handle this for you across multiple bank partners.",
      },
      {
        imageSrc: "/images/icons/compliance1.svg",
        title: "Fully Compliant",
        description:
          "End-to-end compliant payout flows via partner banks or Tri-Party Trustee Backed Escrow Accounts",
      },
    ],
  };

  const betterUseCasesData = {
    heading: "<span class='highlighted-subsection-header'>Use Cases</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/split-payouts.svg",
        title: "Split Payouts",
        description:
          "Disburse shared payments for your business among more than one merchants without manual efforts.",
      },
      {
        imageSrc: "/images/icons/marketplace-payouts.svg",
        title: "Marketplace",
        description:
          "Leverage auto-credit capabilities with the merchant/vendor to reduce any manual reconciliation.",
      },
      {
        imageSrc: "/images/icons/nbfc-lenders.svg",
        title: "NBFCs &<br/>Lenders",
        description:
          "Help customers grow faster by disbursing loans from lenders' bank accounts, all in real-time.",
      },
      {
        imageSrc: "/images/icons/customer-refunds.svg",
        title: "Customer Refunds",
        description:
          "Automate timely customer refunds with easy setup, lower processing periods and 10X success rates.",
      },
      {
        imageSrc: "/images/icons/disbursement.svg",
        title: "Disbursements",
        description:
          "Enable hassle-free disbursements of dividends, bonuses, etc. to employees or partners.",
      },
      {
        imageSrc: "/images/icons/payroll.svg",
        title: "Payroll",
        description:
          "Automate fund transfers to your employees towards their services from a single dashboard.",
      },
    ],
  };

  const possibilitiesData = {
    itemSection: "accordion",
    descriptiveSection: "content",
    accordionSectionItems: [
      {
        title: "Bulk Transfers",
        description:
          "Execute bulk payouts instantly with real-time transaction status from our dashboard or your platforms",
      },
      {
        title: "Multiple Payout Options",
        description:
          "Manage Payouts to bank accounts or UPI handles from a single dashboard",
      },
      {
        title: "Enable Multiple Payment Methods",
        description:
          "Use payment methods like NEFT, RTGS, IMPS, or UPI efficiently for your business",
      },
      {
        title: "Account Validation",
        description:
          "Perform a penny drop transaction to validate the transaction made to the beneficiary",
      },
      {
        title: "Auto Reconciliation",
        description:
          "Reduce manual reconciliation of debits by providing callbacks when a transaction is performed",
      },
      {
        title: "Multibank Support",
        description:
          "Enable funds transfer to various banks from a single dashboard backed by multiple partner banks or through your own bank account",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription: "Execute payouts across platforms with ease",
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
    ctaButtonLink: requests.DOC_PAYOUTS,
    newTab: true,
  };

  const recommendedPagesData = [
    {
      title: "Escrow Accounts",
      description: "Manage All Your Escrow Needs In One Place",
      pageLink: "/products/escrow-accounts",
      imageSrc: "/images/escrow-accounts/banner.svg",
    },
    {
      title: "Bulk Payouts APIs",
      description:
        "Automate payout disbursal in bulk for vendors, franchisees, employees, and more.",
      pageLink: "/resources/bulk-payouts",
      imageSrc: "/images/resources/bulk-payouts.svg",
    },
    {
      title: "Bank Account Validation",
      description:
        "Initiate instant bank account verification through account numbers validation.",
      pageLink: "/resources/bank-account-validation-api",
      imageSrc: "/images/resources/bank-account-validation.svg",
    },
  ];

  const initialData = [
    {
      headingLight: "Highest Success Rates",
      headingBold: "",
      text: "Enjoy success rates of up to 99.8% combined with account validation to validate your transactions.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/instant-payouts/higher-success-rates.json",
    },
    {
      headingLight: "Enable Bulk Payouts",
      headingBold: "",
      text: "Execute bulk payouts instantly with real-time transaction status from our dashboard.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/instant-payouts/enable-bulk-payouts.json",
    },
    {
      headingLight: "Enhanced Multi-Bank Support",
      headingBold: "",
      text: "Drive seamless transfers of funds to numerous banks through a unified dashboard via partnerships with multiple banks.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/instant-payouts/enhanced-multi-bank-support.json",
    },
    {
      headingLight: "Escrow Accounts",
      headingBold: "",
      text: "Streamline your escrow with guided setup, automated fund transfers, and simplified reconciliation monitoring.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/instant-payouts/escrow-accounts.json",
    },
    {
      headingLight: "Multiple Payment Methods",
      headingBold: "",
      text: "Enable multiple payment methods like NEFT, RTGS, IMPS, or UPI efficiently for your business.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/instant-payouts/multiple-payment-modes.json",
    },
    {
      headingLight: "Auto-Reconciliation",
      headingBold: "",
      text: "Minimise manual debit reconciliation by automating notifications for every transaction performed.",
      imageWidth: "40%",
      animationUrl:
        "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/instant-payouts/auto-reconciliation.json",
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
        <title>Payouts | Send Instant Payouts Anytime | Decentro</title>
        <meta
          property="og:title"
          content="Payouts | Send Instant Payouts Anytime | Decentro"
        />
        <link
          rel="canonical"
          href="https://decentro.tech/products/instant-payouts"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/products/instant-payouts"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Send instant payouts with APIs in bulk to anyone, 24x7. Stop worrying about transaction volumes and achieve faster GTM with Decentro's Payouts API. Get started today."
        />
        <meta name="keywords" content="" />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["enach"]}>
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
        <PayoutsInteractions />
        {/* <PayoutsInteractions header={"Payout via. UPI"} /> */}
        <TextAndButtonBanner data={textAndButtonBannerDataDoc} />
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
      <RecommendedPages data={recommendedPagesData} />
    </div>
  );
};

export default InstantPayouts;
