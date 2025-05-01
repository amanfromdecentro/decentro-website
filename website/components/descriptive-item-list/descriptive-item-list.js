// Styles Imports
import React, { useEffect, useState } from "react";
import styles from "../../styles/components-styles/descriptive-item-list/descriptive-item-list.module.scss";
import Image from "next/image";

const DescriptiveItemList = (props) => {
  return (
    <div className={`${styles["why-decentro"]} ${props.secondSection ? styles["greyBG"] : ""}`} id={props.id ? props.id : null}>
      <img
        className={`${styles["banner-bg"]}`}
        src="/images/bg-banners/blue-bg-why-decentro.svg"
        alt="bg-banner"
      />
      <img
        className={`${styles["banner-bg"]} ${styles["bg-curves"]}`}
        src="/images/bg-banners/lines-bg-why-decentro.svg"
        alt="bg-banner"
      />
      <h2
        dangerouslySetInnerHTML={{ __html: props.data.heading }}
        className={
          props.data.headingStyleThemeBlue ? styles["blue-header"] : null
        }
      ></h2>
      <p className={styles["tagline"]} dangerouslySetInnerHTML={{ __html: props.data.tagline }}></p>
      <div className={styles["why-decentro-steps"]}>
        {props.data.items.map((item, index) => {
          return (
            <div className={styles["item"]} key={index}>
              <div className={styles["item-image-title-container"]}>
                <div className={styles["item-image"]}>
                  <Image
                    src={item.imageSrc}
                    alt="header-icon"
                    width={70}
                    height={70}
                  />
                  {/* <img src={item.imageSrc} alt="header-icon" /> */}
                </div>
                <p
                  className={styles["item-title"]}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></p>
              </div>
              <p className={styles["item-description"]}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DescriptiveItemList;
