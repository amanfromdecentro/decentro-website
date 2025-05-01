import React from "react";
import Head from "next/head";
import styles from "../../../styles/page-styles/goods-and-services-tax-gst-api.module.scss";
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

function Gst() {
  const bannerData = {
    heading: "<span class='highlighted-heading'>GST APIs</span>",
    tagline:
      "Enrich & augment your data for vendor financing, bill discounting, and more seamlessly while serving your SME customers and partners using our GST APIs.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/gst.svg",
    titleText: "APIs for GST",
    altText: "APIs for GST from Decentro to help businesses operate better.",
    DBackground: true,
  };

  const inlineImageAndParagraphData = {
    headingLight: "What Is",
    headingBold: " GST?",
    extraHeadingText: "How Does it Work?",
    text:
      "GST stands for Goods and Services Tax. Introduced on 1st July 2017, it is an indirect tax that replaced the existing myriad of taxes in the country, such as Value Added Tax(VAT), Service Tax, Purchase Tax, Excise Duty, and more!" +
      "<br/><br/>Until the introduction of GST, different states in India levied variable taxes according to their policies. The Govt of India introduced GST to create a uniform, central taxing mechanism for businesses. Since then, businesses across the length & breadth of the country have registered with GSTIN to function.",
    imageSrc: "/images/resources/gst/what-is-gst-goods-and-services-tax.svg",
    altText: "Learn about what GST is and how does it work in India.",
    titleText: "What is GST",
  };

  const inlineImageAndParagraphData1 = {
    headingLight: "What Is",
    headingBold: " GSTIN?",
    text:
      "GSTIN, or Goods and Services Tax Identification Number, refers to a 15-digit unique alphanumeric code that is assigned to a business for tax purposes. GSTIN replaced the Tax Identification Number[TIN] that was previously allotted to businesses under the VAT system." +
      "<br/><br/>The GST council maintains a data-rich repository of GST data that specific platforms can access through APIs known as GST Suvidha Providers (GSPs). Businesses can leverage the APIs exposed by the GSTIN for various use cases spanning lending, logistics, payments, etc. These include:",
    bulletPointsText: [
      "<span>Public APIs</span>&nbsp; that can be used by anyone and require no consent",
      "<span>Consent APIs</span>&nbsp; that provide confidential information and require consent",
    ],
    imageSrc: "/images/resources/gst/what-is-gstin-decentro.svg",
    altText: "Learn about what GSTIN is and how does it work in India.",
    titleText: "What is GSTIN",
  };

  const inlineImageAndParagraphData2 = {
    headingLight: "What is the Structure of",
    headingBold: " GSTIN?",
    text: "GSTIN has been uniquely constructed using a combination of factors. Let’s understand it using an example.",
    bulletPointsText: [
      "<span>1st-2nd: State code;</span> each state has its own custom code. For example, Delhi has 07 while Karnataka has 29.",
      "<span>3rd-12th: PAN</span> of the person who pays the tax",
      "<span>13th: Entity/Registration Number.</span> Refers to the number of registrations in the state of the taxpayer who pays the GST. If they register once, it’s 1. If the same legal entity registers again, it’s 2.",
      "<span>14th: ‘Z’</span> by default",
      "<span>15th: Check code</span> that’s alphanumeric",
    ],
    imageSrc: "/images/resources/gst/structure-of-gstin-decentro.png",
    altText: "Learn about the structure of GSTIN with an example",
    titleText: "Structure of GSTIN",
  };

  const useCasesData = {
    heading:
      "Why <span>GST APIs</span> are a <span>Must</span> For Your Business",
    tagline: "",
    block1: [
      {
        heading: "",
        paragraph:
          "Reduced instances of fraud with the need to sync with PAN during registration.",
        imageSrc: "/images/resources/gst/fraud.svg",
      },
      {
        heading: "",
        paragraph: "Uniform tax format that is transparent across the country",
        imageSrc: "/images/resources/gst/uniform-tax.svg",
      },
      {
        heading: "",
        paragraph: "Efficient consignment & goods tracking with e-way bills",
        imageSrc: "/images/resources/gst/invoice.svg",
      },
      {
        heading: "",
        paragraph: "Ease of bookkeeping transactions and reconciling them.",
        imageSrc: "/images/resources/gst/bookkeep.svg",
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

  const howDecentroEmpowers1 = {
    headingLight: "GSTIN Validation",
    headingBold: "",
    text: "Access the GSTIN repository and validate the GSTIN of your customers easily. Fetch associated details such as filing date, filing type, and more. Pre-fill all info, enhance the user experience, and reduce the drop-offs using Decentro’s Validate GSTIN KYC API.",
    imageSrc: "/images/resources/gst/gstin-validation-api-decentro.png",
    altText: "Validate GSTIN using Decentro’s APIs",
    titleText: "GSTIN Validation APIs",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-business-verification#2-gstin",
    CTAButtonText: "View Product Guide",
  };

  const howDecentroEmpowers3 = {
    headingLight: "GSTIN Detailed",
    headingBold: "",
    text: "Provide detailed information for GSTIN documents and a downloadable link to the PDF file containing the data returned.",
    imageSrc: "/images/resources/gst/gst-apis-e-way-bills-decentro.png",
    altText:
      "Retrieve E-way bills from the GSTIN portal using Decentro’s GST APIs",
    titleText: " GST APIS for E-way Bills",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-business-verification?_gl=1*1xuu263*_ga*NDQ0Mjg1MDAxLjE3MTkzODY5OTE.*_ga_6NBW6WWGPQ*MTcxOTQwMzgyOS41LjEuMTcxOTQwNDE3Ni42MC4wLjA.#2-gstin",
    CTAButtonText: "View Product Guide",
  };

  const howDecentroEmpowers4 = {
    headingLight: "GST Returns",
    headingBold: "",
    text: "Analyze the creditworthiness of a business by accessing filling information spanning GSTR1, GSTR3B, and GSTR2A, with just a click.",
    imageSrc: "/images/resources/gst/apis-for-gst-returns-decentro.png",
    altText: "Analyze creditworthiness of businesses using GST APIs.",
    titleText: "GST Returns",
    CTAButtonLink: "https://docs.decentro.tech/docs/kyc-faqs",
    CTAButtonText: "View Product Guide",
  };

  const bonusFeature = {
    headingLight: "PAN to GSTIN",
    headingBold: "",
    text: "Seamlessly convert and validate PAN (Permanent Account Number) information into GSTIN (Goods and Services Tax Identification Number) format.",
    imageSrc: "/images/resources/gst/pan-gstin.svg",
    altText: "PAN to GSTIN",
    titleText: "PAN to GSTIN",
    CTAButtonLink:
      "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-business-verification",
    CTAButtonText: "View Product Guide",
  };

  const howCanDecentroHelpData = {
    headingLight: "GST For Your Businesss ",
    headingBold: "- How Can Decentro Help",
    tagline:
      "Decentro’s API banking platform has GST APIs to help businesses like yours speed up customer onboarding time by 95% and provide a seamless experience to your customers, partners, and vendors!",
    bulletPointsHeader: "Why Decentro’s APIs for GST?",
    bulletPoints: [
      {
        text: "Leverage a single API Integration to access multiple GST data.",
      },
      {
        text: "Connect with multiple GST providers that power Decentro’s backend. The multi-provider switchability feature ensures a seamless, uninterrupted operation for your business during downtimes or unexpected events.",
      },
      { text: "Retrieve GST data with just a few clicks." },
      {
        text: "Onboard users via messaging channels such as WhatsApp with Conversational Banking. Assess creditworthiness with extensive background checks via <a class='bullet-points-link bullet-points-link-border' href='https://decentro.tech/products/kyc-onboarding/' target='_blank'>KYC</a> & <a class='bullet-points-link bullet-points-link-border' href='https://decentro.tech/resources/ckyc-apis/' target='_blank'>CKYC APIs</a>.",
      },
      {
        text: "Reduce overhead expenditures significantly for user verification with a minimal cost for each CKYC API hit.",
      },
    ],
    textInBoxList: [
      {
        textInBox: "Access our Product Guide",
        linkText: "API Documentation",
        link:
          "https://docs.decentro.tech/docs" +
          encodeURI(utmtags.DEVELOPER_DOCS_GST_API_BTN),
      },
    ],
  };

  const textAndButtonBannerData1 = {
    text: "Streamline your operations, enrich data repositories, & engage with customers, all with compliance!",
    ctaButtonText: "Sign up",
    newTab: false,
    ctaButtonLink: requests.SIGNUP,
  };

  const tableOfContentsData = [
    { text: "What is GST? How Does it Work?", id: "whatIsGst" },
    { text: "What is GSTIN?", id: "whatIsGstin" },
    { text: "What is the Structure of GSTIN?", id: "structureOfGstin" },
    {
      text: "Why GST APIs are a Must For Your Business?",
      id: "gstApisforBusiness",
    },
    {
      text: "GST APIs: How Can Decentro Empower Your Business",
      id: "howCanDecentroEmpower",
    },
    {
      text: "Bonus Feature - ID Converters",
      id: "bonusFeature",
    },
    { text: "Why Decentro’s APIs for GST?", id: "decentroGstApis" },
  ];

  const recommendedPagesData = [
    {
      title: "CKYC",
      description:
        "Learn the essentials of Central KYC, or CKYC, and find out how your business can leverage CKYC APIs for financial simplicity, better customer experience, and robust workflows.",
      pageLink: "/resources/ckyc-apis/",
      imageSrc: "/images/resources/ckyc.svg",
    },
    {
      title: "eNACH",
      description:
        "A digital mandate platform built by NPCI simplifies high-value and larger-volume recurring online transactions like EMIs, payables, premiums, etc.",
      pageLink: "/resources/enach-apis/",
      imageSrc: "/images/resources/enach.svg",
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          GST APIs To Validate GSTIN | E-Way & E-Invoice Bills APIs | Decentro
        </title>
        <link
          rel="canonical"
          href="https://decentro.tech/resources/goods-and-services-tax-gst-api"
        />
        <meta
          name="description"
          content="Fetch crucial information from the GST ecosystem with single API integration. Validate GSTIN, fetch E-Way & E-Invoice Bills using Decentro’s GST APIs!"
        />
        <meta name="keywords" content="GST APIs" />
        <meta
          property="og:title"
          content="GST APIs To Validate GSTIN | E-Way & E-Invoice Bills APIs | Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["gst"]}>
        <ProductBanner data={bannerData} />
        <TableOfContents data={tableOfContentsData} />
        <div className={styles["gst-details"]}>
          <InlineImageAndParagraph
            id="whatIsGst"
            data={inlineImageAndParagraphData}
            reverse={false}
          />
          <InlineImageAndParagraph
            id="whatIsGstin"
            data={inlineImageAndParagraphData1}
            reverse={true}
          />
          <InlineImageAndParagraph
            id="structureOfGstin"
            data={inlineImageAndParagraphData2}
            reverse={false}
          />
        </div>
        <UseCases id="gstApisforBusiness" data={useCasesData} />
        <TextAndButtonBannerTransparent data={textAndButtonBannerData} />
        <div
          className={styles["how-decentro-can-empower"]}
          id="howCanDecentroEmpower"
        >
          <h2>
            <span>GST APIs:</span> How Can Decentro Empower Your Business
          </h2>
          <p>
            Decentro’s APIs for GST help your business to fetch and analyze the
            following data points with ease.
          </p>
          <div className={styles["empower-content"]}>
            <InlineImageAndParagraph
              data={howDecentroEmpowers1}
              reverse={false}
              boldBlack
            />
            <InlineImageAndParagraph
              data={howDecentroEmpowers3}
              reverse={true}
              boldBlack
            />
            <InlineImageAndParagraph
              data={howDecentroEmpowers4}
              reverse={false}
              boldBlack
            />
          </div>
        </div>
        <div className={styles["how-decentro-can-empower"]} id="bonusFeature">
          <h2>
            Bonus Feature - <span>ID Converters</span>
          </h2>

          <div className={styles["empower-content"]}>
            <InlineImageAndParagraph
              data={bonusFeature}
              reverse={false}
              boldBlack
            />
          </div>
        </div>
        <BulletPointsAndTextBlock
          id="decentroGstApis"
          data={howCanDecentroHelpData}
        />
        <div className={styles["signup-section"]}>
          <TextAndButtonBannerTransparent data={textAndButtonBannerData1} />
        </div>
        <RecommendedPages data={recommendedPagesData} />
      </div>
    </React.Fragment>
  );
}

export default Gst;
