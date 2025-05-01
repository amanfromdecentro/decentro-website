import Head from "next/head";
import React from "react";
import urls from "../../../urls";
import requests from "../../../requests";
import styles from "../../../styles/page-styles/mobile-to-vpa.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import ResourcesMethodology from "../../../components/resources-methodology/resources-methodology";
import TextAndButtonBanner from "../../../components/text-and-button-banner/text-and-button-banner";
import Link from "next/link";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import UseCases from "../../../components/use-cases/use-cases";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import HorizontalComparison from "../../../components/horizontal-comparison/horizontal-comparison";

const MobileToVPA = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>Mobile to VPA APIs</span>",
    tagline:
      "Fetch and verify the UPI VPA, account holder’s name and bank account details using just a mobile number.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/mobile-to-vpa/mobile-to-vpa-new.svg",
    imageSrc: "/images/resources/mobile-to-vpa/mobile-to-vpa-new.svg",
    altText: "Mobile to VPA APIs",
    DBackground: true,
  };

  const tableOfContentsData = [
    {
      text: "Methodology",
      id: "methodSection",
    },
    {
      text: "Types of Mobile to VPA APIs",
      id: "vpaTypes",
    },
    {
      text: "The need for Mobile to VPA APIs",
      id: "needForMobileToVPA",
    },
    {
      text: "Key Features of Mobile to VPA APIs",
      id: "keyFeatures",
    },
    {
      text: "Where you can use it",
      id: "whereToUse",
    },
    {
      text: "How can  Decentro help",
      id: "howCanDecentroHelp",
    },
    {
      text: "Frequently Asked Questions",
      id: "commonlyAskedQuestions",
    },
  ];

  const methodData = [
    {
      imageSrc: "/images/icons/key.svg",
      header: "Step 1",
      description: "Get access keys for the API from Decentro.",
    },
    {
      imageSrc: "/images/icons/integrate-api.svg",
      header: "Step 2",
      description: "Integrate the API into your application or platform.",
    },
    {
      imageSrc: "/images/icons/access-data-point.svg",
      header: "Step 3",
      description:
        "Access data points such as VPA handle, account type and more.",
    },
  ];

  const textAndButtonBannerData = {
    ctaTitle:
      'Automatic <span className="header-section-highlighted">Salutation Removal</span>',
    ctaDescription: `<span className="header-section-highlighted">The Mobile VPA (Basic) and Mobile to VPA (Advanced) APIs now check for salutation removal, including Indian honorifics</span>, so that downstream APIs such as PAN validation and credit report fetch have better success rates.`,
    onlyText: true,
  };

  const learnMoreData = {
    text: "",
    ctaButtonText: "View Product Guide",
    newTab: true,
    ctaButtonLink: "https://docs.decentro.tech/docs/bytes-mobile-to-vpa",
  };

  const useCasesData = {
    heading: "Key Features Of <span>Mobile to VPA APIs</span>",
    tagline: "",
    block1: [
      {
        heading: "Fraud Prevention",
        paragraph:
          "The Mobile to VPA APIs helps in preventing fraud by verifying the VPA and bank account, reducing the risk of funds being transferred to fraudulent accounts.",
        imageSrc:
          "/images/resources/phone-number-intelligence/transaction-fraud.svg",
      },
      {
        heading: "Instant Authentication",
        paragraph:
          "The API provides real-time verification of UPI VPA and associated details, ensuring that transactions are authenticated instantly and accurately.",
        imageSrc:
          "/images/resources/phone-number-intelligence/verified-user.svg",
      },
      {
        heading: "Enhanced <br/>Data Accuracy",
        paragraph:
          "Verify information via multiple data points directly with these APIs to ensure accuracy and eliminate the risk of human error.",
        imageSrc: "/images/resources/phone-number-intelligence/shield.svg",
      },
    ],
    block1extra: [
      {
        heading: "Bulk Retrieval",
        paragraph:
          "Retrieve a list of records in a single API call, allowing businesses to process multiple transactions or verifications simultaneously, enhancing operational efficiency.",
        imageSrc: "/images/resources/mobile-to-vpa/bulk-retrieval.svg",
      },
      {
        heading: "Seamless Integration",
        paragraph:
          "Integrate with the API seamlessly with a simple and user-friendly interface.",
        imageSrc: "/images/resources/phone-number-intelligence/easy-api.svg",
      },
      {
        heading: "Dedicated Support Team",
        paragraph:
          "Access to a dedicated customer support team for assistance with integration, troubleshooting, and optimization of the API.",
        imageSrc:
          "/images/resources/phone-number-intelligence/user-onboarding.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const employeeOnboarding = {
    headingLight: "Banking and Financial Services",
    headingBold: "",
    text: "Banks can use the API to quickly verify customer identities by fetching their full name, UPI VPA, IFSC code, and account type. This streamlines the account opening process and ensures compliance with regulatory requirements.",
    imageSrc: "/images/resources/mobile-to-vpa/banking-new.svg",
    altText: "Banking and Financial Services",
  };
  const employeeOnboarding2 = {
    headingLight: "Loan Disbursement",
    headingBold: "",
    text: "Financial institutions can verify detailed account information to ensure that loan funds are disbursed to the correct accounts, reducing the risk of errors and fraud.",
    imageSrc: "/images/resources/mobile-to-vpa/loan-new.svg",
    altText: "Loan Disbursement",
  };
  const employeeOnboarding3 = {
    headingLight: "E-commerce",
    headingBold: "",
    text: "For processing refunds, e-commerce companies can use the API to retrieve detailed account information, ensuring that refunds are accurately credited to the correct accounts, improving customer satisfaction.",
    imageSrc: "/images/resources/mobile-to-vpa/e-commerce-new.svg",
    altText: "E-commerce",
  };
  const employeeOnboarding4 = {
    headingLight: "Logistics and Last-Mile Delivery",
    headingBold: "",
    text: "Delivery personnel can verify the recipient’s full name and UPI VPA during cash-on-delivery payments to ensure that payments are correctly credited.",
    imageSrc: "/images/resources/mobile-to-vpa/logistics-new.svg",
    altText: "Logistics and Last-Mile Delivery",
  };
  const employeeOnboarding5 = {
    headingLight: "Insurance",
    headingBold: "",
    text: "Insurance companies can verify the full name, UPI VPA, and account details of policyholders during the policy issuance and claims process, ensuring accurate and secure transactions.",
    imageSrc: "/images/resources/mobile-to-vpa/insurance-new.svg",
    altText: "Insurance",
  };
  const employeeOnboarding6 = {
    headingLight: "Education",
    headingBold: "",
    text: "Educational institutions can verify the identity of students making fee payments by fetching their full name and UPI VPA, ensuring that payments are correctly credited to student accounts.",
    imageSrc: "/images/resources/mobile-to-vpa/education-new.svg",
    altText: "Education",
  };

  const textAndButtonBannerData1 = {
    text: "<br/><span>Got Questions?</span>",
    ctaButtonText: "Talk to Our Experts Now!",
    ctaButtonLink: requests.SIGNUP,
  };

  const howCanDecentroHelpData = {
    headingLight: "",
    headingBold: "Mobile to VPA APIs for Your Business",
    tagline: "",
    bulletPointsHeader: "How Can Decentro Help?",
    bulletPoints: [
      {
        text: "Single API for instantly validating a user’s UPI VPA, their full name, and their bank account details..",
      },
      {
        text: "Flexible API-based flow that can be embedded easily in your existing workflows.",
      },
      {
        text: "Verify accounts on the fly while maintaining the accuracy and speed of onboarding and transactions.",
      },
      {
        text: "Automated salutation removal check, including indian honorifics, so that all downstream APIs such as PAN Validation and Credit Report fetch have better success rates.",
      },
      {
        text: "Multiple security measures to protect users’ financial data and ensure user privacy.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "For Developers",
        linkText: "API Documentation",
        link: "https://docs.decentro.tech/docs/bytes-mobile-to-vpa",
      },
    ],
  };

  const textAndButtonBannerData2 = {
    text: "Robust and efficient APIs to to ensure <span>account verification </span>on the go.",
    ctaButtonText: "Get Started Today!",
    ctaButtonLink: requests.SIGNUP,
  };

  const accordionData = [
    {
      query: "What is the Mobile to VPA APIs?",
      solution:
        "The Mobile to VPA APIs by Decentro allows users to retrieve the UPI (Unified Payments Interface) ID associated with a given mobile number.",
      bulletPoints: [],
    },
    {
      query: "How can I start using the Mobile to VPA APIs?",
      solution:
        "To access the API, you will need to sign up with Decentro, obtain the API key for the Mobile to VPA APIs, and then use it to make API calls on your platform or application.",
      bulletPoints: [],
    },
    {
      query: "Is the Mobile to VPA APIs secure?",
      solution:
        "Decentro has placed multi-tiered security measures to protect users’ data and to ensure their privacy. You can go through our compliance page for an in-depth view on our safety and security measures.",
    },
    {
      query: "How can the Mobile to VPA APIs help my business?",
      solution:
        "The Mobile to VPA APIs is particularly useful for businesses that need to efficiently identify and verify the recipient’s UPI ID and bank account details, and prevent fraudulent transactions.",
    },
  ];

  const recommendedPagesData = [
    {
      title: "Phone Number Intelligence",
      description:
        "Find, verify, and fetch multiple data points associated with a mobile number, including the Full Name, UPI ID, IFSC code, and more.",
      pageLink: "/resources/phone-number-intelligence",
      imageSrc:
        "/images/resources/phone-number-intelligence/phone-number-intelligence.svg",
    },
    {
      title: "Employment Verification",
      description:
        "Real-time UAN Verification API to extract employment details of employees and verify EPFO details.",
      pageLink: "/resources/employment-verification-api",
      imageSrc: "/images/resources/employement-verification.svg",
    },
  ];

  const horizontalComparisonData = {
    heading: "Mobile to VPA - <span>Types",
    description:
      "The following two versions of Mobile to VPA APIs are available for businesses to access",
    items: [
      {
        img: "/images/resources/mobile-to-vpa/mobile-to-vpa-basic.svg",
        subheading: "Mobile to VPA APIs <br />[Basic]",
        list: [
          {
            text: "Full Name",
          },
          {
            text: "Valid UPI Virtual Payment Address",
          },
        ],
      },
      {
        img: "/images/resources/mobile-to-vpa/mobile-to-vpa-advanced.svg",
        subheading: "Mobile to VPA APIs <br />[Advanced]",
        list: [
          {
            text: "Full Name",
          },
          {
            text: "Valid UPI Virtual Payment Address",
          },
          {
            text: "IFSC Code",
          },
          {
            text: "Type of Account [Savings or Current]",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Mobile to VPA API | Fetch UPI VPA using Phone Number</title>
        <link
          rel="canonical"
          href={urls.BASE_URL + urls.RESOURCES_MOBILE_TO_VPA}
        />
        <meta
          name="description"
          content="Check out our guide on Mobile to VPA and get data points like UPI VPA, bank account details and account holder names to verify your customers. Get started today."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Mobile to VPA API | Fetch UPI VPA using Phone Number"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>

      <div className={styles["mobile-to-vpa"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["leverage-verifiction-api"]} id="methodSection">
          <h2>
            <span>Methodology</span>
          </h2>
          <p>
            All the variants of Mobile to VPA APIs can be integrated in three
            steps
          </p>
          <div className={styles["leverage-verifiction-api-content"]}>
            <ResourcesMethodology data={methodData} itemCount={4} />
          </div>
        </div>
        <HorizontalComparison data={horizontalComparisonData} id="vpaTypes" />
        <TextAndButtonBanner data={textAndButtonBannerData} />
        {/* <div> */}
        <TextAndButtonBannerTransparent data={learnMoreData} />

        <div className={styles["special-info-section"]} id="needForMobileToVPA">
          <div className={styles["special-info-wrapper"]}>
            <h2>Businesses can deploy <span>Mobile to VPA APIs </span>in their
              workflows to
            </h2>
            <div className={styles["special-info-description"]}>
              <p>
                Verify the identity of the payee and ensuring that payments are
                directed to the correct recipient.
              </p>
              <p>Process multiple transactions.</p>
              <p>Verify several VPAs at once.</p>
              <p>Ensure compliance with regulatory requirements.</p>
            </div>
            {/* <TextAndButtonBannerTransparent data={learnMoreData} /> */}
          </div>
        </div>

        <UseCases id="keyFeatures" data={useCasesData} />

        <div
          className={styles["employee-verification-methods"]}
          id="whereToUse"
        >
          <h2>
            Where You Can <span>Use It</span>
          </h2>
          <div className={styles["employee-verification-methods-content"]}>
            <InlineImageAndParagraph
              zoom={true}
              data={employeeOnboarding}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={employeeOnboarding2}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={employeeOnboarding3}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={employeeOnboarding4}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={employeeOnboarding5}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              zoom={true}
              data={employeeOnboarding6}
              reverse={true}
              boldBlack
            />
          </div>
        </div>
        <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />

        <BulletPointsAndTextBlock
          id="howCanDecentroHelp"
          data={howCanDecentroHelpData}
        />

        <TextAndButtonBannerTransparent data={textAndButtonBannerData2} />

        <div
          className={styles["commonly-asked-questions"]}
          id="commonlyAskedQuestions"
        >
          <h2 className={styles["faq-heading"]}>
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
    </>
  );
};

export default MobileToVPA;
