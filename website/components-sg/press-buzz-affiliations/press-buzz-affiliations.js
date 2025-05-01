import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExpand } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// Styles Imports
import styles from "../../styles/components-styles/press-buzz-affiliations/press-buzz-affiliations.module.scss";

const PressAndBuzzAffiliations = (props) => {
  const [showPopUp, setPopUp] = useState(false);
  const [viewType, setViewType] = useState("");

  const handleResize = () => {
    if (window.innerWidth < 1023) setViewType("mobile");
    else setViewType("desktop");
  };
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
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div
      className={styles["inline-image-and-paragraph"]}
      id={props.id ? props.id : ""}
    >
      <div className={styles["image"]}>
        {props.data.imageLink ? (
          <Link href={props.data.imageLink} target="_blank">
            <img
              src={props.data.imageSrc}
              alt={
                props.data.headingLight
                  ? props.data.headingLight + " " + props.data.headingBold
                  : "logo"
              }
            />
          </Link>
        ) : (
          <img
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
          <>
            <div className={styles["zoom-feature"]}>
              <div className={styles["click-to-zoom"]}>
                <FontAwesomeIcon icon={faExpand} onClick={handlePopUpShow} />
                <span>Click on image to zoom</span>
              </div>
              {showPopUp ? (
                <div className={styles["explanatory-image-enlarged"]}>
                  <div
                    className={styles["cancel-popup"]}
                    onClick={handlePopUpClose}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <img
                    src={props.data.imageSrc}
                    alt={props.data.altText ? props.data.altText : "image"}
                  />
                </div>
              ) : null}
            </div>
          </>
        ) : null
      ) : null}

      <div className={styles["paragraph"]}>
        <h2>
          {props.data.headingLight}{" "}
          <span
            dangerouslySetInnerHTML={{ __html: props.data.headingBold }}
          ></span>
        </h2>
        {props.data.extraHeadingText ? (
          <h2
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
        {props.data.navigationLinkText ? (
          <Link href={props.data.navigationLink}>
            <span>{props.data.navigationLinkText}</span>
            <img src="/images/misc/right.svg" alt="arrow-right" />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default PressAndBuzzAffiliations;
