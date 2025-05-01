import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import ProductBanner from "../../../components/product-banner/product-banner";
import dynamic from "next/dynamic";

const UseCases = dynamic(
  () => import("../../../components/use-cases/use-cases"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const BulletPointsAndTextBlock = dynamic(
  () =>
    import(
      "../../../components/bullet-points-text-block/bullet-points-text-block"
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);

const RecommendedPages = dynamic(
  () => import("../../../components/recommended-pages/recommended-pages"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const TextAndButtonBannerTransparent = dynamic(
  () =>
    import(
      "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent"
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);

const InlineImageTextMap = dynamic(
  () =>
    import("../../../components/inline-image-text-map/inline-image-text-map"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const ResourcesMethodology = dynamic(
  () =>
    import("../../../components/resources-methodology/resources-methodology"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const TableOfContents = dynamic(
  () => import("../../../components/table-of-contents/table-of-contents"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const InlineImageAndParagraph = dynamic(
  () =>
    import(
      "../../../components/inline-image-and-paragraph/inline-image-and-paragraph"
    ),
  {
    loading: () => <p>Loading...</p>,
  }
);

import requests from "../../../requests";
import styles from "../../../styles/page-styles/phone-number-intelligence.module.scss";

import { useRouter } from "next/router";
import Head from "next/head";
import HeadingAndDescriptiveImage from "../../../components/heading-and-descriptive-image/heading-and-descriptive-image";
import FeatureDescriptiveTextBlock from "../../../components/feature-descriptive-text-block/feature-descriptive-text-block";
import FaqAccordion from "../../../components/faq-accordion/faq-accordion";
import MultiStepsDescription from "../../../components/multi-steps-description/multi-steps-description";
import ReactMarkdown from "react-markdown";
import DescriptiveItemList from "../../../components/descriptive-item-list/descriptive-item-list";
import DescriptiveItemListFour from "../../../components/descriptive-item-list-four/descriptive-item-list-four";
import urls from "../../../urls";

const MSMEVerification = () => {
  const [loading, setLoading] = useState(true);

  const [metaData, setMetaData] = useState({
    metaTitle: "MSME Verification APIs | Udyam, GST and Address Verification",
    canonical: urls.RESOURCES_MSME_VERIFICATION,
    metaDescription:
      "Protect your business from fraud by verifying MSMEs through Udyam, GST and address checks. Fast, reliable, and easy integration with Decentro's MSME Verification APIs.",
    metaKeywords: "",
    ogTitle: "MSME Verification APIs | Udyam, GST and Address Verification",
    ogImage: "",
  });

  const [bannerData, setBannerData] = useState({
    heading: "<span class='highlighted-heading'>MSME Verification</span>",
    tagline:
      "Verify your vendors’ MSME status to ensure regulatory compliance and strengthen vendor management",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc:
      "https://strapi.decentro.tech/uploads/MSME_Verification_Banner_2f0efa62d1.svg",
    altText: "MSME Verification",
    DBackground: true,
  });
  const [tableOfContentsData, setTableOfContentsData] = useState([
    { text: "What is MSME Verification?", id: "introduction" },
    {
      text: "Why is MSME Verification Important?",
      id: "needSection",
    },
    {
      text: "Key Documents for MSME Verification",
      id: "types",
    },
    {
      text: "How Can MSMEs Register for Their KYC Documentation?",
      id: "methodology",
    },
    {
      text: "How Can MSME Verification Help Your Business",
      id: "msmeBusiness",
    },
    {
      text: "How Can MSME Verification Help Vendors",
      id: "msmeVendors",
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
      text: "FAQs",
      id: "commonlyAskedQuestions",
    },
  ]);
  const [useCasesData, setUseCasesData] = useState({
    headingLight: "Key",
    headingBold: "Features",
    tagline: "",
    block1: [
      {
        heading: "Comprehensive<br/>Verification",
        paragraph:
          "Verify memberships with prestigious organisations like NMC, ICAI, and ICSI.",
        imageSrc: "/images/resources/upi-autopay/custom-upi-handle.svg",
      },
      {
        heading: "Effortless Integration",
        paragraph:
          "Simple API endpoints for seamless integration into existing systems.",
        imageSrc: "/images/resources/upi-autopay/authentication.svg",
      },
      {
        heading: "Secure<br/>Transactions",
        paragraph:
          "Conduct secure verification transactions, ensuring data confidentiality.",
        imageSrc: "/images/resources/upi-autopay/flexible-debits.svg",
      },
    ],
    block1extra: [
      {
        heading: "Customisable<br/>Purpose",
        paragraph:
          "Tailor the verification process to suit specific business needs.",
        imageSrc: "/images/resources/upi-autopay/recurring-payments.svg",
      },
      {
        heading: "Real-Time<br/>Verification",
        paragraph:
          "Obtain instant verification results to make timely decisions.",
        imageSrc: "/images/resources/upi-autopay/pre-debit-notification.svg",
      },
      {
        heading: "Scalable<br/> Solution",
        paragraph:
          "Scale verification processes effortlessly to meet growing demands.",
        imageSrc: "/images/resources/upi-autopay/real-time-updates.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
  });
  const [inlineImageAndParagraphData, setInlineImageAndParagraphData] =
    useState([
      {
        headingLight: "Financial Services",
        headingBold: "",
        text: "Verify professional memberships for loan or insurance applicants to ensure qualifications and adherence to industry standards. This reduces fraud risk and improves the reliability of your financial services.",
        imageSrc:
          "/images/resources/professional-verification/financial-services.svg",
        altText: "Financial Services",
      },
      {
        headingLight: "Recruitment",
        headingBold: "",
        text: "Streamline recruitment by verifying candidates’ qualifications and memberships. Confirm professional credentials to ensure only the most qualified and trustworthy individuals join your organisation, enhancing workforce quality.",
        imageSrc:
          "/images/resources/professional-verification/hiring-automation.svg",
        altText: "Recruitment",
      },
      {
        headingLight: "Regulatory Compliance",
        headingBold: "",
        text: "Verify the professional credentials of individuals in regulated activities to ensure compliance with regulatory requirements. This maintains industry standards and legal adherence and safeguards your organisation against penalties and reputational damage.",
        imageSrc: "/images/resources/professional-verification/regulatory.svg",
        altText: "Regulatory Compliance",
      },
      {
        headingLight: "Healthcare Providers",
        headingBold: "",
        text: "Verify medical professionals’ credentials before granting hospital privileges or network admission. This ensures adherence to patient care standards, safeguards the institution’s reputation, and ensures high-quality medical services.",
        imageSrc: "/images/resources/professional-verification/healthcare.svg",
        altText: "Healthcare Providers",
      },
      {
        headingLight: "Corporate Governance",
        headingBold: "",
        text: "Verify the professional memberships of board members, executives, or consultants to ensure they have the necessary qualifications. This helps make informed decisions, reduces the risk of mismanagement, and ensures capable strategic direction for the company.",
        imageSrc:
          "/images/resources/professional-verification/corporate-governance.svg",
        altText: "Corporate Governance",
      },
      {
        headingLight: "Professional Associations",
        headingBold: "",
        text: "Authenticate the membership status of individuals applying for conferences or professional events. Confirming memberships ensures a credible platform for networking, learning, and development, attracting esteemed participants and speakers.",
        imageSrc:
          "/images/resources/professional-verification/professional-associations.svg",
        altText: "Professional Associations",
      },
    ]);

  const [howCanDecentroHelpDataState, setHowCanDecentroHelpDataState] =
    useState({
      headingLight: "",
      headingBold: "MSME Verification For Your Business",
      tagline: "",
      bulletPointsHeader: "How can Decentro Help?",
      bulletPoints: [],
      textInBoxList: [
        {
          textInBox: "Access our Product Guide",
          linkText: "API Documentation",
          link: "https://docs.decentro.tech/docs/kyc-and-onboarding-identities-verification-services-professional-verification",
        },
      ],
    });

  const [recommendedPagesData, setRecommendedPagesData] = useState([
    {
      title: "PAN Verification",
      description:
        "Initiate swift and reliable PAN verification to validate the identity of an individual or business in real time.",
      pageLink: "/resources/pan-verification-api",
      imageSrc: "/images/resources/pan-verification/banner.svg",
    },
    {
      title: "DigiLocker",
      description:
        "It aims at removing the dependency on physical documents and powers the sharing of verified electronic documents helping in seamless customer onboarding.",
      pageLink: "/resources/digilocker-apis/",
      imageSrc: "/images/resources/digilocker.svg",
    },
  ]);

  const [needSectionData, setNeedSectionData] = useState({
    id: 0,
    headingLight: "The Need for ",
    headingBold: "Professional Verification",
    tagline:
      "Ensuring the authenticity of professional credentials is crucial for various reasons",
    bulletPoints: [
      {
        text: "Verify Background Information of an Employee.",
      },
      {
        text: "Maintain Regulatory Compliance.",
      },
      {
        text: "Enhance Trust and Credibility.",
      },
      {
        text: "Verify Background Information of an Employee.",
      },
    ],
  });

  const [typesSectionData, setTypesSectionData] = useState({
    heading: "<span>Types of</span> Professional Verification",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/professional-verification/doc.svg",
        altText: "Medical Doctors",
        itemTitle: "Medical Doctors",
        itemDescription:
          "Ensure the Doctors with the National Medical Council (NMC) membership is valid and up-to-date with our NMC Verification API.",
      },
      {
        imageSrc: "/images/resources/professional-verification/ca.svg",
        altText: "CAs",
        itemTitle: "Chartered Accountants (CAs)",
        itemDescription:
          "Verify the membership status of Chartered Accountants with the Institute of Chartered Accountants of India (ICAI) with our ICAI Verification API.",
      },
      {
        imageSrc: "/images/resources/professional-verification/cs.svg",
        altText: "Company Secretaries",
        itemTitle: "Company Secretaries",
        itemDescription:
          "Confirm the membership of Company Secretaries with the Institute of Company Secretaries of India (ICSI) with our ICSI Verification API.",
      },
    ],
  });

  const [methodData, setMethodData] = useState([
    {
      imageSrc:
        "/images/resources/professional-verification/req-verification.svg",
      header: "Request Verification",
      description:
        "Submit a verification request using the necessary parameters such as professional details.",
    },
    {
      imageSrc:
        "/images/resources/professional-verification/data-retrieval.svg",
      header: "Data Retrieval",
      description:
        "Retrieve relevant information from the respective professional councils or organizations to process the request.",
    },
    {
      imageSrc: "/images/resources/professional-verification/verification.svg",
      header: "Receive Verification Results",
      description:
        "Retrieve detailed verification results, including membership details, qualifications, and additional certifications.",
    },
    {
      imageSrc: "/images/resources/professional-verification/message.svg",
      header: "Confirmation Message",
      description:
        "Receive a confirmation message indicating successful verification of professional membership.",
    },
  ]);

  const [introductorySectionData, setIntroductorySectionData] = useState([
    {
      headingLight: "",
      headingBold: "",
      text:
        "In today’s rapidly evolving financial landscape, verifying customers’ employment status is crucial for lenders, financial service organisations, banks, and NBFCs." +
        "Decentro’s Employment Verification Stack offers a robust solution, enabling these entities to authenticate employment details seamlessly. This stack ensures comprehensive and accurate verification by integrating essential services such as EPFO Data, EPFO Passbook details, and Company Email Verification." +
        "Building on this robust foundation, Decentro introduces the Professional Membership Verification API, an extension tailored specifically for Medical Doctors, Chartered Accountants (CAs), and Company Secretaries (CS). This specialised service streamlines the membership verification process, ensuring the highest standards of accuracy and reliability for professional credentials.",
      imageSrc: "/images/resources/professional-verification/introduction.svg",
      altText: "Introduction",
    },
  ]);

  const [headingAndDescriptiveImageData, setHeadingAndDescriptiveImageData] =
    useState({
      headingLight: "",
      headingBold: "",
      imageSrc: "/images/default-image.svg", // Default fallback image
      altText: "",
    });

  const [ctaBannerStart, setCtaBannerStart] = useState(null);
  const [ctaBannerMiddle, setCtaBannerMiddle] = useState(null);
  const [ctaBannerEnd, setCtaBannerEnd] = useState(null);
  const [extraCTA, setExtraCTA] = useState({
    text: "<span>Robust and efficient APIs</span> to prevent fraud before it strikes.",
    ctaButtonText: "Sign Up!",
    newTab: true,
    ctaButtonLink: "/signup",
  });
  const [featureDescriptiveTextBlock, setFeatureDescriptiveTextBlock] =
    useState({
      headingLight: "",
      headingBold: "",
      haedingFormatted: "",
      description: "",
    });

  const [faqSectionData, setFaqSectionData] = useState([]);

  const router = useRouter();
  const canonicalUrl = `https://decentro.tech${router.asPath}`;

  const fetchPageData = async () => {
    try {
      const pagelink = router.pathname; // Extract the pagelink from the pathname
      // Construct the query string with pagelink filter
      const query = `?filters[pagelink][$eq]=${pagelink}&populate[RPBanner][populate]=*&populate[MetaTags][populate]=*&populate[TableOfContents][populate]=*&populate[IntroductorySection][populate]=*&populate[RPInlineImageAndParagraph][populate]=*&populate[RPKeyFeatures][populate][RPKeyFeatureUnitBlock][populate]=*&populate[RPKeyFeatures][populate][KeyFeaturesBlocksRow2][populate]=*&populate[WhyDecentroSection][populate]=*&populate[RecommendedPages][populate]=*&populate[NeedSection][populate]=*&populate[TypesSection][populate][ImageTitleDescColumnMapUnit][populate]=*&populate[MethodologySection][populate]=*&populate[CTABannerStart][populate]=*&populate[CTABannerMiddle][populate]=*&populate[CTABannerEnd][populate]=*&populate[HeadingAndDescriptiveImage][populate]=*&populate[FeatureDescriptiveTextBlock][populate]=*&populate[FaqSection][populate]=*&`;
      const response = await axios.get(
        `${requests.STRAPI_STAGING_API_IP_BASE_URL}${requests.STRAPI_RESOURCES_PAGE}${query}`
      );
      const data = response.data.data;

      if (data && data.length > 0) {
        const apiData = data[0].attributes;
        console.log(apiData);

        // Map API data to metaData
        const mappedMetaData = {
          metaTitle: apiData.MetaTags?.metaTitle || "",
          canonical: apiData.MetaTags?.canonical || canonicalUrl,

          metaDescription: apiData.MetaTags?.metaDescription || "",
          metaKeywords: apiData.MetaTags?.metaKeywords || "",
          ogTitle: apiData.MetaTags?.metaTitle || "",
          ogImage: apiData.MetaTags?.imageSrc?.data?.attributes?.url
            ? `${requests.STRAPI_STAGING_IP_BASE_URL}${apiData.MetaTags.imageSrc.data.attributes.url}`
            : "", // fallback image
        };

        setMetaData(mappedMetaData);

        // Map API data to bannerData
        const mappedBannerData = {
          heading: apiData.RPBanner.heading || "Professional Verification",
          tagline: apiData.RPBanner.tagline || "",
          buttonText: apiData.RPBanner.buttonText,
          newTab: apiData.RPBanner.newTab,
          buttonLink: apiData.RPBanner.buttonLink,
          imageSrc: apiData.RPBanner.imageSrc?.data?.attributes?.url
            ? `${requests.STRAPI_STAGING_IP_BASE_URL}${apiData.RPBanner.imageSrc.data.attributes.url}`
            : "/images/resources/upi-autopay.svg", // fallback image
          altText: apiData.RPBanner.altText,
          DBackground: apiData.RPBanner.DBackground,
        };
        setBannerData(mappedBannerData);

        // Map API data to tableOfContentsData
        const mappedTableOfContentsData = apiData.TableOfContents.map(
          (item) => ({
            text: item.text || "",
            id: item.referencedSection || "",
          })
        );
        setTableOfContentsData(mappedTableOfContentsData);

        // Map API data to IntroductorySection
        const mappedIntroductorySectionData = apiData.IntroductorySection.map(
          (item) => ({
            headingLight: item.headingLight || "",
            headingBold: item.headingBold || "",
            text: item.text || "",
            bulletPointsText: item.bulletPointsText || [],
            imageSrc: item.imageSrc?.data?.attributes?.url
              ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item.imageSrc.data.attributes.url}`
              : "/images/default-image.svg", // fallback image
            altText: item.altText || "",
            extraHeadingText: item.extraHeadingText || "",
          })
        );
        setIntroductorySectionData(mappedIntroductorySectionData);

        // Map API data to needSectionData
        const mappedNeedSectionData = {
          id: apiData?.NeedSection?.id || 0,
          headingLight: apiData?.NeedSection?.headingLight || "",
          headingBold: apiData?.NeedSection?.headingBold || "",
          tagline: apiData?.NeedSection?.tagline || "",
          // bulletPoints: apiData.NeedSection.BulletPoints.map((point) => ({
          //   text: point.text,
          // })),
          bulletPoints: apiData?.NeedSection?.BulletPoints?.map((point) => ({
            text:
              point?.formattedText && point?.formattedText.trim()
                ? point?.formattedText
                : point?.text,
          })),
        };
        console.log(mappedNeedSectionData);
        setNeedSectionData(mappedNeedSectionData);

        // Map API data to typesSectionData
        const mappedTypesSectionData = {
          heading: apiData?.TypesSection?.heading || "",
          tagline: apiData?.TypesSection?.tagline || "",
          items: apiData?.TypesSection?.ImageTitleDescColumnMapUnit?.map(
            (item) => ({
              imageSrc: item.imageSrc?.data?.attributes?.url
                ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item.imageSrc.data.attributes.url}`
                : "/images/resources/default.svg",
              altText: item.altText || "",
              itemTitle: item.itemTitle || "",
              itemDescription: item.itemDescription || "",
            })
          ),
        };
        setTypesSectionData(mappedTypesSectionData);

        // Map API data to methodData
        const mappedMethodData = apiData.MethodologySection.map((item) => ({
          imageSrc: item.imageSrc?.data?.attributes?.url
            ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item.imageSrc.data.attributes.url}`
            : "/images/resources/default.svg", // fallback image
          header: item.header || "",
          description: item.description,
        }));
        setMethodData(mappedMethodData);

        // Map API data to HeadingAndDescriptiveImage - have added animatedSrc, videoSrc etc also to strapi so if it appears in future add it here and in component render
        const mappedHeadingAndDescriptiveImageData = {
          headingLight: apiData.HeadingAndDescriptiveImage?.headingLight || "",
          headingBold: apiData.HeadingAndDescriptiveImage?.headingBold || "",
          imageSrc: apiData.HeadingAndDescriptiveImage?.imageSrc?.data
            ?.attributes?.url
            ? `${requests.STRAPI_STAGING_IP_BASE_URL}${apiData.HeadingAndDescriptiveImage.imageSrc.data.attributes.url}`
            : "/images/default-image.svg", // Fallback image
          altText:
            apiData.HeadingAndDescriptiveImage?.imageSrc?.data?.attributes
              ?.alternativeText || "",
        };
        console.log(
          "mappedHeadingAndDescriptiveImageData: ",
          mappedHeadingAndDescriptiveImageData
        );
        setHeadingAndDescriptiveImageData(mappedHeadingAndDescriptiveImageData);

        // Map API data to inlineImageAndParagraphData
        const mappedInlineImageAndParagraphData =
          apiData.RPInlineImageAndParagraph.map((item) => ({
            id: item?.id,
            headingLight: item?.headingLight,
            headingBold: item?.headingBold,
            text: item?.text,
            altText: item?.altText,
            imageSrc: item?.imageSrc?.data?.attributes?.url
              ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item?.imageSrc?.data?.attributes?.url}`
              : "/images/resources/default.svg", // fallback image
          }));
        setInlineImageAndParagraphData(mappedInlineImageAndParagraphData);

        // Map API data to useCasesData
        // const mappedUseCasesData = {
        //   heading: apiData?.RPKeyFeatures[0]?.headingLight
        //     ? `${apiData?.RPKeyFeatures[0]?.headingLight} <span>${apiData?.RPKeyFeatures[0]?.headingBold}</span>`
        //     : "Key Features",
        //   tagline: apiData?.RPKeyFeatures[0]?.tagline || "",
        //   block1: apiData?.RPKeyFeatures[0]?.RPKeyFeatureUnitBlock.map(
        //     (item) => ({
        //       heading: item?.heading,
        //       paragraph: item?.paragraph,
        //       imageSrc: item?.imageSrc?.data?.attributes?.url
        //         ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item?.imageSrc?.data?.attributes?.url}`
        //         : "/images/resources/default-image.svg", // fallback image
        //     })
        //   ),
        //   showOthers: apiData?.RPKeyFeatures[0]?.showOthers || false,
        //   tagline2: apiData?.RPKeyFeatures[0]?.tagline2 || "",
        //   block1extra:
        //     apiData?.RPKeyFeatures[0]?.KeyFeaturesBlocksRow2?.map((item) => ({
        //       heading: item?.heading,
        //       paragraph: item?.paragraph,
        //       imageSrc: item?.imageSrc?.data?.attributes?.url
        //         ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item.imageSrc.data.attributes.url}`
        //         : "/images/resources/default-image.svg", // fallback image
        //     })) || [],
        //   block2: [],
        // };
        // setUseCasesData(mappedUseCasesData);

        // Map API data to howCanDecentroHelpData
        const howCanDecentroHelpData = {
          headingLight: apiData?.WhyDecentroSection?.headingLight || "",
          headingBold: apiData?.WhyDecentroSection?.headingBold || "",
          tagline: apiData?.WhyDecentroSection?.tagline || "",
          bulletPointsHeader:
            apiData?.WhyDecentroSection?.bulletPointsHeader || "",
          bulletPoints: apiData?.WhyDecentroSection?.bulletPoints.map(
            (point) => ({
              text: point.text,
            })
          ),
          textInBoxList: apiData.WhyDecentroSection.textInBoxList.map(
            (box) => ({
              textInBox: box.textInBox,
              linkText: box.linkText,
              link: box.link,
            })
          ),
        };
        console.log(howCanDecentroHelpData);
        setHowCanDecentroHelpDataState(howCanDecentroHelpData);

        // Map API data to faqSectionData
        const mappedFaqSectionData = apiData?.FaqSection.map((item) => ({
          id: item?.id,
          query: item?.query,
          solution: item?.solution,
        }));
        setFaqSectionData(mappedFaqSectionData);

        // Map API data to recommendedPagesData
        // const mappedRecommendedPagesData = apiData?.RecommendedPages.map(
        //   (page) => ({
        //     title: page?.title || "",
        //     description: page?.description || "",
        //     pageLink: page?.pageLink || "",
        //     imageSrc: page?.imageSrc?.data?.attributes?.url
        //       ? `${requests.STRAPI_STAGING_IP_BASE_URL}${page?.imageSrc?.data?.attributes?.url}`
        //       : "/images/default-page-image.svg", // fallback image
        //   })
        // );
        // setRecommendedPagesData(mappedRecommendedPagesData);

        // Map API data to CTA Banner sections
        const ctaBannerStartData = apiData?.CTABannerStart;
        const ctaBannerMiddleData = apiData?.CTABannerMiddle;
        const ctaBannerEndData = apiData?.CTABannerEnd;

        const formattedCtaBannerStart = {
          text: ctaBannerStartData?.text || "",
          ctaButtonText: ctaBannerStartData?.ctaButtonText || "",
          newTab: ctaBannerStartData?.newTab || false,
          ctaButtonLink: ctaBannerStartData?.ctaButtonLink || "",
        };
        const formattedCtaBannerMiddle = {
          text: ctaBannerMiddleData?.text || "",
          ctaButtonText: ctaBannerMiddleData?.ctaButtonText || "",
          newTab: ctaBannerMiddleData?.newTab || false,
          ctaButtonLink: ctaBannerMiddleData?.ctaButtonLink || "",
        };
        const formattedCtaBannerEnd = {
          text: ctaBannerEndData?.text || "",
          ctaButtonText: ctaBannerEndData?.ctaButtonText || "",
          newTab: ctaBannerEndData?.newTab || false,
          ctaButtonLink: ctaBannerEndData?.ctaButtonLink || "",
        };

        // Set state
        setCtaBannerStart(formattedCtaBannerStart);
        setCtaBannerMiddle(formattedCtaBannerMiddle);
        setCtaBannerEnd(formattedCtaBannerEnd);

        // // Map API data to FeatureDescriptiveTextBlock - have added headingFormatted in case heading has mix of bold regular bold
        // const mappedFeatureDescriptiveTextBlockData = {
        //   headingLight: apiData.FeatureDescriptiveTextBlock?.headingLight || "",
        //   headingBold: apiData.FeatureDescriptiveTextBlock?.headingBold || "",
        //   headingLight: apiData.FeatureDescriptiveTextBlock?.headingLight || "",
        //   description: apiData.FeatureDescriptiveTextBlock?.description || "",
        // };
        // setFeatureDescriptiveTextBlock(mappedFeatureDescriptiveTextBlockData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  const workflowData = [
    {
      imageSrc: "/images/resources/bbps/step1.svg",
      header: "Customer enters",
      description:
        "<ul><li>Lead ID/Account number/Loan ID etc</li><li>Phone number</li></ul>",
    },
    {
      imageSrc: "/images/resources/bbps/step2.svg",
      header: "Bill details",
      description: "<p>(Received from BBPS)</p>",
    },
    {
      imageSrc: "/images/resources/bbps/step3.svg",
      header: "Primary UPI VPA",
      description: "<p>(Received using Decentro’s UPI APIs)</p>",
    },
    {
      imageSrc: "/images/resources/bbps/step4.svg",
      header: "Updating in<br/>Neowise Platform",
      description: "",
    },
    {
      imageSrc: "/images/resources/bbps/step5.svg",
      header: "UPI Payment<br/>Processed",
      description: "",
    },
    {
      imageSrc: "/images/resources/bbps/step6.svg",
      header: "Send Collect<br/>Request",
      description: "",
    },
  ];

  const msmeBusiness = {
    heading:
      "How Can <span class='highlighted-subsection-header'>MSME Verification Help </span>Your Business",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/msme-verification/compliance.svg",
        title: "Regulatory<br/>Compliance",
        description:
          "Verifying SMEs ensures businesses comply with local laws and regulations, minimising the risk of legal penalties.",
      },
      {
        imageSrc: "/images/resources/msme-verification/authentication.svg",
        title: "Reduced<br/>Fraud Risk",
        description:
          "Avoid fraudulent entities by ensuring they work with credible and verified partners, reducing potential financial and reputational risks.",
      },
      {
        imageSrc: "/images/resources/msme-verification/employee.svg",
        title: "Efficient Vendor<br/>Management",
        description:
          "Simplify the onboarding process by filtering out unreliable vendors, allowing businesses to build trustworthy supply chains.",
      },
      {
        imageSrc: "/images/resources/msme-verification/bank.svg",
        title: "Access to<br/>Financial Services",
        description:
          "Due to their established credibility, verified SMEs are more likely to receive financial support, such as loans and grants, which leads to smoother financial operations for the business.",
      },
      {
        imageSrc: "/images/resources/msme-verification/verified-sme.svg",
        title: "Enhanced Business<br/>Reputation",
        description:
          "Engaging with verified SMEs strengthens a company’s reputation for thorough due diligence and reliability in the market, which can attract more partners and customers.",
      },
      {
        imageSrc: "/images/resources/msme-verification/market.svg",
        title: "Improved Market<br/>Opportunities",
        description:
          "Verified MSMEs are often given preference in government tenders and contracts, opening doors to new business opportunities.",
      },
    ],
  };

  const msmeVendors = {
    heading:
      "How Can <span class='highlighted-subsection-header'>MSME Verification</span> Help Vendors",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/msme-verification/security-vendors.svg",
        title: "Improved<br/>Credibility",
        description:
          "Verification builds trust with potential business partners, increasing opportunities for contracts and collaborations.",
      },
      {
        imageSrc: "/images/resources/msme-verification/finance-vendors.svg",
        title: "Access to<br/>Financial Support",
        description:
          "Verified MSMEs have better access to financial services, like loans and grants, making it easier to grow and scale their operations.",
      },
      {
        imageSrc: "/images/resources/msme-verification/onboarding-vendors.svg",
        title: "Streamlined<br/>Onboarding",
        description:
          "Verified MSMEs enjoy faster onboarding with new partners, minimizing delays and building stronger business relationships.",
      },
      {
        imageSrc: "/images/resources/msme-verification/compliance-vendors.svg",
        title: "Compliance<br/>Assurance",
        description:
          "Being verified signals compliance with government regulations, reducing the risk of penalties and fostering a smoother operational environment.",
      },
    ],
  };

  const accordionData = [
    {
      query: "How can I verify my MSME status?",
      solution: "",
      bulletPoints: [
        {
          text: "Visit Udyam Registration Portal: Go to&nbsp;<a href='https://udyamregistration.gov.in' target='_blank'>udyamregistration.gov.in</a>.",
        },
        {
          text: "Select Registration Type:&nbsp;Choose “For New Entrepreneurs.",
        },
        {
          text: "Enter Aadhaar Details:&nbsp;Provide Aadhaar number and authenticate with OTP.",
        },
        {
          text: "Fill Business and Bank Info:&nbsp;Enter business name, PAN, location, and bank details.",
        },
        {
          text: "Submit Application:&nbsp;Review, declare, and submit the form. Authenticate with the final OTP.",
        },
        {
          text: "Receive Udyam Certificate:&nbsp;Get your unique Udyam Registration Number (URN).",
        },
        {
          text: "Verify Status:&nbsp;Use URN on the portal to check MSME status.",
        },
      ],
    },
    {
      query: "What documents are needed for MSME verification?",
      solution: "Commonly required documents include:",
      bulletPoints: [
        {
          text: "Business registration certificate",
        },
        {
          text: "PAN card of the business",
        },
        {
          text: "Aadhaar card of the owner",
        },
        {
          text: "Financial statements",
        },
        {
          text: "Proof of address",
        },
        {
          text: "Bank account details",
        },
      ],
    },
    {
      query: "Is MSME verification a one-time process?",
      solution:
        "No, MSME verification should be updated periodically, especially if there are significant changes in business size, turnover, or ownership.",
    },
    {
      query: "How long does the MSME verification process take?",
      solution:
        "The verification process can vary but typically takes a few weeks, depending on the completeness of the application and the volume of applications being processed.",
    },

    {
      query: "Is GST mandatory for MSME?",
      solution: "GST is mandatory for MSMEs if:",
      bulletPoints: [
        {
          text: "Turnover Exceeds ₹40 Lakh:&nbsp;(₹20 Lakh for services).",
        },
        {
          text: "Inter-State Supply:&nbsp;Businesses supplying goods/services across states.",
        },
        {
          text: "E-commerce Sales:&nbsp;Selling through online platforms.",
        },
        {
          text: "MSMEs can also opt for voluntary registration for benefits like input tax credit.",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>{metaData.metaTitle}</title>
        <link rel="canonical" href={metaData.canonical} />
        <meta name="description" content={metaData.metaDescription} />
        <meta name="keywords" content={metaData.metaKeywords} />
        <meta property="og:title" content={metaData.ogTitle} />
        <meta property="og:image" content={metaData.ogImage} />
      </Head>
      {/* {bannerData && ( */}
      <div className={styles["phone-number-intelligence"]}>
        {bannerData && <ProductBanner data={bannerData} />}

        {tableOfContentsData && (
          <Suspense fallback={<div>Loading Table of Contents...</div>}>
            <TableOfContents data={tableOfContentsData} />
          </Suspense>
        )}

        <div>
          <div id="introduction">
            {introductorySectionData.map((item, index) => (
              <Suspense
                key={index}
                fallback={<div>Loading Table of Contents...</div>}
              >
                <InlineImageAndParagraph
                  // key={index}
                  id={`introductorySection-${index}`} // Ensure unique id
                  data={item}
                  reverse={index % 2 !== 0}
                  fromServer
                />
              </Suspense>
            ))}
          </div>

          {needSectionData && (
            <Suspense fallback={<div>Loading Need...</div>}>
              <div className={styles["special-info-section"]} id="needSection">
                <div className={styles["special-info-wrapper"]}>
                  <h2>
                    {needSectionData.headingLight}{" "}
                    <span>{needSectionData.headingBold}</span>
                  </h2>
                  <h2></h2>
                  <div className={styles["special-info-description"]}>
                    {needSectionData.tagline}
                    <br />
                    <br />
                    {needSectionData.bulletPoints.map((point, index) => (
                      <ReactMarkdown key={index}>{point.text}</ReactMarkdown>
                    ))}
                  </div>

                  <div className={styles["buffer"]}></div>
                </div>
              </div>
            </Suspense>
          )}
          {typesSectionData && (
            <Suspense fallback={<div>Loading Types...</div>}>
              <InlineImageTextMap data={typesSectionData} id="types" />
            </Suspense>
          )}
          {ctaBannerStart && (
            <TextAndButtonBannerTransparent data={ctaBannerStart} />
          )}
          {methodData && (
            <div
              className={styles["leverage-verifiction-api"]}
              id="methodology"
              style={{
                background: "#FAFAFA",
              }}
            >
              <h2>
                <span>How Can MSMEs</span>&nbsp;Register for Their KYC
                Documentation?
              </h2>
              <p>
                To be eligible for verification, MSMEs must register and have
                key KYC (Know Your Customer) documents in place. Here’s how
              </p>
              <div className={styles["leverage-verifiction-api-content"]}>
                <ResourcesMethodology data={methodData} itemCount={4} noDesc />
              </div>
            </div>
          )}
          <div id="msmeBusiness">
            <DescriptiveItemList data={msmeBusiness} />
          </div>
          {ctaBannerMiddle && (
            <TextAndButtonBannerTransparent data={ctaBannerMiddle} />
          )}
          <div
            id="msmeVendors"
            style={{
              background: "#FAFAFA",
            }}
          >
            <DescriptiveItemListFour data={msmeVendors} />
          </div>
          {inlineImageAndParagraphData && (
            <div
              className={styles["employee-verification-methods"]}
              id="whereToUse"
            >
              <h2>
                Where You Can <span>Use It</span>
              </h2>
              <div className={styles["employee-verification-methods-content"]}>
                {inlineImageAndParagraphData.map((data, index) => (
                  <InlineImageAndParagraph
                    key={index}
                    zoom={true}
                    data={data}
                    reverse={index % 2 !== 0}
                    boldBlack
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {ctaBannerEnd && <TextAndButtonBannerTransparent data={ctaBannerEnd} />}

        {howCanDecentroHelpDataState && (
          <BulletPointsAndTextBlock
            id="howCanDecentroHelp"
            data={howCanDecentroHelpDataState}
          />
        )}

        {extraCTA && <TextAndButtonBannerTransparent data={extraCTA} />}
        {accordionData.length > 0 && (
          <Suspense fallback={<div>Loading FAQs...</div>}>
            <div
              className={styles["commonly-asked-questions"]}
              id="commonlyAskedQuestions"
            >
              <h2>
                Frequently Asked&nbsp;<span>Questions</span>
              </h2>
              <div className={styles["accordion-list"]}>
                {accordionData.map(function (object, i) {
                  return <FaqAccordion key={i} data={object} markdown />;
                })}
              </div>
            </div>
          </Suspense>
        )}

        {recommendedPagesData && (
          <Suspense fallback={<div>Loading Recommended Section...</div>}>
            <RecommendedPages data={recommendedPagesData} />
          </Suspense>
        )}
      </div>
      {/* )} */}
    </React.Fragment>
  );
};

export default MSMEVerification;
