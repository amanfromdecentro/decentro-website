import React, { useEffect } from "react";
import styles from "../../styles/components-styles/product-banner/product-banner.module.scss";
import ClientLogoCarousel from "../client-logo-carousel/client-logo-carousel";
import SubscribeInput from "../subscribe-input/subscribe-input";
import Link from "next/link";
import { animateNumbers } from "../../utilities/numberAnimation";
import Image from "next/image";

const ProductBanner = (props) => {
  useEffect(() => {
    animateNumbers(".metric-number");
  }, []);

  return (
    <div className={styles["banner"]}>
      {/* <img
        className={`${styles["banner-bg"]} ${styles["bg-curves"]}`}
        src="/images/bg-banners/lines-bg-header.svg"
        alt="banner bg lines"
      /> */}
      <div className={styles["banner-curve-container"]}>
        <Image
          className={`${styles["banner-bg"]} ${styles["bg-curves"]}`}
          src="/images/bg-banners/lines-bg-header.svg"
          alt="banner bg lines"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
      {props.data.bannerBgPresent && !props?.data?.DBackground && (
        // <img
        //   className={`${styles["banner-bg-indicator"]} ${styles["bg-indicators"]}`}
        //   src={props.data.bannerBgImageSrc}
        //   alt="banner bg"
        // />
        <div className={styles["banner-D-container"]}>
          <Image
            className={`${styles["banner-bg-indicator"]} ${styles["bg-indicators"]}`}
            src={props.data.bannerBgImageSrc}
            alt="banner bg"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </div>
      )}
      {props?.data?.DBackground && (
        <div className={styles["resources-D-container"]}>
          <Image
            className={`${styles["banner-bg-indicator"]} ${styles["bg-indicators"]}`}
            src="/images/resources/D-bg.svg"
            alt="banner bg lines"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </div>
      )}
      <div className={styles["left-container"]}>
        {props.data.inlineHeading ? (
          <h1
            dangerouslySetInnerHTML={{ __html: props.data.inlineHeading }}
          ></h1>
        ) : (
          ""
        )}
        {props.data.heading ? (
          <h1 dangerouslySetInnerHTML={{ __html: props.data.heading }}></h1>
        ) : props.data.headingLight && props.data.headingBold ? (
          <h1>
            <span className={styles["header-light"]}>
              {props.data.headingLight}
            </span>
            <br />
            <span className="header-bold">{props.data.headingBold}</span>
          </h1>
        ) : (
          ""
        )}
        {props.data.subHeading ? (
          <h3 dangerouslySetInnerHTML={{ __html: props.data.subHeading }}></h3>
        ) : (
          ""
        )}
        <h2 dangerouslySetInnerHTML={{ __html: props.data.tagline }}></h2>
        {props.data.buttonText ? (
          <Link
            href={props.data.buttonLink}
            target={props.data.newTab ? "_blank" : ""}
          >
            {props.data.buttonText}
          </Link>
        ) : (
          ""
        )}
        {props.data.metrics ? (
          <div className={styles["banner-numbers-container"]}>
            {props.data.metricList.map((item, index) => {
              return (
                <div className={styles["banner-numbers-item"]} key={index}>
                  <span className={styles["highlighted-heading"]}>
                    {item.numberElement ? (
                      <span className="metric-number">
                        {item.numberElement}
                      </span>
                    ) : null}
                    {item.textBold}
                  </span>
                  &nbsp;{item.textLight}
                </div>
              );
            })}
          </div>
        ) : null}

        {props?.data?.isMultiIcons &&
          <div className={styles["banner-multi-icons-container"]}>
            <h2>{props.data.multiIcons.heading}</h2>
            <div className={styles["multi-icons-container"]}>
              {props.data.multiIcons.currenciesIcons.map((icon, index) => (
                <img key={index} src={icon.imageSrc} alt={`Currency icon ${index + 1}`} />
              ))}
            </div>
          </div>
        }
        {/* {props.data.subscriptionBox ? (
          props.data.subscriptionBoxClassName ? (
            <div className="subscribe-box-input">
              <SubscribeInput className={props.data.subscriptionBoxClassName} />
            </div>
          ) : (
            <SubscribeInput />
          )
        ) : (
          ""
        )} */}
      </div>
      <div className={styles["right-container"]}>
        {props.data.video ? (
          <video
            autoPlay="autoplay"
            loop
            muted
            playsInline
            className={styles["video-background"]}
            width={700}
            height={700}
          >
            <source src={props.data.imageSrc} type="video/mp4"></source>
          </video>
        ) : (
          <img
            src={props.data.imageSrc}
            alt={props.data.altText ? props.data.altText : "Decentro"}
            title={props.data.titleText ? props.data.titleText : ""}
          />
        )}
      </div>
    </div>
  );
};

export default ProductBanner;
