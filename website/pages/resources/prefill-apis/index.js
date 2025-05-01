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

const PreFillApis = () => {
  const [loading, setLoading] = useState(true);

  const [metaData, setMetaData] = useState({
    metaTitle: "Prefill APIs | Pre-Populate Verified Customer Data in Seconds",
    canonical: urls.RESOURCES_PREFILL_APIS,
    metaDescription:
      "Streamline your onboarding with Decentro’s Prefill API. Pre-fill customer details from the Central Government Repositories, ensuring faster, compliant, and error-free KYC processes",
    metaKeywords: "",
    ogTitle: "Prefill APIs | Pre-Populate Verified Customer Data in Seconds",
    ogImage: "",
  });

  const [bannerData, setBannerData] = useState({
    heading: "<span class='highlighted-heading'>Prefill APIs</span>",
    tagline: "Streamline User Onboarding with Verified Data",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/prefill-apis/Prefill-API-Hero-Banner.svg",
    altText: "Prefill APIs",
    DBackground: true,
  });
  const [tableOfContentsData, setTableOfContentsData] = useState([
    { text: "What is Prefill?", id: "introduction" },
    {
      text: "Methodology",
      id: "methodology",
    },
    {
      text: "The Need for Prefill APIs",
      id: "needSection",
    },
    {
      text: "Enhance Prefill with Hyperstreams",
      id: "types",
    },
    {
      text: "How CKYC Prefill and Hyperstreams Can Help Your Business",
      id: "methodology",
    },
    {
      text: "Where You Can Use It",
      id: "whereToUse",
    },
    {
      text: "Key Features of Prefill & Hyperstreams",
      id: "keyFeatures",
    },
    {
      text: "How Can Decentro Help?",
      id: "howCanDecentroHelp",
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
          link: "https://docs.decentro.tech/reference/kyc-and-onboarding-api-reference-workflows-hyperstreams-ckyc-prefill",
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
      headingLight: "What is ",
      headingBold: "Prefill?",
      text:
        "Prefill automatically fetches and verifies customer details from the Central KYC (CKYC) registry to streamline onboarding." +
        "<br/><br/>With Decentro’s CKYC Prefill API, your business can pre-populate customer details like name, address, and financial data, speeding up the verification process to boost operational efficiency. This solution is perfect for companies in highly regulated banking, lending, and fintech sectors.",
      imageSrc: "/images/resources/prefill-apis/what-is-prefill.svg",
      altText: "Introduction",
    },
  ]);

  const [ctaBannerStart, setCtaBannerStart] = useState(null);
  const [ctaBannerMiddle, setCtaBannerMiddle] = useState(null);
  const [ctaBannerEnd, setCtaBannerEnd] = useState(null);
  const [extraCTA, setExtraCTA] = useState({
    text: "<span>Robust and efficient APIs</span> to prevent fraud before it strikes.",
    ctaButtonText: "Sign Up!",
    newTab: true,
    ctaButtonLink: "/signup",
  });

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

        // Map API data to
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
        const mappedUseCasesData = {
          heading: apiData?.RPKeyFeatures[0]?.headingLight
            ? `${apiData?.RPKeyFeatures[0]?.headingLight} <span>${apiData?.RPKeyFeatures[0]?.headingBold}</span>`
            : "Key Features",
          tagline: apiData?.RPKeyFeatures[0]?.tagline || "",
          block1: apiData?.RPKeyFeatures[0]?.RPKeyFeatureUnitBlock.map(
            (item) => ({
              heading: item?.heading,
              paragraph: item?.paragraph,
              imageSrc: item?.imageSrc?.data?.attributes?.url
                ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item?.imageSrc?.data?.attributes?.url}`
                : "/images/resources/default-image.svg", // fallback image
            })
          ),
          showOthers: apiData?.RPKeyFeatures[0]?.showOthers || false,
          tagline2: apiData?.RPKeyFeatures[0]?.tagline2 || "",
          block1extra:
            apiData?.RPKeyFeatures[0]?.KeyFeaturesBlocksRow2?.map((item) => ({
              heading: item?.heading,
              paragraph: item?.paragraph,
              imageSrc: item?.imageSrc?.data?.attributes?.url
                ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item.imageSrc.data.attributes.url}`
                : "/images/resources/default-image.svg", // fallback image
            })) || [],
          block2: [],
        };
        setUseCasesData(mappedUseCasesData);

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

  const helpBusiness = {
    heading:
      "How <span class='highlighted-subsection-header'>Prefill & Hyperstreams </span>Can Help Your Business",
    tagline: "",
    items: [
      {
        imageSrc:
          "/images/resources/prefill-apis/prefill-reduced-cost-icon.svg",
        title: "Reduce Time<br/>and Costs",
        description:
          "Automate customer data entry and verification to save time and resources.",
      },
      {
        imageSrc: "/images/resources/prefill-apis/prefill-onboarding-icon.svg",
        title: "Boost Onboarding<br/>Speed",
        description:
          "Enable faster customer acquisition by eliminating repetitive tasks.",
      },
      {
        imageSrc:
          "/images/resources/prefill-apis/prefill-customer-experience-icon.svg",
        title: "Enhance Customer<br/>Experience",
        description:
          "Provide your users with a smooth, hassle-free onboarding experience.",
      },
      {
        imageSrc: "/images/resources/prefill-apis/compliance-check-icon.svg",
        title: "Ensure<br/>Compliance",
        description:
          "Stay compliant with the latest KYC and AML regulations through automated processes.",
      },
      {
        imageSrc:
          "/images/resources/prefill-apis/prefill-flexible-integration-icon.svg",
        title: "Flexible<br/>Integration",
        description:
          "Integrate with multiple systems and workflows through API-driven architecture for a tailored solution.",
      },
      {
        imageSrc:
          "/images/resources/prefill-apis/prefill-seamless-integration-icon.svg",
        title: "Seamless<br/>Integration",
        description:
          "Easily integrate into your existing systems for hassle-free implementation.",
      },
    ],
  };

  const [inlineImageAndParagraphData, setInlineImageAndParagraphData] =
    useState([]);

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
          {/* Intro section  */}
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
          {/* Methodology  */}
          {methodData && (
            <div
              className={styles["leverage-verifiction-api"]}
              id="methodology"
              style={{
                background: "#FAFAFA",
              }}
            >
              <h2>
                <span>Methodology</span>
              </h2>

              <div className={styles["leverage-verifiction-api-content"]}>
                <ResourcesMethodology data={methodData} itemCount={4} noDesc />
              </div>
            </div>
          )}
          {ctaBannerStart && (
            <TextAndButtonBannerTransparent data={ctaBannerStart} />
          )}
          {/* Need section  */}
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
                    {needSectionData.bulletPoints.map((point, index) => (
                      <ReactMarkdown key={index}>{point.text}</ReactMarkdown>
                    ))}
                  </div>

                  <div className={styles["buffer"]}></div>
                </div>
              </div>
            </Suspense>
          )}
          {/* Types section  */}
          {typesSectionData && (
            <Suspense fallback={<div>Loading Types...</div>}>
              <InlineImageTextMap data={typesSectionData} id="types" />
            </Suspense>
          )}

          <div id="helpBusiness">
            <DescriptiveItemList data={helpBusiness} />
          </div>
          {ctaBannerMiddle && (
            <TextAndButtonBannerTransparent data={ctaBannerMiddle} />
          )}
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

          {useCasesData && (
            <Suspense fallback={<div>Loading Key Features...</div>}>
              <UseCases id="keyFeatures" data={useCasesData} />
            </Suspense>
          )}
          {ctaBannerEnd && (
            <TextAndButtonBannerTransparent data={ctaBannerEnd} />
          )}
        </div>

        {howCanDecentroHelpDataState && (
          <BulletPointsAndTextBlock
            id="howCanDecentroHelp"
            data={howCanDecentroHelpDataState}
          />
        )}

        {extraCTA && <TextAndButtonBannerTransparent data={extraCTA} />}

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

export default PreFillApis;
