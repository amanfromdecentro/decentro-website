import Link from "next/link";
import styles from "../../styles/components-styles/resources-methodology-multiple-rows/resources-methodology-multiple-rows.module.scss";
import requests from "../../requests";
import urls from "../../urls";

const ResourcesMethodologyMultipleRows = (props) => {
  const renderItems = (startIndex, endIndex, isSecondRow) => {
    const items = [];
    for (let index = startIndex; index < endIndex; index++) {
      const item = props.data[index];
      items.push(
        <div className={styles["step-block"]} key={index}>
          <div className={styles["image-section"]}>
            <img src={item.imageSrc} alt={item.description} />
          </div>
          <div className="step-block-text-content">
            <h4
              style={{
                marginLeft: props.noDesc ? "0" : "25px",
              }}
            >
              {item.header}
            </h4>
            <p dangerouslySetInnerHTML={{ __html: item.description }} />
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
    <div
      className={styles["get-started"]}
      style={{
        width: props.maxWidth ? "90%" : "auto",
      }}
    >
      <div className={styles["get-started-steps"]}>
        <div className={styles["get-started-steps-row"]}>
          {renderItems(0, 2)}
        </div>
        <div
          className={styles["step-arrow"] + " " + styles["step-arrow-bridge"]}
        >
          <img src="/images/icons/right-arrow.svg" alt="arrow-right" />
        </div>
        <div
          className={
            styles["get-started-steps-row"] + " " + styles["second-row"]
          }
        >
          {renderItems(2, 4)}
        </div>
        {/* <div
          className={
            styles["step-arrow"] +
            " " +
            styles["step-arrow-bridge"] +
            " " +
            styles["second-arrow"]
          }
        >
          <img src="/images/icons/right-arrow.svg" alt="arrow-right" />
        </div>
        <div className={styles["get-started-steps-row"]}>
          {renderItems(4, props.data.length, true)}
        </div> */}
      </div>
      {props.signup ? (
        <div className={styles["get-started-btn"]}>
          <Link
            href={props.partnerSignup ? urls.PARTNER_SIGNUP : requests.SIGNUP}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ResourcesMethodologyMultipleRows;
