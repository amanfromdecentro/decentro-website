import Image from "next/image";
import React from "react";

import styles from "../../styles/components-styles/heading-and-descriptive-image/heading-and-descriptive-image.module.scss";

const HeadingAndDescriptiveImage = (props) => {
  return (
    <div className={styles["heading-and-descriptive-image"]}>
      <div className={styles["wrapper"]}>
        {props.data.headingFormatted ? (
          <h2
            dangerouslySetInnerHTML={{ __html: props.data.headingFormatted }}
          />
        ) : (
          <h2>
            <span>{props.data.headingBold}</span>&nbsp;{props.data.headingLight}
          </h2>
        )}
        {props.data.tagline && (
          <p className={styles["tagline"]}>{props.data.tagline}</p>
        )}

        <div className={styles["image-container"]}>
          <Image
            src={props.data.imageSrc}
            alt={props.data.altText}
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default HeadingAndDescriptiveImage;
