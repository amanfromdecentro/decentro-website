import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../../../sgRequests";
// Animations
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import useGraphics from "../../../../utilities/custom-hooks/useGraphics";

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
import styles from "../../../../styles/page-styles-sg/instant-payouts.module.scss";
import { clientLogos } from "../../../../components-sg/client-logos";

const InstantPayouts = () => {
  const controls = useAnimation();
  const animationURL =
    "https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/3.+SEA+Maps+Send+to+Final.json";
  const { data, loading, error } = useGraphics(animationURL);

  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Faster <span class='highlighted-heading'>global payouts</span>, made  <span class='highlighted-heading'>local</span>",
    subHeading: "",
    tagline:
      "Make faster, more cost-effective automated payouts across the globe.",
    buttonText: "Get Started Today",
    newTab: false,
    buttonLink: requests.SIGNUP,

    imageSrc: requests.ASSETS_BASE_URL_S3 + "/payouts-video.mp4",
    altText: "Faster global payouts, made local",
    titleText: "Global payouts",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/payouts/banner-bg.svg",
  };

  const buildFintechFutureData = {
    heading:
      "Make <span class='highlighted-subsection-header'>Global Payouts</span> in <span class='highlighted-subsection-header'>190+ countries</span>",
    tagline: "",
    items: [
      {
        imageSrc: "/images/icons/low-costs.svg",
        title: "Automated Reconciliation",
        description:
          "Reduce manual operational efforts of reconciliation of funds by automating processes.",
      },
      {
        imageSrc: "/images/icons/faster-goto-market.svg",
        title: "Faster Go-to-Market",
        description:
          "Disburse from your platform or our dashboard across multiple bank partners with a single integration.",
      },
      {
        imageSrc: "/images/icons/save-limitlessly.svg",
        title: "Save Limitlessly",
        description:
          "Cut down on your expenditure towards integrating and maintaining heavy integrations across multiple partners.",
      },
      {
        imageSrc: "/images/icons/scale-quickly.svg",
        title: "Scale Quickly",
        description:
          "Focus on growing your business by 10X while we do the end work of maintaining integrations.",
      },
      {
        imageSrc: "/images/icons/invest.svg",
        title: "High Volume",
        description:
          "Stop worrying about transaction volumes, and let us handle this for you across multiple bank partners.",
      },
      {
        imageSrc: "/images/icons/optimized-experience.svg",
        title: "Optimized Experience",
        description:
          "Focus on elevating the customer journey via our optimized payout experience for better conversions.",
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
        imageSrc: "/images/icons/marketplace-global.svg",
        title: "Marketplace",
        description:
          "Leverage auto-credit capabilities with the merchant/vendor to reduce any manual reconciliation.",
      },
      {
        imageSrc: "/images/icons/nbfc-lenders-global.svg",
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
        title: "Generate Payment Links",
        description:
          "Create Payment links via Decentro’s APIs to streamline and fast-forward payment collection",
      },
      {
        title: "Auto Reconciliation",
        description:
          "Reduce manual reconciliation of debits by providing callbacks when a transaction is performed",
      },
      {
        title: "Embed Payment Links",
        description:
          "Enable your customers to generate payment links from their dashboards by simply building payment links into your product",
      },
    ],
    contentSectionTitle: "Powerful list of <br/><span>Whys</span>",
    contentSectionDescription:
      "End-to-end global money movement for businesses",
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
    ctaButtonLink: requests.DOC_SG_PAYOUTS,
    newTab: true,
  };

  return (
    <div className={styles["enach-container"]}>
      <Head>
        <title>Send Instant Payouts to Anyone, Anytime | Decentro</title>
        <link
          rel="canonical"
          href="https://decentro.tech/global/products/instant-payouts"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/global/products/instant-payouts"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Send instant payouts globally to anyone, 24x7. Stop worrying about transaction volumes and achieve faster GTM with Decentro's Global Payouts API. Get started today."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Send Instant Payouts to Anyone, Anytime | Decentro"
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

        {/* Displaying animation only when all three are truthy. */}
        {data && !loading && !error && (
          <div className={styles["lottie-animation-container"]}>
            <h2>
              Expand Your{" "}
              <span className="header-section-highlighted">
                Global Footprint
              </span>
            </h2>
            <motion.div
              animate={controls}
              initial="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 500 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Lottie animationData={data} />
            </motion.div>
          </div>
        )}
        <TestimonialsCarousel />
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
    </div>
  );
};

export default InstantPayouts;
