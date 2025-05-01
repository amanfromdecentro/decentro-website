import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import requests from "../../../requests";
import axios from "axios";
import { FaChevronUp } from "react-icons/fa";
import Head from "next/head";
import FaqDetails from "../../../components/faq-details/faq-details";
import FaqNavigation from "../../../components/faq-navigation/faq-navigation";
import { useRouter } from "next/router";
// import TextAndButtonBanner from "../../../components/text-and-button-banner/text-and-button-banner";
const TextAndButtonBanner = dynamic(
  () =>
    import("../../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const FaqMaster = (props) => {
  const router = useRouter();
  const queryParam = router.query.masterLink;
  const [faqs, setFaqs] = useState([]);
  const [currentHeader, setCurrentHeader] = useState("");
  const [menus, setMenus] = useState([]);
  const [metaTags, setMetaTags] = useState({
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
  });
  const [ctaBannerData, setCtaBannerData] = useState({
    ctaTitle: "Ready to save time, resources, & launch 10x faster?",
    ctaDescription: "Let us help you! It's as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: "/",
  });
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (queryParam) {
      fetchFAQs();
      fetchMetaTags();
      fetchNavigationMenus();
      fetchCTA();
      fetchTableData();
    }
  }, [queryParam]);

  useEffect(() => {
    if (tableData.length > 0 && faqs.length > 0) {
      const updatedFaqs = faqs.map((faq) => {
        const matchingTableData = tableData.find(
          (table) => table.queryLinkIdentifier === faq.queryLinkIdentifier
        );
        return matchingTableData
          ? { ...faq, tableData: matchingTableData }
          : faq;
      });
      setFaqs(updatedFaqs);
    }
  }, [tableData, faqs]);

  const fetchTableData = () => {
    axios
      .get(
        `${requests.STRAPI_STAGING_API_IP_BASE_URL}${requests.STRAPI_DECENTRO_FAQS_TABLEDATA}?populate=*&filters[decentro_faq_navigation][decentro_faq_master_link][masterLink][$eq]=/help/faqs/${queryParam}`
      )
      .then((response) => {
        const tempTableData = response.data.data.map((item) => ({
          column1: item.attributes.column1,
          column2: item.attributes.column2,
          queryLinkIdentifier:
            item.attributes.decentro_faq_navigation.data.attributes
              .queryLinkIdentifier,
          headingCol1: item.attributes.headingCol1,
          headingCol2: item.attributes.headingCol2,
        }));
        setTableData(tempTableData);
      })
      .catch((error) => console.log(error));
  };

  const fetchCTA = () => {
    axios
      .get(
        `${requests.STRAPI_STAGING_API_IP_BASE_URL}${requests.STRAPI_DECENTRO_FAQS_CTA}?populate=*&filters[decentro_faq_master_link][masterLink][$eq]=/help/faqs/${queryParam}`
      )
      .then((response) => {
        if (response.data.data.length > 0) {
          const ctaData = response.data.data[0].attributes;
          setCtaBannerData({
            ctaTitle: ctaData.ctaTitle,
            ctaDescription: ctaData.ctaDescription,
            ctaButtonText: ctaData.ctaButtonText,
            ctaButtonLink: ctaData.ctaButtonLink,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchMetaTags = () => {
    axios
      .get(
        `${requests.STRAPI_STAGING_API_IP_BASE_URL}${requests.STRAPI_DECENTRO_META_TAGS}?populate=*&filters[decentro_faq_master_link][masterLink][$eq]=/help/faqs/${queryParam}&sort[0]=order:asc`
      )
      .then((response) => {
        if (response.data.data.length > 0) {
          const metaData = response.data.data[0].attributes;
          setMetaTags({
            metaTitle: metaData.metaTitle,
            metaDescription: metaData.metaDescription,
            metaKeywords: metaData.metaKeywords,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchNavigationMenus = () => {
    axios
      .get(
        `${requests.STRAPI_STAGING_API_IP_BASE_URL}${requests.STRAPI_DECENTRO_FAQ_NAV_LINKS}?populate=*&filters[decentro_faq_master_link][masterLink][$eq]=/help/faqs/${queryParam}&sort[0]=order:asc`
      )
      .then((response) => {
        const tempNavigationMenusCollection = response.data.data.map(
          (item) => ({
            displayName: item.attributes.displayName,
            queryLinkIdentifier: item.attributes.queryLinkIdentifier,
            alias: item.attributes.alias,
          })
        );
        setMenus(tempNavigationMenusCollection);
        if (response.data.data.length > 0) {
          setCurrentHeader(
            response.data.data[0].attributes.decentro_faq_master_link.data
              .attributes.masterName
          );
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchFAQs = () => {
    axios
      .get(
        `${requests.STRAPI_STAGING_API_IP_BASE_URL}${requests.STRAPI_DECENTRO_SECTION_FAQS}?populate=*&filters[decentro_faq_master_link][masterLink][$eq]=/help/faqs/${queryParam}&sort[0]=decentro_faq_navigation.order:asc`
      )
      .then((response) => {
        const tempFaqsCollection = response.data.data.map((item) => ({
          question: item.attributes.question,
          solution: item.attributes.solution,
          queryLinkIdentifier: item.attributes.queryLinkIdentifier,
          alias: item.attributes.alias,
          id: item.id,
          order: item.attributes.decentro_faq_navigation.data.attributes.order,
        }));
        setFaqs(tempFaqsCollection);
      })
      .catch((error) => console.log(error));
  };

  if (!faqs) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{metaTags.metaTitle}</title>
        <meta name="description" content={metaTags.metaDescription} />
        <meta name="keywords" content={metaTags.metaKeywords} />
        {/* Google Analytics (gtag.js) */}
        <script
          defer
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6NBW6WWGPQ"
        />
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6NBW6WWGPQ');
            `,
          }}
        />
        {/* Google tag (gtag.js)  */}
        {/* <script
          defer
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11419699036"
        />

        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'AW-11419699036');`,
          }}
        /> */}
      </Head>
      <React.Fragment>
        <div className="faqs-content">
          <div className="navigation-section">
            {menus && <FaqNavigation navigation={menus} />}
          </div>
          <div className="content-section-right">
            <div className="current-faq-content">
              <div className="accordion-list">
                <FaqDetails
                  data={faqs}
                  header={currentHeader}
                  tabledata={tableData}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cta-container">
          <TextAndButtonBanner data={ctaBannerData} />
        </div>
      </React.Fragment>
    </>
  );
};

export default FaqMaster;
