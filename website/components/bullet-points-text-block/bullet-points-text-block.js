import React, { useEffect, useState } from "react";
import styles from "../../styles/components-styles/bullet-points-text-block/bullet-points-text-block.module.scss";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const BulletPointsAndTextBlock = (props) => {
  useEffect(() => {
    setSeparatorHeight();
    window.onresize = () => setSeparatorHeight();
  }, []);

  const setSeparatorHeight = () => {
    if (document.getElementsByClassName("bullet-points")[0]) {
      var bulletPointsHeight =
        document.getElementsByClassName("bullet-points")[0].offsetHeight;
      document.getElementsByTagName("hr")[0].style.height =
        bulletPointsHeight + "px";
    }
  };
  return (
    <div
      className={styles["bullet-points-text-container"]}
      id={props.id ? props.id : ""}
    >
      <h2>
        <span>{props?.data?.firstHeadingBold}</span>{props.data.headingLight} <span>{props.data.headingBold}</span>
      </h2>
      {props.data.tagline ? (
        <p className={styles["tagline"]}>{props.data.tagline}</p>
      ) : null}
      {props.data.bulletPointsHeader ? (
        <p className={styles["bullet-points-header"]}>
          {props.data.bulletPointsHeader}
        </p>
      ) : null}
      <div className={styles["bullet-points-text-content"]}>
        <div className={styles["bullet-points"]}>
          {props.data.bulletPoints.map(function (object, i) {
            return (
              <p dangerouslySetInnerHTML={{ __html: object.text }} key={i}></p>
            );
          })}
        </div>
        <hr />
        <div className={styles["text-block"]}>
          {props.data.textInBoxList.map(function (object, i) {
            return (
              <div key={i} className={styles["text-block-container"]}>
                <div className={styles["text-block-top"]}>
                  <p className={styles["lighter-top-heading"]}>For Developers</p>
                  <p dangerouslySetInnerHTML={{ __html: object.textInBox }}></p>
                  <p className={styles["lighter-sub-heading"]}>Simple & Automated APIs To Help You Launch 10X Faster.</p>
                </div>
                <div className={styles["text-block-middle"]}>
                  <div className={styles["item"]}>
                    <img src="/images/icons/api-text.svg" alt="api-text" />
                    <Link href={object.link} target="_blank">
                      {object.linkText}
                      <FaChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={styles["vertical-line"]} />
          <div className={styles["text-block-container"]}>
            <div className={styles["text-block-top"]}>
              <p className={styles["lighter-top-heading"]}>For Businesses</p>
              <p> 24x7 Multi-Channel Priority Support</p>
              <p className={styles["lighter-sub-heading"]}>Designed to be customer-centric</p>
            </div>
            <div className={styles["text-block-middle"]}>
              <div className={styles["item"]}>
                <img src="/images/icons/call.svg" alt="call-icon" />
                <Link href="/signup" target="_blank">
                  Call
                  <FaChevronRight />
                </Link>
              </div>
              <div className={styles["item"]}>
                <img src="/images/icons/email.svg" alt="email-icon" />
                <Link href="/signup" target="_blank">
                  Email
                  <FaChevronRight />
                </Link>
              </div>
              <div className={styles["item"]}>
                <img src="/images/icons/slack.svg" alt="slack-icon" />
                <Link href="/signup" target="_blank">
                  Slack
                  <FaChevronRight />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulletPointsAndTextBlock;
