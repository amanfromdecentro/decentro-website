import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/digital-lending-solution.module.scss";
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

function DigitalLending() {
  const bannerData = {
    heading:
      "<span class='highlighted-heading'>Digital Lending Solution for NBFCs and Fintechs</span>",
    tagline:
      "A complete lending solution inclusive of easy loan disbursement, re-payments, KYC verification and much more, in compliance with RBI digital lending guidelines",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/digital-lending.svg",
    altText: "Digital Lending Solution for NBFCs and Fintechs",
    DBackground: true,
  };

  const digitalLendingSegmentationData = {
    extraHeadingText: "<span>Digital Lending</span> Segmentation",
    text: "Digital lending in India is expected to become a $1.3 Tn market opportunity by 2030. This high-potential ecosystem can be segmented into the following five categories:",
    bulletPointsText: [
      "Regulated Lenders & Capital providers (such as Banks and NBFCs).",
      "Data Providers (such as Account Aggregators).",
      "Core Platforms (such as LMS - Lending management systems).",
      "Fintechs:<br/><span class='sub-bullet-level1'>SME / MSME Lending.</span><br/><span class='sub-bullet-level1'>Consumer Lending.</span>",
      "Third Parties.",
    ],
    extraEndingText:
      "With Banks and NBFCs forming the backbone of the lending sector, these are traditionally heavily regulated by the Reserve Bank of India [RBI] due to the sheer volume of capital being held by these institutions.",
    imageSrc:
      "/images/resources/digital-lending/digital-lending-segmentation.svg",
    altText: "Digital Lending Segmentation",
  };

  const needForDigitalLendingSolution = {
    headingLight: "",
    headingBold: "",
    extraHeadingText:
      "The <span>Need For a Compliant</span> Digital Lending Solution",
    text:
      "The new digital lending guidelines announced by RBI, aimed at curbing rising malpractices in the digital lending ecosystem, have made it mandatory that loan disbursals and repayments happen directly between the accounts of regulated lenders (NBFCs or Banks) and borrowers." +
      "<br/>To quote the guideline, “All digital loans must be disbursed and repaid through bank accounts of regulated entities only, without pass-through of loan service providers (LSPs) or other third parties.”" +
      "<br/>With the question of compliancy looming large on any  third party or fintech solution, the need to clarify the scope and responsibilities across the lending lifecycle is now paramount. This along with the promise of transparency in terms technology, and disclosures related to data gathering will be the key drivers of the regulated payment infrastructure in this new lending ecosystem.",
    imageSrc: "/images/resources/digital-lending/digital-lending-solution.svg",
    altText: "Need for digital lending solution",
  };

  const useCasesData = {
    heading: "Key Features of&nbsp;<span>API Banking Stack</span>",
    tagline: "",
    block1: [
      {
        heading: "",
        paragraph: "99.9% Uptime of our systems & APIs",
        imageSrc: "/images/resources/digital-lending/uptime.svg",
      },
      {
        heading: "",
        paragraph: "Fastest Response Times of a few hundred milliseconds",
        imageSrc: "/images/resources/digital-lending/fast.svg",
      },
      {
        heading: "",
        paragraph: "Single API documentation for multiple bank providers",
        imageSrc: "/images/resources/digital-lending/single-doc.svg",
      },
      {
        heading: "",
        paragraph: "Real-time bank-switchability in our backend",
        imageSrc: "/images/resources/digital-lending/switch.svg",
      },
    ],
    block1extra: [
      {
        heading: "",
        paragraph: "10X reduction in integration efforts, cost, and time",
        imageSrc: "/images/resources/digital-lending/save.svg",
      },
      {
        heading: "",
        paragraph:
          "Multi-channel collections via UPI, QR, RTGS, IMPS, NEFT, eNACH, Whatsapp, Payment links and more.",
        imageSrc: "/images/resources/digital-lending/multichannel.svg",
      },
      {
        heading: "",
        paragraph: "Automated alerts for fluctuations & downtimes, if any",
        imageSrc: "/images/resources/digital-lending/alert.svg",
      },
      { heading: "", paragraph: "", imageSrc: "" },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const textAndButtonBannerData = {
    text: "",
    ctaButtonText: "Get Started Today",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const simplifyLoansAndDisbursals = {
    headingLight: "Simplify Loan Collections & Disbursals",
    headingBold: "",
    text: "Disburse loans with automated payouts in real-time. Share white-labelled UPI payment links/QR codes or virtual accounts for seamless collections. Automate any recurring payments for your partners from their customers. Set up UPI Autopay, e-mandates & NACH services for recurring payments.",
    imageSrc: "/images/resources/digital-lending/simplify-loan-collections.svg",
    altText: "Simplify Loan Collections & Disbursals",
    CTAButtonLink: "https://docs.decentro.tech/docs/lending-overview-and-guide",
    CTAButtonText: "View Product Guide",
  };

  const verifyCustomers = {
    headingLight: "Verify customers with our KYC APIs",
    headingBold: "",
    text: "Profile your customers and verify and validate their identities before approving them for loans. Perform verifications such as identity checks via KYC & CKYC, real-time Govt data checks like GSTIN, Face match and liveliness check.",
    imageSrc: "/images/resources/digital-lending/verify-customers.svg",
    altText: "Verify customers with our KYC APIs",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-overview-and-guide",
    CTAButtonText: "View Product Guide",
  };

  const reconcileBalances = {
    headingLight: "Reconcile balances and settlements",
    headingBold: "",
    text: "Set up any number of virtual accounts to reconcile all your settlements in real time, and easily via dashboard or our APIs.",
    imageSrc: "/images/resources/digital-lending/reconcile-balances.svg",
    altText: "Reconcile balances and settlements",
    CTAButtonLink: "https://docs.decentro.tech/docs/lending-checkout-finance",
    CTAButtonText: "View Product Guide",
  };

  const baas = {
    headingLight: "Banking as a Service",
    headingBold: "",
    text: "Open and manage fully digital escrow and corporate accounts for your partners and merchants with trusted transactions on top of any of our partner banks in the country.",
    imageSrc: "/images/resources/digital-lending/baas.svg",
    altText: "Banking as a Service",
    CTAButtonLink: "https://docs.decentro.tech/docs/dashboard-fabric-bytes",
    CTAButtonText: "View Product Guide",
  };

  const howCanDecentroHelpData = {
    headingLight: "Digital Lending For Your Business ",
    headingBold: "- How Can Decentro Help",
    tagline:
      "Decentro’s API banking platform has APIs to help businesses like yours to provide a seamless experience to your customers, partners, and vendors!",
    bulletPointsHeader: "Why Decentro’s APIs for Digital Lending?",
    bulletPoints: [
      {
        text: "Entire lending stack available as plug-play APIs and a dashboard.",
      },
      {
        text: "Get access to detailed and customised statements and repayment reports for accounting & compliance.",
      },
      {
        text: "Onboard approved and compliant channels to increase disbursements.",
      },
      {
        text: "Connect with lenders in the ecosystem to co-lend or run partnerships.",
      },
      {
        text: "Dedicated support to facilitate a seamless onboarding experience for the fintechs and the lenders.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link:
          "https://docs.decentro.tech/docs/lending-overview-and-guide" +
          encodeURI(utmtags.DEVELOPER_DOCS_CREDIT_BUREAU_API_BTN),
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "<span>Compliant Banking APIs</span> for your<br/>Lending Businesses &amp; NBFCs",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const accordionData = [
    {
      query: "Is Decentro compliant with new RBI lending guidelines?",
      solution:
        "Yes, Decentro is fully compliant with the new RBI lending guidelines.",
    },
    {
      query: "Why was the new guideline issued by RBI?",
      solution:
        "The guidelines, aimed at curbing rising malpractices in the digital lending ecosystem, follow the recommendations of a working group for digital lending, whose report was made public in November 2021. “The concerns primarily relate to the unbridled engagement of third parties, mis-selling, breach of data privacy, unfair business conduct, charging of exorbitant interest rates, and unethical recovery practices,” the RBI said in the final guidelines.",
    },
    {
      query: "When will the new guidelines come to effect?",
      solution:
        "The effective date from which the guidelines are applicable is given below:",
      bulletPoints: [
        {
          text: "New Loans: The guidelines were applicable on an immediate basis (i.e. from 2 September 2022) to the existing customers availing fresh loans and to new customers getting onboarded.",
        },
        {
          text: "Existing Loans: Regulated Entities would be given time till 30 November 2022 to put in place adequate systems and processes to ensure that existing digital loans comply with the guidelines",
        },
      ],
    },
    {
      query:
        "What capabilities does Decentro offer in the digital lending space?",
      solution:
        "Decentro is a one-stop system designed to manage disbursements, automate collections, and provide KYC solutions for seamless borrower onboarding while conforming with RBI digital lending criteria.",
    },
    {
      query: "Does Decentro’s stack take co-lending into consideration?",
      solution:
        "Yes, Decentro enables you to create a flexible virtual account and use APIs on the escrow or corporate account of the lenders to enable co-lending use cases.",
    },
    {
      query: "How does the integration work for Decentro?",
      solution: "Decentro’s integration works in three easy steps.",
      bulletPoints: [
        {
          text: "Signup with Decentro with a corporate/escrow bank account of the lender in place. Or take our help to get one opened within 2-3 working days.",
        },
        {
          text: "Select from our list of modules such as Accounts, Payments, and configure your desired banking operation with complete control via APIs or the dashboard.",
        },
        {
          text: "Test the modules in the sandbox,  and go live at any time—all in a matter of weeks, instead of months.",
        },
      ],
    },
  ];

  const tableOfContentsData = [
    { text: "Digital Lending Segmentation", id: "digitalLendingSolutions" },
    {
      text: "The Need For a Compliant Digital Lending Solution",
      id: "needForCompliantSolution",
    },
    { text: "Key Features of API Banking Stack", id: "keyFeatures" },
    { text: "The Solution Suite for Fintech Lenders", id: "solutionSuite" },
    {
      text: "Digital Lending For Your Business - How Can Decentro Help",
      id: "howCanDecentroHelp",
    },
    { text: "Frequently Asked Questions", id: "commonlyAskedQuestions" },
  ];

  const recommendedPagesData = [
    {
      title: "UPI Payment APIs",
      description:
        "Set up real-time payments & collections with UPI and create a seamless cash flow for your business. Enable instant settlements for your customers, partners, or merchants/vendors using UPI APIs.",
      pageLink: "/resources/upi-apis/",
      imageSrc: "/images/resources/upi.svg",
    },
    {
      title: "Credit Bureau APIs",
      description:
        "Evaluate the creditworthiness of your customers before lending & minimize the risk of default using our Credit Bureau APIs.",
      pageLink: "/resources/credit-bureau-api/",
      imageSrc: "/images/resources/credit-bureau.svg",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          Digital Lending Solution | What is Digital Lending | Decentro
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/digital-lending-solution"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/digital-lending-solution"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Facilitate loans, onboard with KYC, reconcile transactions and run digital escrow accounts with a complete digital lending solution."
        />
        <meta name="keywords" content="Digital Lending Solution APIs" />
        <meta
          property="og:title"
          content="Digital Lending Solution | What is Digital Lending | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script defer type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is Decentro compliant with new RBI lending guidelines?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Decentro is fully compliant with the new RBI lending guidelines.",
                },
              },
              {
                "@type": "Question",
                name: "Why was the new guideline issued by RBI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The guidelines, aimed at curbing rising malpractices in the digital lending ecosystem, follow the recommendations of a working group for digital lending, whose report was made public in November 2021. “The concerns primarily relate to the unbridled engagement of third parties, mis-selling, breach of data privacy, unfair business conduct, charging of exorbitant interest rates, and unethical recovery practices,” the RBI said in the final guidelines.",
                },
              },
              {
                "@type": "Question",
                name: "When will the new guidelines come to effect?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The effective date from which the guidelines are applicable are as follows: New Loans: The guidelines were applicable on an immediate basis (i.e. from 2 September 2022) to the existing customers availing fresh loans and to new customers getting onboarded. Existing Loans: Regulated Entities would be given time till 30 November 2022 to put in place adequate systems and processes to ensure that existing digital loans comply with the guidelines.",
                },
              },
              {
                "@type": "Question",
                name: "What capabilities does Decentro offer in the digital lending space?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Decentro is a one-stop system designed to manage disbursements, automate collections, and provide KYC solutions for seamless borrower onboarding while conforming with RBI digital lending criteria.",
                },
              },
              {
                "@type": "Question",
                name: "Does Decentro’s stack take co-lending into consideration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Decentro enables you to create a flexible virtual account and use APIs on the escrow or corporate account of the lenders to enable co-lending use cases.",
                },
              },
              {
                "@type": "Question",
                name: "How does the integration work for Decentro?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Decentro’s integration works in three easy steps.Signup with Decentro with a corporate/escrow bank account of the lender in place. Or take our help to get one opened within 2-3 working days. Select from our list of modules such as Accounts, Payments, and configure your desired banking operation with complete control via APIs or the dashboard.Test the modules in the sandbox,  and go live at any time—all in a matter of weeks, instead of months.",
                },
              },
            ],
          })}
        </script>
      </Head>
      <div className={styles["digital-lending-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["digital-lending-details"]}>
          <InlineImageAndParagraph
            id="digitalLendingSolutions"
            data={digitalLendingSegmentationData}
            reverse={false}
          />
          <InlineImageAndParagraph
            id="needForCompliantSolution"
            data={needForDigitalLendingSolution}
            reverse={true}
          />
        </div>
        <UseCases id="keyFeatures" data={useCasesData} />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <div className={styles["credit-report-analysis"]} id="solutionSuite">
          <h2>
            The Solution Suite for <span>Fintech Lenders</span>
          </h2>
          <div className={styles["credit-report-analysis-content"]}>
            <InlineImageAndParagraph
              data={simplifyLoansAndDisbursals}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              data={verifyCustomers}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              data={reconcileBalances}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph data={baas} reverse={true} boldBlack />
          </div>
        </div>
        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={howCanDecentroHelpData}
        />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />
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
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </React.Fragment>
  );
}

export default DigitalLending;
