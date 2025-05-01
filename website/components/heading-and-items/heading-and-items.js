import Image from "next/image";
import React from "react";

import styles from "../../styles/components-styles/heading-and-items/heading-and-items.module.scss";

const HeadingAndItems = (props) => {
  console.log(props)
  return (
    <div className={styles["heading-and-descriptive-image"]}>
      <div className={styles["wrapper"]}>
        {/* {props.data.headingFormatted ? (
          <h2
            dangerouslySetInnerHTML={{ __html: props.data.headingFormatted }}
          /> */}
        {/* ) : ( */}
        <h2>
          <span>{props.data.headingBold}</span>&nbsp;{props.data.headingLight}
        </h2>
        {/* )} */}
        {props.data.tagline && (
          <p className={styles["tagline"]}>{props.data.tagline}</p>
        )}

        <div className={styles["methodology-steps"]}>
          {props.data.items.map((item, index) => {
            return (
              <div className={styles["item"]} key={index}>
                <div className={styles["item-image-title-container"]}>
                  <div className={styles["item-image"]}>
                    <img src={item.imageSrc} alt="header-icon" />
                  </div>
                  <p
                    className={styles["item-title"]}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></p>
                </div>
                <p className={styles["item-description"]} dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeadingAndItems;
