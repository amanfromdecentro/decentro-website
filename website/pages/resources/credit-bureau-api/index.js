import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/credit-bureau-api.module.scss";
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

function CreditBureau() {
  const bannerData = {
    heading: "<span class='highlighted-heading'>Credit Bureau APIs</span>",
    tagline:
      "Evaluate the creditworthiness of your customers before lending & minimize the risk of default using our Credit Bureau APIs.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/credit-bureau.svg",
    altText: "Credit Bureau APIs",
    DBackground: true,
  };

  const inlineImageAndParagraphData = {
    headingLight: "What is a",
    headingBold: " Credit Bureau?",
    text:
      "We’ve already applied for a loan, a credit card, or a pay later service during shopping at least once in our life. Do we know how the eligibility for getting credit is often calculated? Along with your background & details, there’s one number that has a major impact on this metrics- Credit Score." +
      "<br/><br/>What exactly is a credit score?" +
      "<br/>A credit score is a financial metric that shows the creditworthiness of a user/business and is used to decide the eligibility for a loan." +
      "<br/><br />Financial institutions like banks use this information to measure the ability of a customer to repay the loan and the risk of default associated with it. A credit score is a three-digit number, typically ranging from 300 to 900. But, who compiles these data points?" +
      "<br/><br/><span class='detail-description'>A credit bureau is a data collection agency, that collects & compiles the credit history of a borrower and provides a comprehensive report on the same for financial institutions to assess the creditworthiness for future references.</span>",
    imageSrc: "/images/resources/credit-bureau/credit-bureau.svg",
    altText: "What is a Credit Bureau?",
  };

  const inlineImageAndParagraphData1 = {
    headingLight: "Which are the",
    extraHeadingText:
      "<span class='subheader-bold'>Top Credit Bureaus</span> <span class='subheader-light'>in India?</span>",
    text: "The Reserve Bank of India has established and licensed four credit rating bureaus that will be administered by The Credit Information Companies (Regulation) Act, 2005 and rules and regulations. Some of the top credit bureaus in the country are <span class='detail-description'>TransUnion Credit Information Bureau (India) Limited or CIBIL, Equifax, Experian, CRIF High Mark</span>.",
    imageSrc: "/images/resources/credit-bureau/top-credit-bureau.svg",
    altText: "Top Credit Bureaus in India.",
  };

  const inlineImageAndParagraphData2 = {
    extraHeadingText:
      "<span class='subheader-bold'>Credit Report</span> <span class='subheader-light'>Vs</span> <span class='subheader-bold'>Credit Score</span>",
    text:
      "Are they the same? The short answer is no!" +
      "<br/><br/>The main difference between credit reports and credit scores is that credit score is a numerical value that is used as a quick means for lenders & financial institutions to decide whether the loan applicant is eligible for credit. On the other hand, a credit report is a comprehensive & detailed document containing the applicant's financial history." +
      "<br/><br/>A credit report provides a holistic view of the user by providing intricate details such as:",
    bulletPointsText: [
      "Personal details & background ",
      "Address details for offline verification",
      "Estimation of income details",
      "Identity proofs registered for national IDs",
      "Contact address & email IDs",
      "Retail account details: History from financial institutions like banks and NBFCs",
      "Credit Score and Loan enquiry Summaries",
    ],
    imageSrc: "/images/resources/credit-bureau/credit-report-score.svg",
    altText: "Credit Report vs Credit Score",
  };

  const useCasesData = {
    heading: "Where are <span>Credit Bureau Checks</span> Critical",
    tagline: "",
    block1: [
      {
        heading: "Insurance<br /> Providers",
        paragraph:
          "To reduce risk of claim frauds, insurance companies run soft credit score checks on users",
        imageSrc:
          "/images/resources/credit-bureau/insurance-providers-icon.svg",
      },
      {
        heading: "Loans & <br /> Credit",
        paragraph:
          "To decide the interest rate, repayment terms, disbursement amounts, & more for consumer/business loans",
        imageSrc: "/images/resources/credit-bureau/line-graph.svg",
      },
      {
        heading: "Telco <br /> Platforms",
        paragraph:
          "Before extending services, especially postpaid, telcom companies use credit bureau checks for credit check & profiling.",
        imageSrc: "/images/resources/credit-bureau/delay.svg",
      },
      {
        heading: "Credit Card & <br /> BNPL",
        paragraph:
          "E-commerce platforms, for example, that provide BNPL services to users.",
        imageSrc: "/images/resources/credit-bureau/wallet.svg",
      },
    ],
    block1extra: [],
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

  const behaviorAnalysis = {
    headingLight: "Behavior Analysis ",
    headingBold: "",
    text: "Study entire credit history & score to understand purchase patterns & repayment behavior",
    imageSrc: "/images/resources/credit-bureau/behavior-analysis.svg",
    altText: "Behavior Analysis",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/financial_services-overview-and-guide",
    CTAButtonText: "View Product Guide",
  };

  const riskEvaluation = {
    headingLight: "Risk Evaluation",
    headingBold: "",
    text: "Reduce the risk of default and increase the chances of simplified collections for your business",
    imageSrc: "/images/resources/credit-bureau/risk-evaluation.svg",
    altText: "Risk Evaluation",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/financial_services-generate-credit-report",
    CTAButtonText: "View Product Guide",
  };

  const howCanDecentroHelpData = {
    headingLight: "",
    headingBold: "Decentro’s Credit Bureau APIs",
    tagline:
      "Decentro’s API banking platform has Credit Score Check APIs to help businesses like yours speed up customer onboarding time by 95% and provide a seamless experience to your customers, partners, and vendors!",
    bulletPointsHeader: "Why Decentro’s APIs for Credit Bureau?",
    bulletPoints: [
      {
        text: "Fetch the entire credit report with just a simple API call via mobile number & name!",
      },
      {
        text: "Verify a customer’s personal data, address details for offline verification, retail account details, past loan history, credit score & more!",
      },
      {
        text: "KYC & CKYC APIs to run another layer of comprehensive background verification to reduce instances of fraud. Fetch GST returns and E-invoices from GSTIN to assess customers’ financials with just 2 clicks.",
      },
      {
        text: "Connect with credit bureaus like Equifax, and more enroute, in our backend for uninterrupted operations with a single API integration.",
      },
      {
        text: "Reduce overhead expenditures significantly for user verification with a minimal cost for each Credit Bureau API hit.",
      },
      {
        text: "Embed & offer credit scores to customers via your platform using our banking APIs.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link:
          "https://docs.decentro.tech/docs/financial_services-credit-bureau" +
          encodeURI(utmtags.DEVELOPER_DOCS_CREDIT_BUREAU_API_BTN),
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "APIs For Your Business<br/><span>Sign-up Today, Go Live Tomorrow!</span>",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const accordionData = [
    {
      query: "Who Regulates Credit Bureaus In India?",
      solution:
        "The Reserve Bank of India has established and licensed four credit rating bureaus: CIBIL, Equifax, High Mark, and Experian. The agencies shall be administered by The Credit Information Companies (Regulation) Act, 2005, and rules and regulations issued by the central bank of India, the Reserve Bank of India.",
    },
    {
      query: "What Factors Affect Your Credit Score?",
      solution:
        "The major factors that impact a user’s credit score negatively are:",
      bulletPoints: [
        { text: "Delayed repayments" },
        { text: "Not paying back the credit amount at all" },
        { text: "Having your account charged off" },
        { text: "Closing a credit card that has an outstanding balance" },
        { text: "Applying for multiple credit cards or loans simultaneously" },
        { text: "Percentage of credit utilized" },
        { text: "Age of loan accounts" },
      ],
    },
    {
      query: "What are the Benefits of Having Excellent Credit Scores?",
      solution: "",
      bulletPoints: [
        { text: "Easy loan approvals" },
        {
          text: "Increased limits for credit, be it on your credit card or loan",
        },
        { text: "Low interest rates on loans" },
        { text: "Loan without investing significant collateral" },
      ],
    },
  ];

  const tableOfContentsData = [
    { text: "What is a Credit Bureau?", id: "creditBureau" },
    { text: "Top Credit Bureaus in India", id: "topCreditBureaus" },
    { text: "Credit Report vs Credit Score", id: "reportVsScore" },
    {
      text: "Where are Credit Bureau Checks Critical",
      id: "creditBureauChecksCritical",
    },
    {
      text: "Benefits of Credit Report Analysis for your business",
      id: "creditReportAnalysis",
    },
    {
      text: "Why Decentro’s APIs for Credit Bureau?",
      id: "decentroCreditBureauApis",
    },
  ];

  const recommendedPagesData = [
    {
      title: "Financial Services",
      description:
        "Fetch credit reports and secure customer data from various data sources to serve your customers' financial needs",
      pageLink: "/products/financial-services",
      imageSrc: "/images/resources/credit-bureau/financial-services.svg",
    },
    {
      title: "DigiLocker",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/digilocker-apis/",
      imageSrc: "/images/resources/digilocker.svg",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>Credit Bureau API | Credit Score API | Decentro</title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/credit-bureau-api"
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources/credit-bureau-api"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Wish to reduce the risk of default and make wise lending decisions for your business? Collect & analyze credit bureau reports using a single API with Decentro!"
        />
        <meta name="keywords" content="Credit Bureau APIs" />
        <meta
          property="og:title"
          content="Credit Bureau API | Credit Score API | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
        <script defer type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who Regulates Credit Bureaus In India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Reserve Bank of India has established and licensed four credit rating bureaus: CIBIL, Equifax, High Mark, and Experian. The agencies shall be administered by The Credit Information Companies (Regulation) Act, 2005, and rules and regulations issued by the central bank of India, the Reserve Bank of India.",
                },
              },
              {
                "@type": "Question",
                name: "What Factors Affect Your Credit Score?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The major factors that impact a user’s credit score negatively are: Delayed repayments, Not paying back the credit amount at all, Having your account charged off, Closing a credit card that has an outstanding balance, Applying for multiple credit cards or loans simultaneously, Percentage of credit utilized, Age of loan accounts",
                },
              },
              {
                "@type": "Question",
                name: "What are the Benefits of Having Excellent Credit Scores?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Easy loan approvals, Increased limits for credit, be it on your credit card or loan, Low interest rates on loans, Loan without investing significant collateral",
                },
              },
            ],
          })}
        </script>
      </Head>
      <div className={styles["credit-bureau-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["credit-bureau-details"]}>
          <InlineImageAndParagraph
            id="creditBureau"
            data={inlineImageAndParagraphData}
            reverse={false}
          />
          <InlineImageAndParagraph
            id="topCreditBureaus"
            data={inlineImageAndParagraphData1}
            reverse={true}
          />
          <InlineImageAndParagraph
            id="reportVsScore"
            data={inlineImageAndParagraphData2}
            reverse={false}
          />
        </div>
        <UseCases id="creditBureauChecksCritical" data={useCasesData} />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <div
          className={styles["credit-report-analysis"]}
          id="creditReportAnalysis"
        >
          <h2>
            Benefits of <span>Credit Report Analysis</span> for your Business{" "}
          </h2>
          <div className={styles["credit-report-analysis-content"]}>
            <InlineImageAndParagraph
              data={behaviorAnalysis}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              data={riskEvaluation}
              reverse={true}
              boldBlack
            />
          </div>
        </div>
        <BulletPointsAndTextBlock
          id="decentroCreditBureauApis"
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

export default CreditBureau;
