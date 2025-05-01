import Image from "next/image";
import React from "react";

import styles from "../../styles/components-styles/feature-descriptive-text-block/feature-descriptive-text-block.module.scss";
import ReactMarkdown from "react-markdown";

const FeatureDescriptiveTextBlock = (props) => {
  return (
    <div className={styles["feature-descriptive-text-block"]}>
      <div className={styles["wrapper"]}>
        {props?.data?.headingFormatted ? (
          <h2
            dangerouslySetInnerHTML={{ __html: props.data.headingFormatted }}
          />
        ) : (
          <h2>
            {props.data.headingLight}&nbsp;<span>{props.data.headingBold}</span>
          </h2>
        )}
        <p className={styles["description"]}>
          <ReactMarkdown>{props?.data?.description || ""}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default FeatureDescriptiveTextBlock;
