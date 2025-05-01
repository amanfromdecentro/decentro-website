import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../requests";
import urls from "../../urls";

import ProductBanner from "../../components/product-banner/product-banner";

const InlineImageAndParagraph = dynamic(() =>
  import(
    "../../components/inline-image-and-paragraph/inline-image-and-paragraph"
  )
);
const WhyDecentroComparison = dynamic(() =>
  import("../../components/why-decentro-comparison/why-decentro-comparison")
);
const EmailRegBanner = dynamic(() =>
  import("../../components/email-reg-banner/email-reg-banner")
);
import styles from "../../styles/page-styles/resources.module.scss";
import Image from "next/image";

const Products = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>Products</span>",
    tagline:
      "Learn how Decentro's Flow and Fabric modules can supercharge payments and banking for you, helping you launch your next financial product 10X faster.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/products-hub/product-header-main.svg",
    altText: "Products",
    titleText: "Products",
    video: false,
    DBackground: true,
  };
  const productVAData = {
    headingLight: "Virtual Accounts",
    headingBold: "",
    text: "Revolutionise money movement with Virtual Accounts, ensuring seamless collection of funds from individuals or businesses while enhancing operational efficiency through automated reconciliation.",
    imageSrc: "/images/products-hub/va.svg",
    altText: "Virtual Accounts",
    navigationLinkText: "Explore Now",
    navigationLink: urls.VIRTUAL_ACCOUNTS,
  };
  const productUPICollectData = {
    headingLight: "UPI Payment Gateway",
    headingBold: "",
    text: "Grow your conversion rates by leveraging UPI, the most preferred payment method in India, while elevating your customer experience with real-time payment confirmations.",
    imageSrc: "/images/products-hub/upi-collections.svg",
    altText: "UPI Payment Gateway",
    navigationLinkText: "Explore Now",
    navigationLink: urls.UPI_COLLECTIONS,
  };

  const productPaymentsData = {
    headingLight: "Recurring Payments",
    headingBold: "",
    text: "Unlock growth by automating recurring payments for your business while boosting customer retention through high success rates and an elevated customer experience.",
    imageSrc: "/images/products-hub/recurring-payments.svg",
    altText: "Recurring Payments",
    navigationLinkText: "Explore Now",
    navigationLink: urls.RECURRING_PAYMENTS,
  };

  const productPayoutsData = {
    headingLight: "Payouts",
    headingBold: "",
    text: "Transform payment disbursals for consumers and users via a range of destination payment options while enabling instant payouts to your users 24/7 at your convenience.",
    imageSrc: "/images/products-hub/payouts.svg",
    altText: "Payouts",
    navigationLinkText: "Explore Now",
    navigationLink: urls.INSTANT_PAYOUTS,
  };

  const productKYCData = {
    headingLight: "KYC & Onboarding",
    headingBold: "",
    text: "Simplify your customer onboarding journey using a compliant and scalable validation solution while boosting user retention through real-time KYC and KYB checks.",
    imageSrc: "/images/products-hub/CKYC.svg",
    altText: "KYC & Onboarding",
    navigationLinkText: "Explore Now",
    navigationLink: urls.KYC_AND_ONBOARDING,
  };

  const productLedgersData = {
    headingLight: "Ledgers",
    headingBold: "",
    text: "Streamline financial management for your business using a single, scalable platform that can help you record and reconcile data while supporting various ledger systems and custom currency options.",
    imageSrc: "/images/products-hub/ledgers.svg",
    altText: "Ledgers",
    navigationLinkText: "Explore Now",
    navigationLink: urls.LEDGERS,
  };

  const productLendingData = {
    headingLight: "Lending",
    headingBold: "",
    text: "Supercharge your lending product today through a fully packaged lending module coupled with white labelling and multiple providers while automating your lending decisions without increasing the risk.",
    imageSrc: "/images/products-hub/lending.svg",
    altText: "Lending",
    navigationLinkText: "Explore Now",
    navigationLink: urls.LENDING,
  };

  const productHyperstreamsData = {
    headingLight: "Hyperstreams",
    headingBold: "",
    text: "Build your financial products with unparalleled speed and efficiency using our pre-built sequence of APIs and SDKs, ensuring the fastest onboarding experience ever while reducing drop-offs with quicker and better verification checks.",
    imageSrc: "/images/products-hub/hyperstreams.svg",
    altText: "Hyperstreams",
    navigationLinkText: "Explore Now",
    navigationLink: urls.HYPERSTREAMS,
  };

  const productFSData = {
    headingLight: "Bytes",
    headingBold: "",
    text: "Cater to diverse financial needs through secure access to user or entity data with a single API hit while aggregating financial data instantly, combining credit reports and KYC records.",
    imageSrc: "/images/products-hub/fs.svg",
    altText: "Financial Services",
    navigationLinkText: "Explore Now",
    navigationLink: urls.FINANCIAL_SERVICES,
  };

  const productEscrowData = {
    headingLight: "Escrow Accounts",
    headingBold: "",
    text: "Carry Out Secure Transactions via InstaEscrow.",
    imageSrc: "/images/escrow-accounts/banner.svg",
    altText: "Escrow Accounts",
    navigationLinkText: "Explore Now",
    navigationLink: urls.ESCROW_ACCOUNTS,
  };

  const UIStreamsData = {
    headingLight: "UIstreams",
    headingBold: "",
    text: "Seamlessly integrate UI-based plugins for a fully-native user verification & KYC experience with UIStreams.",
    imageSrc: "/images/uistreams-static.svg",
    altText: "UIstreams",
    navigationLinkText: "Explore Now",
    navigationLink: urls.UI_STREAM,
  };

  const whyDecentroData = [
    { "Setup Fees": ["High (2K - 10K USD)", "Completely FREE"] },
    { Timelines: ["3-4 Months", "~ 2 Weeks"] },
    // { "Settlement Times": ["Atleast T-1 to T+2", "Real-time Settlements"] },
    {
      "Service Provider": [
        "High reliance on single service provider and bank",
        "Backend powered by multiple banks with switchability",
      ],
    },
    {
      "Customer Service": [
        "Turnaround time of 1-2 working days atleast",
        "Turnaround within 1-2 hours",
      ],
    },
    {
      "Scalability & Flexibility": [
        "Difficult to scale due to a rigid underlying structure",
        "Customizable APIs and seamless scalability",
      ],
    },
    {
      Advantages: [
        "",
        ["Unlimited rollover of unused API hits", "Global from The Get Go"],
      ],
    },
  ];

  const subscribeBoxText = {
    heading:
      "Wish To Get These Resources Promptly In Your Inbox? Consider It Done!",
    tagline: "Delivered Fortnightly. No Spam, Our Word!",
  };

  return (
    <React.Fragment>
      <Head>
        <title>Products - Pocket Guides & API Handbooks | Decentro</title>
        <meta
          name="description"
          content="Learn in-depth about how various banking & financial APIs can empower your business."
        />
      </Head>
      <div className={styles["resources"]}>
        <ProductBanner data={bannerData} />
        <div className={styles["resources-guide"]}>
          <Image
            src="/images/icons/flow-active.svg"
            alt="Flow"
            width={130}
            height={40}
          />
          <h2>
            White-label payments infrastructure
          </h2>
          {/* <h2>
            Pocket Guides &{" "}
            <span class={styles["highlighted-subsection-header"]}>
              API-Handbooks
            </span>
          </h2> */}
          <div className={styles["resources-guide-content"]}>
            <InlineImageAndParagraph data={productVAData} reverse={false} />
            <InlineImageAndParagraph
              data={productUPICollectData}
              reverse={true}
            />
            <InlineImageAndParagraph
              data={productPaymentsData}
              reverse={false}
            />
            <InlineImageAndParagraph data={productPayoutsData} reverse={true} />
          </div>
          <Image
            src="/images/icons/fabric-active.svg"
            alt="Fabric"
            width={130}
            height={40}
          />
          <h2>
            Banking-as-a-Service platform
          </h2>
          <div className={styles["resources-guide-content"]}>
            <InlineImageAndParagraph data={productKYCData} reverse={false} />
            <InlineImageAndParagraph data={productLedgersData} reverse={true} />
            {/* <InlineImageAndParagraph
              data={productLendingData}
              reverse={false}
            /> */}
            <InlineImageAndParagraph
              data={productHyperstreamsData}
              reverse={false}
            />
            <InlineImageAndParagraph data={productFSData} reverse={true} />
            <InlineImageAndParagraph data={productEscrowData} reverse={false} />
            <InlineImageAndParagraph data={UIStreamsData} reverse={true} />
          </div>
        </div>
        <WhyDecentroComparison data={whyDecentroData} />
        {/* <EmailRegBanner data={subscribeBoxText} /> */}
      </div>
    </React.Fragment>
  );
};

export default Products;
