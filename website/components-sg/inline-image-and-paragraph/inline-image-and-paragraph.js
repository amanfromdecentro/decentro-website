import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaExpand } from "react-icons/fa";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import styles from "../../styles/components-styles/inline-image-and-paragraph/inline-image-and-paragraph.module.scss";

const InlineImageAndParagraph = (props) => {
  const [showPopUp, setPopUp] = useState(false);
  const [viewType, setViewType] = useState("");

  const handlePopUpClose = () => {
    document.body.classList.remove("stop-scroll");
    setPopUp(false);
  };

  const handlePopUpShow = () => {
    if (viewType === "mobile") {
      document.body.classList.add("stop-scroll");
      setPopUp(true);
    }
  };

  const openPage = (pageLink) => {
    window.open(pageLink, "_blank");
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      className={styles["inline-image-and-paragraph"]}
      id={props.id ? props.id : ""}
      onClick={(event) => {
        event.preventDefault();
        props.data.navigationLink
          ? openPage(props.data.navigationLink)
          : undefined;
      }}
      style={{
        flexFlow: props.reverse == true ? "row-reverse" : "row",
      }}
    >
      <div
        ref={ref}
        className={styles["image"]}
        style={{
          justifyContent: props.data.imageAlignEnd ? "flex-end" : "center",
          width: props.data.imageWidth ? props.data.imageWidth : "40%",
        }}
      >
        {props.data.imageLink ? (
          <Link href={props.data.imageLink} target="_blank">
            <img
              style={{
                maxWidth: props.data.maxWidth ? props.data.maxWidth : "",
              }}
              src={props.data.imageSrc}
              alt={
                props.data.headingLight
                  ? props.data.headingLight + " " + props.data.headingBold
                  : "logo"
              }
            />
          </Link>
        ) : props.animatedVideo ? (
          <motion.div
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 500 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Lottie animationData={props.data.animationJsonData} />
          </motion.div>
        ) : props?.isVideo ?
          <video
            autoPlay="autoplay"
            loop
            muted
            playsInline
            className={styles["video-background"]}
            // width={450}
            height={450}
          >
            <source src={props.data.videoSrc} type="video/mp4"></source>
          </video>
          :
          (
            <img
              style={{
                maxWidth: props.data.maxWidth ? props.data.maxWidth : "",
              }}
              src={props.data.imageSrc}
              alt={
                props.data.altText
                  ? props.data.altText
                  : props.data.headingLight
                    ? props.data.headingLight + " " + props.data.headingBold
                    : "logo"
              }
              title={props.data.titleText ? props.data.titleText : ""}
              onClick={props.zoom ? handlePopUpShow : undefined}
            />
          )}
      </div>
      {props.zoom === true ? (
        viewType === "mobile" ? (
          <React.Fragment>
            <div className={styles["zoom-feature"]}>
              <div className={styles["click-to-zoom"]}>
                <FaExpand onClick={handlePopUpShow} />
                <span>Click on image to zoom</span>
              </div>
              {showPopUp ? (
                <div className={styles["explanatory-image-enlarged"]}>
                  <div
                    className={styles["cancel-popup"]}
                    onClick={handlePopUpClose}
                  >
                    <FaArrowLeft icon={FaArrowLeft} />
                  </div>
                  <img
                    src={props.data.imageSrc}
                    alt={props.data.altText ? props.data.altText : "image"}
                  />
                </div>
              ) : null}
            </div>
          </React.Fragment>
        ) : null
      ) : null}

      <div className={styles["paragraph"]}>
        {props.data.headingLight || props.data.headingBold ? (
          <h2
            className={styles["item-header"]}
            style={{
              color: props.boldBlack ? "#3c3c3c" : "#096ef2",
              fontWeight: !props.boldBlack ? "400" : "600",
            }}
          >
            {props.data.headingLight}{" "}
            <span
              dangerouslySetInnerHTML={{ __html: props.data.headingBold }}
            ></span>
          </h2>
        ) : props.data.heading ? (
          <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }}></h2>
        ) : null}

        {props.data.extraHeadingText ? (
          <h2
            className={styles["extra-heading-text"]}
            dangerouslySetInnerHTML={{ __html: props.data.extraHeadingText }}
          ></h2>
        ) : null}
        <p dangerouslySetInnerHTML={{ __html: props.data.text }}></p>
        {props.data.bulletPointsText ? (
          <div className={styles["inline-image-text-bullet-points"]}>
            {props.data.bulletPointsText.map(function (key, index) {
              return (
                <p
                  key={index}
                  className={styles["inline-image-text-bullet"]}
                  dangerouslySetInnerHTML={{
                    __html: props.data.bulletPointsText[index],
                  }}
                ></p>
              );
            })}
          </div>
        ) : null}
        {props.data.extraEndingText ? (
          <p
            className={styles["extra-ending-text"]}
            dangerouslySetInnerHTML={{ __html: props.data.extraEndingText }}
          ></p>
        ) : null}
        {props.data.navigationLinkText ? (
          <div className={styles["get-started-btn"]}>
            <Link
              href={props.data.navigationLink}
              target="_blank"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              {props.data.navigationLinkText}
            </Link>
          </div>
        ) : null}
        {props.data.CTAButtonLink ? (
          <div
            className={
              styles["text-and-button-banner"] +
              " " +
              styles["cta-inline-paragraph"]
            }
          >
            {props.data.CTAText ? (
              <p dangerouslySetInnerHTML={{ __html: props.data.CTAText }}></p>
            ) : (
              ""
            )}
            {props.data.CTAButtonText ? (
              <Link href={props.data.CTAButtonLink}>
                {props.data.CTAButtonText}
              </Link>
            ) : (
              ""
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InlineImageAndParagraph;
