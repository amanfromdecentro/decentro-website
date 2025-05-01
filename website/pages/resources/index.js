import React from "react";
import Head from "next/head";
import requests from "../../requests";
import styles from "../../styles/page-styles/resources.module.scss";
import ProductBanner from "../../components/product-banner/product-banner";
import InlineImageAndParagraph from "../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import WhyDecentroComparison from "../../components/why-decentro-comparison/why-decentro-comparison";
import EmailRegBanner from "../../components/email-reg-banner/email-reg-banner";
import urls from "../../urls";
import Image from "next/image";
import RecommendedPages from "../../components/recommended-pages/recommended-pages";
import ResourcesBlocks from "../../components/resources-blocks/resources-blocks";
import TextAndButtonBanner from "../../components/text-and-button-banner/text-and-button-banner";

const Resources = () => {
  const bannerData = {
    heading: "<span class='highlighted-heading'>Resources</span>",
    tagline:
      "Learn in-depth about how various banking & financial APIs can empower your business along with quick info-nuggets on how these function.",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/resources.mp4",
    altText:
      "Learn in-depth about how various banking & financial APIs can empower your business along with quick info-nuggets on how these function.",
    titleText: "Resources",
    video: true,
    bannerBgPresent: true,
    bannerBgImageSrc: "/images/resources/D-bg.svg",
  };
  const resourcesGuideCKYC = {
    headingLight: "",
    headingBold: "CKYC",
    text: "Learn the essentials of Central KYC, or CKYC, and find out how your business can leverage CKYC APIs for financial simplicity, better customer experience, and better workflows.",
    imageSrc: "/images/resources/ckyc.svg",
    altText: "CKYC",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/ckyc-apis/",
  };
  const resourcesGuideGst = {
    headingLight: "",
    headingBold: "GST",
    text: "Enrich & augment your data for vendor financing, bill discounting, and more seamlessly while serving your SME customers and partners using our GST APIs.",
    imageSrc: "/images/resources/gst.svg",
    altText: "GST",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/goods-and-services-tax-gst-api/",
  };

  const resourcesGuideUpi = {
    headingLight: "",
    headingBold: "UPI Payment APIs",
    text: "Set up real-time payments & collections with UPI Collect or UPI Intent Flow and create a seamless cash flow for your business. Enable instant settlements for your customers, partners, or merchants/vendors using UPI APIs",
    imageSrc: "/images/resources/upi.svg",
    altText: "UPI",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/upi-apis/",
  };

  const resourcesGuideCreditBureau = {
    headingLight: "",
    headingBold: "Credit Bureau APIs",
    text: "Evaluate the creditworthiness of your customers before lending & minimize the risk of default using our Credit Bureau APIs.",
    imageSrc: "/images/resources/credit-bureau.svg",
    altText: "Credit Bureau APIs",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/credit-bureau-api/",
  };

  const resourcesGuideUpiAutopay = {
    headingLight: "",
    headingBold: "UPI AutoPay",
    text: "Get recurring E-Mandate enabled on your platform via UPI for payments such as bills, EMIs, OTT subscriptions, insurance, mutual funds, and others.",
    imageSrc: "/images/resources/upi-autopay.svg",
    altText: "UPI AutoPay APIs",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/upi-autopay-apis/",
  };

  const resourcesGuideEnach = {
    headingLight: "",
    headingBold: "e-NACH",
    text: "A digital mandate platform built by NPCI simplifies high-value and larger-volume recurring online transactions like EMIs, payables, premiums, etc.",
    imageSrc: "/images/resources/enach.svg",
    altText: "e-Nach APIs",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/enach-apis/",
  };

  const resourcesGuideDigilocker = {
    headingLight: "",
    headingBold: "DigiLocker",
    text: "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
    imageSrc: "/images/resources/digilocker.svg",
    altText: "DigiLocker APIs",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/digilocker-apis/",
  };

  const resourcesGuideUpiIDverification = {
    headingLight: "",
    headingBold: "UPI ID Verification",
    text: "Ensure a secure digital transaction by validating and verifying the UPI address.",
    imageSrc: "/images/resources/upi-id-verification.svg",
    altText: "UPI ID Verification APIs",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/upi-verification/",
  };

  const resourcesGuideBankAccountverification = {
    headingLight: "",
    headingBold: "Bank Account Validation API",
    text: "Initiate instant bank account verification through account numbers validation (and other details)",
    imageSrc: "/images/resources/bank-account-validation.svg",
    altText: "Bank Account Validation APIs",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/bank-account-validation-api/",
  };

  const resourcesGuideDigitalLending = {
    headingLight: "",
    headingBold: "Digital Lending Solution for NBFCs and Fintechs",
    text: "A complete lending solution inclusive of easy loan disbursement, re-payments, KYC verification and much more catering to both direct lending and co-lending models, in compliance with RBI digital lending guidelines.",
    imageSrc: "/images/resources/digital-lending.svg",
    altText: "Digital Lending Solution for NBFCs and Fintechs",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/digital-lending-solution/",
  };

  const resourcesGuideDebtCollection = {
    headingLight: "",
    headingBold: "Debt Collection Software",
    text: "An end to end complaint debt collection platform that sits across all collection touchpoints, in compliance with RBI guidelines.",
    imageSrc: "/images/resources/debt-collection.svg",
    altText: "Debt Collection Software",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/debt-collection-software/",
  };

  const resourcesGuideBulkPayouts = {
    headingLight: "",
    headingBold: "Bulk Payouts APIs",
    text: "Automate payout disbursal in bulk for vendors, franchisees, employees, and more",
    imageSrc: "/images/resources/bulk-payouts.svg",
    altText: "Bulk Payouts APIs",
    navigationLinkText: "Explore Now",
    navigationLink: "/resources/bulk-payouts/",
  };

  const resourcesGuidePANVerification = {
    headingLight: "",
    headingBold: "PAN Verification API",
    text: "Initiate swift and reliable PAN verification to validate the identity of an individual or business in real time",
    imageSrc: "/images/resources/pan-verification/banner.svg",
    altText: "PAN Verification API",
    navigationLinkText: "Explore Now",
    navigationLink: urls.RESOURCES_PAN_VERIFICATION,
  };
  const resourcesGuideAadhaarVerification = {
    headingLight: "",
    headingBold: "Aadhaar Verification API",
    text: "Conduct instant Aadhaar Verification for customers and onboard users seamlessly",
    imageSrc: "/images/resources/aadhaar-verification/banner.svg",
    altText: "Aadhaar Verification API",
    navigationLinkText: "Explore Now",
    navigationLink: urls.RESOURCES_AADHAAR_VERIFICATION,
  };
  const resourcesGuidePennyVerification = {
    headingLight: "",
    headingBold: "Penny Verification for Businesses",
    text: "Automate payout disbursal in bulk for vendors, franchisees, employees, and more",
    imageSrc: "/images/resources/penny-drop-verification/banner.svg",
    altText: "Penny Verification for Businesses",
    navigationLinkText: "Explore Now",
    navigationLink: urls.RESOURCES_PENNY_DROP_VERIFICATION,
  };

  const whyDecentroData = [
    { "Setup Fees": ["High (2K - 10K USD)", "Completely FREE"] },
    { Timelines: ["3-4 Months", "~ 2 Weeks"] },
    // { "Settlement Times": ["Atleast T-1 to T+2", "Real-time Settlements"] },
    {
      "Service Provider": [
        "High reliance on single service provider and bank",
        "Backend powered by multiple banks with switchability",
      ],
    },
    {
      "Customer Service": [
        "Turnaround time of 1-2 working days atleast",
        "Turnaround within 1-2 hours",
      ],
    },
    {
      "Scalability & Flexibility": [
        "Difficult to scale due to a rigid underlying structure",
        "Customizable APIs and seamless scalability",
      ],
    },
    {
      Advantages: [
        "",
        ["Unlimited rollover of unused API hits", "Global from The Get Go"],
      ],
    },
  ];

  const subscribeBoxText = {
    heading:
      "Wish To Get These Resources Promptly In Your Inbox? Consider It Done!",
    tagline: "Delivered Fortnightly. No Spam, Our Word!",
  };
  const recommendedPagesData = {
    image: "/images/icons/flow-active.svg",
    subheading: "Payment Collections and Settlement",
    resources: [
      {
        title: "BBPS APIs",
        description: "Fast and Secure Bill Collection System",
        pageLink: "/resources/bbps-apis/",
        imageSrc: "/images/resources/bbps/banner.svg",
      },
      {
        title: "Penny Drop Verification",
        description:
          "Initiate bank account verification to validate your customer's identity instantly.",
        pageLink: "/resources/penny-drop-verification-api",
        imageSrc: "/images/resources/penny-drop-verification/banner.svg",
      },
      {
        title: "UPI Autopay",
        description:
          "Get recurring E-Mandate enabled on your platform via UPI for payments such as bills, EMIs, OTT subscriptions, insurance, mutual funds, and others.",
        pageLink: "/resources/upi-autopay-apis",
        imageSrc: "/images/resources/upi-autopay.svg",
      },
      {
        title: "UPI Payment APIs",
        description:
          "Set up real-time payments & collections with UPI Collect or UPI Intent Flow and create a seamless cash flow for your business. Enable instant settlements for your customers, partners, or merchants/vendors using UPI APIs.",
        pageLink: "/resources/upi-apis",
        imageSrc: "/images/resources/upi.svg",
      },
      {
        title: "eNACH",
        description:
          "A digital mandate platform built by NPCI simplifies high-value and larger-volume recurring online transactions like EMIs, payables, premiums, etc.",
        pageLink: "/resources/enach-apis",
        imageSrc: "/images/resources/enach.svg",
      },
      {
        title: "Bulk Payout APIs",
        description:
          "An end to end-complaint debt collection solution that sits across all collection touch-points, in compliance with RBI guidelines.",
        pageLink: "/resources/bulk-payouts",
        imageSrc: "/images/resources/bulk-payouts.svg",
      },
      {
        title: "Debt Collections",
        description:
          "An end to end-complaint debt collection solution that sits across all collection touch-points, in compliance with RBI guidelines.",
        pageLink: "/resources/debt-collection-software",
        imageSrc: "/images/resources/debt-collection.svg",
      },
    ],
  };

  const recommendedPagesData2 = {
    image: "/images/icons/fabric-active.svg",
    subheading: "Banking as a Service Platform",
    resources: [
      {
        title: "Vendor Onboarding",
        description:
          "Fast, efficient, and secure verification and onboarding flow for your vendors.",
        pageLink: urls.RESOURCES_VENDOR_ONBOARDING,
        imageSrc:
          "/images/resources/vendor-onboarding/vendor-onboarding-hero-banner.svg",
      },
      {
        title: "Professional Verification",
        description:
          "Authenticate membership of Medical Doctors, Chartered Accountants, and Company Secretaries in NMC, ICAI and ICSI associations",
        pageLink: "/resources/professional-verification/",
        imageSrc:
          "/images/resources/professional-verification/professional-verification-banner.svg",
      },
      // {
      //   title: "Mobile to VPA",
      //   description:
      //     "Fetch and verify the UPI VPA, account holder’s name and bank account details using just a mobile number.",
      //   pageLink: "/resources/mobile-to-vpa",
      //   imageSrc: "/images/resources/mobile-to-vpa/mobile-to-vpa.svg",
      // },
      {
        title: "PAN Verification",
        description:
          "Initiate swift and reliable PAN verification to validate the identity of an individual or business in real time.",
        pageLink: "/resources/pan-verification-api",
        imageSrc: "/images/resources/pan-verification/banner.svg",
      },
      {
        title: "GST",
        description:
          "Enrich & augment your data for vendor financing, bill discounting, and more seamlessly while serving your SME customers and partners using our GST APIs.",
        pageLink: "/resources/goods-and-services-tax-gst-api",
        imageSrc: "/images/resources/gst.svg",
      },
      {
        title: "Credit Bureau",
        description:
          "Evaluate the creditworthiness of your customers before lending & minimize the risk of default using our Credit Bureau APIs.",
        pageLink: "/resources/credit-bureau-api",
        imageSrc: "/images/resources/credit-bureau.svg",
      },
      {
        title: "Employment Verification",
        description:
          "Real-time UAN Verification API to extract employment details of the employee and verify UAN ID and EPFO Details.",
        pageLink: "/resources/employment-verification-api",
        imageSrc: "/images/resources/employee-verification/banner.svg",
      },
      {
        title: "Phone Number Intelligence",
        description:
          "Find, verify, and fetch multiple data points associated with a mobile number, including the Full Name, UPI ID, IFSC code, and more.",
        pageLink: "/resources/phone-number-intelligence",
        imageSrc:
          "/images/resources/phone-number-intelligence/phone-number-intelligence.svg",
      },
      {
        title: "Bank Account Validation",
        description:
          "Initiate instant bank account verification through account numbers validation (and other details)",
        pageLink: "/resources/bank-account-validation-api",
        imageSrc: "/images/resources/bank-account-validation.svg",
      },
      {
        title: "DigiLocker",
        description:
          "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
        pageLink: "/resources/digilocker-apis",
        imageSrc: "/images/resources/digilocker.svg",
      },
      {
        title: "Aadhaar Verification",
        description:
          "Conduct instant Aadhaar Verification for customers and onboard users seamlessly",
        pageLink: "/resources/aadhaar-verification",
        imageSrc: "/images/resources/aadhaar-verification/banner.svg",
      },
      {
        title: "CKYC",
        description:
          "Learn the essentials of Central KYC, or CKYC, and find out how your business can leverage CKYC APIs for financial simplicity, better customer experience, and robust workflows.",
        pageLink: "/resources/ckyc-apis",
        imageSrc: "/images/resources/ckyc.svg",
      },
      {
        title: "MSME Verification",
        description:
          "Verify your vendors’ MSME status to ensure regulatory compliance and strengthen vendor management",
        pageLink: urls.RESOURCES_MSME_VERIFICATION,
        imageSrc: "https://strapi.decentro.tech/uploads/MSME_Verification_Banner_2f0efa62d1.svg",
      },
      {
        title: "Prefill APIs",
        description:
          "Streamline User Onboarding with Verified Data",
        pageLink: urls.RESOURCES_PREFILL_APIS,
        imageSrc: "/images/resources/prefill-apis/Prefill-API-Hero-Banner.svg",
      },
    ],
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time, resources, & launch <span className="header-section-highlighted">10x faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  return (
    <React.Fragment>
      <Head>
        <title>Resources - Pocket Guides & API Handbooks | Decentro</title>
        <meta
          name="description"
          content="Access detailed guides and insights on banking & financial APIs to drive innovation and streamline your business processes."
        />
        <link
          rel="alternate"
          href="https://decentro.tech/resources"
          hreflang="en-IN"
        />
      </Head>
      <div className={styles["resources"]}>
        <ProductBanner data={bannerData} resourcePg={true} />

        <ResourcesBlocks data={recommendedPagesData} />
        <ResourcesBlocks data={recommendedPagesData2} />
        <TextAndButtonBanner data={textAndButtonBannerData} />

        {/* <div className={styles["resources-guide"]}>
          <h2>
            Pocket Guides &{" "}
            <span class={styles["highlighted-subsection-header"]}>
              API-Handbooks
            </span>
          </h2>
          <div className={styles["resources-guide-content"]}>
            <InlineImageAndParagraph
              data={resourcesGuideCKYC}
              reverse={false}
            />
            <InlineImageAndParagraph data={resourcesGuideGst} reverse={true} />
            <InlineImageAndParagraph data={resourcesGuideUpi} reverse={false} />
            <InlineImageAndParagraph
              data={resourcesGuideCreditBureau}
              reverse={true}
            />
            <InlineImageAndParagraph
              data={resourcesGuideUpiAutopay}
              reverse={false}
            />
            <InlineImageAndParagraph
              data={resourcesGuideEnach}
              reverse={true}
            />
            <InlineImageAndParagraph
              data={resourcesGuideDigilocker}
              reverse={false}
            />
            <InlineImageAndParagraph
              data={resourcesGuideUpiIDverification}
              reverse={true}
            />
            <InlineImageAndParagraph
              data={resourcesGuideBankAccountverification}
              reverse={false}
            />
            <InlineImageAndParagraph
              data={resourcesGuideDigitalLending}
              reverse={false}
            />
            <InlineImageAndParagraph
              data={resourcesGuideDebtCollection}
              reverse={true}
            />
            <InlineImageAndParagraph
              data={resourcesGuideBulkPayouts}
              reverse={false}
            />
            <InlineImageAndParagraph
              data={resourcesGuidePANVerification}
              reverse={true}
            />
            <InlineImageAndParagraph
              data={resourcesGuideAadhaarVerification}
              reverse={true}
            />
            <InlineImageAndParagraph
              data={resourcesGuidePennyVerification}
              reverse={false}
            />
          </div>
        </div> */}
        <WhyDecentroComparison data={whyDecentroData} />
        {/* <EmailRegBanner data={subscribeBoxText} /> */}
      </div>
    </React.Fragment>
  );
};

export default Resources;
