import React, { useState, useEffect } from "react";
import requests from "../../../requests";
import GridTemplate from "../../../components/grid-template/grid-template";
import axios from "axios";
import Head from "next/head";

const KnowledgeBase = () => {
  // States to store API data
  const [masterCardsData, setMasterCardsData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 12; // Number of items to load per page

  // Calling the master cards and getting card data
  useEffect(() => {
    fetchMasterCards();
  }, []);

  // Fetch All Master Cards
  // const fetchMasterCards = () => {
  //   axios
  //     .get(
  //       requests.STRAPI_STAGING_API_IP_BASE_URL +
  //         requests.STRAPI_DECENTRO_FAQS_MASTER_CARDS +
  //         requests.STRAPI_POPULATE_ALL_QUERY
  //     )
  //     .then((response) => {
  //       let tempResponseData = [];
  //       // Ordering the received response based on order integer key
  //       response.data.data.sort((a, b) =>
  //         a.attributes.order > b.attributes.order ? 1 : -1
  //       );
  //       for (let i = 0; i < response.data.data.length; i++) {
  //         tempResponseData.push(response.data.data[i]);
  //       }
  //       setMasterCardsData(tempResponseData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const fetchMasterCards = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `${requests.STRAPI_STAGING_API_IP_BASE_URL}${requests.STRAPI_DECENTRO_FAQS_MASTER_CARDS}?pagination[page]=${page}&pagination[pageSize]=${itemsPerPage}&sort[0]=createdAt:desc&populate=*`
      );

      console.log(response);
      const newData = response.data.data;
      setMasterCardsData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(newData.length === itemsPerPage);
    } catch (error) {
      console.error("Error fetching master cards:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewMore = () => {
    fetchMasterCards();
  };

  return (
    <>
      <Head>
        <title>Payments & Banking Help Center - Decentro</title>
        <link rel="canonical" href="https://decentro.tech/help/faqs" />
        <link
          rel="alternate"
          href="https://decentro.tech/help/faqs"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Payments and Banking Help Center from Decentro which provides short guides and videos on everything Fintech like UPI, CKYC, Ledgers, and more."
        />
        <meta name="keywords" content="CKYC" />
        <meta
          property="og:title"
          content="Payments & Banking Help Center - Decentro"
        />
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
        <script
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
        />
      </Head>
      {/* <GridTemplate data={masterCardsData} /> */}
      <GridTemplate
        data={masterCardsData}
        isLoading={isLoading}
        hasMore={hasMore}
        onViewMore={fetchMasterCards}
      />
    </>
  );
};

export default KnowledgeBase;
