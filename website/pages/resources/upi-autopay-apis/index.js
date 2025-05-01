import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/upi-autopay-apis.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../../components/use-cases/use-cases";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import utmtags from "../../../utmTags";
import DescriptiveItemListFour from "../../../components/descriptive-item-list-four/descriptive-item-list-four";
import HeadingAndItems from "../../../components/heading-and-items/heading-and-items";

const UpiAutopay = () => {
  const seo = {
    title: "UPI Autopay | Recurring Payments API Integration | Decentro",
    canonical: "https://decentro.tech/resources/upi-autopay-apis",
    alternate: "https://decentro.tech/resources/upi-autopay-apis",
    description: "Enable automated recurring payments with UPI Autopay by Decentro. Simplify subscriptions and recurring billing for your business. Get started today.",
    keywords: "UPI Autopay APIs",
    ogTitle: "UPI Autopay | Recurring Payments API Integration | Decentro",
    ogImg: "/images/resources/upi-autopay.svg"
  }
  // 1
  const productBanner = {
    heading: "<span class='highlighted-heading'>UPI Autopay</span>",
    tagline:
      "Enable seamless recurring payments on your platform with UPI Autopay for bills, EMIs, OTT subscriptions, insurance, mutual funds, and more.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/upi-autopay.svg",
    altText: "UPI Autopay APIs for business",
    DBackground: true,
  };
  // 2
  const tableOfContents = [
    { text: "What is UPI Autopay?", id: "upiAutopayForBusiness" },
    { text: "What is UPI Autopay Intent Flow?", id: "upiAutoPayIntentFlow" },
    { text: "Key Features", id: "KeyFeatures" },
    { text: "Leveraging UPI Autopay APIs", id: "upiAutopayLeveraging" },
    { text: "Why Decentro’s APIs for UPI Autopay?", id: "howCanDecentroHelp" },
  ];
  // 3
  const inlineImageAndParagraph = {
    headingLight: "What is",
    headingBold: "UPI Autopay?",
    text:
      "The UPI Autopay is a landmark initiative by NPCI that allows users to use their bank accounts to transfer funds to merchants on a recurring basis. It is an easy-to-use, secure, and reliable solution to collect all your recurring payments. UPI AutoPay or UPI Mandates allows merchants to set up a recurring monthly/weekly/daily/on-demand payment to be debited from customers via UPI mode." +
      "<br/><br/>This helps the merchants reduce their follow-up time with customers, and increase the conversion rate of paid customers with zero manual efforts. This benefits both, the customers and the merchants simultaneously." +
      "<br></br>With a recurring payment facility, the NPCI aims to provide a more convenient way for customers to pay for things that they use every month or on a routine basis and merchants get ensured about the credit of this payment into their accounts on a timely basis.",
    imageSrc: "/images/resources/upi-autopay/what-is-upi-autopay.svg",
    altText: "What is Upi Autopay?",
  };
  // 4
  const inlineImageAndParagraph2 = {
    headingLight: "Decentro’s ",
    headingBold: "UPI AutoPay Suite",
    subheading: "Mandate Registration Flows Powered by Decentro",
    text:
      "Decentro supports three types of mandate registration flows to offer seamless, user-friendly automation:",
    bulletPoints: [
      {
        title: "Intent Flow with Mandate Links",
        points: [
          "Decentro generates dynamic deep links and common links that redirect the payer to their UPI app.",
          "After mandate registration (or failure), the payer is redirected to the platform’s app."
        ]
      },
      {
        title: "Intent Flow with QR",
        points: [
          "Decentro generates a dynamic QR code that can be displayed on an app or website.",
          "The payer scans the QR, selects their UPI app, and registers the mandate seamlessly."
        ]
      },
      {
        title: "Collect Flow",
        points: [
          "The payer enters their VPA (UPI ID) where they want the mandate to be registered.",
          "They navigate to their UPI app, authorize the request, and enter their UPI PIN."
        ]
      }
    ],
    imageSrc: "/images/resources/upi-autopay/upi-api-suite.svg",
    altText: "UPI Autopay Intent Flow",
  };
  // 5
  const headingAndItems = {
    headingBold: "Methodology",
    headingLight: "",
    imageSrc: "", // Default fallback image
    altText: "",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/ckyc/elevate.svg",
        title: "High Drop-Off Rates",
        description:
          "Manual payment collection leads to missed deadlines and revenue loss.",
      },
      {
        imageSrc: "/images/resources/ckyc/complex-payments.svg",
        title: "Complex Infrastructure",
        description:
          "Businesses struggle with managing multiple integrations and compliance.",
      },
      {
        imageSrc: "/images/resources/ckyc/scalability.svg",
        title: "Scalability Challenges",
        description:
          "Growing transaction volumes require a reliable and automated collection system.",
      },
      {
        imageSrc: "/images/resources/ckyc/experience.svg",
        title: "Customer  Experience",
        description:
          "Users demand hassle-free, automated payment setups without repeated approvals.",
      },
    ],
  }
  // 6
  const textAndButtonBannerTransparent = {
    text: "",
    ctaButtonText: "View Product Guide",
    newTab: true,
    ctaButtonLink: "https://docs.decentro.tech/docs/payments-mandates-upi",
  };
  // 7
  const descriptiveItemListFour = {
    heading:
      "The need for <span class='highlighted-subsection-header'>UPI Autopay</span>",
    items: [
      {
        imageSrc: "/images/resources/ckyc/elevate.svg",
        title: "High <br/>Drop-Off Rates",
        description:
          "Manual payment collection leads to missed deadlines and revenue loss.",
      },
      {
        imageSrc: "/images/resources/ckyc/complex-payments.svg",
        title: "Complex <br/>Payment Infrastructure",
        description:
          "Businesses struggle with managing multiple integrations and compliance.",
      },
      {
        imageSrc: "/images/resources/ckyc/scalability.svg",
        title: "Scalability <br/>Challenges",
        description:
          "Growing transaction volumes require a reliable and automated collection system.",
      },
      {
        imageSrc: "/images/resources/ckyc/experience.svg",
        title: "Customer  <br/>Experience",
        description:
          "Users demand hassle-free, automated payment setups without repeated approvals.",
      },
    ],
  };
  // 8
  const useCases = {
    headingLight: "Key",
    headingBold: "Features",
    tagline: "Get recurring payments enabled on your platform via UPI Autopay",
    block1: [
      {
        heading: "Custom UPI Handles<br/>for Payees",
        paragraph:
          "Let users deposit recurring funds using your customized UPI handle.",
        imageSrc: "/images/resources/upi-autopay/custom-upi-handle.svg",
      },
      {
        heading: "Flexible<br/>Debits",
        paragraph:
          "Set e-Mandates for payment collection at regular/on-demand intervals.",
        imageSrc: "/images/resources/upi-autopay/flexible-debits.svg",
      },
      {
        heading: "Recurring<br/>Payments",
        paragraph:
          "Schedule the automatic payment of all monthly bills to simplify the process.",
        imageSrc: "/images/resources/upi-autopay/recurring-payments.svg",
      },
    ],
    block1extra: [
      {
        heading: "One-Time<br/>Authentication",
        paragraph:
          "Automated Payments require a one-time UPI PIN for authentication purposes.",
        imageSrc: "/images/resources/upi-autopay/authentication.svg",
      },
      {
        heading: "Pre-Debit<br/>Notification",
        paragraph:
          "The user is notified of any upcoming debit transactiont, helping in an improved success rate.",
        imageSrc: "/images/resources/upi-autopay/pre-debit-notification.svg",
      },
      {
        heading: "Real-time<br/>Updates",
        paragraph:
          "Get instant payment-related reports and insights directly on your dashboard.",
        imageSrc: "/images/resources/upi-autopay/real-time-updates.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };
  // 9
  const textAndButtonBannerTransparent2 = {
    text: "",
    ctaButtonText: "View Product Guide",
    newTab: true,
    ctaButtonLink: "https://docs.decentro.tech/docs/payments-mandates-upi",
  };
  const adjacentData = {
    heading: {
      light: "How Can Your Business Leverage",
      bold: "UPI Autopay APIs"
    },
    data: [
      {
        headingLight: "Digital Subscriptions",
        headingBold: "",
        text: "Digital content providers can now automate recurring payments for their customers and charge them using UPI Autopay on a weekly/monthly/on-demand.",
        imageSrc: "/images/resources/upi-autopay/subscription.svg",
        altText: "Digital Subscriptions",
      },
      {
        headingLight: "Insurance Premiums",
        headingBold: "",
        text: "UPI Autopay comes very useful in debiting monthly/yearly premiums for health, automobile, house, etc, from the party.",
        imageSrc: "/images/resources/upi-autopay/premium.svg",
        altText: "Insurance Premiums",
      },
      {
        headingLight: "Savings Journey",
        headingBold: "",
        text: "Let users contribute towards their monthly saving goals by helping them set up an Auto-debit plan that transfers money to your VA.",
        imageSrc: "/images/resources/upi-autopay/savings.svg",
        altText: "Savings Journey",
      },
      {
        headingLight: "Investment Plans",
        headingBold: "",
        text: "Merchants can now charge for all the monthly installments by setting a one-time e-Mandate that the customer approves via one-time authentication.",
        imageSrc: "/images/resources/upi-autopay/investments.svg",
        altText: "Investment Plans",
      },
      {
        headingLight: "Monthly Donations",
        headingBold: "",
        text: "Struggling to convert one-time donations to continuous monthly donations? UPI Autopay can be the next breakthrough. Create e-mandates that auto-debits from donors’ accounts every month.",
        imageSrc: "/images/resources/upi-autopay/donation.svg",
        altText: "Monthly Donations",
      },
      {
        headingLight: "Recurring EMIs",
        headingBold: "",
        text: "Banks & other lenders can set monthly EMI auto-debits from the user’s account toward loans or other services.",
        imageSrc: "/images/resources/upi-autopay/emi.svg",
        altText: "Recurring EMIs",
      }
    ]
  }
  const headingForCross = {
    light: "How Can Your Business Leverage",
    bold: "UPI Autopay APIs"
  }
  // 10
  const inlineImageAndParagraph3 = {
    headingLight: "Digital Subscriptions",
    headingBold: "",
    text: "Digital content providers can now automate recurring payments for their customers and charge them using UPI Autopay on a weekly/monthly/on-demand.",
    imageSrc: "/images/resources/upi-autopay/subscription.svg",
    altText: "Digital Subscriptions",
  };
  // 11
  const inlineImageAndParagraph4 = {
    headingLight: "Insurance Premiums",
    headingBold: "",
    text: "UPI Autopay comes very useful in debiting monthly/yearly premiums for health, automobile, house, etc, from the party.",
    imageSrc: "/images/resources/upi-autopay/premium.svg",
    altText: "Insurance Premiums",
  };
  // 12
  const inlineImageAndParagraph5 = {
    headingLight: "Savings Journey",
    headingBold: "",
    text: "Let users contribute towards their monthly saving goals by helping them set up an Auto-debit plan that transfers money to your VA.",
    imageSrc: "/images/resources/upi-autopay/savings.svg",
    altText: "Savings Journey",
  };
  // 13
  const inlineImageAndParagraph6 = {
    headingLight: "Investment Plans",
    headingBold: "",
    text: "Merchants can now charge for all the monthly installments by setting a one-time e-Mandate that the customer approves via one-time authentication.",
    imageSrc: "/images/resources/upi-autopay/investments.svg",
    altText: "Investment Plans",
  };
  // 14
  const inlineImageAndParagraph7 = {
    headingLight: "Monthly Donations",
    headingBold: "",
    text: "Struggling to convert one-time donations to continuous monthly donations? UPI Autopay can be the next breakthrough. Create e-mandates that auto-debits from donors’ accounts every month.",
    imageSrc: "/images/resources/upi-autopay/donation.svg",
    altText: "Monthly Donations",
  };
  // 15
  const inlineImageAndParagraph8 = {
    headingLight: "Recurring EMIs",
    headingBold: "",
    text: "Banks & other lenders can set monthly EMI auto-debits from the user’s account toward loans or other services.",
    imageSrc: "/images/resources/upi-autopay/emi.svg",
    altText: "Recurring EMIs",
  };
  // 16
  const textAndButtonBannerTransparent3 = {
    text: "<br/><span>Got Questions?</span>",
    ctaButtonText: "Talk to Our Experts Now!",
    ctaButtonLink: requests.SIGNUP,
  };
  // 17
  const bulletPointsAndTextBlock = {
    headingLight: "UPI Autopay for Business ",
    headingBold: "- How Can Decentro Help",
    tagline: "",
    bulletPointsHeader: "Why Decentro’s APIs for UPI Autopay?",
    bulletPoints: [
      {
        text: "Fully compliant UPI transaction flows as an RBI-certified payment aggregator.",
      },
      {
        text: "Fully flexible API-based flow for registration and presentation.",
      },
      {
        text: "The client can have their own UPI handles and even send pre-debit notifications.",
      },
      {
        text: "Fully API-based flow compared to SDK flows provided by other players.",
      },
      {
        text: "Callbacks for registration as well as debits and credits into the mapped VA.",
      },
      { text: "Sub-merchant onboarding for all clients on their own handles." },
      {
        text: "Unlimited rollover of unused API hits with Multiple banking partners.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link:
          "https://docs.decentro.tech/docs/payments-mandates" +
          encodeURI(utmtags.DEVELOPER_DOCS_UPI_AUTOPAY_API_BTN),
      },
    ],
  };
  // 18
  const textAndButtonBannerTransparent4 = {
    text: "Real-time Payments. 5X Reduced Collection Costs. UPI APIs For Your Business<br/><span>Sign-up Today, Go Live Tomorrow!</span>",
    ctaButtonText: "Get Started",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };
  // 19
  const recommendedPages = [
    {
      title: "CKYC",
      description:
        "Learn the essentials of Central KYC, or CKYC, and find out how your business can leverage CKYC APIs for financial simplicity, better customer experience, and robust workflows.",
      pageLink: "/resources/ckyc-apis",
      imageSrc: "/images/resources/ckyc.svg",
    },
    {
      title: "GST",
      description:
        "Enrich & augment your data for vendor financing, bill discounting, and more seamlessly while serving your SME customers and partners using our GST APIs.",
      pageLink: "/resources/goods-and-services-tax-gst-api",
      imageSrc: "/images/resources/gst.svg",
    },
  ];

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Replace '/api/data' with the correct endpoint for your JSON Server
    fetch("http://localhost:3001/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // setApiData(data);
        console.log("data>>", data)
      })
      .catch((error) => console.error("Error fetching API data:", error));
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{seo.title}</title>
        <link
          rel="canonical"
          href={seo.canonical}
        />
        <link
          rel="alternate"
          href={seo.alternate}
          hreflang="en-IN"
        />
        <meta
          name="description"
          content={seo.description}
        />
        <meta name="keywords" content={seo.keywords} />
        <meta
          property="og:title"
          content={seo.ogTitle}
        />
        <meta property="og:image" content={seo.ogImg} />
      </Head>
      <div className={styles["upi-autopay-apis"]}>
        <ProductBanner data={productBanner} />
        <TableOfContents data={tableOfContents} />
        <InlineImageAndParagraph
          id="upiAutopayForBusiness"
          data={inlineImageAndParagraph}
          reverse={false}
        />
        <InlineImageAndParagraph
          id="upiAutoPayIntentFlow"
          data={inlineImageAndParagraph2}
          reverse={true}
        />
        {/* 5 */}
        <HeadingAndItems data={headingAndItems} />

        <TextAndButtonBannerTransparent data={textAndButtonBannerTransparent} />
        <DescriptiveItemListFour data={descriptiveItemListFour} />
        <UseCases id="KeyFeatures" data={useCases} />
        <TextAndButtonBannerTransparent data={textAndButtonBannerTransparent2} />
        <div
          className={styles["upi-autopay-apis-applications"]}
          id="upiAutopayLeveraging"
        >
          <h2>
            {adjacentData.heading.light} <span>{adjacentData.heading.bold}</span>
          </h2>
          <div className={styles["upi-autopay-apis-applications-content"]}>
            {adjacentData.data.map((each, index) => (
              <InlineImageAndParagraph
                key={index}
                zoom={true}
                data={each}
                reverse={index % 2 === 1}
                boldBlack
              />
            ))}

            {/* <InlineImageAndParagraph
              zoom={true}
              data={inlineImageAndParagraph3}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={inlineImageAndParagraph4}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={inlineImageAndParagraph5}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={inlineImageAndParagraph6}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={inlineImageAndParagraph7}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={inlineImageAndParagraph8}
              reverse={true}
              boldBlack
            /> */}
          </div>
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerTransparent3} />
        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={bulletPointsAndTextBlock}
        />
        <TextAndButtonBannerTransparent data={textAndButtonBannerTransparent4} />
        <RecommendedPages data={recommendedPages} />
      </div>
    </React.Fragment>
  );
};

export default UpiAutopay;
