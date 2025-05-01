import React from "react";
import styles from "../../styles/components-styles/multi-steps-description/multi-steps-description.module.scss";
import Link from "next/link";

const MultiStepsDescription = (props) => {
  const renderItems = (startIndex, endIndex, isSecondRow) => {
    const items = [];
    for (let index = startIndex; index < endIndex; index++) {
      const item = props.data[index];
      items.push(
        <div className={styles["step-block"]} key={index}>
          <div className={styles["image-section"]}>
            <img src={item.imageSrc} alt={item.description} />
          </div>
          <div
            className={styles["step-block-text-content"]}
            style={{
              margin: "auto",
              width: "80%",
            }}
          >
            <h4
              style={{
                marginLeft: props.noDesc ? "0" : "25px",
              }}
              dangerouslySetInnerHTML={{ __html: item.header }}
            />
            <div
              style={{
                width: "75%",
              }}
              className={styles["description"]}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </div>
      );
      if (index < endIndex - 1) {
        items.push(
          <div className={styles["step-arrow"]} key={`arrow-${index}`}>
            <img src="/images/icons/right-arrow.svg" alt="arrow-right" />
          </div>
        );
      }
    }
    return items;
  };
  return (
    <div className={styles["multi-steps-description"]}>
      <div className={styles["wrapper"]}>
        <div
          className={styles["get-started"]}
          style={{
            width: props.maxWidth ? "100%" : "auto",
          }}
        >
          <div
            className={styles["get-started-steps"]}
            style={{
              position: "relative",
            }}
          >
            <div
              className={styles["dummy-div-border-container"]}
              style={{
                width: "80%",
                height: "63%",
                position: "absolute",
                border: "4px dashed #CCCCCC",
                borderLeft: "none",
                top: "14%",
                right: "3%",
                borderRadius: "50px",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
            ></div>
            <div className={styles["get-started-steps-row"]}>
              {renderItems(0, 3)}
            </div>
            <div
              className={
                styles["step-arrow"] + " " + styles["step-arrow-bridge"]
              }
            >
              <img src="/images/icons/right-arrow.svg" alt="arrow-right" />
            </div>
            <div
              className={
                styles["get-started-steps-row"] + " " + styles["second-row"]
              }
            >
              {renderItems(3, 6)}
            </div>
          </div>
          {props.signup ? (
            <div className={styles["get-started-btn"]}>
              <Link
                href={
                  props.partnerSignup ? urls.PARTNER_SIGNUP : requests.SIGNUP
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MultiStepsDescription;
