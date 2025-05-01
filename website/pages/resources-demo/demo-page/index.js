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
import DescriptiveItemList from "../../../components/descriptive-item-list/descriptive-item-list";
import urls from "../../../urls";
import ReactMarkdown from "react-markdown";

const StrapiResourcesDemoPage = () => {
  const [loading, setLoading] = useState(true);

  const [metaData, setMetaData] = useState({
    metaTitle: "Generic Resource Page | Decentro",
    canonical: urls.RESOURCES_PREFILL_APIS,
    metaDescription:
      "This is a generic resource page for Decentro. Explore various features and functionalities.",
    metaKeywords: "Decentro, Resource, API, Integration",
    ogTitle: "Generic Resource Page | Decentro",
    ogImage: "",
  });

  const [bannerData, setBannerData] = useState({
    heading: "<span class='highlighted-heading'>Generic Resource</span>",
    tagline: "Explore the features and functionalities of this resource",
    buttonText: "Explore Now",
    newTab: false,
    buttonLink: requests.SIGNUP,
    imageSrc: "/images/resources/prefill-apis/Prefill-API-Hero-Banner.svg",
    altText: "Generic Resource",
    DBackground: true,
  });

  const [tableOfContentsData, setTableOfContentsData] = useState([
    { text: "Introduction", id: "introduction" },
    { text: "Methodology", id: "methodology" },
    { text: "Need for This Resource", id: "needSection" },
    { text: "Types of Resources", id: "types" },
    { text: "How It Helps Your Business", id: "helpBusiness" },
    { text: "Where You Can Use It", id: "whereToUse" },
    { text: "Key Features", id: "keyFeatures" },
    { text: "How Can Decentro Help?", id: "howCanDecentroHelp" },
  ]);

  const [useCasesData, setUseCasesData] = useState({
    headingLight: "Key",
    headingBold: "Features",
    tagline: "",
    block1: [
      {
        heading: "Feature One",
        paragraph: "This is a description of the first key feature.",
        imageSrc: "/images/resources/upi-autopay/custom-upi-handle.svg",
      },
      {
        heading: "Feature Two",
        paragraph: "This is a description of the second key feature.",
        imageSrc: "/images/resources/upi-autopay/authentication.svg",
      },
      {
        heading: "Feature Three",
        paragraph: "This is a description of the third key feature.",
        imageSrc: "/images/resources/upi-autopay/flexible-debits.svg",
      },
    ],
    block1extra: [
      {
        heading: "Feature Four",
        paragraph: "This is a description of the fourth key feature.",
        imageSrc: "/images/resources/upi-autopay/recurring-payments.svg",
      },
      {
        heading: "Feature Five",
        paragraph: "This is a description of the fifth key feature.",
        imageSrc: "/images/resources/upi-autopay/pre-debit-notification.svg",
      },
      {
        heading: "Feature Six",
        paragraph: "This is a description of the sixth key feature.",
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
      headingBold: "How Decentro Can Help Your Business",
      tagline: "",
      bulletPointsHeader: "How can Decentro Help?",
      bulletPoints: [
        { text: "Provide seamless integration with your systems." },
        { text: "Ensure compliance with industry standards." },
        { text: "Enhance customer experience with efficient solutions." },
      ],
      textInBoxList: [
        {
          textInBox: "Access our Product Guide",
          linkText: "API Documentation",
          link: "https://docs.decentro.tech",
        },
      ],
    });

  const [recommendedPagesData, setRecommendedPagesData] = useState([
    {
      title: "Resource One",
      description: "This is a description of the first recommended resource.",
      pageLink: "/resources/resource-one",
      imageSrc: "/images/resources/pan-verification/banner.svg",
    },
    {
      title: "Resource Two",
      description: "This is a description of the second recommended resource.",
      pageLink: "/resources/resource-two",
      imageSrc: "/images/resources/digilocker.svg",
    },
  ]);

  const [needSectionData, setNeedSectionData] = useState({
    id: 0,
    headingLight: "The Need for ",
    headingBold: "This Resource",
    tagline: "Understanding the importance of this resource is crucial.",
    bulletPoints: [
      { text: "Improve operational efficiency." },
      { text: "Ensure data accuracy and reliability." },
      { text: "Enhance user experience with streamlined processes." },
    ],
  });

  const [typesSectionData, setTypesSectionData] = useState({
    heading: "<span>Types of</span> Resources",
    tagline: "",
    items: [
      {
        imageSrc: "/images/resources/professional-verification/doc.svg",
        altText: "Type One",
        itemTitle: "Type One",
        itemDescription: "This is a description of the first type of resource.",
      },
      {
        imageSrc: "/images/resources/professional-verification/ca.svg",
        altText: "Type Two",
        itemTitle: "Type Two",
        itemDescription:
          "This is a description of the second type of resource.",
      },
      {
        imageSrc: "/images/resources/professional-verification/cs.svg",
        altText: "Type Three",
        itemTitle: "Type Three",
        itemDescription: "This is a description of the third type of resource.",
      },
    ],
  });

  const [methodData, setMethodData] = useState([
    {
      imageSrc:
        "/images/resources/professional-verification/req-verification.svg",
      header: "Step One",
      description: "This is the first step in the methodology.",
    },
    {
      imageSrc:
        "/images/resources/professional-verification/data-retrieval.svg",
      header: "Step Two",
      description: "This is the second step in the methodology.",
    },
    {
      imageSrc: "/images/resources/professional-verification/verification.svg",
      header: "Step Three",
      description: "This is the third step in the methodology.",
    },
    {
      imageSrc: "/images/resources/professional-verification/message.svg",
      header: "Step Four",
      description: "This is the fourth step in the methodology.",
    },
  ]);

  const [introductorySectionData, setIntroductorySectionData] = useState([
    {
      headingLight: "What is ",
      headingBold: "This Resource?",
      text:
        "This resource is designed to help businesses streamline their processes and improve efficiency." +
        "<br/><br/>With this resource, you can automate tasks, ensure data accuracy, and enhance user experience.",
      imageSrc: "/images/resources/prefill-apis/what-is-prefill.svg",
      altText: "Introduction",
    },
  ]);

  const [ctaBannerStart, setCtaBannerStart] = useState(null);
  const [ctaBannerMiddle, setCtaBannerMiddle] = useState(null);
  const [ctaBannerEnd, setCtaBannerEnd] = useState(null);
  const [extraCTA, setExtraCTA] = useState({
    text: "<span>Robust and efficient APIs</span> to enhance your business processes.",
    ctaButtonText: "Sign Up!",
    newTab: true,
    ctaButtonLink: "/signup",
  });

  const router = useRouter();
  const canonicalUrl = `https://decentro.tech${router.asPath}`;

  const fetchPageData = async () => {
    try {
      const pagelink = router.pathname;
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
            : "",
        };

        setMetaData(mappedMetaData);

        // Map API data to bannerData
        const mappedBannerData = {
          heading: apiData.RPBanner.heading || "Generic Resource",
          tagline: apiData.RPBanner.tagline || "",
          buttonText: apiData.RPBanner.buttonText,
          newTab: apiData.RPBanner.newTab,
          buttonLink: apiData.RPBanner.buttonLink,
          imageSrc: apiData.RPBanner.imageSrc?.data?.attributes?.url
            ? `${requests.STRAPI_STAGING_IP_BASE_URL}${apiData.RPBanner.imageSrc.data.attributes.url}`
            : "/images/resources/prefill-apis/Prefill-API-Hero-Banner.svg",
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
              : "/images/resources/prefill-apis/what-is-prefill.svg",
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
                : "/images/resources/professional-verification/doc.svg",
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
            : "/images/resources/professional-verification/req-verification.svg",
          header: item.header || "",
          description: item.description,
        }));
        setMethodData(mappedMethodData);

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
                : "/images/resources/upi-autopay/custom-upi-handle.svg",
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
                : "/images/resources/upi-autopay/recurring-payments.svg",
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
        const mappedRecommendedPagesData = apiData?.RecommendedPages.map(
          (page) => ({
            title: page?.title || "",
            description: page?.description || "",
            pageLink: page?.pageLink || "",
            imageSrc: page?.imageSrc?.data?.attributes?.url
              ? `${requests.STRAPI_STAGING_IP_BASE_URL}${page?.imageSrc?.data?.attributes?.url}`
              : "/images/resources/pan-verification/banner.svg",
          })
        );
        setRecommendedPagesData(mappedRecommendedPagesData);

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
      "How <span class='highlighted-subsection-header'>This Resource</span> Can Help Your Business",
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
                  id={`introductorySection-${index}`}
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
    </React.Fragment>
  );
};

export default StrapiResourcesDemoPage;
