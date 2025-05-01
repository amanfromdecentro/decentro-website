import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaExpand, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import styles from "../../styles/components-styles/inline-image-and-paragraph/inline-image-and-paragraph.module.scss";
import ReactMarkdown from "react-markdown";

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

  const handleResize = () => {
    if (window.innerWidth < 1024) setViewType("mobile");
    else setViewType("desktop");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const openPage = (pageLink) => {
    window.open(pageLink);
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
      onClick={
        props.data.navigationLink
          ? () => {
            openPage(props.data.navigationLink);
          }
          : undefined
      }
      style={{
        flexFlow: props.reverse == true ? "row-reverse" : "row",
        width: props.animatedVideo
          ? viewType == "desktop"
            ? "90%"
            : "100%"
          : "auto",
        margin: "auto",
        paddingTop: props.animatedVideo && "30px",
        paddingBottom: props.animatedVideo && "30px",
        boxSizing: "border-box",
        alignItems: "center"
      }}
    >
      <div
        ref={ref}
        className={styles["image"]}
        style={{
          justifyContent: props.data.imageAlignEnd ? "flex-end" : "center",
          // width: props.data.imageWidth ? props.data.imageWidth : "40%",
          width: props.animatedVideo
            ? "100%"
            : props.data.imageWidth
              ? props.data.imageWidth
              : "40%",
          // display:
          //   viewType == "mobile" ? (props.zoom ? "block" : "none") : null,
          display:
            viewType === "mobile"
              ? props.zoom || props.animatedVideo
                ? "block"
                : "none"
              : null,
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
              hidden: { opacity: 0, y: 250 },
            }}
            transition={{ duration: 0.5 }}
            className="animation-control"
            style={{ height: "100%" }}
          >
            <Lottie
              animationData={props.data.animationJsonData}
              style={{ height: "100%" }}
            />
          </motion.div>
        ) : props?.isVideo ? (
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
        ) : (
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

      {/* {!props.animatedVideo && props.zoom === true ? (
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
      ) : null} */}

      <div
        className={styles["paragraph"]}
        style={{
          width: props.data.textWidth ? props.data.textWidth : "50%",
        }}
      >
        {props.data.headingLight || props.data.headingBold ? (
          <div>
            <h2
              className={styles["item-header"]}
              style={{
                color: "#0A192C",
                fontWeight: !props.boldBlack ? "400" : "600",
              }}
            // dangerouslySetInnerHTML={{ __html: props.data.headingLight }}
            >
              {props.data.headingLight}{" "}
              <span
                dangerouslySetInnerHTML={{ __html: props.data.headingBold }}
              ></span>
            </h2>
            <p className={styles["subheading"]}>
              {props.data.subheading}
            </p>
          </div>

        ) : props.data.heading ? (
          <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }}></h2>
        ) : null}
        {props.data.ycExtraSubheading ? (
          <p className={styles["yc-subheading"]}>
            {props.data.ycExtraSubheading}
          </p>
        ) : null}
        {props.data.extraHeadingText ? (
          <h2
            className={styles["extra-heading-text"]}
            dangerouslySetInnerHTML={{ __html: props.data.extraHeadingText }}
          ></h2>
        ) : null}
        {props.fromServer ? (
          <ReactMarkdown>{props.data.text}</ReactMarkdown>
        ) : (
          // <p dangerouslySetInnerHTML={{ __html: props.data.text }}></p>
          <p dangerouslySetInnerHTML={{ __html: props.data.text }}></p>
        )}


        {/* bulletpoints with subheading */}

        {props?.data?.bulletPoints ? (
          <div className={styles["inline-image-text-bullet-points-container"]}>
            {props.data.bulletPoints.map(function (key, index) {
              return (
                <div className={styles["bullet-points-container"]} key={index}>
                  <div className={styles["bullet-points-title"]}>
                    {props.data.bulletPoints[index].title}
                  </div>
                  <div className={styles["points-container"]}>
                    {props.data.bulletPoints[index].points.map(eachPoint => (
                      <p
                        key={index}
                        className={styles["inline-image-text-bullet"]}
                        dangerouslySetInnerHTML={{
                          __html: eachPoint,
                        }}
                      ></p>
                    ))}
                  </div>


                </div>

                // <p
                //   key={index}
                //   className={styles["inline-image-text-bullet"]}
                //   dangerouslySetInnerHTML={{
                //     __html: props.data.bulletPointsText[index],
                //   }}
                // ></p>
              );
            })}
          </div>
        ) : null}

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
                event.stopPropagation();
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
              <Link
                className="inline-image-text-navigation-link"
                href={props.data.CTAButtonLink}
                target="_blank"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                {props.data.CTAButtonText}
                <FaChevronRight
                  style={{ marginLeft: "5px" }}
                  icon={FaChevronRight}
                />
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
