import React from "react";
import styles from "../../styles/components-styles/use-cases/use-cases.module.scss";

const UseCases = (props) => {
  return (
    <div className={styles["use-cases"]} id={props.id ? props.id : ""}>
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
      <div className={styles["use-case-list"]}>
        {props.data.block1.map(function (object, i) {
          return (
            <div className={styles["use-case-block"]} key={i}>
              {/* {object.comingSoon? <label className="coming-soon">Coming Soon</label> : ''} */}
              <div className={styles["head"]}>
                <div className={styles["image"]}>
                  <img src={object.imageSrc} alt="Feature image" />
                </div>
                {object.heading ? (
                  <h4 dangerouslySetInnerHTML={{ __html: object.heading }}></h4>
                ) : (
                  ""
                )}
              </div>
              <p dangerouslySetInnerHTML={{ __html: object.paragraph }}></p>
              {object.comingSoon ? (
                <label className={styles["coming-soon"]}>Coming Soon</label>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      {props.data.block1extra ? (
        <div className={styles["use-case-list"]}>
          {props.data.block1extra.map(function (object, i) {
            return (
              <div className={styles["use-case-block"]} key={i}>
                <div className={styles["head"]}>
                  <div className={styles["image"]}>
                    {object.imageSrc ? (
                      <img src={object.imageSrc} alt="Feature image" />
                    ) : null}
                  </div>
                  {object.heading ? (
                    <h4
                      dangerouslySetInnerHTML={{ __html: object.heading }}
                    ></h4>
                  ) : (
                    ""
                  )}
                </div>
                <p dangerouslySetInnerHTML={{ __html: object.paragraph }}></p>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {props.data.showOthers ? (
        <div className={styles["more-use-cases"]}>
          <p dangerouslySetInnerHTML={{ __html: props.data.tagline2 }}></p>
          <div className={styles["more-use-cases-list"]}>
            {props.data.block2.map(function (object, i) {
              return (
                <div className={styles["more-use-cases-block"]} key={i}>
                  <img src={object.imageSrc} alt="Feature image" />
                  <label
                    dangerouslySetInnerHTML={{ __html: object.label }}
                  ></label>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      {props.data.showButton && (
        <a
          className={styles["explore-docs-btn"]}
          href={props.data.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.data.buttonText}
        </a>
      )}
      {props.data.examples ? (
        <div className={styles["examples-block"]}>
          <h2
            dangerouslySetInnerHTML={{ __html: props.data.examplesHeader }}
          ></h2>
          <div className={styles["examples-block-list"]}>
            {props.data.examplesList.map((item, index) => {
              return (
                <div className={styles["examples-unit-block"]} key={index}>
                  <div className={styles["head"]}>
                    <div className={styles["image"]}>
                      {item.imageSrc ? (
                        <img src={item.imageSrc} alt="Application Image" />
                      ) : null}
                    </div>
                  </div>
                  <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UseCases;
