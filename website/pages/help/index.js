import React, { useContext } from "react";
import HelpSectionContext from "../../contexts/HelpSectionContext";
import HelpBanner from "../../components/help-banner/help-banner";
import Head from "next/head";
import Script from "next/script";

const Help = () => {
  const bannerData = {
    heading: "Hello!",
    tagline: "Are you…",
    buttonText: "Explore Now",
    newTab: false,
    imageSrc: "./images/help/help-header.svg",
    titleText: "Help",
    altText: "Help",
  };

  const visitorTypeData = [
    {
      id: 1,
      displayName: "Consumer",
    },
    {
      id: 2,
      displayName: "Merchant",
    },
    // {
    //   id: 3,
    //   displayName: "Explorer",
    // },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>
          Raise Support Ticket, Resolve Queries - Decentro Help & Support
        </title>
        <link rel="canonical" href="https://decentro.tech/help" />
        <link
          rel="alternate"
          href="https://decentro.tech/help"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Reach out to Decentro Support and get your issues resolved. We typically get back to all queries within 24 hours. Raise a ticket here."
        />
        <meta name="keywords" content="CKYC" />
        <meta
          property="og:title"
          content="Raise Support Ticket, Resolve Queries - Decentro Help & Support"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      {/* GA4 Script - Load after main content is interactive but before complete page load */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6NBW6WWGPQ"
        strategy="lazyOnload"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-6NBW6WWGPQ");
        }}
      />

      {/* Google Ads Script - Load after main content is interactive but before complete page load */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11419699036"
        strategy="lazyOnload"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "AW-11419699036");
        }}
      />
      <div className="ckyc">
        <HelpBanner data={bannerData} visitorData={visitorTypeData} />
      </div>
    </React.Fragment>
  );
};

export default Help;
