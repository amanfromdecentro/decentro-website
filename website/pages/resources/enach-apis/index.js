import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/enach-apis.module.scss";
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

const Enach = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>e-NACH</span>",
    tagline:
      "A digital mandate platform built by NPCI simplifies high-value and larger-volume recurring online transactions like EMIs, payables, premiums, etc.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/enach.svg",
    altText: "e-NACH for Business",
    DBackground: true,
  };

  const inlineImageAndParagraphData = {
    headingLight: "What is",
    headingBold: "e-NACH?",
    text:
      "e-NACH (electronic National Automated Clearing House) process is an e-mandate facility built on top of the NACH platform built and maintained by NPCI. It can help businesses such as banks, NBFCs, telecom operators, insurance companies, and other corporate entities to ensure recurring collection of funds belonging to their customers who opt for the direct debit type of payments." +
      "<br/><br/>The primary underlying objective of e-Nach is to help businesses reduce the follow-up time for recurring transactions, etc. e-NACH comes with a one-time authorization of the mandate, and posts that recurring payments are automatically debited from customers’ accounts. You can even save yourself from the hassle of manually scheduling your premium payments at the start of the applicable period." +
      "<br></br>The process is routed so that, after a customer approves the mandate via Debit Card or Netbanking, the mandate moves from the corporate to the sponsor bank and then to the destination bank by including the customer's specific attributes.",
    imageSrc: "/images/resources/enach/what-is-enach.svg",
    altText: "What is Upi Autopay?",
    CTAButtonLink: "https://docs.decentro.tech/reference/payments_api-enach",
    CTAButtonText: "View Product Guide",
  };

  const useCasesData = {
    headingLight: "Key",
    headingBold: "Features",
    tagline: "Get e-NACH recurring payment mode enabled on your platform",
    block1: [
      {
        heading: "Mandate<br/>Registration",
        paragraph:
          "Lets users register mandates digitally, ultimately reducing the TAT",
        imageSrc: "/images/resources/enach/mandate-registration.svg",
      },
      {
        heading: "Auto<br/>Debit",
        paragraph:
          "Schedule automatic payment of all recurring dues to simplify the process",
        imageSrc: "/images/resources/enach/auto-debit.svg",
      },
      {
        heading: "Single Time<br/>Authentication",
        paragraph:
          "Automated Payments require a one-time authentication via Netbanking or Debit card",
        imageSrc: "/images/resources/enach/single-time-authentication.svg",
      },
    ],
    block1extra: [
      {
        heading: "Auto<br/>Reconciliation",
        paragraph:
          "Our Virtual Account Stack help to reduce manual reconciliation of debits",
        imageSrc: "/images/resources/enach/auto-reconciliation.svg",
      },
      {
        heading: "Cost<br/>Reduction",
        paragraph:
          "Reduce variable costs spent during follow-ups, invoicing, operations, etc",
        imageSrc: "/images/resources/enach/cost-reduction.svg",
      },
      {
        heading: "Complete <br/>Visibility",
        paragraph:
          "Get insights into your recurring payments and transactions with our self-serve dashboard.",
        imageSrc: "/images/icons/visibility_white.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const tableOfContentsData = [
    { text: "What is e-Nach?", id: "whatIsEnach" },
    { text: "Key Features", id: "KeyFeatures" },
    { text: "Leveraging e-Nach APIs", id: "enachLeverage" },
    { text: "Why Decentro APIs?", id: "howCanDecentroHelp" },
  ];

  const eNachApplications1 = {
    headingLight: "EMIs",
    headingBold: "",
    text: "Fintechs or Marketplaces can set monthly EMI auto-debits from the user’s account toward loans or other services.",
    imageSrc: "/images/resources/enach/emis.svg",
    altText: "EMIs",
  };

  const eNachApplications2 = {
    headingLight: "Insurance Premiums",
    headingBold: "",
    text: "e-NACH is useful in helping merchants with Debitting monthly/yearly insurance premiums for life, health, automobile, house, etc from their customers.",
    imageSrc: "/images/resources/enach/insurance-premiums.svg",
    altText: "Insurance Premiums",
  };
  const eNachApplications3 = {
    headingLight: "Merchant Collections",
    headingBold: "",
    text: "Vendors can now automate payment collection towards the recurring services they provide to their clients on the go.",
    imageSrc: "/images/resources/enach/merchant-collections.svg",
    altText: "Merchant Collections",
  };
  const eNachApplications4 = {
    headingLight: "Investment Plans",
    headingBold: "",
    text: "Merchants can charge for all the monthly installments by setting an e-Mandate that the customer approves.",
    imageSrc: "/images/resources/enach/investment-plans.svg",
    altText: "Investment Plans",
  };

  const eNachApplications5 = {
    headingLight: "Corporate Allowances",
    headingBold: "",
    text: "Corporate payouts can be processed with ease now. These include Dividends, bonuses, salaries, and other payouts that might come across.",
    imageSrc: "/images/resources/enach/corporate-allowances.svg",
    altText: "Corporate Allowances",
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const howCanDecentroHelpData = {
    headingLight: "e-NACH for Business ",
    headingBold: "- How Can Decentro Help",
    tagline: "",
    bulletPointsHeader: "Why Decentro’s APIs for e-NACH?",
    bulletPoints: [
      {
        text: "Fully compliant eNACH transaction flows as an RBI-certified payment aggregator.",
      },
      {
        text: "Enables recurring payments up to 10L INR with assured acceptance.",
      },
      {
        text: "Fully flexible API-based flow for registration and presentation.",
      },
      {
        text: "Debited funds flow into virtual accounts helping in faster reconciliation.",
      },
      { text: "Fully API-based flow allowing you to control the experience." },
      {
        text: "Callbacks for registration as well as presentation for all scenarios.",
      },
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
          encodeURI(utmtags.DEVELOPER_DOCS_ENACH_BTN),
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Real-time Payments. 5X Reduced Collection Costs. eNach APIs For Your Business<br/><span>Sign-up Today, Go Live Tomorrow!</span>",
    ctaButtonText: "Get Started",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const recommendedPagesData = [
    {
      title: "CKYC",
      description:
        "Learn the essentials of Central KYC, or CKYC, and find out how your business can leverage CKYC APIs for financial simplicity, better customer experience, and better workflows.",
      pageLink: "/resources/ckyc-apis/",
      imageSrc: "/images/resources/ckyc.svg",
    },
    {
      title: "GST",
      description:
        "Enrich & augment your data for vendor financing, bill discounting, and more seamlessly while serving your SME customers and partners using our GST APIs.",
      pageLink: "/resources/goods-and-services-tax-gst-api/",
      imageSrc: "/images/resources/gst.svg",
    },
  ];

  const accordionData = [
    {
      query: "What is an e-mandate?",
      solution:
        "An e-mandate is an electronic version of a mandate, a standing instruction (SI) given to a bank or NBFC to periodically debit a fixed amount from the account of the customer authorizing the mandate.",
    },
    {
      query: "What are the use cases of e-mandate?",
      solution:
        "e-mandates are helpful tools for recurring and one-time payments and are used for various reasons. Recurring payments for OTT subscriptions, utility bills, loan EMIs, insurance premiums, mutual fund investments, and subscriptions to gaming platforms all involve e-mandates in some form.",
    },
    {
      query: "How is eNACH different from e-mandate?",
      solution:
        "eNACH is the infrastructure on which recurring payments occur. e-mandates, on the other hand, are the instructions that govern these recurring payments.",
    },
    {
      query: "Advantages of eNACH e-mandate",
      solution:
        "eNACH e-mandates offer several advantages for both customers and businesses:",
      bulletPoints: [
        { text: "Seamless Payments" },
        { text: "Strong Audit Trail" },
        { text: "Simple & Easy-to-use" },
        { text: "Cost-effective Payment Automation" },
        { text: "Convenient Digital Workflows" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>eNACH APIs | What is eNACH | eNACH Mandates</title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/enach-apis"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/enach-apis"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Simplify high-value and larger-volume recurring online transactions with e-NACH, a digital mandate platform built by NPCI. Explore key features and APIs now."
        />
        <meta name="keywords" content=" eNACH APIs" />
        <meta
          property="og:title"
          content="eNACH APIs | What is eNACH | eNACH Mandates"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script defer type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an e-mandate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An e-mandate is an electronic version of a mandate, a standing instruction (SI) given to a bank or NBFC to periodically debit a fixed amount from the account of the customer authorizing the mandate.",
                },
              },
              {
                "@type": "Question",
                name: "What are the use cases of e-mandate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "e-mandates are helpful tools for recurring and one-time payments and are used for various reasons. Recurring payments for OTT subscriptions, utility bills, loan EMIs, insurance premiums, mutual fund investments, and subscriptions to gaming platforms all involve e-mandates in some form.",
                },
              },
              {
                "@type": "Question",
                name: "How is eNACH different from e-mandate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "eNACH is the infrastructure on which recurring payments occur. e-mandates, on the other hand, are the instructions that govern these recurring payments.",
                },
              },
              {
                "@type": "Question",
                name: "Advantages of eNACH e-mandate",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "eNACH e-mandates offer several advantages for both customers and businesses: Seamless Payments, Strong Audit Trail, Simple & Easy-to-use, Cost-effective Payment Automation, Convenient Digital Workflows",
                },
              },
            ],
          })}
        </script>
      </Head>
      <div className={styles["enach-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["enach-details"]}>
          <InlineImageAndParagraph
            id="whatIsEnach"
            data={inlineImageAndParagraphData}
          />
        </div>
        <UseCases id="KeyFeatures" data={useCasesData} />
        <div className={styles["enach-apis-applications"]} id="enachLeverage">
          <h2>
            How Can Your Business Leverage <span>e-NACH APIs</span>
          </h2>
          <div className={styles["enach-apis-applications-content"]}>
            <InlineImageAndParagraph
              zoom={true}
              data={eNachApplications1}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={eNachApplications2}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={eNachApplications3}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={eNachApplications4}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={eNachApplications5}
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
              be used. Thus, your business can transact with customers across
              any app of their preference or facilitate the same for your
              partners or vendors using a single ID.
            </p>
          </div>
        </div>
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
        <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </React.Fragment>
  );
};

export default Enach;
