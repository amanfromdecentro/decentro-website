import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../../sgRequests.js";

import ProductBanner from "../../../components-sg/product-banner/product-banner.js";

const PressAndBuzzAffiliations = dynamic(() =>
  import(
    "../../../components-sg/press-buzz-affiliations/press-buzz-affiliations.js"
  )
);
const PodcastsAndVideos = dynamic(() =>
  import("../../../components-sg/podcasts-and-videos/podcasts-and-videos.js")
);
const TextAndButtonBanner = dynamic(() =>
  import(
    "../../../components-sg/text-and-button-banner/text-and-button-banner.js"
  )
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
    subscriptionBox: true,
    subscriptionBoxClassName: "banner-subscribe",
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/press-buzz.mp4",
    video: true,
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
        src: "/images/sg/about-us/yourstory.png",
        alt: "yourstory",
        name: "yourstory",
        imageLink:
          "https://yourstory.com/2022/11/bengaluru-fintech-startup-banking-api-platform-decentro-series-a-funding",
      },
      {
        src: "/images/sg/about-us/inc42.png",
        alt: "inc42",
        name: "inc42",
        imageLink:
          "https://inc42.com/buzz/ycombinator-backed-decentro-raises-funding-from-rapyd-ventures-others/",
      },
      {
        src: "/images/sg/about-us/techcrunch.png",
        alt: "techcrunch",
        name: "techcrunch",
        imageLink:
          "https://techcrunch.com/2022/10/31/y-combinator-backed-decentro-fintech-series-a-funding/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAAFt5rmrvL0efI0g6Upi5PyjKGg4PNn9XRja3sGAol1GeXhx8-Lk0qgpEWGI6Dbgbq2Fsiez6iCqniX8qdV18fz9MWm_N1_dtWqbZADuuJWkUoAMT4r1qU0gvNM-7MevSzt2WYP8ZbnYgBMJ3jCnXLUiY8K_1t9okmV2k5__RCHe",
      },
      {
        src: "/images/sg/about-us/crunchbase.png",
        alt: "crunchbase",
        name: "crunchbase",
        imageLink:
          "https://www.crunchbase.com/organization/decentro",
      },
      {
        src: "/images/sg/about-us/moneycontrol.svg",
        alt: "moneycontrol",
        name: "moneycontrol",
        imageLink:
          "https://www.moneycontrol.com/news/business/startup/decentro-raises-4-7-million-series-a-round-from-rapyd-ventures-others-9427391.html",
      },
    ],
    imagesList2: [
      {
        src: "/images/sg/about-us/vcc-logo.svg",
        alt: "vcc",
        name: "vcc-logo",
        imageLink:
          "https://www.vccircle.com/creds-kunal-shah-others-back-banking-integration-platform-decentro",
      },
      {
        src: "/images/sg/about-us/the-startup-lab.png",
        alt: "the-startup-lab",
        name: "the-startup-lab",
        imageLink:
          "https://thestartuplab.in/fintech-startup-decentro-raises-4-7-million-in-series-a-round/",
      },
      {
        src: "/images/sg/about-us/ycombinator.png",
        alt: "ycombinator",
        name: "ycombinator",
        imageLink: "https://www.ycombinator.com/companies/decentro",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Press & Buzz | Decentro</title>
        <link rel="canonical" href={`https://decentro.tech/global/press-buzz/`} />
        <link
          rel="alternate"
          href="https://decentro.tech/global/press-buzz"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Learn about the latest news and what's new at Decentro. Head over to our Press & Buzz corner!"
        />
        <meta name="keywords" content="press, buzz, media, decentro" />
        <meta property="og:title" content="Press & Buzz | Decentro" />
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
