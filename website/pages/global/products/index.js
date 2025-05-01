import React from "react";
import Head from "next/head";
import requests from "../../../sgRequests";
import ProductBanner from "../../../components-sg/product-banner/product-banner";
import InlineImageAndParagraph from "../../../components-sg/inline-image-and-paragraph/inline-image-and-paragraph";
import styles from "../../../styles/page-styles/resources.module.scss";
import WhyDecentroComparison from "../../../components-sg/why-decentro-comparison/why-decentro-comparison";
import EmailRegBanner from "../../../components-sg/email-reg-banner/email-reg-banner";
import Image from "next/image";

const Products = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>Products</span>",
    tagline:
      "Learn how Decentro's Flow and Fabric modules can supercharge payments and banking for you, helping you launch your next financial product <span>10X faster.</span>",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/sg/product-header-sg.png",
    altText: "Products",
    titleText: "Products",
    video: false,
    DBackground: true,
    // bannerBgPresent: true,
    // bannerBgImageSrc: "/images/validate-id/banner-bg.svg",
  };
  const productVAData = {
    headingLight: "",
    headingBold: "Global Payment Collection",
    text: "Generate branded QR codes to accept payments via FAST, PayNow or direct transfer.",
    imageSrc: "/images/sg/global-payment-collection.png",
    altText: "Global Payment Collection",
    navigationLinkText: "Explore Now",
    navigationLink: "/global/products/global-payment-collection",
  };
  const productUPICollectData = {
    headingLight: "",
    headingBold: "Global Payouts",
    text: "Disburse payments to consumers and users directly from your dashboard via your choice of method.",
    imageSrc: "/images/sg/global-payouts.png",
    altText: "Global Payouts",
    navigationLinkText: "Explore Now",
    navigationLink: "/global/products/instant-payouts",
  };

  const productPaymentsData = {
    headingLight: "",
    headingBold: "Ledgers",
    text: "A single and scalable system of record for all transactions and balances on your platform.",
    imageSrc: "/images/sg/ledgers.png",
    altText: "Ledgers",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/upi-apis/",
  };

  const productPayoutsData = {
    headingLight: "",
    headingBold: "Multi Currency Accounts",
    text: "Easily transact, hold, and reconcile in multiple currencies, all within one account.",
    imageSrc: "/images/sg/multi-currency-accounts.png",
    altText: "Multi Currency Accounts",
    navigationLinkText: "Explore Now",
    navigationLink: "/global/products/multi-currency-accounts",
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
        <link
          rel="alternate"
          href="https://decentro.tech/global"
          hreflang="x-default"
        />
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
            {/* {props.data.subheading} */}
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
          {/* <h2>
            Pocket Guides &{" "}
            <span class={styles["highlighted-subsection-header"]}>
              API-Handbooks
            </span>
          </h2> */}
          {/* <div className={styles["resources-guide-content"]}>
            <InlineImageAndParagraph data={productKYCData} reverse={false} />
            <InlineImageAndParagraph data={productLedgersData} reverse={true} />
            <InlineImageAndParagraph
              data={productLendingData}
              reverse={false}
            />
            <InlineImageAndParagraph
              data={productHyperstreamsData}
              reverse={true}
            />
            <InlineImageAndParagraph data={productFSData} reverse={false} />
          </div> */}
        </div>
        <WhyDecentroComparison data={whyDecentroData} />
        {/* <EmailRegBanner data={subscribeBoxText} /> */}
      </div>
    </React.Fragment>
  );
};

export default Products;
