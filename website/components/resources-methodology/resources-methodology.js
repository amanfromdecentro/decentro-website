import Link from "next/link";
import styles from "../../styles/components-styles/resources-methodology/resources-methodology.module.scss";
import requests from "../../requests";
import urls from "../../urls";

const ResourcesMethodology = (props) => {
  return (
    <div
      className={styles["get-started"]}
      style={{
        width: props.maxWidth ? "90%" : "auto",
      }}
    >
      <div className={styles["get-started-steps"]}>
        {props.data.map((item, index) => {
          return (
            <>
              <div className={styles["step-block"]} key={index}>
                <div className={styles["image-section"]}>
                  <img src={item.imageSrc} alt="icon" />
                </div>
                <div className="step-block-text-content">
                  <h4
                    style={{
                      marginLeft: props.noDesc ? "0" : "25px",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.header }}
                  >
                    {/* {item.header} */}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
              {index != props.data.length - 1 ? (
                <div className={styles["step-arrow"]}>
                  <img src="/images/icons/right-arrow.svg" alt="arrow-right" />
                </div>
              ) : null}
            </>
          );
        })}
      </div>
      {props?.partnerSignup && (
        <div className={styles["get-started-btn"]}>
          <Link
            href={props.partnerSignup ? urls.PARTNER_SIGNUP : requests.SIGNUP}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
};

export default ResourcesMethodology;
