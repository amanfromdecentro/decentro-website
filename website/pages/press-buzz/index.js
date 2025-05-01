import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../requests.js";

import ProductBanner from "../../components/product-banner/product-banner.js";
const TextAndButtonBanner = dynamic(
  () =>
    import("../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const PressAndBuzzAffiliations = dynamic(() =>
  import("../../components/press-buzz-affiliations/press-buzz-affiliations.js")
);
const PodcastsAndVideos = dynamic(() =>
  import("../../components/podcasts-and-videos/podcasts-and-videos.js")
);

function PressAndBuzz() {
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Latest from us  <br/><span class='highlighted-heading'>Press & Buzz</span>",
    subHeading: "",
    tagline:
      "Never miss an update or latest from the financial world. Subscribe to our newsletter.",
    buttonText: "",
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/press-buzz.mp4",
    video: true,
    subscriptionBox: true,
    subscriptionBoxClassName: "banner-subscribe",
  };

  const affiliationsData2 = {
    headingLight: "",
    headingBold: "",
    text: "SFA is a platform designed to facilitate collaboration between all market participants and stakeholders in the FinTech ecosystem. We are designed to be an effective platform for members to engage with multiple stakeholders to find solutions to issues.<br/><br/>SFA has 50 MOUs with associations and government bodies around the world. Decentro leverages on SFA’s domestic network of 360+ FinTech companies and industry partners and global network in more than 32 countries.",
    imageSrc: "/images/press-buzz/sfa.svg",
    imageLink:
      "https://directory.singaporefintech.org/directory/listing/decentro-tech-pte-ltd",
  };

  const affiliationsData1 = {
    headingLight: "",
    headingBold: "",
    text: "Y Combinator provides seed funding for startups. Seed funding is the earliest stage of venture funding. It pays your expenses while you’re getting started.<br/>Some companies may need no more than seed funding. Others will go through several rounds. There is no right answer; how much funding you need depends on the kind of company you start. At Y Combinator, our goal is to get you through the first phase. This usually means: get you to the point where you’ve built something impressive enough to raise money on a larger scale.",
    imageSrc: "/images/press-buzz/y-combinator.png",
    imageLink: "http://ycombinator.com/companies/decentro",
  };

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const imageListData = {
    inlineHeading: "<span>Media</span>",
    imagesList1: [
      {
        src: "./images/media-images/moneycontrol-logo.svg",
        alt: "MoneyControl",
        name: "MoneyControl",
        imageLink:
          "https://www.moneycontrol.com/news/technology/zoho-juspay-decentro-get-rbis-nod-to-operate-as-online-payment-aggregators-12212341.html/amp",
      },
      {
        src: "./images/media-images/economicsTime.svg",
        alt: "Economic Times",
        name: "Economic Times",
        imageLink:
          "https://m.economictimes.com/tech/startups/juspay-zoho-and-decentro-join-the-rbis-list-of-payment-aggregators/amp_articleshow/107478332.cms",
      },
      {
        src: "./images/media-images/timesofIndia.svg",
        alt: "Times of India",
        name: "Times of India",
        imageLink:
          "https://timesofindia.indiatimes.com/business/india-business/fintech-infrastructure-company-decentro-acquires-neowise/amp_articleshow/101853296.cms",
      },
      {
        src: "./images/media-images/cxotoday.svg",
        alt: "CXOToday",
        name: "CXOToday",
        imageLink:
          "https://cxotoday.com/press-release/decentro-simplifies-recurring-payments-with-enach-and-upi-autopay-strengthening-indias-subscription-economy-ropes-in-yes-bank-as-its-first-partner-bank/",
      },
      {
        src: "./images/media-images/businessStandard.svg",
        alt: "Business Standard",
        name: "Business Standard",
        imageLink:
          "https://www.business-standard.com/amp/finance/news/with-pa-approval-fintech-firm-decentro-launches-new-payment-stack-124052301300_1.html",
      },
      {
        src: "./images/media-images/etBFSI.svg",
        alt: "ET BFSI",
        name: "ET BFSI",
        imageLink:
          "https://bfsi.economictimes.indiatimes.com/amp/news/fintech/decentro-launches-rbi-compliant-flow-2-0-payment-stack/110325592",
      },
    ],
    imagesList2: [
      {
        src: "./images/media-images/theWeek.svg",
        alt: "The Week",
        name: "The Week",
        imageLink:
          "https://www.theweek.in/wire-updates/business/2024/08/08/dcm62-decentro.amp.html",
      },
      {
        src: "./images/media-images/aniNews.svg",
        alt: "ANI News",
        name: "ANI News",
        imageLink:
          "https://www.aninews.in/news/business/decentro-deepens-global-saas-offering-with-ledgers-for-automated-reconciliation20240808171101/",
      },
      {
        src: "./images/media-images/financialExpress.svg",
        alt: "Financial Express",
        name: "Financial Express",
        imageLink:
          "https://www.financialexpress.com/business/banking-finance-decoding-kycs-tryst-with-regulatory-destiny-3420595/lite/",
      },
      {
        src: "./images/media-images/inc42.svg",
        alt: "Inc42",
        name: "Inc42",
        imageLink:
          "https://inc42.com/buzz/ycombinator-backed-decentro-unveils-modules-to-streamline-recurring-payments/",
      },
      {
        src: "./images/media-images/elets.svg",
        alt: "Elets",
        name: "Elets",
        imageLink:
          "https://bfsi.eletsonline.com/decentro-unveils-indias-first-self-hosted-ckyc-solution-to-align-with-cersais-new-compliance-mandate/",
      },
      {
        src: "./images/media-images/ibsIntelligence.svg",
        alt: "IBS Intelligence",
        name: "IBS Intelligence",
        imageLink:
          "https://ibsintelligence.com/ibsi-news/decentro-launches-2-innovative-modes-for-bank-account-verification/",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Press & Buzz - Decentro</title>
        <link rel="canonical" href={`https://decentro.tech/press-buzz`} />
        <link
          rel="alternate"
          href={`https://decentro.tech/press-buzz`}
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Learn about the latest news and what's new at Decentro. Head over to our Press & Buzz corner!"
        />
        <meta name="keywords" content="press, buzz, media, decentro" />
        <meta property="og:title" content="Press & Buzz - Decentro" />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className="press-and-buzz">
        <ProductBanner data={bannerData} />
        <div className="our-affiliations">
          <h2>
            Our <span>Affiliations</span>
          </h2>
          <div className="affiliations">
            <PressAndBuzzAffiliations data={affiliationsData1} />
            <PressAndBuzzAffiliations data={affiliationsData2} />
          </div>
        </div>
        <PodcastsAndVideos />
        <div className="images-list clients">
          <h2
            dangerouslySetInnerHTML={{ __html: imageListData.inlineHeading }}
          ></h2>
          <div className="content-list row1">
            {imageListData.imagesList1.map(function (object, i) {
              return (
                <div className="image-content" key={i}>
                  {object.imageLink ? (
                    <a href={object.imageLink} target="_blank" rel="noreferrer">
                      <img
                        src={object.src}
                        alt={object.alt ? object.alt : "image"}
                        className={object.name}
                      />
                    </a>
                  ) : (
                    <img
                      src={object.src}
                      alt={object.alt ? object.alt : "image"}
                      className={object.name}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="content-list row2">
            {imageListData.imagesList2.map(function (object, i) {
              return (
                <div className="image-content" key={i}>
                  {object.imageLink ? (
                    <a href={object.imageLink} target="_blank" rel="noreferrer">
                      <img
                        src={object.src}
                        alt={object.alt ? object.alt : "image"}
                        className={object.name}
                      />
                    </a>
                  ) : (
                    <img
                      src={object.src}
                      alt={object.alt ? object.alt : "image"}
                      className={object.name}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
    </>
  );
}

export default PressAndBuzz;
