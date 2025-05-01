import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/employee-verification.module.scss";
import ProductBanner from "../../../components/product-banner/product-banner";
import requests from "../../../requests";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import UseCases from "../../../components/use-cases/use-cases";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import IndustryUseCases from "../../../components/industry-usecases/industry-usecases";
import DescriptiveItemList from "../../../components/descriptive-item-list/descriptive-item-list";
import ResourcesMethodology from "../../../components/resources-methodology/resources-methodology";
import WhyDecentro from "../../../components/why-decentro/why-decentro";
import ResourcesSectors from "../../../components/resources-sectors/resources-sectors";

function EmployeeVerification() {
  const bannerData = {
    heading: "<span class='highlighted-heading'>Employment Verification</span>",
    tagline:
      "Real-time UAN  Verification API to extract employment details of employees and verify EPFO details.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/employee-verification/banner.svg",
    altText: "Aadhaar Verification API",
    DBackground: true,
  };

  const useCasesData = {
    heading: "Key Features Of <span>Employment Verification API</span>",
    tagline: "",
    block1: [
      {
        heading: "Seamless &<br/>Integration",
        paragraph:
          "Incorporate the Employee Verification API into your systems, seamlessly integrating UAN verification functionality.",
        imageSrc: "/images/resources/aadhaar-verification/integration.svg",
      },
      {
        heading: "Real-time &<br/>Aadhaar verification",
        paragraph:
          "Instantly validates UAN details in real time, ensuring accurate and up-to-date employee information.",
        imageSrc: "/images/resources/aadhaar-verification/clipboard.svg",
      },
      {
        heading: "Comprehensive &<br/>EPFO Verification",
        paragraph:
          "Thorough EPFO (Employee Provident Fund Organization) verification checks, validating UAN, name, and employer details.",
        imageSrc: "/images/resources/aadhaar-verification/shield.svg",
      },
    ],
    block1extra: [
      {
        heading: "Enhanced &<br/>Accuracy",
        paragraph:
          "Verify the employee’s data directly with UAN ID to ensure accuracy and success rates close to 100%.",
        imageSrc: "/images/resources/aadhaar-verification/accurate-details.svg",
      },
      {
        heading: "Scalable &<br/>and Reliable",
        paragraph:
          "Scalable and reliable infrastructure enables handling verification requests of any volume without compromising performance.",
        imageSrc: "/images/resources/aadhaar-verification/line.svg",
      },
      {
        heading: "Robust &<br/>Security Measures",
        paragraph:
          "Robust encryption protocols to protect sensitive employee data ensuring the confidentiality and integrity of information.",
        imageSrc: "/images/resources/aadhaar-verification/fraud.svg",
      },
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

  const howCanDecentroHelpData = {
    headingLight: "Employee Verification for Your Business",
    headingBold: "- How Can Decentro Help",
    tagline: "",
    bulletPointsHeader: "Why Decentro’s APIs for Employee Verification?",
    bulletPoints: [
      {
        text: "Enables verification across vast industries with tested results.",
      },
      {
        text: "Flexible API-based flow that can be embedded easily in your existing workflows.",
      },
      {
        text: "Access to detailed Universal Account Numbers (UANs) reports, employment history, and EPF details.",
      },
      {
        text: "Verify on the fly while maintaining the accuracy and speed of onboarding.",
      },
      {
        text: "Leverage multi-bank architecture in the backend so that unexpected downtimes, black swan events, or volume spikes will not impact your business.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "For Developers",
        linkText: "API Documentation",
        link: "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-employment-verification",
      },
    ],
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

  const tableOfContentsData = [
    {
      text: "Employment Verification for Businesses",
      id: "employmentVerificationIntro",
    },
    {
      text: "Methodology",
      id: "methodSection",
    },
    {
      text: "How Can Employee Verification Help Your Business",
      id: "typesSection",
    },
    {
      text: "Key features of Employment Verification API",
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

  const recommendedPagesData = [
    {
      title: "PAN Verification",
      description:
        "Initiate swift and reliable PAN verification to validate the identity of an individual or business in real time. ",
      pageLink: "/resources/pan-verification-api",
      imageSrc: "/images/resources/pan-verification/banner.svg",
    },
    {
      title: "Digilocker",
      description:
        "Remove the dependency on physical documents and power the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/goods-and-services-tax-gst-api/",
      imageSrc: "/images/resources/gst.svg",
    },
  ];

  const accordionData = [
    {
      query: "What is EPFO API?",
      solution:
        "EPFO API helps verify and confirm employment evidence. It allows businesses to monitor EPF information and carry out extensive inquiries into establishments, UAN specifics, and individuals' employment backgrounds.",
      bulletPoints: [],
    },
    {
      query: "Which industries can use EPFO API?",
      solution:
        "The lending and banking industries primarily use the EPFO API to determine an individual’s financial health. It can also be used for underwriting and in other sectors.",
      bulletPoints: [],
    },
    {
      query: "How does EPFO API simplify the employment verification process?",
      solution:
        "The EPFO API simplifies employment verification by offering a straightforward method to confirm an establishment's authenticity. By utilising the EPFO API, organisations can verify the establishment code, ensuring they only hire individuals with legitimate claims and are free from fraudulent activities.",
    },
  ];

  const inlineImageAndParagraphData = {
    headingLight: "",
    headingBold: "",
    extraHeadingText: "<span>Employment Verification</span> for Businesses",
    text: "Employment verification serves several crucial purposes for businesses, including ensuring the workforce’s integrity, maintaining compliance with regulations, and mitigating risks.<br/><br/>Decentro’s Employee Verification API extracts the employment details of the employees using the UAN number and verifies all the information, such as employment history and date of joining/leaving.<br/><br/>It also enables businesses to gather an individual’s EPFO (Employees Provident Fund Organization) details, providing a swift and non-disruptive method for confirming whether an individual was employed at an organisation during the specified time frame with unparalleled efficiency and accuracy.",
    imageSrc:
      "/images/resources/employee-verification/employment-verification.svg",
    altText: "Aadhaar Verification API",
    titleText: "Aadhaar Verification API",
  };
  const inlineImageAndParagraphData1 = {
    headingLight: "What is ",
    headingBold: "Aadhaar Verification API?",
    extraHeadingText: "",
    text: "The Aadhaar Verification API is a powerful tool designed to confirm the authenticity of an Aadhaar card without having to ask the customer for the document or having to verify the same using an offline process. All that is required is the Aadhaar number of the individual to take the verification forward.",
    imageSrc:
      "/images/resources/aadhaar-verification/aadhaar-verification-api.svg",
    altText: "Aadhaar Verification API",
    titleText: "Aadhaar Verification API",
  };
  const typesData = {
    heading:
      "How Can <span class='highlighted-subsection-header'>Employee Verification </span>Help Your Business",
    tagline: "",
    headingStyleThemeBlue: true,
    items: [
      // {
      //   imageSrc:
      //     "/images/resources/aadhaar-verification/basic-aadhaar-kyc.svg",
      //   title: "Real-time EPFO Check",
      //   description:
      //     "Simplify and accelerate your employee verification workflows with the real-time data retrieval of Employee Verification API.",
      // },
      {
        imageSrc: "/images/resources/employee-verification/user-data.svg",
        title: "Ensure Genuine Employment and Security",
        description:
          "Partner with legitimate individuals who have/are related to a different/claimed employer currently or in the past, right at the source.",
      },
      {
        imageSrc: "/images/resources/employee-verification/invoice.svg",
        title: "Comprehensive Employee Data Access",
        description:
          "Enhance HR operations with verified employee data, including UANs, employment history, and EPF details.",
      },
      {
        imageSrc: "/images/resources/employee-verification/employee.svg",
        title: "Determine Individual’s Financial Stability",
        description:
          "Check the borrower’s provident fund (PF) contributions to verify their employment status, a crucial factor lenders consider in loan approval processes.",
      },
    ],
  };

  const methodData = [
    {
      imageSrc: "/images/icons/signup.svg",
      header: "Step 1",
      description: "User inputs UAN and password.",
    },
    {
      imageSrc: "/images/resources/employee-verification/credentials.svg",
      header: "Step 2",
      description: "Validate the entered credentials for authentication.",
    },
    {
      imageSrc: "/images/resources/employee-verification/integrate.svg",
      header: "Step 3",
      description: "Upon successful validation, EPFO data is fetched.",
    },
  ];

  const employeeOnboarding = {
    headingLight: "Employee Onboarding",
    headingBold: "",
    text: "Employee verification API streamlines employee onboarding by automating UAN verification, ensuring accurate data entry into payroll systems and compliance with labour regulations.",
    imageSrc: "/images/resources/employee-verification/employee-onboarding.svg",
    altText: "Employee Onboarding",
  };
  const employeeOnboarding2 = {
    headingLight: "Hiring Process Automation",
    headingBold: "",
    text: "Integrating Employee Verification APIs into HR software automates hiring phase verifications, confirming job applicants’ information accuracy, including employment history, titles, dates, and salaries.",
    imageSrc: "/images/resources/employee-verification/hiring-automation.svg",
    altText: "Hiring Process Automation",
  };
  const employeeOnboarding3 = {
    headingLight: "Provident Fund Management",
    headingBold: "",
    text: "The API simplifies provident fund administration by validating UAN details and facilitating seamless fund contributions, withdrawals, and transfers.",
    imageSrc: "/images/resources/employee-verification/pf-management.svg",
    altText: "Provident Fund Management",
  };
  const employeeOnboarding4 = {
    headingLight: "Loan Processing",
    headingBold: "",
    text: "Financial Institutions can use Employment verification APIs to verify loan applicants’ employment and income details, aiding in assessing their creditworthiness and reducing the risk of default.",
    imageSrc: "/images/resources/employee-verification/loan-process.svg",
    altText: "Loan Processing",
  };
  const employeeOnboarding5 = {
    headingLight: "Identity Verification for Account Opening",
    headingBold: "",
    text: "Banks and fintech companies can use Employment Verification APIs to verify customers’ identities during the account opening, enhancing security and compliance with KYC (Know Your Customer) regulations.",
    imageSrc: "/images/resources/employee-verification/id-verification.svg",
    altText: "Identity Verification for Account Opening",
  };

  const learnMoreData = {
    text: "",
    ctaButtonText: "View Product Guide",
    newTab: true,
    ctaButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-employment-verification",
  };

  return (
    <React.Fragment>
      <Head>
        <title>
          Employment Verification API | UAN Verification for Businesses
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/employment-verification-api/"
        />
        <meta
          name="description"
          content="Streamline employee verification with Decentro’s real-time UAN checks & EPFO validation. Ensure compliance & mitigate risks. Get started today."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Employment Verification API | UAN Verification for Businesses"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["employee-verification-apis"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div>
          <InlineImageAndParagraph
            id="employmentVerificationIntro"
            data={inlineImageAndParagraphData}
            reverse={false}
          />
          <div
            className={styles["leverage-verifiction-api"]}
            id="methodSection"
          >
            <h2>
              <span>Methodology</span>
            </h2>
            <p>
              A consent-driven employee verification process that validates the
              employee details using in the following steps.
            </p>
            <div className={styles["leverage-verifiction-api-content"]}>
              <ResourcesMethodology data={methodData} itemCount={4} />
            </div>
          </div>
          <DescriptiveItemList data={typesData} id="typesSection" />
          <TextAndButtonBannerTransparent data={learnMoreData} />
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

export default EmployeeVerification;
