import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/phone-number-intelligence.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../../components/use-cases/use-cases";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import InlineImageTextMap from "../../../components/inline-image-text-map/inline-image-text-map";
import urls from "../../../urls";

function PhoneNumberIntelligence() {
  const bannerData = {
    heading:
      "<span class='highlighted-heading'>Phone Number Intelligence</span>",
    tagline:
      "Find, verify, and fetch multiple data points associated with a mobile number, including the Full Name, UPI ID, IFSC code, and more.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc:
      "/images/resources/phone-number-intelligence/phone-number-intelligence.svg",
    altText: "Phone Number Intelligence",
    DBackground: true,
  };

  const tableOfContentsData = [
    {
      text: "Methodology",
      id: "methodology",
    },
    {
      text: "The Need for Phone Number Intelligence API Suite",
      id: "needForPhoneNumberIntelligence",
    },
    {
      text: "Key Features Of Phone Number Intelligence API Suite",
      id: "keyFeatures",
    },
    {
      text: "Where You Can Use It",
      id: "whereToUse",
    },
    {
      text: "How Can Decentro Help?",
      id: "howCanDecentroHelp",
    },
    {
      text: "Frequently Asked Questions",
      id: "commonlyAskedQuestions",
    },
  ];

  const inlineImageTextMapData = {
    heading: "<span>Methodology</span>",
    tagline:
      "Fetch data associated with a mobile number with three different types of APIs.",
    items: [
      {
        imageSrc:
          "/images/resources/phone-number-intelligence/mobile-to-name-vpa.svg",
        altText: "Mobile to Name",
        itemTitle: "Mobile to Name <br/>VPA",
        itemDescription:
          "A simple and reliable API that can identify and authenticate the user’s full name directly from the bank records.",
      },
      {
        imageSrc:
          "/images/resources/phone-number-intelligence/mobile-to-name-vpa.svg",
        altText: "Mobile to VPA [Basic]",
        itemTitle: "Mobile to <br/>VPA API [Basic]",
        itemDescription:
          "With this enhanced API, retrieve the user’s full name and a valid UPI VPA associated with the mobile number.",
      },
      {
        imageSrc:
          "/images/resources/phone-number-intelligence/mobile-to-name-vpa.svg",
        altText: "Mobile to VPA [Advanced]",
        itemTitle: "Mobile to <br/>VPA API [Advanced]",
        itemDescription:
          "A powerful API that fetches the full name, authenticates UPI VPA, retrieves IFSC code and the account type.",
      },
    ],
  };

  const useCasesData = {
    heading: "Key Features Of <span>Phone Number Intelligence API Suite</span>",
    tagline: "",
    block1: [
      {
        heading: "Detect <br/>Transaction Frauds",
        paragraph:
          "With secure and transparent access to data, the risk of funds being transferred to fraudulent accounts is eliminated.",
        imageSrc:
          "/images/resources/phone-number-intelligence/transaction-fraud.svg",
      },
      {
        heading: "Instant User<br/>Background Checks",
        paragraph:
          "Validate merchant/customer authenticity via multiple credentials, such as full name, UPI handle, IFSC code, and account type.",
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
        heading: "Accelerated <br/>User Onboarding",
        paragraph:
          "Verify information without exposing data to a third party, eliminating onboarding delays of new vendors/merchants/clients.",
        imageSrc:
          "/images/resources/phone-number-intelligence/user-onboarding.svg",
      },
      {
        heading: "Automated <br/>Workflows",
        paragraph:
          "Easy-to-integrate APIs for your existing workflows, tailored to your verification and validation needs.",
        imageSrc: "/images/resources/phone-number-intelligence/easy-api.svg",
      },
      {
        heading: "Exhaustive <br/>UPI coverage",
        paragraph:
          "Access UPI IDs across various banks to ensure users from different financial institutions can complete the verification process.",
        imageSrc: "/images/resources/phone-number-intelligence/upi.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  };

  const employeeOnboarding = {
    headingLight: "Retail Banking",
    headingBold: "",
    text: "Phone Number Intelligence APIs are predominantly used to authenticate account details during the onboarding process of new customers or while adding a new payee.",
    imageSrc: "/images/resources/phone-number-intelligence/retail-banking.svg",
    altText: "Retail Banking",
  };
  const employeeOnboarding2 = {
    headingLight: "E-Commerce",
    headingBold: "",
    text: "E-commerce platforms leverage Phone Number Intelligence APIs to validate the bank details of sellers and buyers.",
    imageSrc: "/images/resources/phone-number-intelligence/e-commerce.svg",
    altText: "E-Commerce",
  };
  const employeeOnboarding3 = {
    headingLight: "Peer-to-Peer Transactions",
    headingBold: "",
    text: "Phone Number Intelligence APIs are crucial in P2P platforms where users must verify their account details to send or receive money.",
    imageSrc: "/images/resources/phone-number-intelligence/peer-to-peer.svg",
    altText: "Peer-to-Peer Transactions",
  };
  const employeeOnboarding4 = {
    headingLight: "Lending and Credit",
    headingBold: "",
    text: "Financial Institutions can use data retrieved from Phone Number Intelligence APIs to verify loan applicants’ details, aiding in assessing their creditworthiness and reducing the risk of default.",
    imageSrc:
      "/images/resources/phone-number-intelligence/lending-and-credit.svg",
    altText: "Lending and Credit",
  };
  const employeeOnboarding5 = {
    headingLight: "Background Verification",
    headingBold: "",
    text: "Businesses can use Phone Number Intelligence APIs to run comprehensive background checks on users and adhere to regulatory compliance by accurately verifying their customers’ account details.",
    imageSrc:
      "/images/resources/phone-number-intelligence/background-verification.svg",
    altText: "Background Verification",
  };

  const howCanDecentroHelpData = {
    headingLight: "",
    headingBold: "Phone Number Intelligence API Suite for Your Business",
    tagline: "",
    bulletPointsHeader: "How Can Decentro Help?",
    bulletPoints: [
      {
        text: "Multiple APIs for instantly validating a user’s bank account via mobile number.",
      },
      {
        text: "Inbuilt approval flow and beneficiary name verification.",
      },
      {
        text: "Flexible API-based flow that can be embedded easily in your existing workflows.",
      },
      {
        text: "Verify accounts on the fly while maintaining the accuracy and speed of onboarding and transactions.",
      },
      {
        text: "Leverage multi-bank architecture in the backend so that unexpected downtimes, black swan events, or even volume spikes will not impact your business.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "For Developers",
        linkText: "API Documentation",
        link: "https://docs.decentro.tech/docs/overview?_gl=1*19nubfq*_ga*NDE4Njc0MjY2LjE3MTM0MjI4Mjc.*_ga_6NBW6WWGPQ*MTcxMzUyMjY1My44LjEuMTcxMzUyNzYyMi40OS4wLjA",
      },
    ],
  };

  const accordionData = [
    {
      query: "How does the UPI ID from the mobile number feature work?",
      solution:
        "The UPI ID from mobile number flow lets you quickly and securely validate users' details during onboarding by fetching their UPI ID and account holder name directly from their phone number.",
      bulletPoints: [],
    },
    {
      query:
        "What are the benefits of using UPI ID from the mobile number feature?",
      solution:
        "The UPI ID from mobile number feature offers instant authentication by checking the primary UPI ID linked with the user's phone number. This ensures a seamless onboarding experience, a high success rate, and the ability to cross-check the user's name at their respective bank for added verification accuracy.",
      bulletPoints: [],
    },
    {
      query:
        "Can I trust the accuracy of the retrieved UPI ID and account holder name?",
      solution:
        "Our system has been designed to fetch accurate information directly from the user's bank, providing reliable and validated details. You can also use the Advanced version of Mobile to VPA to authenticate the information with multiple data points such as IFSC codes and account type.",
    },
    {
      query:
        "Can I verify the user's name with their bank before proceeding with payouts?",
      solution:
        "Yes. The APIs allows you to cross-check the user's name with their bank, ensuring that payouts are only processed to intended and verified recipients.",
    },
    {
      query:
        "How secure is the user's phone number and banking information during the process?",
      solution:
        "We prioritise user security. All information is securely retrieved and encrypted, adhering to industry-leading data protection standards.",
    },
  ];

  const recommendedPagesData = [
    {
      title: "PAN Verification",
      description:
        "Initiate swift and reliable PAN verification to validate the identity of an individual or business in real time.",
      pageLink: "/resources/pan-verification-api",
      imageSrc: "/images/resources/pan-verification/banner.svg",
    },
    {
      title: "Employment Verification",
      description:
        "Real-time UAN Verification API to extract employment details of employees and verify EPFO details.",
      pageLink: "/resources/employment-verification-api",
      imageSrc: "/images/resources/employement-verification.svg",
    },
  ];

  const learnMoreData1 = {
    text: "",
    ctaButtonText: "View Product Guide",
    newTab: true,
    ctaButtonLink: "https://docs.decentro.tech/docs/bytes-mobile-to-vpa",
  };

  const textAndButtonBannerData1 = {
    text: "<br/><span>Got Questions?</span>",
    ctaButtonText: "Talk to Our Experts Now!",
    ctaButtonLink: requests.SIGNUP,
  };

  const textAndButtonBannerData2 = {
    text: "Robust and efficient APIs to <span>prevent fraud</span> before it strikes<br/>",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  return (
    <React.Fragment>
      <Head>
        <title>
          Phone Number Intelligence APIs for User Verification | Decentro
        </title>
        <link
          rel="canonical"
          href={urls.BASE_URL + urls.RESOURCES_PHONE_INTELLIGENCE}
        />
        <link
          rel="alternate"
          href={urls.BASE_URL + urls.RESOURCES_PHONE_INTELLIGENCE}
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Check out our guide on Phone Number Intelligence and get data points to verify your customer’s mobile numbers. Mitigate risks and accelerate onboarding. Get started today."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Phone Number Intelligence APIs for User Verification | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["phone-number-intelligence"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <InlineImageTextMap data={inlineImageTextMapData} id="methodology" />
        <div
          className={styles["special-info-section"]}
          id="needForPhoneNumberIntelligence"
        >
          <div className={styles["special-info-wrapper"]}>
            <h2>
              The Need For <span>Phone Number Intelligence API Suite</span>
            </h2>
            <p className={styles["special-info-description"]}>
              The primary purpose of a business deploying a Phone Number
              Intelligence-related API in their workflows is to ensure that:
              <br />
              <br />
              <p>The associated UPI VPA exists.</p>
              <p>
                To validate the account holder’s name directly from banking
                records.
              </p>
              <p>
                To validate if the bank account is active, i.e., the account is
                not frozen/closed and accepts credits.
              </p>
            </p>
            <TextAndButtonBannerTransparent data={learnMoreData1} />
          </div>
        </div>
        <div>
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
            </div>
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

export default PhoneNumberIntelligence;
