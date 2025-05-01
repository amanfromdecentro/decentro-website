import React from "react";
import styles from "../../styles/components-styles/industry-usecases/industry-usecases.module.scss";

const IndustryUseCases = (props) => {
  return (
    <div className={styles["industry-usecases"]}>
      <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }}></h2>
      {props.data.tagline ? (
        <p className={styles["tagline"]}>{props.data.tagline}</p>
      ) : (
        ""
      )}
      <div className={styles["industry-usecases-list"]}>
        {props.data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className={styles["step-block"]}>
                <div className={styles["image"]}>
                  <img
                    src={item.imageSrc}
                    alt={item.altText ? item.altText : "image"}
                  />
                </div>
                {item.title ? (
                  <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                ) : (
                  ""
                )}
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default IndustryUseCases;
