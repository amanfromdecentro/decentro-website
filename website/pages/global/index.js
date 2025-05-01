import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import requests from "../../sgRequests";
// Components
import Banner from "../../components-sg/banner/banner";
// animations
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import useGraphics from "../../utilities/custom-hooks/useGraphics";


const ClientLogoCarousel = dynamic(() =>
  import("../../components-sg/client-logo-carousel/client-logo-carousel")
);
const WhyDecentro = dynamic(() =>
  import("../../components-sg/why-decentro/why-decentro")
);
const GetStarted = dynamic(() =>
  import("../../components-sg/get-started/get-started")
);
const OurProducts = dynamic(() =>
  import("../../components-sg/our-products/our-products")
);
const OurProductsMobile = dynamic(() =>
  import("../../components-sg/our-products-mobile/our-products-mobile")
);
const AwardsRecognition = dynamic(() =>
  import("../../components-sg/awards-recognition/awards-recognition")
);
const TestimonialsCarousel = dynamic(() =>
  import("../../components-sg/testimonials-carousel/testimonials-carousel")
);
const BookDemoBanner = dynamic(() =>
  import("../../components-sg/book-demo-banner/book-demo-banner")
);
const TextAndButtonBannerGray = dynamic(() =>
  import(
    "../../components-sg/text-and-button-banner-gray/text-and-button-banner-gray"
  )
);
import styles from "../../styles/Home.module.scss";
// utils
import { clientLogos } from "../../components-sg/client-logos";

export default function Home() {
  const [viewType, setViewType] = useState("");

  const controls = useAnimation();

  const animationURL = 'https://decentro-website-v2-assets.s3.ap-south-1.amazonaws.com/animations/1.+SEA+Payments+Map+Animation+Final.json'
  const { data, loading, error } = useGraphics(animationURL);

  const handleResize = () => {
    if (window.innerWidth < 1024) setViewType("mobile");
    else setViewType("desktop");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const bannerData = {
    heroImg: "/images/home/banner-global.svg"
  }

  const textAndButtonBannerData = {
    ctaTitle:
      'Ready to save time and <span className="header-section-highlighted">launch 10X faster?</span>',
    ctaDescription: "Let us help you! It’s as simple as it should be.",
    ctaButtonText: "Get Started",
    ctaButtonLink: requests.SIGNUP,
  };

  const clientLogoData = {
    header:
      "Trusted by 800+ businesses across India & Singapore to launch their fintech products 10x faster",
    clientLogos: clientLogos,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Decentro - Cross Border Payments and Reconciliation Solutions
        </title>
        <link
          rel="alternate"
          href="https://www.decentro.tech/global"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="Simple & Automated APIs for Cross Border Payments and Reconciliations. Launch your products 10X faster with Decentro."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["homepage"]}>
        <Banner data={bannerData} />
        <ClientLogoCarousel data={clientLogoData} />
        <WhyDecentro />
        <GetStarted />
        {viewType === "desktop" ? <OurProducts /> : <OurProductsMobile />}

        {/* Displaying animation only when all three are truthy. */}
        {data && !loading && !error &&
          <div className={styles["lottie-animation-container"]}>
            <h2>
              Expand Your <span className="header-section-highlighted">Global Footprint</span>
            </h2>
            <motion.div
              animate={controls}
              initial="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 500 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Lottie animationData={data} />
            </motion.div>
          </div>
        }

        <AwardsRecognition />
        <TestimonialsCarousel />
        <div className={styles["book-demo-banner"]}>
          <BookDemoBanner />
        </div>
        <TextAndButtonBannerGray data={textAndButtonBannerData} />
      </div>
    </div>
  );
}
