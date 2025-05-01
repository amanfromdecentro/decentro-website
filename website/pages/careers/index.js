import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  FaMedkit,
  FaGamepad,
  FaHome,
  FaDesktop,
  FaSmile,
  FaGift,
} from "react-icons/fa";
import requests from "../../requests";

import ProductBanner from "../../components/product-banner/product-banner";
const TextAndButtonBanner = dynamic(
  () =>
    import("../../components/text-and-button-banner/text-and-button-banner"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const InlineImageAndParagraph = dynamic(() =>
  import(
    "../../components/inline-image-and-paragraph/inline-image-and-paragraph"
  )
);
const DecentroCareersGallery = dynamic(() =>
  import("../../components/decentro-careers-gallery/decentro-careers-gallery")
);
const TechStack = dynamic(() =>
  import("../../components/tech-stack/tech-stack")
);
// Styles Imports
import styles from "../../styles/page-styles/careers.module.scss";

const Careers = () => {
  // ^ Banner Data
  const bannerData = {
    headingLight: "",
    headingBold: "",
    heading:
      "Ready to Revolutionize the <br/><span class='highlighted-heading'>Future of Fintech?</span>",
    tagline:
      "Begin the next chapter of your career story with us! Be a part of the next big thing in Fintech.",
    buttonText: "Explore Roles",
    buttonLink: "https://angel.co/decentro/jobs",
    newTab: true,
    imageSrc: requests.ASSETS_BASE_URL_S3 + "/careers.mp4",
    video: true,
  };

  // ^ InlineImageAndParagraph Data
  const inlineImageAndParagraphData = {
    headingLight: "Our",
    headingBold: "Mission",
    text: "Imagine the possibilities in business if we remove >90% of the friction in the flow of money and financial data.<br/><br/>Decentro is a one-stop platform where you can integrate with desired banking APIs or SDKs and then go live within a few days—no need to run around for 5+ months to integrate with multiple banking partners for launching your products.<br/><br/>We are doing the initial hard work of all those legacy integrations to customise and make the desired modules available in the simplest way with the highest degree of automation.",
    imageSrc: "/images/careers/our-mission.svg",
  };

  // ^ InlineTextAndButton Data
  const inlineTextAndButtonData = {
    text: "We are a group of people who can help you reach the next level of financial innovation. Join us!",
    buttonText: "Explore & Apply",
    newTab: true,
    buttonLink: "https://angel.co/decentro/jobs",
  };

  const sectionTypeObject = {
    typeOfSection: "alternate-content-without-cta",
  };

  // ^ UseCases Data
  const useCasesData = {
    headingLight: "Our",
    headingBold: "Tech Stack",
    tagline:
      "Making use of the latest and best practices to give you the best of services",
    block1: [
      {
        heading: "",
        paragraph: "The technical infrastructure on which we are building upon",
        imageSrc: "./images/careers/aws-icon.svg",
      },
      {
        heading: "",
        paragraph: "The persistent data storage for our system",
        imageSrc: "./images/careers/mysql-icon.svg",
      },
      {
        heading: "",
        paragraph: "The basic building block of our codebase",
        imageSrc: "./images/careers/python-icon.svg",
      },
      {
        heading: "",
        paragraph: "The web framework handling all the API calls",
        imageSrc: "./images/careers/flask-icon.svg",
      },
    ],
    block1extra: [
      {
        heading: "",
        paragraph:
          "WSGI compliant Application server for serving our flask applications",
        imageSrc: "./images/careers/gunicorn-icon.svg",
      },
      {
        heading: "",
        paragraph: "The reverse proxy and the load balancer",
        imageSrc: "./images/careers/nginx-icon.svg",
      },
      {
        heading: "",
        paragraph: "Our framework of choice for the UI",
        imageSrc: "./images/careers/react-icon.svg",
      },
      {
        heading: "",
        paragraph: "The gateway (think Janus) to our multi-environment servers",
        imageSrc: "./images/careers/kong-icon.svg",
      },
    ],
    showOthers: false,
    tagline2: "",
    block2: [],
    backgroundClass: "tech-stack__section",
  };

  // ^ Images Data
  const images = [
    {
      original: "/images/careers/team-image-1.jpg",
      thumbnail: "/images/careers/team-image-1.jpg",
      originalAlt: "team-image",
    },
    {
      original: "/images/careers/team-image-2.jpg",
      thumbnail: "/images/careers/team-image-2.jpg",
      originalAlt: "team-image",
    },
    {
      original: "/images/careers/team-image-3.jpg",
      thumbnail: "/images/careers/team-image-3.jpg",
      originalAlt: "team-image",
    },
    {
      original: "/images/careers/team-image-4.jpg",
      thumbnail: "/images/careers/team-image-4.jpg",
      originalAlt: "team-image",
    },
    {
      original: "/images/careers/team-image-5.jpg",
      thumbnail: "/images/careers/team-image-5.jpg",
      originalAlt: "team-image",
    },
    {
      original: "/images/careers/team-image-6.jpg",
      thumbnail: "/images/careers/team-image-6.jpg",
      originalAlt: "team-image",
    },
    {
      original: "/images/careers/team-image-7.jpg",
      thumbnail: "/images/careers/team-image-7.jpg",
      originalAlt: "team-image",
    },
  ];

  // ^TextAndButtonBanner Data
  const textAndButtonBannerData = {
    ctaTitle: "Dive into the <span>Next Revolution</span> of Fintech",
    ctaButtonText: "Explore & Apply",
    newTab: true,
    ctaButtonLink: "https://angel.co/decentro/jobs",
  };

  return (
    <>
      <Head>
        <title>
          We&apos;re hiring | Fintech Jobs at API Banking Platform - Decentro
        </title>
        <link rel="canonical" href={`https://decentro.tech/careers`} />
        <link
          rel="alternate"
          href="https://decentro.tech/careers"
          hreflang="en-IN"
        />
        <meta
          name="description"
          content="Go to the next level in your career and grow with a team of A players. Here are the open positions at Decentro!"
        />
        <meta
          name="keywords"
          content="decentro, careers, jobs, open positions, hiring"
        />
        <meta
          property="og:title"
          content="We're hiring | Fintech Jobs at API Banking Platform - Decentro"
        />
        <meta property="og:image" content={bannerData.imageSrc} />
      </Head>
      <div className={styles["careers"]}>
        <ProductBanner data={bannerData} />
        <InlineImageAndParagraph data={inlineImageAndParagraphData} />

        {/* <ChallengesAndFuture /> */}
        <TechStack data={useCasesData} />
        {/* ***************** Careers Perks Starts ****************** */}
        <div className={styles["perks"]}>
          <h2>
            Some <span>awesome perks</span>
          </h2>
          <div className={styles["perks-block"]}>
            <div className={styles["perk"]}>
              <FaMedkit />
              <p>Complete Health Insurance</p>
            </div>
            <div className={styles["perk"]}>
              <FaGift />
              <p>ESOPs that are Actually Put in Place</p>
            </div>
            <div className={styles["perk"]}>
              <FaHome />
              <p>Work From Home Friendly</p>
            </div>
            <div className={styles["perk"]}>
              <FaGamepad />
              <p>Generous Vacation Policy</p>
            </div>
            <div className={styles["perk"]}>
              <FaSmile />
              <p>Bring Along Those Furry Friends</p>
            </div>
            <div className={styles["perk"]}>
              <FaDesktop />
              <p>Latest Computing Devices</p>
            </div>
          </div>
        </div>
        {/* ***************** Careers Perks Ends ****************** */}

        {/* ***************** Gallery Starts ****************** */}
        <div className={styles["decentro-gallery"]}>
          <h2>
            Through <span>The Lens</span>
          </h2>
          <p>
            We live, we laugh, and we clock one milestone after another,
            together! Here are some of the best moments captured.
          </p>
          <DecentroCareersGallery images={images} />
        </div>
        {/* ***************** Gallery Ends ****************** */}
        <TextAndButtonBanner data={textAndButtonBannerData} />
      </div>
    </>
  );
};

export default Careers;
