import React from "react";

import styles from "../../styles/components-styles/text-and-image-blocks/text-and-image-blocks.module.scss";

const TextAndImageBlocks = (props) => {
  return (
    <div
      className={styles["image-text-block-container"]}
      id={props.id ? props.id : null}
    >
      <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }}></h2>
      <p
        className={styles["tagline"]}
        dangerouslySetInnerHTML={{ __html: props.data.tagline }}
      ></p>
      <div className={styles["image-text-block-list"]}>
        {props.data.block1.map(function (object, i) {
          return (
            <div className={styles["image-text-block"]} key={i}>
              <div className={styles["image"]}>
                <img src={object.imageSrc} alt="feature image" />
                {object.heading ? (
                  <h4 dangerouslySetInnerHTML={{ __html: object.heading }}></h4>
                ) : (
                  ""
                )}
              </div>
              <p dangerouslySetInnerHTML={{ __html: object.paragraph }}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextAndImageBlocks;
