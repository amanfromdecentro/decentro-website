import React from "react";
import Head from "next/head";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../../components/use-cases/use-cases";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import styles from "../../../styles/page-styles/upi-apis.module.scss";
import utmtags from "../../../utmTags";

function Upi() {
  const bannerData = {
    heading: "<span class='highlighted-heading'>UPI APIs</span>",
    tagline:
      "Set up real-time payments & collections with UPI Collect or UPI Intent Flow and create a seamless cash flow for your business. Enable instant settlements for your customers, partners, or merchants/vendors using UPI APIs",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/upi.svg",
    altText: "UPI Integration APIs for business",
    DBackground: true,
  };
  const inlineImageAndParagraphData = {
    headingLight: "UPI for",
    headingBold: " Business",
    text:
      "UPI or Unified Payments Interface is a payments system developed by the National Payments Corporation of India[NPCI] that facilitates money transfer between two bank accounts instantly and in real-time." +
      "<br/><br/>According to reports by Statista, a total of 2.8 billion digital payment transactions worth over ₹5 trillion happened over UPI in India in June 2021. With the ever-increasing rise in <a class='reference-link timeline-content-link' href='https://decentro.tech/blog/what-no-one-will-tell-you-about-upi-payment-links-payment-gateways/' target='_blank'>UPI payments</a>, hop your business on the bandwagon to provide an exceptional experience to your customers and save operational costs!" +
      "<br></br>You can facilitate payments via UPI for your customers across any application such as Google Pay, or PhonePe, or directly via UPI VPA[Virtual Payment Address]. Not just payments, there’s a lot more you can do via APIs for UPI for streamlining cashflows for your business. More on those in the coming sections!",
    imageSrc: "/images/resources/upi-apis/upi-for-business.svg",
    altText: "UPI for business",
  };

  const inlineImageAndParagraphData1 = {
    headingLight: "What is",
    headingBold: "UPI Number?",
    text:
      "NPCI has rolled out the mandate for interoperability of UPI. This includes a unified 8-10 digit number that will serve as the user’s UPI ID. If it’s a 10 digit number, the mobile number will need to be used." +
      "<br/><br/>Thus, your business can transact with customers across any app of their preference or facilitate the same for your partners or vendors using a single ID.",
    imageSrc: "/images/resources/upi-apis/what-is-upi-number.svg",
    altText: "UPI Number",
  };

  const useCasesData = {
    heading: "How Can <span>UPI Payments</span> Help Your Business",
    tagline: "",
    block1: [
      {
        heading: "Reduce Transaction Costs",
        paragraph:
          "Save on the ~2% fee for each transaction on payment gateways or PSPs. Utilize UPI’s zero Merchant Discount Rate (MDR) for your business.",
        imageSrc: "/images/resources/upi-apis/reduce-cost-icon.svg",
      },
      {
        heading: "Avoid Fund Settlement Delays",
        paragraph:
          "Enable instant fund settlements for your merchants, vendors, & customers. No more making your customers wait for 2-3 days!",
        imageSrc: "/images/resources/upi-apis/settlement-delays-icon.svg",
      },
      {
        heading: "Fully Compliant",
        paragraph:
          "End-to-end compliance with the UPI transaction flows as an RBI-certified Payment Aggregator.",
        imageSrc: "/images/icons/compliance_white.svg",
      },
      {
        heading: "Increase Payment Success Rates",
        paragraph:
          "Reduce customer drop-offs and dodge frequent payment failures via PGs or card networks. Take your overall success rates to beyond 98% with UPI",
        imageSrc: "/images/resources/upi-apis/success-rates-icon.svg",
      },
    ],
    block1extra: [],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const upiApplications1 = {
    headingLight: "Facilitate Instant Payments",
    headingBold: "",
    text: "Create white-labeled UPI IDs for your customers, merchants, & partners and initiate payouts across the country without settlement delays or beneficiary cooling periods. Issue refunds easily by reverting transactions and employ <a class='reference-link timeline-content-link' href='https://decentro.tech/blog/how-we-processed-bulk-payouts-aws-pandas-ftp-linux/' target='_blank'>Bulk Payouts</a> to settle payments in one go.",
    imageSrc:
      "/images/resources/upi-apis/facilitate-instant-payments-upi-apis.svg",
    altText:
      "Using UPI APIs, enable real-time and instant payments across India.",
    CTAButtonLink: "https://docs.decentro.tech/docs/payments-payment-link",
    CTAButtonText: "View Product Guide",
  };

  const upiApplications2 = {
    headingLight: "Streamline Collections",
    headingBold: "",
    text: "Create & share payment links with your customers via popular channels like WhatsApp with <a class='reference-link timeline-content-link' href='https://decentro.tech/blog/taking-next-step-towards-contextual-conversational-banking/' target='_blank'>conversational banking</a>. Reduce collection costs by 5X using simple plug & play UPI APIs and enable Request to Pay (R2P) on popular apps for your customers. Reconcile all transactions, even failed ones, in real-time using virtual accounts tied to each UPI ID.",
    imageSrc: "/images/resources/upi-apis/streamline-collections.svg",
    altText: " Reduce collection costs by 10X using UPI APIs.",
    maxWidth: "200px",
    CTAButtonLink: "https://docs.decentro.tech/docs/payments-collections-v3",
    CTAButtonText: "View Product Guide",
  };

  const upiApplications3 = {
    headingLight: "Set-up Intent Flows & QR Collections",
    headingBold: "",
    text: "Create UPI intent flow on your platform and provide a seamless payment experience for your customers. Enable your customers to opt for their preferred UPI app, pre-populate payments details, and complete the transaction at a go. Or, create & share static/dynamic <a class='reference-link timeline-content-link' href='https://decentro.tech/blog/why-qr-code-payments-must-have-place-in-offline-businesses/' target='_blank'>QR codes</a>, tied to UPI IDs, for offline collections.",
    imageSrc:
      "/images/resources/upi-apis/intent-flows-qr-payments-upi-apis.svg",
    altText: "Set up intent flows and enable QR payment collections.",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/collections-payments-dynamic_qr",
    CTAButtonText: "View Product Guide",
  };

  const upiApplications4 = {
    headingLight: "Enable UPI Autopay & Split Payments",
    headingBold: "",
    text: "Shed all worries related to recurring payments using <a class='reference-link timeline-content-link' href='https://decentro.tech/resources/upi-autopay-apis/' target='_blank'>UPI Autopay</a>. Enable your customers to schedule autopay on their accounts or <a class='reference-link timeline-content-link' href='https://decentro.tech/blog/interoperability-of-ppis-a-new-era-for-wallets/' target='_blank'>wallets</a> with just a click for any subscriptions. If you are a retailer or an e-commerce business, employ <a class='reference-link timeline-content-link' href='https://decentro.tech/blog/split-payments-commission-settlements-for-businesses/' target='_blank'>Split Payments APIs</a> and settle money from a single customer to multiple vendors & sellers simultaneously.",
    imageSrc: "/images/resources/upi-apis/upi-autopay-api-split-payments.svg",
    altText: "Set up UPI autopay and enable split payments for your merchants.",
    CTAButtonLink: "https://docs.decentro.tech/docs/payments-mandates-upi",
    CTAButtonText: "View Product Guide",
  };

  const upiApplications5 = {
    headingLight: "Validate UPI IDs Before Transfer",
    headingBold: "",
    text: "Verify a UPI ID or VPA before initiating payments or collection requests to a user’s account and enhance the success rates. Validate UPI APIs will help you verify an ID from NPCI’s end and fetch merchant-level details for both <a class='reference-link timeline-content-link' href='https://decentro.tech/products/business-accounts/' target='_blank'>Business</a> and Savings accounts.",
    imageSrc: "/images/resources/upi-apis/upi-apis-to-authenticate-vpa.svg",
    altText:
      "Authenticate VPA of users before transferring payments using UPI APIs.",
    maxWidth: "200px",
    CTAButtonLink:
      "https://docs.decentro.tech/reference/payments_api-collections",
    CTAButtonText: "View Product Guide",
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const howCanDecentroHelpData = {
    headingLight: "UPI Payments For Your Business ",
    headingBold: "- How Can Decentro Help",
    tagline: "",
    bulletPointsHeader: "Why Decentro’s APIs for UPI Payments?",
    bulletPoints: [
      {
        text: "White-label UPI IDs to reflect your branding with customers, partners, or vendors.",
      },
      {
        text: "Set up your payment vertical within weeks and not months. And, at 90% reduced overheads!",
      },
      {
        text: "Save on the hefty fees you otherwise have to pay payment gateways for each transaction.",
      },
      {
        text: "Leverage multi-bank architecture in the backend so that any unexpected downtimes, black swan events, or volume spikes will never affect your business adversely.",
      },
      {
        text: "Track all transaction details in a dedicated dashboard for your business. Visit ledger page with reconciled payments and peruse data.",
      },
      {
        text: "Leverage Conversational Banking & social payments via any messaging platform(such as WhatsApp) to onboard users via KYC & CKYC in real-time, request payments and disburse.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link:
          "https://docs.decentro.tech/docs/payments-collections" +
          encodeURI(utmtags.DEVELOPER_DOCS_UPI_API_BTN),
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Real-time Payments. 5X Reduced Collection Costs. UPI APIs For Your Business<br/><span>Sign-up Today, Go Live Tomorrow!</span>",
    ctaButtonText: "Get Started",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const tableOfContentsData = [
    { text: "UPI For Business", id: "upiForBusiness" },
    { text: "How Can UPI Payments Help Your Business", id: "upiPaymentsHelp" },
    { text: "How Can You Leverage UPI APIs", id: "upiPaymentsAPIs" },
    { text: "Why Decentro’s APIs for UPI Payments", id: "howCanDecentroHelp" },
  ];

  const recommendedPagesData = [
    {
      title: "UPI AutoPay",
      description:
        "Get recurring E-Mandate enabled on your platform via UPI for payments such as bills, EMIs, OTT subscriptions, insurance, mutual funds, and others.",
      pageLink: "/resources/upi-autopay-apis/",
      imageSrc: "/images/resources/upi-autopay.svg",
    },
    {
      title: "GST",
      description:
        "Enrich & augment your data for vendor financing, bill discounting, and more seamlessly while serving your SME customers and partners using our GST APIs.",
      pageLink: "/resources/goods-and-services-tax-gst-api/",
      imageSrc: "/images/resources/gst.svg",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          UPI Payment APIs | UPI Integration APIs For Business | Decentro
        </title>
        <link rel="canonical" href="https://decentro.tech/resources/upi-apis" />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/upi-apis"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Make payments & collections simple for your business using UPI APIs. With Decentro’s APIs, integrate UPI into your payments stack within weeks!"
        />
        <meta name="keywords" content="UPI APIs" />
        <meta
          property="og:title"
          content="UPI Payment APIs | UPI Integration APIs For Business | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["upi-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["upi-details"]}>
          <InlineImageAndParagraph
            id="upiForBusiness"
            data={inlineImageAndParagraphData}
          />
        </div>
        <UseCases id="upiPaymentsHelp" data={useCasesData} />
        <div className={styles["upi-apis-applications"]} id="upiPaymentsAPIs">
          <h2>
            How Can You Leverage <span>UPI APIs</span>
          </h2>
          <p>
            Set up a sturdy payments stack for your business using Decentro’s
            APIs for UPI. Facilitate collections, enable instant payments,
            authenticate VPAs, provide QR payments, and more! Let’s dig deep!
          </p>
          <div className={styles["upi-apis-applications-content"]}>
            <InlineImageAndParagraph
              zoom={true}
              data={upiApplications1}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={upiApplications2}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={upiApplications3}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={upiApplications4}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={upiApplications5}
              reverse={false}
              boldBlack
            />
          </div>
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={howCanDecentroHelpData}
        />
        <div className={styles["special-info-section"]}>
          <div className={styles["special-info-wrapper"]}>
            <h2>
              Did You <span>Know?</span>
            </h2>
            <p className={styles["special-info-description"]}>
              NPCI has rolled out the mandate for interoperability of UPI. This
              includes a unified 8-10 digit number that will serve as the user’s
              UPI ID. If it’s a 10 digit number, the mobile number will need to
              be used. <br />
              Thus, your business can transact with customers across any app of
              their preference or facilitate the same for your partners or
              vendors using a single ID.
            </p>
          </div>
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </React.Fragment>
  );
}

export default Upi;
