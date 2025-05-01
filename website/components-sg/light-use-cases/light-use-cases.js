import React, { Fragment } from "react";
import styles from "../../styles/components-styles/light-use-cases/light-use-cases.module.scss";

const LightUseCases = (props) => {
  return (
    <div className={styles["light-use-cases"]} id={props.id ? props.id : ""}>
      <div className={styles["light-use-cases-content"]}>
        {props.data.heading ? (
          <h2 dangerouslySetInnerHTML={{ __html: props.data.heading }}></h2>
        ) : (
          <h2>
            {props.data.headingLight} <span>{props.data.headingBold}</span>
          </h2>
        )}
        <p
          className={styles["tagline"]}
          dangerouslySetInnerHTML={{ __html: props.data.tagline }}
        ></p>

        <div className={styles["content"]}>
          <div className={styles["content-left"]}>
            <h2
              className={styles["content-header"]}
              dangerouslySetInnerHTML={{
                __html: props.data.contentLeft.heading,
              }}
            ></h2>
            {props.data.contentLeft.descriptionContainsBullets ? (
              <div className={styles["description"]}>
                <p className={styles["left-align-paragraph"]}>
                  {props.data.contentLeft.description}
                </p>
                <div className={styles["bullet-points-container"]}>
                  {props.data.contentLeft.bulletPoints.map((item, index) => {
                    return (
                      <p key={index} className={styles["bullet-point"]}>
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className={styles["description"]}>
                <p>{props.data.contentLeft.description}</p>
              </div>
            )}
          </div>
          <hr />
          <div className={styles["content-right"]}>
            <h2
              className={styles["content-header"]}
              dangerouslySetInnerHTML={{
                __html: props.data.contentRight.heading,
              }}
            ></h2>
            {props.data.contentRight.descriptionContainsBullets ? (
              <div className={styles["description"]}>
                <p className={styles["left-align-paragraph"]}>
                  {props.data.contentRight.description}
                </p>
                <div className={styles["bullet-points-container"]}>
                  {props.data.contentRight.bulletPoints.map((item, index) => {
                    return (
                      <p key={index} className={styles["bullet-point"]}>
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className={styles["description"]}>
                <p>{props.data.contentRight.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightUseCases;
