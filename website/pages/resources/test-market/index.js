import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductBanner from "../../../components/product-banner/product-banner";
import InlineImageAndParagraph from "../../../components/inline-image-and-paragraph/inline-image-and-paragraph";
import requests from "../../../requests";
import styles from "../../../styles/page-styles/phone-number-intelligence.module.scss";
import UseCases from "../../../components/use-cases/use-cases";
import BulletPointsAndTextBlock from "../../../components/bullet-points-text-block/bullet-points-text-block";
import RecommendedPages from "../../../components/recommended-pages/recommended-pages";
import TextAndButtonBannerTransparent from "../../../components/text-and-button-banner-transparent/text-and-button-banner-transparent";
import InlineImageTextMap from "../../../components/inline-image-text-map/inline-image-text-map";
import ResourcesMethodology from "../../../components/resources-methodology/resources-methodology";
import TableOfContents from "../../../components/table-of-contents/table-of-contents";
import { useRouter } from "next/router";

const BufferPage = () => {
  const [bannerData, setBannerData] = useState(null);
  const [tableOfContentsData, setTableOfContentsData] = useState([]);
  const [useCasesData, setUseCasesData] = useState({
    heading: "",
    tagline: "",
    block1: [],
    showOthers: false,
    tagline2: "",
    block2: [],
  });
  const [inlineImageAndParagraphData, setInlineImageAndParagraphData] =
    useState([]);

  const [howCanDecentroHelpDataState, setHowCanDecentroHelpDataState] =
    useState({
      headingLight: "",
      headingBold: "",
      tagline: "",
      bulletPointsHeader: "",
      bulletPoints: [],
      textInBoxList: [],
    });

  const [recommendedPagesData, setRecommendedPagesData] = useState([]);

  const [needSectionData, setNeedSectionData] = useState({
    id: 0,
    headingLight: "",
    headingBold: "",
    tagline: "",
    bulletPoints: [],
  });

  const [typesSectionData, setTypesSectionData] = useState({
    heading: "",
    tagline: "",
    items: [],
  });

  const [methodData, setMethodData] = useState([]);

  const [introductorySectionData, setIntroductorySectionData] = useState([]);

  const [ctaBannerStart, setCtaBannerStart] = useState(null);
  const [ctaBannerMiddle, setCtaBannerMiddle] = useState(null);
  const [ctaBannerEnd, setCtaBannerEnd] = useState(null);

  const router = useRouter();

  const fetchPageData = async () => {
    try {
      const pagelink = router.pathname; // Extract the pagelink from the pathname
      // Construct the query string with pagelink filter
      const query = `?filters[pagelink][$eq]=${pagelink}&populate[RPBanner][populate]=*&populate[TableOfContents][populate]=*&populate[IntroductorySection][populate]=*&populate[RPInlineImageAndParagraph][populate]=*&populate[RPKeyFeatures][populate][RPKeyFeatureUnitBlock][populate]=*&populate[RPKeyFeatures][populate][KeyFeaturesBlocksRow2][populate]=*&populate[WhyDecentroSection][populate]=*&populate[RecommendedPages][populate]=*&populate[NeedSection][populate]=*&populate[TypesSection][populate][ImageTitleDescColumnMapUnit][populate]=*&populate[MethodologySection][populate]=*&populate[CTABannerStart][populate]=*&populate[CTABannerMiddle][populate]=*&populate[CTABannerEnd][populate]=*`;
      const response = await axios.get(
        `${requests.STRAPI_STAGING_API_IP_BASE_URL}${requests.STRAPI_RESOURCES_PAGE}${query}`
      );
      const data = response.data.data;
      if (data && data.length > 0) {
        const apiData = data[0].attributes;

        // Map API data to bannerData
        const mappedBannerData = {
          heading: apiData.RPBanner.heading,
          tagline: apiData.RPBanner.tagline,
          buttonText: apiData.RPBanner.buttonText,
          newTab: apiData.RPBanner.newTab,
          buttonLink: apiData.RPBanner.buttonLink,
          //   imageSrc: "/images/resources/upi-autopay.svg", // Set this statically or modify based on your API
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

        // Map API data to methodData
        const mappedMethodData = apiData.MethodologySection.map((item) => ({
          imageSrc: item.imageSrc?.data?.attributes?.url
            ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item.imageSrc.data.attributes.url}`
            : "/images/resources/default.svg", // fallback image
          header: item.header || "",
          description: item.description || "No description available",
        }));
        setMethodData(mappedMethodData);

        // Map API data to typesSectionData
        const mappedTypesSectionData = {
          heading: apiData.TypesSection.heading || "",
          tagline: apiData.TypesSection.tagline || "",
          items: apiData.TypesSection.ImageTitleDescColumnMapUnit.map(
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

        // Map API data to needSectionData
        const mappedNeedSectionData = {
          id: apiData.NeedSection.id || 0,
          headingLight: apiData.NeedSection.headingLight || "",
          headingBold: apiData.NeedSection.headingBold || "",
          tagline: apiData.NeedSection.tagline || "",
          bulletPoints: apiData.NeedSection.BulletPoints.map((point) => ({
            text: point.text,
          })),
        };
        setNeedSectionData(mappedNeedSectionData);

        // Map API data to useCasesData
        const mappedUseCasesData = {
          heading: apiData.RPKeyFeatures[0]?.headingLight
            ? `${apiData.RPKeyFeatures[0].headingLight} <span>${apiData.RPKeyFeatures[0].headingBold}</span>`
            : "Key Features",
          tagline: apiData.RPKeyFeatures[0]?.tagline || "",
          block1: apiData.RPKeyFeatures[0].RPKeyFeatureUnitBlock.map(
            (item) => ({
              heading: item.heading,
              paragraph: item.paragraph,
              imageSrc: item.imageSrc?.data?.attributes?.url
                ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item.imageSrc.data.attributes.url}`
                : "/images/resources/default-image.svg", // fallback image
            })
          ),
          showOthers: apiData.RPKeyFeatures[0]?.showOthers || false,
          tagline2: apiData.RPKeyFeatures[0]?.tagline2 || "",
          block1extra:
            apiData.RPKeyFeatures[0].KeyFeaturesBlocksRow2?.map((item) => ({
              heading: item.heading,
              paragraph: item.paragraph,
              imageSrc: item.imageSrc?.data?.attributes?.url
                ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item.imageSrc.data.attributes.url}`
                : "/images/resources/default-image.svg", // fallback image
            })) || [],
          block2: [],
        };
        setUseCasesData(mappedUseCasesData);

        // Map API data to inlineImageAndParagraphData
        const mappedInlineImageAndParagraphData =
          apiData.RPInlineImageAndParagraph.map((item) => ({
            id: item.id,
            headingLight: item.headingLight,
            headingBold: item.headingBold,
            text: item.text,
            altText: item.altText,
            imageSrc: item.imageSrc?.data?.attributes?.url
              ? `${requests.STRAPI_STAGING_IP_BASE_URL}${item.imageSrc.data.attributes.url}`
              : "/images/resources/default.svg", // fallback image
          }));
        setInlineImageAndParagraphData(mappedInlineImageAndParagraphData);

        // Map API data to howCanDecentroHelpData
        const howCanDecentroHelpData = {
          headingLight: apiData.WhyDecentroSection.headingLight || "",
          headingBold: apiData.WhyDecentroSection.headingBold || "",
          tagline: apiData.WhyDecentroSection.tagline || "",
          bulletPointsHeader:
            apiData.WhyDecentroSection.bulletPointsHeader || "",
          bulletPoints: apiData.WhyDecentroSection.bulletPoints.map(
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
        setHowCanDecentroHelpDataState(howCanDecentroHelpData);

        // Map API data to recommendedPagesData
        const mappedRecommendedPagesData = apiData.RecommendedPages.map(
          (page) => ({
            title: page.title || "",
            description: page.description || "",
            pageLink: page.pageLink || "",
            imageSrc: page.imageSrc?.data?.attributes?.url
              ? `${requests.STRAPI_STAGING_IP_BASE_URL}${page.imageSrc.data.attributes.url}`
              : "/images/default-page-image.svg", // fallback image
          })
        );
        setRecommendedPagesData(mappedRecommendedPagesData);

        // Map API data to CTA Banner sections
        const ctaBannerStartData = apiData.CTABannerStart;
        const ctaBannerMiddleData = apiData.CTABannerMiddle;
        const ctaBannerEndData = apiData.CTABannerEnd;

        const formattedCtaBannerStart = {
          text: ctaBannerStartData.text || "",
          ctaButtonText: ctaBannerStartData.ctaButtonText || "",
          newTab: ctaBannerStartData.newTab || false,
          ctaButtonLink: ctaBannerStartData.ctaButtonLink || "",
        };
        const formattedCtaBannerMiddle = {
          text: ctaBannerMiddleData.text || "",
          ctaButtonText: ctaBannerMiddleData.ctaButtonText || "",
          newTab: ctaBannerMiddleData.newTab || false,
          ctaButtonLink: ctaBannerMiddleData.ctaButtonLink || "",
        };
        const formattedCtaBannerEnd = {
          text: ctaBannerEndData.text || "",
          ctaButtonText: ctaBannerEndData.ctaButtonText || "",
          newTab: ctaBannerEndData.newTab || false,
          ctaButtonLink: ctaBannerEndData.ctaButtonLink || "",
        };

        // Set state
        setCtaBannerStart(formattedCtaBannerStart);
        setCtaBannerMiddle(formattedCtaBannerMiddle);
        setCtaBannerEnd(formattedCtaBannerEnd);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  return (
    <React.Fragment>
      <div className={styles["phone-number-intelligence"]}>
        {bannerData && <ProductBanner data={bannerData} />}
        {tableOfContentsData && <TableOfContents data={tableOfContentsData} />}
        <div>
          <div id="introduction">
            {introductorySectionData.map((item, index) => (
              <InlineImageAndParagraph
                key={index}
                id={`introductorySection-${index}`} // Ensure unique id
                data={item}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
          {ctaBannerStart && (
            <TextAndButtonBannerTransparent data={ctaBannerStart} />
          )}
          {methodData && (
            <div
              className={styles["leverage-verifiction-api"]}
              id="methodology"
            >
              <h2>
                <span>Methodology</span>
              </h2>
              <p>
                A consent-driven employee verification process that validates
                the employee details using in the following steps.
              </p>
              <div className={styles["leverage-verifiction-api-content"]}>
                <ResourcesMethodology data={methodData} itemCount={4} />
              </div>
            </div>
          )}
          {typesSectionData && (
            <InlineImageTextMap data={typesSectionData} id="types" />
          )}
          {needSectionData && (
            <div className={styles["special-info-section"]} id="needSection">
              <div className={styles["special-info-wrapper"]}>
                <h2>
                  {needSectionData.headingLight}{" "}
                  <span>{needSectionData.headingBold}</span>
                </h2>
                <h2></h2>
                <p className={styles["special-info-description"]}>
                  {needSectionData.tagline}
                  <br />
                  <br />
                  {needSectionData.bulletPoints.map((point, index) => (
                    <p key={index}>{point.text}</p>
                  ))}
                </p>

                {ctaBannerStart && (
                  <TextAndButtonBannerTransparent data={ctaBannerStart} />
                )}
              </div>
            </div>
          )}
          {useCasesData && <UseCases id="keyFeatures" data={useCasesData} />}
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
        {ctaBannerMiddle && (
          <TextAndButtonBannerTransparent data={ctaBannerMiddle} />
        )}
        {howCanDecentroHelpDataState && (
          <BulletPointsAndTextBlock
            id="howCanDecentroHelp"
            data={howCanDecentroHelpDataState}
          />
        )}
        {ctaBannerEnd && <TextAndButtonBannerTransparent data={ctaBannerEnd} />}
        {recommendedPagesData && (
          <RecommendedPages data={recommendedPagesData} />
        )}
      </div>
    </React.Fragment>
  );
};

export default BufferPage;
