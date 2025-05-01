import React, { useEffect, useState } from "react";
import styles from "../../styles/components-styles-sg/bullet-points-text-block/bullet-points-text-block.module.scss";
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
        {props.data.headingLight} <span>{props.data.headingBold}</span>
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
      </div>
    </div>
  );
};

export default BulletPointsAndTextBlock;
